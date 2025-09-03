import React from 'react'


const MilliworksCards = ({img,text}) => {
  return (
   <div className='flex items-center  '>
          <img src={img} width={70}  className=''   alt={text} />
          <p className='text-center h-12 w-sm bg-white text-lg text-wrap  rounded-r-sm   py-3  drop-shadow-lg drop-shadow-[rgb(9,48,128)]'>{text}</p> 
        </div>
  )
}

export default MilliworksCards