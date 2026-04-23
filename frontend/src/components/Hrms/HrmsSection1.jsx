import React, { useState } from "react";
import B_IMS from "../../assets/HrmsImg/new_img.png";
import Cloud1 from "../../assets/HrmsImg/cloud1.png";
import Cloud2 from "../../assets/HrmsImg/cloud2.png";
import Green from "../../assets/HrmsImg/green.png";
import Pink from "../../assets/HrmsImg/pink.png";
import Orange from "../../assets/HrmsImg/orangee.png";
import Contact from "../../components/navbar/Contact";

const HrmsSection1 = () => {
  const [showForm, setShowForm] = useState(false);

  return (
    <>
      <div className="w-full flex flex-col items-center overflow-hidden relative">
        {/* BACKGROUND */}
        <div
          className="
            w-[200%]
            h-[700px]
            sm:h-[550px]
            md:h-[820px]
            lg:h-[750px]
            xl:h-[750px]
            2xl:h-[850px]
            rounded-b-[50%]
          "
          style={{
            background:
              "linear-gradient(73.77deg, #004CAF 1.56%, #4DB5FF 94.92%)",
          }}
        />

        {/* CONTENT */}
        <div className="absolute top-0 w-full z-10">
          {/* CLOUDS */}
          <div className="absolute inset-0 pointer-events-none">
            <img
              src={Cloud1}
              className="absolute top-[18%] left-0 w-[120px] sm:w-[180px] md:w-[220px] lg:w-[420px]"
            />
            <img
              src={Cloud2}
              className="absolute top-[10px] right-0 w-[160px] sm:w-[250px] md:w-[320px] lg:w-[650px]"
            />
          </div>

          {/* MAIN */}
          <div
            className="
              max-w-[1440px] 2xl:max-w-[1800px] mx-auto
              flex flex-col lg:flex-row items-center w-full 

              mt-[100px]
              sm:mt-[130px]
              md:mt-[150px]
              lg:mt-[180px]
              xl:mt-[200px]
              2xl:mt-[220px]

              px-4 md:px-6
              lg:gap-[40px]
              xl:gap-[60px]
              2xl:gap-[80px]
            "
          >
            {/* LEFT */}
            <div
              className="
                text-white flex flex-col w-full lg:w-2/5
                items-center text-center
                lg:items-start lg:text-left
              "
            >
              {/* TABS */}
              <div className="flex flex-wrap gap-1 justify-center lg:justify-start">
                {["Smarter HR", "Happier Teams", "Seamless Growth"].map(
                  (item) => (
                    <div
                      key={item}
                      className="px-3 py-1.5 bg-white/10 rounded-full"
                    >
                      <span className="text-[11px] md:text-[12px] whitespace-nowrap">
                        {item}
                      </span>
                    </div>
                  ),
                )}
              </div>

              {/* CONTENT BLOCK */}
              <div className="mt-4 flex flex-col gap-1 lg:items-start xl:items-start md:items-center sm:items-center w-full">
                {/* HEADING */}
                <h1
                  className="
                    font-bold
                    text-[18px]
                    sm:text-[18px]
                    md:text-[25px]
                    lg:text-[32px]
                    xl:text-[42px]
                    2xl:text-[56px]
                    leading-tight
                    xl:text-left
                    lg:text-left
                    2xl:text-left
                    w-full
                  "
                  style={{ maxWidth: "720px" }}
                >
                  Human Resource Management System
                </h1>

                {/* PARAGRAPH */}
                <p
                  className="
                    text-[#E5F5FF]
                    text-[10px]
                    sm:text-[10px]
                    md:text-[12px]
                    lg:text-[14px]
                    xl:text-[16px]
                    2xl:text-[18px]
                    leading-relaxed
                    xl:text-left
                    lg:text-left
                    2xl:text-left
                    w-full
                  "
                  style={{ maxWidth: "700px" }}
                >
                  Your people are the heart of your business — and managing them
                  should be simple. With MUN-C HR Management Software (HRMS),
                  you can take control of your workforce with clarity and
                  confidence. From new hires to payroll, performance, and beyond
                  — everything runs smoothly through one intelligent platform
                  designed for modern businesses.
                </p>

                {/* BUTTON */}
                <div
                  onClick={() => setShowForm(true)}
                  className="
                    px-4 py-2 bg-white cursor-pointer
                    w-fit
                    self-center lg:self-start
                  "
                >
                  <span className="text-[#0079FE] text-[13px] whitespace-nowrap">
                    Book a Free Demo
                  </span>
                </div>
              </div>
            </div>

            {/* RIGHT */}
            <div
              className="
                flex w-full lg:w-3/5 justify-center lg:justify-end
                items-center mt-10 lg:mt-0 relative

                lg:pr-[0px] xl:pr-[0px] 2xl:pr-[0px]
              "
            >
              {/* IMAGE */}
              <img
                src={B_IMS}
                alt="HRMS Dashboard"
                className="
    w-full
    sm:w-[600px]
    md:w-[700px]
    lg:w-[950px]
    xl:w-[1100px]
    2xl:w-[1300px]
    max-w-full
    h-auto
    md:max-h-[320px]
    xl:max-h-[420px]
    2xl:max-h-[550px]
    object-contain
  "
              />

<img
  src={Green}
  className="
    absolute
    top-[-14%] md:top-[-11%]  lg:top-[-16%]
    right-[55%] md:right-[60%]

    w-[60px] md:w-[100px] lg:w-[120px]
    xl:w-[139px]
  "
/>
<img
  src={Orange}
  className="
    absolute bottom-[-12%] right-[5%]   lg:bottom-[-16%]
 w-[60px] md:w-[100px] lg:w-[120px]
    xl:w-[135px]
  "
/>

         <img
  src={Pink}
  className="
    absolute bottom-[-12%] left-[5%] lg:bottom-[-16%]

   w-[60px] md:w-[100px] lg:w-[120px]
    xl:w-[135px]
  "
/>
            </div>
          </div>
        </div>
      </div>

      <Contact setShowForm={setShowForm} showForm={showForm} />
    </>
  );
};

export default HrmsSection1;
