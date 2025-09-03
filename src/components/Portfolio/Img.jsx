import React from "react";
import serviceImg from "../../assets/interior-design 2.svg";

const Img = ({ header }) => {
  return (
    <div className='max-w-7xl py-12  mx-auto'>
      <p className='text-4xl font-medium  text-[#093080] text-center'>
        {header}
      </p>
      <div className='grid grid-cols-1 my-16 gap-4 lg:grid-cols-4 lg:gap-8'>
        <img src={serviceImg} className='' alt='' width={250} />
        <img src={serviceImg} className='' alt='' width={250} />
        <img src={serviceImg} className='' alt='' width={250} />
        <img src={serviceImg} className='' alt='' width={250} />
      </div>
    </div>
  );
};

export default Img;
