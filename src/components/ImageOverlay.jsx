import React from "react";
import serviceImg from "../assets/interior-design 2.svg";

const ImageOverlay = () => {
  return (
    <div>
      <img src={serviceImg} className='absolute right-0' alt='' width={250} />
      <img
        src={serviceImg}
        className='absolute top-40 left-20 z-40'
        alt=''
        width={250}
      />

      <img
        src={serviceImg}
        className='absolute right-0 top-[45%] z-20'
        alt=''
        width={250}
      />

      <img
        src={serviceImg}
        className='absolute bottom-0 z-0 left-20 '
        alt=''
        width={250}
      />
    </div>
  );
};

export default ImageOverlay;
