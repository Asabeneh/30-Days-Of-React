import React from "react";
import "./App.css";

const App = () => {
  const hexas = [
    "#4e417e",
    "#02dc92",
    "#dfbaa0",
    "#d8394e",
    "#2c31d3",
    "#7fcfd2",
    "#0e5d46",
    "#d98590",
    "#7923d7",
    "#6e5eeb",
    "#2a176b",
    "#cbae6f",
    "#b6841d",
    "#62df7d",
    "#9e4d2c",
    "#393b73",
    "#8cface",
    "#1a4f07",
    "#045529",
    "#04e754",
    "#697980",
    "#018120",
    "#5bdcc7",
    "#7010b2",
    "#c50007",
    "#cdb58e",
    "#298b5d",
    "#58e253",
    "#a9c3c5",
    "#66fec5",
  ];

  return <div className="container">
    <h1>30 Days of React</h1>
    <h3>Hexadecimal Colors</h3>
    <div>
      <ul>
        {hexas.map((hexa) => <li style={{background: `${hexa}`}}>{hexa}</li>)}
      </ul>
    </div>
  </div>;
};

export default App;
