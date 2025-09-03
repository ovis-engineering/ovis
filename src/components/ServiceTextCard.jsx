import React from "react";

const ServiceTextCard = ({ count, header, text }) => {
  return (
    <div className=' flex  items-center h-20  '>
      <p className='bg-gradient-to-tl from-amber-500 to-orange-500 w-[15%] text-2xl h-full flex justify-center items-center'>
        {count}
      </p>
      <div className='bg-gray-200 shadow-md px-4 flex flex-col justify-evenly items-center w-full text-center h-full'>
        <p className='text-md font-semibold'>{header}</p>
        <p className='text-sm'>{text}</p>
      </div>
    </div>
  );
};

export default ServiceTextCard;
