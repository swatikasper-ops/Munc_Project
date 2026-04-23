// import React, { useState } from "react";
// import { FaChevronDown } from "react-icons/fa";

// const FAQ = () => {
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

// export default FAQ;


import React from "react";
import { IoIosArrowDown } from "react-icons/io";

const FAQ = () => {
 const faqs = [
  {
    id: 1,
    question: "Q1. What is School Management Software in MUN-C?",
    answer:
      "MUN-C School Management Software is an all-in-one platform to manage academic and administrative tasks. It handles admissions, attendance, fees, and exams efficiently. This helps schools reduce manual work, improve communication, and streamline daily operations from a single dashboard.",
  },
  {
    id: 2,
    question: "Q2. How does MUN-C help in managing student records?",
    answer:
      "MUN-C allows schools to store and manage complete student records digitally. It includes personal details, academic history, attendance, and documents. This ensures easy access, better organization, and reduces paperwork, making student data management more efficient and secure.",
  },
  {
    id: 3,
    question: "Q3. Can I manage attendance for students and staff?",
    answer:
      "Yes, MUN-C provides a complete attendance management system for both students and staff. Attendance can be recorded daily and tracked in real time. This helps maintain accurate records, monitor absentees, and generate reports easily for better decision-making.",
  },
  {
    id: 4,
    question: "Q4. Does the system support fee management?",
    answer:
      "MUN-C includes a fee management module to handle fee collection, receipts, and due tracking. It allows schools to manage different fee structures and send reminders. This ensures timely payments, reduces manual errors, and simplifies financial management.",
  },
  {
    id: 5,
    question: "Q5. Can I manage exams and results?",
    answer:
      "Yes, MUN-C supports exam scheduling, result creation, and report generation. Schools can manage marks, grades, and performance reports easily. This helps in maintaining accurate academic records and provides clear insights into student performance.",
  },
  {
    id: 6,
    question: "Q6. Does MUN-C support communication with parents?",
    answer:
      "MUN-C enables schools to communicate with parents through notifications and updates. Schools can share attendance, results, and important announcements. This improves transparency and keeps parents informed about their child’s progress and activities.",
  },
  {
    id: 7,
    question: "Q7. Can I manage transport and hostel facilities?",
    answer:
      "Yes, MUN-C includes modules to manage transport and hostel operations. You can track routes, vehicle details, and student allocations. This ensures better management, improves safety, and provides clear visibility of logistics within the school.",
  },
  {
    id: 8,
    question: "Q8. Does the software provide reports and analytics?",
    answer:
      "MUN-C offers detailed reports on attendance, fees, exams, and overall school performance. These insights help administrators make informed decisions, track progress, and improve operational efficiency across different departments.",
  },
  {
    id: 9,
    question: "Q9. Is MUN-C suitable for all types of schools?",
    answer:
      "Yes, MUN-C is designed for schools of all sizes, from small institutions to large campuses. It scales according to your needs and supports multiple users, making it suitable for managing complex school operations efficiently.",
  },
  {
    id: 10,
    question: "Q10. How can I get started with MUN-C School Management Software?",
    answer:
      "You can get started by signing up for the free trial on the website. After setup, you can configure school details and start managing operations. You can also request a demo for guided onboarding and a better understanding of features.",
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
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="group border-b border-gray-300 pb-3 cursor-pointer transition-all duration-300"
          >

            {/* QUESTION */}
            <div className="flex justify-between items-center">
              <h4
                style={{
                  color: "#1E293B",
                  fontSize: 16,
                  fontFamily: "Public Sans",
                  fontWeight: 400,
                }}
              >
                {faq.question}
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
                {faq.answer}
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

export default FAQ;