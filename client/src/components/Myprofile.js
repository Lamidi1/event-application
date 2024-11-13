import React from 'react'
import { FaArrowLeft } from "react-icons/fa6";
import {  FaRegCircleUser } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const Myprofile = () => {
  const handleSubmit = async (e) =>{
    e.preventDefault();
  }
  return (
    <div className='p-6'>
     <h1 className=' font-semibold pl-7 '>
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


     <div className='mt-5'>
        Date of birth
        <h2 className=' border-b-2 font-semibold'>15/03/2001</h2>
     </div>

     <div className='mt-5'>
        Gender
        <h2 className=' border-b-2 font-semibold'>male</h2>
     </div>


     <div className='mt-5'>
        Email
        <h2 className=' border-b-2 font-semibold'>jayden@gmail.com</h2>
     </div>


     <div className='mt-5'>
        Nationality
        <h2 className=' border-b-2 font-semibold'>Nigeria</h2>
     </div>


     <div className='mt-5'>
        Phone nuumber
        <h2 className=' border-b-2 font-semibold'>07053456783</h2>
     </div>

    <form className='mt-4' onSubmit={handleSubmit}>
    <button
          type="submit"
          className="p-2 w-full pl-10 border-2 border-slate-400 bg-blue-600  text-white rounded-md"
        >
          Edit profile
        </button>

    </form>




    </div>
  )
}

export default Myprofile