import React from "react";
import { FaBullseye, FaChartLine, FaCogs } from "react-icons/fa";
import Story from "../../assets/OurStory/story.jpg"
import Icon from "../../assets/OurStory/Icon.svg"
import Mission from "../../assets/OurStory/mission.svg"
import Star from "../../assets/OurStory/star.svg"
import { BsGraphUpArrow } from "react-icons/bs";


const Our_Story = () => {
    return (
        <div className="bg-white py-16 px-6 md:px-16">
          {/* PARENT CONTAINER: Flex column for mobile, Grid for Desktop */}
<div className="max-w-7xl mx-auto flex flex-col lg:grid lg:grid-cols-2 gap-x-10 gap-y-6 items-start px-4">

    {/* 1. HEADING (Order 1: Always stays at the top) */}
    <div className="order-1 w-full lg:col-start-1">
        <h2
            className="font-bold mb-2 mt-4 md:mt-10 md:mb-4 text-[32px] sm:text-[40px] md:text-[45px] lg:text-[50px]"
            style={{
                fontWeight: 700,
                fontFamily: "Public Sans, sans-serif",
                color: "rgba(37, 118, 250, 1)",
                lineHeight: "1.2",// This ensures it centers on small and shifts left on large (1024px+)
            textAlign: window.innerWidth >= 1024 ? "left" : "center"
            }}
        >
            Our Story
        </h2>
    </div>

    {/* 2. IMAGE (Order 2 on Mobile, Right side on Desktop) */}
    <div className="order-2 w-full lg:col-start-2 lg:row-start-1 lg:row-span-2 flex justify-center lg:self-center mb-6 lg:mb-0">
        <img
            src={Story}
            alt="Team"
            className="rounded-xl object-cover w-full max-w-[550px]"
            style={{
                height: "auto",
                borderRadius: "24px",
                boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
            }}
        />
    </div>

    {/* 3. CONTENT & CARDS (Order 3 on Mobile, Below Heading on Desktop) */}
    <div className="order-3 w-full lg:col-start-1 text-justify max-[425px]:-mt-[1rem] max-[768px]:-mt-[0.5rem]">
        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            <p className="text-gray-600 mb-4 leading-relaxed text-[16px] md:text-[18px]" 
               style={{ fontWeight: 400, fontFamily: "Public Sans, sans-serif", lineHeight: "1.6", color: "rgba(100, 116, 139, 1)" }}>
                MUN-C is inspired by the traditional concept of{" "}
                <span style={{ fontWeight: 500, color: "rgba(37, 118, 250, 1)" }}>"Munshi ji"</span> — a trusted
                individual known for managing accounts, operations, and business
                decisions with precision and integrity. In today's digital world,
                MUN-C transforms that role into a powerful business management platform.
            </p>
        </div>

        {/* CARD 1 */}
        <div
            className="rounded-lg mb-6 flex gap-4 items-start w-full md:mx-auto lg:mx-0"
            style={{ 
                background: "rgba(255, 255, 255, 1)", 
                border: "1px solid rgba(226, 232, 240, 1)", 
                padding: "20px", 
                borderRadius: "20px", 
                maxWidth: "500px",
                minHeight: "110px" 
            }}
        >
            <div style={{ borderRadius: "8px", background: 'linear-gradient(90deg, #2576FA 0%, #003EA3 100%)', padding: "10px", minWidth: "48px", height: "48px", display: "flex", alignItems: "center", justifyContent: "center" }} >
                <img src={Icon} alt="icon" style={{ width: "24px", height: "24px", objectFit: "contain" }} />
            </div>
            <div>
                <h4 style={{ color: "rgba(30, 41, 59, 1)", fontSize: "16px", fontWeight: 600, fontFamily: "Public Sans, sans-serif" }}>Our Vision</h4>
                <p style={{ color: "rgba(100, 116, 139, 1)", fontSize: "12px", fontWeight: 400, fontFamily: "Public Sans, sans-serif", lineHeight: "1.4" }}>
                    To become a reliable digital backbone for businesses by making operations smarter, faster, and more transparent.
                </p>
            </div>
        </div>

        {/* CARD 2 */}
        <div
            className="rounded-lg mb-6 flex gap-4 items-start w-full md:mx-auto lg:mx-0"
            style={{ 
                background: "rgba(255, 255, 255, 1)", 
                border: "1px solid rgba(226, 232, 240, 1)", 
                padding: "20px", 
                borderRadius: "20px", 
                maxWidth: "500px",
                minHeight: "110px"
            }}
        >
            <div style={{ borderRadius: "8px", background: 'linear-gradient(90deg, #2576FA 0%, #003EA3 100%)', padding: "10px", minWidth: "48px", height: "48px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <img src={Mission} alt="mission" style={{ width: "24px", height: "24px", objectFit: "contain" }} />
            </div>
            <div>
                <h4 style={{ color: "rgba(30, 41, 59, 1)", fontSize: "16px", fontWeight: 600, fontFamily: "Public Sans, sans-serif" }}>Our Mission</h4>
                <p style={{ color: "rgba(100, 116, 139, 1)", fontSize: "12px", fontWeight: 400, fontFamily: "Public Sans, sans-serif", lineHeight: "1.4" }}>
                    To reduce manual work, improve efficiency, and provide complete control through intelligent and customizable software.
                </p>
            </div>
        </div>

        {/* CARD 3 */}
        <div
            className="rounded-lg mb-6 flex gap-4 items-start w-full md:mx-auto lg:mx-0"
            style={{ 
                background: "rgba(255, 255, 255, 1)", 
                border: "1px solid rgba(226, 232, 240, 1)", 
                padding: "20px", 
                borderRadius: "20px", 
                maxWidth: "500px",
                minHeight: "110px"
            }}
        >
            <div style={{ borderRadius: "8px", background: 'linear-gradient(90deg, #2576FA 0%, #003EA3 100%)', padding: "10px", minWidth: "48px", height: "48px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <img src={Star} alt="star" style={{ width: "24px", height: "24px", objectFit: "contain" }} />
            </div>
            <div>
                <h4 style={{ color: "rgba(30, 41, 59, 1)", fontSize: "16px", fontWeight: 600, fontFamily: "Public Sans, sans-serif" }}>Why We Started</h4>
                <p style={{ color: "rgba(100, 116, 139, 1)", fontSize: "12px", fontWeight: 400, fontFamily: "Public Sans, sans-serif", lineHeight: "1.4" }}>
                    We observed that businesses struggle with disconnected tools. MUN-C unifies operations into one scalable system.
                </p>
            </div>
        </div>
    </div>
</div>
        </div>
    );
};

export default Our_Story;