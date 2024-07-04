import React from 'react'
import { useState, } from 'react';
import { useEffect } from 'react';
import axios from 'axios';


const All2 = () => {
    const [all, setAll] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    
    
    useEffect(() => {
       setTimeout(() =>{
        const allAll = async ()=>{
          try {
          const res = await axios.get("http://localhost:5000/alls")
          setAll(res.data)  
          } catch (error) {
            setError(error)
            setLoading(false) 
          }
      };
      allAll();
     }, 1000);
     
      }, [])
  return (
    <div>All2
        
 <div className='grid grid-cols-2 '>
  {
    all.map((all)=>(
<div key={all._id}>
  <img className='mt-5 w-60 h-60 ' src={all.picture}/>
      
</div>
    ))
  }
</div>




    </div>
  )
}

export default All2