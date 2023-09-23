import React, { useRef } from 'react';
import { db } from "../../firebase";
import {
  setDoc,
  doc
} from "firebase/firestore";
import UserDetail from '../../components/User_Authentication/User_Authentication'
import Hero from '../../components/content/Hero'
import Middle from '../../components/content/Middle'
import Footer from '../../components/footer/Footer'
import Description from '../../components/content/Description'
import Overview from '../../components/content/Overview'


const Home = ({ fromHome }) => {
  const handleRegister = async (UserData) => {
    const usersCollectionRef = doc(db, "Students", UserData.Email);
    await setDoc(usersCollectionRef, {
      name: UserData.Name,
      Gender: UserData.Gender,
      email: UserData.Email,
      password: UserData.Password,
      ConfirmPassword: UserData.ConfirmPassword,
      Domain: UserData.Domain,
      Screenshot: UserData.Screenshot,
      task1Link: "",
      task2Link: "",
      task3Link: "",
      Comments1: "",
      Comments2: "",
      Comments3: ""
    });
  }
  const handleFromHero = (userData) => {
    fromHome(userData);
  }
  return (
    <>
      <Hero outputForAppJs={handleFromHero} />
      <Middle />
      <div id="descriptionSection">
        <Description />
      </div>
      <Overview />
      <UserDetail onRegister={handleRegister} />
      <Footer />
    </>
  )
}
export default Home