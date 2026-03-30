import React from "react";
import sms_key_one from "../../assets/sms-key-one.png";
import sms_key_two from "../../assets/sms-key-two.png";
import sms_key_three from "../../assets/sms-key-three.png";
import sms_key_four from "../../assets/sms-key-four.png";
import sms_key_five from "../../assets/sms-key-five.png";
import id_logo from "../../assets/sms-key-logo-four.png";

const KeyFeaturesInline = () => {
  return (
    <section className="bg-[white] py-4 pb-5 font-['Public_Sans']">
      <h2 className="text-center text-[#0070db] text-[28px] sm:text-[36px] md:text-[44px] lg:text-[52px] font-bold mb-2 sm:mb-3">
        Key Features
      </h2>

      <div className="w-full max-w-[1280px] mx-auto px-3 sm:px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">

          {/* ✅ Feature 1 FIXED */}
          <div className="lg:col-span-3 bg-[#FCFEFF] border border-[#e8e8e8] rounded-xl sm:rounded-2xl p-4 sm:p-5 flex flex-col lg:flex-row justify-between items-start gap-4 lg:gap-6">

            {/* LEFT - TOP */}
            <div className="w-full lg:w-[44%] flex flex-col items-start text-left">
              <div className="inline-flex px-3 py-1 rounded-full border border-[#d7d7d7] text-[#0a78ff] text-xs sm:text-sm font-medium mb-3 sm:mb-4">
                Feature 1
              </div>

              <h3 className="text-[#273247] text-lg sm:text-xl md:text-2xl font-medium leading-tight">
                Admissions & Enrollment Management
              </h3>

              <p className="text-[#465163] text-xs sm:text-sm mt-2 max-w-[330px]">
                Easily manage inquiries, approvals, and class allocations.
              </p>
            </div>

            {/* RIGHT IMAGE */}
            <div className="w-full lg:w-auto flex justify-center items-end">
              <img
                src={sms_key_one}
                alt="sms_key_one"
                className="w-full max-w-[400px] sm:max-w-[500px] lg:max-w-[600px] h-auto object-contain"
              />
            </div>
          </div>

          {/* Feature 2 */}
          <div className="bg-[#FCFEFF] border border-[#e8e8e8] rounded-xl sm:rounded-2xl p-4 sm:p-5">
            <div className="inline-flex items-center justify-center px-3 py-1 rounded-full border border-[#d7d7d7] text-[#0a78ff] text-xs sm:text-sm font-medium bg-[#FCFEFF] mb-3 sm:mb-4">
              Feature 2
            </div>
            <h3 className="text-[#273247] text-lg sm:text-xl md:text-2xl font-medium leading-tight">
              Attendance Management
            </h3>
            <p className="text-[#465163] text-xs sm:text-sm mt-2">
              Track student and teacher attendance accurately with digital logs.
            </p>
            <div className="flex justify-end items-end mt-3 sm:mt-4">
              <img
                src={sms_key_two}
                alt="sms_key_two"
                className="w-[200px] h-auto object-contain"
              />
            </div>
          </div>

          {/* ✅ Feature 3 FIXED */}
          <div className="bg-[#FCFEFF] border border-[#e8e8e8] rounded-xl sm:rounded-2xl p-4 sm:p-5 flex flex-col justify-between">
            <div>
              <div className="inline-flex px-3 py-1 rounded-full border border-[#d7d7d7] text-[#0a78ff] text-xs sm:text-sm font-medium mb-3 sm:mb-4">
                Feature 3
              </div>
              <h3 className="text-[#273247] text-lg sm:text-xl md:text-2xl font-medium">
                Fee & Finance Module
              </h3>
              <p className="text-[#465163] text-xs sm:text-sm mt-2">
                Say goodbye to cash handling and long queues.
              </p>
            </div>

            <div className="flex justify-center items-end mt-2">
              <img
                src={sms_key_three}
                alt="sms_key_three"
                className="w-[230px] h-full object-contain"
              />
            </div>
          </div>

          {/* ✅ Feature 4 FIXED */}
          <div className="bg-[#FCFEFF] border border-[#e8e8e8] rounded-xl sm:rounded-2xl p-4 sm:p-5 flex flex-col justify-between">
            <div>
              <div className="inline-flex px-3 py-1 rounded-full border border-[#d7d7d7] text-[#0a78ff] text-xs sm:text-sm font-medium mb-3 sm:mb-4">
                Feature 4
              </div>
              <h3 className="text-[#273247] text-lg sm:text-xl md:text-2xl font-medium">
                Exams & Results Management
              </h3>
              <p className="text-[#465163] text-xs sm:text-sm mt-2">
                Plan, conduct, and evaluate exams effortlessly.
              </p>
            </div>

            <div className="flex justify-center items-end mt-2">
              <img
                src={sms_key_four}
                alt="sms_key_four"
                className="w-[260px] h-full object-contain"
              />
            </div>
          </div>

          {/* Feature 5 - Wide Card (spans 2 columns) */} <div className="md:col-span-2 bg-[#FCFEFF] border border-[#e8e8e8] rounded-xl sm:rounded-2xl p-4 sm:p-5"> <div className="inline-flex items-center justify-center px-3 py-1 rounded-full border border-[#d7d7d7] text-[#0a78ff] text-xs sm:text-sm font-medium bg-[#FCFEFF] mb-3 sm:mb-4"> Feature 5 </div> <h3 className="text-[#273247] text-lg sm:text-xl md:text-2xl font-medium leading-tight"> Teacher & Student Portal </h3> <p className="text-[#465163] text-xs sm:text-sm mt-2"> Enhance communication and transparency. </p> {/* Portal Cards Container */} <div className="relative mt-4 sm:mt-5 min-h-[280px] sm:min-h-[320px] md:min-h-[340px]"> {/* Left Portal Card */} <div className="absolute left-0 bottom-0 w-[200px] sm:w-[240px] md:w-[280px] bg-white border border-[#d8d8d8] rounded-xl sm:rounded-2xl overflow-hidden shadow-sm z-10"> <h4 className="text-[#202020] text-base sm:text-lg md:text-xl font-medium px-4 sm:px-5 py-3 sm:py-4 pb-2 sm:pb-3.5 m-0"> All Teachers </h4> <div className="overflow-x-auto"> <table className="w-full border-collapse text-[11px] sm:text-xs"> <thead className="bg-[#EDF9FD]"> <tr> <th className="border-t border-[#d8d8d8] p-2 sm:p-3 text-left text-[#555] font-medium">No</th> <th className="border-t border-[#d8d8d8] p-2 sm:p-3 text-left text-[#555] font-medium">Students</th> </tr> </thead> <tbody> {[1, 2, 3].map((item) => (<tr key={item}> <td className="border-t border-[#d8d8d8] p-2 sm:p-3 text-[#555]">0{item}</td> <td className="border-t border-[#d8d8d8] p-2 sm:p-3 text-[#555]"> <span className="flex items-center gap-1.5"> <img src={id_logo} alt="logo" className="w-4 h-4 sm:w-5 sm:h-5" /> <span className="text-[11px] sm:text-xs">Sophia Wilson</span> </span> </td> </tr>))} </tbody> </table> </div> </div> {/* Right Portal Card */} <div className="absolute right-0 top-0 w-[250px] sm:w-[320px] md:w-[380px] lg:w-[430px] bg-white border border-[#d8d8d8] rounded-xl sm:rounded-2xl overflow-hidden shadow-sm z-20"> <h4 className="text-[#202020] text-base sm:text-lg md:text-xl font-medium px-4 sm:px-5 py-3 sm:py-4 pb-2 sm:pb-3.5 m-0"> All Students List </h4> <div className="overflow-x-auto"> <table className="w-full border-collapse text-[11px] sm:text-xs min-w-[250px]"> <thead className="bg-[#EDF9FD]"> <tr> <th className="border-t border-[#d8d8d8] p-2 sm:p-3 text-left text-[#555] font-medium">No</th> <th className="border-t border-[#d8d8d8] p-2 sm:p-3 text-left text-[#555] font-medium">Students</th> <th className="border-t border-[#d8d8d8] p-2 sm:p-3 text-left text-[#555] font-medium">Roll num</th> <th className="border-t border-[#d8d8d8] p-2 sm:p-3 text-left text-[#555] font-medium">Class</th> </tr> </thead> <tbody> {[1, 2, 3, 4].map((item) => (<tr key={item}> <td className="border-t border-[#d8d8d8] p-2 sm:p-3 text-[#555]">0{item}</td> <td className="border-t border-[#d8d8d8] p-2 sm:p-3 text-[#555]"> <span className="flex items-center gap-1.5"> <img src={id_logo} alt="logo" className="w-4 h-4 sm:w-5 sm:h-5" /> <span className="text-[11px] sm:text-xs">Sophia Wilson</span> </span> </td> <td className="border-t border-[#d8d8d8] p-2 sm:p-3 text-[#555]">522bcs009</td> <td className="border-t border-[#d8d8d8] p-2 sm:p-3 text-[#555]">12 - A</td> </tr>))} </tbody> </table> </div> </div> </div> </div>

          {/* ✅ Feature 6 FIXED */}
          <div className="bg-[#FCFEFF] border border-[#e8e8e8] rounded-xl sm:rounded-2xl p-4 sm:p-5 flex flex-col justify-between">
            <div>
              <div className="inline-flex px-3 py-1 rounded-full border border-[#d7d7d7] text-[#0a78ff] text-xs sm:text-sm font-medium mb-3 sm:mb-4">
                Feature 6
              </div>
              <h3 className="text-[#273247] text-lg sm:text-xl md:text-2xl font-medium">
                Transport Management
              </h3>
              <p className="text-[#465163] text-xs sm:text-sm mt-2">
                Ensure student safety and operational efficiency.
              </p>
            </div>

            <div className="flex justify-center items-end mt-2">
              <img
                src={sms_key_five}
                alt="sms_key_five"
                className="w-[260px] h-full object-contain"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default KeyFeaturesInline;