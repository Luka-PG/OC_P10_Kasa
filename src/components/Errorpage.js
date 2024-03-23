import React from 'react';
import Logo from './Logo';
import Navigation from './Navigation';
import Footer from './Footer';
import { Link } from 'react-router-dom';

const Errorpage = () => {
    return (
        <>
            <header>
                <Logo />
                <Navigation />
            </header>

            <main>
                <div className='error-container'>
                    <h1>404</h1>
                    <h3>Oups! La page que vous demandez n'existe pas.</h3>
                    <p><Link to="/">Retourner sur la page d’accueil</Link></p>
                </div>
            </main>

            <footer>
                <Footer />
            </footer>
            
        </>
    );
};

export default Errorpage;