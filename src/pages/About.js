import React from "react";
import Logo from "../components/Logo";
import Navigation from "../components/Navigation";
import Banner from "../components/Banner";
import backgroundImageAbout from "../assets/img/backgroundAbout.png";
import Footer from "../components/Footer";
import Collapse from "../components/Collapse";

  //page à propos
const About = () => {

  return (
    <>
      <header>
        <Logo />
        <Navigation />
      </header>

      <main>
        <Banner src={backgroundImageAbout} alt="bannière a propos" />

        <section className="collapse-container">

          <Collapse title="Fiabilité">
            <p>Les annonces postées sur Kasa garantissent une fiabilité totale. Les
            photos sont conformes aux logements, et toutes les informations sont
            régulièrement vérifiées par nos équipes.</p>
          </Collapse>

          <Collapse title="Respect">
            <p>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout
            comportement discriminatoire ou de perturbation du voisinage
            entraînera une exclusion de notre plateforme.</p>
          </Collapse>

          <Collapse title="Service">
            <p>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout
            comportement discriminatoire ou de perturbation du voisinage
            entraînera une exclusion de notre plateforme.</p>
          </Collapse>

          <Collapse title="Sécurité">
            <p>La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que
            pour les voyageurs, chaque logement correspond aux critères de
            sécurité établis par nos services. En laissant une note aussi bien à
            l'hôte qu'au locataire, cela permet à nos équipes de vérifier que
            les standards sont bien respectés. Nous organisons également des
            ateliers sur la sécurité domestique pour nos hôtes.</p>
          </Collapse>

        </section>
      </main>

      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default About;
