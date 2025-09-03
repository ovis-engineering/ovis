import React from "react";

const Featured = () => {
  return (
    <div className='max-w-7xl mx-auto'>
      <p className='text-4xl  font-medium  text-[#093080] text-center'>
        Excellence in Every Detail -{" "}
        <span className='text-amber-500'>Featured Millworks</span>
      </p>
      <div className='flex justify-evenly max-w-6xl p-4 my-8  font-medium mx-auto'>
        <ul className='list-disc pl-5 space-y-2'>
          <li>Reception desks</li>
          <li>Bar &amp; Bistro Bars</li>
          <li>Bar Hanging Display Unit</li>
          <li>Media Feature walls</li>
          <li>Media Pods</li>
          <li>Banquet Seating</li>
          <li>Hearth wall</li>
          <li>Lounge Screen</li>
          <li>Restroom Vanity</li>
        </ul>
        <ul className='list-disc pl-5 space-y-2'>
          <li>Wine racks Display</li>
          <li>Chef’s Window</li>
          <li>Breakfast & Dining</li>
          <li>Dish Recovery Unit</li>
          <li>Buffet & Islands</li>
          <li>Hydration Station</li>
          <li>Communal Table</li>
          <li>Workstation & Office Table</li>
          <li>Sliding & Barn Doors</li>
        </ul>
        <ul className='list-disc pl-5 space-y-2'>
          <li>Wood Ceilings</li>
          <li>Suspended Ceiling</li>
          <li>Wall &amp; Ceiling Paneling</li>
          <li>Decorative columns</li>
          <li>Slat Wall &amp; Louver Wall</li>
          <li>Closets</li>
          <li>Suite Room Cabinets</li>
          <li>Valances</li>
          <li>Guestroom Vanity</li>
        </ul>
      </div>
    </div>
  );
};

export default Featured;
