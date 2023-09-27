import React from 'react'
import Spectrumlogo from '../../images/output-onlinepngtools 2.png'
import { NavLink } from "react-router-dom";
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
const footer = () => {
  return (
    <div className='border-t-2  mt-10 p-10 border-[#908d8d] text-white bg-zinc-800'>
        <div className='flex flex-col items-center text-[#FFFFFF] space-y-10'>
        <img src={Spectrumlogo} alt="" className='h-14 w-14 md:h-[7rem] md:w-[6.58rem] mx-auto ' />
       <p className='text-center text-xs md:text-lg max-w-5xl'>Spectrum, a digital platform,  serves as an online presence, offering information, services, or products to a global audience. We combine design, content, and functionality to engage visitors, convey your message, and achieve specific goals for the betterment of every individual out there.</p>
      <div>
      <p className='text-center text-xs md:text-lg max-w-5xl'>For more details contact:</p>
       <p className='text-center text-xs md:text-lg max-w-5xl'> Subhasish Pattanaik: 6372729539</p>
       <p className='text-center text-xs md:text-lg max-w-5xl'> Prachoorya Preeyambada - 7008764077</p>
      </div>
       <div className='flex flex-row space-x-20 ho'>
       <NavLink to={'https://www.linkedin.com/company/spectrum-cet/mycompany/'}><LinkedInIcon fontSize='large' /></NavLink> 
      <a href="mailto: dev.spectrum.cetb@gmail.com"><EmailOutlinedIcon fontSize='large'/></a>
      <NavLink to={'https://instagram.com/spectrum.outr?igshid=YmMyMTA2M2Y='}><InstagramIcon fontSize='large' /></NavLink>
   
       </div>
 <NavLink to={'/'} className='hover:text-orange-600'>Fin.</NavLink>
        </div>
    </div>
  )
}

export default footer