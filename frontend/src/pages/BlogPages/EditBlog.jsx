// // EditBlog.js - Updated version
// import React, { useEffect, useRef, useState } from "react";
// import { Container, Row, Col, Form, Button } from "react-bootstrap";
// import { useNavigate, useParams } from "react-router-dom";
// import { toast } from "react-hot-toast";
// import axios from "axios";
// import JoditEditor from "jodit-react";
// import BASE_URL from "../Config/config";
// import { Helmet } from "react-helmet-async";

// const EditBlog = () => {
//   const editor = useRef(null);
//   const navigate = useNavigate();
//   const { id } = useParams(); // This could be either ID or slug
//   const userId = localStorage.getItem("userId");
//   const [loading, setLoading] = useState(true);
//   const [submitting, setSubmitting] = useState(false);
//   const [blogId, setBlogId] = useState(null); // Store actual ID for update

//   const [formData, setFormData] = useState({
//     title: "",
//     category: "",
//     description: "",
//   });

//   const [categories, setCategories] = useState([]);
//   const [thumbnail, setThumbnail] = useState(null);
//   const [existingThumbnail, setExistingThumbnail] = useState("");
//   const [previewImage, setPreviewImage] = useState("");

//   const joditConfig = {
//     removeButtons: ["chat"],
//     statusbar: false,
//   };

//   // Fetch categories
//   useEffect(() => {
//     const fetchCategories = async () => {
//       try {
//         const { data } = await axios.get(
//           `${BASE_URL}/api/v1/category/all-categories`,
//           {
//             headers: {
//               Authorization: `Bearer ${localStorage.getItem("token")}`,
//             },
//           }
//         );
//         if (data?.success) {
//           setCategories(data?.category);
//         }
//       } catch (error) {
//         console.error("Error fetching categories:", error);
//       }
//     };
//     fetchCategories();
//   }, []);

//   // Fetch blog data for editing
//   useEffect(() => {
//     const fetchBlogData = async () => {
//       if (!id) {
//         toast.error("No blog ID provided");
//         navigate("/adminsidebar/my-blogs");
//         return;
//       }

//       try {
//         console.log("Fetching blog with identifier:", id);
//         const { data } = await axios.get(
//           `${BASE_URL}/api/v1/blog/get-blog/${id}`,
//           {
//             headers: {
//               Authorization: `Bearer ${localStorage.getItem("token")}`,
//             },
//           }
//         );

//         console.log("Fetched blog data:", data);

//         if (data?.success) {
//           const blog = data?.blog;
          
//           // Store the actual blog ID for update
//           setBlogId(blog._id);
          
//           setFormData({
//             title: blog.title || "",
//             category: blog.category?._id || blog.category || "",
//             description: blog.description || "",
//           });
          
//           // Handle thumbnail
//           if (blog.thumbnail) {
//             let thumbnailUrl = "";
//             if (Array.isArray(blog.thumbnail) && blog.thumbnail.length > 0) {
//               thumbnailUrl = blog.thumbnail[0];
//             } else if (typeof blog.thumbnail === 'string') {
//               thumbnailUrl = blog.thumbnail;
//             }
//             setExistingThumbnail(thumbnailUrl);
//             setPreviewImage(thumbnailUrl);
//           }
//         } else {
//           toast.error("Failed to load blog data");
//           navigate("/adminsidebar/my-blogs");
//         }
//       } catch (error) {
//         console.error("Error fetching blog:", error);
//         toast.error("Error loading blog data");
//         navigate("/adminsidebar/my-blogs");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchBlogData();
//   }, [id, navigate]);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const contentFieldChanged = (data) => {
//     setFormData({ ...formData, description: data });
//   };

//   const handleImageUpload = (e) => {
//     const file = e.target.files[0];

//     if (!file) return;

//     const validTypes = ["image/jpeg", "image/png", "image/jpg"];

//     if (!validTypes.includes(file.type)) {
//       toast.error("Only JPG and PNG image files are allowed.");
//       e.target.value = null;
//       return;
//     }

//     if (file.size > 2 * 1024 * 1024) {
//       toast.error("File size must be less than 2MB.");
//       e.target.value = null;
//       return;
//     }

//     setThumbnail(file);
//     const previewURL = URL.createObjectURL(file);
//     setPreviewImage(previewURL);
//     setExistingThumbnail("");
//   };

//   const handleCategoryChange = (e) => {
//     setFormData({ ...formData, category: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setSubmitting(true);
    
//     if (!formData.title || !formData.category || !formData.description) {
//       toast.error("All fields are required!");
//       setSubmitting(false);
//       return;
//     }

//     // Use the actual blog ID for update, not the slug
//     const updateId = blogId || id;
    
//     const formdataToSend = new FormData();
//     formdataToSend.append("title", formData.title);
//     formdataToSend.append("category", formData.category);
//     formdataToSend.append("description", formData.description);
//     formdataToSend.append("user", userId);

//     // Handle thumbnail - send either new file or keep existing
//     if (thumbnail) {
//       formdataToSend.append("thumbnail", thumbnail);
//     } else if (existingThumbnail) {
//       // Send the existing thumbnail URL as a string
//       formdataToSend.append("thumbnail", existingThumbnail);
//     }

//     try {
//       console.log("Updating blog with ID:", updateId);
//       console.log("Form data being sent:", {
//         title: formData.title,
//         category: formData.category,
//         hasThumbnail: !!thumbnail,
//         existingThumbnail: existingThumbnail
//       });

//       const { data } = await axios.put(
//         `${BASE_URL}/api/v1/blog/update-blog/${updateId}`,
//         formdataToSend,
//         {
//           headers: {
//             "Content-Type": "multipart/form-data",
//             Authorization: `Bearer ${localStorage.getItem("token")}`,
//           },
//         }
//       );

//       console.log("Update response:", data);

//       if (data?.success) {
//         toast.success("Blog updated successfully!");
//         // Navigate back to my blogs
//         navigate("/adminsidebar/my-blogs");
//       } else {
//         toast.error(data?.message || "Error updating blog");
//       }
//     } catch (error) {
//       console.error("Update error:", error);
//       toast.error(error.response?.data?.message || "Error updating blog");
//     } finally {
//       setSubmitting(false);
//     }
//   };

//   if (!userId) {
//     return (
//       <Container className="text-center mt-5">
//         <h4>Please login to edit a blog.</h4>
//       </Container>
//     );
//   }

//   if (loading) {
//     return (
//       <Container className="text-center mt-5">
//         <h4>Loading blog data...</h4>
//       </Container>
//     );
//   }

//   return (
//     <>
//       <Helmet>
//         <title>Edit Blog | Kasper Infotech</title>
//       </Helmet>

//       <Container className="py-5">
//         <Row className="justify-content-center">
//           <Col lg={8}>
//             <div className="border p-4 rounded shadow-sm bg-light">
//               <h2 className="text-center mb-4">Edit Blog Post</h2>
//               <Form onSubmit={handleSubmit}>
//                 <Form.Group className="mb-3">
//                   <Form.Label>Blog Title</Form.Label>
//                   <Form.Control
//                     type="text"
//                     name="title"
//                     placeholder="Enter blog title"
//                     value={formData.title}
//                     onChange={handleChange}
//                     required
//                   />
//                 </Form.Group>

//                 <Form.Group className="mb-3">
//                   <Form.Label>Select Category</Form.Label>
//                   <Form.Select
//                     name="category"
//                     value={formData.category}
//                     onChange={handleCategoryChange}
//                     required
//                   >
//                     <option value="">-- Select --</option>
//                     {categories.map((item) => (
//                       <option key={item._id} value={item._id}>
//                         {item.title}
//                       </option>
//                     ))}
//                   </Form.Select>
//                 </Form.Group>

//                 <Form.Group className="mb-3">
//                   <Form.Label>Description</Form.Label>
//                   <div className="border rounded bg-white">
//                     <JoditEditor
//                       ref={editor}
//                       value={formData.description}
//                       config={joditConfig}
//                       onChange={contentFieldChanged}
//                     />
//                   </div>
//                 </Form.Group>

//                 <Form.Group className="mb-3">
//                   <Form.Label>Thumbnail Image</Form.Label>
//                   <Form.Control
//                     type="file"
//                     accept="image/*"
//                     onChange={handleImageUpload}
//                   />
//                   {previewImage && (
//                     <div className="mt-3">
//                       <img
//                         src={previewImage}
//                         alt="Preview"
//                         style={{
//                           width: "200px",
//                           height: "150px",
//                           objectFit: "cover",
//                           borderRadius: "8px",
//                         }}
//                       />
//                     </div>
//                   )}
//                   <small className="text-muted">
//                     Leave empty to keep current image
//                   </small>
//                 </Form.Group>

//                 <div className="text-center mt-4">
//                   <Button 
//                     variant="primary" 
//                     type="submit" 
//                     size="lg"
//                     disabled={submitting}
//                   >
//                     {submitting ? "Updating..." : "Update Blog"}
//                   </Button>
//                   <Button 
//                     variant="secondary" 
//                     size="lg" 
//                     className="ms-2"
//                     onClick={() => navigate("/adminsidebar/my-blogs")}
//                   >
//                     Cancel
//                   </Button>
//                 </div>
//               </Form>
//             </div>
//           </Col>
//         </Row>
//       </Container>
//     </>
//   );
// };

// export default EditBlog;