import React from "react";
import LmsSec1 from "./LmsSec1";
import LmsSec2 from "./LmsSec2";
import LmsSec3_1 from "./LmsSec3.1";
import LmsSec3_2 from "./LmsSec3.2";
import LmsSec3_3 from "./LmsSec3.3";
import LmsSec4 from "./LmsSec4";
import KeyFeature from "./KeyFeature";
import FAQ from "../Lms/FAQ";
import Contact from "../Contact";
import Bussiness_Transform from "./Bussiness_Transform";
import WhyChooseLMS from "./WhyChooseUs";

const LmsProduct = () => {
  return (
    <>
      <LmsSec1 />
      {/* <LmsSec2 /> */}
      {/* <LmsSec3_1 /> */}
      {/* <LmsSec3_2 /> */}
      {/* <LmsSec3_3 /> */}
      {/* <LmsSec4 /> */}
      <KeyFeature />
      <WhyChooseLMS/>
      <FAQ />
      {/* <Contact /> */}
      <Bussiness_Transform />
    </>
  );
};

export default LmsProduct;
