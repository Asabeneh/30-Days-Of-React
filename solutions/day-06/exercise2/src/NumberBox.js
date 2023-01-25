import React from "react";
import './index.css'
const NumberBox = () =>{
    const num = [];
    for(let i = 0; i <= 31; i++){
        num.push(i);
    }
    const numbers = num.map((number) => {
        let color = '';
        if (number % 2 === 0) {
            color = 'green'
        } else if (isPrime(number)) {
            // Check if the number is prime
            color = 'red'
        } else {
            color = 'yellow'
        }

        if(number === 2){
            color = 'red'
        }

        function isPrime(n) {
        if (n < 3) {
            return false;
        }
        for (var i = 2; i < n; i++) {
            if (n % i === 0) {
                return false;
            }
        }
        return true;
        }
        
        return <p key={number} className={color}>{number}</p>
    });

    return(
        <div className="numContainer">
            {numbers}
        </div>
    ) 
    
}

export default NumberBox;

