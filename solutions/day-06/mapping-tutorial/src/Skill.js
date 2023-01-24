import React from "react";

// take skill object property and assign variable names for each element of array
const Skill = ({skill : [tech, level]}) => {
    return (
        // destruct elements from array into list item
        <li>{tech} , {level}</li>
    ) 
} 

export default Skill;