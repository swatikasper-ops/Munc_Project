import React, { useState } from "react";
// import { FaArrowRightLong } from "react-icons/fa6";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import SmsHomeImg from "../../assets/SmsImg/BigImg/StudentsImg.png";
import "./SMS.css"
import sms_hero_img from "../../../src/assets/sms-hero.png"
import adm from "../../../src/assets/adm.png"
import exm from "../../../src/assets/exm.png"
import att from "../../../src/assets/att.png"
import sms_gif from "../../../src/assets/sms-gif.gif"
import { X, ChevronDown } from "lucide-react";
import ContactImg from "../../../src/assets/gettouch.png"
import Contact from '../../components/navbar/Contact'

const SmsSection1 = () => {
  const [showForm, setShowForm] = useState(false);
  return (
    <>
      <div className="sms-hero-section">
        <div style={{ textAlign: "center" }} className="pt-[85px] md:pt-[100px] lg:pt-[170px]">
         <h1 className="sms-hero-title flex items-center justify-center font-bold text-[#1E293B] 
               text-[28px] md:text-[40px] lg:text-[56px]" 
    style={{ fontFamily: '"Public Sans", sans-serif' }}>
    Currently in Development 
    <img src={sms_gif} alt="sms_gif" className="w-30 h-30 ml-0 md:w-55 md:h-55 ml-9" />
</h1>

<p className="font-normal text-[#64748B] text-center mx-auto
              text-[14px] md:text-[16px] lg:text-[18px] 
              max-w-[90%] md:max-w-[600px] lg:max-w-[800px]">
    We’re crafting a next-generation hotel management solution. 
    <br className="hidden md:block" /> 
    Explore the features below for an early preview.
</p>
          <button
            onClick={() => setShowForm(true)}
            style={{ backgroundColor: "#0079FE", borderRadius: "35px", padding: "16px", fontFamily: '"Public Sans", sans-serif', color: "white", height: "52px" }}>
            Notify Me
          </button>
        </div>
        <div >
          <div style={{ display: "flex", justifyContent: "center", paddingTop: "60px", position: "relative" }}>
            <div className="sms-hero-bg">
              <img className="sms-shape" src={adm} alt="adm" style={{ height: "32px", position: 'absolute', left: "-140px", top: "-100px" }} />
              <img className="sms-shape" src={exm} alt="exm" style={{ height: "32px", position: 'absolute', left: "-200px", bottom: "-20px" }} />
              <img className="sms-shape" src={att} alt="att" style={{ height: "32px", position: 'absolute', right: "-190px", bottom: "-60px" }} />
            </div>
          </div>
        </div>
        <div style={{ paddingTop: "75px" }}>
          <div style={{ textAlign: "center", display: "flex", justifyContent: "center", gap: "10px", paddingBottom: "15px" }} className="button-container">
            <button style={{ fontFamily: '"Public Sans", sans-serif', backgroundColor: "#1788c071", color: "white", padding: "8px 15px", borderRadius: "25px", }}>Smarter HR </button>
            <button style={{ fontFamily: '"Public Sans", sans-serif', backgroundColor: "#1788c071", color: "white", padding: "8px 15px", borderRadius: "25px", }}>Happier Teams</button>
            <button style={{ fontFamily: '"Public Sans", sans-serif', backgroundColor: "#1788c071", color: "white", padding: "8px 15px", borderRadius: "25px", }}>Seamless Growth</button>
          </div>
          <div className="hero-heading-container" style={{ textAlign: 'center', display: "flex", gap: "20px", flexDirection: "column", justifyContent: 'center' }}>
  <h1 className="sms-hero-title" style={{ fontFamily: '"Public Sans", sans-serif', fontWeight: "700", color: "#FFFFFF", marginTop: "16px" }}>
    School Management System
  </h1>
<p className="sms-hero-bottom-txt" style={{ fontFamily: '"Public Sans", sans-serif', fontWeight: "400", color: "#E5F5FF" }}>
  With MUN-C School Management System (SMS), you can digitalize your entire school ecosystem — from Admissions to Attendance, Exams, Fees, Transport, and Communication — all under one secure platform. Our system brings together Administrators, Teachers, Students, and Parents to make learning management simpler, faster, and more transparent. It’s time to say goodbye to paperwork and hello to smarter education management.
</p>
          </div>
        </div>

        <Contact setShowForm={setShowForm} showForm={showForm} />

      </div>
    </>
  );
};

export default SmsSection1;
