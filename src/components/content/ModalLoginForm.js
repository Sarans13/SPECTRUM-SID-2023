import React, { useState} from 'react';
import 'firebase/auth';
import 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import { db } from "../../firebase";
import {
  getDoc,
  doc
} from "firebase/firestore";
const ModalLoginForm = ({isOpen, onClose, onLogin}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const Navigate = useNavigate();
  const [isCombinationValid, setIsCombinationValid] = useState(false);

  const handleSubmit = async(e) => {
    e.preventDefault();
    const emailQuerySnapshot = await getDoc(doc(db, "Students", email));
    console.log(emailQuerySnapshot.exists());
    console.log(isCombinationValid);
    if (emailQuerySnapshot.exists()){
      const userData = emailQuerySnapshot.data();
      if (userData.password === password) {
        // Password is correct
        setIsCombinationValid(true);
        console.log("Email and password combination is valid");
        // console.log("Document data:", userData);
        onLogin(userData);  
        Navigate('/user');
      }else {
        // Password does not match
        setIsCombinationValid(false);
        alert("Invalid Password! Try Again");
      }
    }else {
      // Email does not exist
      setIsCombinationValid(false);
      alert("Oops! Email not found");
    }
};

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center z-50 ${
        isOpen ? 'visible' : 'hidden'
      }`}
    >
      <div className="fixed inset-0 bg-black opacity-70"></div>
      <div className="bg-black bg-opacity-95 w-96 rounded-lg p-8 shadow-lg relative z-50 border-2">
        <h2 className="text-2xl mb-4 text-white">LOGIN</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-1 text-white">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full border border-gray-300 p-2 rounded"
              value={email}
              onChange={handleEmailChange}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block mb-1 text-white">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full border border-gray-300 p-2 rounded"
              value={password}
              onChange={handlePasswordChange}
            />
          </div>
          <div className="flex justify-end">
            <button
              // type="submit"
              className="bg-[#DA493D] hover:bg-[#531e1a] text-white font-semibold px-4 py-2 rounded"
            >
              Login
            </button>
          </div>
        </form>
        <button
          className="absolute top-7 right-7 text-gray-500 hover:text-gray-700"
          onClick={onClose}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ModalLoginForm;
















 // const handleSubmit = async(e) => {
  //   e.preventDefault();
    // Perform login logic here
    // console.log('Login submitted:', email, password);
     // Close the modal after submission
  //   try {
  //     const response = await fetch('https://spectrum-sid-default-rtdb.firebaseio.com/StudentSubmission.json');
  //     const responseData = await response.json();
  //     if (responseData.success && response.ok) {
        // Successful login
        // Perform the necessary action, such as redirecting to a new page
  //       Navigate('/user');
  //       console.log(email);
  //     } else {
  //       // Login failed
  //       setLoginError(responseData.message);
  //       console.log("theek chalila");
  //     }
  //   } catch (error) {
  //     console.error('Error logging in:', error);
  //     setLoginError('An error occurred during login. Please try again.');
  //   }
  // };
