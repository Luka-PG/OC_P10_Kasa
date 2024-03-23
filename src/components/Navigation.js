import React from 'react';
import { NavLink } from "react-router-dom";

    //components de navigation qui s'affiche sur toute les pages
const Navigation = () => {
    return (
        <div className='navigation'>
            <ul>
                <NavLink to="/" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                    <li>Accueil</li>
                </NavLink>
                <NavLink to="/about" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                    <li>A Propos</li>
                </NavLink>
            </ul>
        </div>
    );
};

export default Navigation;