import React from "react";
import Button from "../Button";

const WhyChooseUs = () => {
  return (
    <section className='bg-white py-12'>
      <div className='max-w-6xl px-6 mx-auto text-center'>
        {/* Title */}
        <h2 className='text-3xl font-bold text-amber-500 mb-4'>
          Why Choose Ovis Engineering Service?
        </h2>
        <p className='text-gray-700 leading-relaxed max-w-3xl mx-auto mb-12'>
          Choosing Ovis means partnering with a team that understands your
          project needs from start to finish. Here's what sets us apart:
        </p>

        {/* Features Grid */}
        <div className='grid gap-8 sm:grid-cols-2 text-left'>
          <div className='p-6 bg-gray-50 rounded-2xl shadow-lg hover:shadow-2xl transition duration-300'>
            <h4 className='text-xl font-semibold text-amber-500 mb-2'>
              Millwork Drafting Specialist
            </h4>
            <p className='text-gray-600'>
              We focus on precision-crafted CAD shop drawings tailored for
              millwork and interior fit-outs.
            </p>
          </div>

          <div className='p-6 bg-gray-50 rounded-2xl shadow-lg hover:shadow-2xl transition duration-300'>
            <h4 className='text-xl font-semibold text-amber-500 mb-2'>
              Fast & Reliable Delivery
            </h4>
            <p className='text-gray-600'>
              Our streamlined workflow ensures your drawings are delivered on
              time, every time.
            </p>
          </div>

          <div className='p-6 bg-gray-50 rounded-2xl shadow-lg hover:shadow-2xl transition duration-300'>
            <h4 className='text-xl font-semibold text-amber-500 mb-2'>
              Quality You Can Trust
            </h4>
            <p className='text-gray-600'>
              We maintain strict quality checks to ensure accuracy, compliance,
              and production-readiness.
            </p>
          </div>

          <div className='p-6 bg-gray-50 rounded-2xl shadow-lg hover:shadow-2xl transition duration-300'>
            <h4 className='text-xl font-semibold text-amber-500 mb-2'>
              Modern Tools, Better Output
            </h4>
            <p className='text-gray-600'>
              Using the latest CAD platforms, we produce clear, professional,
              and detailed documentation.
            </p>
          </div>
        </div>

        {/* CTA Button */}
        <div className='mt-12'>
          <Button />
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
