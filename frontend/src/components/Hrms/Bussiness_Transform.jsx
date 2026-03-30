import React, { useState } from "react"; // 
import IMSBussiness from "../../assets/IMS/IMSBussiness.jpg";
import Contact from "../../components/navbar/Contact";

const Bussiness_Transform = () => {

  const [showForm, setShowForm] = useState(false); 

  return (
    <>
      <div className="max-w-6xl mx-auto px-4 my-10">
        <div className="relative overflow-hidden">

          <img
            src={IMSBussiness}
            alt="Business"
            className="w-full h-[260px] object-cover"
          />

          <div
            className="absolute inset-0"
            style={{
              zIndex: 1,
              background:
                "linear-gradient(90deg, rgba(0, 82, 204, 0.85) 0%, rgba(0, 122, 255, 0.6) 60%, rgba(0, 122, 255, 0.2) 100%)",
            }}
            
          ></div>

          <div className="absolute inset-0 flex items-center px-6 md:px-12 text-white z-10">
            <div className="flex flex-col gap-3 max-w-[600px]">

              <div className="text-lg md:text-xl font-bold">
                Transform Your Business Operations Today
              </div>

              <div className="text-xs md:text-sm">
                Real-time visibility across inventory, financials, and customer data.
                Enterprise-grade automation for sustainable growth.
              </div>

              {/* BUTTON */}
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
      </div>

      {/* POPUP */}
      <Contact showForm={showForm} setShowForm={setShowForm} />
    </>
  );
};

export default Bussiness_Transform;