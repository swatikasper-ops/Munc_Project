import React, { useEffect, useRef, useState } from "react";
import "./features.css";
import Contact from "../../components/navbar/Contact";
import HeroImg from "../../assets/MUNCDASHBOARD.png";
import HeroImg2 from "../../assets/IMS.png";
import HeroImg3 from "../../assets/LMS.png";
import HeroImg4 from "../../assets/SMS.png";
// import muncin from "../../assets/muncin.png";
// import Arrow from "../../assets/arrow.png";
// import Mission1 from "../../assets/mission1.png";
// import Mission2 from "../../assets/mission2.heic";
// import Mission3 from "../../assets/mission3.png";
// import Testimonial from "../../assets/testimonial.png";
// import Contact from "../../assets/contact.png";
// import ScrollCarousel from "../../components/carousel/ScrollCarousel";
// import RatingCard from "../../components/ratingCard/RatingCard";
// import FAQ from "../../components/faq/FAQ";
// import TimerCarousel from "../../components/TimerCarousel/TimerCarousel";
// import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
// import MobilePaginationSlider from "../../components/mobileFeatureSlider/MobilePaginationSlider";
import emailjs from "@emailjs/browser";
import rating1 from "../../assets/blackbug.png";
import rating2 from "../../assets/medlay.png";
import rating3 from "../../assets/netario.png";
import rating4 from "../../assets/ups.png";
// import BillingSection from "../../components/BillingSection/BillingSection";
// import VideoPlayer from "../../components/VideoPlayer/VideoPlayer";
// import BookDemoForm from "../../components/popup/BookDemoForm";
// import axios from "axios";
// import toast from "react-hot-toast";

import { FaArrowRightLong } from "react-icons/fa6";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import HomeDesk from "../../assets/HomeSection/Homedesk.png";
import BgImage from "../../assets/HomeSection/BackgroundLine.png";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation, EffectFade } from "swiper/modules";

import Our_Story from "./Our_Story";
import Bussiness_Transform from "./Bussiness_Transform";
import FAQ from "./FAQ";
import WhyTrust from "./WHY_TRUST";

// import ims from "../../assets/HomeSection/HomeScreenImg/IMS 1.png";
import ims from "../../assets/HomeSection/HomeScreenImg/IMS.png";
import hrms from "../../assets/HrmsImg/new_img.png";
import lms from "../../assets/LmsImg/LMS22.png";
import sms from "../../assets/SmsImg/sms_img1.png";
import hotel from "../../assets/hms-hero-dash.png";

// Floating Icons
import float1 from "../../assets/HomeSection/FloatingIcons/Chart.svg";
import float2 from "../../assets/HomeSection/FloatingIcons/Arrow.svg";
import float3 from "../../assets/HomeSection/FloatingIcons/Layer.svg";
import TopHeader from "../../assets/HomeSection/top.svg";
import Star from "../../assets/HomeSection/FloatingIcons/star.png";
import Thunder from "../../assets/HomeSection/FloatingIcons/thunder.png";
import loop from "../../assets/HomeSection/FloatingIcons/loop.png";
import starit from "../../assets/HomeSection/FloatingIcons/starit.png";
import Our_Product from "./Our_Product";
import Clients_LoveUs from "./Clients_LoveUs";
import HowHelpYou from "./HowHelpYou";
import SafeBanner from "./SafeBanner";
import MeetFounder from "./MeetFounder";
import TestimonialSlider from "./TestimonialSlider";
import MeetTeam from "./MeetTeam";
// import Contact from "./Contact";
import NavBar from "../../components/navbar/Navbar";
// import FirstVisitPopup from "../../components/popup/FirstVisitPopup";

// icons
import { GiCardboardBox } from "react-icons/gi";
import { FaBoxOpen } from "react-icons/fa";
import { FaPeopleRoof } from "react-icons/fa6";
import { IoMagnetSharp } from "react-icons/io5";
import { TbSchool } from "react-icons/tb";
import { BsBuildingFill } from "react-icons/bs";
import Testimonials from "./Testimonials";
import FeaturesSection from "./FeaturesSection";
import { Link } from "react-router-dom";
import ProductSuite from "./ProductSuite";
import { HiOutlineExternalLink } from "react-icons/hi";

const Features = () => {
  const { scrollY } = useScroll();
  const [showForm, setShowForm] = useState(false);
  // const navigate = useNavigate();

  const handleClick = () => {
    const section = document.getElementById("contact");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Raw transforms
  const yLeftRaw = useTransform(scrollY, [0, 600], [0, -200]);
  const xLeftRaw = useTransform(scrollY, [0, 600], [0, -300]);
  const yRightRaw = useTransform(scrollY, [0, 600], [0, -200]);
  const xRightRaw = useTransform(scrollY, [0, 600], [0, 300]);
  const yCenterRaw = useTransform(scrollY, [0, 600], [0, -250]);

  // Smooth spring animation
  const yLeft = useSpring(yLeftRaw, { stiffness: 60, damping: 20 });
  const xLeft = useSpring(xLeftRaw, { stiffness: 60, damping: 20 });
  const yRight = useSpring(yRightRaw, { stiffness: 60, damping: 20 });
  const xRight = useSpring(xRightRaw, { stiffness: 60, damping: 20 });
  const yCenter = useSpring(yCenterRaw, { stiffness: 60, damping: 20 });

  const [showDemoForm, setShowDemoForm] = useState(false);
  const openDemoForm = () => setShowDemoForm(true);
  const closeDemoForm = () => setShowDemoForm(false);

  const service_id = "service_ixhoibk";
  const template_id = "template_z16frt6";
  const user_id = "ozF4iULix-uuJgZpO";
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    countryCode: "+91",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    // Log inside the function to see updates
    console.log(formData);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation
    if (!formData.firstName || !formData.email || !formData.message) {
      alert("Please fill all required fields");
      return;
    }

    setLoading(true);

    const emailParams = {
      first_name: formData.firstName,
      last_name: formData.lastName,
      email: formData.email,
      phone: `${formData.countryCode} ${formData.phone}`,
      message: formData.message,
    };

    try {
      const response = await emailjs.send(
        service_id,
        template_id,
        emailParams,
        user_id,
      );

      console.log("Success!", response.status, response.text);
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        countryCode: "+91",
        phone: "",
        message: "",
      });
      alert("Message sent successfully!");
    } catch (error) {
      console.log("FAILED...", error);
      alert("Failed to send message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const images = [HeroImg, HeroImg2, HeroImg3, HeroImg4];
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto change every 3s
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  // words typing
  const words = ["SALES", "INVENTORY", "PEOPLE", "SCHOOL", "HOTEL"];
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];

    let typingSpeed = isDeleting ? 50 : 100;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setText(currentWord.substring(0, text.length + 1));

        if (text === currentWord) {
          setTimeout(() => setIsDeleting(true), 1000); // pause after typing
        }
      } else {
        setText(currentWord.substring(0, text.length - 1));

        if (text === "") {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % words.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [text, isDeleting, wordIndex]);

  // tabs
  const tabs = [
    {
      label: "Inventory",
      icon: <FaBoxOpen />,
      img: ims,
      link: "/products/inventory-management-system",
    },
    {
      label: "People",
      icon: <FaPeopleRoof />,
      img: hrms,
      link: "/products/human-resource-management-system",
    },
    {
      label: "Leads",
      icon: <IoMagnetSharp />,
      img: lms,
      link: "/products/lead-management-system",
    },
    {
      label: "Schools",
      icon: <TbSchool />,
      img: sms,
      link: "/products/school-management-system",
    },
    {
      label: "Hotels",
      icon: <BsBuildingFill />,
      img: hotel,
      link: "/products/hotel-management-system",
    },
  ];

  const [activeTab, setActiveTab] = useState(0);
  const swiperRef = useRef(null);

  return (
    <div>
      {/* <FirstVisitPopup></FirstVisitPopup> */}
      <NavBar />

      <div
        style={{
          backgroundImage: `url(${BgImage})`,
        }}
      >
        <div
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginBottom: "130px",
            overflow: "hidden",
          }}
        >
          <div
            className="curved-bg"
            style={{
              borderBottomLeftRadius: "50%",
              borderBottomRightRadius: "50%",
              background: "linear-gradient(47deg, #4DB5FF 0%, #004CAF 100%)",
              // position: "absolute",
              zIndex: 1,
              width: "200%",

              // overflow: "hidden",
            }}
          ></div>

          {/* hero section */}
          <div
            className="
              relative w-full h-[1200px]
              bg-cover bg-center bg-no-repeat
              flex flex-col items-center justify-start
              pt-20 sm:pt-25 lg:pt-30
              px-4 sm:px-6 lg:px-12
              mb-[280px]"
            style={{
              // backgroundImage: `url(${BgImage})`,
              // background: 'linear-gradient(47deg, #4DB5FF 0%, #004CAF 100%)'
              position: "absolute",
              zIndex: 2,
            }}
          >
            <motion.img
              src={Star}
              alt="Floating Icon 1"
              className="floating-icon floating-icon-1 "
              style={{
                y: yLeft,
                x: xLeft,
                // mixBlendMode: "soft-light",
                // opacity: 0.6,
              }}
              animate={{
                x: [0, -4, 4, -4, 0],
                y: [0, 3, -3, 3, 0],
                rotate: [0, 1, -1, 1, 0],
              }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />

            <motion.img
              src={Thunder}
              alt="Floating Icon 2"
              className="floating-icon floating-icon-2 "
              style={{
                y: yRight,
                x: xRight,
                // mixBlendMode: "soft-light",
                // opacity: 0.6,
              }}
              animate={{
                x: [0, -4, 4, -4, 0],
                y: [0, 3, -3, 3, 0],
                rotate: [0, 1, -1, 1, 0],
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* <motion.img
          src={float3}
          alt="Floating Icon 3"
          className="floating-icon floating-icon-3 "
          style={{ y: yCenter }}
          animate={{
            x: [0, -4, 4, -4, 0],
            y: [0, 3, -3, 3, 0],
            rotate: [0, -1, 1, -1, 0],
          }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        /> */}

            {/* details */}
            <motion.div
              className="text-center space-y-8 flex flex-col items-center"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div
                className="text-center space-y-3 flex flex-col items-center w-[100%]"
                style={{ overflow: "hidden" }}
              >
                <div
                  style={{
                    position: "absolute",
                    top: "420px",
                    left: "-260px",
                    overflow: "hidden",
                    rotate: "20deg",
                  }}
                >
                  <img
                    src={loop}
                    alt="Loop Image"
                    style={{ width: "402px", opacity: 0.4 }}
                  />
                </div>

                <div
                  style={{
                    position: "absolute",
                    top: "130px",
                    right: "0px",
                    overflow: "hidden",
                  }}
                >
                  <img
                    src={starit}
                    alt="Starit Image"
                    style={{ width: "700px", opacity: 0.5 }}
                  />
                </div>

                {/* 1st heading */}
                <div className="w-[280px] sm:w-[280px] md:w-[280px] text-center mt-[60px]">
                  <img
                    src={TopHeader}
                    style={{
                      width: "100%",
                    }}
                  />
                </div>

                {/* 2nd heading */}
                <h1
                  className="
                text-[24px] sm:text-[32px] md:text-[40px] lg:text-[48px]
                leading-tight text-[#FFFFFF]
                mt-4 sm:mt-0"
                  style={{
                    fontFamily: "Public Sans",
                    fontWeight: "700",
                    marginTop: "2.5rem !important",
                  }}
                >
                  <span>
                    One Smart Platform to Manage
                    <br />
                    Your Entire{" "}
                  </span>
                  {/* <span
                className="
      relative w-fit px-2 sm:px-3 md:px-4
      border-[2px] sm:border-[2.5px] md:border-[3px] lg:border-[4px]
      border-blue-400 text-[#154583] bg-white inline-block"
              >
                Your Business
                <div className="absolute -top-1 -left-1 w-1.5 h-1.5 md:-top-2 md:-left-2 md:w-3 md:h-3 bg-blue-400"></div>
                <div className="absolute -top-1 -right-1 w-1.5 h-1.5 md:-top-2 md:-right-2 md:w-3 md:h-3 bg-blue-400"></div>
                <div className="absolute -bottom-1 -left-1 w-1.5 h-1.5 md:-bottom-2 md:-left-2 md:w-3 md:h-3 bg-blue-400"></div>
                <div className="absolute -bottom-1 -right-1 w-1.5 h-1.5 md:-bottom-2 md:-right-2 md:w-3 md:h-3 bg-blue-400"></div>
              </span> */}
                  <span
                    className="text-[24px] sm:text-[32px] md:text-[40px] lg:text-[52px]"
                    style={{
                      color: "#FBED96",
                      fontFamily: "Public Sans",
                      fontWeight: "700",
                      letterSpacing: 2,
                      wordWrap: "break-word",
                    }}
                  >
                    {text}.
                  </span>
                </h1>

                {/* 3rd heading */}
                <span
                  className="text-[9px] sm:text-[12px] md:text-[14px] lg:text-[16px] text-[#FFFFFF] max-w-5xl"
                  style={{
                    fontFamily: "Public Sans",
                    fontWeight: 400,
                    fontStyle: "normal",
                    lineHeight: "120%",
                    letterSpacing: "0%",
                    textAlign: "center",
                  }}
                >
                  Manage people, inventory, leads, schools, hotels, and
                  operations from one powerful platform.
                </span>
              </div>

              {/* <div className="flex flex-col items-center space-y-1">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleClick}
              className="flex gap-2 items-center text-[#007AFF] border-[2px] rounded-full py-2 px-4 border-blue-500 hover:bg-[#007AFF] transition-all duration-300 hover:text-white text-sm sm:text-base"
            >
              Let’s Solve It Together <FaArrowRightLong />
            </motion.button> */}
              {/* <span className="text-[10px] sm:text-[12px] leading-[120%] text-[#3E4247]">
              <i>*No credit card required.</i>
            </span> */}
              {/* </div> */}

              {/* buttons */}
              <div
                style={{
                  justifyContent: "flex-start",
                  alignItems: "center",
                  gap: 16,
                  display: "inline-flex",
                  zIndex: 10,
                  marginTop: "2px",
                }}
              >
                <div
                  onClick={() => {
                    const section = document.getElementById("products-section");
                    if (section) {
                      section.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                  style={{
                    paddingLeft: 16,
                    paddingRight: 16,
                    paddingTop: 12,
                    paddingBottom: 12,
                    borderRadius: 4,
                    outline: "1px white solid",
                    outlineOffset: "-1px",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: 8,
                    display: "flex",
                    marginTop: 20,
                    cursor: "pointer",
                  }}
                >
                  <div
                    style={{
                      color: "white",
                      fontSize: 16,
                      fontFamily: "Public Sans",
                      fontWeight: "400",
                      lineHeight: "16px",
                    }}
                  >
                    Our Products
                  </div>
                </div>
                <div
                  onClick={() => setShowForm(true)}
                  style={{
                    marginTop: 20,
                    paddingLeft: 16,
                    paddingRight: 16,
                    paddingTop: 12,
                    paddingBottom: 12,
                    background: "var(--White, white)",
                    borderRadius: 4,
                    justifyContent: "center",
                    alignItems: "center",
                    gap: 8,
                    display: "inline-flex",
                    cursor: "pointer",
                  }}
                >
                  <div
                    style={{
                      color: "#0079FE",
                      fontSize: "16px",
                      fontFamily: "Public Sans",
                      fontWeight: "400",
                      lineHeight: "16px",
                      wordWrap: "break-word",
                    }}
                  >
                    Book a Free Demo
                  </div>
                </div>
              </div>
            </motion.div>

            {/* tabs */}
            {/* <div className="w-full h-full justify-center items-center gap-[6px] sm:gap-[2px] md:gap-[10px] lg:gap-[12px] inline-flex mt-[90px] " style={{ zIndex: 1 }}>
              <div className="px-[10px] sm:px-[12px] md:px-[14px] lg:px-[16px] py-[8px]" style={{ alignSelf: 'stretch', borderBottom: '2px var(--White, white) solid', justifyContent: 'center', alignItems: 'center', gap: 8, display: 'flex' }}>
                <FaBoxOpen className="text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px]" style={{ color: '#FFFFFF', }} />
                <div className="text-[10px] sm:text-[12px] md:text-[14px] lg:text-[16px]" style={{ color: '#FFFFFF', fontFamily: 'Public Sans', fontWeight: '700', wordWrap: 'break-word' }}>
                  Inventory
                </div>
              </div>
              <div className="px-[10px] sm:px-[12px] md:px-[14px] lg:px-[16px] py-[8px]" style={{ alignSelf: 'stretch', justifyContent: 'center', alignItems: 'center', gap: 8, display: 'flex' }}>
                <FaPeopleRoof className="text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px]" style={{ color: '#FFFFFF', }} />
                <div className="text-[10px] sm:text-[12px] md:text-[14px] lg:text-[16px]" style={{ color: '#E2E8F0', fontFamily: 'Public Sans', fontWeight: '400', wordWrap: 'break-word' }}>
                  People
                </div>
              </div>
              <div className="px-[10px] sm:px-[12px] md:px-[14px] lg:px-[16px] py-[8px]" style={{ alignSelf: 'stretch', justifyContent: 'center', alignItems: 'center', gap: 8, display: 'flex' }}>
                <IoMagnetSharp className="text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px]" style={{ color: '#FFFFFF', }} />
                <div className="text-[10px] sm:text-[12px] md:text-[14px] lg:text-[16px]" style={{ color: '#E2E8F0', fontFamily: 'Public Sans', fontWeight: '400', wordWrap: 'break-word' }}>
                  Leads
                </div>
              </div>
              <div className="px-[10px] sm:px-[12px] md:px-[14px] lg:px-[16px] py-[8px]" style={{ alignSelf: 'stretch', justifyContent: 'center', alignItems: 'center', gap: 8, display: 'flex' }}>
                <TbSchool className="text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px]" style={{ color: '#FFFFFF', }} />
                <div className="text-[10px] sm:text-[12px] md:text-[14px] lg:text-[16px]" style={{ color: '#E2E8F0', fontFamily: 'Public Sans', fontWeight: '400', wordWrap: 'break-word' }}>
                  Schools
                </div>
              </div>
              <div className="px-[10px] sm:px-[12px] md:px-[14px] lg:px-[16px] py-[8px]" style={{ alignSelf: 'stretch', justifyContent: 'center', alignItems: 'center', gap: 8, display: 'flex' }}>
                <BsBuildingFill className="text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px]" style={{ color: '#FFFFFF', }} />
                <div className="text-[10px] sm:text-[12px] md:text-[14px] lg:text-[16px]" style={{ color: '#E2E8F0', fontFamily: 'Public Sans', fontWeight: '400', wordWrap: 'break-word' }}>
                  Hotels
                </div>
              </div>
            </div> */}

            <div
              id="products-section"
              className="w-full flex flex-wrap justify-center items-center gap-2 sm:gap-4 md:gap-[10px] lg:gap-[12px] mt-24 sm:mt-28 md:mt-32 lg:mt-20 xl:mt-16 px-4"
              style={{ zIndex: 10 }}
            >
              {tabs.map((tab, index) => {
                const isActive = activeTab === index;
                return (
                  <div
                    key={index}
                    onClick={() => {
                      setActiveTab(index);
                      swiperRef.current?.slideToLoop(index);
                    }}
                    className={`px-3 py-2 sm:px-4 cursor-pointer transition-all duration-300 flex items-center gap-2 border-b-2 ${
                      isActive ? "border-white" : "border-transparent"
                    }`}
                  >
                    <div className="text-[14px] sm:text-[18px] lg:text-[20px] text-white">
                      {tab.icon}
                    </div>

                    <div
                      className="text-[11px] sm:text-[13px] md:text-[14px] lg:text-[16px]"
                      style={{
                        color: isActive ? "#FFFFFF" : "#E2E8F0",
                        fontFamily: "Public Sans",
                        fontWeight: isActive ? "700" : "400",
                      }}
                    >
                      {tab.label}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* image slider */}
            <motion.div
              className="dashboard-preview"
              style={{ transform: "translateY(-40px)" }}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              {/* Background Dashboard Image */}
              {/* <div className="dashboard-wrapper">
            <img
              src={HomeDesk}
              alt="Dashboard preview"
              className="dashboard-img"
            /> */}
              <div
                class="card"
                onMouseEnter={() => swiperRef.current?.autoplay?.stop()}
                onMouseLeave={() => swiperRef.current?.autoplay?.start()}
              >
                {/* design */}
                <div class="browser">
                  {/* header */}
                  <div class="tabs-head">
                    {/* key circles */}
                    <div class="tools">
                      <div class="circle">
                        <span class="red box"></span>
                      </div>
                      <div class="circle">
                        <span class="yellow box"></span>
                      </div>
                      <div class="circle">
                        <span class="green box"></span>
                      </div>
                    </div>

                    {/* tab */}
                    <div class="tabs">
                      <div class="tab-open">
                        <span style={{ color: "gray" }}>MUNC</span>
                        <div class="close-tab">✕</div>
                      </div>
                    </div>
                  </div>

                  {/* search box */}
                  <div class="head-browser">
                    <button style={{ color: "#898989" }}>
                      <svg
                        viewBox="0 0 20 20"
                        height="16"
                        width="16"
                        xmlns="http://www.w3.org/2000/svg"
                        data-name="20"
                        id="_20"
                      >
                        <path
                          transform="translate(6.25 3.75)"
                          d="M0,6.25,6.25,0l.875.875L1.75,6.25l5.375,5.375L6.25,12.5Z"
                          id="Fill"
                        ></path>
                      </svg>
                    </button>
                    <button disabled="" style={{ color: "#898989" }}>
                      <svg
                        viewBox="0 0 20 20"
                        height="16"
                        width="16"
                        xmlns="http://www.w3.org/2000/svg"
                        data-name="20"
                        id="_20"
                      >
                        <path
                          transform="translate(6.625 3.75)"
                          d="M7.125,6.25.875,12.5,0,11.625,5.375,6.25,0,.875.875,0Z"
                          id="Fill"
                        ></path>
                      </svg>
                    </button>

                    <input
                      type="text"
                      name=""
                      id=""
                      placeholder="Search Google or type URL"
                      value="http://mymunc.com"
                    />
                    <button style={{ color: "#898989" }}>⋮</button>
                    <button class="star" style={{ color: "#898989" }}>
                      ✰
                    </button>
                  </div>
                </div>

                {/* Slider inside the screen */}
                <div class="card__content">
                  <div
                    className="slider-container"
                    // onMouseEnter={() => swiperRef.current?.autoplay?.stop()}
                    // onMouseLeave={() => swiperRef.current?.autoplay?.start()}
                  >
                    {/* <Swiper
                      onSwiper={(swiper) => (swiperRef.current = swiper)}
                      onSlideChange={(swiper) => setActiveTab(swiper.realIndex)}
                      autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                        pauseOnMouseEnter: true,
                      }}
                      effect="fade"
                      fadeEffect={{ crossFade: true }}
                      modules={[Autoplay, Pagination, Navigation, EffectFade]}
                      className="dashboard-swiper w-100 h-100"
                    >
                      <SwiperSlide 
  onMouseEnter={() => swiperRef.current?.autoplay?.stop()}
  onMouseLeave={() => swiperRef.current?.autoplay?.start()}>
                        <img src={ims} alt="IMS Slide" className="img-slide" />
                      </SwiperSlide>

                      <SwiperSlide 
  onMouseEnter={() => swiperRef.current?.autoplay?.stop()}
  onMouseLeave={() => swiperRef.current?.autoplay?.start()}>
                        <img
                          src={hrms}
                          alt="HRMS Slide"
                          className="img-slide"
                        />
                      </SwiperSlide>

                      <SwiperSlide 
  onMouseEnter={() => swiperRef.current?.autoplay?.stop()}
  onMouseLeave={() => swiperRef.current?.autoplay?.start()}>
                        <img src={lms} alt="LMS Slide" className="img-slide" />
                      </SwiperSlide>

                      <SwiperSlide 
  onMouseEnter={() => swiperRef.current?.autoplay?.stop()}
  onMouseLeave={() => swiperRef.current?.autoplay?.start()}>
                        <img src={sms} alt="SMS Slide" className="img-slide" />
                      </SwiperSlide>

                      <SwiperSlide 
  onMouseEnter={() => swiperRef.current?.autoplay?.stop()}
  onMouseLeave={() => swiperRef.current?.autoplay?.start()}>
                        <img
                          src={hotel}
                          alt="Hotel Slide"
                          className="img-slide"
                        />
                      </SwiperSlide>
                    </Swiper> */}
                    <Swiper
                      onSwiper={(swiper) => (swiperRef.current = swiper)}
                      onSlideChange={(swiper) => setActiveTab(swiper.realIndex)}
                      autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                        // pauseOnMouseEnter: true,
                      }}
                      effect="fade"
                      fadeEffect={{ crossFade: true }}
                      modules={[Autoplay, EffectFade]}
                      className="dashboard-swiper w-100 h-100"
                    >
                      {tabs.map((tab, index) => (
                        <SwiperSlide
                          onMouseEnter={() =>
                            swiperRef.current?.autoplay?.stop()
                          }
                          onMouseLeave={() =>
                            swiperRef.current?.autoplay?.start()
                          }
                        >
                          <img
                            src={tab.img}
                            alt={tab.label}
                            className="img-slide"
                          />
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  </div>
                </div>

                {/* know more button */}
                <Link
                  to={tabs[activeTab].link || "/"}
                  className="author"
                  onMouseEnter={() => swiperRef.current?.autoplay?.stop()}
                  onMouseLeave={() => swiperRef.current?.autoplay?.start()}
                  style={{
                    width: "130px",
                    height: "35px",
                    gap: "8px",
                    borderRadius: "4px",
                    backgroundColor: "#0079FE",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    cursor: "pointer",
                    textDecoration: "none",
                  }}
                >
                  <span
                    style={{
                      color: "white",
                      display: "flex",
                      alignItems: "center",
                      gap: "6px",
                    }}
                  >
                    Know More <HiOutlineExternalLink />
                  </span>
                </Link>
              </div>

              {/* </div> */}
            </motion.div>
          </div>
        </div>

        <MeetTeam />
      </div>

      <Contact setShowForm={setShowForm} showForm={showForm} />
      {/* <Our_Product /> */}
      <Our_Story />
      <WhyTrust />
      <ProductSuite />
      {/* <Clients_LoveUs /> */}
      {/* <HowHelpYou /> */}
      {/* <SafeBanner /> */}
      {/* <MeetFounder /> */}
      {/* <TestimonialSlider /> */}
      <FeaturesSection />
      <Testimonials />
      <FAQ />
      {/* <Contact /> */}
      <Bussiness_Transform />
    </div>
  );
};

export default Features;
