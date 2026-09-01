import './App.css';

import { BarChart } from '@mui/x-charts/BarChart';
import { dataset, valueFormatter } from './weather.js';
//Numbers from 1 to 31 in 4 arrays 
const arrayOne = [0, 1, 2, 3, 4, 5, 6, 7]
const arrayTwo = [8, 9, 10, 11, 12, 13, 14,15]
const arrayThree = [16, 17, 18, 19, 20, 21, 22,23]
const arrayFour = [24, 25, 26, 27, 28, 29, 30, 31]
const smallArray = [12,13,14,15]

//Hex color arrays
const hexArrayOne = ["#4e417e", "#02dc92", "#dfbaa0", "#d8394e", "#7c31d3", "#7fcfd2", "#0e5d46", "#d98590"]

const hexArrayTwo = ["#7923d7", "#6e5eeb", "#2a176b", "#dea1d8", "#cbae6f", "#b6841d", "#62df7d", "#9e4d2c"]

const hexArrayThree = ["#393b73", "#8cface", "#1a4f07", "#045529", "#04e754", "#697980", "#018120", "#5bdcc7"]

const hexArrayFour = ["#7010b2", "#c50007", "#cfe583", "#cdb58e", "#298b5d", "#58e253", "#a9c3c5", "#66fec5"]

//Ten highest population
export const tenHighestPopulation = [
  { country: 'World', population: 8045311447 },
  { country: 'India', population: 1425775850 },
  { country: 'China', population: 	1409670000 },
  { country: 'United States of America', population: 337449016 },
  { country: 'Indonesia', population: 278696200 },
  { country: 'Pakistan', population: 229488994},
  { country: 'Nigeria', population: 216746934	},
  { country: 'Brazil', population: 218723173 },
  { country: 'Bangladesh', population: 168220000 },
  { country: 'Russian Federation', population: 147190000 },
  { country: 'Mexico', population: 128271248 },
]



//Function to determine if the number is prime 
function isPrime(num) {
  if (num <= 1) return false; // Numbers less than or equal to 1 are not prime
  for (let i = 2; i <=Math.sqrt(num); i++) {
      if (num % i === 0) {
          return false; // If num is divisible by any number other than 1 and itself
      }
  }
  return true; // If no divisors were found, num is a prime number
}


//Funtion to generate div boxes of red(prime), green(even) or yellow color(odd) 
const DivBoxes = ({ array }) => {

  return (
   <> 
 
 {array.map((arrayElement) => {
        // Use arrayElement directly since it's the value
        let element;
        if (isPrime(arrayElement)) {
          element = <div key={arrayElement} id="red-box">{arrayElement}</div>;
          //console.log('Prime number:', arrayElement);
        } else if (arrayElement % 2 === 0) {
          element = <div key={arrayElement} id="green-box">{arrayElement}</div>;
        } else {
          element = <div key={arrayElement} id="yellow-box">{arrayElement}</div>;
        }
        return element;
      })}
   </>
  );
};


//Generate div boxes based on the hexacolor it gets from the three hexacolor arrays above 
const DivBoxesHexColor = ({ array }) => {
  

  return (
   <> 
 
 {array.map((arrayElement) => {
        
        let element;
        //specific hexacolor 
        let color = arrayElement
       //div box of the specific hexacolor 
          element = <div key={arrayElement} id="hex-box" style={{ backgroundColor: color }}>{arrayElement}</div>;
       
        return element;
      })}
   </>
  )
};

//Bar chart function 
const chartSetting = {
  xAxis: [
    {
      label: 'Population in Billions',
    },
  ],
  width: 500,
  height: 400,
};

function HorizontalBars() {
  return (
    <BarChart
      dataset={tenHighestPopulation}
      yAxis={[{ scaleType: 'band', dataKey: 'country' }]}
      series={[{ dataKey: 'population', label:'Population'}]}
      layout="horizontal"
      {...chartSetting}
    />
  );
}
function App() {

 return (

    <>
  
<div id="heading">

<h1>30 days of React</h1>
<h2> Number Generator</h2>
    </div>
    <div id="game-board-row">
    <DivBoxes array={arrayOne} />
    </div>
    <div id="game-board-row">
    <DivBoxes array={arrayTwo} />
    </div>
    <div id="game-board-row">
    <DivBoxes array={arrayThree} />
    </div>
    <div id="game-board-row">
    <DivBoxes array={arrayFour} />
    </div>
==================================================
<h2> Hexadecimal generator</h2>
    <div id="hex-color-board-row">
    <DivBoxesHexColor array={hexArrayOne} />
    </div>
    <div id="hex-color-board-row">
    <DivBoxesHexColor array={hexArrayTwo} />
    </div>
    <div id="hex-color-board-row">
    <DivBoxesHexColor array={hexArrayThree} />
    </div>
    <div id="hex-color-board-row">
    <DivBoxesHexColor array={hexArrayFour} />
    </div>
=================================================================================
  <h2>World population</h2>
  <p>Ten most populated countries</p>


  <div id="chart">
 
    <HorizontalBars />
    </div>
    </>
  );
}

export default App;
