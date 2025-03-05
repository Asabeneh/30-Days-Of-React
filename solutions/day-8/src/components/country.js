import React from "react";

export default function Country() {
     let now = new Date();
     let year = now.getFullYear();
     let mon = now.getMonth();
     let date = now.getDate();
     const months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
     ]
     let [country, setCountry] = React.useState({
               name: 'India',
               language: 'Telugu',
               population: 270000000,
               currency:'Rupee'
          });
     
     function Change() {
          
     }
     return (

          <section>
               <div className="details">
                    <h1>Welcome to 30 Days of React</h1>
                    <h3>Getting Started React</h3>
                    <h4>JavaScript Library</h4>
                    <p>Satya Surendra</p>
                    <small>{months[mon].slice(0, 3)} {date} , {year}</small>
                    <small>Select a country for your next holiday</small>
               </div><hr />
               <div className="card">
                    <img src="" alt="" />
                    <div className="countrydetails">
                         <h4>Capital: {country.name} </h4>
                         <h4>Language: {country.language} </h4>
                         <h4>Population: {country.population} </h4>
                         <h4>Currency: {country.currency} </h4>
                    </div>
               </div>
               <button  className="btn" onClick={Change}>Select Country</button>
          </section>
     )
}