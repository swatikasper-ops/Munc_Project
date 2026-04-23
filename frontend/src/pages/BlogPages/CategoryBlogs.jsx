
import React, { useEffect, useState } from "react";

import axios from "axios";
import moment from "moment";
import DOMPurify from 'dompurify';
import parse from 'html-react-parser';
import "./CategoryBlogs.css"; 
import { useParams, useNavigate, Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import BASE_URL from "../Config/config";

const CategoryBlogs = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [blogs, setBlogs] = useState([]);
  const [category, setCategory] = useState(null);
  const [loading, setLoading] = useState(true);
  console.log(blogs)

  useEffect(() => {
    const fetchCategoryBlogs = async () => {
      try {
        setLoading(true);
        const { data } = await axios.get(
          `${BASE_URL}/api/v1/category/category/${slug}`
        );
        
        if (data?.success) {
          setBlogs(data.blogs || []);
          if (data.blogs && data.blogs.length > 0) {
            setCategory(data.blogs[0]?.category);
          }
        } else {
          setBlogs([]);
        }
      } catch (error) {
        console.error("Error fetching category blogs:", error);
        setBlogs([]);
      } finally {
        setLoading(false);
      }
    };

    if (slug) {
      fetchCategoryBlogs();
    }
  }, [slug]);

  if (loading) {
    return (
      <div className="container mt-5">
        <h3>Loading category blogs...</h3>
      </div>
    );
  }

  return (
    <section className="bg-[#FFFFFF] py-24 px-6 md:px-20">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold mb-8">
          {category?.title ? `${category.title} Blogs` : "Category Blogs"}
        </h1>
        
        {blogs.length === 0 ? (
          <div className="text-center py-10">
            <h3 className="text-xl text-gray-600">No blogs found in this category</h3>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogs.map((blog) => (
              <div 
                key={blog._id} 
                className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer hover:shadow-lg transition-shadow"
                onClick={() => navigate(`/blogpost/${blog.slug || blog._id}`)}
              >
                <img 
                  src={blog.thumbnail?.[0] || blog.image || "/imgthumb.png"} 
                  alt={blog.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h2 className="text-xl font-semibold mb-2 line-clamp-2">
                    {blog.title}
                  </h2>
                  <p className="text-gray-600 text-sm mb-2">
                    {moment(blog.createdAt).format("LL")}
                  </p>
                  <p className="text-gray-700 line-clamp-3">
                    {blog.description?.replace(/<[^>]*>/g, '').substring(0, 150)}...
                  </p>
                  <p className="text-blue-600 mt-3 text-sm font-medium">
                    Read More →
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default CategoryBlogs;