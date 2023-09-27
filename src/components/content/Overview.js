import React from 'react'
import sigma from '../../images/sigma.png'

const Overview = () => {
  return (
    <>

      <div className='flex flex-col mx-10 md:space-y-10  md:p-20 md:mx-0 items-left'>
        <p id='cyber' className='text-[#B6B6B6] text-lg md:text-5xl   '>STEPS TO GET STARTED WITH ..</p>
        <p id='cyber' className='text-white text-lg md:text-[102.985px]  '>SID 2023</p>
      </div>

      <div className='md:mb-10  mx-10 md:mx-20'>
        <div className='border-b-2 border-[#CAC9C9]/87  w-auto'></div>
      </div>
      <section className='md:mx-20 mb-20 '>
        <p className='p-10 md:pb-20 text-[#CAC9C9] text-xs md:text-lg ' id='jmh'>The internship drive is divided into 5 stages - </p>
        <div className='flex flex-col md:flex-row space-y-9  md:space-y-0'>
          <img src={sigma} alt="software geek " className='w-44 h-56 mx-auto  md:h-auto md:w-auto' />
          <div>
            <div className='  grid grid-rows-4 gap-y-5 md:grid-cols-2 md:grid-rows-2 md:gap-x-10  md:gap-y-10 mx-10 md:mx-0 md:ml-44'>
              <div className='bg-[#CAC9C9]/40 max-w-[350px] p-3 h-[150px] md:h-[200px]'>
                <p id='cyber' className='text-white text-sm md:text-xl'>REGISTRATiON PHASE</p>
                <p id='jmh' className='text-xs md:text-sm text-[#CAC9C9]'>Students need to register themselves at https://spectrum-sid-2023.vercel.app/ . It is mandatory for all the students to register so as to take part in the internship drive</p>
              </div>
              <div className='bg-[#CAC9C9]/40 max-w-[350px] h-[150px] p-3 md:h-[200px]'>
                <p id='cyber' className='text-white text-sm md:text-xl'>TASK 1 :-</p>
                <p id='jmh' className='text-xs md:text-sm text-[#CAC9C9]'>This is the initial and basic part of the drive , starting from 1st October,2023 . The deadline of task 1 is 9th October 2023 !</p>
              </div>
              <div className='bg-[#CAC9C9]/40 max-w-[350px] p-3 h-[150px] md:h-[200px]'>
                <p id='cyber' className='text-white text-sm md:text-xl'>TASK 2 :-</p>
                <p id='jmh' className=' text-xs md:text-sm text-[#CAC9C9]'>Next up, we have the secondary part of the drive , starting from 10th October,2023 . The deadline of task 2 is 18th October 2023 !</p>
              </div>
              <div className='bg-[#CAC9C9]/40 max-w-[350px] p-3 h-[150px] md:h-[200px]'>
                <p id='cyber' className='text-white text-sm md:text-xl'>TASK 3 :-</p>
                <p id='jmh' className='text-xs md:text-sm text-[#CAC9C9]'>Finally , here comes the conclusive part of the drive , starting from 20th October,2023 . The deadline of task 3 is 28th October 2023 !</p>
              </div>


            </div>
            <div className='md:ml-44 mt-20 text-white text-center text-lg md:text-3xl' id='cyber'>
              COMPLETION OF INTERNSHIP

            </div>
          </div>




        </div>
      </section>




      <div className='md:mt- md:mb-20  mx-5 md:mx-20'>
        <div className='border-b-2 border-[#CAC9C9]/87  w-auto'></div>
      </div>

    </>



  )
}

export default Overview