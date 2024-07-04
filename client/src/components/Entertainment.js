import React from 'react'
import { FaArrowLeft } from "react-icons/fa6";
import { IoSearchOutline } from "react-icons/io5";
import axios from 'axios';
import {Link } from "react-router-dom";
 
 
const Entertainment = () => {

  return (
    <div className='p-6'>
       <h1 className=' font-semibold pl-20'>
        <Link to='/services'>
        <FaArrowLeft  className='absolute left-4 mt-1'/>
        </Link>
        
           Entertainment</h1>
           
           <div className='relative flex items-center mt-2 w-full '>
        <IoSearchOutline className='absolute left-4 text-slate-500'/>
        <input type='text' placeholder='Search ' name='Search' className='outline-none pl-10 w-full h-12 
        border-2 rounded-2xl border-slate-400 '/>
        </div> 

        <ul className='flex flex-row mt-5 space-x-5 cursor-pointer'>
         <li><Link to='/all2'>All</Link></li>
         <li><Link to='/dj2'>Djs</Link></li>
         <li><Link to='/mc2'>MCs</Link></li>
         <li><Link to='/comedian2'>Comedian</Link></li>
         <li><Link to='/dancer2'>Dancers</Link></li>
         <li><Link to='/music2'>Music Band</Link></li>
         <li><Link to='/sound2'>Sound Engineer</Link></li>
        </ul>

    </div>
  )
}

export default Entertainment