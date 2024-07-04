import React from 'react'
import { IoLocationSharp } from "react-icons/io5"
import image1 from '../image/Rectangle1.png'
import image2 from '../image/Rectangle4.png'
import image3 from '../image/Rectangle2.png'
import image4 from '../image/Rectangle3.png'
import image5 from '../image/Rectangle5.png'
import image6 from '../image/Rectangle6.png'
import image7 from '../image/Rectangle7.png'
import image8 from '../image/Rectangle8.png'
import { Link } from 'react-router-dom'

const Services = () => {

  return (
    <div className='p-6 justify-item'>

<div className='flex flex-col'>
      < h1 className='font-semibold flex'> 
     <IoLocationSharp className='text-red-500 mt-1 w-5 h-5'/>
     N0 6, Trench Avenue,Pluto
     </h1>
     </div>

 <div className='grid grid-cols-2'>
 <Link to='/Entertainment'> <img className='mt-5 ' alt='' src={image1}></img></Link>
 <Link to='/venue2'> <img className='mt-5' alt='' src={image2}></img></Link>

 <img className='mt-5' alt='' src={image3}></img>
 <img className='mt-5'  alt='' src={image4}></img>
 <img className='mt-5' alt='' src={image5}></img>
<img className='mt-5' alt='' src={image6}></img>
<img className='mt-5' alt='' src={image7}></img>
<img className='mt-5' alt='' src={image8}></img>
 </div>



    </div>
  )
}

export default Services