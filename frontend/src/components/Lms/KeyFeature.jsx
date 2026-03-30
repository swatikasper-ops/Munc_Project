import React from "react";
import One from "../../assets/HrmsImg/BigImg/One.png";
import Two from "../../assets/HrmsImg/BigImg/Two.png";
import { BsPerson } from "react-icons/bs";
import { BsFillPersonVcardFill } from "react-icons/bs";
import { IoDocumentOutline } from "react-icons/io5";
import { RxCountdownTimer } from "react-icons/rx";
import { LiaDesktopSolid } from "react-icons/lia";
import { FaRegCreditCard } from "react-icons/fa";

const KeyFeature = () => {
  return (
    <div className="w-full min-h-screen flex flex-col justify-start items-center gap-4 sm:gap-6 md:gap-8 lg:gap-10 px-3 sm:px-4 md:px-6 lg:px-8 py-4 sm:py-6 md:py-8">
      {/* Heading */}
      <div className="text-center text-[#004CAF] text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold font-['Public_Sans'] break-words">
        Key Features
      </div>

      {/* Features Container */}
      <div className="w-full max-w-7xl mx-auto flex flex-col gap-3 sm:gap-4 md:gap-5">
        
        {/* Row 1 - Full width feature */}
        <div className="w-full bg-[#FCFEFF] shadow-sm rounded-xl sm:rounded-2xl border border-[#E3E3E3] p-3 sm:p-4 md:p-5 flex flex-col lg:flex-row justify-between items-center gap-4 lg:gap-6">
          {/* Left Content */}
          <div className="w-full lg:w-[40%] flex flex-col justify-start items-start gap-2 sm:gap-3 md:gap-4">
            <div className="px-2 sm:px-2.5 md:px-3 py-1 sm:py-1.5 md:py-2 rounded-full border border-[#E3E3E3] flex justify-center items-center gap-1 sm:gap-1.5 md:gap-2">
              <span className="text-[#0079FE] text-[11px] sm:text-xs md:text-sm font-normal tracking-wide">Feature 1</span>
            </div>
            <div className="flex flex-col gap-1.5 sm:gap-2 md:gap-3">
              <h3 className="text-[#1E293B] text-base sm:text-lg md:text-xl font-normal tracking-wide">
                Lead Capture from Multiple Sources
              </h3>
              <p className="text-[#1E293B] text-xs sm:text-sm font-normal tracking-wide max-w-md">
                Bring all your leads together — from websites, social media, chat, campaigns, and forms.
              </p>
            </div>
          </div>

          {/* Right Content - Stats Cards */}
          <div className="w-full lg:w-[55%] bg-[#FAFBFB] p-2.5 sm:p-3 md:p-4 rounded-lg sm:rounded-xl">
            <div className="flex flex-col sm:flex-row justify-start items-center gap-3 sm:gap-4">
              {/* Lead Sources Card */}
              <div className="w-full sm:flex-1 bg-white rounded-lg border border-[#EFF1F3] p-2.5 sm:p-3">
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-1.5">
                    <div className="w-3 h-3 bg-[#F4F7FE] rounded flex items-center justify-center">
                      <div className="w-1.5 h-1.5 bg-[#9AB6F5] rounded-full" />
                    </div>
                    <span className="text-[#363636] text-xs sm:text-sm font-semibold tracking-wide">Lead Sources</span>
                  </div>
                  <div className="flex flex-wrap justify-between items-center gap-2 sm:gap-3">
                    <div className="flex flex-col gap-1.5">
                      <div className="flex items-center gap-1.5">
                        <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-[#F4F7FE] border border-[#9AB6F5] rounded" />
                        <span className="text-[#363636] text-[10px] sm:text-xs font-normal">Website Form</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-[#F4F7FE] border border-[#9AB6F5] rounded" />
                        <span className="text-[#363636] text-[10px] sm:text-xs font-normal">Social Media</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-[#F4F7FE] border border-[#9AB6F5] rounded" />
                        <span className="text-[#363636] text-[10px] sm:text-xs font-normal">Email Campaign</span>
                      </div>
                    </div>
                    <div className="flex flex-col gap-1.5 sm:gap-2">
                      <div className="w-20 sm:w-24 md:w-28 h-1 sm:h-1.5 bg-[#D8E2FA] rounded-full overflow-hidden">
                        <div className="w-[70%] h-full bg-[#9AB6F5] rounded-full" />
                      </div>
                      <div className="w-20 sm:w-24 md:w-28 h-1 sm:h-1.5 bg-[#D8E2FA] rounded-full overflow-hidden">
                        <div className="w-full h-full bg-[#9AB6F5] rounded-full" />
                      </div>
                      <div className="w-20 sm:w-24 md:w-28 h-1 sm:h-1.5 bg-[#D8E2FA] rounded-full overflow-hidden">
                        <div className="w-[75%] h-full bg-[#9AB6F5] rounded-full" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Leads List */}
              <div className="flex flex-row sm:flex-col gap-2 sm:gap-1.5 w-full sm:w-auto">
                <div className="flex-1 sm:w-auto bg-white rounded-lg border border-[#EFF1F3] p-2">
                  <div className="flex items-center gap-2 sm:gap-2.5">
                    <div className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 bg-[#DEE8FC] rounded-full flex items-center justify-center">
                      <span className="text-[#2463EB] text-[10px] sm:text-xs md:text-sm font-medium">RS</span>
                    </div>
                    <div>
                      <div className="text-[#363636] text-xs sm:text-sm md:text-base font-medium">Rahul S.</div>
                      <div className="px-1.5 py-0.5 bg-[#DEE8FC] rounded-full inline-block mt-0.5">
                        <span className="text-[#2463EB] text-[9px] sm:text-[10px] font-medium">New Lead</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex-1 sm:w-auto bg-white rounded-lg border border-[#EFF1F3] p-2">
                  <div className="flex items-center gap-2 sm:gap-2.5">
                    <div className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 bg-[#FDECCE] rounded-full flex items-center justify-center">
                      <span className="text-[#F5A212] text-[10px] sm:text-xs md:text-sm font-medium">PA</span>
                    </div>
                    <div>
                      <div className="text-[#363636] text-xs sm:text-sm md:text-base font-medium">Priya A.</div>
                      <div className="px-1.5 py-0.5 bg-[#D1FAE5] rounded-full inline-block mt-0.5">
                        <span className="text-[#10805F] text-[9px] sm:text-[10px] font-medium">Qualified</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Row 2 - Three column features */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-5">
          {/* Feature 2 */}
          <div className="bg-[#FCFEFF] shadow-sm rounded-xl sm:rounded-2xl border border-[#E3E3E3] p-3 sm:p-4 md:p-5 flex flex-col gap-3 sm:gap-4 relative">
            <div className="flex flex-col gap-2 sm:gap-3 md:gap-4">
              <div className="px-2 sm:px-2.5 md:px-3 py-1 sm:py-1.5 md:py-2 rounded-full border border-[#E3E3E3] inline-flex w-fit">
                <span className="text-[#0079FE] text-[11px] sm:text-xs md:text-sm font-normal">Feature 2</span>
              </div>
              <div className="flex flex-col gap-1.5 sm:gap-2 md:gap-3">
                <h3 className="text-[#1E293B] text-sm sm:text-base md:text-lg lg:text-xl font-normal">Lead Assignment & Tracking</h3>
                <p className="text-[#1E293B] text-xs sm:text-sm font-normal">
                  Distribute leads instantly to your sales reps based on region, expertise, or workload.
                </p>
              </div>
            </div>
            <div className="bg-[#FAFBFB] rounded-lg p-2.5 sm:p-3 mt-auto">
              <div className="bg-white rounded-lg border border-[#EFF1F3] p-2.5 sm:p-3">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-[#363636] text-[11px] sm:text-xs font-semibold">Auto Assignment</span>
                  <div className="px-1.5 py-0.5 bg-[#D1FAE5] rounded-full">
                    <span className="text-[#067A59] text-[9px] sm:text-[10px] font-medium">Active</span>
                  </div>
                </div>
                <div className="space-y-1.5">
                  {[
                    { name: "Team North", leads: 12, color: "#DEE8FC", textColor: "#2463EB", initials: "TN" },
                    { name: "Team South", leads: 8, color: "#BBECD6", textColor: "#1D8868", initials: "TS" },
                    { name: "Team West", leads: 15, color: "#FEF3C7", textColor: "#B85C14", initials: "TW" },
                  ].map((team, idx) => (
                    <div key={idx} className="flex justify-between items-center py-1.5 border-b border-[#F5F5F7] last:border-0">
                      <div className="flex items-center gap-1.5 sm:gap-2">
                        <div className={`w-5 h-5 sm:w-6 sm:h-6 rounded-full flex items-center justify-center`} style={{ backgroundColor: team.color }}>
                          <span className="text-[8px] sm:text-[9px] font-medium" style={{ color: team.textColor }}>{team.initials}</span>
                        </div>
                        <span className="text-[#1E293B] text-[11px] sm:text-xs">{team.name}</span>
                      </div>
                      <div className="flex items-center gap-1.5 sm:gap-2">
                        <span className="text-[#64748B] text-[9px] sm:text-[10px]">{team.leads} lead</span>
                        <div className="w-12 sm:w-14 md:w-16 h-1 sm:h-1.5 bg-[#D8E2FA] rounded-full overflow-hidden">
                          <div className="w-full h-full bg-[#9AB6F5] rounded-full" style={{ width: `${(team.leads / 15) * 100}%` }} />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="bg-[#FCFEFF] shadow-sm rounded-xl sm:rounded-2xl border border-[#E3E3E3] p-3 sm:p-4 md:p-5 flex flex-col gap-3 sm:gap-4 relative">
            <div className="flex flex-col gap-2 sm:gap-3 md:gap-4">
              <div className="px-2 sm:px-2.5 md:px-3 py-1 sm:py-1.5 md:py-2 rounded-full border border-[#E3E3E3] inline-flex w-fit">
                <span className="text-[#0079FE] text-[11px] sm:text-xs md:text-sm font-normal">Feature 3</span>
              </div>
              <div className="flex flex-col gap-1.5 sm:gap-2 md:gap-3">
                <h3 className="text-[#1E293B] text-sm sm:text-base md:text-lg lg:text-xl font-normal">Pipeline Management</h3>
                <p className="text-[#1E293B] text-xs sm:text-sm font-normal">
                  Visualize your entire sales process with an easy-to-understand pipeline.
                </p>
              </div>
            </div>
            <div className="bg-[#FAFBFB] rounded-lg p-2.5 sm:p-3 mt-auto">
              <div className="bg-white rounded-lg border border-[#EFF1F3] p-2.5 sm:p-3">
                <h4 className="text-[#363636] text-[11px] sm:text-xs font-semibold mb-2">Sales Pipeline</h4>
                <div className="grid grid-cols-4 gap-1 sm:gap-1.5 md:gap-2">
                  {[
                    { count: 24, label: "New", color: "#60A5FA", height: "h-8 sm:h-10 md:h-12" },
                    { count: 18, label: "Contacted", color: "#38BDF8", height: "h-6 sm:h-7 md:h-8" },
                    { count: 12, label: "Qualified", color: "#FBBF24", height: "h-5 sm:h-6 md:h-7" },
                    { count: 6, label: "Closed", color: "#34D399", height: "h-4 sm:h-5 md:h-6" },
                  ].map((stage, idx) => (
                    <div key={idx} className="text-center">
                      <div className="text-[#363636] text-[10px] sm:text-xs font-semibold mb-1">{stage.count}</div>
                      <div className="flex flex-col gap-1.5">
                        <div className={`w-full ${stage.height} rounded-lg`} style={{ backgroundColor: stage.color }} />
                        <div className="text-[#64748B] text-[9px] sm:text-[10px]">{stage.label}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Feature 4 */}
          <div className="bg-[#FCFEFF] shadow-sm rounded-xl sm:rounded-2xl border border-[#E3E3E3] p-3 sm:p-4 md:p-5 flex flex-col gap-3 sm:gap-4 relative">
            <div className="flex flex-col gap-2 sm:gap-3 md:gap-4">
              <div className="px-2 sm:px-2.5 md:px-3 py-1 sm:py-1.5 md:py-2 rounded-full border border-[#E3E3E3] inline-flex w-fit">
                <span className="text-[#0079FE] text-[11px] sm:text-xs md:text-sm font-normal">Feature 4</span>
              </div>
              <div className="flex flex-col gap-1.5 sm:gap-2 md:gap-3">
                <h3 className="text-[#1E293B] text-sm sm:text-base md:text-lg lg:text-xl font-normal">Follow-Up Reminders</h3>
                <p className="text-[#1E293B] text-xs sm:text-sm font-normal">
                  Never let an opportunity slip through the cracks.
                </p>
              </div>
            </div>
            <div className="bg-[#FAFBFB] rounded-lg p-2.5 sm:p-3 mt-auto">
              <div className="bg-white rounded-lg p-2.5 sm:p-3">
                <h4 className="text-[#363636] text-[11px] sm:text-xs font-semibold mb-2">Upcoming Follow-ups</h4>
                <div className="space-y-1.5">
                  {[
                    { name: "Anil K.", days: "3 day", bg: "#FEF3C7", textColor: "#B4540A" },
                    { name: "Meera R.", type: "Call", bg: "#DEE8FC", textColor: "#2463EB" },
                    { name: "Vikram J.", type: "Email", bg: "#DEE8FC", textColor: "#2463EB" },
                  ].map((item, idx) => (
                    <div key={idx} className="flex justify-between items-center py-1.5 border-b border-[#F5F5F7] last:border-0">
                      <div className="flex items-center gap-1.5 sm:gap-2">
                        <div className="w-1.5 h-1.5 bg-[#F59F0A] rounded-full" />
                        <span className="text-[#1E293B] text-[11px] sm:text-xs">{item.name}</span>
                      </div>
                      <div className={`px-1.5 py-0.5 rounded-full`} style={{ backgroundColor: item.bg }}>
                        <span className={`text-[9px] sm:text-[10px] font-medium`} style={{ color: item.textColor }}>
                          {item.days || item.type}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Row 3 - Two column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-5">
          {/* Feature 5 - Spans 2 columns on large screens */}
          <div className="lg:col-span-2 bg-[#FCFEFF] shadow-sm rounded-xl sm:rounded-2xl border border-[#E3E3E3] p-3 sm:p-4 md:p-5 flex flex-col lg:flex-row justify-between gap-3 sm:gap-4 relative">
            <div className="flex flex-col gap-2 sm:gap-3 md:gap-4 w-full lg:w-[35%]">
              <div className="px-2 sm:px-2.5 md:px-3 py-1 sm:py-1.5 md:py-2 rounded-full border border-[#E3E3E3] inline-flex w-fit">
                <span className="text-[#0079FE] text-[11px] sm:text-xs md:text-sm font-normal">Feature 5</span>
              </div>
              <div className="flex flex-col gap-1.5 sm:gap-2 md:gap-3">
                <h3 className="text-[#1E293B] text-sm sm:text-base md:text-lg lg:text-xl font-normal">Recruitment & Onboarding</h3>
                <p className="text-[#1E293B] text-xs sm:text-sm font-normal">
                  Smooth hiring workflows.
                </p>
              </div>
            </div>
            <div className="w-full lg:w-[60%] bg-[#FAFBFB] rounded-lg p-2.5 sm:p-3">
              <div className="flex flex-col sm:flex-row justify-start items-center gap-2 sm:gap-3">
                <div className="w-full bg-white rounded-lg border border-[#EFF1F3] p-2.5 sm:p-3">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-[#363636] text-[11px] sm:text-xs font-semibold">Applications</span>
                    <div className="px-1.5 py-0.5 bg-[#D1FAE5] rounded-full">
                      <span className="text-[#067A59] text-[9px] sm:text-[10px] font-medium">Active</span>
                    </div>
                  </div>
                  <div className="space-y-1.5">
                    {[
                      { name: "Sanjay M.", role: "Sales Rep", status: "Active", bg: "#D1FAE5", textColor: "#067A59", initials: "SM" },
                      { name: "Divya P.", role: "Account Mgr", status: "Pending", bg: "#FEF3C7", textColor: "#B85C14", initials: "DP" },
                    ].map((app, idx) => (
                      <div key={idx} className="flex justify-between items-center py-1.5 border-b border-[#F5F5F7] last:border-0">
                        <div className="flex items-center gap-1.5 sm:gap-2">
                          <div className="w-5 h-5 sm:w-6 sm:h-6 bg-[#BBECD6] rounded-full flex items-center justify-center">
                            <span className="text-[#1D8868] text-[8px] sm:text-[9px] font-medium">{app.initials}</span>
                          </div>
                          <div>
                            <div className="text-[#1E293B] text-[11px] sm:text-xs font-medium">{app.name}</div>
                            <div className="text-[#1E293B] text-[9px] sm:text-[10px]">{app.role}</div>
                          </div>
                        </div>
                        <div className={`px-1.5 py-0.5 rounded-full`} style={{ backgroundColor: app.bg }}>
                          <span className={`text-[9px] sm:text-[10px] font-medium`} style={{ color: app.textColor }}>{app.status}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="bg-white rounded-lg border border-[#EFF1F3] p-2.5 sm:p-3 text-center min-w-[100px] sm:min-w-[110px] md:min-w-[120px]">
                  <div className="text-[#363636] text-base sm:text-lg md:text-xl font-semibold">87%</div>
                  <div className="mt-1">
                    <div className="text-[#363636] text-[10px] sm:text-xs font-semibold">Onboarding Rate</div>
                    <div className="w-full h-1 sm:h-1.5 bg-[#F3F4F6] rounded-full overflow-hidden mt-1">
                      <div className="w-[87%] h-full bg-[#34D399] rounded-full" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Feature 6 */}
          <div className="bg-[#FCFEFF] shadow-sm rounded-xl sm:rounded-2xl border border-[#E3E3E3] p-3 sm:p-4 md:p-5 flex flex-col gap-3 sm:gap-4">
            <div className="flex flex-col gap-2 sm:gap-3 md:gap-4">
              <div className="px-2 sm:px-2.5 md:px-3 py-1 sm:py-1.5 md:py-2 rounded-full border border-[#E3E3E3] inline-flex w-fit">
                <span className="text-[#0079FE] text-[11px] sm:text-xs md:text-sm font-normal">Feature 6</span>
              </div>
              <div className="flex flex-col gap-1.5 sm:gap-2 md:gap-3">
                <h3 className="text-[#1E293B] text-sm sm:text-base md:text-lg lg:text-xl font-normal">Self-Service Portal</h3>
                <p className="text-[#1E293B] text-xs sm:text-sm font-normal">
                  Empower sales reps to access assigned leads, update statuses, and monitor targets directly.
                </p>
              </div>
            </div>
            <div className="bg-[#FAFBFB] rounded-lg p-2.5 sm:p-3 mt-auto">
              <div className="bg-white rounded-lg border border-[#EFF1F3] p-2.5 sm:p-3">
                <div className="flex items-center gap-1.5 mb-2 sm:mb-3">
                  <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-[#F4F7FE] rounded flex items-center justify-center">
                    <div className="w-1.5 h-1.5 bg-[#9AB6F5] rounded-full" />
                  </div>
                  <span className="text-[#363636] text-[11px] sm:text-xs font-semibold">Rep Dashboard</span>
                  <div className="px-1.5 py-0.5 bg-[#D1FAE5] rounded-full">
                    <span className="text-[#067A59] text-[9px] sm:text-[10px] font-medium">Online</span>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-1.5 sm:gap-2">
                  {[
                    { value: "24", label: "Assigned", color: "#60A5FA" },
                    { value: "12", label: "Converted", color: "#FBBF24" },
                    { value: "₹4.2L", label: "Target", color: "#34D399" },
                  ].map((stat, idx) => (
                    <div key={idx} className="text-center">
                      <div className="bg-[#F8F9FA] rounded py-1 sm:py-1.5 mb-1 sm:mb-1.5">
                        <div className="text-[#363636] text-xs sm:text-sm font-bold">{stat.value}</div>
                        <div className="text-[#64748B] text-[9px] sm:text-[10px]">{stat.label}</div>
                      </div>
                      <div className="w-full h-1 bg-gray-100 rounded-full overflow-hidden">
                        <div className="h-full rounded-full" style={{ width: "70%", backgroundColor: stat.color }} />
                      </div>
                    </div>
                  ))}
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