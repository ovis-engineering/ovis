import React from "react";

const ServicesCard = ({ img, text }) => {
  return (
    <div className='bg-white shadow-md  rounded-md flex p-4 items-center w-fit'>
      <img width={70} className='' src={img} alt={text} />
      <p className='w-55  text-center px-4'>{text}</p>
    </div>
  );
};

export default ServicesCard;
