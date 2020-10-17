<div align="center">
  <h1> 30 Days Of React: React Router</h1>
  <a class="header-badge" target="_blank" href="https://www.linkedin.com/in/asabeneh/">
  <img src="https://img.shields.io/badge/style--5eba00.svg?label=LinkedIn&logo=linkedin&style=social">
  </a>
  <a class="header-badge" target="_blank" href="https://twitter.com/Asabeneh">
  <img alt="Twitter Follow" src="https://img.shields.io/twitter/follow/asabeneh?style=social">
  </a>

<sub>Author:
<a href="https://www.linkedin.com/in/asabeneh/" target="_blank">Asabeneh Yetayeh</a><br>
<small> October, 2020</small>
</sub>

</div>

[<< Day 16](../16_Higher_Order_Component/16_higher_order_component.md) | [Day 18 >>]()

![30 Days of React banner](../images/30_days_of_react_banner_day_16.jpg)

- [React Router](#react-router)
  - [What is React Router ?](#what-is-react-router-)
  - [BroswerRouter](#broswerrouter)
  - [Route](#route)
  - [Switch](#switch)
  - [NavLink](#navlink)
- [Exercises](#exercises)
  - [Exercises: Level 1](#exercises-level-1)
  - [Exercises: Level 2](#exercises-level-2)
  - [Exercises: Level 3](#exercises-level-3)

# React Router

## What is React Router ?

You may have not heard of the word route or router before and it might be necessary to define it here. The literal meaning of route is a path or a way to get to somewhere. The meaning in React is also similar to the literal meaning. React Router is by itself a React component which allows you to navigate between React components.

In this section, you will get started how to use React router but it may not have plenty of information about it. In case you prefer to learn from the official website of React Router you can get [here](https://reactrouter.com/web/guides/quick-start).

As we have cleared out the very beginning that React is a single page application which has only one index.html page in the entire application. When we implement a React Router the different components get render on the index.html page at same time or different time base on different logic and conditions. React Router has different versions and the latest version is React Router 5. We will use React Router version 4 for this challenge. Let's get started by installing the React Router packages.

```js
Asabeneh@DESKTOP-KGC1AKC MINGW64 ~/Desktop/30-days-of-react$ npm install react-router-dom
```

Let's implement a simple routing using the boilerplate codes we have been creating in the previous days. First of all, import the _react-router-dom_ and we can extract all the necessary components we need for routing from react-router-dom.

```js
import React from 'react'
import {
  BrowserRouter,
  Route,
  NavLink,
  Switch,
  Redirect,
  Prompt,
  withRouter,
} from 'react-router-dom'
```

We may not all these components in every project but it is good to know that it exists.

## BroswerRouter

BrowerRouter is a parent component which allows to wrap the application route. Using the BrowserRouter we can access the browser history. Sometimes it can renames as router.

```js
import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
```

Let's make make use of BrowserRouter to make a navigation for a React application.

```js
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <Router>
        <div className='App'>
          <h1>React Router DOM</h1>
        </div>
      </Router>
    )
  }
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
```

We wrapped our application with BrowserRouter or Router and it works smoothly as it used to be. Let's create Home, About, Contact, Challenge component and route to the different components. In addition to the components, we should import the Route component from react-router-dom.

## Route

The Route component allows to navigate between components. It is a pathway from one component to another.
The Route component has two required props: the path and component or render.
The path props is where the component has to be rendered and the component props is the component which has to be rendered in that specific path. To see your component try to request /home route.

```js
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

// Home component
const Home = (props) => <h1>Welcome Home</h1>

class App extends Component {
  render() {
    return (
      <Router>
        <div className='App'>
          <Route path='/home' component={Home} />
        </div>
      </Router>
    )
  }
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
```

Let's add some more components to our route.

```js
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

// Home component
const Home = (props) => <h1>Welcome Home</h1>
// About component
const About = (props) => <h1>About Us</h1>
// Contact component
const Contact = (props) => <h1>Contact us</h1>
// Challenge component
const Challenges = (props) => (
  <div>
    <h1>30 Days Of React Challenge</h1>
  </div>
)

class App extends Component {
  render() {
    return (
      <Router>
        <div className='App'>
          <Route path='/home' component={Home} />
          <Route path='/about' component={About} />
          <Route path='/contact' component={Contact} />
          <Route path='/challenges' component={Challenges} />
        </div>
      </Router>
    )
  }
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
```

As you can see the above example, all the routes have slush(/). We usually make the home with just slush(/), then let's use the slush(/) for home.

```js
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

// Home component
const Home = (props) => <h1>Welcome Home</h1>
// About component
const About = (props) => <h1>About Us</h1>
// Contact component
const Contact = (props) => <h1>Contact us</h1>
// Challenge component
const Challenges = (props) => (
  <div>
    <h1>30 Days Of React Challenge</h1>
  </div>
)

class App extends Component {
  render() {
    return (
      <Router>
        <div className='App'>
          <Route path='/' component={Home} />
          <Route path='/about' component={About} />
          <Route path='/contact' component={Contact} />
          <Route path='/challenges' component={Challenges} />
        </div>
      </Router>
    )
  }
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
```

Now if you try to navigate by writing / or /about you will see the home page all the time. The home route has (/) which common to other routes. Since the home is lingering let's find a way to avoid this. We can solve in three ways. One with an attribute exact. If we don't like a URL to have a trailing slush(/about/) we can use strict attribute in addition to exact.

```js
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

// Home component
const Home = (props) => <h1>Welcome Home</h1>
// About component
const About = (props) => <h1>About Us</h1>
// Contact component
const Contact = (props) => <h1>Contact us</h1>
// Challenge component
const Challenges = (props) => (
  <div>
    <h1>30 Days Of React Challenge</h1>
  </div>
)

class App extends Component {
  render() {
    return (
      <Router>
        <div className='App'>
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
          <Route exact path='/contact' component={Contact} />
          <Route exact path='/challenges' component={Challenges} />
        </div>
      </Router>
    )
  }
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
```

If we don't like a URL to have a trailing slush, for instance(/about/), we can use strict attribute in addition to exact.

```js
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

// Home component
const Home = (props) => <h1>Welcome Home</h1>
// About component
const About = (props) => <h1>About Us</h1>
// Contact component
const Contact = (props) => <h1>Contact us</h1>
// Challenge component
const Challenges = (props) => (
  <div>
    <h1>30 Days Of React Challenge</h1>
  </div>
)

class App extends Component {
  render() {
    return (
      <Router>
        <div className='App'>
          <Route exact path='/' component={Home} />
          <Route exact strict path='/about' component={About} />
          <Route exact strict path='/contact' component={Contact} />
          <Route exact strict path='/challenges' component={Challenges} />
        </div>
      </Router>
    )
  }
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
```

The other way to avoid the lingering home page is rearranging the routing order and Switch component. Just putting the home route at the bottom.

## Switch

The Switch component allows only on component to be rendered.

```js
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

// Home component
const Home = (props) => <h1>Welcome Home</h1>
// About component
const About = (props) => <h1>About Us</h1>
// Contact component
const Contact = (props) => <h1>Contact us</h1>
// Challenge component
const Challenges = (props) => (
  <div>
    <h1>30 Days Of React Challenge</h1>
  </div>
)

class App extends Component {
  render() {
    return (
      <Router>
        <div className='App'>
          <Switch>
            <Route exact path='/about' component={About} />
            <Route exact path='/contact' component={Contact} />
            <Route exact path='/challenges' component={Challenges} />
            <Route exact path='/' component={Home} />
          </Switch>
        </div>
      </Router>
    )
  }
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
```

The route is a kind of ready but so far we are navigating manually by writing each specific route. Let's make use of the NavLink component to be forwarded to each specific route.

## NavLink

The NavLink component allow us to navigate each component. It takes a to required props. The NavLink is a component on top of anchor tag. Clicking on a NavLink does not do a page refresh which is one of the best quality of using a router. See the example below. First, let's implement a navigation for the home page.

```js
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  NavLink,
} from 'react-router-dom'

// Home component
const Home = (props) => <h1>Welcome Home</h1>
// About component
const About = (props) => <h1>About Us</h1>
// Contact component
const Contact = (props) => <h1>Contact us</h1>
// Challenge component
const Challenges = (props) => (
  <div>
    <h1>30 Days Of React Challenge</h1>
  </div>
)

class App extends Component {
  render() {
    return (
      <Router>
        <div className='App'>
          <ul>
            <li>
              <NavLink to='/'>Home</NavLink>
            </li>
          </ul>

          <Switch>
            <Route path='/about' component={About} />
            <Route path='/contact' component={Contact} />
            <Route path='/challenges' component={Challenges} />
            <Route path='/' component={Home} />
          </Switch>
        </div>
      </Router>
    )
  }
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
```

Now, lets' implement navigation for all the components.

```js
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  NavLink,
} from 'react-router-dom'

// Home component
const Home = (props) => <h1>Welcome Home</h1>
// About component
const About = (props) => <h1>About Us</h1>
// Contact component
const Contact = (props) => <h1>Contact us</h1>
// Challenge component
const Challenges = (props) => (
  <div>
    <h1>30 Days Of React Challenge</h1>
  </div>
)

class App extends Component {
  render() {
    return (
      <Router>
        <div className='App'>
          <ul>
            <li>
              <NavLink to='/'>Home</NavLink>
            </li>
            <li>
              <NavLink to='/about'>About</NavLink>
            </li>
            <li>
              <NavLink to='/contact'>Contact</NavLink>
            </li>
            <li>
              <NavLink to='/challenges'>Challenges</NavLink>
            </li>
          </ul>

          <Switch>
            <Route path='/about' component={About} />
            <Route path='/contact' component={Contact} />
            <Route path='/challenges' component={Challenges} />
            <Route path='/' component={Home} />
          </Switch>
        </div>
      </Router>
    )
  }
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
```

Our route and navigation works perfectly as long as the route is found. However, if a route is not found it falls to last component. In order to avoid this problem, lets create a separate not found component and put it inside our routing.

```js
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  NavLink,
} from 'react-router-dom'

// Home component
const Home = (props) => <h1>Welcome Home</h1>
// About component
const About = (props) => <h1>About Us</h1>
// Contact component
const Contact = (props) => <h1>Contact us</h1>
// Challenge component
const Challenges = (props) => (
  <div>
    <h1>30 Days Of React Challenge</h1>
  </div>
)
const NotFound = (props) => <h1>The page your looking for not found</h1>
class App extends Component {
  render() {
    return (
      <Router>
        <div className='App'>
          <ul>
            <li>
              <NavLink to='/'>Home</NavLink>
            </li>
            <li>
              <NavLink to='/about'>About</NavLink>
            </li>
            <li>
              <NavLink to='/contact'>Contact</NavLink>
            </li>
            <li>
              <NavLink to='/challenges'>Challenges</NavLink>
            </li>
          </ul>

          <Switch>
            <Route path='*' exact component={NotFound} />
            <Route path='/about' component={About} />
            <Route path='/contact' component={Contact} />
            <Route path='/challenge' component={Challenges} />
            <Route path='/' component={Home} />
          </Switch>
        </div>
      </Router>
    )
  }
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
```

Let's make a separate component which is responsible for the navigation.

```js
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  NavLink,
} from 'react-router-dom'

// Home component
const Home = (props) => <h1>Welcome Home</h1>
// About component
const About = (props) => <h1>About Us</h1>
// Contact component
const Contact = (props) => <h1>Contact us</h1>
// Challenge component
const Challenges = (props) => (
  <div>
    <h1>30 Days Of React Challenge</h1>
  </div>
)
const NotFound = (props) => <h1>The page your looking for not found</h1>
const Navbar = () => (
  <ul>
    <li>
      <NavLink to='/'>Home</NavLink>
    </li>
    <li>
      <NavLink to='/about'>About</NavLink>
    </li>
    <li>
      <NavLink to='/contact'>Contact</NavLink>
    </li>
    <li>
      <NavLink to='/challenges'>Challenges</NavLink>
    </li>
  </ul>
)
class App extends Component {
  render() {
    return (
      <Router>
        <div className='App'>
          <Navbar />
          <Switch>
            <Route path='*' exact component={NotFound} />
            <Route path='/about' component={About} />
            <Route path='/contact' component={Contact} />
            <Route path='/challenge' component={Challenges} />
            <Route path='/' component={Home} />
          </Switch>
        </div>
      </Router>
    )
  }
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
```

We have implemented a simple navigation using React Router. In next part will will cover Prompt, Redirect and withRouter component.

# Exercises

## Exercises: Level 1

Implement your portfolio with react router

## Exercises: Level 2

coming

## Exercises: Level 3

coming

🎉 CONGRATULATIONS ! 🎉

[<< Day 16](../16_Higher_Order_Component/16_higher_order_component.md) | [Day 18 >>]()
