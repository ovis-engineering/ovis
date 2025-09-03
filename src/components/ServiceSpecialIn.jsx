import SpecialInCards from "./SpecialInCards";

const ServiceSpecialIn = () => {
  return (
    <div className='mx-auto  m-16 p-4 '>
      <h3 className='text-center text-4xl font-medium text-[#093080] leading-relaxed'>
        We Are Special In
      </h3>
      <div className='w-full flex mt-16  justify-around'>
        <SpecialInCards />
        <SpecialInCards />
        <SpecialInCards />
        <SpecialInCards />
      </div>
    </div>
  );
};

export default ServiceSpecialIn;
