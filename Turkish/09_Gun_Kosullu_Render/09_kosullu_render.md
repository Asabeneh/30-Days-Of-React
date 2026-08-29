<div align="center">
  <h1> 30 Days Of React: Koşullu Render (Conditional Rendering)</h1>
  <a class="header-badge" target="_blank" href="https://www.linkedin.com/in/asabeneh/">
  <img src="https://img.shields.io/badge/style--5eba00.svg?label=LinkedIn&logo=linkedin&style=social">
  </a>
  <a class="header-badge" target="_blank" href="https://twitter.com/Asabeneh">
  <img alt="Twitter Follow" src="https://img.shields.io/twitter/follow/asabeneh?style=social">
  </a>

<sub>Yazar:
<a href="https://www.linkedin.com/in/asabeneh/" target="_blank">Asabeneh Yetayeh</a><br>
<small> Ekim, 2020</small>
</sub>

</div>

[<< Gün 8](../08_Gun_State/08_state.md) | [Gün 10 >>](../10_Gun_Proje_Klasor_Yapisi/10_proje_klasor_yapisi.md)

![30 Days of React banner](../../images/30_days_of_react_banner_day_9.jpg)

# Koşullu Render (Conditional Rendering)

Terimden anlaşılacağı gibi, koşullu render (conditional rendering), farklı koşullarda farklı JSX veya component (bileşen) render etmenin bir yoludur. Koşullu render'i sıradan if ve else ifadesini, üçlü (ternary) operatörü ve &&'yi kullanarak uygulayabiliriz. Farklı koşullu render'ları uygulayalım.

## If ve Else İfadesi ile Koşullu Render

Aşağıdaki kodda başlangıç state'i (durumu) false olan loggedIn değişkeni bulunmaktadır. State false ise kullanıcıya giriş yapmasını söyleriz; aksi takdirde kullanıcıyı karşılarız:

```js
// index.js
import React from "react";
import ReactDOM from "react-dom";

// class tabanlı component
class Header extends React.Component {
  render() {
    const {
      welcome,
      title,
      subtitle,
      author: { firstName, lastName },
      date,
    } = this.props.data;

    return (
      <header>
        <div className="header-wrapper">
          <h1>{welcome}</h1>
          <h2>{title}</h2>
          <h3>{subtitle}</h3>
          <p>
            {firstName} {lastName}
          </p>
          <small>{date}</small>
          <p>Select a country for your next holiday</p>
        </div>
      </header>
    );
  }
}

class App extends React.Component {
  state = {
    loggedIn: false,
  };

  render() {
    const data = {
      welcome: "30 Days Of React",
      title: "Getting Started React",
      subtitle: "JavaScript Library",
      author: {
        firstName: "Asabeneh",
        lastName: "Yetayeh",
      },
      date: "Oct 9, 2020",
    };

    // if ve else ifadesi kullanarak koşullu render

    let status;

    if (this.state.loggedIn) {
      status = <h3>Welcome to 30 Days Of React</h3>;
    } else {
      status = <h3>Please Login</h3>;
    }

    return (
      <div className="app">
        <Header data={data} />
        {status}
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
```

Kullanıcının oturum durumunu değiştirmesine izin veren bir metot ekleyelim. Giriş ve çıkış yapmak için event işleyen bir düğmeye ihtiyacımız var:

```js
// index.js
import React from "react";
import ReactDOM from "react-dom";

// Düğme component'i
const Button = ({ text, onClick, style }) => (
  <button style={style} onClick={onClick}>
    {text}
  </button>
);

// CSS stilleri JavaScript nesnesi olarak
const buttonStyles = {
  backgroundColor: "#61dbfb",
  padding: 10,
  border: "none",
  borderRadius: 5,
  margin: "3px auto",
  cursor: "pointer",
  fontSize: 22,
  color: "white",
};

// class tabanlı component
class Header extends React.Component {
  render() {
    console.log(this.props.data);
    const {
      welcome,
      title,
      subtitle,
      author: { firstName, lastName },
      date,
    } = this.props.data;

    return (
      <header>
        <div className="header-wrapper">
          <h1>{welcome}</h1>
          <h2>{title}</h2>
          <h3>{subtitle}</h3>
          <p>
            {firstName} {lastName}
          </p>
          <small>{date}</small>
        </div>
      </header>
    );
  }
}

class App extends React.Component {
  state = {
    loggedIn: false,
  };
  handleLogin = () => {
    this.setState({
      loggedIn: !this.state.loggedIn,
    });
  };

  render() {
    const data = {
      welcome: "30 Days Of React",
      title: "Getting Started React",
      subtitle: "JavaScript Library",
      author: {
        firstName: "Asabeneh",
        lastName: "Yetayeh",
      },
      date: "Oct 9, 2020",
    };

    let status;
    let text;

    if (this.state.loggedIn) {
      status = <h1>Welcome to 30 Days Of React</h1>;
      text = "Logout";
    } else {
      status = <h3>Please Login</h3>;
      text = "Login";
    }

    return (
      <div className="app">
        <Header data={data} />
        {status}
        <Button text={text} style={buttonStyles} onClick={this.handleLogin} />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
```

Koşulumuz ikiden fazlaysa ne olur? Saf JavaScript'te olduğu gibi if else if ifadesini kullanabiliriz. Genel olarak, koşullu render, saf JavaScript koşullu ifadesinden farklı değildir.

## Üçlü (Ternary) Operatör ile Koşullu Render

Üçlü (ternary) operatör, if else ifadesine bir alternatiftir. Ancak üçlü operatörün if else ifadesinden daha fazla kullanım alanı vardır. Örneğin üçlü operatörü, bir component'teki stil, className ve diğer yerlerde sıradan if else ifadesinden çok daha fazla kullanabilirsiniz:

```js
// index.js
import React from "react";
import ReactDOM from "react-dom";

// Düğme component'i
const Button = ({ text, onClick, style }) => (
  <button style={style} onClick={onClick}>
    {text}
  </button>
);

// CSS stilleri JavaScript nesnesi olarak
const buttonStyles = {
  backgroundColor: "#61dbfb",
  padding: 10,
  border: "none",
  borderRadius: 5,
  margin: "3px auto",
  cursor: "pointer",
  fontSize: 22,
  color: "white",
};

// class tabanlı component
class Header extends React.Component {
  render() {
    const {
      welcome,
      title,
      subtitle,
      author: { firstName, lastName },
      date,
    } = this.props.data;

    return (
      <header>
        <div className="header-wrapper">
          <h1>{welcome}</h1>
          <h2>{title}</h2>
          <h3>{subtitle}</h3>
          <p>
            {firstName} {lastName}
          </p>
          <small>{date}</small>
        </div>
      </header>
    );
  }
}

class App extends React.Component {
  state = {
    loggedIn: false,
  };
  handleLogin = () => {
    this.setState({
      loggedIn: !this.state.loggedIn,
    });
  };

  render() {
    const data = {
      welcome: "30 Days Of React",
      title: "Getting Started React",
      subtitle: "JavaScript Library",
      author: {
        firstName: "Asabeneh",
        lastName: "Yetayeh",
      },
      date: "Oct 9, 2020",
    };

    let status = this.state.loggedIn ? (
      <h1>Welcome to 30 Days Of React</h1>
    ) : (
      <h3>Please Login</h3>
    );

    return (
      <div className="app">
        <Header data={data} />
        {status}
        <Button
          text={this.state.loggedIn ? "Logout" : "Login"}
          style={buttonStyles}
          onClick={this.handleLogin}
        />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
```

JSX'e ek olarak, bir component'i de koşullu olarak render edebiliriz. Yukarıdaki koşullu JSX'i bir component'e çevirelim:

```js
// index.js
import React from "react";
import ReactDOM from "react-dom";

// Düğme component'i
const Button = ({ text, onClick, style }) => (
  <button style={style} onClick={onClick}>
    {text}
  </button>
);

// CSS stilleri JavaScript nesnesi olarak
const buttonStyles = {
  backgroundColor: "#61dbfb",
  padding: 10,
  border: "none",
  borderRadius: 5,
  margin: "3px auto",
  cursor: "pointer",
  fontSize: 22,
  color: "white",
};

// class tabanlı component
class Header extends React.Component {
  render() {
    const {
      welcome,
      title,
      subtitle,
      author: { firstName, lastName },
      date,
    } = this.props.data;

    return (
      <header>
        <div className="header-wrapper">
          <h1>{welcome}</h1>
          <h2>{title}</h2>
          <h3>{subtitle}</h3>
          <p>
            {firstName} {lastName}
          </p>
          <small>{date}</small>
        </div>
      </header>
    );
  }
}

const Login = () => (
  <div>
    <h3>Please Login</h3>
  </div>
);
const Welcome = (props) => (
  <div>
    <h1>Welcome to 30 Days Of React</h1>
  </div>
);

class App extends React.Component {
  state = {
    loggedIn: false,
  };
  handleLogin = () => {
    this.setState({
      loggedIn: !this.state.loggedIn,
    });
  };

  render() {
    const data = {
      welcome: "30 Days Of React",
      title: "Getting Started React",
      subtitle: "JavaScript Library",
      author: {
        firstName: "Asabeneh",
        lastName: "Yetayeh",
      },
      date: "Oct 9, 2020",
    };

    const status = this.state.loggedIn ? <Welcome /> : <Login />;

    return (
      <div className="app">
        <Header data={data} />
        {status}
        <Button
          text={this.state.loggedIn ? "Logout" : "Login"}
          style={buttonStyles}
          onClick={this.handleLogin}
        />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
```

## && Operatörü ile Koşullu Render

&& operatörü, sol operand (ifade) true (doğru) ise sağ JSX operandını render eder:

```js
// index.js
import React from "react";
import ReactDOM from "react-dom";

// Düğme component'i
const Button = ({ text, onClick, style }) => (
  <button style={style} onClick={onClick}>
    {text}
  </button>
);

// CSS stilleri JavaScript nesnesi olarak
const buttonStyles = {
  backgroundColor: "#61dbfb",
  padding: 10,
  border: "none",
  borderRadius: 5,
  margin: "3px auto",
  cursor: "pointer",
  fontSize: 22,
  color: "white",
};

// class tabanlı component
class Header extends React.Component {
  render() {
    console.log(this.props.data);
    const {
      welcome,
      title,
      subtitle,
      author: { firstName, lastName },
      date,
    } = this.props.data;

    return (
      <header style={this.props.styles}>
        <div className="header-wrapper">
          <h1>{welcome}</h1>
          <h2>{title}</h2>
          <h3>{subtitle}</h3>
          <p>
            {firstName} {lastName}
          </p>
          <small>{date}</small>
        </div>
      </header>
    );
  }
}
const Login = () => (
  <div>
    <h3>Please Login</h3>
  </div>
);
const Welcome = (props) => (
  <div>
    <h1>Welcome to 30 Days Of React</h1>
  </div>
);

class App extends React.Component {
  state = {
    loggedIn: false,
    techs: ["HTML", "CSS", "JS"],
  };
  handleLogin = () => {
    this.setState({
      loggedIn: !this.state.loggedIn,
    });
  };

  render() {
    const data = {
      welcome: "30 Days Of React",
      title: "Getting Started React",
      subtitle: "JavaScript Library",
      author: {
        firstName: "Asabeneh",
        lastName: "Yetayeh",
      },
      date: "Oct 9, 2020",
    };

    // state'i parçalayabiliriz

    const { loggedIn, techs } = this.state;

    const status = loggedIn ? <Welcome /> : <Login />;

    return (
      <div className="app">
        <Header data={data} />
        {status}
        <Button
          text={loggedIn ? "Logout" : "Login"}
          style={buttonStyles}
          onClick={this.handleLogin}
        />
        {techs.length === 3 && (
          <p>You have all the prerequisite courses to get started React</p>
        )}
        {!loggedIn && (
          <p>
            Please login to access more information about 30 Days Of React
            challenge
          </p>
        )}
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
```

Önceki bölümde karşılama ve saati alert kutusu olarak göstermiştik. Şimdi karşılamayı ve saati alert kutusu yerine tarayıcı DOM'unda render edelim:

```js
// index.js
import React from "react";
import ReactDOM from "react-dom";

// class tabanlı component
class Header extends React.Component {
  render() {
    console.log(this.props.data);
    const {
      welcome,
      title,
      subtitle,
      author: { firstName, lastName },
      date,
    } = this.props.data;

    return (
      <header style={this.props.styles}>
        <div className="header-wrapper">
          <h1>{welcome}</h1>
          <h2>{title}</h2>
          <h3>{subtitle}</h3>
          <p>
            {firstName} {lastName}
          </p>
          <small>{date}</small>
        </div>
      </header>
    );
  }
}

const Message = ({ message }) => (
  <div>
    <h1>{message}</h1>
  </div>
);
const Login = () => (
  <div>
    <h3>Please Login</h3>
  </div>
);
const Welcome = (props) => (
  <div>
    <h1>Welcome to 30 Days Of React</h1>
  </div>
);

// Düğme component'i
const Button = ({ text, onClick, style }) => (
  <button style={style} onClick={onClick}>
    {text}
  </button>
);

// TechList Component (Bileşeni)
// class tabanlı component
class TechList extends React.Component {
  render() {
    const { techs } = this.props;
    const techsFormatted = techs.map((tech) => <li key={tech}>{tech}</li>);
    return techsFormatted;
  }
}

// Main Component (Bileşeni)
// Class Component
class Main extends React.Component {
  render() {
    const { techs, greetPeople, handleTime, loggedIn, handleLogin, message } =
      this.props;
    console.log(message);

    const status = loggedIn ? <Welcome /> : <Login />;
    return (
      <main>
        <div className="main-wrapper">
          <p>Prerequisite to get started react.js:</p>
          <ul>
            <TechList techs={this.props.techs} />
          </ul>
          {techs.length === 3 && (
            <p>You have all the prerequisite courses to get started React</p>
          )}
          <div>
            <Button
              text="Show Time"
              onClick={handleTime}
              style={buttonStyles}
            />{" "}
            <Button
              text="Greet People"
              onClick={greetPeople}
              style={buttonStyles}
            />
            {!loggedIn && (
              <p>
                Please login to access more information about 30 Days Of React
                challenge
              </p>
            )}
          </div>
          <div style={{ margin: 30 }}>
            <Button
              text={loggedIn ? "Logout" : "Login"}
              style={buttonStyles}
              onClick={handleLogin}
            />
            <br />
            {status}
          </div>
          <Message message={message} />
        </div>
      </main>
    );
  }
}

// CSS stilleri JavaScript nesnesi olarak
const buttonStyles = {
  backgroundColor: "#61dbfb",
  padding: 10,
  border: "none",
  borderRadius: 5,
  margin: "3px auto",
  cursor: "pointer",
  fontSize: 22,
  color: "white",
};

// Footer Component (Bileşeni)
// Class component
class Footer extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <footer>
        <div className="footer-wrapper">
          <p>Copyright {this.props.date.getFullYear()}</p>
        </div>
      </footer>
    );
  }
}

class App extends React.Component {
  state = {
    loggedIn: false,
    techs: ["HTML", "CSS", "JS"],
    message: "Click show time or Greet people to change me",
  };
  handleLogin = () => {
    this.setState({
      loggedIn: !this.state.loggedIn,
    });
  };
  showDate = (time) => {
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    const month = months[time.getMonth()].slice(0, 3);
    const year = time.getFullYear();
    const date = time.getDate();
    return `${month} ${date}, ${year}`;
  };
  handleTime = () => {
    let message = this.showDate(new Date());
    this.setState({ message });
  };
  greetPeople = () => {
    let message = "Welcome to 30 Days Of React Challenge, 2020";
    this.setState({ message });
  };

  render() {
    const data = {
      welcome: "30 Days Of React",
      title: "Getting Started React",
      subtitle: "JavaScript Library",
      author: {
        firstName: "Asabeneh",
        lastName: "Yetayeh",
      },
      date: "Oct 9, 2020",
    };

    return (
      <div className="app">
        <Header data={data} />

        <Main
          techs={this.state.techs}
          handleTime={this.handleTime}
          greetPeople={this.greetPeople}
          loggedIn={this.state.loggedIn}
          handleLogin={this.handleLogin}
          message={this.state.message}
        />

        <Footer date={new Date()} />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
```

## Tanıklık

Artık Yazar ve 30DaysOfReact hakkındaki düşüncelerinizi paylaşmanın zamanı geldi. Tanıklığınızı bu [bağlantıda](https://www.asabeneh.com/testimonials) bırakabilirsiniz.

## Egzersizler

### Egzersizler: Seviye 1

1. Koşullu render (conditional rendering) nedir?
2. Koşullu render'ı nasıl uygularsınız?
3. Koşullu render için hangi yöntemi kullanmayı tercih edersiniz?

### Egzersizler: Seviye 2

1. Yılın mevsimine göre (Sonbahar, Kış, İlkbahar, Yaz) arka plan rengini değiştiren tek sayfalık bir uygulama yapın.
2. Günün saatine göre (Sabah, Öğle, Akşam, Gece) arka plan rengini değiştiren tek sayfalık bir uygulama yapın.

### Egzersizler: Seviye 3

1. Veri çekmek belirli bir süre alır. Veri yüklenene kadar kullanıcı beklemek zorundadır. Veri henüz çekilmemişken bir yükleme (loading) fonksiyonelliği uygulayın. Gecikmeyi setTimeout kullanarak simüle edebilirsiniz.

🎉 TEBRİKLER! 🎉

[<< Gün 8](../08_Gun_State/08_state.md) | [Gün 10 >>](../10_Gun_Proje_Klasor_Yapisi/10_proje_klasor_yapisi.md)
