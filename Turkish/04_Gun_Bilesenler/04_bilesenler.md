<div align="center">
  <h1> 30 Days Of React: Bileşenler </h1>
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

[<< Gün 3](../03_Gun_Kurulum/03_kurulum.md) | [Gün 5 >>](../05_Gun_Props/05_props.md)

![30 Days of React banner](../../images/30_days_of_react_banner_day_4.jpg)

- [Bileşenler](#bileşenler)
  - [React'ın Büyük Resmi](#reactın-büyük-resmi)
  - [JavaScript fonksiyonu](#javascript-fonksiyonu)
  - [JavaScript Class](#javascript-class)
  - [React Bileşeni Oluşturma](#react-bileşeni-oluşturma)
    - [Functional Component](#functional-component)
    - [Bileşenleri Render Etme](#bileşenleri-render-etme)
    - [JSX'e Veri Ekleme](#jsxe-veri-ekleme)
    - [Functional Component'lere Daha Fazla Bakış](#functional-componentlere-daha-fazla-bakış)
- [Egzersizler: Bileşenler](#egzersizler-bileşenler)
  - [Egzersizler: Seviye 1](#egzersizler-seviye-1)
  - [Egzersizler: Seviye 2](#egzersizler-seviye-2)
  - [Egzersizler: Seviye 3](#egzersizler-seviye-3)

# Bileşenler

Bir React bileşeni, uygulamanın kullanıcı arayüzünün bir bölümünden sorumlu olan küçük ve yeniden kullanılabilir bir koddur. Bir React uygulaması, bileşenlerin bir araya getirilmesiyle oluşur. React, yeniden kullanılabilir bileşenler oluşturmamıza yardımcı olur. Aşağıdaki diyagram farklı bileşenleri göstermektedir. Tüm bileşenlerin farklı renklerde kenarlıkları vardır. React'ta bir uygulama oluşturmak için farklı bileşenleri bir araya getiririz. Bileşenler oluşturmak için JavaScript fonksiyonlarını veya class'larını kullanırız. Bir fonksiyon kullanırsak bileşen Functional Component olur; bir class kullanırsak class tabanlı bileşen olur.

Bileşenler şu şekilde sınıflandırılabilir:

- Functional Component / Presentational Component / Stateless Component / Dumb Component
- Class Component / Container Component / Statefull Component / Smart Component

Yukarıdaki bileşen sınıflandırması React'ın en son sürümü için geçerli değildir; ancak önceki tanımı ve önceki sürümlerin nasıl çalıştığını bilmek faydalıdır.

O hâlde tüm JSX'leri bileşenlere dönüştürelim. React'taki bileşenler, JSX döndüren JavaScript fonksiyonları veya class'larıdır. Bileşen adı büyük harfle başlamalıdır; ad iki kelimeden oluşuyorsa CamelCase — iki hörgüçlü deve — yazım biçimi kullanılmalıdır.

## React'ın Büyük Resmi

Önceki bölümde bir web sitesinin veya uygulamanın butonlardan, formlardan, metinlerden, medya nesnelerinden, başlık, bölüm, makale ve altbilgiden oluştuğu konusunda hemfikir olduk. Eğer milyon dolarlık bir butonumuz varsa, her ihtiyaç duyduğumuzda sıfırdan oluşturmak yerine bu butonu her zaman kullanabiliriz. Aynı durum giriş alanları, formlar, üstbilgi veya altbilgi için de geçerlidir. İşte bileşenin gücü buradan gelir. Aşağıdaki diyagramda üstbilgi, ana içerik ve altbilgi birer bileşendir. Ana içeriğin içinde ayrıca bir kullanıcı kartı bileşeni ve bir metin bölümü bileşeni bulunmaktadır. Farklı renkler farklı bileşenleri temsil etmektedir. Kaç renk görüyorsunuz? Her renk tek bir bileşeni temsil eder. Bu diyagramda beş bileşen mevcuttur.

![Components](../../images/components_example.png)

React bileşenlerine geçmeden önce fonksiyonları ve class'ları kısaca hatırlayalım.

## JavaScript fonksiyonu

Bir JavaScript fonksiyonu ya klasik fonksiyon ya da ok fonksiyonu (arrow function) olabilir. Bu iki fonksiyon tam olarak aynı değildir; aralarında küçük farklılıklar bulunur.

```js
const getUserInfo = (firstName, lastName, country, title, skills) => {
  return `${firstName} ${lastName},  a ${title} developer based in ${country}. He knows ${skills.join(
    " ",
  )} `;
};
// Bu fonksiyonu çağırırken parametrelere ihtiyacımız var
const skills = ["HTML", "CSS", "JS", "React"];
console.log(
  getUserInfo("Asabeneh", "Yetayeh", "Finland", "FullStack Developer", skills),
);
```

## JavaScript Class

Bir class, bir nesnenin taslağıdır. Farklı nesneler oluşturmak için bir class'ı örnekleriz (instantiate). Bunun yanı sıra, üst sınıfın tüm metotlarını ve özelliklerini miras alarak alt sınıflar oluşturabiliriz.

```js
class Parent {
  constructor(firstName, lastName, country, title) {
    // this anahtar kelimesiyle parametreleri bu class nesnesine bağlıyoruz
    this.firstName = firstName;
    this.lastName = lastName;
    this.country = country;
    this.title = title;
  }
  getPersonInfo() {
    return `${this.firstName} ${this.lastName},  a ${this.title} developer base in ${this.country} `;
  }
  parentMethod() {
    // kod buraya gelir
  }
}

const p1 = new Parent("Asabeneh", "Yetayeh", "Finland", "FullStack Developer");

class Child extends Parent {
  constructor(firstName, lastName, country, title, skills) {
    super(firstName, lastName, country, title);
    this.skills = skills;
    // alt sınıf parametrelerini this anahtar kelimesiyle bu alt sınıf nesnesine bağlıyoruz
  }
  getSkills() {
    let len = this.skills.length;
    return len > 0 ? this.skills.join(" ") : "No skills found";
  }
  childMethod() {
    // kod buraya gelir
  }
}

const skills = ["HTML", "CSS", "JS", "React"];

const child = new Child(
  "Asabeneh",
  "Yetayeh",
  "Finland",
  "FullStack Developer",
  skills,
);
```

Fonksiyonu ve class'ı kısaca ele aldık. React bileşeni JavaScript fonksiyonlarından veya class'larından oluşur; o hâlde şimdi bir React bileşeni yapalım.

## React Bileşeni Oluşturma

### Functional Component

Bir JavaScript fonksiyonu kullanarak işlevsel (functional) bir React bileşeni oluşturabiliriz.

```js
// React bileşen sözdizimi
// ok fonksiyonu, fonksiyon bildirimi veya fonksiyon ifadesi olabilir
const jsx = <tag> Content </tag>;
const ComponentName = () => {
  return jsx;
};
```

Aşağıdaki ifade bir JSX elementidir.

```js
// JSX elementi, header
const header = (
  <header style={headerStyles}>
    <div className="header-wrapper">
      <h1>Welcome to 30 Days Of React</h1>
      <h2>Getting Started React</h2>
      <h3>JavaScript Library</h3>
      <p>Asabeneh Yetayeh</p>
      <small>Oct 3, 2020</small>
    </div>
  </header>
);

// React Component
const Header = () => {
  return header;
};

// ya da doğrudan JSX döndürebiliriz

const Header = () => {
  return (
    <header style={headerStyles}>
      <div className="header-wrapper">
        <h1>Welcome to 30 Days Of React</h1>
        <h2>Getting Started React</h2>
        <h3>JavaScript Library</h3>
        <p>Asabeneh Yetayeh</p>
        <small>Oct 3, 2020</small>
      </div>
    </header>
  );
};

// Yukarıdaki kod şu şekilde de yazılabilir
// JSX açıkça döndürülüyor
const Header = () => (
  <header style={headerStyles}>
    <div className="header-wrapper">
      <h1>Welcome to 30 Days Of React</h1>
      <h2>Getting Started React</h2>
      <h3>JavaScript Library</h3>
      <p>Asabeneh Yetayeh</p>
      <small>Oct 3, 2020</small>
    </div>
  </header>
);
```

### Bileşenleri Render Etme

Şimdi sahip olduğumuz tüm JSX elementlerini bileşenlere dönüştürelim. Bir JSX elementi çağırırken süslü parantez kullanırız; bileşen çağırırken ise şu şekilde yaparız: `<ComponentName />`. Bileşen adını çağırırken bir özellik (attribute) geçirirsek buna props diyoruz (`<ComponentName propsName={'data-type'} />`). Props konusunu başka bir bölümde ele alacağız. [Code pen'de Canlı İzle](https://codepen.io/Asabeneh/full/wvaKKEM)

Önce _Header_ bileşenini render edelim.

```js
// index.js
import React from "react";
import ReactDOM from "react-dom";

// Header Component
const Header = () => (
  <header>
    <div className="header-wrapper">
      <h1>Welcome to 30 Days Of React</h1>
      <h2>Getting Started React</h2>
      <h3>JavaScript Library</h3>
      <p>Asabeneh Yetayeh</p>
      <small>Oct 3, 2020</small>
    </div>
  </header>
);

const rootElement = document.getElementById("root");
// JSX elementini ReactDOM paketiyle render ediyoruz
ReactDOM.render(<Header />, rootElement);
```

Şimdi Header, Main ve Footer bileşenlerini sarmalayacak bir App bileşeni oluşturalım. Ardından App bileşeni DOM'a render edilecek.

```js
// index.js
import React from "react";
import ReactDOM from "react-dom";
import asabenehImage from "./images/asabeneh.jpg";

// Header Component
const Header = () => (
  <header>
    <div className="header-wrapper">
      <h1>Welcome to 30 Days Of React</h1>
      <h2>Getting Started React</h2>
      <h3>JavaScript Library</h3>
      <p>Asabeneh Yetayeh</p>
      <small>Oct 3, 2020</small>
    </div>
  </header>
);

// User Card Component
const UserCard = () => (
  <div className="user-card">
    <img src={asabenehImage} alt="asabeneh image" />
    <h2>Asabeneh Yetayeh</h2>
  </div>
);

// TechList Component
const TechList = () => {
  const techs = ["HTML", "CSS", "JavaScript"];
  const techsFormatted = techs.map((tech) => <li key={tech}>{tech}</li>);
  return techsFormatted;
};

// Main Component
const Main = () => (
  <main>
    <div className="main-wrapper">
      <p>Prerequisite to get started react.js:</p>
      <ul>
        <TechList />
      </ul>
      <UserCard />
    </div>
  </main>
);

// Footer Component
const Footer = () => (
  <footer>
    <div className="footer-wrapper">
      <p>Copyright 2020</p>
    </div>
  </footer>
);

// App, yani üst veya kapsayıcı bileşen
const App = () => (
  <div className="app">
    <Header />
    <Main />
    <Footer />
  </div>
);

const rootElement = document.getElementById("root");
// App bileşenini ReactDOM paketiyle render ediyoruz
ReactDOM.render(<App />, rootElement);
```

![Rendering Components](../../images/rendering_componnets.png)

### JSX'e Veri Ekleme

Şimdiye kadar JSX elementlerinde statik veri kullandık. Şimdi farklı veri tiplerini dinamik veri olarak geçirelim. Dinamik veri; string, sayı, boolean, dizi veya nesne olabilir. Her veri tipini adım adım inceleyelim. JSX'e veri eklemek için `{}` parantezini kullanırız.

Bu bölümde yalnızca string ekliyoruz.

```js
import React from "react";
import ReactDOM from "react-dom";

const welcome = "Welcome to 30 Days Of React";
const title = "Getting Started React";
const subtitle = "JavaScript Library";
const firstName = "Asabeneh";
const lastName = "Yetayeh";
const date = "Oct 3, 2020";

// JSX elementi, header
const header = () => {
  return (
    <header>
      <div className="header-wrapper">
        <h1>{welcome}</h1>
        <h2>{title}</h2>
        <h3>{subtitle}</h3>
        <p>
          Instructor: {firstName} {lastName}
        </p>
        <small>Date: {date}</small>
      </div>
    </header>
  );
};
const rootElement = document.getElementById("root");
// App bileşenini ReactDOM paketiyle render ediyoruz
ReactDOM.render(<Header />, rootElement);
```

Header bileşenine benzer şekilde Main ve Footer bileşenlerine de uygulayabiliriz.

```js
// HTML belgesinden kök elementi alıyoruz
const rootElement = document.querySelector(".root");
// JSX elementi, header
const welcome = "Welcome to 30 Days Of React Challenge";
const title = "Getting Started React";
const subtitle = "JavaScript Library";
const author = {
  firstName: "Asabeneh",
  lastName: "Yetayeh",
};
const date = "Oct 2, 2020";

// JSX elementi, header
const Header = () => (
  <header>
    <div className="header-wrapper">
      <h1>{welcome}</h1>
      <h2>{title}</h2>
      <h3>{subtitle}</h3>
      <p>
        Instructor: {author.firstName} {author.lastName}
      </p>
      <small>Date: {date}</small>
    </div>
  </header>
);

const numOne = 3;
const numTwo = 2;

const result = (
  <p>
    {numOne} + {numTwo} = {numOne + numTwo}
  </p>
);

const yearBorn = 1820;
const currentYear = 2020;
const age = currentYear - yearBorn;
const personAge = (
  <p>
    {" "}
    {author.firstName} {author.lastName} is {age} years old
  </p>
);

// User Card Component
const UserCard = () => (
  <div className="user-card">
    <img src={asabenehImage} alt="asabeneh image" />
    <h2>
      {author.firstName} {author.lastName}
    </h2>
  </div>
);

// JSX elementi, main
const techs = ["HTML", "CSS", "JavaScript"];
const techsFormatted = techs.map((tech) => <li key={tech}>{tech}</li>);

// JSX elementi, main
const Main = () => (
  <main>
    <div className="main-wrapper">
      <div>
        <p>
          Prerequisite to get started{" "}
          <strong>
            <em>react.js</em>
          </strong>
          :
        </p>
        <ul>{techsFormatted}</ul>
        {result}
        {personAge}
      </div>
      <UserCard />
    </div>
  </main>
);

const copyRight = "2020";

// JSX elementi, footer
const Footer = () => (
  <footer>
    <div className="footer-wrapper">
      <p>Copyright &copy;{copyRight}</p>
    </div>
  </footer>
);

// JSX elementi, app
const app = () => (
  <div className="app">
    <Header />
    <Main />
    <Footer />
  </div>
);

// App bileşenini ReactDOM paketiyle render ediyoruz
ReactDOM.render(<App />, rootElement);
```

### Functional Component'lere Daha Fazla Bakış

2. Gün'deki tüm JSX elementlerini Functional Component'lere dönüştürdük; artık bileşenlere oldukça aşinasınız. Daha fazla bileşen oluşturalım. Bir bileşenin en küçük boyutu nedir? Yalnızca tek bir HTML öğesi döndüren JSX, küçük bileşen olarak kabul edilir. Örneğin bir buton bileşeni, bir uyarı kutusu bileşeni ya da yalnızca bir giriş alanı bileşeni.

```js
const Button = () => <button>action</button>;
```

_Button_ bileşeni tek bir HTML buton öğesinden oluşmaktadır.
Bu butonu JavaScript stil nesnesi kullanarak biçimlendirelim. Bir JavaScript CSS nesnesi oluşturmak için tüm CSS özellikleri camelCase biçiminde yazılmalıdır. Birim belirtilmeden sayı geçirilirse bu değer px olarak kabul edilir. Aşağıdaki örneğe bakın.

```js
const buttonStyles = {
  padding: "10px 20px",
  background: "rgb(0, 255, 0",
  border: "none",
  borderRadius: 5,
};
const Button = () => <button style={buttonStyles}> action </button>;
```

Button bileşeni hiçbir parametre almadığı ve aksiyon metnini dinamik olarak değiştiremediğimiz için aptal bir bileşendir (dumb component). Değerin dinamik olarak değişebilmesi için butona props geçmemiz gerekir. Props konusunu bir sonraki bölümde inceleyeceğiz. Bugünkü dersi kapatmadan önce rastgele bir onaltılık (hexadecimal) renk sayısı görüntüleyen daha işlevsel bir bileşen daha yapalım.

```js
import React from "react";
import ReactDOM from "react-dom";

// Onaltılık renk üreteci
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

const rootElement = document.getElementById("root");
// App bileşenini ReactDOM paketiyle render ediyoruz
ReactDOM.render(<HexaColor />, rootElement);
```

# Egzersizler: Bileşenler

## Egzersizler: Seviye 1

1. Klasik fonksiyon ile ok fonksiyonu arasındaki fark nedir?
2. React Bileşeni nedir?
3. React Functional Component nasıl oluşturulur?
4. Saf bir JavaScript fonksiyonu ile Functional Component arasındaki fark nedir?
5. Bir React bileşeni en küçük boyutuyla ne kadardır?
6. Bir buton veya giriş alanı bileşeni oluşturabilir miyiz?
7. Yeniden kullanılabilir bir Button bileşeni oluşturun.
8. Yeniden kullanılabilir bir InputField bileşeni oluşturun.
9. Bir üst div elementi ve bir alt p elementi içeren yeniden kullanılabilir bir uyarı kutusu bileşeni oluşturun (uyarı kutusu, başarı kutusu).

## Egzersizler: Seviye 2

1. Functional Component oluşturun ve aşağıdaki görselleri görüntüleyin.
   ![Front end](../../images/frontend_technologies.png)

2. Aşağıdaki tasarımı oluşturmak için Functional Component kullanın.

![News Letter](../../images/news_letter_design.png)

## Egzersizler: Seviye 3

1. Örnekte verilen onaltılık renk üretecini kullanarak aşağıdaki rastgele renkleri oluşturun.

![Hexadecimal colors](../../images/hexadecimal_color_exercise.png)

2. Aşağıdaki kullanıcı kartını tasarlamak için Functional Component kullanın.

   ![User Card](../../images/user_card_design_jsx.png)

🎉 TEBRİKLER ! 🎉

[<< Gün 3](../03_Gun_Kurulum/03_kurulum.md) | [Gün 5 >>](../05_Gun_Props/05_props.md)
