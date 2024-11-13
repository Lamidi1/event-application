import React from 'react'
import {  FaRegCircleUser } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import {Link} from "react-router-dom"

const Profile = () => {

  return (
  
    <div className='p-5 h-screen '>
       <h1 className='font-semibold ml-5'>profile</h1>
       <FaRegCircleUser className='size-24 mx-auto mt-5'/>
       <h2 className='text-center mt-2'>Ayantola David</h2>


       <div className='bg-slate-200 border border-gray-300 shadow-lg h-full p-4 rounded-md'>
            <h1 className='font-semibold'>Account Overview</h1>
 
          <div className='flex flex-col mt-14'>
            <h1 className='flex ml-7 mt-2'>My Profile
            <FaUser className='absolute left-4 mt-1 w-5 h-5 ml-5 bg-slate-300 rounded-md text-blue-500'/>
            <Link to='/myprofile'> <FaAngleRight className='absolute right-4 mt-2 h-7 w-7' /></Link>
            </h1>
          </div> 
 
          <div className='flex flex-col mt-7'>
           <h1 className='flex ml-7'> Location
           <FaMapMarkerAlt className='text-red-500 absolute left-4 mt-1 w-5 h-5 ml-5 bg-slate-300 rounded-md'/>
           <FaAngleRight className='absolute right-4 mt-2 h-7 w-7' />
           </h1>
          </div> 


           <div className='flex flex-col mt-7'>
            <h1 className='flex ml-7 '>Change password
            <FaLock  className='text-red-500 absolute left-4 mt-1 w-5 h-5 ml-5 bg-slate-300 rounded-md'/>
            <FaAngleRight className='absolute right-4 mt-2 h-7 w-7' />
            </h1>

            <footer className='bg-black w-full bottom-0'>
             <div className='text-1xl text-white flex flex-row justify-around cursor-pointer'>

             </div>
            </footer>
           </div>

        
       </div>

    </div>

    
  )
}

export default Profile