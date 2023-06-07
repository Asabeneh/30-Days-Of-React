// index.js
import React from 'react'
import ReactDOM from 'react-dom'

// class based component
class Header extends React.Component {
  render() {
    const {
      welcome,
      title,
      subtitle,
      author: { firstName, lastName },
      date,
    } = this.props.data

    return (
      <header>
        <div className='header-wrapper'>
          <h1>{welcome}</h1>
          <h2>{title}</h2>
          <h3>{subtitle}</h3>
          <p>
            {firstName} {lastName}
          </p>
          <small>{date}</small>
        </div>
      </header>
    )
  }
}

// A button component
const Button = ({ text, onClick, style }) => (
  <button style={style} onClick={onClick}>
    {text}
  </button>
)

// Main Component
// Class Component
class Main extends React.Component {
  render() {
    const {
      seasons,
      seasonId,
      dayTimes,
      dayTimeId,
      switchSeason,
      switchDayTime
    } = this.props

    return (
      <main>
        <div className='main-wrapper'>
          <div>
            <Button
              text='Switch season'
              onClick={switchSeason}
              style={buttonStyles}
            />{' '}
            <Button
              text='Switch day time'
              onClick={switchDayTime}
              style={buttonStyles}
            />
          </div>
          <div className='switched-box' style={seasons[seasonId].styles}>
            Seasons
          </div>
          <div className='switched-box' style={dayTimes[dayTimeId].styles}>
            Day time
          </div>
        </div>
      </main>
    )
  }
}

// CSS styles in JavaScript Object
const buttonStyles = {
  backgroundColor: '#61dbfb',
  padding: 10,
  border: 'none',
  borderRadius: 5,
  margin: '3px auto',
  cursor: 'pointer',
  fontSize: 22,
  color: 'white',
}

// Footer Component
// Class component
class Footer extends React.Component {
  render() {
    return (
      <footer>
        <div className='footer-wrapper'>
          <p>Copyright {this.props.date.getFullYear()}</p>
        </div>
      </footer>
    )
  }
}

class App extends React.Component {
  state = {
    seasons: [
      {
        season: 'winter',
        styles: { backgroundColor: 'white' },
      },
      {
        season: 'spring',
        styles: { backgroundColor: 'green' },
      },
      {
        season: 'summer',
        styles: { backgroundColor: 'yellow' },
      },
      {
        season: 'autumn',
        styles: { backgroundColor: 'orange' },
      },
    ],
    dayTimes:
      [
        {
          dayTime: 'morning',
          styles: { backgroundColor: '#FFFFF0' },
        },
        {
          dayTime: 'noon',
          styles: { backgroundColor: '#ADFF2F' },
        },
        {
          dayTime: 'evening',
          styles: { backgroundColor: '#191970', color: 'white' },
        },
        {
          dayTime: 'night',
          styles: { backgroundColor: '#000000', color: 'white' },
        },
      ],
    seasonId: 0,
    dayTimeId: 0,
  }

  switchSeason = () => {
    let id = this.state.seasonId + 1
    if (id >= this.state.seasons.length) {
      id = 0
    }
    this.setState({ seasonId: id })
  }

  switchDayTime = () => {
    let id = this.state.dayTimeId + 1
    if (id >= this.state.dayTimes.length) {
      id = 0
    }
    this.setState({ dayTimeId: id })
  }

  render() {
    const data = {
      welcome: '30 Days Of React',
      title: 'Getting Started React',
      subtitle: 'JavaScript Library',
      author: {
        firstName: 'Asabeneh',
        lastName: 'Yetayeh',
      },
      date: 'Oct 9, 2020',
    }

    return (
      <div className='app'>
        <Header data={data} />

        <Main
          seasons={this.state.seasons}
          seasonId={this.state.seasonId}
          dayTimes={this.state.dayTimes}
          dayTimeId={this.state.dayTimeId}
          switchSeason={this.switchSeason}
          switchDayTime={this.switchDayTime}
        />

        <Footer date={new Date()} />
      </div>
    )
  }
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
