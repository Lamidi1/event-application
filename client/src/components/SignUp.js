import React from 'react'
import { useState, } from 'react';
import { FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { Link } from 'react-router-dom';

const SignUp = () => {
const [formData, setFormData] = useState({
  username:"",
  email:"",
  password:"",

})

const handleInput = (e) =>{
  const {name,value} = e.target
  setFormData({...formData,[name]: value})
    
  }

const handleSubmit = (e)=>{
  e.preventDefault();
   console.log(formData)
}

  return (
          
    <div className='h-screen  flex flex-col p-4'>
      <h1 className='text-blue-800 font-semibold pl-2'>Signup</h1>
      <h2>Hello there,signup to continue!</h2>

      
    <form className='flex flex-col gap-5'onSubmit={handleSubmit}>

<div className='relative flex items-center' >
<FaUser className='absolute left-4'/>
 <input type='text' placeholder='Username'  
 className=' p-2 w-full pl-10 border-2 border-slate-400 rounded-md'
 value={formData.username} onChange={handleInput} name='username' />
</div>

<div className='relative flex items-center'>
<MdEmail  className='absolute left-4'/>
 <input type='text' placeholder='Email' 
 className='p-2 w-full pl-10 border-2 border-slate-400 rounded-md' 
  value={formData.email} onChange={handleInput} name='email' />
</div>

<div className='relative flex items-center'>
<RiLockPasswordLine className='absolute left-4'/>
 <input type='text' placeholder='password' 
 className='p-2 w-full pl-10 border-2 border-slate-400 rounded-md' 
  value={formData.password} onChange={handleInput} name='password' />
</div>

   <button type='submit' className='p-2 w-full  text-white  bg-slate-600 border-2
    rounded-md'>Create account</button>

  <div className='relative flex items-center'>
           <button className='bg-slate-200 border-1 w-full rounded-md
            p-2 font-bold text-slate-600'>Continue with goggle</button>
          </div>

</form>
     <p className='text-sm text-black font-bold mt-10'>Alrady have an account?
     <Link to='/Signin' className='text-blue-900'> Sign Up</Link>
      </p>




           


    </div>
  )
}

export default SignUp