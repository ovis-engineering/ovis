import React from "react";
import serviceImg from "../assets/servicesBg.svg";
import milliworkShop from "../assets/millworkShop.svg";
import cabinet from "../assets/cabinet.svg";
import ServicesCard from "./ServicesCard";
import "aos/dist/aos.css"; // Import AOS styles globally

const OurServices = () => {
  return (
    <div
      style={{ backgroundImage: `url(${serviceImg})` }}
      className='m-8  mx-auto  p-16 my-16 bg-cover bg-center'
    >
      <h3 className='text-4xl text-center p-4 leading-relaxed text-[#093080] font-medium'>
        Our Services
      </h3>
      <p className='text-md font-medium text-center p-4 text-[#5D5D5D]'>
        We offer professional CAD drafting, millwork shop drawings, and CAD
        conversion services tailored to your project needs.
      </p>

      <div className='max-w-6xl mx-auto flex flex-wrap mt-4'>
        {/* First row: 2 cards side by side */}
        <div
          data-aos='flip-left'
          data-aos-easing='ease-out-cubic'
          data-aos-duration='2000'
          className='w-1/3 p-4 flex justify-center items-center'
        >
          <ServicesCard img={milliworkShop} text='Millwork Shop Drawings' />
        </div>
        <div
          data-aos='flip-left'
          data-aos-easing='ease-out-cubic'
          data-aos-duration='2000'
          className='w-1/3 p-4 flex justify-center items-center'
        >
          <ServicesCard img={cabinet} text='Cabinet Shop Drawings ' />
        </div>
        <div
          data-aos='flip-left'
          data-aos-easing='ease-out-cubic'
          data-aos-duration='2000'
          className='w-1/3 p-4 flex justify-center items-center'
        >
          <ServicesCard img={milliworkShop} text='Furniture Shop Drawings' />
        </div>

        {/* Second row: 1 centered card */}
        <div
          data-aos='flip-left'
          data-aos-easing='ease-out-cubic'
          data-aos-duration='3000'
          className='w-full flex justify-center p-4'
        >
          <div className='w-1/3 flex justify-center items-center'>
            <ServicesCard img={cabinet} text='CAD Conversion' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurServices;
