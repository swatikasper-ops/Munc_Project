import React from "react";
import { IoIosArrowDown } from "react-icons/io";

const faqs = [
  {
    question: "Q1. What is an Inventory Management System?",
    answer:
      "Inventory Management System helps businesses track stock, manage purchases & sales, handle warehouses, and generate reports in real time.",
  },
  {
    question: "Q2. Can it manage multiple warehouses?",
    answer: "Yes, it supports multiple warehouses efficiently.",
  },
  {
    question: "Q3. Does it support barcode scanning?",
    answer: "Yes, barcode scanning is fully supported.",
  },
  {
    question: "Q4. Can I generate invoices and GST reports?",
    answer: "Yes, it provides invoice and GST reporting features.",
  },
  {
    question: "Q5. Is it suitable for small businesses?",
    answer: "Absolutely, it is designed for businesses of all sizes.",
  },
  {
    question: "Q6. Will I get alerts for low stock?",
    answer: "Yes, you will receive real-time low stock alerts.",
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

              <span className="text-blue-600 text-sm mt-1 inline-block hover:underline">
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