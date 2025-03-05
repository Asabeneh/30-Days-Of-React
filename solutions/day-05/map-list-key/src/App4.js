import React from "react";
import "./App.css";

const App = () => {
  const numbers = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
  ];

  return (
    <div className="container">
      <h1>30 Day os React</h1>
      <h3>Number Generator</h3>
      <div className="numbersContainer">
        <ul>
          {/* <Numbers numbers={numbers} /> */}
          {numbers.map((number) =>
            number % 2 === 0 ? (
              <li
                className="box"
                style={{ backgroundColor: "rgb(83, 187, 158)" }}
              >
                {number}
              </li>
            ) : (
              <li className="box" style={{ backgroundColor: "tomato" }}>
                {number}
              </li>
            )
          )}
        </ul>
      </div>
    </div>
  );
};

export default App;
