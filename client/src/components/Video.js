import React from 'react'
import { Link } from 'react-router-dom'
import image1 from '../image/Rectangle9.png'

const Video = () => {

  return (
    <div className='mt-11'>

<img  className='mt-5 mx-auto' alt='' src={image1}></img>

<Link to='/Home'>
<button  className='p-2 w-full border-slate-300 bg-blue-600 text-white border-2 
        mt-16  rounded-md'>Continue</button>
        </Link>

    </div>
  )
}

export default Video