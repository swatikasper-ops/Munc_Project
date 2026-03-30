import React from "react";
import ImsImg from "../../assets/ImsImg/IMS billing.png";
import { FaArrowRightLong } from "react-icons/fa6";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import ImsSection1 from "./ImsSection1";
import ImsSection2 from "./ImsSection2";
import ImsSection3 from "./ImsSection3";
import WhyChooseUs from "./WhyChooseUs";
import FAQ from "./FAQ";
import Contact from "../Contact";
import Bussiness_Transform from "./Bussiness_Transform";
import KeyFeatures from "./KeyFeatures";

const ImsProduct = () => {
  return (
    <>
      <ImsSection1 />
      {/* <ImsSection2 /> */}
      {/* <ImsSection3 /> */}
      <KeyFeatures/>
      <WhyChooseUs />
      <FAQ />
      {/* <Contact /> */}
      <Bussiness_Transform />
    </>
  );
};

export default ImsProduct;
