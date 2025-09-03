import React from "react";
import ServicesCard from "./ServicesCard";
import cabinet from "../assets/cabinet.svg";

const SpecialIn = () => {
  return (
    <div className='bg-gray-200  p-8'>
      <h1 className='text-center text-4xl font-medium text-[#093080] p-4 leading-relaxed'>
        We are special in
      </h1>
      <p className='text-md font-medium  text-[#5D5D5D] text-center max-w-4xl p-4 mx-auto leading-relaxed'>
        Our drawings are precise, code-compliant, and fabrication-ready —
        covering plan views, elevations, sections, joinery, and hardware for
        seamless manufacturing and installation.
      </p>
      <div className='grid grid-cols-3 gap-6 mt-8 mx-auto max-w-6xl'>
        <ServicesCard img={cabinet} text='CAD Conversion' />
        <ServicesCard img={cabinet} text='CAD Conversion' />
        <ServicesCard img={cabinet} text='CAD Conversion' />

        <ServicesCard img={cabinet} text='CAD Conversion' />
        <ServicesCard img={cabinet} text='CAD Conversion' />
        <ServicesCard img={cabinet} text='CAD Conversion' />

        <ServicesCard img={cabinet} text='CAD Conversion' />
        <ServicesCard img={cabinet} text='CAD Conversion' />
        <ServicesCard img={cabinet} text='CAD Conversion' />

        <ServicesCard img={cabinet} text='CAD Conversion' />
      </div>
    </div>
  );
};

export default SpecialIn;
