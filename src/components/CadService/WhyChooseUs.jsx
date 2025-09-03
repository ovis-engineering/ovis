import React from "react";
import serviceImg from "../../assets/interior-design 2.svg";
import Button from "../Button";

const WhyChooseUs = () => {
  return (
    <div className='max-w-6xl mx-auto '>
      <p className='text-4xl font-medium text-center text-[#093080]  '>
        We Are Specialized In
      </p>
      <div className='grid my-16 grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8'>
        <div className='h-36 rounded text-center p-4 shadow-md  bg-gray-200'>
          <p className='font-bold py-2 text-[#093080]'>Industry Expertise</p>
          <p className='leading-normal'>
            Our team brings years of experience delivering millwork drafting
            solutions for residential, commercial, retail, hospitality, and
            institutional projects.
          </p>
        </div>
        <div className='h-36 rounded text-center p-4 shadow-md bg-gray-200'>
          <p className='font-bold py-2 text-[#093080]'> Precision & Quality</p>
          <p className='leading-normal'>
            We ensure each drawing is detailed, accurate, and compliant with AWI
            and international construction standards to prevent costly on-site
            errors.
          </p>
        </div>
        <div className='h-36 rounded text-center p-4 shadow-md bg-gray-200'>
          <p className='font-bold py-2 text-[#093080]'>Timely Delivery</p>
          <p className='leading-normal'>
            We value your deadlines. Our streamlined process and skilled team
            guarantee fast turnaround times without compromising on quality.
          </p>
        </div>
        <div className='h-36 rounded text-center p-4 shadow-md bg-gray-200'>
          <p className='font-bold py-2 text-[#093080]'>
            Custom-Tailored Solutions
          </p>
          <p className='leading-normal'>
            Every project is unique. We offer flexible, project-specific drawing
            services that meet your exact design and fabrication needs.
          </p>
        </div>
        <div className='h-36 rounded text-center p-4 shadow-md bg-gray-200'>
          <p className='font-bold py-2 text-[#093080]'>
            Seamless Collaboration
          </p>
          <p className='leading-normal'>
            We work closely with architects, contractors, engineers, and
            manufacturers to ensure smooth communication and project alignment.
          </p>
        </div>
        <div className='h-36 rounded text-center p-4 shadow-md bg-gray-200'>
          <p className='font-bold py-2 text-[#093080]'>
            Comprehensive Drawing Packages
          </p>
          <p className='leading-normal'>
            From detail drawings to revisions and 3D modeling, we deliver
            complete drawing sets that support every stage from concept to
            installation.
          </p>
        </div>
        <div className='h-32 rounded shadow-md bg-gray-200 p-4 text-center lg:col-span-2 w-full lg:w-1/2 mx-auto '>
          <p className='font-bold py-2 text-[#093080]'>
            Trusted by Professionals
          </p>
          <p className='leading-normal'>
            We are a reliable outsourcing partner for homebuilders, developers,
            and millwork manufacturers across various sectors.
          </p>
        </div>
      </div>
      <div className='pt-8'>
        <p className='text-4xl  font-medium  text-[#093080] text-center'>
          Work Sample
        </p>
        <div className='grid grid-cols-1  my-16 gap-4 lg:grid-cols-4 lg:gap-8'>
          <img src={serviceImg} className='' alt='' width={250} />
          <img src={serviceImg} className='' alt='' width={250} />
          <img src={serviceImg} className='' alt='' width={250} />
          <img src={serviceImg} className='' alt='' width={250} />
        </div>
        <div className='max-w-6xl flex justify-center items-center'>
          <Button />
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
