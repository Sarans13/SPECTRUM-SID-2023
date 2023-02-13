import React,{useState} from 'react'
import spectrum from './images/output-onlinepngtools1.png'
import women from './images/pexels-andrea-piacquadio-3762368@2x 1 (2).png'
import { Divide as Hamburger } from 'hamburger-react'
function Hero() {

  const [isOpen, setOpen] = useState(false)

  function handleToggle(){

    setOpen((prevState) => (!prevState));
  }
  return (
    <div className='' id=''>

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
         <div className='block hamburger md:hidden'>
         <Hamburger  onToggle={handleToggle}/>
         </div>
         
         </div>
         {/* MOBILE MENU */}
           <div className='md:hidden'>

            {isOpen &&
           <div id="menu" className="absolute flex flex-col items-center  self-end py-8 mt-10 space-y-6 font-bold bg-[#303636]/30 sm:w-auto sm:self-center left-6 right-6 drop-shadow-md">
          <div className='text-white' id='cyber'>LOGIN</div>
          <div className='text-white' id='cyber'>REGISTER</div>
          </div>}
           </div>

         

         {/* hero section */}


         <section>
          <div className='container flex flex-col-reverse items-center px-6 mx-auto mt-14 md:mt-36 gap-11 md:space-x-[20rem] md:space-y-0 md:flex-row'>
            {/* left item */}
            {/* left flexbox */}
            <div className='flex flex-col '>
                <div className=''>
                     <h1 id='cyber' className='text-lg text-[#B6B6B6] text-center    md:text-5xl md:text-left md: md: max-w-[50rem] '>SPECTRUM INTERNSHIP DRIVE 2022 </h1>
                       <p className=' text-[10px] text-center text-[#CAC9C9] mt-7 max-w-[500px] md:text-left md:text-[16px]' id='jmh'> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat ac sit interdum coLorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat ac sit interdum commodo convallis sit orci. Leo, et id duis luctus.mmodo convallis .
                      </p>
                </div>
              {/* EXPLORE BUTTONS */}
             <div className='flex flex-row mt-10 space-x-7'>
               <button id='cyber' className='border border-[#DA493D] px-2 text-white md:font-[400] md:py-[14.3678px] md:px-[40.0246px] bg-[#DA493D] hover:bg-[#531e1a]' >EXPLORE</button>
               <button id='cyber' className='border border-[#ffff] text-white font-[400] py-[14.3678px] px-[40.0246px] hover:bg-[#531e1a]' >VIEW BROCHURE</button>
             </div>    
             </div>
   
             {/* right image */}
              <div className=''>
                <img src={women} alt="women"  className='md:mb-20'/>
               
              </div>

          </div>


          {/* space to check scroll */}

          <div className=' mt-36 md:mt-96'>

          </div>
         </section>
        
    </div>
    </div>
  )
}

export default Hero