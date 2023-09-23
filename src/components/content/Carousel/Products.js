import React from "react";
import { NavLink } from 'react-router-dom'

export default function Product(props) {
  return (
    <div className="card">
      <img className="product--image mb-5" src={props.url} alt="product" />
      <h2 id="cyber">{props.name}</h2>
      <p className="description mt-5" id="jmh">{props.description}</p>
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
