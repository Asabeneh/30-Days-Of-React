import React from "react";
import './index.css'

const Data = (props) =>{
    const data = props.data.map((data) =>{
        return  <div className="dataContainer">
                    <p>{data.country} <div className="bar"></div> {data.population}</p>
                </div>
    });
    return (
        <h2>{data}</h2>
    )
}

export default Data;