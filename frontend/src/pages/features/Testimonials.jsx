import React from "react";
import Client from "../../assets/OurStory/testimonial.jpg"

const data = [
    {
        name: "Michael Johnson",
        role: "Lead Developer",
        text: "The team is skilled, responsive, and easy to collaborate with. Their development process is structured, and they actively integrate security.",
    },
    {
        name: "Sarah Thompson",
        role: "Project Manager",
        text: "Tech Innovations Inc. specializes in cutting-edge technology solutions that enhance user experience and streamline operations.",
    },
    {
        name: "Emily Davis",
        role: "CEO",
        text: "Kasper Infotech Pvt. Ltd. is a reliable company that delivers strong results in both software development and cybersecurity. Their approach stands out because they don't just focus on building applications—they also ensure those applications are secure and follow proper security standards.",
    },
    {
        name: "Michael Johnson",
        role: "Lead Developer",
        text: "The team is skilled, responsive, and easy to collaborate with. Their development process is structured, and they actively integrate security.",
    },
    {
        name: "Sarah Thompson",
        role: "Project Manager",
        text: "The team is skilled, responsive, and easy to collaborate with. Their development process is structured and they actively integrate security.",
    },
    {
        name: "David Wilson",
        role: "CTO",
        text: "The team is skilled, responsive, and easy to collaborate with. The development process is structured, and they actively integrate security.",
    },
    {
        name: "Lisa Anderson",
        role: "Product Owner",
        text: "The team is skilled, responsive, and easy to collaborate with. Their development process is structured, and they actively integrate security.",
    },
    {
        name: "Robert Chen",
        role: "Technical Lead",
        text: "Tech Innovations Inc. specializes in cutting-edge technology solutions that enhance user experience and simplify products on time and within budget. The team embraces agile methodologies, which allows for flexibility and quick adaptations throughout the development lifecycle.",
    },
    {
        name: "Jennifer Martinez",
        role: "Senior Developer",
        text: "Tech Innovations Inc. specializes in cutting-edge technology solutions that enhance user experience and streamline operations.",
    },
];

const Testimonials = () => {
    // Duplicate data to create seamless loop
    const duplicatedData = [...data, ...data];

    return (
        <div className="bg-gradient-to-b from-[#EEF9FF] to-white py-16">

            {/* Heading */}
            <h2 className="text-center text-3xl md:text-4xl font-bold mb-12" style={{ color: "rgba(0, 62, 163, 1)", fontFamily: "Public Sans, sans-serif", fontWeight: 700 }}>
                What Our Clients Say!
            </h2>

            {/* Container */}
            <div className="relative max-w-6xl mx-auto px-4">

                {/* Top Fade */}
                <div className="pointer-events-none absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-[#EEF9FF] to-transparent z-10" />

                {/* Bottom Fade */}
                <div className="pointer-events-none absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-white to-transparent z-10" />

                {/* Masonry Grid with Animation */}
                <div className="overflow-hidden max-h-[750px]">
                    <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6 animate-marquee-vertical">
                        {duplicatedData.map((item, index) => (
                            <div
                                key={index}
                                className="break-inside-avoid bg-white rounded-md shadow-md border border-gray-200"
                            >
                                {/* Header */}
                                <div className="flex items-center gap-3 p-2 border-b border-gray-200">
                                    <img
                                        src={Client}
                                        alt="user"
                                        className="w-9 h-9 rounded"
                                    />
                                    <div>
                                        <h4 className="m-0" style={{ color: "rgba(30, 41, 59, 1)", fontSize: "16px", fontWeight: 600, fontFamily: "Public Sans, sans-serif" }}>
                                            {item.name}
                                        </h4>
                                        <p className="m-0" style={{ width: '100%', color: '#9C9C9C', fontSize: 12, fontFamily: 'Public Sans', fontWeight: '400' }}>
                                            {item.role}
                                        </p>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-4 text-sm leading-relaxed" style={{ width: '100%', color: '#363636', fontSize: 12, fontFamily: 'Public Sans', fontWeight: '400' }}>
                                    {item.text}
                                    <div className="mt-3" style={{ color: '#2179D1', fontSize: 12, fontFamily: 'Public Sans', fontWeight: '500', cursor: 'pointer' }}>
                                        Read More &gt;
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Add CSS Animation */}
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