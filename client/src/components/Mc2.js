import React from 'react'
import { useState, } from 'react';
import { useEffect } from 'react';
import axios from 'axios';

const Mc2 = () => {
    const [mc, setMc] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    
    useEffect(() => {
        const mcAll = async ()=>{
          try {
          const res = await axios.get("http://localhost:5000/mcs")
          setMc(res.data)  
          } catch (error) {
            setError(error)
            setLoading(false) 
          }
      };
      mcAll();
      
      }, [])
      

  return (
    <div>Mc2

<div className='grid grid-cols-2 ml-3'>
  {
    mc.map((mc)=>(
<div key={mc._id}>
  <img className='mt-5' src={mc.picture}/>
    
</div>
    ))
  }
</div>




    </div>
  )
}

export default Mc2