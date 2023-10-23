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
      setDevtask1("Deadline: 09 oct 2023");
      setDevtask2("Deadline: 20 Oct 2023");
      setDevtask3("Deadline: 03 Nov 2023");
      setDevUrl1("https://docs.google.com/document/d/1-TGLzo_jp8qFqDfAbGhQWBjgAMgcPDNSqf0dt5wp2pc/edit?usp=sharing");
      setDevUrl2("https://docs.google.com/document/d/1sAMoZSThQpPYZAJc8h9xyqMn0ZZIzLMBrAY4mrprTnU/edit?usp=sharing");
      setDevUrl3("https://docs.google.com/document/d/1VckllcnBJUZVturCPZam_BI89KkyKOu4yqdNUSyY-vs/edit?usp=share_link");
    }

    if(userData.Domain === "AI/ML"){
      setDevtask1("Deadline: 09 oct 2023");
      setDevtask2("Deadline: 20 Oct 2023");
      setDevtask3("Deadline: 03 Nov 2023");
      setDevUrl1("https://docs.google.com/document/d/1-mD2GSOxt0o5ugmQ54j5gsd-5l00cxS9/edit?usp=sharing&ouid=103057392790336651380&rtpof=true&sd=true");
      setDevUrl2("https://docs.google.com/document/d/1b7gYS51t4whPa7bKIak0eP7sZ4OlnojLuZEQIXfELd8/edit?usp=sharing");
      setDevUrl3("https://docs.google.com/document/d/1UDzrF0iUr1Lu0YyyklJw5Z4ivR8JMgHHlx_QULtuYrs/edit?usp=share_link");
    }

    if(userData.Domain === "ILLUSTRATION"){
      setDevtask1("Deadline: 09 oct 2023");
      setDevtask2("Deadline: 20 Oct 2023"); 
      setDevtask3("Deadline: 03 Nov 2023");
      setDevUrl1("https://docs.google.com/document/d/1hGAgkS004hxMcSAdwxOHWLoQOYew-xwZQvQ75VT5USY/edit?usp=sharing");
      setDevUrl2("https://docs.google.com/document/d/1RsIZ1WzFuInQT57CeFu_Q-F4R_1m1UIl4SBytzOJpjo/edit?usp=sharing");
      setDevUrl3("https://docs.google.com/document/d/1Gs98Mi5hXMZ5lBaK12ZvC_NeYeAmRUcG52usTDieXHw/edit?usp=share_link");
    }

    if(userData.Domain === "UI/UX"){
      setDevtask1("Deadline: 09 oct 2023");
      setDevtask2("Deadline: 20 Oct 2023"); 
      setDevtask3("Deadline: 03 Nov 2023");
      setDevUrl1("https://docs.google.com/document/d/1xFqqOEltRWvzqFwL9ewuGArYZSMZn-h9jVq_wBNREhM/edit");
      setDevUrl2("https://docs.google.com/document/d/1tptWT3nAneu9-GDkweX_jzrzoF09HGF4zMub7Gcuh34/edit?usp=sharing");
      setDevUrl3("https://docs.google.com/document/d/1ovzsXfwGJ0lHYN-rMDWRaUSPbKb3DgQkHgU_DyQ5qIY/edit?usp=share_link");
    }

    if(userData.Domain === "VIDEO EDITING"){
      setDevtask1("Deadline: 09 oct 2023");
      setDevtask2("Deadline: 20 Oct 2023"); 
      setDevtask3("Deadline: 03 Nov 2023");
      setDevUrl1("https://docs.google.com/document/d/11jXYAv-zcMfXEoU9u4HLgwW7B23Y8sn0Sd064Tn4t7E/edit");
      setDevUrl2("https://docs.google.com/document/d/1CdyUQz_XoS-f9OQKWkxa6Le5pNpxSACSUAVbBLBsiXw/edit?usp=sharing");
      setDevUrl3("https://docs.google.com/document/d/1UmE8aARwNOJmRkdxqD_-0bQ1HXIffMWTTtUKyTWkCpM/edit?usp=share_link");
    }

    if(userData.Domain === "MULTISIM"){
      setDevtask1("Deadline: 09 oct 2023");
      setDevtask2("Deadline: 20 Oct 2023"); 
      setDevtask3("Deadline: 03 Nov 2023");
      setDevUrl1("https://docs.google.com/document/d/14pi17bEPyfIzTbXM2rZ6nAYvrOdDij7ivk7E6xuby7o/edit");
      setDevUrl2("https://docs.google.com/document/d/1bSCTVpKRphBDvV2mVpOmnxgw09SGS72CwFSa3AppSBE/edit?usp=sharing");
      setDevUrl3("https://docs.google.com/document/d/1FJe5EZW6VDE2bxdxK1NdL1-ZXvN5GV5WT9k_qKtqCDM/edit?usp=share_link");
    }

    if(userData.Domain === "IOT's/EMBEDDED SYSTEM"){
      setDevtask1("Deadline: 09 oct 2023");
      setDevtask2("Deadline: 20 Oct 2023"); 
      setDevtask3("Deadline: 03 Nov 2023");
      setDevUrl1("https://docs.google.com/document/d/1-YDML61wHAHyjvyiaDXFR7KZDkxuCjaKF-8G2QJ4uQY/edit?usp=sharing");
      setDevUrl2("https://docs.google.com/document/d/106ODfLPnddmaU51ddybXU4mx58udezjr_ce-Wm9hyAM/edit?usp=sharing");
      setDevUrl3("https://docs.google.com/document/d/1Y_hRm4XDDaWEl3c8ezNVaQNtYwxE9pydNEt9x2tAdos/edit");
    }

    if(userData.Domain === "PLC"){
      setDevtask1("Deadline: 09 oct 2023");
      setDevtask2("Deadline: 20 Oct 2023"); 
      setDevtask3("Deadline: 03 Nov 2023");
      setDevUrl1("https://docs.google.com/document/d/1Ts-io6aMURRupI8mPVQS48D5Y9IAc4F6yXT-q6cThFU/edit?usp=sharing");
      setDevUrl2("https://docs.google.com/document/d/11pBqEOB036_3W05fNQFoecuuupD1MI3Lo3Fmxr1TiPM/edit?usp=sharing");
      setDevUrl3("https://docs.google.com/document/d/1jbDmMLNVyp0_7iyb8DXZOCPoLiUv2u1NQ0j8ai6wO7o/edit?usp=share_link");
    }

    if(userData.Domain === "WEB DEVELOPMENT"){
      setDevtask1("Deadline: 09 oct 2023");
      setDevtask2("Deadline: 20 Oct 2023"); 
      setDevtask3("Deadline: 03 Nov 2023");
      setDevUrl1("https://docs.google.com/document/d/11KS8CWHRQbWdeV1ZNG_HfinsLdeH57AAZHNVYM_5b04/edit?usp=sharing");
      setDevUrl2("https://docs.google.com/document/d/1nYVk7sJ7gN7YEeMhohzjuYY70EW08McYvVmWmFHGdRA/edit?usp=sharing");
      setDevUrl3("https://docs.google.com/document/d/1MSGnGPp_01h4s_x01gOH3crNUywOguX0UqSiB5flpKg/edit?usp=share_link");
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
