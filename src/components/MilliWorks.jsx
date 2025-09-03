import React from "react";

import MilliworksCards from "./MilliworksCards";
import hospitality from "../assets/hospitality.svg";
import edcuational from "../assets/educational.svg";

import officeAndCommercial from "../assets/officeAndCommercialBuildings.svg";
import residential from "../assets/residential.svg";
import restaurtant from "../assets/restaurtant.svg";
import retail from "../assets/retail.svg";

const MilliWorks = () => {
  return (
    <div className='w-full '>
      <div className='mx-auto max-w-xl text-center mb-12 '>
        <h2 className='text-4xl text-[#093080] mb-4 leading-relaxed font-medium'>
          Multiple MillWork Sectors
        </h2>
        <p className='text-md text-[#5D5D5D] font-medium'>
          We provide milliwork drafting solutions across
        </p>
      </div>
      <div className='max-w-5xl  mx-auto font-medium  flex flex-wrap'>
        <div className='w-1/2 p-4 flex justify-center items-center '>
          <MilliworksCards img={hospitality} text={"Hospitality"} />
        </div>

        <div className='w-1/2 p-4 flex justify-center items-center'>
          <MilliworksCards img={edcuational} text={"Educational"} />
        </div>
        <div className='w-1/2 p-4 flex justify-center items-center'>
          <MilliworksCards
            img={officeAndCommercial}
            text={"Office & Commercial Buildings"}
          />
        </div>
        <div className='w-1/2 p-4 flex justify-center items-center'>
          <MilliworksCards img={residential} text={"Residential"} />
        </div>
        <div className='w-1/2 p-4 flex justify-center items-center'>
          <MilliworksCards img={restaurtant} text={"Restaurtant"} />
        </div>
        <div className='w-1/2 p-4 flex justify-center items-center'>
          <MilliworksCards img={retail} text={"Retail"} />
        </div>
      </div>
    </div>
  );
};

export default MilliWorks;
