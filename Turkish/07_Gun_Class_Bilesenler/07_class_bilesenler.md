<div align="center">
  <h1> 30 Days Of React: Class Component (Sınıf Tabanlı Bileşenler) </h1>
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

[<< Gün 6](../06_Gun_Dizi_Haritalama/06_dizi_haritalama.md) | [Gün 8 >>](../08_Gun_State/08_state.md)

![30 Days of React banner](../../images/30_days_of_react_banner_day_7.jpg)

- [Class Component (Sınıf Tabanlı Bileşenler)](#class-component-sınıf-tabanlı-bileşenler)
  - [Class Component'ta Props'a Erişim](#class-componentta-propsa-erişim)
  - [Class Tabanlı Component'ta Metotlar](#class-tabanlı-componentta-metotlar)
- [Egzersizler](#egzersizler)
  - [Egzersizler: Seviye 1](#egzersizler-seviye-1)
  - [Egzersizler: Seviye 2](#egzersizler-seviye-2)
  - [Egzersizler: Seviye 3](#egzersizler-seviye-3)

# Class Component (Sınıf Tabanlı Bileşenler)

Önceki bölümlerde JSX, Functional Component (Fonksiyonel Bileşen) ve Props (Özellikler) konularını ele aldık. Bu bölümde Class Component (Sınıf Tabanlı Bileşenler) veya stateful component (durumlu bileşen) konusunu ele alacağız. Yalnızca class tabanlı component'lerin state (durum) ve yaşam döngüsü metotları vardı. Ancak React 16.8.0 sürümünden sonra fonksiyonel component'ler de React Hook'ları (Kancalar) kullanarak state ve yaşam döngüsüne sahip olabilmektedir. 30 Days Of React meydan okumasında, hem eski hem yeni sürümü anlamak amacıyla React'ı 16.8.0 öncesi ve sonrasını kapsayacak şekilde ele alacağız. Eski sürümde yazılmış çok sayıda kod var ve bu kodlar belirli bir noktada taşınmayı gerektirebilir. Bunun yanı sıra, React'ı gerçekten iyi anlamak için class tabanlı component'leri de anlamak gerekmektedir.

Şimdiye kadar gördüğümüz tüm component'ler fonksiyonel component'tir. Şimdi class tabanlı component de oluşturalım. Class tabanlı component, JavaScript class'ı kullanılarak yapılır ve React Component'tan kalıtım alır. Daha önce oluşturduğumuz tüm fonksiyonel component'leri dönüştürerek class tabanlı component'in nasıl yapıldığını öğrenelim. Tümünü dönüştürmek zorunlu değildir; ancak fonksiyonel component'lerin class component'e nasıl dönüştürüldüğünü öğrenmek amacıyla bunu yapıyoruz.

```js
// Saf JavaScript class'ı ve child (çocuk) class
// React paketinden import ettiğimizi hayal edin
class Component {
  constructor(props) {}
}

// Class tabanlı component'leri bu şekilde üst class'tan kalıtarak yaparız
class Child extends Component {
  constructor(props) {
    super(props);
  }
}
```

Fonksiyonel React Component (Bileşeni):

```js
// index.js

import React from "react";
import ReactDOM from "react-dom";
// Header Component (Bileşeni)
// Fonksiyonel component
const Header = () => (
  <header>
    <div className="header-wrapper">
      <h1>Welcome to 30 Days Of React</h1>
      <h2>Getting Started React</h2>
      <h3>JavaScript Library</h3>
      <p>Asabeneh Yetayeh</p>
      <small>Oct 6, 2020</small>
    </div>
  </header>
);
const rootElement = document.getElementById("root");
ReactDOM.render(<Header />, rootElement);
```

Class tabanlı React Component (Bileşeni), React.Component'in bir child'ıdır (çocuğudur); yerleşik bir render metoduna sahiptir ve constructor içerebilir.

```js
//index.js

import React from "react";
import ReactDOM from "react-dom";

// class tabanlı component
class Header extends React.Component {
  render() {
    return (
      <header>
        <div className="header-wrapper">
          <h1>Welcome to 30 Days Of React</h1>
          <h2>Getting Started React</h2>
          <h3>JavaScript Library</h3>
          <p>Asabeneh Yetayeh</p>
          <small>Oct 7, 2020</small>
        </div>
      </header>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Header />, rootElement);
```

Yukarıdaki component'i constructor ile görelim:

```js
//index.js

import React from "react";
import ReactDOM from "react-dom";

// class tabanlı component
class Header extends React.Component {
  constructor(props) {
    super(props);
    // constructor içindeki kod diğer tüm kodlardan önce çalışır
  }
  render() {
    return (
      <header>
        <div className="header-wrapper">
          <h1>Welcome to 30 Days Of React</h1>
          <h2>Getting Started React</h2>
          <h3>JavaScript Library</h3>
          <p>Asabeneh Yetayeh</p>
          <small>Oct 7, 2020</small>
        </div>
      </header>
    );
  }
}
const rootElement = document.getElementById("root");
ReactDOM.render(<Header />, rootElement);
```

Tüm fonksiyonel component'leri class tabanlı component'e dönüştürelim:

```js
// TechList Component (Bileşeni)
// fonksiyonel component
const TechList = () => {
  const techs = ["HTML", "CSS", "JavaScript"];
  const techsFormatted = techs.map((tech) => <li key={tech}>{tech}</li>);
  return techsFormatted;
};

// TechList Component (Bileşeni)
// class tabanlı component
class TechList extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const techs = ["HTML", "CSS", "JavaScript"];
    const techsFormatted = techs.map((tech) => <li key={tech}>{tech}</li>);
    return techsFormatted;
  }
}

// Main Component (Bileşeni)
// Fonksiyonel Component
const Main = () => (
  <main>
    <div className="main-wrapper">
      <p>Prerequisite to get started react.js:</p>
      <ul>
        <TechList />
      </ul>
    </div>
  </main>
);

// Main Component (Bileşeni)
// Class Component
class Main extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <main>
        <div className="main-wrapper">
          <p>Prerequisite to get started react.js:</p>
          <ul>
            <TechList />
          </ul>
        </div>
      </main>
    );
  }
}

// Footer Component (Bileşeni)
// Fonksiyonel component
const Footer = () => (
  <footer>
    <div className="footer-wrapper">
      <p>Copyright 2020</p>
    </div>
  </footer>
);

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
          <p>Copyright 2020</p>
        </div>
      </footer>
    );
  }
}

// Ana uygulama veya üst (parent) veya kapsayıcı (container) component
// Fonksiyonel Component
const App = () => (
  <div className="app">
    <Header />
    <Main />
    <Footer />
  </div>
);

// Ana uygulama veya üst (parent) veya kapsayıcı (container) component
// Class Component
class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="app">
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
}
```

Tüm class tabanlı component'leri tek dosyada birleştirelim:

```js
//index.js

import React from "react";
import ReactDOM from "react-dom";

// class tabanlı component
class Header extends React.Component {
  constructor(props) {
    super(props);
    // constructor içindeki kod diğer tüm kodlardan önce çalışır
  }
  render() {
    return (
      <header>
        <div className="header-wrapper">
          <h1>Welcome to 30 Days Of React</h1>
          <h2>Getting Started React</h2>
          <h3>JavaScript Library</h3>
          <p>Asabeneh Yetayeh</p>
          <small>Oct 7, 2020</small>
        </div>
      </header>
    );
  }
}

// TechList Component (Bileşeni)
// class tabanlı component
class TechList extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const techs = ["HTML", "CSS", "JavaScript"];
    const techsFormatted = techs.map((tech) => <li key={tech}>{tech}</li>);
    return techsFormatted;
  }
}

// Main Component (Bileşeni)
// Class Component
class Main extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <main>
        <div className="main-wrapper">
          <p>Prerequisite to get started react.js:</p>
          <ul>
            <TechList />
          </ul>
        </div>
      </main>
    );
  }
}

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
          <p>Copyright 2020</p>
        </div>
      </footer>
    );
  }
}

// Ana uygulama veya üst (parent) veya kapsayıcı (container) component
// Class Component
class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="app">
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
```

## Class Component'ta Props'a Erişim

Props (Özellikler)'in, bir component'ten diğerine veri göndermenin yolu olduğunu ya da başka bir deyişle props'un bir veri taşıyıcısı olduğunu belirtmiştik. Bu nedenle, class tabanlı component'te de props'u işlememiz gerekir. Bir class tabanlı component'in props'una _this_ anahtar kelimesini kullanarak erişebiliriz. Aşağıdaki örneğe bakın:

```js
// index.js

import React from "react";
import ReactDOM from "react-dom";

// class tabanlı component
class Header extends React.Component {
  constructor(props) {
    super(props);
    // constructor içindeki kod diğer tüm kodlardan önce çalışır
  }
  render() {
    return (
      <header>
        <div className="header-wrapper">
          <h1>{this.props.data.welcome}</h1>
          <h2>{this.props.data.title}</h2>
          <h3>
            {this.props.data.author.firstName} {this.props.data.author.lastName}
          </h3>
          <small>{this.props.data.date}</small>
        </div>
      </header>
    );
  }
}
const App = () => {
  const data = {
    welcome: "Welcome to 30 Days Of React",
    title: "Getting Started React",
    subtitle: "JavaScript Library",
    author: {
      firstName: "Asabeneh",
      lastName: "Yetayeh",
    },
    date: "Oct 7, 2020",
  };

  return (
    <div className="app">
      <Header data={data} />
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
```

Yukarıdaki örnekte görüldüğü gibi, props'tan veriyi almak için her seferinde _props.data_ yazmamız gerekiyor. Destructuring (Parçalama) kullanarak bu tekrarı önleyebiliriz:

```js
// index.js

import React from "react";
import ReactDOM from "react-dom";

// class tabanlı component
class Header extends React.Component {
  constructor(props) {
    super(props);
    // constructor içindeki kod diğer tüm kodlardan önce çalışır
  }
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
const App = () => {
  const data = {
    welcome: "Welcome to 30 Days Of React",
    title: "Getting Started React",
    subtitle: "JavaScript Library",
    author: {
      firstName: "Asabeneh",
      lastName: "Yetayeh",
    },
    date: "Oct 6, 2020",
  };

  return (
    <div className="app">
      <Header data={data} />
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
```

Yukarıdaki kodun bir öncekinden daha temiz olduğunu görebilirsiniz. Şimdi sahip olduğumuz tüm component'leri temizleyip birleştirelim:

```js
// index.js

import React from "react";
import ReactDOM from "react-dom";

// class tabanlı component
class Header extends React.Component {
  constructor(props) {
    super(props);
    // constructor içindeki kod diğer tüm kodlardan önce çalışır
  }
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

// TechList Component (Bileşeni)
// class tabanlı component
class TechList extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { techs } = this.props;
    const techsFormatted = techs.map((tech) => <li key={tech}>{tech}</li>);
    return techsFormatted;
  }
}

// Main Component (Bileşeni)
// Class Component
class Main extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <main>
        <div className="main-wrapper">
          <p>Prerequisite to get started react.js:</p>
          <ul>
            <TechList techs={this.props.techs} />
          </ul>
        </div>
      </main>
    );
  }
}

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
  render() {
    const data = {
      welcome: "Welcome to 30 Days Of React",
      title: "Getting Started React",
      subtitle: "JavaScript Library",
      author: {
        firstName: "Asabeneh",
        lastName: "Yetayeh",
      },
      date: "Oct 7, 2020",
    };
    const techs = ["HTML", "CSS", "JavaScript"];

    return (
      <div className="app">
        <Header data={data} />
        <Main techs={techs} />
        <Footer date={new Date()} />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
```

## Class Tabanlı Component'ta Metotlar

Class tabanlı component'te metotlara erişiriz. Çoğu zaman farklı metotları üst (parent) component'te yazarız ve bunları alt (child) component'lere geçiririz. Uygulamayı görelim.

Bu component'e bir metot ekleyelim:

```js
//index.js

import React from "react";
import ReactDOM from "react-dom";

// class tabanlı component
class Header extends React.Component {
  greetPeople = () => {
    alert("Welcome to 30 Days Of React Challenge, 2020");
  };
  render() {
    return (
      <header>
        <div className="header-wrapper">
          <h1>Welcome to 30 Days Of React</h1>
          <h2>Getting Started React</h2>
          <h3>JavaScript Library</h3>
          <p>Asabeneh Yetayeh</p>
          <small>Oct 7, 2020</small>
          <button onClick={this.greetPeople}> Greet </button>
        </div>
      </header>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Header />, rootElement);
```

Metodu çağırmak veya tetiklemek event oluştuğunda gerçekleşir. Bu nedenle bir metodu event listener'a geçirirken metodu çağırmayın (parantez koymayın).

Şimdi sahip olduğumuz koda gerekli tüm metotları ekleyelim:

```js
// index.js

import React from "react";
import ReactDOM from "react-dom";
import asabenehImage from "./images/asabeneh.jpg";

// User Card Component (Bileşeni)
const UserCard = ({ user: { firstName, lastName, image } }) => (
  <div className="user-card">
    <img src={image} alt={firstName} />
    <h2>
      {firstName}
      {lastName}
    </h2>
  </div>
);

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
  margin: 3,
  cursor: "pointer",
  fontSize: 18,
  color: "white",
};

// class tabanlı component
class Header extends React.Component {
  constructor(props) {
    super(props);
    // constructor içindeki kod diğer tüm kodlardan önce çalışır
  }
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

// TechList Component (Bileşeni)
// class tabanlı component
class TechList extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { techs } = this.props;
    const techsFormatted = techs.map((tech) => <li key={tech}>{tech}</li>);
    return techsFormatted;
  }
}

// Main Component (Bileşeni)
// Class Component
class Main extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <main>
        <div className="main-wrapper">
          <p>Prerequisite to get started react.js:</p>
          <ul>
            <TechList techs={this.props.techs} />
          </ul>
          <UserCard user={this.props.user} />
          <Button
            text="Greet People"
            onClick={this.props.greetPeople}
            style={buttonStyles}
          />
          <Button
            text="Show Time"
            onClick={this.props.handleTime}
            style={buttonStyles}
          />
        </div>
      </main>
    );
  }
}

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
    return ` ${month} ${date}, ${year}`;
  };
  handleTime = () => {
    alert(this.showDate(new Date()));
  };
  greetPeople = () => {
    alert("Welcome to 30 Days Of React Challenge, 2020");
  };
  render() {
    const data = {
      welcome: "Welcome to 30 Days Of React",
      title: "Getting Started React",
      subtitle: "JavaScript Library",
      author: {
        firstName: "Asabeneh",
        lastName: "Yetayeh",
      },
      date: "Oct 7, 2020",
    };
    const techs = ["HTML", "CSS", "JavaScript"];

    // spread operatörü kullanarak data nesnesindeki author'ı user değişkenine kopyalama
    const user = { ...data.author, image: asabenehImage };

    return (
      <div className="app">
        <Header data={data} />
        <Main
          user={user}
          techs={techs}
          handleTime={this.handleTime}
          greetPeople={this.greetPeople}
        />

        <Footer date={new Date()} />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
```

Çoğu zaman kapsayıcı (container) veya üst (parent) component class component olarak yazılabilir; diğerleri ise fonksiyonel veya sunum (presentational) component olarak yazılabilir. Veri genellikle üst component'ten alt (child) component'e akar ve bu tek yönlüdür. Ancak React'ın en son sürümü, uygulamamızdaki her component'i yalnızca fonksiyonel component'lerle yazmamıza olanak tanımaktadır. Bu, önceki sürümlerde mümkün değildi.

Bir sonraki bölümde, React'ın kalbi olan State (Durum)'u ele alacağız. State (Durum), React component'inin her state değişikliğinde yeniden render edilmesine (tekrar oluşturulmasına) olanak tanır.

# Egzersizler

## Egzersizler: Seviye 1

1. Saf bir JavaScript fonksiyonunu nasıl yazarsınız?
2. Inheritance (Kalıtım) nedir ve bir üst class'tan (parent class) nasıl child class oluşturursunuz?
3. Class tabanlı React Component (Bileşeni) nedir?
4. Fonksiyonel React Component (Bileşeni) ile class tabanlı React Component (Bileşeni) arasındaki fark nedir?
5. Fonksiyonel component'ler yerine class tabanlı component'leri ne zaman kullanmamız gerekir?
6. Class tabanlı component'in kullanım alanları nelerdir?
7. Daha sık hangi tür component kullanırsınız? Fonksiyonel mi, class tabanlı mı?
8. React yaşam döngüsü (life cycle) nedir? (henüz ele alınmadı)
9. React'ta State (Durum) nedir? (henüz ele alınmadı)

## Egzersizler: Seviye 2

Önceki gün egzersizlerini class tabanlı component'lere çevirerek class tabanlı component hakkında daha fazla bilgi edinin.

## Egzersizler: Seviye 3

Yakında...

🎉 TEBRİKLER! 🎉

[<< Gün 6](../06_Gun_Dizi_Haritalama/06_dizi_haritalama.md) | [Gün 8 >>](../08_Gun_State/08_state.md)
