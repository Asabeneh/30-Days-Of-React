import React from 'react';
import ReactDOM from 'react-dom/client';
import cute from './images/cute.png';

const header = (
  <header>
    <h1>Welcome to 30 Days Of React</h1>
    <h2>Getting Started React</h2>
    <h3>JavaScript Library</h3>
  </header>
)


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div style = {{display: "flex", justifyContent:'center', height: 'auto'}}> 
      <header>
        {header}
    </header>
  </div>
  <div style = {{display: "flex", justifyContent:'center', height: 'auto'}}>
  <img src={cute} alt='Cute Bunny!'></img>
  </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
