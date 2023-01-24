import React from "react";
import Skill from "./Skill";

// take skills array or arrys as pararmeter
const Skills = ({skills}) => {
    // map through array, skill element holds an array, pass element as property to another component called Skill.
    const skillList = skills.map(skill => <Skill skill={skill}/>)
    // return list items for unordered list
    return skillList;
}

export default Skills;