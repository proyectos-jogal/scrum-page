// Ejecuta con npm start

import React from "react";
import Navbar from "./components/Navbar";
import Section from "./components/Section"; // Asegúrate de que este import sea correcto
import Footer from "./components/Footer";
import "./App.css";

const App = () => {
  return (
    <div>
      <Navbar />
      <div className="container">
        <Section
          align="left"
          title="Roles SCRUM"
          text={
            <>
              <p>
                Los Roles en Scrum son responsabilidades definidas dentro del
                equipo que trabajan juntos para entregar un Producto.
              </p>
              <p>Los tres roles principales son:</p>
              <ol>
                <li>Product Owner</li>
                <li>Scrum Master</li>
                <li>Equipo de Desarrollo</li>
              </ol>
            </>
          }
          image="/images/roles.jpeg"
          imageStyle={{ width: "300px", height: "200px" }}
        />
        <Section
          align="right"
          title="Artefactos SCRUM"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex."
          image="/images/artefactos.jpeg"
          imageStyle={{ width: "300px", height: "200px" }}
        />
        <Section
          align="left"
          title="Ceremonias SCRUM"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex."
          image="/images/ceremonias.jpeg"
          imageStyle={{ width: "300px", height: "200px" }}
        />
      </div>
      <Footer />
    </div>
  );
};

export default App;
