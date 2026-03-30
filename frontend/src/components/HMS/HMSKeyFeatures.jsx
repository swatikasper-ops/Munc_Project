import React from "react";
import hms_key_one from "../../assets/hms-key-one.png";
import hms_key_two from "../../assets/hms-key-two.png";
import hms_key_three from "../../assets/hms-key-three.png";
import hms_key_four from "../../assets/hms-key-four.png";
import hms_key_five from "../../assets/hms-key-five.png";
import hms_key_six from "../../assets/hms-key-six.png";

const HMSKeyFeatures = () => {
  return (
    <section className="bg-[white] py-4 md:py-6 font-['Public_Sans']">
      <h2 className="text-center text-[#0070db] text-[28px] sm:text-[36px] md:text-[42px] lg:text-[48px] font-bold mb-3 sm:mb-4 md:mb-5">
        Key Features
      </h2>

      <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
          
          {/* Feature 1 - Large Card - Reduced height for all screens */}
          <div className="col-span-1 sm:col-span-2 lg:col-span-3 bg-[#FCFEFF] border border-[#e8e8e8] rounded-2xl p-3 sm:p-3 md:p-4 flex flex-col lg:flex-row justify-between gap-3 lg:gap-4">
            <div className="w-full lg:w-[45%]">
              <span className="inline-flex items-center justify-center px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full border border-[#d7d7d7] text-[#0a78ff] text-[10px] sm:text-xs md:text-sm font-medium bg-[#FCFEFF] mb-1.5 sm:mb-2 inline-block">
                Feature 1
              </span>
              <h3 className="text-[#273247] text-sm sm:text-base md:text-lg lg:text-xl font-medium leading-tight">
                Reservations & Booking Management
              </h3>
              <p className="text-[#465163] text-[10px] sm:text-xs md:text-sm mt-1 max-w-full lg:max-w-[350px]">
                Easily create, view, edit, and manage bookings including future reservations, cancellations, and tentative bookings—all in one place.
              </p>
            </div>
            <div className="w-full lg:w-[50%] flex justify-center items-center mt-2 sm:mt-2 lg:mt-0">
              <img 
                src={hms_key_one} 
                alt="hms_key_one" 
                className="w-full max-w-[280px] sm:max-w-[320px] md:max-w-[380px] lg:max-w-[450px] xl:max-w-[500px] h-auto object-contain"
              />
            </div>
          </div>

          {/* Feature 2 - Full width image */}
          <div className="bg-[#FCFEFF] border border-[#e8e8e8] rounded-2xl p-3 sm:p-4 flex flex-col">
            <span className="inline-flex items-center justify-center px-3 py-1 rounded-full border border-[#d7d7d7] text-[#0a78ff] text-xs sm:text-sm font-medium bg-[#FCFEFF] mb-2 w-fit">
              Feature 2
            </span>
            <h3 className="text-[#273247] text-sm sm:text-base md:text-lg font-medium leading-tight">
              Check-in & Check-out Operations
            </h3>
            <p className="text-[#465163] text-[10px] sm:text-xs mt-1 line-clamp-2">
              Handle guest arrivals and departures smoothly with support for walk-ins, early check-ins, late check-outs, and stay extensions.
            </p>
            <div className="w-full mt-2">
              <img 
                src={hms_key_two} 
                alt="hms_key_two" 
                className="w-full h-auto object-contain max-h-[160px] sm:max-h-[180px] md:max-h-[200px]"
              />
            </div>
          </div>

          {/* Feature 3 - Full width image */}
          <div className="bg-[#FCFEFF] border border-[#e8e8e8] rounded-2xl p-3 sm:p-4 flex flex-col">
            <span className="inline-flex items-center justify-center px-3 py-1 rounded-full border border-[#d7d7d7] text-[#0a78ff] text-xs sm:text-sm font-medium bg-[#FCFEFF] mb-2 w-fit">
              Feature 3
            </span>
            <h3 className="text-[#273247] text-sm sm:text-base md:text-lg font-medium leading-tight">
              Billing & Payment Management
            </h3>
            <p className="text-[#465163] text-[10px] sm:text-xs mt-1 line-clamp-2">
              Manage invoices, collect payments, track pending dues, add extra charges, and process refunds with complete financial visibility.
            </p>
            <div className="w-full mt-2">
              <img 
                src={hms_key_three} 
                alt="hms_key_three" 
                className="w-full h-auto object-contain max-h-[160px] sm:max-h-[180px] md:max-h-[200px]"
              />
            </div>
          </div>

          {/* Feature 4 - Full width image */}
          <div className="bg-[#FCFEFF] border border-[#e8e8e8] rounded-2xl p-3 sm:p-4 flex flex-col">
            <span className="inline-flex items-center justify-center px-3 py-1 rounded-full border border-[#d7d7d7] text-[#0a78ff] text-xs sm:text-sm font-medium bg-[#FCFEFF] mb-2 w-fit">
              Feature 4
            </span>
            <h3 className="text-[#273247] text-sm sm:text-base md:text-lg font-medium leading-tight">
              Room & Inventory Control
            </h3>
            <p className="text-[#465163] text-[10px] sm:text-xs mt-1 line-clamp-2">
              Assign, change, and manage rooms efficiently while handling availability, amenities, and services across your property.
            </p>
            <div className="w-full mt-2">
              <img 
                src={hms_key_four} 
                alt="hms_key_four" 
                className="w-full h-auto object-contain max-h-[160px] sm:max-h-[180px] md:max-h-[200px]"
              />
            </div>
          </div>

          {/* Feature 5 - Wide Card with image vertically centered */}
          <div className="sm:col-span-2 bg-[#FCFEFF] border border-[#e8e8e8] rounded-2xl p-3 sm:p-4">
            <div className="flex flex-col sm:flex-row justify-between items-center sm:items-stretch gap-4 sm:gap-6">
              <div className="w-full sm:w-1/2 flex flex-col justify-center">
                <span className="inline-flex items-center justify-center px-3 py-1 rounded-full border border-[#d7d7d7] text-[#0a78ff] text-xs sm:text-sm font-medium bg-[#FCFEFF] mb-2 inline-block w-fit">
                  Feature 5
                </span>
                <h3 className="text-[#273247] text-sm sm:text-base md:text-lg font-medium leading-tight">
                  Front Desk Operations & Daily Management
                </h3>
                <p className="text-[#465163] text-[10px] sm:text-xs mt-1">
                  Track shift cash summaries, manage daily operations, and ensure smooth front desk workflows without confusion.
                </p>
              </div>
              <div className="w-full sm:w-1/2 flex justify-center items-center">
                <img 
                  src={hms_key_five} 
                  alt="hms_key_five" 
                  className="w-full max-w-[400px] sm:max-w-[450px] md:max-w-[500px] lg:max-w-[550px] h-auto object-contain max-h-[150px] sm:max-h-[170px] md:max-h-[190px]"
                />
              </div>
            </div>
          </div>

          {/* Feature 6 - Full width image */}
          <div className="bg-[#FCFEFF] border border-[#e8e8e8] rounded-2xl p-3 sm:p-4 flex flex-col">
            <span className="inline-flex items-center justify-center px-3 py-1 rounded-full border border-[#d7d7d7] text-[#0a78ff] text-xs sm:text-sm font-medium bg-[#FCFEFF] mb-2 w-fit">
              Feature 6
            </span>
            <h3 className="text-[#273247] text-sm sm:text-base md:text-lg font-medium leading-tight">
              User Management & Reporting
            </h3>
            <p className="text-[#465163] text-[10px] sm:text-xs mt-1 line-clamp-2">
              Control staff access with role-based permissions and gain insights through reports, analytics, and system settings.
            </p>
            <div className="w-full mt-2">
              <img 
                src={hms_key_six} 
                alt="hms_key_six" 
                className="w-full h-auto object-contain max-h-[160px] sm:max-h-[180px] md:max-h-[200px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HMSKeyFeatures;