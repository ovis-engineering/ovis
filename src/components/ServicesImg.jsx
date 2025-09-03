import React from "react";
import homeImg from "../assets/serviceImg.svg";

const ServicesImg = ({ title, text }) => {
  return (
    <div className='relative mt-28 mb-16 w-full mx-auto'>
      <img src={homeImg} alt='' className='w-full h-auto z-0' />
      {/* Dark overlay */}
      <div className='absolute inset-0 bg-black opacity-40 z-10 '></div>
      {/* 
      <div className='absolute    bg-opacity-60 top-1/3 left-1/4 z-30 flex flex-col space-y-8 '>
        <h2 className='text-white  text-center   text-5xl  font-bold'>
          {title}
        </h2>
        <h2 className='text-white text-xl text-center font-semibold'>
          Precision Drawings that Turn Vision into Reality
        </h2>
      </div> */}
      <div className='absolute w-full top-1/2 left-1/2 z-30 flex flex-col space-y-8 transform -translate-x-1/2 -translate-y-1/2 text-center'>
        <h2 className='text-white text-5xl font-bold'>{title}</h2>
        <h2 className='text-white text-xl font-semibold'>
          Precision Drawings that Turn Vision into Reality
        </h2>
      </div>
    </div>
  );
};

export default ServicesImg;
