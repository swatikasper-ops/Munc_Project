import React from "react";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import WhyImg from "../../assets/smschoose.png";

const features = [
  {
    title: "Multi-Channel Booking & Reservation Management",
    desc: "Capture hotel bookings from website, OTAs, walk-ins, and travel platforms in one centralized hotel reservation system.",
  },
  {
    title: " Guest Allocation & Room Assignment",
    desc: "Smart room assignment engine s allocates guests based on availability, preferences, and hotel management rules.",
  },
  {
    title: "Centralized Hotel Operations Dashboard",
    desc: "Manage reservations, check-ins, check-outs, and housekeeping from a powerful hotel PMS dashboard.",
  },
  {
    title: "Advanced Room & Inventory Management",
    desc: "Track room availability, occupancy status, pricing, and seasonal inventory in real-time hotel management software.",
  },
  {
    title: "Real-Time Revenue & Occupancy Analytics",
    desc: "Monitor hotel performance with live reports on occupancy rate, revenue per room, and booking conversion insights.",
  },
  {
    title: "Automated Guest Follow-Ups & Notifications",
    desc: "Send automated booking confirmations, check-in reminders, and post-stay feedback requests to improve guest experience.",
  },
  {
    title: "Staff & Housekeeping Management System",
    desc: "Track staff tasks, housekeeping status, and operational efficiency with real-time hotel workflow monitoring.",
  },
  {
    title: "Seamless Hotel ERP Integration",
    desc: "Fully integrated with Hotel ERP systems for accounting, billing, CRM, and end-to-end hospitality operations management.",
  },
];

const HmsChoose = () => {
 return (
    <section className="w-full py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Title */}
        <h2
          className="text-center text-2xl md:text-3xl font-bold mb-14"
          style={{ color: "#004CAF" }}
        >
          Why Choose MUN-C HMS ?
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
export default HmsChoose;