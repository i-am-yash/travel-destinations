import React from 'react';

const SelectsCard = (props) => {
  return (
    <div className='relative '>
     <img src={props.image} alt={props.text}  className='obeject-cover h-full w-full '/>
     {/* overlay */}
     <div className='absolute left-0 top-0 h-full w-full bg-gray-900/30'>
     </div>
     <p className='absolute left-4 bottom-3 text-white font-bold text-2xl'>{props.text}</p>
    </div> 
  )
};

export default SelectsCard;