import React from 'react'
import { GoHomeFill } from "react-icons/go";
import { BsCalendar2EventFill } from "react-icons/bs";
import { LuNetwork } from "react-icons/lu";
import { FaUserAlt } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Navbar = () => {
// bottom 0 fixed
  return (
     <>
    <div className='bg-black w-full tablet:block laptop:block absolute h-11 tablet:relative  laptop:relative bottom-0 tablet:top-0 laptop:top-0  '>
       <div className='text-1xl text-white flex justify-around cursor-pointer '>
        
        <div className='items-center'>
        <GoHomeFill className='absolute ml-5 text-yellow-500 '/>
         <Link to='/home'><h6 className='relative mt-3 ml-3 text-yellow-500' >Home</h6></Link>
          </div>
       
         <div className='items-center'>
         <BsCalendar2EventFill className='absolute ml-5' />
        <Link to="/evt2"><h6 className='relative mt-3 ml-3'> Event</h6></Link>
         </div>

         <div className='items-center'>
         <LuNetwork className='absolute ml-5'/>
       <Link to='/services'><h6 className='relative mt-3 ml-3'> Services</h6></Link>
         </div>

         <div className='items-center'>
         <FaUserAlt className='absolute ml-5'/>
       <Link to='/profile'><h6 className='relative mt-3 ml-3'> Profile</h6></Link>
         </div>
          
          <button className='rounded-full border-4 border-indigo-500/100'>
            Signout
          </button>

       </div>

    </div>
    </>
  )
}

export default Navbar