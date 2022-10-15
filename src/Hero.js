import React from 'react'
import spectrum from './images/output-onlinepngtools1.png'

function Hero() {
  return (
    <div>

    {/* NAVBAR */}
    <div className=" relative container mx-auto p-6 bg-black">
        {/* flex container */}
        <div className='flex items-center justify-between'>
          <div className=''>
       <img src={spectrum} alt="img"  className=''/>
    </div>

         <div className=' hidden md:flex flex-auto justify-end space-x-5 items-center'>
            <div>FEATURES</div>
            <div>PRICING</div>
            <div>CONTACT</div>
          
            <button className='border-2 border-[#f34013] bg-white px-3 py-2'>LOGIN</button>
         </div>

         {/* hamburger menu */}
         
         
         </div>
         {/* MOBILE MENU */}
        
    </div>
    </div>
  )
}

export default Hero