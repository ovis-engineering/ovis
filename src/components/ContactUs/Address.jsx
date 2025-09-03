import React from "react";

const Address = () => {
  return (
    <div className='bg-black/40 h-96 absolute top-20 left-20 p-6 rounded-xl max-w-sm text-white shadow-lg flex flex-col justify-center'>
      <h4 className='text-3xl md:text-4xl font-semibold mb-6 text-center'>
        Get In Touch Today!
      </h4>

      <div className='mb-6'>
        <p className='font-semibold'>Email:</p>
        <p>info@ovisengineering.com</p>
      </div>

      <div>
        <p className='font-semibold'>Phone:</p>
        <p>+91 887 048 6014</p>
      </div>

      <div className='mt-6'>
        <p className='font-semibold'>Head Office:</p>
        <p>103, Dr Ambedkar Nagar, Ernavoor Chennai, India - 600 057.</p>
      </div>
    </div>
  );
};

export default Address;
