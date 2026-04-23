import React from "react";
import { IoIosArrowDown } from "react-icons/io";

const FAQ = () => {
const faqs = [
  {
    id: 1,
    question: "Q1. What is HRMS in MUN-C?",
    answer:
      "MUN-C HRMS is a complete human resource management system designed to manage employees efficiently. It covers attendance, payroll, leave, and employee records in one platform. This helps businesses reduce manual work, improve accuracy, and streamline HR operations.",
  },
  {
    id: 2,
    question: "Q2. How does MUN-C manage employee attendance?",
    answer:
      "MUN-C provides real-time attendance tracking with options like manual entry or biometric integration. Employees’ check-in and check-out data are recorded automatically. This ensures accurate tracking of working hours, reduces errors, and simplifies attendance management for HR teams.",
  },
  {
    id: 3,
    question: "Q3. Can I manage payroll using MUN-C?",
    answer:
      "Yes, MUN-C allows you to process payroll easily with automated calculations. It handles salaries, deductions, bonuses, and taxes efficiently. This reduces manual effort, minimizes errors, and ensures timely and accurate salary processing for all employees.",
  },
  {
    id: 4,
    question: "Q4. Does the system support leave management?",
    answer:
      "MUN-C includes a complete leave management system where employees can apply for leaves online. HR can approve or reject requests and track leave balances. This makes the entire process transparent, organized, and easy to manage for both employees and management.",
  },
  {
    id: 5,
    question: "Q5. Can I store and manage employee records?",
    answer:
      "Yes, MUN-C allows you to maintain detailed employee records in one place. You can store personal details, job roles, documents, and history. This ensures easy access to information and better management of employee data across the organization.",
  },
  {
    id: 6,
    question: "Q6. Does MUN-C support multiple companies or branches?",
    answer:
      "Yes, MUN-C supports multi-company and multi-branch management. Each company can have its own dashboard and employee data. This makes it suitable for businesses managing multiple entities while maintaining centralized control and visibility.",
  },
  {
    id: 7,
    question: "Q7. Can employees access their own dashboard?",
    answer:
      "Yes, employees get their own login to access dashboards. They can view attendance, salary details, and leave status. This improves transparency, reduces HR workload, and allows employees to manage their own information easily.",
  },
  {
    id: 8,
    question: "Q8. Does MUN-C provide HR reports and analytics?",
    answer:
      "MUN-C offers detailed HR reports such as attendance reports, payroll summaries, and employee performance data. These insights help HR teams make better decisions, monitor workforce trends, and improve overall productivity and management.",
  },
  {
    id: 9,
    question: "Q9. Is the HRMS system secure?",
    answer:
      "Yes, MUN-C uses secure authentication and role-based access control. Sensitive employee data is protected and only accessible to authorized users. This ensures confidentiality, data integrity, and compliance with standard security practices.",
  },
  {
    id: 10,
    question: "Q10. How can I get started with MUN-C HRMS?",
    answer:
      "You can start by signing up and activating the free trial. After setup, you can add employees, configure payroll, and manage attendance. You can also request a demo for guided onboarding and better understanding of the system.",
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

export default FAQ;