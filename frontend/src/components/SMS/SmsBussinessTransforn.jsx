import React, { useState } from "react"; // ✅ FIXED: added useState
import Bussiness from "../../assets/OurStory/Bussiness.jpg";
import Contact from "../../components/navbar/Contact";

const SmsBussinessTransforn= () => {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="max-w-6xl mx-auto px-4 my-10">
      <div className="relative overflow-hidden">

        {/* Image */}
        <img
          src={Bussiness}
          alt="Business"
          className="w-full min-h-[340px] md:h-[260px] object-cover"
        />

        {/* Gradient Overlay */}
        <div
          className="absolute inset-0"
          style={{
            zIndex: 1,
            background:
              "linear-gradient(90deg, rgba(0, 82, 204, 0.9) 0%, rgba(0, 122, 255, 0.7) 60%, rgba(0, 122, 255, 0.3) 100%)",
          }}
        ></div>

        {/* Content */}
        <div
          className="absolute inset-0 flex flex-col justify-center px-6 md:px-12 text-white"
          style={{ zIndex: 2 }}
        >
          <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-3">
              
              {/* Heading */}
              <h2
                className="text-2xl md:text-4xl font-bold leading-tight"
                style={{ fontFamily: "Public Sans" }}
              >
                Transform Your Business Operations Today
              </h2>

              {/* Text */}
              <p
                className="text-sm md:text-base opacity-90"
                style={{ fontFamily: "Public Sans", fontWeight: 400 }}
              >
                Real-time visibility across inventory, financials, and customer data.
                Enterprise-grade automation for sustainable growth.
              </p>
            </div>

            {/* Button */}
            <button
              onClick={() => setShowForm(true)}
              className="bg-white px-4 py-2 rounded-md text-sm font-medium w-fit hover:bg-gray-100 transition"
              style={{ color: "#2179D1" }}
            >
              Book a Free Demo →
            </button>
          </div>
        </div>
      </div>

      {/* Popup */}
      <Contact showForm={showForm} setShowForm={setShowForm} />
    </div>
  );
};

export default SmsBussinessTransforn;