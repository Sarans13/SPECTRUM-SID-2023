import React from 'react'
import UserDetail from '../../components/User_Authentication/User_Authentication'
import Hero from '../../Hero'
import Middle from '../../Middle'
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