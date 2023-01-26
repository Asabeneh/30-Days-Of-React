import React from "react";
import Grid from "./Grid";
import Grid2 from './Grid2'
import './index.css'
const App = () =>{
    const title = '30 Days Of React';
    const subTitle = 'Number Generator';
    const title2 = '30 Days Of React';
    const subTitle2 = 'Hexadecimal Colors'
    return(
        <div className="header-wrapper">
            <h1>{title}</h1>
            <h2>{subTitle}</h2>
            <Grid/>
            <h1>{title2}</h1>
            <h2>{subTitle2}</h2>
            <Grid2/>

        </div>
    )    
}

export default App;