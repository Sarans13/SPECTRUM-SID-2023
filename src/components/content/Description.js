import React, { useState } from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./Carousel.css";
import Product from "./Carousel/Products";
import { productData, responsive } from "./Carousel/Data";
import Dots from './Carousel/Dots';
// import domain from '../../images/Rectangle 10.png'
const Description = () => {
  const product = productData.map((item) => (
    <Product
      name={item.name}
      url={item.imageurl}
      price={item.price}
      description={item.description}
    />
  ));
  
  const [activeIndex, setActiveIndex] = useState(0);
  const handleBeforeSlideChange = (fromIndex, toIndex) => {
    console.log(fromIndex);
    setActiveIndex(fromIndex);
  };
  return (
    <div className='my-20'>
      <div className='flex flex-col mx-5 md:space-y-10  lg:p-20 md:items-left'>
        <p id='cyber' className='text-[#B6B6B6] text-lg lg:text-5xl md:text-4xl '>ALL SOFTWARE, HARDWARE & DESIGN</p>
        {/* <p id='cyber' className='text-white text-lg md:text-[7rem]  '>DOMAINS</p> */}
        <div className="forest">
        <p id='cyber' className='text-white text-lg lg:text-[7rem] md:text-[5rem]'>DOMAINS</p>
        <div className="Simpledots">
          <Dots activeIndex={activeIndex} totalDots={product.length}/>
        </div>
      </div>
      </div>
      <div className='md:mb-20   mx-5 md:mx-20'>
        <div className='border-b-2 border-[#CAC9C9]/87  w-auto'></div>
      </div>

      {/* <div className='grid grid-rows-3 md:grid-cols-3 md:grid-rows-none md:mx-[5rem] mt-10 '>
        <div className='flex flex-col text-left space-y-5 max-w-[25rem]  p-5'>
          <img src={domain} alt="" className='' />
          <p className='text-white ' id='cyber'>App devlopment</p>
          <p className='text-left text-[#CAC9C9DE]' id='jmh'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat ac sit interdum coLorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat ac sit interdum commodo convallis sit orci. Leo, et id duis luctus.mmodo convallis .</p>
          <button type='submit' className='text-white max-w-[200px] py-2 px-3 text-center bg-[#DA493D] ' id='cyber'>REGISTER</button>
        </div>
        <div className='flex flex-col text-left space-y-5 max-w-[25rem]  p-5'>
          <img src={domain} alt="" />
          <p className='text-white ' id='cyber'>App devlopment</p>
          <p className='text-left text-[#CAC9C9DE]' id='jmh'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat ac sit interdum coLorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat ac sit interdum commodo convallis sit orci. Leo, et id duis luctus.mmodo convallis .</p>
          <button type='submit' className='text-white max-w-[200px] py-2 px-3 text-center bg-[#DA493D] ' id='cyber'>REGISTER</button>
        </div>
        <div className='flex flex-col text-left space-y-5 max-w-[25rem] p-5'>
          <img src={domain} alt="" />
          <p className='text-white' id='cyber'>App devlopment</p>
          <p className='text-left text-[#CAC9C9DE]' id='jmh'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat ac sit interdum coLorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat ac sit interdum commodo convallis sit orci. Leo, et id duis luctus.mmodo convallis .</p>
          <button type='submit' className='text-white max-w-[200px] py-2 px-3 text-center bg-[#DA493D] ' id='cyber'>REGISTER</button>
        </div>
      </div> */}
      <div className='App'>
      <Carousel showDots={false} responsive={responsive} beforeChange={handleBeforeSlideChange}>
        {product}
      </Carousel>
      </div>

      {/* <div className='md:mt-20   mx-10 md:mx-20'> */}
      <div className='md:mt-20 mx-10 md:mx-20'>
        <div className='border-b-2 border-[#CAC9C9]/87  w-auto'></div>
      </div>

      <div className='flex flex-col md:space-y-10 mx-5 mt-10 md:mt-0 md:p-20 md:items-left'>
        <p id='cyber' className='text-[#B6B6B6] text-lg md:text-5xl   '>WHY SHOULD YOU</p>
        <p id='cyber' className='text-white text-lg md:text-[102.985px]  '>PARTICIPATE</p>
      </div>

      <div className='md:mt- md:mb-20  mx-5 md:mx-20'>
        <div className='border-b-2 border-[#CAC9C9]/87  w-auto'></div>
      </div>

      <div className='grid grid-rows-3 grid-cols-none space-y-5 md:grid-cols-3 md:grid-rows-none mx-5 mt-10 md:mt-0 md:mx-[7rem] gap-10'>

        <div className='max-w-[400px] flex flex-col space-y-3 md:space-y-10'>
          <p id='cyber' className='text-white text-sm md:text-xl mt-5 text-center'>CERTIFICATE</p>
          <p className='text-[#CAC9C9] text-xs md:text-lg text-justify ' id='jmh'>We offer certificates to acknowledge your valuable contributions and skills acquired during your time with us. Our certificates testify to your dedication and are a valuable addition to your professional portfolio.</p>
        </div>
        <div className='max-w-[400px] flex flex-col space-y-3 md:space-y-10'>
          <p id='cyber' className='text-white text-sm md:text-xl text-center'>SKILL DEVELOPMENT</p>
          <p className='text-[#CAC9C9] text-xs md:text-lg text-justify' id='jmh'>Throughout your tenure with us, you'll explore strengths, overcome challenges, and refine your abilities. This experience shapes your professional journey and empowers personal growth, preparing you for excellence in future endeavors.</p>
        </div>
        <div className='max-w-[400px] flex flex-col space-y-3 md:space-y-10'>
          <p id='cyber' className='text-white text-sm md:text-xl text-center'>RESUME ENHANCEMENT</p>
          <p className='text-[#CAC9C9] text-xs md:text-lg text-justify' id='jmh'>We provide students opportunities for practical experience, enriching their resumes and bolstering their qualifications. Listing these internships demonstrates candidates' commitment to real-world skill acquisition, increasing appeal to potential employers.</p>
        </div>

      </div>

    </div>
  )
}

export default Description





