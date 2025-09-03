import React from "react";
import ServiceCard from "./ServiceTextCard";
import ServiceTextCard from "./ServiceTextCard";
import ImageOverlay from "./ImageOverlay";
import FLowCard from "./FLowCard";

const ServiceSpecialPhoto = ({ header }) => {
  return (
    <div className='max-w-7xl   mx-auto '>
      <h3 className='text-center text-4xl p-4 mb-8 font-medium text-[#093080] leading-relaxed'>
        {header}
      </h3>

      <div className='flex p-4 justify-around '>
        <div className='flex w-[45%]   flex-col gap-8 '>
          <ServiceTextCard
            count={"1"}
            header={"Project Kickoff & Review"}
            text={
              "We receive the project files and begin our internal review process."
            }
          />
          <ServiceTextCard
            count={2}
            header={"Review Meeting"}
            text={
              "After the initial review, a meeting is conducted with the assigned resources to discuss the scope and requirements."
            }
          />
          <ServiceTextCard
            count={3}
            header={"Query clarification"}
            text={
              "We receive the project files and begin our internal review process."
            }
          />
          <ServiceTextCard
            count={4}
            header={"Quality Check - Stage 1 & 2"}
            text={
              "Simultaneously, we begin a two-level quality check for the completed millwork drawings."
            }
          />
          <ServiceTextCard
            count={5}
            header={"Client Submission"}
            text={
              "Once the quality checks are complete, we share the DWG and PDF files with the client for review."
            }
          />
          <ServiceTextCard
            count={5}
            header={"Revision & Updates"}
            text={
              "If the client requests any changes—such as white-line markups—we incorporate them and share the updated files promptly."
            }
          />
          <ServiceTextCard
            count={6}
            header={"Project Kickoff & Review"}
            text={
              "We receive the project files and begin our internal review process."
            }
          />
        </div>
        <div className=' w-[40%] h-screen relative'>
          <ImageOverlay />
        </div>
      </div>
      <div className='w-full  m-32 mx-auto'>
        <p className='font-semibold  text-center leading-loose text-lg'>
          Note on Hourly-Based Projects
        </p>
        <p className='text-lg text-center leading-loose'>
          For hourly-based projects, we provide estimated hours after the
          initial review and begin work once approved by the client. At each
          stage—such as redline revisions, cutsheet updates, and field
          adjustments—we share progress and seek approval before continuing.
        </p>
        <p className='text-md leading-loose font-medium text-center'>
          We ensure complete and streamlined coordination from our end
          throughout the project lifecycle.
        </p>
      </div>
    </div>
  );
};

export default ServiceSpecialPhoto;
