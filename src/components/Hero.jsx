import React from 'react'
import beachVid from '../assets/beachVid.mp4';
import {BiSearch} from 'react-icons/bi';
const Hero = () => {
  return (
    <div className='w-full relative h-screen'>
        <video src={beachVid} autoPlay loop muted className='h-full w-full object-cover'/>
        {/* below div is for overlay .. black shade on video */}
        <div className='absolute h-full w-full bg-gray-900/30 top-0 left-0'></div>
        <div className='absolute  w-full h-full  p-4 justify-center items-center text-center text-white flex top-0  flex-col'>
            <h1 className=''>First Class Travel</h1>
            <h2 className='py-2'>Top 1% Locations Worldwide</h2>
            <form className='flex rounded-lg mt-3 w-full max-w-[700px] p-1 justify-between border mx-auto items-center bg-gray-100/70'>
                <input type='text' className='  text-black bg-transparent focus:outline-none w-[300px] sm:w-[400px] font-[Poppins] mx-4 text-xl' placeholder='Search Destinations'/>
                <div className='text-xl cursor-pointer '>
                <BiSearch size={20} className='text-black'/>
                </div>
               
            </form>
        </div>
    </div>
  )
}

export default Hero