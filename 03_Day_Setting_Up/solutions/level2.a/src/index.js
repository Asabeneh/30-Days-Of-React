import React from "react"
import ReactDOM from "react-dom/client"
import "./style/style.css"

import html from "./images/html_logo.png"
import css from "./images/css_logo.png"
import js from "./images/js_logo.png"
import react from "./images/react_logo.png"

const techsLogos = [html, css, js, react]
const techsLogoImgs = techsLogos.map((logo) => <img key={logo} src={logo} alt='logo tech' />)

const frontTechs = (
  <div className="techs">
    <h3>Front End Technologies</h3>
    <div className="tech-images-wrapper">
      {techsLogoImgs}
    </div>
  </div>
)

const main = (
  <main>
    <div className="main-wrapper">
      {frontTechs}
    </div>
  </main>
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {main}
  </React.StrictMode>
);
