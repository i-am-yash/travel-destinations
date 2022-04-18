import React from 'react'
import BoraBora from '../assets/borabora.jpg';
import BoraBora2 from '../assets/borabora2.jpg'
import Keywest from '../assets/keywest.jpg'
import Maldives from '../assets/maldives.jpg';
import Maldives2 from '../assets/maldives2.jpg';
import Maldives3 from '../assets/maldives3.jpg';

const Destinations  = () => {
  return (
    <div className='text-center px-4 py-16 mx-auto  max-w-[1240px] '>
        <h1>All-Inclusive Resorts</h1>
        <p>On the Caribbean's Best Beaches</p>
        <div className='grid   grid-rows-none  md:grid-cols-5 gap-4 py-4 md:gap-1'>
        <img className='h-full w-full object-cover col-span-2 md:col-span-3 row-span-2' src={BoraBora} alt='borabora'/>
        <img className='h-full w-full object-cover ' src={BoraBora2} alt='borabora2'/>
        <img className='h-full w-full  object-cover' src={Maldives} alt='Maldives'/>
        <img className='h-full w-full object-cover  ' src={Maldives2} alt='Maldives2'/>
        <img className='h-full w-full object-cover' src={Keywest} alt='Keywest'/>
        </div>
     </div>
  )
}

export default Destinations 