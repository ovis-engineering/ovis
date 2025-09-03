import React from "react";
import interiorDesign from "../../assets/interior-design 1.png";

const AboutDescription = () => {
  return (
    <div className='max-w-6xl   mx-auto'>
      <div className='flex p-4 justify-around'>
        <div className='w-[40%]  p-2 leading-loose'>
          <div className='w-full h-1 bg-[#093080]'></div>
          <h2 className='text-4xl text-[#093080] mb-4 leading-relaxed font-medium'>
            About Us!
          </h2>
          <p className='text-lg'>
            Ovis Engineering Services is a dedicated design and drafting firm
            committed to delivering high-quality engineering solutions tailored
            to meet the needs of our clients across various industries. With a
            strong foundation in precision, innovation, and client
            collaboration, we specialize in providing detailed CAD drafting, 2D
            millwork drawings, and design documentation services that meet
            global standards.
          </p>
          <p className='text-lg mt-4  '>
            Our team of skilled engineers and CAD technicians combines technical
            expertise with real-world experience, ensuring that every drawing
            and design output is compliant, buildable, and on time.
          </p>
        </div>
        <img src={interiorDesign} className='w-[40%]' alt='' />
      </div>
    </div>
  );
};

export default AboutDescription;
