import React from 'react'
import axios from 'axios'
import { useState } from 'react';

const All = () => {
  const [formData, setFormData] = useState({
    allName:"",
    picture:"",
});
const handleChange = (e) =>{
  const { name, value } = e.target;
setFormData({ ...formData, [name]: value });
};
 const handleSubmit = async(e) =>{
  e.preventDefault();
  // console.log(formData)
axios
.post("http://localhost:5000/all",formData)
.then((res) => {
console.log(res);
})
.catch((err) => {
console.log(err);
});
  setFormData({
    allName:"",
    picture:"",
  });

};
 

  return (

    <div className='p-5'>All
      <form className='flex flex-col gap-5'onSubmit={handleSubmit}>
      <input type='text'
            placeholder='allName'
            name='allName' 
            className='p-2 w-full pl-10 border-2 border-slate-400 rounded-md"'
            value={formData.allName}
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

export default All