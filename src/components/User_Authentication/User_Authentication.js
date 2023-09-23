import React, { useState } from 'react'
import '../../App.css'
import avatar from '../../images/Avatars Default.png'
const UserDetail = (props) => {
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const imageDataUrl = e.target.result;
        SetUserData({ ...UserData, Screenshot: imageDataUrl });
      };
      reader.readAsDataURL(file);
    }
  };
  
  const [UserData, SetUserData] = useState({
    Name: "",
    Gender: "",
    Email: "",
    Password: "",
    ConfirmPassword: "",
    Domain: "",
    Task1Link: "",
    Task2Link: "",
    Task3Link: "",
    Comments1: "",
    Comments2: "",
    Comments3: "",
    Screenshot: null
  });

  let Name, Value;
  const PostUserData = (event) => {
    Name = event.target.name;
    Value = event.target.value;
    SetUserData({ ...UserData, [Name]: Value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form validation and other checks
    // Create a registration object
    // Call the callback function to export the data to app.js
    // console.log(UserData);
    props.onRegister(UserData);
    alert("WELCOME " + UserData.Name + " login to continue!");
  };
  return (
    <>
      <div className='flex flex-col md:space-y-10 mx-5 py-10 md:mt-0 md:p-20 md:items-left'>
        <p id='cyber' className='text-[#B6B6B6] text-lg md:text-5xl   '>HURRY UP!</p>
        <p id='cyber' className='text-white text-lg md:text-[102.985px]  '>lET'S GET STARTED</p>
      </div>
      <div className='md:mt- mb-20 md:mb-20  mx-5 md:mx-20'>
        <div className='border-b-2 border-[#CAC9C9]/87  w-auto'></div>
      </div>
      <div className='flex flex-col-reverse gap-y-20 md:flex-row'>
        <form className='flex flex-col space-y-5 mx-10 md:mx-0 md:space-y-10  md:p-20  items-left  md:w-[40rem]' method='POST' onSubmit={handleSubmit}>
          <input type="text" placeholder='Name' name='Name' value={UserData.Name} onChange={PostUserData} className='text-white p-2 border-2  border-[#B6B6B6] bg-transparent' required />
          <input type="text" placeholder='Gender' name='Gender' value={UserData.Gender} onChange={PostUserData} className='text-white p-2 border-2  border-[#B6B6B6] bg-transparent' required />
          <input type="email" placeholder='E mail' name='Email' value={UserData.Email} onChange={PostUserData} className='text-white p-2 border-2  border-[#B6B6B6] bg-transparent' required />
          <input type="password" placeholder='Password' name='Password' value={UserData.Password} onChange={PostUserData} className='text-white p-2 border-2  border-[#B6B6B6] bg-transparent' required />
          <input type="password" placeholder='Confirm Password' name='ConfirmPassword' value={UserData.ConfirmPassword} onChange={PostUserData} className='text-white p-2 border-2  border-[#B6B6B6] bg-transparent' required />
          <select value={UserData.Domain} name='Domain' onChange={PostUserData} className='text-[#B6B6B6] p-2 border-2  border-[#B6B6B6] bg-transparent' required>
            <option value="" disabled selected hidden>Choose a Domain</option>
            <option className='text-black p-2 border-2  border-[#B6B6B6] bg-grey'>WEB DEVELOPMENT</option>
            <option className='text-black p-2 border-2  border-[#B6B6B6] bg-grey'>APP DEVELOPMENT</option>
            <option className='text-black p-2 border-2  border-[#B6B6B6] bg-grey'>AI/ML</option>
            <option className='text-black p-2 border-2  border-[#B6B6B6] bg-grey'>ILLUSTRATION</option>
            <option className='text-black p-2 border-2  border-[#B6B6B6] bg-grey'>UI/UX</option>
            <option className='text-black p-2 border-2  border-[#B6B6B6] bg-grey'>VIDEO EDITING</option>
            <option className='text-black p-2 border-2  border-[#B6B6B6] bg-grey'>MULTISIM</option>
            <option className='text-black p-2 border-2  border-[#B6B6B6] bg-grey'>IOTs</option>
            <option className='text-black p-2 border-2  border-[#B6B6B6] bg-grey'>EMBEDDED SYSTEM SOFTWARE</option>
          </select>
          <label className='text-justify text-white border-2 p-2 border-[#B6B6B6]'>Embark on a journey of creative learning like never before. All for just ₹49/- only. See you soon! UPI-ID: <span className='font-extrabold'>luciasam282@oksbi</span></label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="text-white p-2 border-2 border-[#B6B6B6] bg-transparent"
            required
          />
          <div>
            <button id='cyber' className='border border-[#DA493D] px-4 py-2 text-white md:font-[400] mb-4 md:mb-0 md:py-2 md:px-[40.0246px] hover:bg-[#531e1a] bg-[#DA493D]' >SUBMIT</button>
          </div>
        </form>
        <img src={avatar} alt="noob" className='h-44  w-44  m-auto bg-zinc-500 px-2 pt-2  md:px-2  md:pt-16 rounded-full border-0 md:w-auto md:h-auto' />
      </div>
    </>

  )
}

export default UserDetail






















// const SubmitData = async (event) => {
//   event.preventDefault();
//   const { Name, Gender, Email, Password, ConfirmPassword, Domain, Task1Link, Task2Link, Task3Link } = UserData;
//   if (Name && Gender && Email && Password && ConfirmPassword && Domain) {
//     const res = await fetch(
//       "https://spectrum-sid-default-rtdb.firebaseio.com/StudentSubmission.json",
//       {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           Name, Gender, Email, Password, ConfirmPassword, Domain, Task1Link, Task2Link, Task3Link
//         }),
//       }
//     )
//     if (res) {
//       alert("Registered");
//     }
//   } else {
//     alert("plz fill the data");
//   }
// };