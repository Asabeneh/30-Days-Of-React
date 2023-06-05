import React from 'react'
import ReactDOM from 'react-dom'
import { countriesData } from './data/countries'


//Header
const Header = ({ headerText, subHeaderText }) => {
  return (
    <header>
      <div>
        <h1>{headerText}</h1>
        <h2>{subHeaderText}</h2>
      </div>
    </header>
  )
}

// Footer Component
const Footer = ({ copyRight }) => (
  <footer>
    <div className='footer-wrapper'>
      <p>Copyright {copyRight.getFullYear()}</p>
    </div>
  </footer>
)

//Main
const isPrime = (num) => {
  for (let i = 2, s = Math.sqrt(num); i <= s; i++) {
    if (num % i === 0) return false;
  }
  return num > 1;
}

const Numbers = ({ numbers }) => {
  const numList = numbers.map((number) =>
    <div className='num-table-col'>
      <div className={
        (number % 2 == 0)
          ? ((isPrime(number)) ? "prime-number" : "even-number")
          : ((isPrime(number)) ? "prime-number" : "odds-number")
      }>{number}
      </div>
    </div>
  )

  return numList
}

const Main = ({ numbers }) => (
  <main>
    <div className='num-table'>
      <div className='num-table-row'>
        <Numbers numbers={numbers} />
      </div>
    </div>
  </main>
)

//Population
const Country = ({ countries }) => {
  const countryList = countries.map((country) =>
    <tr className='tr'>
      <td className='td-name'>{country.name}</td>
      <td className='td-line'>
        <div className='div-line' style={{marginRight : `${100 - country.prc}%`, color: 'white'}}>
          {country.name}
        </div>
      </td>
      <td className='td-value'>
        {new Intl.NumberFormat('ru-RU').format(country.population)}
      </td>
    </tr>
  )

  return countryList
}

const Population = ({ countries, count }) => (
  <main>
    <h1>{count} most populated countries in the world</h1>
    <Country countries={countries} />
  </main>
)

// The App, or the parent or the container component
// Functional Component
const App = () => {
  const headerText = '30 Days of React'
  const subHeaderText = 'Number Generator'
  const date = new Date()

  const N = 31
  const numbers = Array(N).fill().map((_, i) => i + 1)
  numbers.unshift(0)

  const topCount = 10
  const topPopulatedCountries = ((countries, count) => {
    //  add World
    const data = countries
      .map((country) => {
        return { name: country.name, population: country.population }
      })
  
    const world = data
      .map((country) => {
        return { name: country.name, population: country.population }
      })
      .reduce((w, c) => {
        return { name: 'World', population: w.population += c.population, languages: [] }
      }, { name: 'World', population: 0 })
    data.push(world)
  
    // find top <count> countries by population and add field Prc - country population / world population
    const topCountries = data
      .map((country) => {
        return { name: country.name, population: country.population }
      })
      .sort((a, b) => (
        b.population - a.population
      ))
      .slice(0, count + 1)
      .map(({ name, population }) => ({ name: name, population: population, prc: (population / world.population) * 100 }))
  
    return topCountries
  })

  const topCountries = topPopulatedCountries(countriesData, topCount)

  return (
    <div className='app'>
      <Header
        headerText={headerText}
        subHeaderText={subHeaderText}
      />
      <Main numbers={numbers} />
      <Population
        countries={topCountries}
        count={topCount}
      />
      <Footer copyRight={date} />
    </div>
  )
}
const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
