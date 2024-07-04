import React from 'react'
import { IoSearchOutline } from "react-icons/io5";
import { FaArrowLeft } from "react-icons/fa6";
import { useState, } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';



const Venue2 = () => {
const [venue, setVenue] = useState([]);
const [loading, setLoading] = useState(false);
const [error, setError] = useState(null);

useEffect(() => {
  const venueAll = async ()=>{
    try {
    const res = await axios.get("http://localhost:5000/venues")
    setVenue(res.data)  
    } catch (error) {
      setError(error)
      setLoading(false) 
    }
};
venueAll();

}, [])

  

  return (
    <div className='p-6'>
        <h1 className=' font-semibold pl-7'>
       <Link to='/services'> <FaArrowLeft  className='absolute left-4 mt-1'/></Link>
           Event Venues</h1>
         
           <div className='relative flex items-center mt-2 w-full '>
        <IoSearchOutline className='absolute left-4 text-slate-500'/>
        <input type='text' placeholder='Search Venue' name='Search' className='outline-none pl-10 w-full h-12 
        border-2 rounded-2xl border-slate-400 '/>
        </div> 
{/* ..... */}

<div>
  {
    venue.map((venue)=>(
<div key={venue._id}>
  <img alt='' className='mt-7 w-full h-28' src={venue.image}/>
  <h1 className=' '>{venue.location}</h1>
  <h1 className='absolute right-10 '>{venue.amount}</h1>
</div>
    ))
  }
</div>







    </div>
  )
}

export default Venue2