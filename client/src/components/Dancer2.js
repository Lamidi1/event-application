import React from 'react'
import { useState, } from 'react';
import { useEffect } from 'react';
import axios from 'axios';


const Dancer2 = () => {
    const [dancer, setDancer] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    
    useEffect(() => {
        const dancerAll = async ()=>{
          try {
          const res = await axios.get("http://localhost:5000/dancers")
          setDancer(res.data)  
          } catch (error) {
            setError(error)
            setLoading(false) 
          }
      };
      dancerAll();
      
      }, [])
      
  return (
    <div className=''>Dancer2
 
 <div>
  {
    dancer.map((dancer)=>(
<div key={dancer._id}>
  <img className='mt-5 w-full h-28' src={dancer.picture}/>  
</div>
    ))
  }
</div>



    </div>
  )
}

export default Dancer2