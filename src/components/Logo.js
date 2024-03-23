import React from 'react';
import logo from '../assets/img/Logokasa.png';
import { NavLink } from "react-router-dom";

  //component qui contient le logo avec un lien vers la page d'accueill qui s'affiche sur toute les pages
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