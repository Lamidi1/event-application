import React from 'react'
import { useState, } from 'react';
import { useEffect } from 'react';
import axios from 'axios';


const Music2 = () => {
    const [music, setMusic] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    
    useEffect(() => {
        const musicAll = async ()=>{
          try {
          const res = await axios.get("http://localhost:5000/musics")
          setMusic(res.data)  
          } catch (error) {
            setError(error)
            setLoading(false) 
          }
      };
      musicAll();
      
      }, [])


  return (
    <div >Music2

 <div>
  {
    music.map((music)=>(
<div key={music._id}>
  <img className='w-full h-28 mt-5' src={music.picture}/>  
</div>
    ))
  }
</div>
 



    </div>
  )
}

export default Music2