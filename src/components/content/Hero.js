import React, { useState, useEffect } from 'react'
import './herostyle.css'
import spectrum from '../../images/output-onlinepngtools1.png'
import women from '../../images/jhia (2).png'
import { NavLink, Link } from 'react-router-dom'
import { Divide as Hamburger } from 'hamburger-react'
import ModalLoginForm from './ModalLoginForm';
import Description from './Description'
function Hero({ outputForAppJs}) {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth <= 768);
    }
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleLogin = (userData) => {
    outputForAppJs(userData);
  }

  const [isOpen, setOpen] = useState(false)

  function handleToggle() {
    setOpen((prevState) => (!prevState));
  }

  const [isModalOpen, setModalOpen] = useState(false);
  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };

  const scrollToDescription = () => {
    const descriptionSection = document.getElementById('descriptionSection');
    if (descriptionSection) {
      descriptionSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className='bg-black bg-opacity-25' id=''>
      {/* NAVBAR */}
      <div className={`relative container custom-container1 mx-auto p-6 ${window.innerWidth < 768 ? 'pl-0 pb-10' : 'pr-0 pb-0'}`}>
        {/* flex container */}
        <div className={`flex items-center justify-between p-6 ${window.innerWidth < 768 ? '' : 'mr-12'}`}>
          <div className=''>
            <img src={spectrum} alt="img" className='h-[] w-[]' />
          </div>

          <div className=' hidden md:flex flex-auto justify-end space-x-5 items-center' id='cyber'>
            <button className='text-white font-cyberian demo transition ease-in-out  hover:text-[#DA493D] hover:translate-y-1 hover:scale-110 duration-300' onClick={openModal}>LOGIN</button>
            <ModalLoginForm isOpen={isModalOpen} onClose={closeModal} onLogin={handleLogin} />
            <NavLink to={'/register'}>
              <button className='text-white font-cyberian demo transition ease-in-out hover:text-[#DA493D] hover:translate-y-1 hover:scale-110 duration-300'>REGISTER</button>
            </NavLink>
          </div>

          {/* hamburger menu */}
          <div className='block hamburger md:hidden text-white mr-0'>
            <Hamburger onToggle={handleToggle} />
          </div>

        </div>
        {/* MOBILE MENU */}
        <div className='md:hidden'>
          {isOpen && (
            <div id="menu" className="absolute flex flex-col items-center md:gap-10 self-end py-12 mt-7 space-y-6 font-bold bg-black sm:w-auto sm:self-center left-6 right-6 drop-shadow-md h-1/3">
              <button onClick={openModal} className='text-white h-12' id='cyber'>
                LOGIN
              </button>
              <ModalLoginForm isOpen={isModalOpen} onClose={closeModal} onLogin={handleLogin} />
             <button>
             <NavLink to={'/register'} className='text-white h-12' id='cyber'>
                REGISTER
              </NavLink>
             </button>
              <button className='text-white h-12' id='cyber' onClick={scrollToDescription}>
               EXPLORE
              </button>
            </div>
          )}
        </div>



        {/* hero section */}
        <section>
          <div className={`container custom-container1 flex flex-col items-center px-6 mx-auto mt-1 gap-1 md:space-x-[8rem] md:space-y-0 md:flex-row ${window.innerWidth < 768 ? 'pl-0' : ''} pr-0`}>
            {/* left item */}
            {/* left flexbox */}
            <div className='flex flex-col '>
              {window.innerWidth >= 768 && (
                <h1 id='cyber' className={`text-lg text-[#B6B6B6] text-center md:text-5xl ${window.innerWidth < 768 ? 'text-6xl' : ''} md:text-left md:max-w-[50rem]`}>
                  SPECTRUM INTERNSHIP DRIVE 2023
                </h1>
              )}
              {window.innerWidth < 768 && (
                <div className="text-lg text-[#B6B6B6] text-center md:text-5xl ml-6 md:text-left md:max-w-[50rem] md:flex-col mt-6">
                  <div id="cyber" className='text-5xl mb-3'>SPECTRUM</div>
                  <div id="cyber" className='text-5xl mb-3'>INTERNSHIP</div>
                  <div id="cyber" className='text-5xl mb-3'>DRIVE</div>
                  <div id="cyber" className='text-5xl mb-3'>2023</div>
                </div>
              )}


              <p className={`text-[0.6rem] text-center text-[#CAC9C9] mt-7 max-w-[500px] ${window.innerWidth < 768 ? 'max-w-[350px] ml-6' : 'md:text-left md:text-[1rem]'}`} id='jmh'>Are you eager to kickstart your career and gain real-world experience in your chosen field? Look no further! Spectrum  internship drive is your gateway to a world of opportunities.Don't miss this chance to grow, learn, and make a difference. Join our internship drive today and embark on a journey of professional growth and personal development.
              </p>
              {/* EXPLORE BUTTONS */}
              {window.innerWidth >= 768 && (
                <div className={`flex flex-row mt-10 space-x-7 ${isMobile ? 'justify-center flex-col' : ''}`}>
                  <button id='cyber' className='border border-[#DA493D] px-2 py-2 text-white md:font-[400] md:py-5 md:px-10 bg-[#DA493D] hover:bg-[#531e1a]'  onClick={scrollToDescription}>EXPLORE</button>
                  <NavLink to={'/register'}>
                  <button id='cyber' className='border border-[#ffff] text-sm md:text-lg w-56 md:w-auto text-white font-[400] py-5 px-10 hover:bg-[#531e1a]' >GET STARTED</button>
                  </NavLink>
                </div>
              )}

              {window.innerWidth < 768 && (
                <div className="flex flex-col mt-10 ml-6 space-y-2">
                <button id='cyber' className='border border-[#DA493D] w-full py-2 text-white md:font-[400] md:py-5 md:px-10 bg-[#DA493D] hover:bg-[#531e1a]' onClick={scrollToDescription}>
                  EXPLORE
                </button>
                <NavLink to={'/register'}>
                <button id='cyber' className='border border-2 border-[#ffffff] w-full py-2 text-white md:font-[400] md:py-5 md:px-10 hover:bg-[#531e1a]'>
                  GET STARTED
                </button>
                </NavLink>
              </div>
              )}


            </div>

            {/* right image */}
            {window.innerWidth > 768 && (
              <div className=''>
                <img src={women} alt="women" className='w-[40rem] h-[40rem] object-left' />
              </div>)}

          </div>


          {/* space to check scroll */}
          {/* 
          <div className=' mt-36 md:mt-96'> */}

          {/* </div> */}
        </section>

      </div>
    </div>
  )
}

export default Hero