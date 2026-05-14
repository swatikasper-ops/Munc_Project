import React, { useState, useEffect } from "react";

import swati from "../../assets/AboutImg/swati.jpg"
import swatiii from "../../assets/AboutImg/swatii.JPG"
import illima from "../../assets/AboutImg/illima.jpg"
import { useNavigate } from "react-router-dom"; 
const tabs = ["People", "Inventory", "Leads"];

const content = {
    People: {
        titleone: "Manage Payroll with Ease",
        titletwo: "Smart Access & Tracking with RFID",
        descone: "Handle employee payroll like never before with MUN-C’s HR Management System, a core part of our Business Management Suite (BMS).",
        desctwo: "Automate attendance, asset tracking, and access control using RFID technology for faster, error-free operations.",
        image: swati,
        link: "/products/human-resource-management-system"
    },
    Inventory: {
        titleone: "Seamless Sales with Smart POS",
        titletwo: "Boost Engagement with Points & Rewards",
        descone: "Manage billing, payments and transactions effortlessly with a fast, reliable point of sale systems.",
        desctwo: "Enhance customer experience with automated points rewards and redemption systems.",
        image: swatiii,
        link: "/products/inventory-management-system"
    },
    Leads: {
        titleone: "Track Leads Accross Every Stage",
        titletwo: "Never Miss a Follow-Up",
        descone: "Monitor lead progress from inquiry to conversion with a clear and structured sales pipeline.",
        desctwo: "Boost your sales and customer engagement using MUN-C's Lead Management Software(LMS).Automate reminders, assign leads, and track every stage of the sales journey. Stay on top of client calls follow-ups, and deals.",
        image: illima,
     
        link: "/products/lead-management-system"
    },
};

const FeaturesSection = () => {
    const [activeTab, setActiveTab] = useState("People");
    const [currentIndex, setCurrentIndex] = useState(0);
    const navigate = useNavigate();
    // auto swap content every 5 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex === 0 ? 1 : 0));
        }, 5000);
        setCurrentIndex(0);
        return () => clearInterval(interval);
    }, [activeTab]);

    const currentContent = content[activeTab];
    const currentTitle = currentIndex === 0 ? currentContent.titleone : currentContent.titletwo;
    const currentDesc = currentIndex === 0 ? currentContent.descone : currentContent.desctwo;
const handleNavigation = () => {
        navigate(currentContent.link);
    };
    return (
        <div className="py-16 bg-white">
            {/* Heading */}
            <h2 className="text-center text-3xl md:text-4xl font-bold mb-8" style={{ color: "rgba(0, 77, 177, 1)", fontFamily: 'Public Sans', fontWeight: 700, maxWidth: "800px", marginLeft: "auto", marginRight: "auto" }}>
                Smart Features Built for Modern <br /> Businesses
            </h2>
            {/* Tabs */}
            <div className="flex justify-center gap-6 mb-10">
                {tabs.map((tab) => (
                    <button
                        key={tab}
                        onClick={() => { setActiveTab(tab); setCurrentIndex(0); }}
                        className={`pb-2 px-4 text-sm md:text-base transition ${activeTab === tab
                            ? "border-b-2 border-[#1E293B] text-[#1E293B] font-semibold"
                            : "text-[#64748B]"
                            }`}
                        style={{ fontSize: "16px", fontWeight: 600, fontFamily: "Public Sans, sans-serif" }}
                    >
                        {tab}
                    </button>
                ))}
            </div>

            {/* Banner Section */}
            <div className="max-w-6xl mx-auto px-4">

                <div className="relative  overflow-hidden">

                    {/* Background Image */}
                    <img
                        src={content[activeTab].image}
                        alt="feature"
                        className="w-full h-[400px] md:h-[500px] object-cover"
                    />
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-r from-[#001E60]/60 to-[#004CB0]/40"></div>
                    {/* Content Card */}
                    <div className="
    absolute 
    left-4 right-4 bottom-4
    md:left-12 md:top-1/2 md:-translate-y-1/2 md:bottom-auto md:right-auto
    p-4 md:p-10 
    w-auto md:max-w-sm
    rounded-sm shadow-lg
  "
  style={{ background: "rgba(255, 255, 255, 1)" }}
>
                        <h3 className="text-2xl md:text-3xl mb-2" style={{ color: "rgba(37, 118, 250, 1)", fontFamily: "Public Sans, sans-serif", fontWeight: 600, lineHeight: "120%" }}>
                            {currentTitle}
                        </h3>
                        <p className="text-sm md:text-base mb-6" style={{ color: "rgba(100, 116, 139, 1)", fontSize: "16px", fontWeight: 400, fontFamily: "Public Sans, sans-serif" }}>
                            {currentDesc}
                        </p>
                        <button className="px-5 py-2 rounded-md text-sm hover:bg-blue-600 transition" style={{ background: "rgba(0, 121, 254, 1)", color: "rgba(255, 255, 255, 1)", fontWeight: 400, fontSize: "16px", fontFamily: "Public Sans, sans-serif" }} onClick={handleNavigation}>
                            Discover More →
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeaturesSection;