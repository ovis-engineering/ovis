import React, { useEffect } from "react";
import OurProcessCard from "./OurProcessCard";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles globally

const OurProcess = () => {
  // useEffect(() => {
  //   AOS.init({
  //     offset: 120, // offset (in px) from the original trigger point
  //     duration: 100, // values from 0 to 3000, with step 50ms
  //     easing: "ease-in-out", // default easing for AOS animations
  //     delay: 10,
  //     once: false,
  //   });
  // }, []);
  return (
    <div className='h-screen my-16 max-w-6xl mx-auto'>
      <h3 className='text-4xl text-center leading-relaxed p-4 text-[#093080] font-medium'>
        Our Process
      </h3>
      <p className='text-md text-center text-[#685555]'>
        We are a trusted CAD drafting company delivering accurate, on-time
        drawings tailored to your project needs.
      </p>

      <div className='grid grid-cols-1 sm:grid-cols-2  gap-8 px-4 max-w-6xl mx-auto '>
        <div data-aos='fade-right'>
          <OurProcessCard
            num={"01"}
            heading={"Getting to know you"}
            para={
              "Initial consultation to understand client’s requirements, gather specifications, and discuss project scope and timeline."
            }
          />
        </div>

        <div data-aos='fade-left'>
          <OurProcessCard
            num={"02"}
            heading={"Getting to know you"}
            para={
              "Initial consultation to understand client’s requirements, gather specifications, and discuss project scope and timeline."
            }
          />
        </div>

        <div data-aos='fade-right'>
          <OurProcessCard
            num={"03"}
            heading={"Getting to know you"}
            para={
              "Initial consultation to understand client’s requirements, gather specifications, and discuss project scope and timeline."
            }
          />
        </div>

        <div data-aos='fade-left'>
          <OurProcessCard
            num={"04"}
            heading={"Getting to know you"}
            para={
              "Initial consultation to understand client’s requirements, gather specifications, and discuss project scope and timeline."
            }
          />
        </div>
      </div>
    </div>
  );
};

export default OurProcess;
