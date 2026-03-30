import React from "react";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import WhyImg from "../../assets/IMS/choose.png";

const features = [
  {
    title: "Attendance & Time Tracking",
    desc: "Track employee attendance, working hours, and shifts accurately.",
  },
  {
    title: "Payroll Management",
    desc: "Automate salary processing, deductions, and payslip generation.",
  },
  {
    title: "Leave & Holiday Management",
    desc: "Manage leave requests, approvals, and company holidays efficiently.",
  },
  {
    title: "Performance Management",
    desc: "Monitor employee performance with reviews and appraisal tracking.",
  },
  {
    title: "Recruitment & Onboarding",
    desc: "Streamline hiring and onboard new employees smoothly.",
  },
  {
    title: "Employee Self-Service Portal",
    desc: "Allow employees to access and manage their own information easily.",
  },
  {
    title: "Reports & HR Analytics",
    desc: "Generate insights on workforce data for better decision-making.",
  },
];

const WhyChooseHRMS = () => {
  return (
 <section className="w-full py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Title */}
        <h2
          className="text-center text-2xl md:text-3xl font-bold mb-14"
          style={{ color: "#004CAF" }}
        >
          Why Choose MUN-C HRMS ?
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

export default WhyChooseHRMS;