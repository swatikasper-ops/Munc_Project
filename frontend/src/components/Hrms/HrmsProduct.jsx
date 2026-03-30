import React from "react";
import HrmsSection1 from "./HrmsSection1";
import HrmsSection2 from "./HrmsSection2";
import HrmsSection3 from "./HrmsSection3";
import HrmsSection3_2 from "./HrmsSection3.2";
import HrmsSection3_3 from "./HrmsSection3.3";
import KeyFeature from "./KeyFeature";
import FAQ from "./FAQ";
import Contact from "../Contact";
import HrmsSection4 from "./HrmsSection4";
import Bussiness_Transform from "./Bussiness_Transform";
import WhyChooseHRMS from "./WhyChooseUs";

const HrmsProduct = () => {
  return (
    <>
      <HrmsSection1 />
      {/* <HrmsSection2 /> */}
      {/* <HrmsSection3 /> */}
      {/* <HrmsSection3_2 /> */}
      {/* <HrmsSection3_3 /> */}
      {/* <HrmsSection4/> */}
      <KeyFeature />
      <WhyChooseHRMS />
      <FAQ />
      {/* <Contact/> */}
      <Bussiness_Transform />
    </>
  );
};

export default HrmsProduct;
