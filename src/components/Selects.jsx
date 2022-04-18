import React from 'react'
import BoraBora from '../assets/borabora.jpg';
import BoraBora2 from '../assets/borabora2.jpg'
import Keywest from '../assets/keywest.jpg'
import Maldives from '../assets/maldives.jpg';
import Maldives2 from '../assets/maldives2.jpg';
import Maldives3 from '../assets/maldives3.jpg';
import SelectsCard from './SelectsCard';
const Selects = () => {
  return (
   <div className='max-w-[1240px] mx-auto px-4 py-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-4'>
    <SelectsCard image={Maldives} text='Maldives'/>
    <SelectsCard image={Maldives2} text='Maldives'/>
    <SelectsCard image={Maldives3} text='Maldives'/>
    <SelectsCard image={BoraBora} text='BoraBora'/>
    <SelectsCard image={BoraBora2} text='BoraBora2'/>
    <SelectsCard image={Keywest} text='Keywest'/>
      
     </div>
   )
 }

 export default Selects






