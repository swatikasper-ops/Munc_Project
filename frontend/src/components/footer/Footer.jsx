import React, { useState } from "react";
import { Link } from "react-router";
import { FaMapMarkerAlt } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { FaPhone } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { CiInstagram } from "react-icons/ci";
import logo from "../../assets/HomeSection/logo.svg";

const Footer = () => {
  const [showProducts, setShowProducts] = useState(false);
  return (
    <footer className="bg-white border-t-2 border-gray-200">
      <div className="max-w-7xl mx-auto px-4 py-10">
        {/* Top Grid Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-[2.2fr_1fr_1fr_1fr] gap-x-16 gap-y-10">
          <div className="flex flex-col items-start justify-start text-left">
            <img
              src={logo}
              alt="MUN-C Logo"
              className="h-8 sm:h-10 md:h-8 mb-4"
            />
            <p
              className=""
              style={{
                fontWeight: 400,
                fontSize: "16px",
                lineHeight: "120%",
                letterSpacing: 0,
                color: "rgba(100, 116, 139, 1)",
              }}
            >
              Empowering businesses with intelligent management solutions.
              Transform your workflow and achieve your goals with our
              comprehensive platform.
            </p>
            {/* for contact */}
            <div
              className="text-sm sm:text-base  space-y-3"
              style={{ color: "rgba(100, 116, 139, 1)" }}
            >
              <li className="flex items-start gap-2">
                <FaMapMarkerAlt
                  size={20}
                  className="mt-1 text-rgba(100, 116, 139, 1)"
                />
                <span style={{ color: "rgba(100, 116, 139, 1)" }}>
                  Kasper Infotech Pvt. Ltd. <br />
                  Office No. 503, Tower C, The iThum Towers, Sector 62, Noida,
                  Uttar Pradesh 201301
                </span>
              </li>
              <li className="flex items-center gap-2">
                <FaPhone size={16} className="text-rgba(100, 116, 139, 1)" />
                <a
                  href="tel:8006236800"
                  className="hover:text-blue-600 no-underline"
                  style={{ color: "rgba(100, 116, 139, 1)" }}
                >
                  +91 8006398800
                </a>
              </li>
              <li className="flex items-center gap-2">
                <IoIosMail size={20} className="text-rgba(100, 116, 139, 1)" />
                <a
                  href="mailto:info@kasperinfotech.com"
                  className="hover:text-blue-600 no-underline"
                  style={{ color: "rgba(100, 116, 139, 1)" }}
                >
                  info@kasperinfotech.com
                </a>
              </li>
            </div>
          </div>

          <div className="flex flex-col items-start justify-start text-left">
            <h3
              className="font-semibold  mb-3 text-base sm:text-lg"
              style={{
                color: "rgba(30, 41, 59, 1)",
                fontWeight: 600,
                fontSize: "16px",
                fontFamily: "Public Sans, sans-serif",
                textDecoration: "underline",
              }}
            >
              Explore Us
            </h3>

            <div
              className="list-none space-y-2 text-sm sm:text-base"
              style={{ color: "rgba(100, 116, 139, 1)" }}
            >
              <li>
                <Link
                  to="/about"
                  className="hover:text-blue-500 no-underline"
                  style={{ color: "rgba(100, 116, 139, 1)" }}
                >
                  About Us
                </Link>
              </li>
              <li>
                <li>
  {/* Toggle Button */}
  <div
    onClick={() => setShowProducts(!showProducts)}
    className="hover:text-blue-500 cursor-pointer"
    style={{ color: "rgba(100, 116, 139, 1)" }}
  >
    Product Details
  </div>

  {/* Dropdown List */}
  {showProducts && (
    <div className="ml-3 mt-2 space-y-2">
      <Link to="/products/inventory-management-system" className="block hover:text-blue-500 no-underline">
        Inventory
      </Link>

      <Link to="/products/human-resource-management-system" className="block hover:text-blue-500 no-underline">
       People
      </Link>

      <Link to="/products/lead-management-system" className="block hover:text-blue-500 no-underline">
        Leads
      </Link>

      <Link to="/products/school-management-system" className="block hover:text-blue-500 no-underline">
       Schools
      </Link>

      <Link to="/products/hotel-management-system" className="block hover:text-blue-500 no-underline">
       Hotels
      </Link>
    </div>
  )}
</li>
              </li>
              <li>
                <Link
                  to="/blogs"
                  className="hover:text-blue-500 no-underline"
                  style={{ color: "rgba(100, 116, 139, 1)" }}
                >
                  Blogs
                </Link>
              </li>
            </div>
          </div>

          <div className="list-none flex flex-col items-start justify-start text-left">
            <h3
              className="font-semibold  mb-3 text-base sm:text-lg"
              style={{
                color: "rgba(30, 41, 59, 1)",
                fontWeight: 600,
                fontSize: "16px",
                fontFamily: "Public Sans, sans-serif",
                textDecoration: "underline",
              }}
            >
              Our Products
            </h3>
            <div className="space-y-2 text-sm sm:text-base text-gray-600">
              <li>
                <Link
                  to="/products/inventory-management-system"
                  className="hover:text-blue-500 no-underline"
                  style={{ color: "rgba(100, 116, 139, 1)" }}
                >
                  Inventory Management
                </Link>
              </li>
              <li>
                <Link
                  to="/products/human-resource-management-system"
                  className="hover:text-blue-500 no-underline"
                  style={{ color: "rgba(100, 116, 139, 1)" }}
                >
                  Human Resource Management
                </Link>
              </li>
              <li>
                <Link
                  to="/products/lead-management-system"
                  className="hover:text-blue-500 no-underline"
                  style={{ color: "rgba(100, 116, 139, 1)" }}
                >
                  Lead Management
                </Link>
              </li>
              <li>
  <Link
  to="/products/school-management-system"
  className="hover:text-blue-500 no-underline flex items-center"
  style={{ color: "rgba(100, 116, 139, 1)" }}
>
  School Management System

  <span
    style={{
      backgroundColor: "#E9A8E6",
      color: "#000",
      fontSize: "10px",
      padding: "5px 6px",
      borderRadius: "6px",
      fontWeight: "500",
      lineHeight: "1",
      marginLeft: "4px",        
      whiteSpace: "nowrap",     // ✅ force single line
    }}
  >
    Coming Soon
  </span>
</Link>
              </li>
              <li>
             
             <Link
  to="/products/hotel-management-system"
  className="hover:text-blue-500 no-underline flex items-center"
  style={{ color: "rgba(100, 116, 139, 1)" }}
>
  Hotel Management

  <span
    style={{
      backgroundColor: "#E9A8E6",
      color: "#000",
      fontSize: "10px",
      padding: "5px 6px",
      borderRadius: "6px",
      fontWeight: "500",
      lineHeight: "1",
      marginLeft: "4px",
      whiteSpace: "nowrap",
    }}
  >
    Coming Soon
  </span>
</Link>
              </li>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start text-left">
            <h3
              className="font-semibold text-gray-800 mb-3 text-base sm:text-lg"
              style={{
                color: "rgba(30, 41, 59, 1)",
                fontWeight: 600,
                fontSize: "16px",
                fontFamily: "Public Sans, sans-serif",
                textDecoration: "underline",
              }}
            >
              Upcoming modules
            </h3>

            <div className="list-none space-y-2 text-sm sm:text-base">
              <li style={{ color: "rgba(100, 116, 139, 1)" }}>
                Finance and accounting
              </li>
              <li style={{ color: "rgba(100, 116, 139, 1)" }}>
                Manufacturing Management
              </li>
              <li style={{ color: "rgba(100, 116, 139, 1)" }}>
                Supply Chain Management
              </li>
              <li style={{ color: "rgba(100, 116, 139, 1)" }}>
                Marketing Automation
              </li>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div
          className="
        mt-10 pt-4 border-t border-gray-200 
        flex flex-col md:flex-row 
        items-center md:items-center 
        justify-between 
        gap-4 text-sm text-gray-500
      "
        >
          <p className="text-center md:text-left">
            All rights reserved by Kasper Infotech Pvt. Ltd.
          </p>

          <div className="flex gap-4">
            <a
              className="bg-[#007AFF] p-2 rounded-full"
              href="https://www.linkedin.com/company/mun-c/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin size={18} className="text-white" />
            </a>
            <a
              className="bg-[#007AFF] p-2 rounded-full"
              href="https://x.com/mun_c1 "
              target="_blank"
              rel="noreferrer"
            >
              <FaXTwitter size={18} className="text-white" />
            </a>
            <a
              className="bg-[#007AFF] p-2 rounded-full"
              href="https://www.instagram.com/munc_bms/"
              target="_blank"
              rel="noreferrer"
            >
              <CiInstagram size={18} className="text-white" />
            </a>
            <a
              className="bg-[#007AFF] p-2 rounded-full"
              href="https://www.facebook.com/profile.php?id=61573443763703"
              target="_blank"
              rel="noreferrer"
            >
              <FaFacebook size={18} className="text-white" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
