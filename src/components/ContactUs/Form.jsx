import React from "react";
import img from "../../assets/contactUs.png";
import ContactForm from "./ContactForm";
import Address from "./Address";
const Form = () => {
  return (
    <div>
      <div className='max-w-6xl p-4 mx-auto'>
        <h3 className='text-2xl  tracking-wide text-center'>
          "We handle the complete drafting workflow for
          <span className='font-semibold ml-2 text-amber-500'>
            your milliwork project."
          </span>
        </h3>
        <div className=' p-4   relative '>
          <img src={img} alt='' className=' h-4/5 object-contain rounded-2xl' />
          <ContactForm />
          <Address />
        </div>
        <p className='max-w-2xl text-lg mx-auto text-center'>
          At Ovis, we create quality millwork shop drawings that are
          <span className='text-amber-500 ml-2'>
            precise, error-free, and delivered on time, supporting the success
            of your projects.
          </span>
        </p>
      </div>
    </div>
  );
};

export default Form;
