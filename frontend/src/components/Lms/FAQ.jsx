import React from "react";
import { IoIosArrowDown } from "react-icons/io";

const FAQ = () => {
  const faqs = [
    {
      id: 1,
      question: "Q1. What is a Lead Management System (LMS)?",
      answer:
        "It’s a software tool that helps you capture, track, and convert potential customers into paying clients.",
    },
    {
      id: 2,
      question: "Q2. Can it capture leads from multiple sources?",
      answer:
        "Yes — MUN-C LMS collects leads from your website, campaigns, social media, and offline events in one place.",
    },
    {
      id: 3,
      question: "Q3. How does it help sales teams?",
      answer:
        "It assigns leads automatically, reminds them of follow-ups, and shows live status — making your sales process faster and more organized.",
    },
    {
      id: 4,
      question: "Q4. Will I get reports on performance?",
      answer:
        "Absolutely. You can track conversion rates, lead sources, sales progress, and team efficiency using visual analytics.",
    },
    {
      id: 5,
      question: "Q5. Can it integrate with other tools?",
      answer:
        "Yes — MUN-C LMS integrates seamlessly with your CRM, marketing, and communication tools as part of the Business Management Suite (BMS).",
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
        Frequently Asked Questions
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