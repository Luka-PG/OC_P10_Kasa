import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import "../styles/components/carroussel.scss"

    //component de carroussel
const Carroussel = ({ data }) => {

    const { id } = useParams();
    const filteredLogements = data.filter((logement) => logement.id === id);

    const [currentSlide, setCurrentSlide] = useState(0);

        //affichage du nombre total d'images et des boutons du carroussel
    const totalSlides = filteredLogements[0].pictures.length;
        // affichage des boutons du carroussel si il y à plus d'une image dans le carroussel
    const showCounterButtons = totalSlides > 1;

        // affichage des boutons du carroussel en fonctions du nombres d'images du logement 
    const nextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % totalSlides);
    };
    const prevSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide - 1 + totalSlides) % totalSlides);
    };

    return (
        <div className="carrouselContainer">
            {showCounterButtons && (
                <div className="carrouselCounter">
                    {currentSlide + 1}/{totalSlides}
                </div>
            )}
            <div key={filteredLogements[0].id} className="carrouselSlide">
                {showCounterButtons && (
                    <button
                        className="carrouselButton carrouselPrev"
                        onClick={prevSlide}
                        alt="Précédente"
                    ></button>
                )}
                <div className="carrouselImageContainer">
                    <img
                        src={filteredLogements[0].pictures[currentSlide]}
                        alt=""
                        className="carrouselImage"
                    />
                </div>
                {showCounterButtons && (
                    <button
                        className="carrouselButton carrouselNext"
                        onClick={nextSlide}
                    ></button>
                )}
            </div>
        </div>
    );
};

export default Carroussel;
