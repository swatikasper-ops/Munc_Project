import React, { useState } from "react";
import HRM from "../../assets/HrmsImg/new_img.png";
import LMS from "../../assets/LmsImg/LMS22.png";
import Hotel from "../../assets/products/HMS.png";
import IMS from "../../assets/products/IMS.png";
import SMS from "../../assets/SmsImg/sms_img1.png";
import Logo from "../../assets/IMS/LOGOsmall.svg";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Navigation, Autoplay } from 'swiper/modules';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
const products = [
    {
        title: "HR Management System",
        desc: "Manage your workforce from one unified platform, Automate attendance, payroll, and HR operations with ease.",
        img: HRM,
                 path:"/products/human-resource-management-system"
    },
    {
        title: "Lead Management System",
        desc: "Bring all your leads into one unified system. Streamline tracking, follow-ups, and pipeline management.",
        img: LMS,
        path:"/products/lead-management-system"
    },
    {
        title: "School Management System",
        desc: "Create invoices, purchase orders, and quotations while managing customers and suppliers.",
        img: SMS,
         path:"/products/school-management-system"
       
    },
    {
        title: "Inventory Management System",
        desc: "Track stock, generate reports, and manage inventory across locations efficiently.",
        img: IMS,
         path:"/products/inventory-management-system"
    },
    {
        title: "Hotel Management System",
        desc: "Manage bookings, rooms, billing, and operations seamlessly.",
        img: Hotel,
        path:"/products/hotel-management-system"
       
    },
];

const ProductSuite = () => {
    
const navigate=useNavigate();

    return (
        <>
        
<div className="py-20" style={{ background: "linear-gradient(90deg, #004CAF 0%, #4DB5FF 50%, #004CAF 100%)" }}>
            <h2 className="text-center text-4xl font-bold text-white mb-16">
                Our Product Suite
            </h2>

            <div className="relative max-w-[1200px] mx-auto px-4 mx-4 my-4 px-4 
    

    md:mx-12 md:my-12 md:px-12">
                <Swiper
                    effect={'coverflow'}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={'auto'}
                    loop={true}
                    coverflowEffect={{
                        rotate: 0,
                        stretch: 0,
                        depth: 100,
                        modifier: 2.5,
                        slideShadows: false,
                    }}
                    navigation={{
                        nextEl: '.swiper-button-next-custom',
                        prevEl: '.swiper-button-prev-custom',
                    }}
                    autoplay={{ delay: 4000 }}
                    modules={[EffectCoverflow, Navigation, Autoplay]}
                    className="product-swiper"
                >
                    
                    
                    {products.map((product) => (
                        <SwiperSlide key={product.id} className="max-w-[850px]">
                            {/* THE MAIN CARD DESIGN */}
                            <div className="bg-white rounded-2xl shadow-2xl flex  flex-col-reverse lg:flex-row overflow-hidden  h-[454px] lg:h-[420px] border border-white/20">
                                
                                {/* LEFT TEXT CONTENT */}
                                <div className="w-full lg:w-[45%] pt-10 px-10 pb-2 lg:py-10 flex flex-col items-center text-center lg:items-start lg:text-left justify-between bg-white">
                                    <img src={Logo} alt="logo" className="w-24 mb-4 mx-auto lg:mx-0" />
                                    <div>
                                        <h3 className="text-2xl font-bold text-[#1E293B] mb-4">
                                            {product.title}
                                        </h3>
                                        <p className="text-sm text-[#64748B] leading-relaxed line-clamp-4">
                                            {product.desc}
                                        </p>
                                    </div>
                                    <span className="text-[#007AFF] font-medium cursor-pointer hover:underline" onClick={() => navigate(product.path)} >
                                        See More →
                                    </span>
                                </div>

                                {/* RIGHT IMAGE SECTION */}
                               <div className="w-full h-[350px] pt-2 pr-1 pl-2 bg-gray-50 flex items-center justify-center overflow-hidden rounded-2xl">
    <img
        src={product.img}
        alt={product.title}
        className="
            /* 1. Force image to match parent size */
            w-full 
            h-full 
            
            /* 2. Control how it fits */
            object-cover 
            
            /* 3. Your existing styles */
            drop-shadow-[0_20px_50px_rgba(0,0,0,0.15)] 
            transform 
            hover:scale-105 
            transition-transform 
            duration-500
            rounded-xl
            sm:max-w-[95%] 
        "
    />
</div>
                            </div>
                        </SwiperSlide>
                    ))}
                 </Swiper>

                {/* CUSTOM NAVIGATION BUTTONS */}
                <button className="swiper-button-prev-custom absolute left-[-20px] lg:left-[50px] top-1/2 -translate-y-1/2 bg-white w-10 h-12 rounded-full shadow-xl flex items-center justify-center z-50 hover:bg-blue-50 transition-colors left-[11px]">
                    <FiChevronLeft className="text-blue-600 text-2xl" />
                </button>
                <button className="swiper-button-next-custom absolute right-[-20px] lg:right-[50px] top-1/2 -translate-y-1/2 bg-white w-10 h-12 rounded-full shadow-xl flex items-center justify-center z-50 hover:bg-blue-50 transition-colors right-[7px]">
                    <FiChevronRight className="text-blue-600 text-2xl "/>
                </button>
            </div>
        </div>
    
        </>
    );
};

export default ProductSuite;