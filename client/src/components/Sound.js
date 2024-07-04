import React from 'react'
import { useState } from 'react';
import axios from 'axios';

const Sound = () => {
    const [formData, setFormData] = useState({
        soundName:"",
        picture:"",
    });


    const handleChange = (e) =>{
        const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    };
    const handleSubmit = async (e) =>{
        e.preventDefault();
        // console.log(formData)
    axios
    .post("http://localhost:5000/sound",formData)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
        setFormData({
          soundName:"",
          picture:"",
        });
    };

  return (
    <div className='p-5'>Sound
   <form className='flex flex-col gap-5' onSubmit={handleSubmit}>
    <input type='text'
            placeholder='soundName'
            name='soundName' 
            className='p-2 w-full pl-10 border-2 border-slate-400 rounded-md"'
            value={formData.soundName}
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

export default Sound