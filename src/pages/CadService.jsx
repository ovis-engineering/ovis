import React from "react";
import Nav from "../components/Nav";
import ServicesImg from "../components/ServicesImg";
import OurServices from "../components/CadService/OurServices";
import ServiceSpecialPhoto from "../components/ServiceSpecialPhoto";
import WhyChooseUs from "../components/CadService/WhyChooseUs";
import FootBar from "../components/FootBar";

const CadService = () => {
  return (
    <div>
      <Nav />
      <ServicesImg title={"CAD conversion service"} />
      <OurServices />
      <ServiceSpecialPhoto header={"Our CAD Conversion Workflow"} />
      <WhyChooseUs />
      <FootBar />
    </div>
  );
};

export default CadService;
