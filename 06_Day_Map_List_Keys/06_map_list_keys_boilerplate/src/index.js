import React from 'react'
import ReactDOM from 'react-dom'

const numbers = [];

for( let i=0; i <= 31; i++ ){
    numbers.push(i);
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
    backgroundColor: 'crimson'
}

const listItemOdd = {
    padding: '3rem',
    width: 150,
    height: 150,
    backgroundColor: 'green'
}

// The App, or the parent or the container component
// Functional Component
const App = () => {

  return (
    <div className='app'>
        <ul style={listContainer}>
            {
                numbers.map( number => {
                    if(number % 2 === 0 ){
                        return <li key={number} style={listItemEven}>{number}</li>
                    } else if( number % 2 === 1 ){
                        return <li key={number} style={listItemOdd}>{number}</li>
                    }
                })}
        </ul>
    </div>
  )
}
const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
