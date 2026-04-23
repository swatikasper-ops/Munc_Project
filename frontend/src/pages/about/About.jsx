import React from "react";
import AboutImg1 from "../../assets/AboutImg/About1.jpg";
import AboutImg from "../../assets/AboutImg/AboutImg.jpg";
import AboutImg3 from "../../assets/AboutImg/AboutImg3.jpg";
import AboutImg4 from "../../assets/AboutImg/AboutImg4.jpg";

import AboutImg6 from "../../assets/AboutImg/AboutImg5.jpg";
import AboutImg7 from "../../assets/AboutImg/AboutImg7.jpg";
import AboutImg2 from "../../assets/AboutImg/About2.png";
import "../features/features.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-fade";

const About = () => {
  const aboutImages = [
    AboutImg1,
    AboutImg,
    AboutImg3,
    AboutImg4,

    AboutImg6,
    AboutImg7,
  ];
  return (
    <div className="bg-[#FFFFFF] mt-12">
      <div className="px-6 sm:px-10 lg:px-20 xl:px-40 py-12 lg:py-16">
        {/* First Section */}
        <div className="flex flex-col lg:flex-col items-center justify-between gap-10 max-w-[1386px] mx-auto">
          {/* Text Part */}
          <div className="w-full lg: text-center lg:text-left">
            <h1 className="text-2xl sm:text-3xl lg:text-[36px] leading-[130%] bg-gradient-to-r from-[#004CAF] to-[#4DB5FF] bg-clip-text text-transparent font-bold">
              About Us
            </h1>

            <p className="mt-3 text-sm sm:text-base lg:text-[16px] text-[#64748B]">
              Kasper Infotech Private Limited is the proud developer of MUN-C,
              our flagship business management brand. <br /> As a
              technology-driven company, we focus on building scalable, secure,
              and user-friendly solutions that help businesses thrive in the
              digital era. <br /> With MUN-C BMS (Business Management Suite), we
              bring all essential management systems under one powerful,
              integrated platform.
            </p>
          </div>

          {/* Image Part */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <div className="w-full max-w-[897px]">
              <Swiper
                modules={[Autoplay, EffectFade]}
                effect="fade"
                fadeEffect={{ crossFade: true }}
                autoplay={{
                  delay: 3800,
                  disableOnInteraction: false,
                }}
                loop={true}
                slidesPerView={1}
                className="w-full"
              >
                {aboutImages.map((img, index) => (
                  <SwiperSlide key={index}>
                    <img
                      src={img}
                      alt={`About slide ${index + 1}`}
                      className="w-full h-[300px] sm:h-[350px] lg:h-[400px] rounded-2xl object-cover"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>

        {/* Second Section */}
        <h1 className="text-2xl py-8 mt-4 text-center sm:text-3xl lg:text-[36px] leading-[130%] bg-gradient-to-r from-[#004CAF] to-[#4DB5FF] bg-clip-text text-transparent font-bold">
          Our Brand Story
        </h1>
        <div className="flex flex-col-reverse lg:flex-row items-center justify-center gap-8 lg:gap-[85px]">
          <div className="w-full max-w-[657px]">
            <div className="space-y-4 text-start font-medium text-[#64748B] lg:text-left">
              <p className="text-sm sm:text-base lg:text-[16px]">
                In today’s fast-paced digital world, MUN-C carries forward that
                same spirit, acting as a trusted digital manager that simplifies
                complex operations with clarity, intelligence, and fairness.
                MUN-C is not just software—it is a brand rooted in history and
                inspired by the ancient word “Munshi ji”. A Munshi ji was a
                respected figure known for wisdom, discipline, and the art of
                managing people and trade fairly.
              </p>
              {/* <p className="text-sm sm:text-base lg:text-[16px]">
                MUN-C is not just software—it is a brand rooted in history and
                inspired by the ancient word “Munshi ji”. A Munshi ji was a
                respected figure known for wisdom, discipline, and the art of
                managing people and trade fairly.
              </p> */}
            </div>
          </div>
          <div className="w-full max-w-[321px]">
            <img
              src={AboutImg2}
              alt="Our Brand Story"
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
