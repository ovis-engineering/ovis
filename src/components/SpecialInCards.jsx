import React from "react";

const SpecialInCards = () => {
  return (
    <div className=' shadow-md w-[20%] hover:bg-[#114C77] group  hover:scale-110   p-8 h-[60%]  flex flex-col justify-center  items-center'>
      <h1 className='text-[#114C77] p-2 text-md font-medium group-hover:text-white'>
        Submittal Shop Drawings
      </h1>
      <p className='leading-relaxed py-2 px-1 text-sm group-hover:text-white'>
        Submittal drawings are comprehensive packages used during the approval
        process. They include shop drawings, diagrams, schedules, material
        samples, and manufacturer data. These documents are prepared for client,
        architect, or contractor review before fabrication begins, ensuring
        alignment across all stakeholders.
      </p>
    </div>
  );
};

export default SpecialInCards;
