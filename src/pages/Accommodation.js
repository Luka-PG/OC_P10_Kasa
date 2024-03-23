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

    //check si l'id de l'url correspond au url dans le fichier json
    const checkExistingId = logements.find(logement => logement.id === id);
    console.log(checkExistingId)

    //si le check renvoi une valeur undefined alors page erreur sinon la page du logement choisi s'affiche
    if(checkExistingId === undefined){
       return <Navigate to='/Error'  />
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