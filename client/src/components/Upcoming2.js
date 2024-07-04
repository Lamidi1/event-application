import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';

const Upcoming2 = () => {

 const [upcoming,setUpcoming] = useState([]);
 const [loading, setLoading] = useState(false);
const  [error, setError]  = useState(null);

useEffect(() => {
  const upcomingAll = async ()=>{
        try {
        const res = await axios.get("http://localhost:5000/upcomings")
        setUpcoming(res.data)  
        } catch (error) {
          setError(error)
          setLoading(false) 
        }
  };
  upcomingAll();
  
  }, [])

  return (

    <div>

<div className='flex flex-row gap-3'>
  {
    upcoming.map((upcoming)=>(
<div key={upcoming._id}>
  <img className='h-28 rounded-md mt-5 ml-5' src={upcoming.picture}/>

</div>
    ))
  }
</div>
     

    </div>

  )
}

export default Upcoming2