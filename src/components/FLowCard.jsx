import React from "react";
import DottedArrow from "./DottedArrow";
import DottedLine from "./DottedLine";
import autoDesk from "../assets/autoDesk.svg";
import group from "../assets/group.svg";
import serviceImg from "../assets/interior-design 2.svg";
const FLowCard = () => {
  return (
    <div className='max-w-7xl relative p-4 mx-auto'>
      <p className='text-lg  text-center'>
        We handle the complete drafting workflow
        <span className='ml-2 font-semibold bg-gradient-to-r from-yellow-400 via-amber-500 to-yellow-600 bg-clip-text text-transparent'>
          for your millwork projects
        </span>
      </p>
      <DottedArrow className='absolute left-[63%] top-28 ' />
      <DottedArrow className='absolute left-[34%] top-28 ' />
      <DottedArrow className='absolute left-[34%] top-60 ' direction='right' />
      <DottedArrow className='absolute left-[63%] top-60 ' direction='right' />
      <DottedArrow
        className='absolute  top-60 '
        length={80}
        direction='right'
      />
      <DottedLine className='absolute top-30' />
      <DottedLine
        className='absolute top-30'
        direction='vertical'
        length={125}
      />
      <div className='grid grid-cols-1 p-4 mt-8 gap-4  m-20 lg:grid-cols-3 lg:gap-16'>
        <div className='h-16  flex items-center justify-center w-full  rounded bg-gray-100 shadow-md'>
          Submittal Drawings
        </div>

        <div className='h-16 flex items-center justify-center rounded w-full bg-gray-100 shadow-md'>
          Whiteline changes and updates
        </div>

        <div className='h-16 w-full flex items-center justify-center rounded bg-gray-100 shadow-md'>
          Redline changes and updates
        </div>

        <div className='h-16  w-full flex items-center justify-center  rounded bg-gray-100 shadow-md'>
          Equipment Cut-sheet updates
        </div>

        <div className='h-16 w-full flex items-center justify-center rounded bg-gray-100 shadow-md'>
          Field Dimension updates
        </div>

        <div className='h-16 w-full flex items-center justify-center  rounded bg-gray-100 shadow-md'>
          Final Approved Drawings
        </div>
      </div>

      <p className='text-4xl m  text-[#093080] font-medium text-center'>
        Why Choose us
      </p>
      <div className='grid  max-w-6xl my-16 mx-auto grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8'>
        <div className='h-32 p-4 rounded bg-gray-100 shadow-md'>
          <p className='text-center text-lg font-semibold text-[#093080]'>
            Precision & Quality
          </p>
          <p className='text-center leading-normal'>
            We ensure each drawing is detailed, accurate, and compliant with AWI
            and international construction standards to prevent costly on-site
            errors.
          </p>
        </div>
        <div className='h-32 p-4 rounded bg-gray-100 shadow-md'>
          <p className='text-center text-lg font-semibold text-[#093080]'>
            Precision & Quality
          </p>
          <p className='text-center leading-normal'>
            We ensure each drawing is detailed, accurate, and compliant with AWI
            and international construction standards to prevent costly on-site
            errors.
          </p>
        </div>{" "}
        <div className='h-32 p-4 rounded bg-gray-100 shadow-md'>
          <p className='text-center text-lg font-semibold text-[#093080]'>
            Precision & Quality
          </p>
          <p className='text-center leading-normal'>
            We ensure each drawing is detailed, accurate, and compliant with AWI
            and international construction standards to prevent costly on-site
            errors.
          </p>
        </div>{" "}
        <div className='h-32 p-4 rounded bg-gray-100 shadow-md'>
          <p className='text-center text-lg font-semibold text-[#093080]'>
            Precision & Quality
          </p>
          <p className='text-center leading-normal'>
            We ensure each drawing is detailed, accurate, and compliant with AWI
            and international construction standards to prevent costly on-site
            errors.
          </p>
        </div>{" "}
        <div className='h-32 p-4 rounded bg-gray-100 shadow-md'>
          <p className='text-center text-lg font-semibold text-[#093080]'>
            Precision & Quality
          </p>
          <p className='text-center leading-normal'>
            We ensure each drawing is detailed, accurate, and compliant with AWI
            and international construction standards to prevent costly on-site
            errors.
          </p>
        </div>
        <div className='h-32 p-4 rounded bg-gray-100 shadow-md'>
          <p className='text-center text-lg font-semibold text-[#093080]'>
            Precision & Quality
          </p>
          <p className='text-center leading-normal'>
            We ensure each drawing is detailed, accurate, and compliant with AWI
            and international construction standards to prevent costly on-site
            errors.
          </p>
        </div>
      </div>
      <div className='grid  max-w-6xl my-16 mx-auto grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8'>
        <div className='h-64 p-4 flex flex-col items-center gap-16 rounded bg-gray-100 shadow-md'>
          <p className='text-center text-lg font-semibold text-[#093080]'>
            Software we use
          </p>

          <img src={autoDesk} width={350} alt='' />
        </div>
        <div className='h-64 p-4 rounded bg-gray-100 shadow-md'>
          <p className='text-center text-lg font-semibold text-[#093080]'>
            Standard we follow
          </p>
          <img src={group} alt='' />
        </div>
      </div>
      <p className='text-4xl  font-medium pt-8 text-[#093080] text-center'>
        Why Choose us
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

export default FLowCard;
