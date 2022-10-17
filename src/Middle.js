import React from 'react'
import robot from './images/andrea-de-santis-zwd435-ewb4-unsplash 1 (1).png'
function Middle() {
  return (
    <>
    {/* flex 2 container for middle portion */}
       <div className='container flex flex-col items-center gap-y-10 mx-auto md:pl-[205px]  md:flex-row'>

        {/* left image */}
        <div className='w-sm md:w-1/2 '>
          <div className='bg-[#DA493D] h-[450px] w-[300px] md:h-[557px] md:w-[398px]' >
            <div className='flex flex-col items-center pt-5 mt-5 ml-4 mr-4 '>
            
                <img src={robot} alt="" className='' />
                <p className='flex  items-center text-white text-sm md:w-56 pt-5  text-center' id='jmh' >“ Lorem ipsum dolor sit amet consectetur adipiscing elit. “</p>
           </div>
          </div>
          </div>

        {/* right text */}

          <div>
          
             <div className='flex flex-col w-[20rem] md:w-1/2 space-y-4'>
              <h1 id='cyber' className='text-[#B6B6B6]  text-sm  md:text-4xl  md:w-[453px]'>LEARN AND GLOW</h1>
              <p id='jmh' className='text-[#CAC9C9] text-opacity-87 text-sm md:w-[513px] md:h-[105px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat ac sit interdum coLorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat ac sit interdum commodo convallis sit orci. Leo, et id duis luctus.mmodo convallis .</p>
              <button id='cyber' className='border border-[#DA493D] text-white bg-[#DA493D]  md:w-[224px] md:h-[46.74px] md:py-[14.3678px] md:px-[40.0246px] ' >JOIN</button>
              <p id='jmh' className='text-[#E5E5E5]'>Already registered? <a href="/home" className='text-[#E86555]'>sign in</a> </p>
             </div>




          </div>
     
      
       </div>
      {/* flex box container ends */}

      {/* partnership column */}
      <div className=''>



      </div>







       {/* spacing */}
       

       <div className='py-44'>

       </div>
    </>
  )
}

export default Middle