import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { FaUser } from "react-icons/fa";
import {  RiLockPasswordLine } from "react-icons/ri";
import { MdEmail } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { CiCalendarDate } from "react-icons/ci";
import { CiFlag1 } from "react-icons/ci";
import { GiNurseMale } from "react-icons/gi";
import {Link} from "react-router-dom"

const User = () => {
    const [formData, setFormData] = useState({
        name:"",
        dateofBirth:"",
        gender:"",
        email:"",
        nationality:"",
        username:"",
         password:"",
      })
      const handleChange = (e) =>{
        const {name,value} = e.target
        setFormData({...formData,[name]: value})   
        }
     
        const handleSubmit = async (e) =>{
            e.preventDefault();
            alert("Account Created Succesfully")
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
    <div className='p-5'>
       <h2>Hello there,signup to continue!</h2>
       <form className='flex flex-col gap-5 mt-5' onSubmit={handleSubmit}>

        <div className='relative flex items-center'>
        <CgProfile  className='absolute left-4 text-blue-500'/>
       <input type='text'
            placeholder='name'
            name='name' 
            className='p-2 w-full pl-10 border-2 border-slate-400 rounded-md"'
            value={formData.name}
            onChange={handleChange}
            />
           </div>

       <div className='relative flex items-center'>
       <FaUser className='absolute left-4  text-blue-500'/>
     <input type='text'
            placeholder='username'
            name='username' 
            className='p-2 w-full pl-10 border-2 border-slate-400 rounded-md"'
            value={formData.username}
            onChange={handleChange}
            />
          </div>
    
     <div className='rleative flex items-center'>
     <GiNurseMale  className='absolute left-8  text-blue-500'/>
    <input type='text'
            placeholder='gender'
            name='gender' 
            className='p-2 w-full pl-10 border-2 border-slate-400 rounded-md"'
            value={formData.gender}
            onChange={handleChange}
            />
          </div>

      <div className='relative flex items-center'>
      <MdEmail  className='absolute left-4  text-blue-500'/>
      <input type='text'
            placeholder='email'
            name='email' 
            className='p-2 w-full pl-10 border-2 border-slate-400 rounded-md"'
            value={formData.email}
            onChange={handleChange}
            />
        </div>

        <div className='relative flex items-center'>
        <CiFlag1  className='absolute left-4  text-blue-500'/>
      <input type='text'
            placeholder='nationality'
            name='nationality' 
            className='p-2 w-full pl-10 border-2 border-slate-400 rounded-md"'
            value={formData.nationality}
            onChange={handleChange}
            />
         </div>

     <div className='relative flex items-center'>
     <CiCalendarDate className='absolute left-4  text-blue-500'/>
   <input type='text'
            placeholder='dateofBirth'
            name='dateofBirth' 
            className='p-2 w-full pl-10 border-2 border-slate-400 rounded-md"'
            value={formData.dateofBirth}
            onChange={handleChange}
            />
         </div>

    <div className='relative flex items-center'>
    <RiLockPasswordLine className='absolute left-4  text-blue-500'/>
    <input type='text'
            placeholder='password'
            name='password' 
            className='p-2 w-full pl-10 border-2 border-slate-400 rounded-md"'
            value={formData.password}
            onChange={handleChange}
            />
           </div>
        <button
          type="submit"
          className="p-2 w-full pl-10 border-2 border-slate-400 bg-blue-600  text-white rounded-md"
        >
          Create Account
        </button>

        <div className='relative flex items-center'>
           <button className='bg-slate-400 border-1 w-full rounded-md
            p-2 font-bold text-slate-600' >Continue with goggle</button>
          </div>

       </form>

       <p className='text-sm text-center  mt-10'>Already have an account?
     <Link to='/Signin' className='text-blue-500'> Sign in</Link>
      </p>
       

    </div>
  )
}

export default User