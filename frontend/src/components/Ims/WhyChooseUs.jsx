import React from "react";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import WhyImg from "../../assets/IMS/choose.png";

const features = [
  {
    title: "Real-Time Inventory Tracking",
    desc: "Monitor stock levels and movements instantly across all locations.",
  },
  {
    title: "Automated Stock Alerts",
    desc: "Get notified when inventory is low to avoid stockouts.",
  },
  {
    title: "Centralized Inventory Dashboard",
    desc: "Manage all inventory data from a single, easy-to-use interface.",
  },
  {
    title: "Purchase & Supplier Management",
    desc: "Streamline procurement and manage supplier relationships efficiently.",
  },
  {
    title: "Stock Movement & History",
    desc: "Track item movement and maintain complete inventory records.",
  },
  {
    title: "Multi-Location Management",
    desc: "Handle inventory across warehouses and stores seamlessly.",
  },
  {
    title: "Reports & Analytics",
    desc: "Gain insights with detailed inventory reports and trends.",
  },
  {
    title: "Barcode & QR Integration",
    desc: "Simplify tracking and management with barcode scanning support.",
  },
];

const WhyChooseIMS = () => {
  return (
    <section className="w-full py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Title */}
        <h2
          className="text-center text-2xl md:text-3xl font-bold mb-14"
          style={{ color: "#004CAF" }}
        >
          Why Choose MUN-C IMS ?
        </h2>

        {/* Content */}
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Left Image */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <img
              src={WhyImg}
              alt="IMS"
              className="
      w-[220px] 
      sm:w-[300px] 
      md:w-[380px] 
      lg:w-[450px] 
      xl:w-[585px] 
      h-auto object-contain
    "
            />
          </div>

          {/* Right Content */}
          <div className="w-full lg:w-1/2 md:pl-2s0px sm:pl-40px">
            {features.map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-3 md: pl-10px sm:pl-40px"
              >
                {/* Icon */}
                <IoMdCheckmarkCircleOutline className="text-[#1B7EFF] mt-1 text-lg flex-shrink-0" />

                {/* Text */}
                <div>
                  <h4
                    className="
      text-[#1E293B] 
      text-[16px] 
      sm:text-base 
      font-semibold
    "
                  >
                    {item.title}
                  </h4>

                  <p
                    className="
      text-[#64748B] 
      text-[14px] 
      sm:text-sm 
      leading-relaxed
    "
                  >
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseIMS;
