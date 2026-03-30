import React from "react";
import One from "../../assets/HrmsImg/BigImg/One.png";
import Two from "../../assets/HrmsImg/BigImg/Two.png";
import { BsPerson } from "react-icons/bs";
import { BsFillPersonVcardFill } from "react-icons/bs";
import { IoDocumentOutline } from "react-icons/io5";
import { RxCountdownTimer } from "react-icons/rx";
import { LiaDesktopSolid } from "react-icons/lia";
import { FaRegCreditCard } from "react-icons/fa";
import CreditScore from "../../assets/HrmsImg/CreditScore.png";

const KeyFeature = () => {
    return (
        <div className="w-full h-full flex flex-col justify-start items-center gap-16 lg:gap-[65px]">
            {/* Title */}
            <div className="w-full text-center text-[#004CAF] text-4xl sm:text-5xl lg:text-[52px] font-bold font-['Public_Sans'] break-words px-4">
                Key Features
            </div>
            
            {/* Main Container */}
            <div className="w-full max-w-[1356px] mx-auto flex flex-col justify-start items-start gap-6 px-4 sm:px-6 lg:px-0">
                
                {/* ================= FEATURE 1 (Full Width - Reduced Height on Tablet/Desktop) ================= */}
                <div className="w-full bg-[#FCFEFF] rounded-2xl border border-[#E3E3E3] p-6 flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-10 overflow-hidden lg:py-4">
                    {/* LEFT */}
                    <div className="w-full lg:max-w-[520px] flex flex-col gap-4 lg:gap-5">
                        <div className="px-3 py-2 rounded-full border w-fit">
                            <span className="text-[#0079FE] text-sm font-bold">Feature 1</span>
                        </div>
                        <div className="flex flex-col gap-3 lg:gap-3">
                            <h2 className="text-[#1E293B] text-2xl sm:text-3xl font-bold">
                                Employee Information Hub
                            </h2>
                            <p className="text-[#1E293B] text-sm max-w-[380px]">
                                Access, Update, and Manage records anytime without clutter.
                            </p>
                        </div>
                    </div>
                    {/* RIGHT */}
                    <div className="w-full lg:max-w-[520px] flex justify-center relative">
                        <div className="relative w-full max-w-[380px] flex flex-col items-center">
                            {/* Badges */}
                            <div className="flex flex-wrap justify-center gap-2 mb-3 lg:absolute lg:top-0 lg:left-0">
                                {["Profiles", "Documents", "History"].map((item, i) => (
                                    <div key={i} className="px-3 py-2 bg-[#E5F5FF] border border-[#0079FE] rounded-md">
                                        <span className="text-[#0079FE] text-sm font-bold">{item}</span>
                                    </div>
                                ))}
                            </div>
                            {/* Card */}
                            <div className="w-full max-w-[320px] bg-gradient-to-br from-[#004FFF] to-[#7193FF] rounded-xl p-4 mt-4 lg:mt-12 lg:-rotate-6 shadow-lg">
                                <div className="flex flex-col gap-4">
                                    <div className="flex items-center gap-2">
                                        <BsFillPersonVcardFill className="text-white text-xl" />
                                        <span className="text-white text-sm font-semibold">Employee</span>
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                                            <BsPerson className="text-[#0079FE]" />
                                        </div>
                                        <div>
                                            <h3 className="text-white text-base font-semibold">Arjun Mehta</h3>
                                            <p className="text-[#DBEAFE] text-xs">
                                                UX Designer • Joined Nov 2024
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Floating Icons */}
                            <div className="hidden lg:block">
                                <div className="absolute top-12 left-6 w-10 h-10 bg-[#E5F5FF] rounded-full flex items-center justify-center">
                                    <BsPerson className="text-[#0079FE]" />
                                </div>
                                <div className="absolute top-0 right-0 w-10 h-10 bg-[#E5F5FF] rounded-full flex items-center justify-center">
                                    <IoDocumentOutline className="text-[#0079FE]" />
                                </div>
                                <div className="absolute top-20 right-0 w-10 h-10 bg-[#E5F5FF] rounded-full flex items-center justify-center">
                                    <RxCountdownTimer className="text-[#0079FE]" />
                                </div>
                                <div className="absolute bottom-0 right-10 w-10 h-10 bg-[#E5F5FF] rounded-full flex items-center justify-center">
                                    <LiaDesktopSolid className="text-[#0079FE]" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* ================= FEATURES 2, 3, 4, 5, 6 - ALL 2 PER ROW ================= */}
                {/* Row 1: Feature 2 & Feature 3 */}
                <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6">
                    
                    {/* Feature 2 - Smart Payroll Automation */}
                    <div className="w-full bg-[#FCFEFF] shadow-[0px_0px_4px_rgba(0,0,0,0.01)] rounded-2xl outline outline-1 outline-[#E3E3E3] outline-offset-[-1px] p-6 flex flex-col justify-between">
                        <div className="flex flex-col gap-6">
                            <div className="px-3 py-2 rounded-[33px] outline outline-1 outline-[#E3E3E3] outline-offset-[-1px] inline-flex w-fit items-center gap-2">
                                <div className="text-[#0079FE] text-base font-bold tracking-[0.32px]">Feature 2</div>
                            </div>
                            <div className="flex flex-col gap-4">
                                <div className="text-[#1E293B] text-2xl font-bold">Smart Payroll Automation</div>
                                <div className="max-w-[387px] text-[#1E293B] text-sm font-bold">
                                    Generate pay-slips, track revisions, and stay compliant without stress.
                                </div>
                            </div>
                        </div>
                        
                        {/* Credit Cards Stack */}
                        <div className="relative w-full h-[180px] sm:h-[200px] mt-8 flex justify-center items-center">
                            <div className="relative w-full max-w-[384.88px] h-[162.74px] mx-auto">
                                {/* Card 1 */}
                                <div className="absolute w-[90%] max-w-[334.99px] left-[5.34px] top-0 bg-white rounded-[12.21px] outline outline-[0.38px] outline-[#BFE0FF] opacity-60 p-3">
                                    <div className="flex justify-between items-center">
                                        <div className="flex items-center gap-2.5">
                                            <div className="w-9 h-9 bg-[#E5F5FF] rounded-[6.10px] flex items-center justify-center">
                                                <FaRegCreditCard className="text-[#0079FE] text-2xl" />
                                            </div>
                                            <div>
                                                <div className="text-[#64748B] text-[10.68px] font-bold">March Payroll</div>
                                            </div>
                                        </div>
                                        <div className="text-right">
                                            <div className="text-black text-[13.74px] font-semibold">₹50,000</div>
                                            <div className="flex items-center gap-1">
                                                <div className="w-1 h-1 bg-[#00A63E] rounded-full"></div>
                                                <div className="text-[#00A63E] text-[9.16px] font-bold">Approved</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                {/* Card 2 */}
                                <div className="absolute w-[90%] max-w-[334.99px] left-[52.32px] top-[16.79px] bg-[#0079FE] rounded-[12.21px] shadow-md p-3 transform rotate-7">
                                    <div className="flex justify-between items-center">
                                        <div className="flex items-center gap-2.5">
                                            <div className="w-10 h-10 bg-[#E5F5FF] rounded-[6.10px] flex items-center justify-center">
                                                <FaRegCreditCard className="text-[#1E293B] text-2xl" />
                                            </div>
                                            <div>
                                                <div className="text-[#1E293B] text-[13.74px] font-semibold">Sumit</div>
                                                <div className="text-[#1E293B] text-[10.68px] font-bold">April Payroll</div>
                                            </div>
                                        </div>
                                        <div className="text-right">
                                            <div className="text-black text-[13.74px] font-semibold">₹35,000</div>
                                            <div className="flex items-center gap-1">
                                                <div className="w-1 h-1 bg-[#FDC700] rounded-full"></div>
                                                <div className="text-[#FDC700] text-[9.16px] font-bold">Pending</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                {/* Card 3 */}
                                <div className="absolute w-[90%] max-w-[334.99px] left-0 top-[89.85px] bg-[#94D6FF] rounded-[12.21px] p-3 transform -rotate-6">
                                    <div className="flex justify-between items-center">
                                        <div className="flex items-center gap-2.5">
                                            <div className="w-10 h-10 bg-[#E5F5FF] rounded-[6.10px] flex items-center justify-center">
                                                <FaRegCreditCard className="text-[#0079FE] text-2xl" />
                                            </div>
                                            <div>
                                                <div className="text-[#0079FE] text-[13.74px] font-semibold">Dipak</div>
                                                <div className="text-[#64748B] text-[10.68px] font-bold">March Payroll</div>
                                            </div>
                                        </div>
                                        <div className="text-right">
                                            <div className="text-black text-[13.74px] font-semibold">₹80,000</div>
                                            <div className="flex items-center gap-1">
                                                <div className="w-1 h-1 bg-[#00A63E] rounded-full"></div>
                                                <div className="text-[#00A63E] text-[9.16px] font-bold">Approved</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    {/* Feature 3 - Attendance & Leave Intelligence */}
                    <div className="w-full bg-[#FCFEFF] shadow-[0px_0px_4px_rgba(0,0,0,0.01)] rounded-2xl outline outline-1 outline-[#E3E3E3] outline-offset-[-1px] p-6 flex flex-col justify-between">
                        <div className="flex flex-col gap-6">
                            <div className="px-3 py-2 rounded-[33px] outline outline-1 outline-[#E3E3E3] outline-offset-[-1px] inline-flex w-fit items-center gap-2">
                                <div className="text-[#0079FE] text-base font-bold">Feature 3</div>
                            </div>
                            <div className="flex flex-col gap-4">
                                <div className="text-[#1E293B] text-2xl font-bold">Attendance &amp; Leave Intelligence</div>
                                <div className="max-w-[387px] text-[#1E293B] text-sm font-bold">
                                    Get real-time visibility into who's working, who's on leave, and who's late.
                                </div>
                            </div>
                        </div>
                        
                        {/* Attendance List */}
                        <div className="w-full mt-8 flex flex-col gap-3.5">
                            {/* Present */}
                            <div className="w-full bg-[#E5F5FF] rounded-[14.10px] p-3.5">
                                <div className="flex justify-between items-center">
                                    <div className="flex items-center gap-3">
                                        <div className="w-[42.31px] h-[42.31px] bg-[#BFE0FF] rounded-full flex items-center justify-center">
                                            <span className="text-[#0079FE] text-base font-semibold">RK</span>
                                        </div>
                                        <div>
                                            <div className="text-[#1E293B] text-base font-semibold">Rohan Kumar</div>
                                            <div className="text-[#64748B] text-xs font-bold">09:02 :45</div>
                                        </div>
                                    </div>
                                    <div className="bg-[#C1FDD8] px-2 py-1 rounded-full">
                                        <div className="text-[#03762E] text-xs font-bold">Present</div>
                                    </div>
                                </div>
                            </div>
                            
                            {/* Late */}
                            <div className="w-full bg-white rounded-[14.10px] outline outline-[0.88px] outline-[#E5F5FF] p-3.5">
                                <div className="flex justify-between items-center">
                                    <div className="flex items-center gap-3">
                                        <div className="w-[42.31px] h-[42.31px] bg-[#E5F5FF] rounded-full flex items-center justify-center">
                                            <span className="text-[#0079FE] text-base font-semibold">PS</span>
                                        </div>
                                        <div>
                                            <div className="text-[#1E293B] text-base font-semibold">Priya Sharma</div>
                                            <div className="text-[#64748B] text-xs font-bold">11:42 :24</div>
                                        </div>
                                    </div>
                                    <div className="bg-[#BFE0FF] px-2 py-1 rounded-full">
                                        <div className="text-[#0079FE] text-xs font-bold">Late</div>
                                    </div>
                                </div>
                            </div>
                            
                            {/* On Leave */}
                            <div className="w-full bg-[#F6F6F6] opacity-50 rounded-[14.10px] outline outline-[0.88px] outline-[#E5F5FF] p-3.5">
                                <div className="flex justify-between items-center">
                                    <div className="flex items-center gap-3">
                                        <div className="w-[42.31px] h-[42.31px] bg-[#E5F5FF] rounded-full flex items-center justify-center">
                                            <span className="text-[#0079FE] text-base font-semibold">NP</span>
                                        </div>
                                        <div>
                                            <div className="text-[#1E293B] text-base font-semibold">Neha Patel</div>
                                            <div className="text-[#64748B] text-xs font-bold">—</div>
                                        </div>
                                    </div>
                                    <div className="bg-[#FFCACD] px-2 py-1 rounded-full">
                                        <div className="text-[#E7000B] text-xs font-bold">On Leave</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Row 2: Feature 4 & Feature 5 */}
                <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6">
                    
                    {/* Feature 4 - Performance & Growth Insights */}
                    <div className="w-full bg-[#FCFEFF] shadow-[0px_0px_4px_rgba(0,0,0,0.01)] rounded-2xl outline outline-1 outline-[#E3E3E3] outline-offset-[-1px] p-6 flex flex-col items-center justify-center gap-8">
                        <div className="w-full flex flex-col gap-6">
                            <div className="px-3 py-2 rounded-[33px] outline outline-1 outline-[#E3E3E3] outline-offset-[-1px] inline-flex w-fit items-center gap-2">
                                <div className="text-[#0079FE] text-base font-bold">Feature 4</div>
                            </div>
                            <div className="flex flex-col gap-4">
                                <div className="text-[#1E293B] text-2xl font-bold">Performace &amp; Growth Insights</div>
                                <div className="text-[#1E293B] text-sm font-bold">
                                    Turn performance reviews into growth opportunities.
                                </div>
                            </div>
                        </div>
                        <img src={CreditScore} alt="Credit Score" className="w-full max-w-[280px] h-auto object-contain" />
                    </div>
                    
                    {/* Feature 5 - Data Driven Reports & Analytics */}
                    <div className="w-full bg-[#FCFEFF] shadow-[0px_0px_4px_rgba(0,0,0,0.01)] rounded-2xl outline outline-1 outline-[#E3E3E3] outline-offset-[-1px] p-6 relative min-h-[425px]">
                        <div className="flex flex-col gap-6">
                            <div className="px-3 py-2 rounded-[33px] outline outline-1 outline-[#E3E3E3] outline-offset-[-1px] inline-flex w-fit items-center gap-2">
                                <div className="text-[#0079FE] text-base font-bold">Feature 5</div>
                            </div>
                            <div className="flex flex-col gap-4">
                                <div className="text-[#1E293B] text-2xl font-bold">Data Driven Reports &amp; Analytics</div>
                                <div className="max-w-[387px] text-[#1E293B] text-sm font-bold">
                                    Every HR decision becomes smarter with real-time reports.
                                </div>
                            </div>
                        </div>
                        
                        {/* Chart Section */}
                        <div className="w-full mt-8 flex justify-center lg:justify-end">
                            <div className="w-full max-w-[478.95px] bg-white rounded-[13.07px] shadow-sm p-5">
                                <div className="flex flex-col gap-2">
                                    <div className="text-[#7A7A7A] text-[11.44px] font-bold">Reports Generated</div>
                                    <div className="text-[#242424] text-[29.41px] font-bold">128,982</div>
                                </div>
                                
                                {/* Chart Bars */}
                                <div className="mt-6 overflow-x-auto">
                                    <div className="min-w-[500px]">
                                        <div className="flex gap-1.5 items-end">
                                            <div className="flex flex-col gap-1">
                                                <div className="text-[#464646] text-[8.17px] font-bold">$1000</div>
                                                <div className="text-[#464646] text-[8.17px] font-bold">$500</div>
                                                <div className="text-[#464646] text-[8.17px] font-bold">$200</div>
                                                <div className="text-[#464646] text-[8.17px] font-bold">$0</div>
                                            </div>
                                            <div className="flex gap-4">
                                                {[58, 24, 44, 58, 26, 26, 93, 58, 69].map((height, idx) => (
                                                    <div key={idx} className="relative w-[22px]">
                                                        <div className="h-[86px] bg-[#D9D9D9] rounded-sm"></div>
                                                        <div className="absolute bottom-0 w-full bg-gradient-to-t from-[#8061DB] to-[#8061DB]/90 rounded-sm" style={{ height: `${height}%` }}></div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                        <div className="flex justify-between items-center mt-4">
                                            <div className="text-[#7A7A7A] text-[11.44px] font-bold">Current margin: April Spendings</div>
                                            <div className="flex gap-2">
                                                <div className="text-[#3B2C6E] text-[11.44px] font-bold">$350.00</div>
                                                <div className="text-[#3B2C6E] text-[11.44px] font-bold">/</div>
                                                <div className="text-[#3B2C6E] text-[11.44px] font-bold">$640.00</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Row 3: Feature 6 - Integration & Scalability */}
                <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="w-full bg-[#FCFEFF] shadow-[0px_0px_4px_rgba(0,0,0,0.01)] rounded-2xl outline outline-1 outline-[#E3E3E3] outline-offset-[-1px] p-6 relative min-h-[425px] md:col-span-2">
                        <div className="flex flex-col gap-6">
                            <div className="px-3 py-2 rounded-[33px] outline outline-1 outline-[#E3E3E3] outline-offset-[-1px] inline-flex w-fit items-center gap-2">
                                <div className="text-[#0079FE] text-base font-bold">Feature 6</div>
                            </div>
                            <div className="flex flex-col gap-4">
                                <div className="text-[#1E293B] text-2xl font-bold">Integration &amp; Scalability</div>
                                <div className="max-w-[387px] text-[#1E293B] text-sm font-bold">
                                    Smooth integrate HRMS with your accounting, CRM, and inventory tools.
                                </div>
                            </div>
                        </div>
                        
                        {/* Connected Apps */}
                        <div className="mt-8 bg-[#F7F7F8] rounded-2xl p-4 relative">
                            <div className="text-[#535962] text-sm font-bold mb-3">Connected Apps</div>
                            <div className="flex flex-col gap-3">
                                {/* Tally */}
                                <div className="bg-white rounded-2xl p-3 flex justify-between items-center">
                                    <div className="flex items-center gap-3">
                                        <div className="w-[35px] h-[35px] bg-[#E6EFFD] rounded-xl flex items-center justify-center font-bold text-[#0061FF]">T</div>
                                        <div>
                                            <div className="text-[#1E293B] text-sm font-bold">Tally Accounting</div>
                                            <div className="text-[#4C4C4C] text-xs font-bold">Connected</div>
                                        </div>
                                    </div>
                                    <div className="w-[35px] h-5 bg-[#4ADE80] rounded-full flex items-center justify-end pr-1">
                                        <div className="w-[15px] h-[15px] bg-white rounded-full"></div>
                                    </div>
                                </div>
                                
                                {/* Slack */}
                                <div className="bg-white rounded-2xl p-3 flex justify-between items-center">
                                    <div className="flex items-center gap-3">
                                        <div className="w-[35px] h-[35px] bg-[#E6EFFD] rounded-xl flex items-center justify-center font-bold text-[#0061FF]">Z</div>
                                        <div>
                                            <div className="text-[#1E293B] text-sm font-bold">Slack</div>
                                            <div className="text-[#4C4C4C] text-xs font-bold">Connected</div>
                                        </div>
                                    </div>
                                    <div className="w-[35px] h-5 bg-[#4ADE80] rounded-full flex items-center justify-end pr-1">
                                        <div className="w-[15px] h-[15px] bg-white rounded-full"></div>
                                    </div>
                                </div>
                                
                                {/* WhatsApp */}
                                <div className="bg-white rounded-2xl p-3 flex justify-between items-center">
                                    <div className="flex items-center gap-3">
                                        <div className="w-[35px] h-[35px] bg-[#E6EFFD] rounded-xl flex items-center justify-center font-bold text-[#0061FF]">W</div>
                                        <div>
                                            <div className="text-[#1E293B] text-sm font-bold">WhatsApp</div>
                                            <div className="text-[#4C4C4C] text-xs font-bold">Available</div>
                                        </div>
                                    </div>
                                    <div className="w-[35px] h-5 bg-[#E5E7EB] rounded-full flex items-center justify-start pl-1">
                                        <div className="w-[15px] h-[15px] bg-white rounded-full"></div>
                                    </div>
                                </div>
                            </div>
                            
                            {/* Floating SAP Card */}
                            <div className="absolute -top-4 right-4 bg-white shadow-md rounded-lg p-1.5 flex items-center gap-1.5">
                                <div className="w-[18.89px] h-[18.89px] bg-[#E6EFFD] rounded-md flex items-center justify-center font-bold text-[#0061FF] text-[7.56px]">S</div>
                                <div>
                                    <div className="text-[#1E293B] text-[7.56px] font-bold">SAP ERP</div>
                                    <div className="text-[#4C4C4C] text-[6.48px] font-bold">Connected</div>
                                </div>
                                <div className="w-[18.89px] h-[10.80px] bg-[#4ADE80] rounded-full flex items-center justify-end pr-1">
                                    <div className="w-[8.10px] h-[8.10px] bg-white rounded-full"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default KeyFeature;