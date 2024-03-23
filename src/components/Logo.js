import React from 'react';
import logo from '../assets/img/Logokasa.png';
import { NavLink } from "react-router-dom";

const Logo = () => {
  return (
    <>
    <NavLink to="/" className='logo'>
      <img src={logo} alt="Logo Kasa" />
    </NavLink>
    </>
  );
};

export default Logo;