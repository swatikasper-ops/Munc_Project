import React from "react";
import { IoIosArrowDown } from "react-icons/io";

const faqs = [
  {
    question: "Q1. What is an Inventory Management System (IMS)?",
    answer:
      "It’s a software that automates the process of tracking inventory, purchases, sales, and warehouse operations in real time.",
  },
  {
    question: "Q2. Can it manage multiple warehouses?",
    answer:
      "Yes. MUN-C IMS allows centralized control of multiple branches or warehouses from a single dashboard.",
  },
  {
    question: "Q3. Does it support barcode scanning?",
    answer:
      "Absolutely. Barcode and QR code scanning make stock entry and billing faster and error-free.",
  },
  {
    question: "Q4. Can I generate invoices and GST reports?",
    answer:
      "Yes. You can create tax-ready invoices instantly and generate detailed GST reports for compliance.",
  },
  {
    question: "Q5. Is it suitable for small and medium businesses?",
    answer:
      "Yes. MUN-C IMS is scalable — whether you’re a small retailer or a large enterprise, it adapts to your needs.",
  },
  {
    question: "Q6. Will I get alerts for low stock?",
    answer:
      "Yes. You’ll receive instant notifications when items reach their reorder point to prevent stockouts.",
  },
];

const FAQ = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">

      {/* Title */}
<h2
  className="
    text-center mb-10
    text-[23px] 
    sm:text-[27px] 
    md:text-[30px] 
    lg:text-[34px] 
    xl:text-[36px] 
    2xl:text-[40px]
    font-bold
  "
  style={{
    fontFamily: "Public Sans, sans-serif",
    color: "#004CAF",
  }}
>
  FAQs
</h2>

      {/* FAQ List */}
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="group border-b border-gray-300 pb-3 cursor-pointer transition-all duration-300"
          >
            {/* Question */}
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

              {/* Icon */}
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

            {/* Answer */}
            <div className="max-h-0 overflow-hidden group-hover:max-h-40 transition-all duration-300">
              <p className="mt-2 text-sm text-[#64748B]">
                {faq.answer}
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