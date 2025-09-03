import React from "react";
import Nav from "../components/Nav";
import ImageSlider from "../components/ImageSlider";
import Description from "../components/Description";
import MilliWorks from "../components/MilliWorks";
import OurServices from "../components/OurServices";
import SpecialIn from "../components/SpecialIn";
import OurProcess from "../components/OurProcess";
import Porfolio from "../components/Porfolio";
import Client from "../components/Client";
import FootBar from "../components/FootBar";

const Home = () => {
  return (
    <div className='h-screen'>
      <Nav />
      <ImageSlider />
      <Description />
      <MilliWorks />
      <OurServices />
      <SpecialIn />
      <OurProcess />
      <Porfolio />
      <Client />
      <FootBar />
    </div>
  );
};

export default Home;
