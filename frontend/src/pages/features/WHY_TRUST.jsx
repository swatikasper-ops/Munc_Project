import React from "react";
import HalfCircle from "../../assets/OurStory/halfcircle.png"
import Rectangle from "../../assets/OurStory/reactangle.png"
import Square from "../../assets/OurStory/square.png"
import Triangle from "../../assets/OurStory/triangle.png"

const features = [
  {
    title: "Built for growing businesses",
    desc: "Built to support startups, SMEs, and enterprises with scalable tools that grow with your business operations.",
    image: Rectangle,
  },
  {
    title: "Designed for Indian businesses and beyond",
    desc: "Built with GST, compliance, and real business workflows to support companies across India and globally.",
    image: Triangle,
  },
  {
    title: "Industry-Ready ERP Solutions",
    desc: "Pre-built modules designed for retail, schools, hospitality, and service businesses to simplify daily operations.",
    image: HalfCircle,
  },
  {
    title: "Secure, Scalable & Easy to Use",
    desc: "Advanced security, reliable performance, and an intuitive interface that makes business management simple.",
    image: Square,
  },
];

const WhyTrust = () => {
  return (
    <div className="bg-[#eef5fb] py-16 px-4">
      <div className="max-w-6xl mx-auto text-center">

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold mb-3" style={{ fontWeight: 700, fontFamily: "Public Sans, sans-serif", lineHeight: "120%", color: "rgba(0, 62, 163, 1)" }}>
          Why Businesses Trust MUN-C ?
        </h2>
        <span className="mb-5" style={{ display: "block", maxWidth: "550px", margin: "10px auto 0", color: 'var(--Black, #363636)', fontSize: 20, fontFamily: 'Public Sans', fontWeight: '400' }}>A comprehensive platform designed to simplify every aspect of your business operations.
        </span>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 gap-8">

          {features.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 flex justify-between items-center relative overflow-hidden"
              style={{
                boxShadow: "0 10px 25px rgba(0,0,0,0.05)",
              }}
            >
              {/* Left Content */}
              <div className="text-left max-w-[70%]">
                <h4 className="" style={{ color: "rgba(30, 41, 59, 1)", fontSize: "16px", fontWeight: 600, fontFamily: "Public Sans, sans-serif" }}>
                  {item.title}
                </h4>

                <p className="" style={{ color: "rgba(100, 116, 139, 1)", fontSize: "12px", fontWeight: 400, fontFamily: "Public Sans, sans-serif" }}>
                  {item.desc}
                </p>

                <span className="" style={{ color: "#363636", fontSize: "14px", fontWeight: 600, fontFamily: "Public Sans, sans-serif", lineHeight: 6 }}>
                  Explore Features →
                </span>
              </div>

              {/* Right Big Icon (abstract shape) */}
              <div
                className="absolute right-4 bottom-0">
                <img
                  src={item.image}
                  alt="shape"
                  style={{
                    width: "80px",
                    height: "auto",
                    objectFit: "contain",
                    opacity: 0.9,
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};



export default WhyTrust;