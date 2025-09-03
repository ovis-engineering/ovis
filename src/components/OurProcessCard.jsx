import React from "react";

const OurProcessCard = ({ num, heading, para }) => {
  return (
    <div className='mt-16 px-4 py-8 rounded-md  relative w-[85%]  shadow-sm shadow-gray-600 leading-relaxed '>
      <div className='h-12 w-12 text-xl flex items-center justify-center text-white rounded-md bg-gradient-to-tr from-amber-500 via-yellow-500 to-amber-600 absolute top-5 right-10'>
        {num}
      </div>

      <p className='text-xl font-medium mb-2  '>{heading}</p>
      <p className='text-md font-light leading-relaxed '>{para}</p>
    </div>
  );
};

export default OurProcessCard;
