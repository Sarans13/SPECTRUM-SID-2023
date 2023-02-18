import React from 'react'
import avatar from '../../images/Avatars Default.png'
import './Dash.css'
import Footer from '../../components/footer/Footer'
import WestOutlinedIcon from '@mui/icons-material/WestOutlined';
import { NavLink } from 'react-router-dom';
const UserDashboard = () => {
  return (
    <div>
      <div className='flex flex-row justify-between p-10 pb-0 bg-zinc-800 text-white'>
         <NavLink to={'/'}><WestOutlinedIcon fontSize='large'/></NavLink>
         <NavLink to={'/'}><button id='cyber' className='text-xl hover:text-[#DA493D] transition ease-in-out   hover:translate-y-1 hover:scale-110 duration-300'>SIGN OUT</button></NavLink>
      </div>
    <div className='pt-44 pb-20 border-b-2 border-[#908d8d] bg-zinc-800' >
    <div className='flex flex-col items-center px-auto space-y-4' id='cyber'>
     <img src={avatar} alt="noob" className=' h-[169.8px] w-[244.38px]  bg-zinc-600 border-0 rounded-full  pt-10 m-auto w-56 h-56  items-center ' />
     <h3 className='text-center text-white text-3xl '>KARTIK PATTNAIK</h3>
     <h2 className=' text-center py-1 px-3  bg-[#5B5F5F] text-[#D9D9D9] max-w-xs'>APP DEVELOPMENT</h2>
     </div>
    </div>
    <div className='py-40' id='cyber'>
     <div className='grid grid-cols-3 mx-10 text-white gap-x-11'>
        <div id='card' className='flex flex-col items-center text-lg  border-2 space-y-10 border-white text-center px-[22.32px] py-10 '>
           <p>Task 1</p>
           <p className='text-sm pb-10' id='jmh'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat ac sit interdum coLorem ipsum dolor sit amet, consectetur uis luctus.mmodo convallis .</p>
           <button type='button' className='bg-transparent border-white border-4 py-3 px-24'>View Assignment</button>
           <button type='submit' className='text-white  border-2 py-3 w-[25.5rem] bg-[#DA493D] border-[#DA493D]'>Submit</button>
        </div>
        <div  id='card'  className='flex flex-col items-center text-lg bg-black border-2 space-y-10 border-white text-center px-[22.32px] py-10 '>
           <p>Task 1</p>
           <p className='text-sm pb-10' id='jmh'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat ac sit interdum coLorem ipsum dolor sit amet, consectetur uis luctus.mmodo convallis .</p>
           <button type='button' className='bg-transparent border-white border-4 py-3 px-24'>View Assignment</button>
           <button type='submit' className='text-white   border-2 py-3 w-[25.5rem] bg-[#DA493D] border-[#DA493D]'>Submit</button> 
        </div>
        <div id='card'  className='flex flex-col items-center text-lg bg-black border-2 space-y-10 border-white text-center px-[22.32px] py-10 '>
           <p>Task 1</p>
           <p className='text-sm pb-10' id='jmh'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat ac sit interdum coLorem ipsum dolor sit amet, consectetur uis luctus.mmodo convallis .</p>
           <button type='button' className='bg-transparent border-white border-4 py-3 px-24'>View Assignment</button>
           <button type='submit' className='text-white  border-2 py-3 w-[25.5rem] bg-[#DA493D] border-[#DA493D]'>Submit</button> 
        </div>
      
     </div>
    </div>
    <div className='bg-zinc-800'>
    <Footer/>
    </div>
    </div>
  )
}

export default UserDashboard