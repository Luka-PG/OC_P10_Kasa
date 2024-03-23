import React from 'react';

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
