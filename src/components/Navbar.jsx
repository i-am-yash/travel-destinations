import React ,{useState} from 'react'
import {BsPerson} from 'react-icons/bs'
import {BiSearch} from 'react-icons/bi';
import {AiOutlineClose} from 'react-icons/ai';
import {HiOutlineMenuAlt4} from 'react-icons/hi';
import {FaFacebook,FaTwitter,FaYoutube,FaInstagram,FaPinterest} from  'react-icons/fa';

const Navbar = () => {
  const [closeHamburgerIcon, setcloseHamburgerIcon] = useState(false)
  const [logo, setlogo] = useState(false)
  const handleNavClick=()=>{
    setcloseHamburgerIcon(!closeHamburgerIcon);
    setlogo(!logo)
  }
 
  return (
     
    <div className='flex absolute text-white z-10 w-full justify-between items-center h-20 px-4 '>
        <div>
             <h1 className={logo? 'hidden' : 'block'}>Beaches </h1> 
        </div>
        <ul className='hidden md:flex '>
           <li>  Home  </li>
           <li>   Destinations  </li>
           <li>    Travel </li>
           <li>   View  </li>
           <li> Book   </li>
       </ul>
       <div  className='hidden  md:flex border  '>
        <BiSearch size={20} className='m-2' />
        <BsPerson size={20}className='m-2'/>
       </div>
       <div className='md:hidden cursor-pointer z-10' onClick={handleNavClick}>
         {closeHamburgerIcon ? <AiOutlineClose onClick={handleNavClick} className='text-black' size={20}/> :<HiOutlineMenuAlt4 onClick={handleNavClick} size={20}/>} 
       </div>
       {/* Mobile Drop Menu */}
       <div  className={closeHamburgerIcon ? 'md:hidden absolute top-0 bg-gray-100 w-full left-0 text-black' : 'absolute left-[-100%]'}>
         <ul className=''>
         <h1 style={{textShadow:"0px -4.5px #cccccc"}}>Beaches.</h1>
         <li  className='text-xl border-b'>  Home  </li>
         <li  className='text-xl border-b'>    Destinations  </li>
         <li  className='text-xl border-b'>     Travel </li>
         <li  className='text-xl border-b'>    View  </li>
         <li  className='text-xl border-b'>  Book   </li>
           <div  className='flex flex-col'>
             <button type='button' className='p-3   my-5 rounded-lg border text-white bg-gray-600'>Search</button>
             <button type='button' className='p-3 rounded-lg  border text-white bg-gray-600'>Account</button>
          
           </div>
           <div  className='cursor-pointer text-2xl my-4 flex justify-between '>
             <FaFacebook/>
             <FaTwitter/>
             <FaYoutube/>
             <FaPinterest/>
             <FaInstagram/>  
                     
            </div>
         </ul>
    </div>
    </div>
   
   
    
  )
}

export default Navbar;