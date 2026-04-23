import React, { useEffect, useState, useRef, useMemo } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import "./blogpost.css";

import axios from "axios";
import moment from "moment";
import DOMPurify from "dompurify";
import parse, { domToReact } from "html-react-parser";
import BASE_URL from "../../../pages/Config/config";

const BlogPost = () => {
  const { slugOrId } = useParams();
  const navigate = useNavigate();

  const [blog, setBlog] = useState(null);
  const [toc, setToc] = useState([]);
  const [categories, setCategories] = useState([]);
  const [blogs, setBlogs] = useState([]);
  const [showAll, setShowAll] = useState(false);

  const contentRef = useRef(null);

  // ---------------- FETCH BLOG ----------------
  useEffect(() => {
    if (!slugOrId) return;

    const fetchBlog = async () => {
      try {
        const { data } = await axios.get(
          `${BASE_URL}/api/v1/blog/get-blog/${slugOrId}`,
        );
        if (data?.success) setBlog(data.blog);
      } catch (err) {}
    };

    fetchBlog();
  }, [slugOrId]);

  // ---------------- FETCH BLOG LIST ----------------
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const { data } = await axios.get(`${BASE_URL}/api/v1/blog/all-blog`);
        if (data?.success) {
          setBlogs(data.blogs.slice().reverse());
        }
      } catch (err) {}
    };
    fetchBlogs();
  }, []);

  // ---------------- FETCH CATEGORIES ----------------
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const { data } = await axios.get(
          `${BASE_URL}/api/v1/category/all-categories`,
        );
        if (data?.success) setCategories(data.category);
      } catch (err) {}
    };
    fetchCategories();
  }, []);

  // ---------------- PARSE CONTENT + TOC ----------------
  const [parsedContent, tocData] = useMemo(() => {
    if (!blog?.description) return [null, []];

    const headings = [];
    let index = 0;

    const content = parse(DOMPurify.sanitize(blog.description), {
      replace: (domNode) => {
        if (domNode.name && /^h[1-6]$/.test(domNode.name)) {
          const id = `heading-${index}`;

          const text =
            domNode.children?.map((c) => c.data || "").join("") ||
            `Heading ${index + 1}`;

          headings.push({ id, text });

          index++;

          return React.createElement(
            domNode.name,
            { id },
            domToReact(domNode.children),
          );
        }
      },
    });

    return [content, headings];
  }, [blog?.description]);

  useEffect(() => {
    setToc(tocData);
  }, [tocData]);

  const visibleCategories = showAll ? categories : categories.slice(0, 4);

  // ---------------- LOADING ----------------
  if (!blog) {
    return (
      <div className="container mt-5">
        <Skeleton height={40} width="60%" />
        <Skeleton height={200} />
        <Skeleton count={6} />
      </div>
    );
  }

  const imageUrl =
    Array.isArray(blog.thumbnail) && blog.thumbnail.length > 0
      ? blog.thumbnail[0]
      : blog.image || "/imgthumb.png";

  // ---------------- SCROLL FUNCTION ----------------
  const handleScroll = (id) => {
    const container = contentRef.current;
    const element = document.getElementById(id);

    if (container && element) {
      const containerTop = container.getBoundingClientRect().top;
      const elementTop = element.getBoundingClientRect().top;

      const offset = elementTop - containerTop + container.scrollTop;

      container.scrollTo({
        top: offset,
        behavior: "smooth",
      });
    }
  };

  // ---------------- JSX ----------------
  return (
    <section className="bg-[#FFFFFF] py-24 px-6 md:px-20">
      <div className="row h-100">
        {/* MAIN */}
        <div className="blog-main-section col-lg-9 d-flex flex-column rounded-md">
          <h3 className="mb-3 tittle">{blog.title}</h3>

          <img src={imageUrl} className="img-fluid mb-4" alt="Blog" />

          <p className="text-muted mb-3">
            {moment(blog.createdAt).format("LL")}
          </p>

          {/* CONTENT */}
          <div
            ref={contentRef}
            className="parsed-content max-h-[1000px] overflow-y-auto pr-2 space-y-3 text-gray-700 leading-relaxed prose prose-lg max-w-none rounded"
          >
            {parsedContent}
          </div>

          <p className="mt-4 text-muted">
            <strong>Author : {blog?.user?.username || "Unknown Author"}</strong>
          </p>
        </div>

        {/* SIDEBAR */}
        <div className="side-blogcontainer col-lg-3 d-none d-lg-block">
          {/* TOC */}
          {toc.length > 0 && (
            <div className="bg-white p-4 rounded-md mb-6 w-[333px]">
              <h3 className="font-semibold text-lg mb-3 border-b pb-2">
                Table of Contents
              </h3>

              <div className="flex flex-col gap-2">
                {toc.map((item, index) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      handleScroll(item.id);
                    }}
                    className="px-3 py-2 rounded-md text-sm bg-blue-50 hover:bg-blue-100"
                  >
                    {index + 1}. {item.text}
                  </a>
                ))}
              </div>
            </div>
          )}

          {/* CATEGORY */}
          <div className="bg-white p-[16px] w-[333px] rounded-md mb-2">
            <h3 className="font-semibold text-lg mb-3">Category</h3>

            <div className="flex flex-wrap gap-2">
              {visibleCategories.map((cat) => (
                <span
                  key={cat._id}
                  // onClick={() => navigate(`/blogpost/${blog.slug || blog._id}`)}
                  onClick={() => navigate(`/category/${cat.slug}`)}
                  className="px-3 py-1 text-xs bg-blue-50 text-blue-600 rounded-full cursor-pointer"
                >
                  {cat.title}
                </span>
              ))}

              {categories.length > 5 && (
                <button
                  onClick={() => setShowAll(!showAll)}
                  className="text-xs text-blue-500 mt-2"
                >
                  {showAll ? "Show Less" : "Show All"}
                </button>
              )}
            </div>
          </div>

          {/* RECENT POSTS */}
          <div className="bg-white p-[16px] w-[333px] rounded-md">
            <h3 className="font-semibold text-lg mb-3">Recent Posts</h3>

            <ul className="space-y-4">
              {blogs.slice(0, 4).map((b, i) => (
                <li key={i} className="flex gap-3">
                  <img
                    src={b.thumbnail}
                    className="w-16 h-14 object-cover rounded"
                    alt=""
                  />
                  <div>
                    <p
                      onClick={() => navigate(`/blogpost/${b.slug || b._id}`)}
                      className="text-sm cursor-pointer"
                    >
                      {b.title}
                    </p>
                    <span className="text-xs text-gray-500">
                      {moment(b.createdAt).format("LL")}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogPost;
