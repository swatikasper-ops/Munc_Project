import React from "react";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import WhyImg from "../../assets/smschoose.png";

const features = [
  { title: "Student Information Management", desc: "Store and manage complete student records in one centralized system." },
  { title: "Attendance Management", desc: "Track daily student and staff attendance with accuracy and ease." },
  { title: "Fee Management", desc: "Automate fee collection, invoices, and payment tracking." },
  { title: "Exams & Results Management", desc: "Manage exams, generate report cards, and track academic performance." },
  { title: "Timetable Management", desc: "Create and manage class schedules efficiently for students and teachers." },
  { title: "Teacher & Staff Management", desc: "Handle staff records, roles, and responsibilities in one place." },
  { title: "Transport Management", desc: "Manage transportation routes with ease." },
];

const SmsChoose = () => {
  return (
   <section className="w-full py-16 bg-white">
         <div className="max-w-7xl mx-auto px-4">
           {/* Title */}
           <h2
             className="text-center text-2xl md:text-3xl font-bold mb-14"
             style={{ color: "#004CAF" }}
           >
             Why Choose MUN-C SMS ?
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
         text-[14px] 
         sm:text-base 
         font-semibold
       "
                     >
                       {item.title}
                     </h4>
   
                     <p
                       className="
         text-[#64748B] 
         text-[12px] 
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

export default SmsChoose;