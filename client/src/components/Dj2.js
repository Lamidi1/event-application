import React from 'react'
import { useState, } from 'react';
import { useEffect } from 'react';
import axios from 'axios';

const Dj2 = () => {
    const [dj, setDj] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    
    useEffect(() => {
        const djAll = async ()=>{
          try {
          const res = await axios.get("http://localhost:5000/djs")
          setDj(res.data)  
          } catch (error) {
            setError(error)
            setLoading(false) 
          }
      };
      djAll();
      
      }, [])
      

  return (
    <div className='ml-5'>Dj2

<div className='grid grid-cols-2'>
  {
    dj.map((dj)=>(
<div key={dj._id}>
  <img className='mt-5 w-60 h-60 ' src={dj.picture}/>
      
</div>
    ))
  }
</div>



    </div>
  )
}

export default Dj2