import React from 'react'
import '../../App.css'
import avatar from '../../images/Avatars Default.png'
const UserDetail = () => {
  return (
    <>
    <div className='flex flex-col md:space-y-10  md:p-20 md: items-left'>
        <p id='cyber' className='text-[#B6B6B6] text-lg md:text-5xl   '>SOME CATCHY LiNE</p>
         <p id='cyber' className='text-white text-lg md:text-[102.985px]  '>GET STARTED</p>
        
    </div>
     <div className='grid grid-cols-2'>
    <form className='flex flex-col md:space-y-10  md:p-20 md: items-left  max-w-xl'>
      <input type="text" placeholder='Name' className='text-white p-2 border-2  border-[#B6B6B6] bg-transparent'/>
      <input type="text" placeholder='Gender' className='text-white p-2 border-2  border-[#B6B6B6] bg-transparent'/>
      <input type="email" placeholder='E mail' className='text-white p-2 border-2  border-[#B6B6B6] bg-transparent'/>
      <input type="password" placeholder='Password' className='text-white p-2 border-2  border-[#B6B6B6] bg-transparent'/>
      <input type="password" placeholder='Confirm Password' className='text-white p-2 border-2  border-[#B6B6B6] bg-transparent'/>
      <input type="text" placeholder='Choose Domain' className='text-white p-2 border-2  border-[#B6B6B6] bg-transparent'/>
      <div>
      <button id='cyber' className='border border-[#DA493D] px-2 text-white md:font-[400] md:py-[14.3678px] md:px-[40.0246px] hover:bg-[#531e1a] bg-[#DA493D]'  >SUBMIT</button>
      </div>  
    </form>

    <img src={avatar} alt="noob" className='m-auto bg-zinc-500 px-2 pt-16 rounded-full border-0 ' />
    </div>
    </>

  )
}

export default UserDetail