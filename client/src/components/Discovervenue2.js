import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';

const Discovervenue2 = () => {
    const [discovervenue,setDiscovervenue] = useState([]);
    const [loading, setLoading] = useState(false);
   const  [error, setError]  = useState(null);
   
   useEffect(() => {
    const discovervenueAll = async ()=>{
          try {
          const res = await axios.get("http://localhost:5000/discovervenues")
          setDiscovervenue(res.data)  
          } catch (error) {
            setError(error)
            setLoading(false) 
          }
    };
    discovervenueAll();
    
    }, [])


  return (
    <div>


<div className='flex flex-row gap-3'>
  {
    discovervenue.map((discovervenue)=>(
<div key={discovervenue._id}>
  <img className='h-28 rounded-md mt-5 ml-5' src={discovervenue.picture}/>

</div>
    ))
  }
</div>





    </div>
  )
}

export default Discovervenue2