import React from "react"
import ReactDOM from "react-dom/client"

import "./style/style.css"

import image from "./images/asabeneh.jpg"

const techs = ['HTML', 'CSS', 'Sass', 'React', 'Redux', 'Node', 'MongoDB', 'Python',
  'Flask', 'Django', 'NumPy', 'Data Analylis', 'MYSQL', 'GrapgQL', 'D3.js', 'Gatsby',
  'Docker', 'Heroku', 'Git']

const card = (
  <div className="card-wrapper">
    <div className="card">
      <div className="card__img">
        <img src={image} />
      </div>
      <div>
        <h2>ASABENEH YETAYEH <img className="icon" src="https://img.icons8.com/color/48/null/verified-badge.png"/> </h2>
        <p>Senior Developer, Finland.</p>
      </div>

      <h3>SKILLS</h3>
      <div className="tech-wrapper">
        {techs.map((tech) => (<span key={tech} className="tech__card">{tech}</span>))}
      </div>
      <p>Joined on Aug 30, 2023</p>
    </div>
  </div>
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {card}
  </React.StrictMode>
);
