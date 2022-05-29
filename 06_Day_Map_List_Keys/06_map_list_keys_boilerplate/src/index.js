import React from 'react'
import ReactDOM from 'react-dom'
import WorldList from "./population";

const numbers = [];

for( let i=0; i <= 31; i++ ){
    numbers.push(i);
}

const hexaColor = () => {
    let str = '0123456789abcdef'
    let color = ''
    for (let i = 0; i < 6; i++) {
        let index = Math.floor(Math.random() * str.length)
        color += str[index]
    }
    return '#' + color
}

const listContainer = {
    display:'flex',
    flexWrap: 'wrap',
    maxWidth: '980px',
    margin: '0 auto'

}

const listItemEven = {
    padding: '3rem',
    width: 150,
    height: 150,
    backgroundColor: `${hexaColor()}`
}

const listItemOdd = {
    padding: '3rem',
    width: 150,
    height: 150,
    backgroundColor: `${hexaColor()}`
}

// The App, or the parent or the container component
// Functional Component
const App = () => {

  return (
    <div className='app'>
        <ul style={listContainer}>
            {
                numbers.map( number => {
                        return <li key={number} style={listItemEven}>{number}</li>
                })}
        </ul>
        <h2>Hexademical Colors</h2>
        <ul style={listContainer}>
            {
                numbers.map( number => {
                    return <li key={number} style={{
                        padding: '3rem',
                        width: 150,
                        height: 150,
                        backgroundColor: `${hexaColor()}`
                    }} >{hexaColor()}</li>
                })}
        </ul>
        <div>
            <WorldList/>
        </div>
    </div>
  )
}
const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
