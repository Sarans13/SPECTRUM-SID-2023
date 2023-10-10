import React, { useState } from 'react'
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../../firebase";
import avatar from '../../images/Avatars Default.png'
import './Dash.css'
import Footer from '../../components/footer/Footer'
import WestOutlinedIcon from '@mui/icons-material/WestOutlined';
import { NavLink } from 'react-router-dom';
const UserDashboard = (props) => {
  const [Task1Link, setTask1Link] = useState("");
  const [Task2Link, setTask2Link] = useState("");
  const [Task3Link, setTask3Link] = useState("");
  const comment1ForTask1 = props.Comments1;
  const comment2ForTask2 = props.Comments2;
  const comment3ForTask3 = props.Comments3;

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
    const dataRef = doc(db, "Students", props.email);
    await updateDoc(dataRef, {
      task2Link: Task2Link,
    });
    alert("Task Submitted");
  }

  const handleTask3Submit = async (e) => {
    e.preventDefault();
    const dataRef = doc(db, "Students", props.email);
    await updateDoc(dataRef, {
      task3Link: Task3Link,
    });
    alert("Task Submitted");
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
        </div>
      </div>
      <div className=' py-20 md:py-40 mx-5' id='cyber'>
        <div className='grid grids-rows-3 gap-y-5 md:grid-cols-3 text-white  md:gap-y-0 md:gap-x-5'>
          <div id='card' className='flex flex-col items-center mx-auto w-[20rem] text-lg  border-2 space-y-5 md:space-y-10 md:w-auto border-white text-center px-[1rem] py-10'>
            <p>Task 1</p>
            <p className=' text-xs md:text-sm pb-10' id='jmh'>{props.task1}</p>
            <button type='button' className='bg-transparent w-[15rem] px-2 py-2  text-sm md:font-normal md:w-[25.5rem] border-white border-4 md:py-3 md:px-24'><a href={props.Url1} target="_blank" rel="noopener noreferrer">View Assignment</a></button>
            <form onSubmit={handleTask1Submit}>
              <input type="text" placeholder='Submit Here' value={Task1Link} onChange={handleOnChangeTask1} className='text-white text-center w-[15rem] md:w-[25.5rem]  p-2 border-4 mb-4 border-white bg-transparent' disabled/>
              <button type='submit' className='text-white w-[15rem] px-2 py-2 border-2 md:py-3 md:w-[25.5rem] bg-[#DA493D] border-[#DA493D]' >Submit</button>
            </form>
            <p className='bg-transparent md:font-normal md:w-[25.5rem] md:py-1 border-4' id='jmh'>
              {comment1ForTask1 ? comment1ForTask1 : "We wish you all the best"}
            </p>
          </div>
          <div id='card' className='flex flex-col items-center mx-auto w-[20rem] text-lg  border-2 space-y-5 md:space-y-10 md:w-auto border-white text-center px-[1rem] py-10'>
            <p>Task 2</p>
            <p className=' text-xs md:text-sm pb-10' id='jmh'>{props.task2}</p>
            <button type='button' className='bg-transparent w-[15rem] px-2 py-2  text-sm md:font-normal md:w-[25.5rem] border-white border-4 md:py-3 md:px-24'> <a href={props.Url2} target="_blank" rel="noopener noreferrer">View Assignment</a></button>
            <form onSubmit={handleTask2Submit}>
              <input type="text" placeholder='Submit Here' value={Task2Link} onChange={handleOnChangeTask2} className='text-white text-center w-[15rem] md:w-[25.5rem]  p-2 border-4 mb-4 border-white bg-transparent' disabled />
              <button type='submit' className='text-white w-[15rem] px-2 py-2 border-2 md:py-3 md:w-[25.5rem] bg-[#DA493D] border-[#DA493D]' disabled>Submit</button>
            </form>
            <p className='bg-transparent md:font-normal md:w-[25.5rem] md:py-1 border-4' id='jmh'>
              {comment2ForTask2 ? comment2ForTask2 : "We wish you all the best"}
            </p>
          </div>
          <div id='card' className='flex flex-col items-center mx-auto w-[20rem] text-lg  border-2 space-y-5 md:space-y-10 md:w-auto border-white text-center px-[1rem] py-10'>
            <p>Task 3</p>
            <p className=' text-xs md:text-sm pb-10' id='jmh'>{props.task3}</p>
            <button type='button' className='bg-transparent w-[15rem] px-2 py-2  text-sm md:font-normal md:w-[25.5rem] border-white border-4 md:py-3 md:px-24'> <a href={props.Url3} target="_blank" rel="noopener noreferrer">View Assignment</a></button>
            <form onSubmit={handleTask3Submit}>
              <input type="text" placeholder='Submit Here' value={Task3Link} onChange={handleOnChangeTask3} className='text-white text-center w-[15rem] md:w-[25.5rem]  p-2 border-4 mb-4 border-white bg-transparent' disabled />
              <button type='submit' className='text-white w-[15rem] px-2 py-2 border-2 md:py-3 md:w-[25.5rem] bg-[#DA493D] border-[#DA493D]' disabled>Submit</button>
            </form>
            <p className='bg-transparent md:font-normal md:w-[25.5rem] md:py-1 border-4' id='jmh'>
              {comment3ForTask3 ? comment3ForTask3 : "We wish you all the best"}
            </p>
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