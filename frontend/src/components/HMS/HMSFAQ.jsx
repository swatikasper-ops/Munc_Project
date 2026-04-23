// import React, { useState } from "react";
// import { FaChevronDown } from "react-icons/fa";

// const HMSFAQ = () => {
//   const [active, setActive] = useState(null);

//   const faqs = [
//     {
//       id: 1,
//       question: "Q1. What is School Management Software?",
//       answer:
//         "It’s a digital platform that automates school operations — from admissions, attendance, and exams to fee collection and communication.",
//       // knowmore: "Know More",
//     },
//     {
//       id: 2,
//       question: "Q2. Who can use this software?",
//       answer:
//         "Administrators, teachers, parents, and even students can use it through their respective login portals.",
//       // knowmore: "Know More",
//     },
//     {
//       id: 3,
//       question: "Q3. Does it support online fee payments?",
//       answer:
//         "Yes, MUN-C supports secure online fee collection with instant receipts and payment tracking.",
//       // knowmore: "Know More",
//     },
//     {
//       id: 4,
//       question: "Q4. Can parents and teachers access it?",
//       answer:
//         "Absolutely. The system includes dedicated portals for teachers and parents to ensure seamless updates and communication.",
//       // knowmore: "Know More",
//     },
//     {
//       id: 5,
//       question: "Q5. Is student data secure?",
//       answer:
//         "Yes, All data is encrypted, stored safely on the cloud, and accessible only through role-based permissions.",
//       // knowmore: "Know More",
//     },
//   ];

//   return (
//     <div className="max-w-3xl !px-4 mx-auto py-10">
//       <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[36px] font-medium text-center leading-[120%] mb-6">
//     Frequently Asked Questions (FAQs)
//       </h2>
//       <div className="space-y-4">
//         {faqs.map((f) => (
//           <div
//             key={f.id}
//             onMouseEnter={() => setActive(f.id)}
//             onMouseLeave={() => setActive(null)}
//             className={`py-2 px-2 cursor-pointer transition-all duration-300 border-b border-[#AEAEAE]`}
//           >
//             <div className="flex items-center justify-between">
             
//               <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-normal text-[#1C2B33]">
//                 {f.question}
//               </h3>

//               {/* Arrow */}
//               <FaChevronDown
//                 className={`text-[#1C2B33] transform transition-transform duration-300 ${
//                   active === f.id ? "rotate-180" : "rotate-0"
//                 }`}
//               />
//             </div>

//             {/* Answer (expand on hover) */}
//             <div
//               className={`overflow-hidden transition-all duration-300 ${
//                 active === f.id ? "max-h-40 mt-2" : "max-h-0"
//               }`}
//             >
//               <p className="text-sm sm:text-base md:text-lg lg:text-[16px] font-normal text-[#3E4247]">
//                 {f.answer}
//               </p>
//               <p className="text-[#007AFF] text-xs sm:text-sm md:text-base font-medium mt-1">
//                 {f.knowmore}
//               </p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default HMSFAQ;


import React from "react";
import { IoIosArrowDown } from "react-icons/io";

const HMSFAQ = () => {
  const faqs = [
  {
    id: 1,
    question: "Q1. What is Hotel Management Software in MUN-C?",
    answer:
      "MUN-C Hotel Management Software is an all-in-one solution to manage hotel operations efficiently. It handles bookings, check-ins, billing, and housekeeping. This helps hotels reduce manual work, improve guest experience, and manage daily operations smoothly from a single dashboard.",
  },
  {
    id: 2,
    question: "Q2. How does MUN-C manage room bookings?",
    answer:
      "MUN-C allows you to manage room bookings in real time with availability tracking. You can view occupied, vacant, and reserved rooms easily. This ensures efficient room allocation, avoids overbooking, and helps staff manage reservations without confusion or delays.",
  },
  {
    id: 3,
    question: "Q3. Can I manage check-in and check-out processes?",
    answer:
      "Yes, MUN-C simplifies check-in and check-out with a streamlined interface. Staff can quickly assign rooms, update guest details, and complete formalities. This reduces waiting time, improves guest experience, and ensures smooth front desk operations.",
  },
  {
    id: 4,
    question: "Q4. Does the system support billing and invoicing?",
    answer:
      "MUN-C provides a complete billing system for room charges, services, and additional expenses. Invoices are generated automatically with accurate calculations. This reduces errors, speeds up transactions, and ensures transparent billing for guests.",
  },
  {
    id: 5,
    question: "Q5. Can I manage housekeeping tasks?",
    answer:
      "Yes, MUN-C includes housekeeping management to track room cleaning status. Staff can update room readiness, and managers can monitor tasks easily. This ensures rooms are prepared on time and improves overall operational efficiency.",
  },
  {
    id: 6,
    question: "Q6. Does MUN-C support multiple room types and pricing?",
    answer:
      "MUN-C allows you to define different room types and pricing structures. You can set rates based on seasons, occupancy, or special offers. This helps maximize revenue and manage pricing strategies effectively.",
  },
  {
    id: 7,
    question: "Q7. Can I track guest history and details?",
    answer:
      "Yes, MUN-C stores complete guest information including stay history, preferences, and contact details. This helps in providing personalized services, improving guest satisfaction, and building long-term customer relationships.",
  },
  {
    id: 8,
    question: "Q8. Does the software provide reports and analytics?",
    answer:
      "MUN-C offers detailed reports on occupancy, revenue, bookings, and performance. These insights help hotel owners make informed decisions, optimize operations, and improve overall profitability.",
  },
  {
    id: 9,
    question: "Q9. Is MUN-C suitable for small and large hotels?",
    answer:
      "Yes, MUN-C is designed for hotels of all sizes, from small guest houses to large properties. It scales according to your needs and supports multiple users, making it ideal for managing complex hotel operations efficiently.",
  },
  {
    id: 10,
    question: "Q10. How can I get started with MUN-C Hotel Management Software?",
    answer:
      "You can get started by signing up for the free trial on the website. After setup, you can configure rooms, pricing, and operations. You can also request a demo for guided onboarding and a better understanding of the system.",
  },
];

 
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">

      {/* TITLE */}
      <h2
        className="text-center mb-10"
        style={{
          fontWeight: 700,
          fontFamily: "Public Sans, sans-serif",
          color: "#004CAF",
          fontSize: "36px",
        }}
      >
        FAQs
      </h2>

      {/* FAQ LIST */}
      <div className="space-y-4">
        {faqs.map((f, index) => (
          <div
            key={index}
            className="group border-b border-gray-300 pb-3 cursor-pointer transition-all duration-300"
          >

            {/* QUESTION */}
            <div className="flex items-center justify-between">
              <h4
                style={{
                  color: "#1E293B",
                  fontSize: 16,
                  fontFamily: "Public Sans",
                  fontWeight: 400,
                }}
              >
                {f.question}
              </h4>

              {/* ICON */}
              <span
                className="group-hover:rotate-180 transition duration-300"
                style={{
                  color: "#7D7D7D",
                  fontWeight: 600,
                  fontSize: "18px",
                }}
              >
                <IoIosArrowDown />
              </span>
            </div>

            {/* ANSWER */}
            <div className="max-h-0 overflow-hidden group-hover:max-h-40 transition-all duration-300">
              <p className="mt-2 text-sm text-[#64748B]">
                {f.answer}
              </p>

              {/* <span className="text-[#007AFF] text-sm mt-1 inline-block hover:underline">
                Know More
              </span> */}
            </div>

          </div>
        ))}
      </div>
    </div>
  );
};

export default HMSFAQ;