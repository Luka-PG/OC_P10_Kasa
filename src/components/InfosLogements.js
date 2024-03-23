import React from 'react';
import { useParams } from 'react-router-dom';
import Collapse from "../components/Collapse";
import generateStars from './stars';

    //components d'affichage des infos des logements
const InfosLogement = ({ data }) => {
        //on vient chercher l'id dans l'url
    const { id } = useParams();
        //comparaison de l'id de l'url et les id du fichier json pour trouver le logement correspondant
    const filteredLogements = data.filter((logement) => logement.id === id);

    return (
        <>
            {filteredLogements.map((logement) => (

                <div className="containerInfosCollapse" key={logement.id}>
                    <div className="containerInfos">
                        <div className="containerTitleLocationTag">
                            <h2>{logement.title}</h2>
                            <p>{logement.location}</p>
                            <ul>
                                {logement.tags.map((tag, index) => (
                                    <li key={`${logement.id}_tag_${index}`}>
                                        {tag}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="containerRatingHost">
                            <div className="host">
                                <p>{logement.host.name}</p>
                                <img src={logement.host.picture} alt={logement.host.name}/>
                            </div>
                            <div className="rating">
                                <div className="stars">
                                    {generateStars(logement.rating)}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="containerCollapseLogement">
                        <Collapse title="description">
                            <p>{logement.description}</p>
                        </Collapse>

                        <Collapse title="equipements">
                            {logement.equipments.map(
                                (equipment, equipIndex) => (
                                    <li key={`${logement.id}_equipment_${equipIndex}`}>
                                        {equipment}
                                    </li>
                            ))}
                        </Collapse>
                    </div>
                </div>
            ))}
        </>
    );
};

export default InfosLogement;
