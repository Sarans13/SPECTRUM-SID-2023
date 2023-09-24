import './App.css';
import React, {useState} from 'react';
import { db } from "./firebase";
import {
  setDoc,
  doc
} from "firebase/firestore";
import UserDetail from './components/User_Authentication/User_Authentication';
import { Route,Routes } from 'react-router-dom';
import Home from './routes/Homepage/Home';
import UserDashboard from './routes/Dashboard/UserDashboard';
import ScrolltoTop from './ScrollToTop';

function App() {
  const [Domain, setDomain] = useState("")
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Comments1, setComments1] = useState("");
  const [Comments2, setComments2] = useState("");
  const [Comments3, setComments3] = useState("");
  const [Devtask1, setDevtask1] = useState("");
  const [Devtask2, setDevtask2] = useState("");
  const [Devtask3, setDevtask3] = useState("");
  const [DevUrl1, setDevUrl1] = useState("");
  const [DevUrl2, setDevUrl2] = useState("");
  const [DevUrl3, setDevUrl3] = useState("");

  const handleRegister = async (UserData) =>{
    const usersCollectionRef = doc(db, "Students", UserData.Email);
    console.log(UserData);
    await setDoc(usersCollectionRef, { 
      name: UserData.Name,
      Gender: UserData.Gender,
      email: UserData.Email,
      password: UserData.Password,
      ConfirmPassword: UserData.ConfirmPassword,
      Domain: UserData.Domain,
      task1Link:"",
      task2Link:"",
      task3Link:"",
      Comments1: UserData.Comments1,
      Comments2: UserData.Comments2,
      Comments3: UserData.Comments3,
      Screenshot: UserData.Screenshot,
    });
  }

  const handleFromHome = (userData) => {
    setName(userData.name);
    setDomain(userData.Domain);
    setEmail(userData.email);
    setComments1(userData.Comments1);
    setComments2(userData.Comments2);
    setComments3(userData.Comments3);
    if(userData.Domain === "APP DEVELOPMENT"){
      setDevtask1("Will be uploaded soon..");
      setDevtask2("Will be uploaded soon..");
      setDevtask3("Will be uploaded soon..");
      setDevUrl1("");
      setDevUrl2("");
      setDevUrl3("");
    }

    if(userData.Domain === "AI/ML"){
      setDevtask1("Will be uploaded soon..");
      setDevtask2("Will be uploaded soon..");
      setDevtask3("Will be uploaded soon..");
      setDevUrl1("");
      setDevUrl2("");
      setDevUrl3("");
    }

    if(userData.Domain === "ILLUSTRATION"){
      setDevtask1("Will be uploaded soon..");
      setDevtask2("Will be uploaded soon.."); 
      setDevtask3("Will be uploaded soon..");
      setDevUrl1("");
      setDevUrl2("");
      setDevUrl3("");
    }

    if(userData.Domain === "UI/UX"){
      setDevtask1("Will be uploaded soon..");
      setDevtask2("Will be uploaded soon.."); 
      setDevtask3("Will be uploaded soon..");
      setDevUrl1("");
      setDevUrl2("");
      setDevUrl3("");
    }

    if(userData.Domain === "VIDEO EDITING"){
      setDevtask1("Will be uploaded soon..");
      setDevtask2("Will be uploaded soon.."); 
      setDevtask3("Will be uploaded soon..");
      setDevUrl1("");
      setDevUrl2("");
      setDevUrl3("");
    }

    if(userData.Domain === "MULTISIM"){
      setDevtask1("Will be uploaded soon..");
      setDevtask2("Will be uploaded soon.."); 
      setDevtask3("Will be uploaded soon..");
      setDevUrl1("");
      setDevUrl2("");
      setDevUrl3("");
    }

    if(userData.Domain === "IOTs"){
      setDevtask1("Will be uploaded soon..");
      setDevtask2("Will be uploaded soon.."); 
      setDevtask3("Will be uploaded soon..");
      setDevUrl1("");
      setDevUrl2("");
      setDevUrl3("");
    }

    if(userData.Domain === "EMBEDDED SYSTEM SOFTWARE"){
      setDevtask1("Will be uploaded soon..");
      setDevtask2("Will be uploaded soon.."); 
      setDevtask3("Will be uploaded soon..");
      setDevUrl1("");
      setDevUrl2("");
      setDevUrl3("");
    }

    if(userData.Domain === "WEB DEVELOPMENT"){
      setDevtask1("Will be uploaded soon..");
      setDevtask2("Will be uploaded soon.."); 
      setDevtask3("Will be uploaded soon..");
      setDevUrl1("https://docs.google.com/document/d/11KS8CWHRQbWdeV1ZNG_HfinsLdeH57AAZHNVYM_5b04/edit?usp=drivesdk");
      setDevUrl2("");
      setDevUrl3("");
    }
  }
  
  return (
  <>
  <ScrolltoTop/>
   <Routes>
    <Route path='/' element={<Home fromHome={handleFromHome}/>}/>
    <Route path='/register' element={<UserDetail onRegister={handleRegister}/>}/>
    <Route path='/user' element={<UserDashboard name={Name} domain={Domain} email={Email} task1={Devtask1} task2={Devtask2} task3={Devtask3} Url1={DevUrl1} Url2={DevUrl2} Url3={DevUrl3} Comments1={Comments1}  Comments2={Comments2}  Comments3={Comments3}/>}/>
  </Routes> 
   </>
  );
}

export default App;
