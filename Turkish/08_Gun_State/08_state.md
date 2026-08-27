<div align="center">
  <h1> 30 Days Of React: State (Durum)</h1>
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

[<< Gün 7](../07_Gun_Class_Bilesenler/07_class_bilesenler.md) | [Gün 9 >>](../09_Gun_Kosullu_Render/09_kosullu_render.md)

![30 Days of React banner](../../images/30_days_of_react_banner_day_8.jpg)

- [State (Durum)](#state-durum)
  - [State (Durum) Nedir?](#state-durum-nedir)
  - [State nasıl ayarlanır?](#state-nasıl-ayarlanır)
  - [Bir JavaScript metodu ile state'i sıfırlama](#bir-javascript-metodu-ile-statei-sıfırlama)
  - [Egzersizler](#egzersizler)
    - [Egzersizler: Seviye 1](#egzersizler-seviye-1)
    - [Egzersizler: Seviye 2](#egzersizler-seviye-2)
    - [Egzersizler: Seviye 3](#egzersizler-seviye-3)

# State (Durum)

## State (Durum) Nedir?

State nedir? State'in İngilizce anlamı, _belirli bir anda birisinin veya bir şeyin içinde bulunduğu özel koşul_dur.

State'in bir şeylerin durumu olduğunu görelim:

- Mutlu musunuz yoksa üzgün mü?
- Işık açık mı yoksa kapalı mı?
- Mevcut musunuz yoksa yok musunuz?
- Dolu mu yoksa boş mu?

Örneğin, 30 Days Of React meydan okumasını oluşturmaktan keyif aldığım için mutluyum. Sizin de mutlu olduğunuza inanıyorum.

State (Durum), React'ta state verisi değiştiğinde component'in yeniden render edilmesini sağlayan bir nesnedir.

## State nasıl ayarlanır?

Class tabanlı bir component'in constructor'ı içinde veya dışında bir başlangıç state'i belirleriz. State'i doğrudan değiştirmeyiz ya da mutate etmeyiz; bunun yerine yeni bir state'e sıfırlamak için _setState()_ metodunu kullanırız. Aşağıdaki örnekte görüldüğü gibi, state nesnesinde başlangıç değeri 0 olan count bulunmaktadır. State nesnesine _this.state_ ve özellik adını kullanarak erişebiliriz. Aşağıdaki örneğe bakın:

```js
// index.js
import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
  // state'i tanımlama
  state = {
    count: 0,
  };
  render() {
    // state değerine erişme
    const count = this.state.count;
    return (
      <div className="App">
        <h1>{count} </h1>
      </div>
    );
  }
}
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
```

Yukarıdaki kodu çalıştırırsanız tarayıcıda sıfır görürsünüz. JavaScript metodu kullanarak state değerini değiştirerek count değerini artırabilir veya azaltabiliriz.

## Bir JavaScript metodu ile state'i sıfırlama

Şimdi bir düğmeye tıklayarak count değerini artıran veya azaltan bazı metotlar ekleyelim. Artırmak için bir düğme ve azaltmak için bir düğme ekleyelim. State'i ayarlamak için React'ın _this.setState_ metodunu kullanırız. Aşağıdaki örneğe bakın:

```js
// index.js
import React from "react";
import ReactDOM from "react-dom";
class App extends React.Component {
  // state'i tanımlama
  state = {
    count: 0,
  };
  render() {
    // state değerine erişme
    const count = this.state.count;
    return (
      <div className="App">
        <h1>{count} </h1>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Add One
        </button>
      </div>
    );
  }
}
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
```

Yukarıdaki örneği anlarsanız, eksi bir metodu eklemek kolay olacaktır. Click event'e eksi bir metot ekleyelim:

```js
// index.js
import React from "react";
import ReactDOM from "react-dom";
class App extends React.Component {
  // state'i tanımlama
  state = {
    count: 0,
  };
  render() {
    // state değerine erişme
    const count = this.state.count;
    return (
      <div className="App">
        <h1>{count} </h1>

        <div>
          <button
            onClick={() => this.setState({ count: this.state.count + 1 })}
          >
            Add One
          </button>{" "}
          <button
            onClick={() => this.setState({ count: this.state.count - 1 })}
          >
            Minus One
          </button>
        </div>
      </div>
    );
  }
}
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
```

Her iki düğme de iyi çalışıyor; ancak kodu iyi yapılandırmamız gerekiyor. Component'te ayrı metotlar oluşturalım:

```js
// index.js
import React from "react";
import ReactDOM from "react-dom";
class App extends React.Component {
  // state'i tanımlama
  state = {
    count: 0,
  };
  // state'e bir ekleyen metot
  addOne = () => {
    this.setState({ count: this.state.count + 1 });
  };

  // state'ten bir çıkaran metot
  minusOne = () => {
    this.setState({ count: this.state.count - 1 });
  };
  render() {
    // state değerine erişme
    const count = this.state.count;
    return (
      <div className="App">
        <h1>{count} </h1>

        <div>
          <button className="btn btn-add" onClick={this.addOne}>
            +1
          </button>{" "}
          <button className="btn btn-minus" onClick={this.minusOne}>
            -1
          </button>
        </div>
      </div>
    );
  }
}
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
```

State hakkında daha fazla örnek yapalım. Aşağıdaki örnekte ya köpek ya da kedi gösteren küçük bir uygulama geliştireceğiz. Başlangıç state'ini kedi olarak ayarlayabiliriz; tıklandığında köpek gösterecek ve bu şekilde devam edecek. Hayvanı dönüşümlü olarak değiştiren bir metoda ihtiyacımız var. Canlı örneği görmek için [buraya](https://codepen.io/Asabeneh/full/LYVxKpq) tıklayın:

```js
// index.js
import React from "react";
import ReactDOM from "react-dom";
class App extends React.Component {
  // state'i tanımlama
  state = {
    image: "https://www.smithsstationah.com/imagebank/eVetSites/Feline/01.jpg",
  };
  changeAnimal = () => {
    let dogURL =
      "https://static.onecms.io/wp-content/uploads/sites/12/2015/04/dogs-pembroke-welsh-corgi-400x400.jpg";
    let catURL =
      "https://www.smithsstationah.com/imagebank/eVetSites/Feline/01.jpg";
    let image = this.state.image === catURL ? dogURL : catURL;
    this.setState({ image });
  };

  render() {
    return (
      <div className="App">
        <h1>30 Days Of React</h1>
        <div className="animal">
          <img src={this.state.image} alt="animal" />
        </div>

        <button onClick={this.changeAnimal} className="btn btn-add">
          Change
        </button>
      </div>
    );
  }
}
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
```

Şimdi şimdiye kadar sahip olduğumuz tüm kodları bir araya koyalım ve gerekli olduğunda state'i de uygulayalım:

```js
// index.js
import React from "react";
import ReactDOM from "react-dom";
import asabenehImage from "./images/asabeneh.jpg";

// Ay, gün ve yılı gösteren fonksiyon

const showDate = (time) => {
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

const Count = ({ count, addOne, minusOne }) => (
  <div>
    <h1>{count} </h1>
    <div>
      <Button text="+1" onClick={addOne} style={buttonStyles} />
      <Button text="-1" onClick={minusOne} style={buttonStyles} />
    </div>
  </div>
);

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
    const {
      techs,
      user,
      greetPeople,
      handleTime,
      changeBackground,
      count,
      addOne,
      minusOne,
    } = this.props;
    return (
      <main>
        <div className="main-wrapper">
          <p>Prerequisite to get started react.js:</p>
          <ul>
            <TechList techs={techs} />
          </ul>
          <UserCard user={user} />
          <Button
            text="Greet People"
            onClick={greetPeople}
            style={buttonStyles}
          />
          <Button text="Show Time" onClick={handleTime} style={buttonStyles} />
          <Button
            text="Change Background"
            onClick={changeBackground}
            style={buttonStyles}
          />
          <Count count={count} addOne={addOne} minusOne={minusOne} />
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
  state = {
    count: 0,
    styles: {
      backgroundColor: "",
      color: "",
    },
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
    return ` ${month} ${date}, ${year}`;
  };
  addOne = () => {
    this.setState({ count: this.state.count + 1 });
  };

  // state'ten bir çıkaran metot
  minusOne = () => {
    this.setState({ count: this.state.count - 1 });
  };
  handleTime = () => {
    alert(this.showDate(new Date()));
  };
  greetPeople = () => {
    alert("Welcome to 30 Days Of React Challenge, 2020");
  };
  changeBackground = () => {};
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
    const date = new Date();
    // spread operatörü kullanarak data nesnesindeki author'ı user değişkenine kopyalama
    const user = { ...data.author, image: asabenehImage };

    return (
      <div className="app">
        {this.state.backgroundColor}
        <Header data={data} />
        <Main
          user={user}
          techs={techs}
          handleTime={this.handleTime}
          greetPeople={this.greetPeople}
          changeBackground={this.changeBackground}
          addOne={this.addOne}
          minusOne={this.minusOne}
          count={this.state.count}
        />
        <Footer date={new Date()} />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
```

Artık State (Durum) konusunu çok iyi anladığınıza inanıyorum. Bundan sonra diğer bölümlerde de state kullanacağız; çünkü state ve props, React uygulamasının çekirdeğidir.

## Egzersizler

### Egzersizler: Seviye 1

1. Bugün state'iniz nasıldı? Mutlu musunuz? Umarım öyledir. Buraya kadar geldiyseniz mutlu olmalısınız.
2. React'ta State (Durum) nedir?
3. React'ta Props (Özellikler) ve State (Durum) arasındaki fark nedir?
4. Bir React component'inde state'e nasıl erişirsiniz?
5. Bir React component'inde state'i nasıl ayarlarsınız?

### Egzersizler: Seviye 2

1. React state'i kullanarak sayfanın arka plan rengini değiştirin. Bu tekniği portföyünüz için karanlık mod uygulamak amacıyla kullanabilirsiniz.

![Change Background](../../images/08_day_changing_background_exercise.gif)

2. Uzun süredir devam eden kapanmanın ardından seyahat etmeyi düşünüyor olabilirsiniz ve nereye gideceğinizi bilmiyorsunuzdur. Tatil hedefinizi seçen rastgele bir ülke seçici geliştirmek isteyebilirsiniz.

![Change Background](../../images/08_day_select_country_exercise.gif)

### Egzersizler: Seviye 3

Yakında

🎉 TEBRİKLER! 🎉

[<< Gün 7](../07_Gun_Class_Bilesenler/07_class_bilesenler.md) | [Gün 9 >>](../09_Gun_Kosullu_Render/09_kosullu_render.md)
