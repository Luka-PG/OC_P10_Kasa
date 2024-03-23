import React from 'react';
import logements from '../assets/data/logements.json';
import { Link } from 'react-router-dom';

  //component d'affichage des cartes de la page d'accueil
const Cards = () => {

  return (
    <>
      {logements.map((logement) => (
        <div key={logement.id} className='card'>
          <Link to={`/Accommodation/${logement.id}`}>
          <img src={logement.cover} alt={logement.title} />
          <div className="overlay">
          <h3>{logement.title}</h3>
          </div>
          </Link>
        </div>
      ))}
    </>
  );
};

export default Cards;
