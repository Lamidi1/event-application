import React from 'react'
import { IoLocationSharp } from "react-icons/io5";
import { IoSearchOutline } from "react-icons/io5";
import { useState, } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import Discovervenue2 from './Discovervenue2';
import Upcoming2 from './Upcoming2';


const Home = () => {

const [event, setEvent] = useState([]);
const [loading, setLoading] = useState(false);
const [error,setError] = useState(null);

useEffect(() => {
const eventAll = async ()=>{
      try {
      const res = await axios.get("http://localhost:5000/events")
      setEvent(res.data)  
      } catch (error) {
        setError(error)
        setLoading(false) 
      }
};
eventAll();

}, [])


  return (
    <div className='p-6'>
      
    <div className='flex flex-col'>
      < h1 className='font-semibold flex'> 
     <IoLocationSharp className='text-red-500 mt-1 w-5 h-5'/>
     N0 6, Trench Avenue,Pluto
     </h1>
     </div>
     
     <div className='relative flex items-center mt-2 w-full '>
        <IoSearchOutline className='absolute left-4 text-slate-500'/>
        <input type='text' placeholder='Search' name='Search' className='outline-none pl-10 w-full h-12 
        border-2 rounded-2xl border-slate-400 '/>
        </div> 

        <h1 className='font-bold mt-6'>Happennig Now!!!</h1>
<div>
  {
    event.map((event)=>(
<div key={event._id}>
  <img className=' w-full h-28 rounded-md mt-5' src={event.picture}/>
     
</div>
    ))
  }
</div>
     <h1 className='font-bold mt-3'>Upcoming Event</h1>

     <Upcoming2/>
     <h1 className='font-bold mt-2'>Discover Venues</h1>
     <Discovervenue2/>
     
    </div>
   

  )
}

export default Home