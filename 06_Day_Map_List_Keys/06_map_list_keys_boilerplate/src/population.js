import React from "react";
import { tenHighestPopulation as countryData } from './data/ten_most_highest_populations';

console.log(countryData)


const WorldList = () => {
    const percentPop = (number) => {
      const population = countryData.map(country => country.population)
      const worldPop = Math.max(...population);
      return (
          ((number*100)/worldPop)
      )
    }

    console.log(percentPop(countryData[0].population))

    return(
        <div style={{display:'flex',alignItems:'center',flexDirection:"column"}}>
            <h2>30 DAYS OF REACT</h2>
            <h1>World Population</h1>
            <p>Ten most populated Countries</p>

            <ul style={{padding: "1rem"}}>
                {countryData.map( (country,index) => {
                    return (
                        <li key={index} style={{display:'flex',justifyContent:"space-between",gap:120}}>
                            <p style={{width:220}}>{country.country}</p>
                            <div style={{width:500,height:20}}>
                                <div style={{width:`${percentPop(country.population)}%`, height:'100%',backgroundColor:'orange',textAlign:'center'}}>
                                    {Math.round(percentPop(country.population))}
                                </div>
                            </div>
                            <p style={{width:120}}>{country.population}</p>
                        </li>
                    );
                })}
            </ul>
        </div>
    )
}

export default WorldList