import React from "react";
import Imsstock from "../../assets/IMS/imsstock.png";
import Barcodescan from "../../assets/IMS/barcodescanner.jpg";
import Smartreport from "../../assets/IMS/smartreport.png";
import GST from "../../assets/IMS/gst.png";
import Featuretwo from "../../assets/IMS/featurefoour.png";
import Featurefour from "../../assets/IMS/featurtwo.png";

const features = [
  {
    tag: "Feature 1",
    title: "Real-Time Stock Tracking",
    desc: "Monitor stock levels, incoming shipments, and outgoing sales instantly.",
  },
  {
    tag: "Feature 2",
    title: "Purchase & Sales Management",
    desc: "Simplify vendor and customer transactions with integrated sales and purchase modules.",
  },
  {
    tag: "Feature 3",
    title: "Barcode & Scanner Support",
    desc: "Speed up stock entry and checkout with barcode scanning.",
  },
  {
    tag: "Feature 4",
    title: "Warehouse & Multi Location Control",
    desc: "Manage multiple branches or warehouses under one unified platform.",
  },
  {
    tag: "Feature 5",
    title: "Smart Reports & Analytics",
    desc: "Understand your business better through visual dashboards and performance analytics.",
  },
  {
    tag: "Feature 6",
    title: "GST & Invoice Management",
    desc: "Generate tax-ready invoices in seconds with built-in GST compliance.",
  },
];

const KeyFeatures = () => {
  return (
    <section className="w-full pt-0 pb-6 sm:pt-4 md:pt-10 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* TITLE */}
        <h2
          className="
  text-center 
  text-[24px] 
  font-bold 
  text-[#004CAF] 
  mb-6 mt-0

  sm:text-[27px] sm:mb-4
  md:text-[30px] md:mb-12
  lg:text-[34px] 
  xl:text-[36px] 
  2xl:text-[40px]
"
        >
          Key Features
        </h2>

        {/* GRID (FIGMA STRUCTURE) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* FEATURE 1 (BIG CARD) */}
          <div className="lg:col-span-3 bg-[#FCFEFF] border border-[#E3E3E3] rounded-2xl p-6 flex flex-col lg:flex-row justify-between gap-6 min-h-[380px]">
            {/* LEFT TEXT */}
            <div className="lg:w-[45%]">
              <span
                className="inline-block px-4 py-1 border rounded-full text-[#0079FE] text-sm mb-4"
                style={{
                  fontWeight: 400,
                  fontSize: "16px",
                  fontFamily: "Public Sans, sans-serif",
                }}
              >
                {features[0].tag}
              </span>

              <h3 className="text-2xl text-[#1E293B]">{features[0].title}</h3>

              <p className="text-sm text-[#64748B] mt-3 max-w-[350px]">
                {features[0].desc}
              </p>
            </div>

            {/* RIGHT VISUAL */}
            <img src={Imsstock} alt="imsstock" />
          </div>

          {/* FEATURE 2 */}
          <div className="bg-[#FCFEFF] border border-[#E3E3E3] rounded-2xl p-6 min-h-[260px] flex flex-col justify-between">
            <div>
              <span className="inline-block px-4 py-1 border rounded-full text-[#0079FE] text-sm mb-4">
                {features[1].tag}
              </span>

              <h3 className="text-xl text-[#1E293B]">{features[1].title}</h3>

              <p className="text-sm text-[#64748B] mt-2">{features[1].desc}</p>
            </div>
            <img src={Featuretwo} alt="two" />

            {/* <div className="mt-6 h-[180px] bg-[#F1F5F9] rounded-xl" /> */}
          </div>

          {/* FEATURE 3 */}
          <div className="bg-[#FCFEFF] border border-[#E3E3E3] rounded-2xl p-6 min-h-[260px] flex flex-col justify-between">
            <div>
              <span className="inline-block px-4 py-1 border rounded-full text-[#0079FE] text-sm mb-4">
                {features[2].tag}
              </span>

              <h3 className="text-xl text-[#1E293B]">{features[2].title}</h3>

              <p className="text-sm text-[#64748B] mt-2">{features[2].desc}</p>
            </div>

            <img src={Barcodescan} alt="barcode" />
            {/* <div className="mt-6 h-[180px] bg-[#F1F5F9] rounded-xl" /> */}
          </div>

          {/* FEATURE 4 */}
          <div className="bg-[#FCFEFF] border border-[#E3E3E3] rounded-2xl p-6 min-h-[260px] flex flex-col justify-between">
            <div>
              <span className="inline-block px-4 py-1 border rounded-full text-[#0079FE] text-sm mb-4">
                {features[3].tag}
              </span>

              <h3 className="text-xl text-[#1E293B]">{features[3].title}</h3>

              <p className="text-sm text-[#64748B] mt-2">{features[3].desc}</p>
            </div>

            {/* <div className="mt-6 h-[180px] bg-[#F1F5F9] rounded-xl" /> */}
            <img src={Featurefour} alt="feature" />
          </div>

          {/* FEATURE 5 (WIDE CARD) */}

          <div className="bg-[#FCFEFF] border border-[#E3E3E3] rounded-2xl p-6 min-h-[260px] flex flex-col justify-between">
            <div>
              <span className="inline-block px-4 py-1 border rounded-full text-[#0079FE] text-sm mb-4">
                {features[4].tag}
              </span>

              <h3 className="text-xl text-[#1E293B]">{features[4].title}</h3>

              <p className="text-sm text-[#64748B] mt-2">{features[4].desc}</p>
            </div>

            {/* <div className="mt-6 h-[180px] bg-[#F1F5F9] rounded-xl" /> */}
            <img src={Smartreport} alt="smart" />
          </div>

          {/* FEATURE 6 */}
          <div className="bg-[#FCFEFF] border border-[#E3E3E3] rounded-2xl p-6 min-h-[380px] flex flex-col justify-between">
            <div>
              <span className="inline-block px-4 py-1 border rounded-full text-[#0079FE] text-sm mb-4">
                {features[5].tag}
              </span>

              <h3 className="text-xl text-[#1E293B]">{features[5].title}</h3>

              <p className="text-sm text-[#64748B] mt-2">{features[5].desc}</p>
            </div>

            {/* <div className="mt-6 h-[200px] bg-[#F1F5F9] rounded-xl" /> */}
            <img src={GST} alt="gst" style={{ marginBottom: 0 }} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default KeyFeatures;
