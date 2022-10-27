import React from "react";
import airlines from "../airlines.json";
import '../styles/navbar.css'

const Navbar = ({ changeOption }) => {
  return (
    <nav className="nav">
      <div className="logo">
        <h1>AIRLINE</h1>
      </div>

      <div className="container-options">
        <ul className="options">
          <li  onClick={() => changeOption(airlines[0].name)}>
            {airlines[0].name}
          </li>
          <li onClick={() => changeOption(airlines[1].name)}>
            {airlines[1].name}
          </li>
          <li onClick={() => changeOption(airlines[2].name)}>
            {airlines[2].name}
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
