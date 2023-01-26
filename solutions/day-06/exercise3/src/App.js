import React from 'react';
import Data from './Data';
import {tenHighestPopulation}  from './populationData';

const App = () => {
    const title = '30 Days Of React'
    const subTitle1 = 'World Population';
    const subTitle2  = 'Ten most populated countries';

    return (
        <div className='header-wrapper'>
            <h1>{title}</h1>
            <h2>{subTitle1}</h2>
            <h3>{subTitle2}</h3>
            <Data data = {tenHighestPopulation}/>
        </div>
    )
}

export default App;