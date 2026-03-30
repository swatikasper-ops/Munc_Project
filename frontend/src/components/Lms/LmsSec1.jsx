import React, { useState } from "react";
import B_IMS from "../../assets/LmsImg/BROWSER-LMS.png"; // LMS Image
import Cloud1 from "../../assets/LmsImg/cloud1.png";
import Cloud2 from "../../assets/LmsImg/cloud2.png";
import Green from "../../assets/LmsImg/green.png";
import Pink from "../../assets/LmsImg/pink.png";
import Orange from "../../assets/LmsImg/orange.png";
import Contact from "../../components/navbar/Contact";

const LmsSec1 = () => {
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
            <img src={Cloud1} className="absolute top-[18%] left-0 w-[120px] sm:w-[180px] md:w-[220px] lg:w-[420px]" />
            <img src={Cloud2} className="absolute top-[10px] right-0 w-[160px] sm:w-[250px] md:w-[320px] lg:w-[650px]" />
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
                {["Connect", "Convert", "Celebrate"].map(
                  (item) => (
                    <div
                      key={item}
                      className="px-3 py-1.5 bg-white/10 rounded-full"
                    >
                      <span className="text-[11px] md:text-[12px] whitespace-nowrap">
                        {item}
                      </span>
                    </div>
                  )
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
                  Smart Lead Management System (LMS)
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
                 Our LMS is part of the MUN-C Business Management Suite (BMS) — connecting marketing, sales, and customer data seamlessly. From the first click to the final deal, every lead stays organized, nurtured, and ready to convert. That’s why MUN-C brings you a Smart Lead Management System (LMS) — an intelligent, all-in-one solution that helps you capture, track, and convert leads faster.
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
                alt="LMS Dashboard"
                className="
                  w-[100%]
                  sm:w-[500px]
                  md:w-[600px]
                  lg:w-[900px]
                  xl:w-[1050px]
                  2xl:w-[1200px]
                  h-auto object-contain
                "
              />

              {/* GREEN */}
              <img
                src={Green}
                className="
                  absolute 
                  top-[-10%] lg:top-[-15%]
                  right-[60%]
                  w-[50px] sm:w-[70px] md:w-[80px] lg:w-[110px]
                "
              />

              {/* ORANGE */}
              <img
                src={Orange}
                className="
                  absolute bottom-[-8%] right-[8%]
                  w-[50px] sm:w-[70px] md:w-[90px] lg:w-[120px]
                "
              />

              {/* PINK */}
              <img
                src={Pink}
                className="
                  absolute bottom-[-8%] left-[2%]
                  w-[50px] sm:w-[70px] md:w-[90px] lg:w-[120px]
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

export default LmsSec1;