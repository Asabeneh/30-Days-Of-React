import React from "react";
import Grid from "./Grid";
import './index.css'
const App = () =>{
    const title = '30 Days Of React';
    const subTitle = 'Number Generator';
    return(
        <div className="header-wrapper">
            <h1>{title}</h1>
            <h2>{subTitle}</h2>
            <Grid/>
        </div>
    )    
}

export default App;