import ClientCard from "./ClientCard";

const Client = () => {
  return (
    <div className='max-w-6xl mx-auto m-16 p-4'>
      <h2 className='text-4xl text-center p-4 text-[#093080] leading-relaxed font-medium '>
        Why Client Choose Us
      </h2>
      <p className='text-md text-center leading-relaxed p-4  text-[#5D5D5D] '>
        We deliver reliable, customized CAD drafting solutions with professional
        support at every step.
      </p>
      <div className='flex justify-between'>
        <ClientCard />
        <ClientCard />
        <ClientCard />
      </div>
    </div>
  );
};

export default Client;
