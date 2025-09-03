import React from "react";
import ovisLogo from "../assets/ovis1.svg";
import FooterBtn from "./FooterBtn";

const FootBar = () => {
  return (
    <div className='flex  mt-12 h-fit relative '>
      <div className='w-[30%] shadow-md  shadow-gray-400 py-4  px-6'>
        <img src={ovisLogo} alt='' width={100} />
        <p className='text-lg font-bold mb-2'>
          Ovis Engineering Service Pvt Ltd
        </p>
        <p className='text-sm leading-relaxed mb-2'>
          We are a Chennai, India based company providing drafting solutions to
          Architects, Builders, Contractors, Sub-Contractors and manufacturers
          around the world. Within this time, because of our quality of work and
          quick turnarounds, we have been able to serve many companies across
          the USA and worldwide
        </p>
        <h3 className='text-lg font-bold text-amber-500 underline'>Contact</h3>
        <p className='text-sm'>
          <span className='font-bold  mr-2'>Email:</span>
          info@ovisengineering.com
        </p>
        <p className='text-sm'>
          <span className='font-bold  mr-2'>Phone:</span>
          +91 887 048 6014
        </p>
        <p className='text-sm'>
          <span className='font-bold   mr-2'>Head Office:</span>
          103, Dr Ambedkar Nagar, Ernavoor Chennai, India - 600 057
        </p>
      </div>
      <div className='w-[70%] flex justify-evenly text-white text-sm bg-[#0F446B]'>
        <div className='flex flex-col gap-2 mt-12 '>
          <h4 className='font-bold text-white text-lg'>Services</h4>
          <div className='border-2 w-3/4 border-amber-500'></div>
          <p>Architectural Millwork Drawings</p>
          <p>Custom Cabinetry Drawings</p>
          <p>Casework Shop Drawings</p>
          <p>Retail & Hospitality Millwork Drawings</p>
          <p>Restaurant & Café Fixture Drawings</p>
          <p>Revision & Coordination Drawings</p>
          <p>CAD Conversions</p>
        </div>
        <div className='flex flex-col gap-2 mt-12'>
          <h4 className='font-bold text-white text-lg'>We Serve For</h4>
          <div className='border-2 w-3/4 border-amber-500'></div>
          <p>Hospitality</p>
          <p>Restaurants</p>
          <p>Retail</p>
          <p>Residential</p>
          <p>Offices & Commercial Buildings</p>
          <p>Educational Institutions</p>
          <p>Public Libraries & Museums</p>
          <p>Healthcare Facilities</p>
        </div>
        <div className='flex flex-col gap-2 mt-12'>
          <h4 className='font-bold text-white text-lg'>Quick Links</h4>
          <div className='border-2 w-3/4 border-amber-500'></div>
          <p>About Us</p>
          <p>What We Offer</p>
          <p>Contact Us</p>
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
          <p>Follow us on:</p>
          <FooterBtn />
        </div>
      </div>
      <p className='absolute bottom-5 left-2/4 text-white'>
        Copyright © 2025 Ovis IT Solutions. All Rights Reserved.
      </p>
    </div>
  );
};

export default FootBar;
