import React from "react";

const OurServices = () => {
  return (
    <div className='max-w-6xl my-16 mx-auto'>
      <p className='text-4xl font-medium text-center text-[#093080]  py-16'>
        Our Services
      </p>
      <div className='grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8'>
        <div className='h-36 shadow-md rounded text-white text-center bg-[#093080]  p-4'>
          <p className='text-lg  font-bold'>PDF to CAD Conversion</p>

          <p className='text-sm font-medium leading-normal'>
            Transform static PDF files into accurate, editable CAD drawings.
            While PDFs are commonly used for sharing design documentation,
            converting them to CAD format allows for detailed modifications and
            integration into your design process.
          </p>
        </div>
        <div className='h-36 shadow-md text-center p-4 text-white rounded bg-amber-500'>
          <p className='text-lg  font-bold'>Paper to CAD Conversion</p>

          <p className='text-sm font-medium leading-normal'>
            Digitize your hand-drawn sketches, legacy blueprints, or printed
            plans into professional CAD files. Our team carefully recreates your
            designs in digital form, ensuring precision and consistency for use
            in modern drafting environments.
          </p>
        </div>
        <div className='h-36 shadow-md rounded text-center p-4 bg-gray-200 lg:col-span-2 w-full lg:w-1/2 mx-auto'>
          <p className='text-lg  font-bold'>Raster to Vector CAD Conversion</p>

          <p className='text-sm font-medium leading-normal'>
            Convert raster image files—such as PNGs, JPEGs, or scanned
            drawings—into clean, vector-based CAD formats. Vector conversions
            enable precise scaling and editing, making them essential for
            design, fabrication, and construction applications.
          </p>
        </div>
      </div>

      <p className='text-4xl font-bold text-center text-[#093080]  py-16 mt-8'>
        We Are Specialized In
      </p>

      <p className='text-lg text-center'>
        We specialize in high-precision CAD conversion services, turning PDFs,
        paper drawings, and raster images into accurate, editable CAD files. Our
        expertise ensures every detail is digitally recreated to meet industry
        standards—making your designs ready for modification, collaboration, and
        production.
      </p>
    </div>
  );
};

export default OurServices;
