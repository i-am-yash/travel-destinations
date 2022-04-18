import React ,{useState}from 'react'
import { BsArrowLeftSquareFill, BsArrowRightSquareFill } from 'react-icons/bs';

const sliderData = [
  {
    url: 'https://images.unsplash.com/photo-1515238152791-8216bfdf89a7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2072&q=80',
  },
  {
    url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2073&q=80',
  },
  {
    url: 'https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
  },
];



const Carousel = () => {
    const [slider, setslider] = useState(0)
    const handleClickLeft=()=>{
        setslider(slider===0?sliderData.length-1:slider-1)
        }
        const handleClickRight=({index})=>{
            setslider(slider===sliderData.length-1?0:slider+1)
            }
  return (
    <div className='flex py-16 px-4 mx-auto relative max-w-[1240px] items-centerjustify-center '>
      
      { sliderData.map((item,index)=>(
          <div className={slider===index?'opacity-100':'opacity-0'}>
          {slider===index && <img  src={item.url} alt='/'  className='w-full h-full object-cover rounded-md'/>}
          <div className='absolute top-1/2 left-4'>
            <BsArrowLeftSquareFill className='text-white  cursor-pointer' size={20} onClick={handleClickLeft}/>
          </div>
          <div className='absolute top-1/2 right-4'>
            <BsArrowRightSquareFill className='text-white cursor-pointer' size={20} onClick={handleClickRight}/>
          </div>
            </div>
            
        ))}
      
    </div>
  )
}

export default Carousel