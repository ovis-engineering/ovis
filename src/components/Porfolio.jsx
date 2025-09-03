import React from "react";
import portfolio1 from "../assets/portfolio1.svg";
import portfolio2 from "../assets/portfolio2.svg";
import portfolio3 from "../assets/portfolio3.svg";
import ViewMoreBtn from "./ViewMoreBtn";
import { Link } from "react-router-dom";

const Porfolio = () => {
  return (
    <>
      <div className=' bg-gray-200 w-full  mx-auto'>
        <h2 className='text-center text-4xl p-4 font- text-[#093080] leading-relaxed'>
          Our Portfolio
        </h2>
        <p className='text-md max-w-4xl mb-10 mx-auto text-center text-[#685555]'>
          Explore our portfolio to see the quality and precision of our
          completed CAD and millwork projects.  Each sample reflects our
          commitment to detail, accuracy, and client satisfaction.
        </p>
        <div className='flex items-center justify-center p-2 gap-4'>
          {[portfolio1, portfolio2, portfolio3].map((imgSrc, idx) => (
            <div
              key={idx}
              className='relative group w-[400px] h-auto overflow-hidden'
            >
              <img
                src={imgSrc}
                alt=''
                className='w-full transition duration-300 ease-in-out group-hover:blur-sm group-hover:scale-105'
              />

              <button className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out bg-amber-500 text-white px-4 py-2 rounded-md'>
                View More
              </button>
            </div>
          ))}
        </div>
        <div className='flex items-center justify-center p-4'>
          <Link to={"/portfolio"}>
            <ViewMoreBtn />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Porfolio;
