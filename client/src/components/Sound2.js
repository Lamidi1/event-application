import React from 'react'
import { useState, } from 'react';
import { useEffect } from 'react';
import axios from 'axios';

const Sound2 = () => {
    const [sound, setSound] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    
    useEffect(() => {
        const soundAll = async ()=>{
          try {
          const res = await axios.get("http://localhost:5000/sounds")
          setSound(res.data)  
          } catch (error) {
            setError(error)
            setLoading(false) 
          }
      };
      soundAll();
      
      }, [])
  return (
    <div className=''>Sound2
    
<div className='flex flex-row  '>
  {
    sound.map((sound)=>(
<div key={sound._id}>
  <img className='ml-10 mt-5' src={sound.picture}/>  
</div>
    ))
  }
</div>
 


    </div>
  )
}

export default Sound2