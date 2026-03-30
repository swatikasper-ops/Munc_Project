import React from "react";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import WhyImg from "../../assets/IMS/choose.png"; // replace if LMS image different

const features = [
  {
    title: "Multi-Channel Lead Capture",
    desc: "Collect leads from website, ads, calls, and social media in one system.",
  },
  {
    title: "Automated Lead Assignment",
    desc: "Assign leads to the right team instantly with smart rules and notifications.",
  },
  {
    title: "Centralized Lead Dashboard",
    desc: "Manage and track all leads from a single, easy-to-use dashboard.",
  },
  {
    title: "Sales Pipeline Management",
    desc: "Visualize lead stages and move deals smoothly from inquiry to conversion.",
  },
  {
    title: "Real-Time Conversion Insights",
    desc: "Analyze performance with live reports and conversion tracking.",
  },
  {
    title: "Follow-Up & Reminder System",
    desc: "Never miss a follow-up with automated alerts and scheduling.",
  },
  {
    title: "Team Collaboration & Tracking",
    desc: "Monitor team activities, performance, and lead handling efficiency.",
  },
];

const WhyChooseLMS = () => {
  return (
  
      <section className="w-full py-16 bg-white">
           <div className="max-w-7xl mx-auto px-4">
             {/* Title */}
             <h2
               className="text-center text-2xl md:text-3xl font-bold mb-14"
               style={{ color: "#004CAF" }}
             >
               Why Choose MUN-C LMS ?
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

export default WhyChooseLMS;