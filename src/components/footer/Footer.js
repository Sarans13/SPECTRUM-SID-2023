import React from 'react'
import Spectrumlogo from '../../images/output-onlinepngtools 2.png'
import { NavLink } from "react-router-dom";
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
const footer = () => {
  return (
    <div className='border-t-2  mt-10 p-10 border-[#908d8d] text-white'>
        <div className='flex flex-col items-center text-[#FFFFFF] space-y-10'>
        <img src={Spectrumlogo} alt="" className='h-14 w-14 md:h-[7rem] md:w-[6.58rem] mx-auto ' />
       <p className='text-center text-xs md:text-lg max-w-5xl'>Lorem ipsum dolor sit amet consectetur. Pellentesque in dui elit arcu nec curabitur in. Vitae in felis et nunc. Et blandit lacinia integer est. In nulla lobortis duis diam. Eros volutpat egestas in urna. Felis parturient porta sed gravida nunc felis. Gravida ut lacus pellentesque eu posuere. Elementum cras nulla non.</p>
       <div className='flex flex-row space-x-20 ho'>
       <NavLink to={'https://www.linkedin.com/company/spectrum-cet/mycompany/'}><LinkedInIcon fontSize='large' /></NavLink> 
      <a href="mailto: dev.spectrum.cetb@gmail.com"><EmailOutlinedIcon fontSize='large'/></a>
      <NavLink to={'https://instagram.com/spectrum.outr?igshid=YmMyMTA2M2Y='}><InstagramIcon fontSize='large' /></NavLink>
   
       </div>
 <NavLink to={'/'} className='hover:text-orange-600'>Home</NavLink>
        </div>
    </div>
  )
}

export default footer