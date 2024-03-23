import React from 'react';
import { Navigate , useParams } from 'react-router-dom';
import logements from '../assets/data/logements.json';
import Logo from '../components/Logo';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import Carroussel from '../components/Carroussel';
import InfosLogement from '../components/InfosLogements';

const Accommodation = () => {

    const { id } = useParams();
    const checkExistingId = logements.find(logement => logement.id === id);
    console.log(checkExistingId)

    if(checkExistingId === undefined){
       return <Navigate to='/Errorpage'  />
    } else {
        return (
            <>
                <header>
                    <Logo />
                    <Navigation />
                </header>
                <main>
                    <Carroussel data={logements} />
                    <InfosLogement data={logements} />
                </main>
                <footer>
                    <Footer />
                </footer>
            </>
        );
    };
}
export default Accommodation;