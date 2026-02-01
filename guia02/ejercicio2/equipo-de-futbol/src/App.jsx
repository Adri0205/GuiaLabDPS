import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

const Equipos = ({ equipos }) => {
  return (
    <div className="containerList">
      <h2 className="tittle">Equipos de Fútbol</h2>
      {equipos.map((equipo) => (
        <div key={equipo.id}>
          <h3 className="nameClub">{equipo.nombre}</h3>
          <ul>
            {equipo.plantilla.map((jugador) => (
              <li className="containerList" key={jugador.id}>
                <div className="jugadorContainer">
                  <div className="imagenContainer">
                    <img src={jugador.imagen} alt={jugador.nombre} className="jugadorImagen" />
                  </div>
                  <div className="jugadorInfo">
                    <strong>{jugador.nombre}</strong>
                    <p>
                      Altura: {jugador.altura}m <br />
                      Peso: {jugador.peso}kg
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

function App() {
  const equiposData = [
    {
      id: 1,
      nombre: "Real Madrid",
      plantilla: [
        { id: 1, nombre: "Jude Bellingham", altura: "1.86", peso: "75 ", imagen: "/1Real.png" },
        { id: 2, nombre: "Vinícius Júnior", altura: "1.76", peso: "73 ", imagen: "/2Real.png" },
        { id: 3, nombre: "Kylian Mbappé", altura: "1.78", peso: "75 ", imagen: "/3Real.png" },
      ],
    },
    {
      id: 2,
      nombre: "FC Barelona",
      plantilla: [
        { id: 1, nombre: "Robert Lewandowski", altura: "1.85", peso: "81 ", imagen: "/1Barca.png" },
        { id: 2, nombre: "Pedri", altura: "1.74", peso: "67 ", imagen: "/2Barca.png" },
        { id: 3, nombre: "Frankie de Jong", altura: "1.80", peso: "74 ", imagen: "/3Barca.png" },
      ],
    },
    {
      id: 3,
      nombre: "Teletubies",
      plantilla: [
        { id: 1, nombre: "Tinky Winky", altura: "2.10", peso: "80 ", imagen: "/1Tele.png" },
        { id: 2, nombre: "Dipsy", altura: "1.99", peso: "79 ", imagen: "/2Tele.png" },
        { id: 3, nombre: "Lala", altura: "1.90", peso: "75 ", imagen: "/3Tele.png" },
        { id: 4, nombre: "Po", altura: "1.75", peso: "70 ", imagen: "/4Tele.png" },
      ],
    },
  ];
  return (
    <main>
      <div className="card">
        <h1>Mi Aplicación de Fútbol</h1>
        <Equipos equipos={equiposData} />
      </div>
    </main>
  );
}

export default App;
