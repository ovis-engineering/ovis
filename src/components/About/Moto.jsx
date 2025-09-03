import React from "react";
import img1 from "../../assets/about1.png";
import img2 from "../../assets/about2.png";
import img3 from "../../assets/about3.png";

const Moto = () => {
  return (
    <div className='bg-gray-100 py-12 px-6'>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-12 max-w-7xl mx-auto'>
        {/* Mission */}
        <div className='p-6 bg-white rounded-2xl shadow-md flex flex-col justify-between'>
          <div>
            <div className='w-10 h-1 bg-amber-500 mb-2'></div>
            <h4 className='text-amber-500 font-semibold mb-4'>Our Mission</h4>
            <p className='text-gray-700 leading-relaxed'>
              To provide precise, detailed, and code-compliant millwork drafting
              services that support architects, contractors, and millwork
              fabricators in delivering high-quality interiors. Our mission is
              to be a dependable back-end partner, ensuring every drawing we
              produce is clear, accurate, and ready for production.
            </p>
          </div>
          <img
            src={img1}
            alt='Our Mission'
            className='mt-6 w-full h-48 object-contain'
          />
        </div>

        {/* Vision */}
        <div className='p-6 bg-white rounded-2xl shadow-md flex flex-col justify-between'>
          <div>
            <div className='w-10 h-1 bg-amber-500 mb-2'></div>
            <h4 className='text-amber-500 font-semibold mb-4'>Our Vision</h4>
            <p className='text-gray-700 leading-relaxed'>
              To be recognized as a trusted global millwork drafting partner
              known for quality, consistency, and reliability. We aim to
              simplify the millwork design process for clients worldwide through
              expert knowledge, collaborative support, and timely delivery.
            </p>
          </div>
          <img
            src={img2}
            alt='Our Vision'
            className='mt-6 w-full h-48 object-contain'
          />
        </div>

        {/* Value */}
        <div className='p-6 bg-white rounded-2xl shadow-md flex flex-col justify-between'>
          <div>
            <div className='w-10 h-1 bg-amber-500 mb-2'></div>
            <h4 className='text-amber-500 font-semibold mb-4'>Our Value</h4>
            <p className='text-gray-700 leading-relaxed'>
              We value precision and timely delivery in every project. Client
              satisfaction and clear communication are at the heart of our work.
              We focus on technical accuracy to support smooth fabrication.
              Continuous improvement drives us to deliver dependable service
              every time.
            </p>
          </div>
          <img
            src={img3}
            alt='Our Value'
            className='mt-6 w-full h-48 object-contain'
          />
        </div>
      </div>
    </div>
  );
};

export default Moto;
