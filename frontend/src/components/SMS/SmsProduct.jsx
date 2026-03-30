import React from 'react'
import SmsSection1 from './SmsSection1'
import SmsSection2 from './SmsSection2'
import SmsSection3 from './SmsSection3'
import SmsSection3_2 from './SmsSection3.2'
import SmsSection3_3 from './SmsSection3.3'
import FAQ from './FAQ'
import Contact from "../Contact"
import SmsSection4 from './SmsSection4'
import SmsBussinessTransforn from './SmsBussinessTransforn'
import SmsChoose from './SmsChoose'


const SmsProduct = () => {
  return (
    <>
      <SmsSection1 />
      {/* <SmsSection2/> */}
      <SmsSection3 />
      {/* <SmsSection3_2/> */}
      {/* <SmsSection3_3/> */}
      {/* <SmsSection4/> */}
      <SmsChoose />
      <FAQ />
      <SmsBussinessTransforn />
      {/* <Contact/> */}

    </>
  )
}

export default SmsProduct