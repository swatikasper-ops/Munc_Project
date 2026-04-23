import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import moment from "moment";
import { Helmet } from "react-helmet-async";
import BASE_URL from "../Config/config";
import DOMPurify from "dompurify";
import parse from "html-react-parser";

const SingleBlog = () => {
  const { slugOrId } = useParams();
  const navigate = useNavigate();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchBlog = async () => {
    if (!slugOrId) return;
    
    try {
      setLoading(true);
      setError(null);
      console.log("Fetching blog with identifier:", slugOrId);
      
      const { data } = await axios.get(
        `${BASE_URL}/api/v1/blog/get-blog/${slugOrId}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      
      console.log("Fetched blog data:", data);
      
      if (data?.success) {
        setBlog(data.blog);
      } else {
        setError("Blog not found");
      }
    } catch (err) {
      console.error("Error fetching blog:", err);
      setError("Failed to load blog");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBlog();
  }, [slugOrId]); // Re-fetch when slugOrId changes

  if (loading) {
    return (
      <div className="container py-5">
        <div className="text-center">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <p>Loading blog post...</p>
        </div>
      </div>
    );
  }

  if (error || !blog) {
    return (
      <div className="container py-5">
        <div className="text-center">
          <h3>{error || "Blog not found"}</h3>
          <button 
            className="btn btn-primary mt-3"
            onClick={() => navigate("/blogs")}
          >
            Back to Blogs
          </button>
        </div>
      </div>
    );
  }

  // Get thumbnail image
  const thumbnailUrl = blog.thumbnail 
    ? (Array.isArray(blog.thumbnail) && blog.thumbnail.length > 0 
        ? blog.thumbnail[0] 
        : blog.thumbnail)
    : "/imgthumb.png";

  // Sanitize HTML content
  const sanitizedHTML = DOMPurify.sanitize(blog.description, {
    ALLOWED_TAGS: ['p', 'br', 'strong', 'em', 'u', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 
                   'ul', 'ol', 'li', 'a', 'img', 'iframe', 'video', 'source', 'div', 'span'],
    ALLOWED_ATTR: ['href', 'src', 'alt', 'title', 'width', 'height', 'frameborder', 
                   'allow', 'allowfullscreen', 'controls', 'autoplay', 'loop', 'muted']
  });

  return (
    <>
      <Helmet>
        <title>{blog.title} | Kasper Infotech</title>
        <meta name="description" content={blog.description?.substring(0, 160).replace(/<[^>]*>/g, '')} />
        <meta property="og:title" content={blog.title} />
        <meta property="og:description" content={blog.description?.substring(0, 160).replace(/<[^>]*>/g, '')} />
        <meta property="og:image" content={thumbnailUrl} />
      </Helmet>

      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            {/* Blog Header */}
            <h1 className="display-5 fw-bold mb-4">{blog.title}</h1>
            
            {/* Blog Meta */}
            <div className="d-flex gap-3 mb-4 text-muted">
              <span>
                By {blog.user?.username || "Unknown Author"}
              </span>
              <span>
                {moment(blog.createdAt).format("MMMM DD, YYYY")}
              </span>
              {blog.updatedAt !== blog.createdAt && (
                <span>
                  Updated: {moment(blog.updatedAt).format("MMMM DD, YYYY")}
                </span>
              )}
            </div>

            {/* Category Badge */}
            {blog.category && (
              <div className="mb-3">
                <span className="badge bg-primary">
                  {blog.category.title || blog.category}
                </span>
              </div>
            )}

            {/* Featured Image */}
            <img 
              src={thumbnailUrl}
              alt={blog.title}
              className="img-fluid rounded-3 mb-4 w-100"
              style={{ maxHeight: "400px", objectFit: "cover" }}
              onError={(e) => {
                e.target.src = "/imgthumb.png";
              }}
            />

            {/* Blog Content */}
            <div className="blog-content mt-4">
              <div className="parsed-content">
                {parse(sanitizedHTML)}
              </div>
            </div>

            {/* Back Button */}
            <div className="mt-5 pt-3">
              <button 
                className="btn btn-outline-primary"
                onClick={() => navigate(-1)}
              >
                ← Back
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Add CSS for video responsiveness */}
      <style jsx="true">{`
        .parsed-content iframe,
        .parsed-content video {
          width: 100%;
          max-width: 100%;
          height: auto;
          min-height: 315px;
          border-radius: 8px;
        }
        .parsed-content img {
          max-width: 100%;
          height: auto;
          border-radius: 8px;
        }
        .blog-content {
          line-height: 1.8;
        }
      `}</style>
    </>
  );
};

export default SingleBlog;