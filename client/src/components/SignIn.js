import React from 'react'
import { useState, } from 'react'
import { MdEmail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { FcGoogle } from "react-icons/fc";
import { Link } from 'react-router-dom';

const SignIn = () => {

    const [formData, setFormData] = useState({
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

    <div>
      
         <h1 className='text-blue-800 font-semibold pl-2 mt-5'>Welcome!</h1>
      <h2 className='text-xl'>Hello there,signup to continue!</h2>

    <form className='flex flex-col gap-5' onSubmit={handleSubmit}>

    <div className='relative flex items-center'>
    <MdEmail  className='absolute left-4 color="blue'/>
 <input type='text' placeholder='Email' 
 className='p-2 w-full pl-10 border-2 border-slate-400 rounded-md' 
  value={formData.email} onChange={handleInput} name='email' />
</div>


<div className='relative flex items-center'>
<RiLockPasswordLine  className='absolute left-4'/>
 <input type='text' placeholder='password' 
 className='p-2 w-full pl-10 border-2 border-slate-400 rounded-md' 
  value={formData.password} onChange={handleInput} name='password' />
</div>

<button  className='p-2 w-full bg-slate-600 text-white border-2 
    rounded-md'>Login</button>

<div className='relative flex items-center'>
 <FcGoogle className='absolute left-96'/>
           <button className='bg-slate-200 border-1 w-full rounded-md
            p-2 font-bold text-slate-600'>Continue with goggle</button>
          </div>

    </form>
    <p className='text-sm text-black font-bold mt-10'>Alrady have an account?
     <Link to='/Signup' className='text-blue-900'> Sign in</Link>
      </p>
      
    </div>
  )
}

export default SignIn