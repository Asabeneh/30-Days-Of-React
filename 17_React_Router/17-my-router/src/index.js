import React, { Component } from 'react'
import ReactDOM from 'react-dom/client'
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Redirect,
  Prompt,
  Switch,
} from 'react-router-dom'

// About component
const Main = (props) => <h1>My portfio</h1>
// About component
const AboutMe = (props) => {
  return (
    <div>
      <h1>About Me</h1>
      <div>
        <p>My name is Daniil. This is my portfolio.</p>
      </div>
    </div>
  )
}
// Contact component
const ContactMe = (props) => {
  return (
    <div>
      <h1>Contact me</h1>
      <p>email: dan@email.com</p>
    </div>
  )
}

// Skills component
const skills = [
  {
    name: 'Java',
    description: 'Java, spring',
    level: 'middle',
    experience: '3 years',
    slug: 'java'
  },
  {
    name: 'PL+',
    description: 'CFT PL+',
    level: 'senior',
    experience: '13 years',
    slug: 'pl+',
  },
  {
    name: 'JS',
    description: 'JS, react',
    level: 'junior',
    experience: '1 year',
    slug: 'js',
  },
]

const Skill = ({
  skill: {
    name,
    description,
    level,
    experience,
  },
}) => (
  <div>
    <h1>{name}</h1>
    <p>Level: {level}</p>
    Skill experience: {experience && (
      <>
        {' '}
        <small>{experience}</small> <br />
      </>
    )}
    <p>Description: {description}</p>
  </div>
)

const Skills = (props) => {
  const path = props.location.pathname
  const slug = path.split('/').slice(path.split('/').length - 1)[0]
  const skill = skills.find((skill) => skill.slug === slug)

  return (
    <div>
      <h1>Skills</h1>
      <ul>
        {skills.map(({ name, slug }) => (
          <li key={slug}>
            <NavLink to={`/skills/${slug}`}>{name}</NavLink>
          </li>
        ))}
      </ul>
      <Switch>
        <Route
          exact
          path={'/skills'}
          component={() => <h1>Choose any of the skills</h1>}
        />
        <Route
          path={path}
          component={(props) => <Skill skill={skill} />}
        />
      </Switch>
    </div>
  )
}

const NotFound = (props) => <h1>The page your looking for not found</h1>
const Navbar = ({ username }) => (
  <ul>
    <li>
      <NavLink to='/'>Home</NavLink>
    </li>
    <li>
      <NavLink to='/aboutme'>AboutMe</NavLink>
    </li>
    <li>
      <NavLink to='/contactme'>ContactMe</NavLink>
    </li>
    <li>
      <NavLink to='/skills'>Skills</NavLink>
    </li>
  </ul>
)

const User = ({ match, isLoggedIn, handleLogin }) => {
  const username = match.params.username
  return (
    <div>
      {isLoggedIn ? (
        <>
          <h1>Welcome {username} to the challenge</h1>
          <small>Now, you can navigate through all the challenges</small> <br />
        </>
      ) : (
        <p>Please login in to access the challenges </p>
      )}
      <button onClick={handleLogin}>{isLoggedIn ? 'Logout' : 'Login'}</button>
    </div>
  )
}

const Welcome = ({ handleLogin, isLoggedIn }) => {
  return (
    <div>
      {isLoggedIn ? 'Welcome to the challenge' : <p>Please login in </p>}
      <button onClick={handleLogin}>{isLoggedIn ? 'Logout' : 'Login'}</button>
    </div>
  )
}
class App extends Component {
  state = {
    isLoggedIn: false,
    firstName: 'Daniil',
  }
  handleLogin = () => {
    this.setState({
      isLoggedIn: !this.state.isLoggedIn,
    })
  }
  render() {
    return (
      <Router>
        <div className='App'>
          <Navbar username={this.state.firstName} />

          <Prompt
            message={({ pathname }) => {
              return this.state.isLoggedIn &&
                pathname.includes('/user/Asabeneh')
                ? 'Are you sure you want to logout?'
                : true
            }}
          />

          <Switch>
            <Route path='/aboutme' component={AboutMe} />
            <Route path='/contactme' component={ContactMe} />
            <Route
              path='/user/:username'
              component={(props) => (
                <User
                  {...props}
                  isLoggedIn={this.state.isLoggedIn}
                  handleLogin={this.handleLogin}
                />
              )}
            />
            <Route
              path='/login'
              component={(props) => (
                <Welcome
                  {...props}
                  isLoggedIn={this.state.isLoggedIn}
                  handleLogin={this.handleLogin}
                />
              )}
            />
            <Route
              path='/skills'
              component={(props) => {
                return this.state.isLoggedIn ? (
                  <Skills {...props} />
                ) : (
                  <Redirect to='/user/daniil' />
                )
              }}
            />
            <Route exact path='/' component={Main} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </Router>
    )
  }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
