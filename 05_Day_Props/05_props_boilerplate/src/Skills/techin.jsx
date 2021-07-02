
import React from 'react'
import ReactDOM from 'react-dom'

// const TechList = ({ techs }) => {
//     const techList = techs.map((tech) => <li key={tech}>{tech}</li>)
//     return techList
// }
const TechList = (props) => {
    const skillList = props.techs.map((skill) => <li>{skill}</li>)
    return <ul>{skillList}</ul>
}

export default TechList;