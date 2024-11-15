import React from 'react'
import { useState } from 'react';
import axios from 'axios';

const Upcoming = () => {
   const [formData, setFormData] = useState({
    eventName:"",
    location:"",
    picture:"",
   });
   
   const handleChange = (e) =>{
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
   };

   const handleSubmit = async (e) =>{
     e.preventDefault();
    //  console.log(formData)
    axios
    .post("http://localhost:5000/upcoming",formData)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
          
     setFormData({
       eventName:"",
        location:"",
        picture:"",

     })
   }



  return (

    <div className='p-5'>
 <h1 className="text-2xl text-center text-blue-500">Upcoming event page</h1>

        <form className='flex flex-col gap-5' onSubmit={handleSubmit}>
        <input type='text'
            placeholder='eventName'
            name='eventName' 
            className='p-2 w-full pl-10 border-2 border-slate-400 rounded-md"'
            value={formData.eventName}
            onChange={handleChange}
            />

          <input type='text'
            placeholder='location'
            name='location' 
            className='p-2 w-full pl-10 border-2 border-slate-400 rounded-md"'
            value={formData.location}
            onChange={handleChange}
            />

        <input type='text'
            placeholder='picture'
            name='picture' 
            className='p-2 w-full pl-10 border-2 border-slate-400 rounded-md"'
            value={formData.picture}
            onChange={handleChange}
            />


        <button
          type="submit"
          className="p-2 w-full pl-10 border-2 border-slate-400 bg-blue-600  text-white rounded-md"
        >
          Submit
        </button>

        </form>

        
    </div>
  )
}

export default Upcoming