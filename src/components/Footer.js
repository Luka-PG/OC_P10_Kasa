import React from 'react';
import logoFooter from '../assets/img/logofooter.png'

    //component d'affichage du footer qui s'affiche sur toute les pages
const Footer = () => {
    return (
        <>
            <img src={logoFooter} alt="Logo Kasa" />
            <p>© 2020 Kasa. All rights reserved</p>
        </>
    );
};

export default Footer;