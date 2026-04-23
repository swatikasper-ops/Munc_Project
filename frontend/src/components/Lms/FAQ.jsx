import React from "react";
import { IoIosArrowDown } from "react-icons/io";

const FAQ = () => {
 const faqs = [
  {
    id: 1,
    question: "Q1. What is Lead Management Software in MUN-C?",
    answer:
      "MUN-C Lead Management Software helps businesses capture, track, and manage leads efficiently. It organizes all prospects in one place, allowing you to monitor interactions, follow-ups, and conversions. This improves sales visibility and ensures no potential customer is missed.",
  },
  {
    id: 2,
    question: "Q2. How does MUN-C help in managing leads?",
    answer:
      "MUN-C centralizes all incoming leads from different sources into one dashboard. You can assign leads, track their progress, and manage follow-ups easily. This ensures better coordination within the sales team and increases the chances of converting leads into customers.",
  },
  {
    id: 3,
    question: "Q3. Can I track leads from multiple sources?",
    answer:
      "Yes, MUN-C allows you to track leads from various sources like websites, ads, calls, or referrals. You can categorize leads based on their origin, helping you understand which channels perform best and optimize your marketing and sales strategies effectively.",
  },
  {
    id: 4,
    question: "Q4. Does MUN-C support lead assignment to team members?",
    answer:
      "Yes, you can assign leads to specific team members based on roles or workload. This ensures accountability and proper follow-up. Managers can also monitor performance, track activities, and ensure that every lead is handled efficiently without delays.",
  },
  {
    id: 5,
    question: "Q5. Can I track lead status and pipeline stages?",
    answer:
      "MUN-C provides a clear pipeline view where you can track each lead’s status. You can move leads through different stages like new, contacted, qualified, or converted. This helps you understand where leads stand and manage your sales funnel effectively.",
  },
  {
    id: 6,
    question: "Q6. Does the system send follow-up reminders?",
    answer:
      "Yes, MUN-C provides automated follow-up reminders to ensure timely communication with leads. You can schedule tasks and notifications, so your team never misses an important follow-up, improving engagement and increasing conversion rates.",
  },
  {
    id: 7,
    question: "Q7. Can I communicate with leads through the system?",
    answer:
      "Yes, MUN-C allows you to manage communication history with each lead. You can track calls, messages, and interactions in one place. This helps maintain context, improves relationship management, and ensures a more personalized sales approach.",
  },
  {
    id: 8,
    question: "Q8. Does MUN-C provide lead reports and analytics?",
    answer:
      "MUN-C offers detailed reports on lead performance, conversion rates, and team activities. These insights help you identify trends, measure effectiveness, and make data-driven decisions to improve your overall sales strategy.",
  },
  {
    id: 9,
    question: "Q9. Is MUN-C suitable for small and large sales teams?",
    answer:
      "Yes, MUN-C is designed to support both small teams and growing organizations. It scales with your business needs, allowing multiple users, role-based access, and structured workflows, making it ideal for managing leads at any stage of growth.",
  },
  {
    id: 10,
    question: "Q10. How can I get started with Lead Management in MUN-C?",
    answer:
      "You can get started by signing up and activating your free trial. After setup, you can add leads, assign them to your team, and start tracking progress. You can also request a demo for guided onboarding and better understanding.",
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