import React from 'react'
import { useState, } from 'react';
import { useEffect } from 'react';
import axios from 'axios';


const Comedian2 = () => {
    const [comedian, setComedian] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    
    useEffect(() => {
        const comedianAll = async ()=>{
          try {
          const res = await axios.get("http://localhost:5000/comedians")
          setComedian(res.data)  
          } catch (error) {
            setError(error)
            setLoading(false) 
          }
      };
      comedianAll();
      
      }, [])
      
  return (
    <div>Comedian2
   
 <div>
  {
    comedian.map((comedian)=>(
<div key={comedian._id}>
  <img className=' mt-5 w-full h-28 '  src={comedian.picture}/>  
</div>
    ))
  }
</div>


    </div>
  )
}

export default Comedian2
