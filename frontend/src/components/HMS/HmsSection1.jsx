import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import SmsHomeImg from "../../assets/SmsImg/BigImg/StudentsImg.png";
import "./HMS.css";
import sms_hero_img from "../../../src/assets/sms-hero.png";
import at from "../../../src/assets/attt.png";
import tm from "../../../src/assets/tmm.png";
import cm from "../../../src/assets/cmm.png";
import sms_gif from "../../../src/assets/sms-gif.gif";
import { X, ChevronDown } from "lucide-react";
import ContactImg from "../../../src/assets/gettouch.png";
import Contact from "../../components/navbar/Contact";

const HmsSection1 = () => {
  const [showForm, setShowForm] = useState(false);
  return (
    <>
      <div className="hms-hero-section">
        <div style={{ textAlign: "center" }} className="pt-[85px] md:pt-[100px] lg:pt-[170px]">
          <h1 className="hms-hero-title flex items-center justify-center font-bold text-[#1E293B] 
                text-[28px] md:text-[40px] lg:text-[56px]" 
              style={{ fontFamily: '"Public Sans", sans-serif' }}>
            Currently In Development 
            <img src={sms_gif} alt="sms_gif" className="w-30 h-30 ml-0 md:w-55 md:h-55 ml-9" />
          </h1>

          <p className="font-normal text-[#64748B] text-center mx-auto
                        text-[14px] md:text-[16px] lg:text-[18px] 
                        max-w-[90%] md:max-w-[600px] lg:max-w-[800px]">
            We're crafting a next-generation hotel management solution. 
            <br className="hidden md:block" /> 
            Explore the features below for an early preview.
          </p>
          <button
            onClick={() => setShowForm(true)}
            style={{ backgroundColor: "#0079FE", borderRadius: "35px", padding: "16px", fontFamily: '"Public Sans", sans-serif', color: "white", height: "52px" }}>
            Notify Me
          </button>
        </div>
        <div>
          <div style={{ display: "flex", justifyContent: "center", paddingTop: "60px", position: "relative" }}>
            <div className="hms-hero-bg">
              <img
                src={at}
                alt="adm"
                className="hidden sm:block absolute md:h-[35px] md:w-[160px] xl:w-[185px] lg:w-[175px]  xl:h-[45px]
                -left-6 md:-left-[50px] lg:-left-[80px] 
                -top-6 md:-top-[100px]"
              />
              
              <img
                src={tm}
                alt="exm"
                className="hidden sm:block absolute md:h-[35px] md:w-[160px] xl:w-[185px] lg:w-[175px]  xl:h-[45px]
                -left-6 md:-left-[20px] lg:-left-[30px]
                -bottom-2 md:-bottom-[50px] lg:-bottom-[60px]"
              />
              
              <img
                src={cm}
                alt="att"
                className="hidden sm:block absolute md:h-[35px] md:w-[160px] xl:w-[185px] lg:w-[175px]  xl:h-[45px]
                -right-6 md:-right-[40px] lg:-right-[30px]
                -bottom-4 md:-bottom-[50px]"
              />
            </div>
          </div>
        </div>
        <div style={{ paddingTop: "75px" }}>
          <div style={{ textAlign: "center", display: "flex", justifyContent: "center", gap: "10px", paddingBottom: "15px" }} className="button-container">
            <button style={{ fontFamily: '"Public Sans", sans-serif', backgroundColor: "#1788c071", color: "white", padding: "8px 15px", borderRadius: "25px" }}>Stay Management</button>
            <button style={{ fontFamily: '"Public Sans", sans-serif', backgroundColor: "#1788c071", color: "white", padding: "8px 15px", borderRadius: "25px" }}>Room Management</button>
            <button style={{ fontFamily: '"Public Sans", sans-serif', backgroundColor: "#1788c071", color: "white", padding: "8px 15px", borderRadius: "25px" }}>Seamless Growth</button>
          </div>
          <div className="hero-heading-container" style={{ textAlign: 'center', display: "flex", gap: "20px", flexDirection: "column", justifyContent: 'center' }}>
            <h1 className="hms-hero-title" style={{ fontFamily: '"Public Sans", sans-serif', fontWeight: "700", color: "#FFFFFF", marginTop: "16px" }}>
              Hotel Management System
            </h1>
            <p className="hms-hero-bottom-txt" style={{ fontFamily: '"Public Sans", sans-serif', fontWeight: "400", color: "#E5F5FF" }}>
              With MUN-C Hotel Management System (HMS), you can digitalize your entire hotel ecosystem — from Reservations to Check-ins, Housekeeping, Billing, and Guest Communication — all under one secure platform. Our system brings together Administrators, Staff, and Guests to make hospitality management simpler, faster, and more transparent. It's time to say goodbye to paperwork and hello to smarter hotel management.
            </p>
          </div>
        </div>

        <Contact setShowForm={setShowForm} showForm={showForm} />
      </div>
    </>
  );
};

export default HmsSection1;