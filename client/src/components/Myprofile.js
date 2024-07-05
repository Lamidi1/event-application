import React from 'react'
import { FaArrowLeft } from "react-icons/fa6";
import {  FaRegCircleUser } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const Myprofile = () => {
  return (
    <div className='p-6'>
     <h1 className=' font-semibold pl-7'>
       <Link to='/profile'> <FaArrowLeft  className='absolute left-4 mt-1'/></Link>
           My profile</h1>
     
     <div className=''>
     <FaRegCircleUser className='size-24 mx-auto mt-5'/>
       <h2 className='text-center mt-2 text-blue-400'>Change Picture</h2>
     </div>

     <div className='mt-5'>
        Name
        <h2 className=' border-b-2 font-semibold'>Ayantola David</h2>
     </div>



    </div>
  )
}

export default Myprofile