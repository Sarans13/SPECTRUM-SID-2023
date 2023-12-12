import React, { useState } from 'react'
// import { doc, updateDoc } from "firebase/firestore";
// import { db } from "../../firebase";
import avatar from '../../images/Avatars Default.png'
import './Dash.css'
import Footer from '../../components/footer/Footer'
import WestOutlinedIcon from '@mui/icons-material/WestOutlined';
import { NavLink } from 'react-router-dom';
const UserDashboard = (props) => {
  const [Task1Link, setTask1Link] = useState("");
  const [Task2Link, setTask2Link] = useState("");
  const [Task3Link, setTask3Link] = useState("");
  // const comment1ForTask1 = props.Comments1;
  // const comment2ForTask2 = props.Comments2;
  // const comment3ForTask3 = props.Comments3;

  const Round1_Rejected_emails = [
    '13.abhishekdora@gmail.com',
    'Riteshkumarjena70@gmail.com',
    'abhijeetpadhi123@gmail.com',
    'abhisekprasadmallick@gmail.com',
    'abinashdash210@gmail.com',
    'adityapati2004@gmail.com',
    'ajiteshkrishna70@gmail.com',
    'akash.sahoo12356@gmail.com',
    'akshaykumarsahoo2002@gmail.com',
    'ananyaglory24@gmail.com',
    'ananyaray.w@gmail.com',
    'ananyasahani1229@gmail.com',
    'anishanaik2009@gmail.com',
    'anshumanish04@gmail.com',
    'arkaabhilash21@gmail.com',
    'arpitab2024@gmail.com',
    'arpitapattnaik1110@gmail.com',
    'atrayeejha@gmail.com',
    'aurosritaswain@gmail.com',
    'ayaneshdash8@gmail.com',
    'ayushapattnaik26@gmail.com',
    'bablybb2004@gmail.com',
    'barikrashmita111@gmail.com',
    'bastabamlan@gmail.com',
    'beheraashish900@gmail.com',
    'ch.prernasubudhi@gmail.com',
    'chinmayeepatra805@gmail.com',
    'dasabhinab2007@gmail.com',
    'dassatish025@gmail.com',
    'dassmohit12@gmail.com',
    'deepakbehera8998@gmail.com',
    'dhrivesh46@gmail.com',
    'gayatri.n2019@gmail.com',
    'gopalcriro123@gmail.com',
    'gurujyotisahu@gmail.com',
    'iamayushi16mohapatra@gmail.com',
    'iemsalpana10b01@gmail.com',
    'ishani.tripathy1602@gmail.com',
    'jeebanjyotii07@gmail.com',
    'jjitu2802@gmail.com',
    'karbidisha1979@gmail.com',
    'lagnajita2003@gmail.com',
    'lakshsatapathy@gmail.com',
    'lgreeshmasree123@gmail.com',
    'lilimachoudhury0@gmail.com',
    'mahapatrasweta25@gmail.com',
    'manaskumarmishra2003@gmail.com',
    'mehekdev123@gmail.com',
    'mohantyaditya32@gmail.com',
    'mohantyaurosampad@gmail.com',
    'mundagayatri06@gmail.com',
    'navneetapattnaik03@gmail.com',
    'patrachinmayee10@gmail.com',
    'pinkudash16@gmail.com',
    'piviwi3494@fesgrid.com',
    'prateekm1000@gmail.com',
    'pratikaryan3300@gmail.com',
    'princepriyam0671@gmail.com',
    'prionapriti004@gmail.com',
    'priyadarshnipadhy1872@gmail.com',
    'rajatsekharonline@gmail.com',
    'rakeshchoudhury492@gmail.com',
    'renukatripathy255@gmail.com',
    'riteshkumarjena70@gmail.com',
    'ritishnasunu@gmail.com',
    'rockstargamers647@gmail.com',
    'rudrakshparida.99@gmail.com',
    'sadarockstar6@gmail.com',
    'sahoovivek809@gmail.com',
    'saialish15@gmail.com',
    'sandipanbiswalbbsr@gmail.com',
    'sanketbarik24@gmail.com',
    'sarojnyk2023@gmail.com',
    'satyaprangya0@gmail.com',
    'sayanshreemohapatra51@gmail.com',
    'sayonikag@gmail.com',
    'shibaniprity@gmail.com',
    'shreeyanshimishra30@gmail.com',
    'shreyashp088@gmail.com',
    'shubhabratadash687@gmail.com',
    'sipam2701@gmail.com',
    'sizzlingrainy@gmail.com',
    'snigdhadeep95@gmail.com',
    'sonalipalo2004@gmail.com',
    'souravsahoo924@gmail.com',
    'sovansekharsenapati2005@gmail.com',
    'subham.majumdar727@gmail.com',
    'subham2002gupta@gmail.com',
    'sulagnashatarupa@gmail.com',
    'suman43soumesh@gmail.com',
    'suryakanta2k05@gmail.com',
    'sushildash447@gmail.com',
    'sushmitasoren685@gmail.com',
    'swarn6622kumar@gmail.com',
    'swarnkumar.101@gmail.com',
    'swostikmohapatra2003@gmail.com',
    'text2hk@gmail.com',
    'theenandakishore@gmail.com',
    'yasikaagarwal111@gmail.com',
    'sample2@gmail.com'
  ]

  const Round2_Rejected_emails = [
    'aadilsk0403@gmail.com',
    'abhisekprasadmallick@gmail.com',
    'adyashreemishra05@gmail.com',
    'ajiteshkrishna70@gmail.com',
    'arpitab2024@gmail.com',
    'arpitapattnaik1110@gmail.com',
    'ashirvadm04@gmail.com',
    'beheraashish900@gmail.com',
    'bsrinibas2003@gmail.com',
    'dasabhinab2007@gmail.com',
    'haimabatibehera65@gmail.com',
    'iamayushi16mohapatra@gmail.com',
    'ishani.tripathy1602@gmail.com',
    'ivinaykumar2003@gmail.com',
    'krishnapriyakaran42@gmail.com',
    'lgreeshmasree123@gmail.com',
    'lilimachoudhury0@gmail.com',
    'mahapatrasweta25@gmail.com',
    'manish.sahoo2003@gmail.com',
    'mohantyaditya32@gmail.com',
    'mohantyaurosampad@gmail.com',
    'navneetapattnaik03@gmail.com',
    'piviwi3494@fesgrid.com',
    'princepriyam0671@gmail.com',
    'priyankamallik025@gmail.com',
    'renukatripathy255@gmail.com',
    'ritishnasunu@gmail.com',
    'rkjrajesh2004@gmail.com',
    'atrayeejha@gmail.com',
    'ayaneshdash8@gmail.com',
    'chinmayeepatra805@gmail.com',
    'lagnajita2003@gmail.com',
    'nayakgold7@gmail.com',
    'pinkudash16@gmail.com',
    'sayonikag@gmail.com',
    'swarnkumar.101@gmail.com',
    'anuragbhunya1@gmail.com',
    'patrachinmayee10@gmail.com',
    'abhijeetpadhi123@gmail.com',
    'anishanaik2009@gmail.com',
    'ch.prernasubudhi@gmail.com',
    'iemsalpana10b01@gmail.com',
    'mundagayatri06@gmail.com',
    'priyadarshnipadhy1872@gmail.com',
    'rajatsekharonline@gmail.com',
    'arkaabhilash21@gmail.com',
    'dassmohit12@gmail.com',
    'ankita.anuradha5@gmail.com',
    'karbidisha1979@gmail.com',
    'mahanta.biswajeet2003@gmail.com',
    'oraklepuhan88@gmail.com',
    'rockstargamers647@gmail.com',
    'rutvee.mohanty@gmail.com',
    '13.abhishekdora@gmail.com',
    'lakshsatapathy@gmail.com',
    'Riteshkumarjena70@gmail.com',
    'abinashdash210@gmail.com',
    'adityapati2004@gmail.com',
    'akash.sahoo12356@gmail.com',
    'akshaykumarsahoo2002@gmail.com',
    'amrita.chinni2005@gmail.com',
    'ananyaglory24@gmail.com',
    'ananyaray.w@gmail.com',
    'ananyasahani1229@gmail.com',
    'aneshdwibedi115@gmail.com',
    'ankitasahu.200129@gmail.com',
    'ankitasunani970@gmail.com',
    'anshumanish04@gmail.com',
    'arushimallickisha@gmail.com',
    'aurosritaswain@gmail.com',
    'ayushapattnaik26@gmail.com',
    'bablybb2004@gmail.com',
    'barikrashmita111@gmail.com',
    'bastabamlan@gmail.com',
    'dassatish025@gmail.com',
    'deepakbehera8998@gmail.com',
    'dhrivesh46@gmail.com',
    'gayatri.n2019@gmail.com',
    'gopalcriro123@gmail.com',
    'gurujyotisahu@gmail.com',
    'ipsitamahapatro1234@gmail.com',
    'jeebanjyotii07@gmail.com',
    'jjitu2802@gmail.com',
    'krishnakumarkhuntia3008@gmail.com',
    'lipsitamahapatro1234@gmail.com',
    'manaskumarmishra2003@gmail.com',
    'mehekdev123@gmail.com',
    'milanayak33@gmail.com',
    'nayakrasmiranjan167@gmail.com',
    'nilanjana.m3003@gmail.com',
    'prateekm1000@gmail.com',
    'pratikaryan3300@gmail.com',
    'prionapriti004@gmail.com',
    'rajalaxmimohanty2020@gmail.com',
    'rakeshchoudhury492@gmail.com',
    'riteshkumarjena70@gmail.com',
    'rudrakshparida.99@gmail.com',
    'rudraprasadsahani76@gmail.com',
    'sadarockstar6@gmail.com',
    'sahoovivek809@gmail.com',
    'saialish15@gmail.com',
    'sample3@gmail.com'
  ];


  const handleOnChangeTask1 = (e) => {
    setTask1Link(e.target.value);
  }

  const handleOnChangeTask2 = (e) => {
    setTask2Link(e.target.value);
  }

  const handleOnChangeTask3 = (e) => {
    setTask3Link(e.target.value);
  }

  const handleTask1Submit = async (e) => {
    e.preventDefault();
    // const dataRef = doc(db, "Students", props.email);
    // await updateDoc(dataRef, {
    //   task1Link: Task1Link,
    // });
    alert("Submissions Closed");
  }

  const handleTask2Submit = async (e) => {
    e.preventDefault();

    if (Round1_Rejected_emails.includes(props.email)) {
      alert('you are not eligible for this round');
      return;
    }

    // const dataRef = doc(db, "Students", props.email);
    // await updateDoc(dataRef, {
    //   task2Link: Task2Link,
    // });
    // alert("Task Submitted");
    alert("Submissions Closed");

  }

  const handleTask3Submit = async (e) => {
    e.preventDefault();

    // if (Round1_Rejected_emails.includes(props.email) || Round2_Rejected_emails.includes(props.email)) {
    //   alert('you are not eligible for this round');
    //   return;
    // }
    // const dataRef = doc(db, "Students", props.email);
    // await updateDoc(dataRef, {
    //   task3Link: Task3Link,
    // });
    // alert("Task Submitted");
    alert("Submissions Closed")
  }


  return (
    <div>
      <div className='flex flex-row justify-between p-10 pb-0 bg-black bg-opacity-25 items-center text-white'>
        <NavLink to={'/'}><WestOutlinedIcon fontSize='large' /></NavLink>
        <NavLink to={'/'}><button id='cyber' className='text-sm  md:text-xl hover:text-[#DA493D] transition ease-in-out   hover:translate-y-1 hover:scale-110 duration-300'>SIGN OUT</button></NavLink>
      </div>
      <div className=' pt-10 md:pt-44 pb-20 border-b-2 border-[#908d8d] bg-black bg-opacity-25' >
        <div className='flex flex-col items-center px-auto space-y-4' id='cyber'>
          <img src={avatar} alt="noob" className=']  bg-zinc-600 border-0 rounded-full  pt-10 m-auto w-56 h-56  items-center ' />
          <h3 className='text-center text-white text-3xl '>{props.name}</h3>
          <h2 className=' text-center py-1 px-3  bg-[#5B5F5F] text-[#D9D9D9] max-w-xs'>{props.domain}</h2>
          <h2 className='text-center py-1 px-3 max-w-xs text-[#D9D9D9] bg-[#5B5F5F] mt-1'>
            {Round1_Rejected_emails.includes(props.email) || Round2_Rejected_emails.includes(props.email)
              ? "Sorry, You are not eligible for Task 3"
              : "Thank You For Your Participation. Wait until the results."}
          </h2>

        </div>
      </div>
      <div className=' py-20 md:py-40' id='cyber'>
        <div className='grid grids-rows-3 gap-y-5 md:grid-cols-3 text-white  md:gap-y-0 md:gap-x-5'>
          <div id='card' className='flex flex-col items-center mx-auto w-[20rem] text-lg  border-2 space-y-5 md:space-y-10 md:w-auto border-white text-center px-[1rem] py-10'>
            <p>Task 1</p>
            <p className=' text-xs md:text-sm pb-10' id='jmh'>{props.task1}</p>
            <button type='button' className='bg-transparent w-[15rem] px-2 py-2  text-sm md:font-normal md:w-[25.5rem] border-white border-4 md:py-3 md:px-24'><a href={props.Url1} target="_blank" rel="noopener noreferrer">View Assignment</a></button>
            <form onSubmit={handleTask1Submit}>
              <input type="text" placeholder='Submit Here' value={Task1Link} onChange={handleOnChangeTask1} className='text-white text-center w-[15rem] md:w-[25.5rem]  p-2 border-4 mb-4 border-white bg-transparent' disabled />
              <button type='submit' className='text-white w-[15rem] px-2 py-2 border-2 md:py-3 md:w-[25.5rem] bg-[#DA493D] border-[#DA493D]' >Submit</button>
            </form>
          </div>
          <div id='card' className='flex flex-col items-center mx-auto w-[20rem] text-lg  border-2 space-y-5 md:space-y-10 md:w-auto border-white text-center px-[1rem] py-10'>
            <p>Task 2</p>
            <p className=' text-xs md:text-sm pb-10' id='jmh'>{props.task2}</p>
            <button type='button' className='bg-transparent w-[15rem] px-2 py-2  text-sm md:font-normal md:w-[25.5rem] border-white border-4 md:py-3 md:px-24'> <a href={props.Url2} target="_blank" rel="noopener noreferrer">View Assignment</a></button>
            <form onSubmit={handleTask2Submit}>
              <input type="text" placeholder='Submit Here' value={Task2Link} onChange={handleOnChangeTask2} className='text-white text-center w-[15rem] md:w-[25.5rem]  p-2 border-4 mb-4 border-white bg-transparent' disabled />
              <button type='submit' className='text-white w-[15rem] px-2 py-2 border-2 md:py-3 md:w-[25.5rem] bg-[#DA493D] border-[#DA493D]' >Submit</button>
            </form>
          </div>
          <div id='card' className='flex flex-col items-center mx-auto w-[20rem] text-lg  border-2 space-y-5 md:space-y-10 md:w-auto border-white text-center px-[1rem] py-10'>
            <p>Task 3</p>
            <p className=' text-xs md:text-sm pb-10' id='jmh'>{props.task3}</p>
            <button type='button' className='bg-transparent w-[15rem] px-2 py-2  text-sm md:font-normal md:w-[25.5rem] border-white border-4 md:py-3 md:px-24'> <a href={props.Url3} target="_blank" rel="noopener noreferrer">View Assignment</a></button>
            <form onSubmit={handleTask3Submit}>
              <input type="text" placeholder='Submit Here' value={Task3Link} onChange={handleOnChangeTask3} className='text-white text-center w-[15rem] md:w-[25.5rem]  p-2 border-4 mb-4 border-white bg-transparent'/>
              <button type='submit' className='text-white w-[15rem] px-2 py-2 border-2 md:py-3 md:w-[25.5rem] bg-[#DA493D] border-[#DA493D]' >Submit</button>
            </form>
          </div>

        </div>
      </div>
      <div className='bg-zinc-800'>
        <Footer />
      </div>
    </div>
  )
}

export default UserDashboard