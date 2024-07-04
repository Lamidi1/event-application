import React from 'react'
import axios from 'axios'
import { useState } from 'react'

const User = () => {
    const [formData, setFormData] = useState({
        name:"",
        dateofBirth:"",
        gender:"",
        email:"",
        nationality:"",
        username:"",
    
      })
      const handleChange = (e) =>{
        const {name,value} = e.target
        setFormData({...formData,[name]: value})   
        }
     
        const handleSubmit = async (e) =>{
            e.preventDefault();
            // console.log(formData)
        axios
        .post("http://localhost:5000/user",formData)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
            setFormData({
              name:"",
              username:"",
              gender:"",
              email:"",
              nationality:"",
              dateofBirth:"",
              password:"",
            });
        };

  return (
    <div className='p-5'>User
       <form className='flex flex-col gap-5' onSubmit={handleSubmit}>
       <input type='text'
            placeholder='name'
            name='name' 
            className='p-2 w-full pl-10 border-2 border-slate-400 rounded-md"'
            value={formData.name}
            onChange={handleChange}
            />

     <input type='text'
            placeholder='username'
            name='username' 
            className='p-2 w-full pl-10 border-2 border-slate-400 rounded-md"'
            value={formData.username}
            onChange={handleChange}
            />

    <input type='text'
            placeholder='gender'
            name='gender' 
            className='p-2 w-full pl-10 border-2 border-slate-400 rounded-md"'
            value={formData.gender}
            onChange={handleChange}
            />

      <input type='text'
            placeholder='email'
            name='email' 
            className='p-2 w-full pl-10 border-2 border-slate-400 rounded-md"'
            value={formData.email}
            onChange={handleChange}
            />

      <input type='text'
            placeholder='nationality'
            name='nationality' 
            className='p-2 w-full pl-10 border-2 border-slate-400 rounded-md"'
            value={formData.nationality}
            onChange={handleChange}
            />

   <input type='text'
            placeholder='dateofBirth'
            name='dateofBirth' 
            className='p-2 w-full pl-10 border-2 border-slate-400 rounded-md"'
            value={formData.dateofBirth}
            onChange={handleChange}
            />

    <input type='text'
            placeholder='password'
            name='password' 
            className='p-2 w-full pl-10 border-2 border-slate-400 rounded-md"'
            value={formData.password}
            onChange={handleChange}
            />

        <button
          type="submit"
          className="p-2 w-full pl-10 border-2 border-slate-400 bg-blue-600  text-white rounded-md"
        >
          Create Account
        </button>

        

       </form>
    </div>
  )
}

export default User