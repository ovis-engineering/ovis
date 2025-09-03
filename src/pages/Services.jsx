import Nav from "../components/Nav";
import ServicesImg from "../components/ServicesImg";
import ServicesDesc from "../components/ServicesDesc";
import ServiceSpecialIn from "../components/ServiceSpecialIn";
import ServiceSpecialPhoto from "../components/ServiceSpecialPhoto";
import FLowCard from "../components/FLowCard";
import FootBar from "../components/FootBar";

const Services = () => {
  return (
    <div>
      <Nav />
      <ServicesImg title={"Millwork Shop Drawings Service"} />
      <ServicesDesc />
      <ServiceSpecialIn />
      <ServiceSpecialPhoto header={"We are special in"} />
      <FLowCard />
      <FootBar />
    </div>
  );
};

export default Services;
