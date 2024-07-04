import React from 'react'
import { GoHomeFill } from "react-icons/go";
import { BsCalendar2EventFill } from "react-icons/bs";
import { LuNetwork } from "react-icons/lu";
import { FaUserAlt } from "react-icons/fa";
import { Link } from 'react-router-dom';
const Navbar = () => {

  return (
     <>
    <div className='bg-black w-full bottom-0'>
       <div className='text-2xl text-white flex flex-row justify-around cursor-pointer'>
        
        <div className='items-center'>
        <GoHomeFill className='absolute ml-5'/>
         <Link to='/home'><h6 className='relative mt-3 text-red-500' >Home</h6></Link>
          </div>
       
         <div className='items-center'>
         <BsCalendar2EventFill className='absolute ml-5' />
        <Link to="/evt2"><h6 className='relative mt-3'> Event</h6></Link>
         </div>

         <div className='items-center'>
         <LuNetwork className='absolute ml-5'/>
       <Link to='/services'><h6 className='relative mt-3'> Services</h6></Link>
         </div>

         <div className='items-center'>
         <FaUserAlt className='absolute ml-5'/>
       <Link to='/profile'><h6 className='relative mt-3'> Profile</h6></Link>
         </div>

       </div>

    </div>
    </>
  )
}

export default Navbar