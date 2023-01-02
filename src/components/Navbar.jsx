/** @format */

import { Cancel, Menu } from "@material-ui/icons";
import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const handleClick =()=>{
        setOpen(!open)
    }
  return (
    <nav>
      <div className="logo">
        <a href="/">Logo</a>
      </div>

      <div className="icons" onClick={handleClick}>
        {
            open ? <Cancel/> : <Menu/>
        }
       
      </div>
      
      <ul className= {`${open ? "nav-links active" : "nav-links"}`}>
        <li className="nav-link">
          <a href="/">Home</a>
        </li>
        <li className="nav-link">
          <a href="#">Contact</a>
        </li>
        <li className="nav-link">
          <a href="#">About</a>
        </li>
        <li className="nav-link">
          <a href="#"> Blog</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
