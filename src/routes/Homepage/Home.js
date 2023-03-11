import React from 'react'
import UserDetail from '../../components/User_Authentication/User_Authentication'
import Hero from '../../components/content/Hero'
import Middle from '../../components/content/Middle'
import Footer from '../../components/footer/Footer'
import Description from '../../components/content/Description'
import Overview from '../../components/content/Overview'


const Home = () => {
  return (
    <>
    <Hero/>
    <Middle/>
    <Description/>
    <Overview/>
    <UserDetail/>
    <Footer/>
    </>
  )
}

export default Home