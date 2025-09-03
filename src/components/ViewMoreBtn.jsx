import React from 'react';

const ViewMoreBtn = () => {
  return (
    <button className="cursor-pointer rounded-md font-semibold overflow-hidden relative z-100 border border-[#093080] group px-8 py-2">
      <span className="relative z-10 text-[#093080] group-hover:text-white text-lg duration-500">View More</span>
      <span className="absolute w-full h-full bg-[#093080] -left-32 top-0 -rotate-45 group-hover:rotate-0 group-hover:left-0 duration-500" />
      <span className="absolute w-full h-full bg-[#093080] -right-32 top-0 -rotate-45 group-hover:rotate-0 group-hover:right-0 duration-500" />
    </button>
  );
}

export default ViewMoreBtn;
