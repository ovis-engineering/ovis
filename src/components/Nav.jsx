// import React from "react";
// import ovisLogo from "../assets/ovis1.svg";
// import rightArrow from "../assets/arrow.svg";
// import Button from "./Button";
// import { Link } from "react-router-dom";

// const Nav = () => {
//   return (
//     <nav className='bg-white fixed w-full top-0 h-28   shadow-md  z-50 font-medium'>
//       <div className='flex items-center justify-between py-2 px-16'>
//         <img src={ovisLogo} width={150} alt='ovis logo' />
//         <ul className='flex items-center justify-between w-[60%] gap-6  '>
//           <li className='hover:text-blue-500 cursor-pointer transition duration-200'>
//             <Link to={"/"}>Home</Link>
//           </li>
//           <li className='relative group cursor-pointer'>
//             {/* Parent text */}
//             <span className='hover:text-blue-500 transition duration-200'>
//               Our Services
//             </span>

//             {/* Dropdown Menu */}
//             <ul className='absolute left-0 top-full mt-0 hidden w-60 rounded-md bg-white shadow-lg group-hover:block z-50'>
//               <li className='px-4 py-2 hover:bg-gray-100 hover:text-blue-500'>
//                 <Link to={"/millwork"}>Millwork Drawings Service</Link>
//               </li>
//               <li className='px-4 py-2 hover:bg-gray-100 hover:text-blue-500'>
//                 <Link to={"/cad"}>CAD Conversion Service</Link>
//               </li>
//             </ul>
//           </li>

//           <li className='hover:text-blue-500 cursor-pointer transition duration-200'>
//             <Link to={"/portfolio"}>Our Portfolio</Link>
//           </li>
//           <li className='hover:text-blue-500 cursor-pointer transition duration-200'>
//             <Link to={"/about"}>About Us</Link>
//           </li>
//           <li className='hover:text-blue-500 cursor-pointer transition duration-200'>
//             <Link to={"/contactUs"}>Contact Us</Link>
//           </li>
//           <Button />
//           {/* <div className='flex bg-[#114c77] px-6 py-2 items-center  cursor-pointer hover:bg-[#0d3b5e] transition duration-200  text-white rounded-full'>
//                     <li className='pr-2'>Get a Quote</li>
//                     <img src={rightArrow} alt=""  width={35}/>
//                 </div>     */}
//         </ul>
//       </div>
//     </nav>
//   );
// };

// export default Nav;

import React, { useState } from "react";
import ovisLogo from "../assets/ovis1.svg";
import Button from "./Button";
import { Link } from "react-router-dom";

const Nav = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  return (
    <nav className='bg-white fixed w-full top-0 h-28 shadow-md z-50 font-medium'>
      <div className='max-w-7xl mx-auto px-6 md:px-16 flex items-center justify-between h-full'>
        {/* Logo */}
        <Link to='/'>
          <img src={ovisLogo} width={150} alt='Ovis Logo' />
        </Link>

        {/* Desktop Menu */}
        <ul className='hidden md:flex items-center gap-8'>
          <li>
            <Link
              to='/'
              className="relative text-gray-800 hover:text-blue-500 transition-colors duration-300
               after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-0.5
               after:bg-blue-500 after:w-0 hover:after:w-full after:transition-all after:duration-300"
            >
              Home
            </Link>
          </li>

          {/* Services Dropdown */}
          <li className='relative'>
            <button
              onClick={() => setIsServicesOpen(!isServicesOpen)}
              className='hover:text-blue-500 hover:underline flex items-center gap-1 focus:outline-none transition duration-200'
            >
              Our Services
              <svg
                className={`w-4 h-4 mt-1 transition-transform ${
                  isServicesOpen ? "rotate-180" : ""
                }`}
                fill='currentColor'
                viewBox='0 0 20 20'
              >
                <path
                  fillRule='evenodd'
                  d='M5.23 7.21a.75.75 0 011.06.02L10 11.293l3.71-4.06a.75.75 0 111.08 1.04l-4.25 4.65a.75.75 0 01-1.08 0l-4.25-4.65a.75.75 0 01.02-1.06z'
                  clipRule='evenodd'
                />
              </svg>
            </button>

            {isServicesOpen && (
              <ul className='absolute left-0 top-full mt-2 w-60 rounded-md bg-white shadow-lg z-50 py-2'>
                <li className='px-4 py-2'>
                  <Link
                    to='/millwork'
                    className="relative text-gray-800 hover:text-blue-500 transition-colors duration-300
                   after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-0.5
                   after:bg-blue-500 after:w-0 hover:after:w-full after:transition-all after:duration-300"
                  >
                    Millwork Drawings Service
                  </Link>
                </li>
                <li className='px-4 py-2 mt-1'>
                  <Link
                    to='/cad'
                    className="relative text-gray-800 hover:text-blue-500 transition-colors duration-300
                   after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-0.5
                   after:bg-blue-500 after:w-0 hover:after:w-full after:transition-all after:duration-300"
                  >
                    CAD Conversion Service
                  </Link>
                </li>
              </ul>
            )}
          </li>

          <li>
            <Link
              to='/portfolio'
              className="relative text-gray-800 hover:text-blue-500 transition-colors duration-300
               after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-0.5
               after:bg-blue-500 after:w-0 hover:after:w-full after:transition-all after:duration-300"
            >
              Our Portfolio
            </Link>
          </li>
          <li>
            <Link
              to='/about'
              className="relative text-gray-800 hover:text-blue-500 transition-colors duration-300
               after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-0.5
               after:bg-blue-500 after:w-0 hover:after:w-full after:transition-all after:duration-300"
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              to='/contactUs'
              className="relative text-gray-800 hover:text-blue-500 transition-colors duration-300
               after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-0.5
               after:bg-blue-500 after:w-0 hover:after:w-full after:transition-all after:duration-300"
            >
              Contact Us
            </Link>
          </li>

          <li>
            <Button />
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <div className='md:hidden'>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className='text-gray-800 focus:outline-none'
          >
            <svg
              className='w-8 h-8'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M6 18L18 6M6 6l12 12'
                />
              ) : (
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M4 6h16M4 12h16M4 18h16'
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <ul className='md:hidden bg-white shadow-md w-full px-6 py-4 space-y-4 absolute top-28 left-0 z-40'>
          <li>
            <Link
              to='/'
              className="relative text-gray-800 hover:text-blue-500 transition-colors duration-300
               after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-0.5
               after:bg-blue-500 after:w-0 hover:after:w-full after:transition-all after:duration-300"
            >
              Home
            </Link>
          </li>
          <li>
            <button
              onClick={() => setIsServicesOpen(!isServicesOpen)}
              className='flex justify-between w-full hover:text-blue-500 hover:underline transition duration-200 focus:outline-none'
            >
              Our Services
              <svg
                className={`w-4 h-4 mt-1 transition-transform ${
                  isServicesOpen ? "rotate-180" : ""
                }`}
                fill='currentColor'
                viewBox='0 0 20 20'
              >
                <path
                  fillRule='evenodd'
                  d='M5.23 7.21a.75.75 0 011.06.02L10 11.293l3.71-4.06a.75.75 0 111.08 1.04l-4.25 4.65a.75.75 0 01-1.08 0l-4.25-4.65a.75.75 0 01.02-1.06z'
                  clipRule='evenodd'
                />
              </svg>
            </button>

            {isServicesOpen && (
              <ul className='mt-2 pl-4 space-y-2'>
                <li>
                  <Link
                    to='/millwork'
                    className="relative text-gray-800 hover:text-blue-500 transition-colors duration-300
               after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-0.5
               after:bg-blue-500 after:w-0 hover:after:w-full after:transition-all after:duration-300"
                  >
                    Millwork Drawings Service
                  </Link>
                </li>
                <li>
                  <Link
                    to='/cad'
                    className="relative text-gray-800 hover:text-blue-500 transition-colors duration-300
               after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-0.5
               after:bg-blue-500 after:w-0 hover:after:w-full after:transition-all after:duration-300"
                  >
                    CAD Conversion Service
                  </Link>
                </li>
              </ul>
            )}
          </li>

          <li>
            <Link
              to='/portfolio'
              className="relative text-gray-800 hover:text-blue-500 transition-colors duration-300
               after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-0.5
               after:bg-blue-500 after:w-0 hover:after:w-full after:transition-all after:duration-300"
            >
              Our Portfolio
            </Link>
          </li>
          <li>
            <Link
              to='/about'
              className="relative text-gray-800 hover:text-blue-500 transition-colors duration-300
               after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-0.5
               after:bg-blue-500 after:w-0 hover:after:w-full after:transition-all after:duration-300"
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              to='/contactUs'
              className="relative text-gray-800 hover:text-blue-500 transition-colors duration-300
               after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-0.5
               after:bg-blue-500 after:w-0 hover:after:w-full after:transition-all after:duration-300"
            >
              Contact Us
            </Link>
          </li>
          <li>
            <Button />
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Nav;
