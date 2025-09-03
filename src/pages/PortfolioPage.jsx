import React from "react";
import Nav from "../components/Nav";
import ServicesImg from "../components/ServicesImg";
import Img from "../components/Portfolio/Img";
import Featured from "../components/Portfolio/Featured";
import FootBar from "../components/FootBar";

const PortfolioPage = () => {
  return (
    <div>
      <Nav />
      <ServicesImg title={"Our Porfolio"} />
      <Img header={"Hospitality Millwork Drawings"} />
      <Img header={"Architectural Millwork drawings"} />
      <Img header={"Casework Shop Drawings"} />
      <Img header={"Custom Cabinetry Drawings"} />
      <Featured />
      <FootBar />
    </div>
  );
};

export default PortfolioPage;
