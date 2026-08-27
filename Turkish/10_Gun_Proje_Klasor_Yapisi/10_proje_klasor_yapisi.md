<div align="center">
  <h1> 30 Days Of React: React Proje Klasör Yapısı (Project Folder Structure)</h1>
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

[<< Gün 9](../09_Gun_Kosullu_Render/09_kosullu_render.md) | [Gün 11 >>](../11_Gun_Olaylar/11_olaylar.md)

![30 Days of React banner](../../images/30_days_of_react_banner_day_10.jpg)

- [React Proje Klasör Yapısı ve Dosya İsimlendirme](#react-proje-klasör-yapısı-ve-dosya-i̇simlendirme)
  - [Dosya İsimlendirme](#dosya-i̇simlendirme)
  - [Klasör](#klasör)
  - [Components (Bileşenler) Klasörü](#components-bileşenler-klasörü)
  - [Fragment (Parça)](#fragment-parça)
- [Egzersizler](#egzersizler)
  - [Egzersizler: Seviye 1](#egzersizler-seviye-1)
  - [Egzersizler: Seviye 2](#egzersizler-seviye-2)
  - [Egzersizler: Seviye 3](#egzersizler-seviye-3)

# React Proje Klasör Yapısı ve Dosya İsimlendirme

React projesinde tek bir klasör yapısı ya da dosya isimlendirmesi kullanmanın zorunlu bir yolu yoktur. Çoğu zaman bu tür seçimler bir ekip tarafından yapılabilir. Bazen bir şirketin hangi kod kurallarının, klasör yapısının ve dosya isimlendirmesinin kullanılacağına dair geliştirilmiş yönergeleri olabilir. React projesini yapılandırmanın doğru ya da yanlış yolu yoktur; ancak bazı yapılar ölçeklenebilirlik, sürdürülebilirlik, dosyalar üzerinde çalışma kolaylığı ve anlaşılması kolay yapı açısından diğerlerinden daha iyidir. Klasör yapısı hakkında daha fazla bilgi edinmek isterseniz aşağıdaki makaleleri inceleyebilirsiniz:

- [React Folder Structure by https://www.devaradise.com ](https://www.devaradise.com/react-project-folder-structure)
- [React Folder Structure by www.robinwieruch.de ](https://www.robinwieruch.de/react-folder-structure)
- [React Folder Structure by Faraz Ahmad](https://dev.to/farazamiruddin/an-opinionated-guide-to-react-folder-structure-file-naming-1l7i)
- [React Folder Structure by https://maxrozen.com/](https://maxrozen.com/guidelines-improve-react-app-folder-structure/)

Farklı kuralların bir karışımını kullanıyorum. Dilerseniz bunu takip edebilirsiniz; ancak lütfen sizin için anlamlı olan bir yapıya sadık kalın.

## Dosya İsimlendirme

Tüm React projelerimde, tüm component'ler için CamelCase (deve harfi) dosya adı kullanacağım. Açıklayıcı ve uzun isimler kullanmayı tercih ederim.

## Klasör

Tüm görselleri, ikonları ve fontları assets klasöründe, tüm CSS stil dosyalarını ise styles klasöründe toplamayı kolay buluyorum. Tüm component'ler components klasöründe olacak.

Şimdiye kadar index.js dosyası üzerinde çalışıyorduk. index.js'de çok sayıda component bulunuyor. Bugün her component'i ayrı bir dosyaya taşıyacağız ve tüm dosyaları App.js'e import edeceğiz. Bu süreçte klasör yapımı göreceksiniz. Şu anda src dizinindeyiz. Tüm klasör yapısı src dizininin içinde olacak. index.js dosyasından başlayalım. index.js dosyasına ek olarak, bir App.js dosyası oluşturalım ve şimdilik sahip olduğumuz component'lerin çoğunu App.js'e taşıyalım. index.js, component'i index.html ile bağlayan ana kapınızdır.

```js
// src/index.js
// index.js
import React from "react";
import ReactDOM from "react-dom";

const App = () => <h1>Welcome to 30 Days Of React</h1>;

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
```

Yukarıdaki kod parçasında App component'i bulunmaktadır. App component'ini kendi dosyasına, App.js'e taşıyalım:

```js
// src/App.js
import React from "react";
const App = () => <h1>Welcome to 30 Days Of React</h1>;
```

Component'i başka bir dosyaya import etmek için dışa aktarmamız (export etmemiz) gerekiyor. Default veya named (isimli) export olarak dışa aktarabiliriz. Bir dosyada bir default export ve çok sayıda named export yapılabilir. Önce named export ile uygulayalım, ardından default export'a geçelim.

Named export yapmak için _let_ veya _const_'tan önce sadece _export_ anahtar kelimesini ekleriz:

```js
// src/App.js
import React from "react";

// ok fonksiyonunda named export
export const App = () => <h1>Welcome to 30 Days Of React</h1>;
```

Normal fonksiyon tanımlamasında dışa aktarma:

```js
// src/App.js
import React from "react";
// normal fonksiyonda named export, function declaration
export function App() {
  return <h1>Welcome to 30 Days Of React</h1>;
}
```

Şimdi App component'ini App.js dosyasından index.js dosyasına import edelim:

```js
// index.js
import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
```

Named export'u gördük; şimdi default export ile uygulayalım. Bunu iki şekilde yapabiliriz; ancak component'leri dışa aktarırken ikinci yöntem önerilir; çünkü bazen bir component'i başka bir higher order component (yüksek dereceli bileşen) ile sarmalayabiliriz:

```js
// src/App.js
import React from "react";
// ok fonksiyonunda default export
const App = () => <h1>Welcome to 30 Days Of React</h1>;
export default App;
```

```js
// src/App.js
import React from "react";
// default export, normal fonksiyon
export default function App() {
  return <h1>Welcome to 30 Days Of React</h1>;
}
```

```js
// src/App.js
// Çoğu durumda önerilen yöntem
import React from "react";
const App = () => <h1>Welcome to 30 Days Of React</h1>;
export default App;
```

Bir component default olarak dışa aktarılmışsa import ederken süslü paranteze gerek yoktur:

```js
// index.js
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
```

Şimdiye kadar oluşturduğumuz component'leri hatırlarsanız, hepsini bir arada tutuyorduk. Bu şekilde çalışmak kolay değildir. Şimdi tüm component'leri ayrı bir dosyaya taşıyacağız:

```js
// index.js
import React from "react";
import ReactDOM from "react-dom";
import asabenehImage from "./images";
import { countriesData } from "./data/countries";

// Header component (Bileşeni)
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

const Country = ({
  country: { name, capital, flag, languages, population, currency },
}) => {
  const formatedCapital =
    capital.length > 0 ? (
      <>
        <span>Capital: </span>
        {capital}
      </>
    ) : (
      ""
    );
  const formatLanguage = languages.length > 1 ? `Languages` : `Language`;
  return (
    <div className="country">
      <div className="country_flag">
        <img src={flag} alt={name} />
      </div>
      <h3 className="country_name">{name.toUpperCase()}</h3>
      <div className="country_text">
        <p>{formatedCapital}</p>
        <p>
          <span>{formatLanguage}: </span>
          {languages.join(", ")}
        </p>
        <p>
          <span>Population: </span>
          {population.toLocaleString()}
        </p>
        <p>
          <span>Currency: </span>
          {currency}
        </p>
      </div>
    </div>
  );
};

// User Card Component (Bileşeni)
const UserCard = () => (
  <div className="user-card">
    <img src={asabenehImage} alt="asabeneh image" />
    <h2>Asabeneh Yetayeh</h2>
  </div>
);

// Onaltılık (hexadecimal) renk üreteci
const hexaColor = () => {
  let str = "0123456789abcdef";
  let color = "";
  for (let i = 0; i < 6; i++) {
    let index = Math.floor(Math.random() * str.length);
    color += str[index];
  }
  return "#" + color;
};

const HexaColor = () => <div>{hexaColor()}</div>;

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
  margin: 3,
  cursor: "pointer",
  fontSize: 22,
  color: "white",
  margin: "0 auto",
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
    const techs = ["HTML", "CSS", "JavaScript"];

    return (
      <div className="app">
        <Header data={data} />

        <Main
          techs={techs}
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

## Components (Bileşenler) Klasörü

src dizininin içinde tüm component'leri ayrı bir klasörde toplayacağız:

```sh
src
  App.js
  index.js
  components
   -auth
    -Signup.js
    -Signin.js
    -ForgotPassword.js
    -ResetPassword.js
  header
   -Header.js
  footer
   -Footer.js
  assets
   -images
   -icons
   -fonts
  styles
   -button.js
   -button.scss
 utils
  -random-id.js
  -display-time.js
  -generate-color.js
 shared
  -Button.js
  -InputField.js
  -TextAreaField.js
```

src içinde components dizini oluşturalım; components içinde header dizini oluşturalım. header dizini içinde Header.js dosyası oluşturalım:

```js
// src/components/header/Header.js
import React from "react";

const Header = ({
  data: {
    welcome,
    title,
    subtitle,
    author: { firstName, lastName },
    date,
  },
}) => {
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
};

export default Header;
```

Header'a benzer şekilde, tüm component'leri ilgili dosyalarına taşıyalım. index.html'deki tüm CSS dosyaları styles klasörüne taşınacak; her parça kendi dosyasına ayrıldıktan sonra styles klasörünü kontrol etmeye çalışın.

## Fragment (Parça)

Fragment'lar (Parçalar), JSX'te gereksiz üst element kullanmaktan kaçınmanın bir yoludur. Bir fragment uygulayalım. Fragment'ı react modülünden import ediyoruz. Aşağıda görüldüğü gibi React ve fragment'ı virgül ayırımı kullanarak birlikte import ettik:

```js
import React, { Fragment } from "react";

const Skills = () => {
  return (
    <Fragment>
      <li>HTML</li>
      <li>CSS</li>
      <li>JavaScript</li>
    </Fragment>
  );
};
const RequiredSkills = () => {
  return (
    <ul>
      <Skills />
    </ul>
  );
};
```

Fragment modülünü React'tan şu şekilde çıkarmak da mümkündür:

```js
import React from "react";

const Skills = () => {
  return (
    <React.Fragment>
      <li>HTML</li>
      <li>CSS</li>
      <li>JavaScript</li>
    </React.Fragment>
  );
};

const RequiredSkills = () => {
  return (
    <ul>
      <Skills />
    </ul>
  );
};
```

React'ın son sürümünde bu işaretler kullanılarak çıkarmadan veya import etmeden de yazılabilir (<> </>):

```js
import React from "react";

// Önerilen yöntem
const Skills = () => {
  return (
    <>
      <li>HTML</li>
      <li>CSS</li>
      <li>JavaScript</li>
    </>
  );
};

const RequiredSkills = () => {
  return (
    <ul>
      <Skills />
    </ul>
  );
};
```

Class tabanlı component yaparken React.Component kullanıyorduk; bunun yerine sadece Component'i import ederek kodu daha temiz yazabiliriz. Bir örnek görelim:

```js
import React from "react";

// Component'i import etmeden
// Önerilmez
class App extends React.Component {
  render() {
    return <h1> 30 Days of React </h1>;
  }
}
```

```js
import React, { Component } from "react";

// Bu önerilen yöntemdir
class App extends Component {
  render() {
    return <h1> 30 Days of React </h1>;
  }
}
```

Harika iş çıkardınız. Beyniniz ve kaslarınız için bazı egzersizler yapma zamanı.

# Egzersizler

## Egzersizler: Seviye 1

1. React Klasör Yapısı ve Dosya İsimlendirmesinin önemi nedir?
2. Dosya nasıl dışa aktarılır (export edilir)?
3. Dosya nasıl içe aktarılır (import edilir)?
4. Bir component veya modül oluşturun ve named ya da default export ile dışa aktarın.
5. Bir component veya modül oluşturun ve import edin.
6. Sahip olduğunuz tüm component'leri farklı bir klasör yapısına taşıyın.

## Egzersizler: Seviye 2

1. Şimdiye kadar oluşturduğumuz component'leri kullanarak basit bir portföy yapın. 8. gün meydan okumasında yazdığımız fonksiyonu kullanarak karanlık mod (dark mode) uygulayın.

## Egzersizler: Seviye 3

Yakında

🎉 TEBRİKLER! 🎉

[<< Gün 9](../09_Gun_Kosullu_Render/09_kosullu_render.md) | [Gün 11 >>](../11_Gun_Olaylar/11_olaylar.md)
