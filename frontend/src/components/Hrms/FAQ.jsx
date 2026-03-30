import React from "react";
import { IoIosArrowDown } from "react-icons/io";

const FAQ = () => {
  const faqs = [
    {
      id: 1,
      question: "Q1. How does MUN-C HRMS help my business?",
      answer:
        "It automates HR operations, saving time and cost while improving accuracy and employee satisfaction.",
    },
    {
      id: 2,
      question: "Q2. Can payroll and attendance work together?",
      answer:
        "Yes. Payroll is directly linked with attendance data, ensuring accurate payouts every month.",
    },
    {
      id: 3,
      question: "Q3. Does MUN-C support remote or hybrid teams?",
      answer:
        "Absolutely. Track attendance, leaves, and performance seamlessly — even for remote employees.",
    },
    {
      id: 4,
      question: "Q4. Is the system secure?",
      answer:
        "Yes. MUN-C uses encrypted cloud technology to keep your employee data safe and private.",
    },
    {
      id: 5,
      question: "Q5. Can it integrate with other MUN-C modules?",
      answer:
        "Yes. It connects with our Inventory, Lead, and School Management modules — giving you a complete Business Management Suite (BMS) experience.",
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

              <span className="text-[#007AFF] text-sm mt-1 inline-block hover:underline">
                Know More
              </span>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;