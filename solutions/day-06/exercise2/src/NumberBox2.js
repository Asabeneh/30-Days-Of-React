import React from "react";
import './index.css'
const NumberBox2 = () =>{
    const num = [];

    // Hexadecimal color generator
    const hexaColor = () => {
        let str = '0123456789abcdef'
        let color = ''
        for (let i = 0; i < 6; i++) {
            let index = Math.floor(Math.random() * str.length)
            color += str[index]
        }
        return '#' + color  
    }
    
    for(let i = 0; i <= 31; i++){
        num.push(hexaColor());
    }
    
    const numbers = num.map((number) => {
        return <p key={number} style={{background: number}}>{number}</p>
    });

    return(
        <div className="numContainer1">
            {numbers}
        </div>
    ) 
    
}

export default NumberBox2;

