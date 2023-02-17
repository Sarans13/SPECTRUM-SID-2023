import React from 'react'
import UserDetail from '../../components/User_Authentication/User_Authentication'
import Hero from '../../Hero'
import Middle from '../../Middle'
import Footer from '../../components/footer/Footer'


const Home = () => {
  return (
    <>
    <Hero/>
    <Middle/>
    <UserDetail/>
    <Footer/>
    </>
  )
}

export default Home