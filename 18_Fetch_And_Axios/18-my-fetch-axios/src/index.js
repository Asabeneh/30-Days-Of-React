import React, { Component } from 'react'
import ReactDOM from 'react-dom/client'
import axios from 'axios'
import './styles/index.css'

const Cat = ({ cat: { name, weight, age } }, key) => {
  return (
    <div className='cat' key={key}>
      <h3 className='cat_name'><b>Breed:</b> {name.toUpperCase()}</h3>
      <div className='cat_text' key={key}>
        <p>
          <span><b>Weight:</b>{weight}</span>          
        </p>
        <p>
          <span><b>Age:</b>{age}</span>
        </p>

      </div>
    </div>
  )
}

class App extends Component {
  state = {
    data: [],
  }

  componentDidMount() {
    this.fetchCountryData()
  }
  fetchCountryData = async () => {
    const url = 'https://api.thecatapi.com/v1/breeds'
    try {
      const response = await axios.get(url)
      const data = await response.data
      this.setState({
        data,
      })
    } catch (error) {
      console.log(error)
    }
  }

  render() {
    console.log(this.state.data.length)

    const avCat = this.state.data
      .map((cat) => {
        return {
          name: cat.name,
          weight: parseInt(cat.weight.metric.substr(cat.weight.metric.indexOf('-') + 2)),
          age: parseInt(cat.life_span.substr(cat.life_span.indexOf('-') + 2)),
        }
      })
      .reduce((w, c) => {
        return {
          name: 'Cats',
          weight: w.weight += c.weight / this.state.data.length,
          age: w.age += c.age / this.state.data.length,
        }
      }
        , { name: 'Cats', weight: 0, age: 0 })

    console.log(`average cat: ${avCat.weight}, ${avCat.age} `)

    return (
      <div className='App'>
        <h1>30 Days of React</h1>
        <h2>Cats paradise</h2>
        <div>
          <p>There are {this.state.data.length} cat breeds in the api</p>
          <div className='cat-average'>
              On average a cat can weight about {' '}
              <div className='cat-weight-age'>{Math.round(avCat.weight  * 100 ) / 100}</div> Kg and live {' '}
              <div className='cat-weight-age'>{Math.round(avCat.age * 100) / 100}</div> years.
          </div>
          <h3><b>Cats breed info</b></h3>
          <div className='cats-wrapper'>
            {this.state.data
              .map((cat) => {
                return {
                  name: cat.name,
                  weight: parseInt(cat.weight.metric.substr(cat.weight.metric.indexOf('-') + 2)),
                  age: parseInt(cat.life_span.substr(cat.life_span.indexOf('-') + 2)),
                }
              })
              .map((cat) => (
                <Cat cat={cat} />
              ))}
          </div>
        </div>
      </div>
    )
  }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
