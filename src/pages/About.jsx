import React from "react";
import Nav from "../components/Nav";
import ServicesImg from "../components/ServicesImg";
import AboutDescription from "../components/About/AboutDescription";
import Moto from "../components/About/Moto";
import WhyChooseUs from "../components/About/WhyChooseUs";
import FootBar from "../components/FootBar";

const About = () => {
  return (
    <div>
      <Nav />
      <ServicesImg title={"About Us"} />
      <AboutDescription />
      <Moto />
      <WhyChooseUs />
      <FootBar />
    </div>
  );
};

export default About;
