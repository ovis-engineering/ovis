import React, { useEffect, useState } from "react";
import homeImg from "../assets/home.svg";
import homeImg1 from "../assets/home.svg";
import homeImg2 from "../assets/home.svg";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { IoIosArrowDropleftCircle } from "react-icons/io";

const images = [homeImg1, homeImg2, homeImg];
const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goNext = () => {
    const idx = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(idx);
  };

  const goBack = () => {
    const idx = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(idx);
  };

  // Auto-slide every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval); // cleanup
  }, []);

  return (
    <div className=' relative mt-28 w-full mx-auto'>
      <img src={images[currentIndex]} alt='' className='w-full h-auto z-0' />
      {/* Dark overlay */}
      <div className='absolute inset-0 bg-black opacity-40 z-10 '></div>

      <div className='absolute  bg-opacity-60 top-44 left-80 z-30 flex flex-col space-y-1 '>
        <p className='text-white text-3xl'>Welcome to Ovis</p>
        <h2 className='text-white text-6xl font-bold'>Your Premier Millwork</h2>
        <h2 className='text-white text-6xl font-bold'>Drafting Partner</h2>
      </div>
      <div className='absolute hover:text-gray-200 hover:scale-110 transition-all duration-300 cursor-pointer    text-white z-30 top-1/2 right-5  text-5xl '>
        <IoIosArrowDroprightCircle onClick={goNext} />
      </div>
      <div className='absolute hover:text-gray-200 hover:scale-110 transition-all duration-300 cursor-pointer  text-white z-30 top-1/2 left-5  text-5xl '>
        <IoIosArrowDropleftCircle onClick={goBack} />
      </div>
    </div>
  );
};

export default ImageSlider;
