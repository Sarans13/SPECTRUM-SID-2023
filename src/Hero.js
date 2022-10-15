import React from 'react'
import spectrum from './images/output-onlinepngtools1.png'

function Hero() {
  return (
    <div className='bg-[#303636]'>

    {/* NAVBAR */}
    <div className=" relative container mx-auto p-6 ">
        {/* flex container */}
        <div className='flex items-center justify-between'>
          <div className=''>
       <img src={spectrum} alt="img"  className='h-[] w-[]'/>
    </div>

         <div className=' hidden md:flex flex-auto justify-end space-x-5 items-center' id='cyber'>
            
          
            <button className='text-white font-cyberian demo'>LOGIN</button>
            <button className='text-white font-cyberian demo'>REGISTER</button>
         </div>

         {/* hamburger menu */}
         
         
         </div>
         {/* MOBILE MENU */}


         {/* hero section */}


         <section>
          <div className='container flex flex-col-reverse items-center px-6 mx-auto mt-10 space-y-0 md:space-y-0 md:flex-row'>
            {/* left item */}
             <h1>   </h1>

             {/* right image */}


          </div>
         </section>
        
    </div>
    </div>
  )
}

export default Hero