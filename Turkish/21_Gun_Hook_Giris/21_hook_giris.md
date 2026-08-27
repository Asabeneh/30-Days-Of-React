<div align="center">
  <h1> 30 Days Of React: React Hook'larına Giriş (Introducing React Hooks)</h1>
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

[<< Gün 20](../20_Gun_Projeler/20_projeler.md) | [Gün 22 >>](../22_Gun_Hook_ile_Form/22_hook_ile_form.md)

![30 Days of React banner](../../images/30_days_of_react_banner_day_21.jpg)

- [React Hook'larına Giriş](#react-hooklarına-giriş-introducing-react-hook)
  - [Temel Hook'lar](#temel-hooklar)
    - [State Hook](#state-hook)
    - [Effect Hook](#effect-hook)
    - [Context Hook](#context-hook)
  - [Ek Hook'lar](#ek-hooklar)
- [Egzersizler](#egzersizler)
  - [Egzersizler: Seviye 1](#egzersizler-seviye-1)

# React Hook'larına Giriş (Introducing React Hook)

Önceki bölümde, React'in eski sürümü olan hook'suz (class tabanlı) yaklaşımı öğrendiniz. Günümüzde hook'lar React'e tanıtılmıştır.

Hook'lar React 16.8 ile birlikte gelen yeni bir eklentidir. Class bileşeni yazmadan state, yaşam döngüsü metodları ve diğer React özelliklerini kullanmanıza olanak tanırlar. Hook kullanırsak uygulamanın tamamında yalnızca fonksiyonel bileşenler kullanabiliriz. Daha ayrıntılı açıklama için [React dokümantasyonu](https://reactjs.org/docs/hooks-reference.html)'nu inceleyebilirsiniz.

React'e farklı hook'lar tanıtılmıştır: Temel hook'lar ve ek hook'lar.

## Temel Hook'lar (Basic Hooks)

Temel hook'lar şunlardır:

- useState
- useEffect
- useContext

### State Hook

Hook'lar kullanarak class tabanlı bileşen yazmadan state'e erişebiliriz. Gün 8'de class tabanlı bileşenler için kullandığımız örneği kullanalım.

Hook kullanmak için önce _useState_'i react'ten import etmemiz gerekir. useState, bir argüman alıp mevcut state'i ve onu güncellemenizi sağlayan fonksiyonu döndüren bir fonksiyondur.

```js
// index.js
import React, { useState } from "react";
import ReactDOM from "react-dom";

const App = () => {
  // Yeni state değişkeni bildirimi
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <h1>{count} </h1>
      <button onClick={() => setCount(count + 1)}>Bir Ekle</button>
    </div>
  );
};
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
```

State'i güncellemek için setCount kullanırız. Başlangıç state değeri 0'dır.

Yukarıdaki örnekte artırma metodu kullandık. Şimdi bir de azaltma metodu ekleyelim.

```js
// index.js
import React, { useState } from "react";
import ReactDOM from "react-dom";

const App = () => {
  // Yeni state değişkeni bildirimi
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <h1>{count} </h1>
      <button onClick={() => setCount(count + 1)}>Bir Ekle</button>{" "}
      <button onClick={() => setCount(count - 1)}>Bir Çıkar</button>
    </div>
  );
};
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
```

Süslü parantezlerin içine fonksiyon yazmak yerine ayrı fonksiyon da yazabiliriz.

```js
// index.js
import React, { useState } from "react";
import ReactDOM from "react-dom";

const App = () => {
  // Yeni state değişkeni bildirimi
  const [count, setCount] = useState(0);
  const addOne = () => {
    let value = count + 1;
    setCount(value);
  };
  const minusOne = () => {
    let value = count - 1;
    setCount(value);
  };
  return (
    <div className="App">
      <h1>{count} </h1>
      <button onClick={addOne}>Bir Ekle</button>{" "}
      <button onClick={minusOne}>Bir Çıkar</button>
    </div>
  );
};
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
```

State hakkında daha fazla örnek yapalım. Aşağıdaki örnekte köpek ya da kedi gösteren küçük bir uygulama geliştireceğiz. Başlangıç state'ini kedi olarak ayarlayıp tıklandığında köpek gösterecek ve bunu dönüşümlü yapacağız. Hayvanı dönüşümlü olarak değiştiren bir metoda ihtiyacımız var. Aşağıdaki koda bakın. Canlı görmek için [tıklayın](https://codepen.io/Asabeneh/full/LYVxKpq).

```js
// index.js
import React, { useState } from "react";
import ReactDOM from "react-dom";
const App = () => {
  // state bildirimi
  const url =
    "https://www.smithsstationah.com/imagebank/eVetSites/Feline/01.jpg";

  const [image, setImage] = useState(url);

  const changeAnimal = () => {
    let dogURL =
      "https://static.onecms.io/wp-content/uploads/sites/12/2015/04/dogs-pembroke-welsh-corgi-400x400.jpg";
    let catURL =
      "https://www.smithsstationah.com/imagebank/eVetSites/Feline/01.jpg";
    let result = image === catURL ? dogURL : catURL;
    setImage(result);
  };

  return (
    <div className="App">
      <h1>30 Days Of React</h1>
      <div className="animal">
        <img src={image} alt="hayvan" />
      </div>

      <button onClick={changeAnimal} className="btn btn-add">
        Değiştir
      </button>
    </div>
  );
};
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
```

Şimdi şimdiye kadar yazdığımız tüm kodları bir araya getirelim; gerektiğinde useState hook'unu kullanarak state'i uygulayalım.

```js
// index.js
import React, { useState } from "react";
import ReactDOM from "react-dom";
import asabenehImage from "./images/asabeneh.jpg";
import "./index.scss";

// Ay gün yıl gösterme fonksiyonu
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

// Kullanıcı Kartı Bileşeni
const UserCard = ({ user: { firstName, lastName, image } }) => (
  <div className="user-card">
    <img src={image} alt={firstName} />
    <h2>
      {firstName}
      {lastName}
    </h2>
  </div>
);

// Buton bileşeni
const Button = ({ text, onClick, style }) => (
  <button style={style} onClick={onClick}>
    {text}
  </button>
);

// JavaScript nesnesi olarak CSS stilleri
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

const Header = (props) => {
  const {
    welcome,
    title,
    subtitle,
    author: { firstName, lastName },
    date,
  } = props.data;

  return (
    <header style={props.styles}>
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

const Count = ({ count, addOne, minusOne }) => (
  <div>
    <h1>{count} </h1>
    <div>
      <Button text="+1" onClick={addOne} style={buttonStyles} />
      <Button text="-1" onClick={minusOne} style={buttonStyles} />
    </div>
  </div>
);

// Teknoloji Listesi Bileşeni
const TechList = (props) => {
  const { techs } = props;
  const techsFormatted = techs.map((tech) => <li key={tech}>{tech}</li>);
  return techsFormatted;
};

// Ana Bileşen
const Main = (props) => {
  const {
    techs,
    user,
    greetPeople,
    handleTime,
    changeBackground,
    count,
    addOne,
    minusOne,
  } = props;
  return (
    <main>
      <div className="main-wrapper">
        <p>React.js'e başlamak için önkoşullar:</p>
        <ul>
          <TechList techs={techs} />
        </ul>
        <UserCard user={user} />
        <Button
          text="İnsanları Selamla"
          onClick={greetPeople}
          style={buttonStyles}
        />
        <Button
          text="Zamanı Göster"
          onClick={handleTime}
          style={buttonStyles}
        />
        <Button
          text="Arka Planı Değiştir"
          onClick={changeBackground}
          style={buttonStyles}
        />
        <Count count={count} addOne={addOne} minusOne={minusOne} />
      </div>
    </main>
  );
};

// Alt Bilgi Bileşeni
const Footer = (props) => {
  return (
    <footer>
      <div className="footer-wrapper">
        <p>Telif Hakkı {props.date.getFullYear()}</p>
      </div>
    </footer>
  );
};

const App = (props) => {
  const [count, setCount] = useState(0);
  const [backgroundColor, setBackgroundColor] = useState("");

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
  const addOne = () => {
    setCount(count + 1);
  };

  // state'e bir çıkaran metot
  const minusOne = () => {
    setCount(count - 1);
  };
  const handleTime = () => {
    alert(showDate(new Date()));
  };
  const greetPeople = () => {
    alert("30 Günde React Meydan Okumasına Hoş Geldiniz, 2020");
  };
  const changeBackground = () => {};

  const data = {
    welcome: "30 Days Of React'e Hoş Geldiniz",
    title: "React'e Başlarken",
    subtitle: "JavaScript Kütüphanesi",
    author: {
      firstName: "Asabeneh",
      lastName: "Yetayeh",
    },
    date: "Eki 7, 2020",
  };
  const techs = ["HTML", "CSS", "JavaScript"];

  const user = { ...data.author, image: asabenehImage };

  return (
    <div className="app">
      {backgroundColor}
      <Header data={data} />
      <Main
        user={user}
        techs={techs}
        handleTime={handleTime}
        greetPeople={greetPeople}
        changeBackground={changeBackground}
        addOne={addOne}
        minusOne={minusOne}
        count={count}
      />
      <Footer date={new Date()} />
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
```

### Effect Hook

### Context Hook

## Ek Hook'lar (Additional Hook)

# Egzersizler

## Egzersizler: Seviye 1

React hook'larına dönüştürdüğünüz her şeyi yazın.

🎉 TEBRİKLER! 🎉

[<< Gün 20](../20_Gun_Projeler/20_projeler.md) | [Gün 22 >>](../22_Gun_Hook_ile_Form/22_hook_ile_form.md)
