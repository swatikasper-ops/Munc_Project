import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import moment from "moment";
import "./userblog.css";
import { useBlogDelete } from "../../BlogContext/BlogDeleteContext";
import BASE_URL from "../Config/config";
import BlogCard from "../../components/Blogs/AdminBoard/BlogCard";
import { toast } from "react-hot-toast";

const UserBlogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [deleteMessage, setDeleteMessage] = useState("");
  const [loading, setLoading] = useState(true);
  const { deletedBlogId } = useBlogDelete();

  const getUserBlogs = useCallback(async () => {
    const id = localStorage.getItem("userId");
    
    console.log("Fetching blogs for user ID:", id);

    if (!id) {
      console.log("User ID not found. Please log in.");
      setLoading(false);
      return;
    }

    try {
      setLoading(true);
      const { data } = await axios.get(
        `${BASE_URL}/api/v1/blog/user-blog/${id}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      console.log("API Response:", data);

      if (data?.success) {
        if (data?.userBlog && data?.userBlog.blogs) {
          const blogsData = [...data.userBlog.blogs].reverse();
          console.log("Blogs fetched:", blogsData.length, blogsData);
          setBlogs(blogsData);
        } else {
          console.log("No blogs found in response");
          setBlogs([]);
        }
      } else {
        console.log("API success false:", data);
        setBlogs([]);
      }
    } catch (error) {
      console.error("Error fetching blogs:", error);
      toast.error("Failed to fetch blogs");
      setBlogs([]);
    } finally {
      setLoading(false);
    }
  }, []);

  // Initial load
  useEffect(() => {
    getUserBlogs();
  }, [getUserBlogs]);

  // Handle deletion from context
  useEffect(() => {
    if (deletedBlogId) {
      setBlogs((prevBlogs) =>
        prevBlogs.filter((blog) => blog._id !== deletedBlogId)
      );
      setDeleteMessage("Blog deleted successfully!");
      setTimeout(() => setDeleteMessage(""), 3000);
    }
  }, [deletedBlogId]);

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this blog?")) {
      return;
    }
    
    try {
      const { data } = await axios.delete(
        `${BASE_URL}/api/v1/blog/delete-blog/${id}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      
      if (data?.success) {
        setBlogs((prevBlogs) => prevBlogs.filter((blog) => blog._id !== id));
        setDeleteMessage("Blog deleted successfully!");
        setTimeout(() => setDeleteMessage(""), 3000);
        toast.success("Blog deleted successfully!");
      }
    } catch (error) {
      console.error("Error deleting blog:", error);
      toast.error("Error deleting blog");
    }
  };

  if (loading) {
    return (
      <div className="userblogs-wrapper">
        <div className="title-bar" style={{ textAlign: "center" }}>
          <strong style={{ fontSize: "20px" }}>My Blogs</strong>
        </div>
        <div className="userblogs-container">
          <div className="blogs-grid">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="bg-white rounded-2xl shadow-md overflow-hidden p-4">
                <div className="h-48 bg-gray-200 rounded-2xl animate-pulse"></div>
                <div className="py-2">
                  <div className="h-4 bg-gray-200 rounded w-3/4 mb-2 animate-pulse"></div>
                  <div className="h-3 bg-gray-200 rounded w-full animate-pulse"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="userblogs-wrapper">
      <div className="title-bar" style={{ textAlign: "center" }}>
        <strong style={{ fontSize: "20px", textAlign: "center" }}>My Blogs</strong>
      </div>

      {deleteMessage && (
        <div
          style={{
            backgroundColor: "#4CAF50",
            color: "white",
            padding: "10px",
            textAlign: "center",
            borderRadius: "5px",
            margin: "10px auto",
            width: "40%",
            maxWidth: "300px",
            position: "relative",
            zIndex: 1,
          }}
        >
          {deleteMessage}
        </div>
      )}

      <div className="userblogs-container">
        {blogs && blogs.length > 0 ? (
          <div className="blogs-grid">
            {blogs.map((blog) => (
              <BlogCard
                key={blog._id}
                id={blog._id}
                slug={blog.slug}
                isUser={true}
                title={blog.title}
                description={blog.description}
                image={blog.image}
                thumbnail={blog?.thumbnail}
                username={blog?.user?.username || "unknown"}
                handleDelete={() => handleDelete(blog._id)}
                time={moment(blog.createdAt).format("ll")}
                previewOnly={true}
              />
            ))}
          </div>
        ) : (
          <div className="no-blogs-text">
            You haven't created a blog yet.
            <br />
            <button
              onClick={() => (window.location.href = "/adminsidebar/addblog")}
              style={{
                marginTop: "10px",
                padding: "8px 16px",
                backgroundColor: "#007AFF",
                color: "white",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              Create Your First Blog
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserBlogs;