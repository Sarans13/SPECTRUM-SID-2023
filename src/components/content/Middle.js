import React from 'react'
import './herostylee2.css'
import robot from '../../images/andrea-de-santis-zwd435-ewb4-unsplash 1 (1).png'
import google from '../../images/image 1.png'
import linux from '../../images/image 4.png'
import azure from '../../images/image 3.png'
import amazon from '../../images/image 2.png'
import { NavLink } from 'react-router-dom'

function Middle() {
  return (
    <>
      {/* flex 2 container for middle portion */}
      <div className='container flex flex-col items-center gap-y-10 mx-auto md:pl-[13rem] mt-20 md:flex-row custom-container'>

        {/* left image */}
        <div className='w-sm md:w-1/2 '>
          <div className='bg-[#DA493D] h-[28rem] w-[19rem] md:h-[35rem] md:w-[25rem]' >
            <div className='flex flex-col items-center pt-5 mt-5 ml-4 mr-4 '>

              <img src={robot} alt="" className='' />
              <p className='flex  items-center text-white text-sm md:w-70 pt-5  text-center' id='jmh' >“ Ctrl + Alt + Delete your problems; Ctrl + S your progress." “</p>
            </div>
          </div>
        </div>

        {/* right text */}

        <div>
          <div className='flex flex-col w-[20rem] md:w-1/2'>
            <h1 id='cyber' className='text-[#B6B6B6]  text-sm  md:text-4xl  md:w-[28.3rem]'>LEARN AND GROW</h1>
            <p id='jmh' className='text-[#CAC9C9] text-opacity-87 text-sm md:w-[32rem] md:h-[6.5rem] mt-5'>In Spectrum Internship Drive,We believe that the journey to success is paved with continuous learning and personal growth. Thus ,we're committed to providing you all with the tools, resources, and opportunities you need to thrive. When you join SID, you'll be welcomed into a culture of curiosity and innovation.</p>
            <NavLink to="/Register"><button id='cyber' className='border border-[#DA493D] text-white bg-[#DA493D]  md:w-[14rem] md:h-[3rem] mt-10 '>JOIN</button></NavLink>
            <p id='jmh' className='text-[#E5E5E5] mt-3'>Already registered? <NavLink to="/Register" className='text-[#E86555]'>sign in</NavLink> </p>
          </div>
        </div>


      </div>

      {/* <div className='pb-20 pt-10 md:py-36'> */}
      <div className='pb-20 pt-10'>
        {/* <div className='py-28 md:py-44'> */}
      </div>
      {/* flex box container ends */}

      {/* partnership column */}
      <div className='container flex flex-col item-center mx-auto gap-y-10 md:flex-row custom-container hidden'>

        {/* text */}
        <div className=' md:w-10 pl-[3rem]'>
          <p id='cyber' className='text-[#B6B6B6]  text-3xl md:text-5xl '>IN PARTNERSHIP WITH</p>
        </div>

        {/* partners */}
        <div className='flex flex-auto justify-between pl-0 md:justify-end mx-auto space-x-5 md:space-x-16'>
          <div className='bg-white  h-[4.3rem] w-[4.3rem] md:h-[8.5rem] md:w-[9rem] rounded-full'>
            <img src={linux} alt="" className='h-[2.5rem] w-[3.1rem] m-[0.7rem] mt-4  md:h-[5rem] md:w-[6rem] md:m-6 ' />

          </div>

          <div className='bg-white  h-[4.3rem] w-[4.3rem] md:h-[8.5rem] md:w-[9rem] rounded-full'>
            <img src={azure} alt="" className='h-[2.5rem] w-[3.1rem] m-[0.7rem] mt-4  md:h-[5rem] md:w-[6rem] md:m-6' />

          </div>

          <div className='bg-white  h-[4.3rem] w-[4.3rem] md:h-[8.5rem] md:w-[9rem] rounded-full'>
            <img src={amazon} alt="" className='h-[2.5rem] w-[3.1rem] m-[0.7rem] mt-4  md:h-[5rem] md:w-[6rem] md:m-6' />

          </div>

          <div className='bg-white  h-[4.3rem] w-[4.3rem] md:h-[8.5rem] md:w-[9rem] rounded-full'>
            <img src={google} alt="" className='h-[2.5rem] w-[3.1rem] m-[0.7rem] mt-4  md:h-[5rem] md:w-[6rem] md:m-6' />

          </div>



        </div>






      </div>


      {/* <div className='mt-24 md:mt-36   mx-10 md:mx-24'> */}
      {/* <div className='mt-24 mx-10 md:mx-24'>
        <div className='border-b-2 border-[#CAC9C9]/87  w-auto'>
        </div>


      </div> */}




      {/* spacing */}

      {/* 
       <div className=' py-28 md:py-44'> */}

      {/* </div> */}
    </>
  )
}

export default Middle