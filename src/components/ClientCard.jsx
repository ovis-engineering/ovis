import React from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles globally
import { useEffect } from "react";

const ClientCard = () => {
  useEffect(() => {
    AOS.init({
      offset: 120, // offset (in px) from the original trigger point
      duration: 1500, // values from 0 to 3000, with step 50ms
      easing: "ease-in-out", // default easing for AOS animations
      delay: 110,
      once: false,
    });
  }, []);
  return (
    <div
      data-aos='zoom-in-up'
      className='w-[30%] h-64 p-8 mt-8  rounded-md flex flex-col items-center justify-center shadow-md shadow-gray-500 hover:shadow-xl hover:scale-120 hover:bg-amber-500 hover:-translate-y-1 '
    >
      <p className='text-lg font-bold my-4 text-center'>
        Expertise in Millwork Drafting
      </p>
      <p className='text-md mb-2 text-center'>
        We provide detailed, accurate millwork shop drawings, cabinetry designs,
        custom furniture drafts & more, adhering to AWI, and NBKA standards.
      </p>
    </div>
  );
};

export default ClientCard;
