import React from 'react'
import { RiCustomerServiceFill, RiCustomerService2Fill } from 'react-icons/ri';
import { MdOutlineTravelExplore } from 'react-icons/md';

const Search = () => {
  return (
    <div className='py-16 px-4 max-w-[1240[px] grid lg:grid-cols-3 mx-auto'>
        <div className='lg:col-span-2 flex flex-col justify-evenly ' >
        <div>
          <h2>LUXURY INCLUDED VACATIONS FOR TWO PEOPLE</h2>
          <p className='py-4'>
            Come experience the very pinnacle of luxury Caribbean all-inclusive
            vacations for couples at BEACHES Resorts. Our luxury beach resorts,
            set along the most gorgeous tropical settings and exquisite beaches
            in Saint Lucia, Jamaica, Antigua, The Bahamas, Grenada, Barbados and
            Curaçao, feature unlimited gourmet dining, unique bars serving
            premium liquors and wines, and every land and water sport, including
            complimentary green fees at our golf resorts and certified scuba
            diving at most resorts. If you are planning a wedding, BEACHES is
            the leader in Caribbean destination weddings and honeymoon packages.
          </p>
        </div>
        <div className='grid sm:grid-cols-2 gap-8 py-2'>
           <div className='flex flex-col items-center text-center lg:flex-row'>
               <button className='text-black-600'><RiCustomerService2Fill className=' bg-black text-white' size={50}/></button>
           <div>
           <h3 className='py-2'>LEADING SERVICE</h3>
            <p className='py-1 ml-2'>ALL-INCLUSIVE COMPANY FOR 20 YEARS IN-A-ROW</p>
           </div>
           </div>
           
           
           <div className='flex flex-col items-center text-center lg:flex-row'>
               <button className='text-black-600'><RiCustomerService2Fill className=' bg-black text-white' size={50}/></button>
           <div>
           <h3 className='py-2'>LEADING SERVICE</h3>
            <p className='py-1 ml-2'>ALL-INCLUSIVE COMPANY FOR 20 YEARS IN-A-ROW</p>
           </div>
           </div>
        </div> 
        
        </div>
        {/* right part */}
        <div className=''>
         <div className='text-center pt-2 border items-center'>
             <p>GET AN ADDITIONAL 10% OFF</p>
             <p className='py-4'>12 HOURS LEFT</p>
             <p  className='bg-black text-white py-2' >BOOK NOW AND SAFE</p>
         </div> 
         {/* form part of right side */}
        <form className='w-full'>
        <div className='my-2 flex flex-col'>
            <label>Destination</label>
            <select className='border py-2 bg-gray-300 '>
                <option>Grande Antiqua</option>
                <option>Key West</option>
                <option> Maldives</option>
                <option> Cozumel</option>
            </select>
         </div>
         <div className='my-2 flex flex-col'>
             <label>Check-In</label>
             <input className='border py-2 bg-gray-300' type='date'/>
         </div>
         <div className='my-2 flex flex-col'>
             <label>Check-Out</label>
             <input className='border  py-2 bg-gray-300' type='date'/>
         </div>
         <div>
         <button type='button' className='p-3   my-2 rounded-lg border w-full text-white bg-gray-600'>Rates & Availabilities</button>
         </div>
        </form>


        </div>
    </div>




  )
}

export default Search