import React from "react";
import { IoIosArrowDown } from "react-icons/io";

const faqs = [
  {
    id: 1,
    question: "Q1. What is MUN-C?",
    answer:
      "MUN-C is an all-in-one business management software designed to simplify operations. It combines HR, inventory, sales, and task management into one platform. This helps businesses reduce manual work, improve efficiency, and manage everything from a single, easy-to-use dashboard.",
  },
  {
    id: 2,
    question: "Q2. Who can use MUN-C?",
    answer:
      "MUN-C is built for small to medium-sized businesses across industries. It is suitable for retail stores, schools, hospitals, and service companies. Any business looking to streamline operations, track data, and improve productivity can effectively use this platform.",
  },
  {
    id: 3,
    question: "Q3. What features does MUN-C offer?",
    answer:
      "MUN-C offers modules like HRMS, Inventory Management, POS, and Lead Management. It also includes payroll, attendance tracking, reporting dashboards, and task management. These features help businesses automate processes, reduce errors, and gain real-time insights into their operations.",
  },
  {
    id: 4,
    question: "Q4. Is MUN-C easy to use?",
    answer:
      " MUN-C is designed with a simple and user-friendly interface. Even non-technical users can easily navigate and manage daily operations. The dashboard is intuitive, allowing users to quickly access data, perform tasks, and manage different business processes without confusion.",
  },
  {
    id: 5,
    question: "Q5. Does MUN-C offer a free trial?",
    answer:
      " MUN-C offers a 7-day free trial for new users. This allows businesses to explore features, test modules, and understand how the system works. You can evaluate its benefits before making any commitment or subscription decision.",
  },
  {
    id: 6,
    question: "Q6. Is my data secure on MUN-C?",
    answer:
      "MUN-C uses secure technologies and best practices to protect your business data. Data is stored safely with proper access control and authentication systems. Regular monitoring and security measures ensure that your information remains confidential and protected from unauthorized access.",
  },
  {
    id: 7,
    question: "Q7. Can MUN-C be customized?",
    answer:
      " MUN-C can be customized based on your business needs. Modules, workflows, and features can be adjusted according to your requirements. This flexibility allows businesses to use the software in a way that best fits their operations and processes.",
  },
  {
    id: 8,
    question: "Q8. How can I get started with MUN-C?",
    answer:
      "You can get started by signing up on the website and activating your free trial. After registration, you can explore all features and set up your business details. You can also request a demo for guided onboarding and better understanding.",
  },
  {
    id: 9,
    question: "Q9. Does MUN-C support multiple users?",
    answer:
      " MUN-C allows multiple users with role-based access. Admins can assign permissions and control what each user can view or manage. This makes it suitable for teams, ensuring secure and organized collaboration across departments.",
  },
  {
    id: 10,
    question: "Q10. What support does MUN-C provide?",
    answer:
      "MUN-C provides customer support to help you with setup, usage, and troubleshooting. You can reach out through chat, email, or call support. The team ensures that your issues are resolved quickly and your experience remains smooth.",
  },
];

const FAQ = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 pt-4 pb-12 md:pt-12">
      <h2 className="text-3xl font-bold text-center text-blue-600 mb-10" style={{ fontWeight: 700, fontFamily: "Public Sans, sans-serif", color: "rgba(0, 62, 163, 1)" }}>
        FAQs
      </h2>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="group border-b border-gray-300 pb-2 cursor-pointer"
          >
            {/* Question */}
            <div className="flex justify-between items-center">
              <h4 className="" style={{ color: "#1E293B", fontSize: 16, fontFamily: 'Public Sans', fontWeight: '400' }}>
                {faq.question}
              </h4>
              <span className=" group-hover:rotate-180 transition" style={{ color: "#7D7D7D", fontWeight: 600, fontSize: "16px" }}>
                <IoIosArrowDown />
              </span>
            </div>

            {/* Answer (hidden → show on hover) */}
            <div className="max-h-0 overflow-hidden group-hover:max-h-40 transition-all duration-300">
              <p className="text-gray-500 mt-2 text-sm">
                Yes, {faq.answer}
              </p>

              {/* <span className="text-blue-600 text-sm mt-1 inline-block hover:underline">
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