import React, { useState, useRef, useEffect } from "react";
import Person_1 from "../../assets/AboutImg/Person_1.png"
import Person_2 from "../../assets/AboutImg/Person_2.jpg"
import Person_3 from "../../assets/AboutImg/Person_3.jpg"
import Person_4 from "../../assets/AboutImg/Person_4.jpg"
import Person_5 from "../../assets/AboutImg/Person_5.jpg"
import Person_6 from "../../assets/AboutImg/Person_6.jpg"
import Person_7 from "../../assets/AboutImg/Person_7.jpg"
import Person_8 from "../../assets/AboutImg/Person_8.jpg"
import Person_9 from "../../assets/AboutImg/Person_9.jpg"

const allImages = [
  Person_1, Person_2, Person_3, Person_4, Person_5,
  Person_6, Person_7, Person_8, Person_9
];

const data = [
  {
    name: "Rahul Sharma",
    role: "Business Development",
    text: "MUN-C has completely transformed how we manage our business operations. From inventory to billing, everything is now streamlined and easy to track. The dashboard is simple, and my team adapted quickly without any training issues.",
    image: allImages[0],
  },
  {
    name: "Mohan Verma",
    role: "Sales Manager",
    text: "We were struggling with managing leads and follow-ups earlier. After using MUN-C, our conversion rate improved significantly. The reminders and pipeline tracking features are extremely helpful for our sales team.",
    image: allImages[1],
  },
  {
    name: "Amit Patel",
    role: "HR",
    text: "The inventory management system is very accurate and easy to use. I can track stock in real time and get alerts for low inventory. It has reduced our losses and improved overall efficiency in our warehouse.",
    image: allImages[2],
  },
  {
    name: "Manoj Kumar",
    role: "HR Manager",
    text: "HR management has become very simple with MUN-C. Attendance, payroll, and leave tracking are now fully automated. It saves a lot of time and reduces manual errors in our daily HR operations.",
    image: allImages[3],
  },
  {
    name: "Shreya",
    role: "Store Manager",
    text: "The POS and billing system works smoothly and is very fast. My staff can handle billing easily even during peak hours. It has improved customer experience and reduced waiting time at the counter.",
    image: allImages[4],
  },

  {
    name: "Sandeep Yadav",
    role: "IT Manager",
    text: "Customer support is very responsive and helpful. Whenever we had any issues, the team resolved them quickly. The onboarding process was smooth, and they guided us at every step.",
    image: allImages[6],
  },
  {
    name: "Pooja Reddy",
    role: "Operations Head",
    text: "The software is very user-friendly and well designed. Even non-technical users can easily understand and use it. It has improved our team productivity and made our processes more organized.",
    image: allImages[7],
  },
  {
    name: "Vikas Mishra",
    role: "Regional Manager",
    text: "MUN-C helped us manage multiple branches from one dashboard. Stock tracking, sales reports, and team management are all in one place. It gives complete control over operations.",
    image: allImages[8],
  },
 

];

const Testimonials = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [showReadMore, setShowReadMore] = useState({});
  const textRefs = useRef([]);

  const duplicatedData = [...data, ...data];

  const toggleReadMore = (index) => {
    setExpandedIndex((prev) => (prev === index ? null : index));
  };

  useEffect(() => {
    const checkOverflow = () => {
      const newState = {};

      textRefs.current.forEach((el, index) => {
        if (el) {
          newState[index] = el.scrollHeight > el.clientHeight + 1;
        }
      });

      setShowReadMore(newState);
    };

    setTimeout(checkOverflow, 0);
    window.addEventListener("resize", checkOverflow);

    return () => window.removeEventListener("resize", checkOverflow);
  }, []);

  return (
    <div className="bg-gradient-to-b from-[#EEF9FF] to-white py-16">
      {/* Heading */}
      <h2
        className="text-center text-3xl md:text-4xl font-bold mb-12"
        style={{
          color: "rgba(0, 62, 163, 1)",
          fontFamily: "Public Sans, sans-serif",
          fontWeight: 700,
        }}
      >
        What Our Clients Say!
      </h2>

      {/* Container */}
      <div className="relative max-w-6xl mx-auto px-4">
        {/* Top Fade */}
        <div className="pointer-events-none absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-[#EEF9FF] to-transparent z-10" />

        {/* Bottom Fade */}
        <div className="pointer-events-none absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-white to-transparent z-10" />

        {/* Masonry Grid */}
        <div className="overflow-hidden max-h-[750px]">
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6 animate-marquee-vertical">
            {duplicatedData.map((item, index) => {
              const isExpanded = expandedIndex === index;

              return (
                <div
                  key={index}
                  className="break-inside-avoid bg-white rounded-md shadow-md border border-gray-200"
                >
                  {/* Header */}
                  <div className="flex items-center gap-3 p-2 border-b border-gray-200">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-9 h-9 rounded-full object-cover"
                    />
                    <div>
                      <h4
                        className="m-0"
                        style={{
                          color: "rgba(30, 41, 59, 1)",
                          fontSize: "16px",
                          fontWeight: 600,
                          fontFamily: "Public Sans, sans-serif",
                        }}
                      >
                        {item.name}
                      </h4>
                      <p
                        className="m-0"
                        style={{
                          width: "100%",
                          color: "#9C9C9C",
                          fontSize: 12,
                          fontFamily: "Public Sans",
                          fontWeight: "400",
                        }}
                      >
                        {item.role}
                      </p>
                    </div>
                  </div>

                  {/* Content */}
                  <div
                    className="p-4 text-sm leading-relaxed"
                    style={{
                      width: "100%",
                      color: "#363636",
                      fontSize: 12,
                      fontFamily: "Public Sans",
                      fontWeight: "400",
                    }}
                  >
                    {/* Text */}
                    <p
                      ref={(el) => (textRefs.current[index] = el)}
                      style={{
                        overflow: "hidden",
                        display: "-webkit-box",
                        WebkitBoxOrient: "vertical",
                        WebkitLineClamp: isExpanded ? "unset" : 4,
                      }}
                    >
                      {item.text}
                    </p>

                    {/* Read More */}
                    {showReadMore[index] && (
                      <div
                        className="mt-3"
                        style={{
                          color: "#2179D1",
                          fontSize: 12,
                          fontFamily: "Public Sans",
                          fontWeight: "500",
                          cursor: "pointer",
                        }}
                        onClick={() => toggleReadMore(index)}
                      >
                        {isExpanded ? "Read Less" : "Read More >"}
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

     
      {/* Animation */}
      <style jsx>{`
        @keyframes marqueeVertical {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(-50%);
          }
        }

        .animate-marquee-vertical {
          animation: marqueeVertical 30s linear infinite;
        }

        .animate-marquee-vertical:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default Testimonials;