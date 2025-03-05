import React from "react";
import aso from './images/asabeneh.jpg';

const imageStyle = {
    width: 200,
    height: 200,
    borderRadius: '50%'
}

const skills = ['html','react','css','javascript']

export const UserCard = (
    <div>
        <img src={aso} style={imageStyle} alt={'image'}/>
        <p>Alex De Souza</p>
        <ul>
            {
                skills.map( skill => <li key={skill}>{skill}</li> )
            }
        </ul>
    </div>
);