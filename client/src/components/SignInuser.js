import React from 'react'
import { useState, } from 'react'
import { MdEmail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { FcGoogle } from "react-icons/fc";
import { Link } from 'react-router-dom';
import axios from 'axios';

const SignInuser = () => {

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
            alert("Sign in Succesfully!")
            //  console.log(formData)
            axios
            .post("http://localhost:5000/signinuser",formData)
            .then((res) => {
              console.log(res);
            })
            .catch((err) => {
              console.log(err);
            });
                setFormData({
                 email:"",
                 password:"",
                });

          };
          
  return (

      <div className='h-screen flex flex-col p-5 '>
        
         <h1 className='text-blue-800 font-semibold pl-2 mt-5'>Welcome!</h1>
        <h2 className='text-xl'>Hello there,signin to continue!</h2>

    <form className='flex flex-col gap-5 mt-5' onSubmit={handleSubmit}>

          <div className='relative flex items-center'>
            <MdEmail  className='absolute left-4  text-blue-500'/>
        <input type='text' placeholder='Email' 
        className='p-2 w-full pl-10 border-2 border-slate-400 rounded-md' 
          value={formData.email} onChange={handleInput} name='email' />
        </div>


        <div className='relative flex items-center'>
        <RiLockPasswordLine  className='absolute left-4  text-blue-500'/>
        <input type='text' placeholder='password' 
        className='p-2 w-full pl-10 border-2 border-slate-400 rounded-md' 
          value={formData.password} onChange={handleInput} name='password' />
        </div>

        <Link to='/video'>
      <button  className='p-2 w-full border-slate-400  text-white border-2 
        bg-blue-600  rounded-md'>Log in</button>
           </Link>
           
          <div className='relative flex items-center'>
          <FcGoogle className='absolute left-96'/>
            <button className='bg-slate-200 border-1 w-full rounded-md
              p-2 font-bold text-slate-600'>Continue with goggle</button>
            </div>

      </form>
      <p className='text-sm text-center mt-20'>Don't have an account?
      <Link to='/user' className='text-blue-500'> Sign up</Link>
        </p>
      
    </div>
  )
}

export default SignInuser