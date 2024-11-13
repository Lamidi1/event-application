import React from 'react'
import { IoLocationSharp } from "react-icons/io5";
import { IoSearchOutline } from "react-icons/io5";
import { useState, } from 'react';
import { useEffect } from 'react';
import axios from 'axios';

const Evt2 = () => {
  const [evt, setEvt] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  
  
  useEffect(() => {
    const evtAll = async ()=>{
      try {
      const res = await axios.get("http://localhost:5000/evts")
      setEvt(res.data)  
      } catch (error) {
        setError(error)
        setLoading(false) 
      }
  };
  evtAll();
  
  }, [])
  return (
    <div className='p-5'>
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



        <div>
  {
    evt.map((evt)=>(
<div key={evt._id}>
  <img className='w-full h-28 mt-5'  alt =''src={evt.image}/>  
</div>
    ))
  }
</div>


    </div>
  )
}

export default Evt2