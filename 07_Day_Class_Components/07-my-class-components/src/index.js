import React from 'react'
import ReactDOM from 'react-dom'
import { countriesData } from './data/countries'

//Header
class Header extends React.Component {
  render() {
    console.log(this.props.data)
    const {
      headerText,
      subHeaderText
    } = this.props.data

    return (
      <header>
        <div>
          <h1>{headerText}</h1>
          <h2>{subHeaderText}</h2>
        </div>
      </header>
    )
  }
}

// Footer Component
class Footer extends React.Component {
  render() {
    console.log(this.props.date)
    return (
      <footer>
        <div className='footer-wrapper'>
          <p>Copyright {this.props.date.getFullYear()}</p>
        </div>
      </footer >
    )
  }
}

//Main
class Main extends React.Component {
  render() {
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

    return (
      <main>
        <div className='num-table'>
          <div className='num-table-row'>
            <Numbers numbers={this.props.numbers} />
          </div>
        </div>
      </main>
    )
  }
}

//Population
class Population extends React.Component {
  constructor(props) {
    super(props)
  }

  topPopulatedCountries(countries, count) {
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
  }

  render() {
    const topCountries = this.topPopulatedCountries(this.props.countries, this.props.count)

    function numberWithCommas(x) {
      return x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
    }
    
    const Country = ({ countries }) => {
      const countryList = countries.map((country) =>
        <tr className='tr'>
          <td className='td-name'>{country.name}</td>
          <td className='td-line'>
            <div className='div-line' style={{ marginRight: `${100 - country.prc}%`, color: 'white' }}>
              {country.name}
            </div>
          </td>
          <td className='td-value'>
            {numberWithCommas(country.population)}
          </td>
        </tr>
      )
    
      return countryList
    }

    return (
      <main>
        <h1>{this.props.count} most populated countries in the world</h1>
        <table className='table'><Country countries={topCountries} /></table>
      </main>
    )
  }
}

// The App, or the parent or the container component
// Functional Component
class App extends React.Component {
  render() {
    const data = {
      headerText: '30 Days of React',
      subHeaderText: 'Number Generator'
    }

    const N = 31
    const numbers = Array(N).fill().map((_, i) => i + 1)
    numbers.unshift(0)

    return (
      <div className='app'>
        <Header data={data} />
        <Main numbers={numbers} />
        <Population
          countries={countriesData}
          count={10}
        />
        <Footer date={new Date()} />
      </div>
    )
  }
}
const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
