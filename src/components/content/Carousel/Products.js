import React, { useState } from "react";
import { NavLink } from 'react-router-dom';

export default function Product(props) {
  const [showFullDescription, setShowFullDescription] = useState(false);

  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

  return (
    <div className="card">
      <img className="product--image mb-5" src={props.url} alt="product" />
      <h2 id="cyber">{props.name}</h2>
      <p className="description mt-5" id="jmh">
        {showFullDescription
          ? props.description
          : `${props.description.slice(0, 104)}...`}
          &nbsp;
          {!showFullDescription ? (
          <span className="read-more underline cursor-pointer" onClick={toggleDescription} style={{ color: "#DA493D" }}>
            Read More
          </span>
        ) : (
          <div className="read-less underline cursor-pointer" onClick={toggleDescription} style={{ color: "#DA493D" }}>
            Read Less
          </div>)}
      </p>
      <p>
        <button className="mt-5">
          <NavLink to={'/register'} className='text-white h-12' id='cyber'>
            REGISTER
          </NavLink>
        </button>
      </p>
    </div>
  );
}
