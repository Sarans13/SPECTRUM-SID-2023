import React from 'react'
import '../../App.css'
import avatar from '../../images/Avatars Default.png'
import { NavLink } from 'react-router-dom'
const UserDetail = () => {
  return (
    <>
     <div className='flex flex-col md:space-y-10 mx-5 py-10 md:mt-0 md:p-20 md:items-left'>
        <p id='cyber' className='text-[#B6B6B6] text-lg md:text-5xl   '>SOME CATCHY LINE</p>
         <p id='cyber' className='text-white text-lg md:text-[102.985px]  '>GET STARTED</p>
    </div>
    <div className='md:mt- mb-20 md:mb-20  mx-5 md:mx-20'>
        <div className='border-b-2 border-[#CAC9C9]/87  w-auto'></div>
    </div>
     <div className='flex flex-col-reverse gap-y-20 md:flex-row  md:space-x-[20rem]'>
    <form className='flex flex-col space-y-5 mx-10 md:mx-0 md:space-y-10  md:p-20  items-left  md:w-[40rem]'>
      <input type="text" placeholder='Name' className='text-white p-2 border-2  border-[#B6B6B6] bg-transparent'/>
      <input type="text" placeholder='Gender' className='text-white p-2 border-2  border-[#B6B6B6] bg-transparent'/>
      <input type="email" placeholder='E mail' className='text-white p-2 border-2  border-[#B6B6B6] bg-transparent'/>
      <input type="password" placeholder='Password' className='text-white p-2 border-2  border-[#B6B6B6] bg-transparent'/>
      <input type="password" placeholder='Confirm Password' className='text-white p-2 border-2  border-[#B6B6B6] bg-transparent'/>
      <input type="text" placeholder='Choose Domain' className='text-white p-2 border-2  border-[#B6B6B6] bg-transparent'/>
      <div>
        <NavLink to={'/user'}>
      <button id='cyber' className='border border-[#DA493D] px-4 py-2 text-white md:font-[400] mb-4 md:mb-0 md:py-2 md:px-[40.0246px] hover:bg-[#531e1a] bg-[#DA493D]'  >SUBMIT</button></NavLink>
      </div>  
    </form>

    <img src={avatar} alt="noob" className='h-44  w-44  m-auto bg-zinc-500 px-2 pt-2  md:px-2  md:pt-16 rounded-full border-0 md:w-auto md:h-auto' />
    </div>
    </>

  )
}

export default UserDetail