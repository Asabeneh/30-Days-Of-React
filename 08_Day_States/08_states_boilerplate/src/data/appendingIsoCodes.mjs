


import fs from 'fs';

import { countriesData } from "./countries.js";
import { countryIsoCode } from "./isoCode.js";
import { countriesAppended } from './countriesAppended.js';

function isoCodeAppender () {
 

console.log('countires data length',countriesData.length)
console.log('countires ISO length',countryIsoCode.length)
console.log('coutries appended ', countriesAppended.length)

 // Create a new array to store the modified country data
 const appendedCountries = [];    

//This loop here is an important coding pattern 

  // Loop through each country in countriesData
    for (let i = 0; i < countriesData.length; i++)
        {
             // Find the corresponding ISO code for the country
            for (let j = 0; j < countryIsoCode.length; j++) {
                if (countriesData[i].name === countryIsoCode[j].name) {
                 // Create a new country object with the added code
        const updatedCountry = {
            ...countriesData[i],
            code: countryIsoCode[j].code,
          };
  
          // Push the updated country object to the new array
          appendedCountries.push(updatedCountry);
                break; // Once matched, stop the inner loop
              }
            }
          }

          for (let i = 0; i < countriesAppended.length; i++){
            //console.log( countriesAppended[i].code)
            if (countriesAppended[i].code ===null){
              console.log('true')
            }

          }

        //  console.log(countriesData); // Log the updated countries data
          // Write the updated countries data to a new file
   
      /*    
      const outputFileContent = `export const countriesAppended = [\n${appendedCountries
    .map(
      (country) =>
        `  { name: '${country.name}', capital: '${country.capital}', languages: ${JSON.stringify(
          country.languages
        )}, population: ${country.population}, flag: '${country.flag}', currency: '${country.currency}', code: '${country.code}' }`
    )
    .join(',\n')}\n];`;
  // Write the file
  fs.writeFile('./countriesAppended.js', outputFileContent, 'utf8', (err) => {
    if (err) {
      console.log('Error writing to file:', err);
    } else {
      console.log('File successfully written as countriesAppended.js');
    }
  });
  */
}
 





isoCodeAppender () 