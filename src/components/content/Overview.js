import React from 'react'
import sigma from '../../images/sigma.png'

const Overview = () => {
  return (
         <>
         
         <div className='flex flex-col md:space-y-10  md:p-20 md: items-left'>
        <p id='cyber' className='text-[#B6B6B6] text-lg md:text-5xl   '>STEPS TO GET STARTED WITH ..</p>
         <p id='cyber' className='text-white text-lg md:text-[102.985px]  '>SID 2022</p>
         </div>
          
         <div className='md:mb-10  mx-10 md:mx-20'>
        <div className='border-b-2 border-[#CAC9C9]/87  w-auto'></div>
        </div>
         
        

         <section className='mx-20 mb-20 '>
         <p className='pb-20 text-[#CAC9C9] text-lg ' id='jmh'>The internship drive is divided into 5 stages - </p>
            <div className='flex flex-row'>
             <img src={sigma} alt="software geek" />
             <div>
             <div className='grid grid-cols-2 grid-rows-2 gap-x-10 gap-y-10 ml-44'>
               <div className='bg-[#CAC9C9]/40 max-w-[350px] p-3 h-[200px]'>
                <p id='cyber' className='text-white text-xl'>REGESTRATiON PHASE</p>
                <p id='jmh' className='text-sm text-[#CAC9C9]'>Students need to register themselves at 
https://internship.spectrumcet.com . It is mandatory for all the 
students to register so as to take part in the internship drive.</p>
               </div>
               <div className='bg-[#CAC9C9]/40 max-w-[350px] p-3 h-[200px]'>
                <p id='cyber' className='text-white text-xl'>TASK 1 :-</p>
                <p id='jmh' className='text-sm text-[#CAC9C9]'>Students need to register themselves at 
https://internship.spectrumcet.com . It is mandatory for all the 
students to register so as to take part in the internship drive.</p>
               </div>
               <div className='bg-[#CAC9C9]/40 max-w-[350px] p-3 h-[200px]'>
                <p id='cyber' className='text-white text-xl'>TASK 2 :-</p>
                <p id='jmh' className='text-sm text-[#CAC9C9]'>Students need to register themselves at 
https://internship.spectrumcet.com . It is mandatory for all the 
students to register so as to take part in the internship drive.</p>
               </div>
               <div className='bg-[#CAC9C9]/40 max-w-[350px] p-3 h-[200px]'>
                <p id='cyber' className='text-white text-xl'>TASK 3 :-</p>
                <p id='jmh' className='text-sm text-[#CAC9C9]'>Students need to register themselves at 
https://internship.spectrumcet.com . It is mandatory for all the 
students to register so as to take part in the internship drive.</p>
               </div>
                
           
             </div> 
             <div className='ml-44 mt-20 text-white text-center text-3xl'id='cyber'>
             COMPLETION OF INTERNSHIP

             </div>
             </div>   
             
          


            </div>
        </section>




        <div className='md:mb-20  mx-10 md:mx-20'>
        <div className='border-b-2 border-[#CAC9C9]/87  w-auto'></div>
        </div>
         
         </>



  )
}

export default Overview