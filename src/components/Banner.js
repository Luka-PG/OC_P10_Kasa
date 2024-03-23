import React from 'react';

    //component d'affichage de la bannière de la page d'accueil et de la page "about"
const Banner = ({src, alt, children}) => {
    return (
        <>
            <section className='banner'>
                <img src={src} alt={alt} />
                {children}
            </section>
        </>
    );
};

export default Banner;
