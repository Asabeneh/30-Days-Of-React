import React from "react";

const Numbers = ({numbers}) =>{
    //modifying array to array of li JSX
    const list = numbers.map((number) => <li key={number}>{number}</li>)
    return list;
}

export default Numbers;