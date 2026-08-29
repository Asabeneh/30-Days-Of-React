<div align="center">
  <h1> 30 Days Of React: Dizileri Haritalama (Mapping Arrays) </h1>
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

[<< Gün 5](../05_Gun_Props/05_props.md) | [Gün 7 >>](../07_Gun_Class_Bilesenler/07_class_bilesenler.md)

![30 Days of React banner](../../images/30_days_of_react_banner_day_6.jpg)

- [Dizileri Haritalama (Mapping Arrays)](#dizileri-haritalama-mapping-arrays)
  - [Dizi haritalama ve render etme](#dizi-haritalama-ve-render-etme)
    - [Sayı dizisini haritalama](#sayı-dizisini-haritalama)
    - [Dizi içinde diziyi haritalama](#dizi-içinde-diziyi-haritalama)
    - [Nesne dizisini haritalama](#nesne-dizisini-haritalama)
    - [Dizi haritalamada key (anahtar)](#dizi-haritalamada-key-anahtar)
- [Egzersizler](#egzersizler)
  - [Egzersizler: Seviye 1](#egzersizler-seviye-1)
  - [Egzersizler: Seviye 2](#egzersizler-seviye-2)
  - [Egzersizler: Seviye 3](#egzersizler-seviye-3)

# Dizileri Haritalama (Mapping Arrays)

Dizi, birçok farklı problemi çözmek için en sık kullanılan veri yapısıdır. React'ta, bir dizideki her elemana belirli HTML element'leri ekleyerek bu diziyi JSX listesine dönüştürmek için map kullanırız.

## Dizi haritalama ve render etme

Çoğu zaman veriler bir dizi veya nesne dizisi şeklinde gelir. Bu dizi ya da nesne dizisini render etmek için çoğu zaman _map_ kullanarak veriyi değiştiririz. Önceki bölümde, techs listesini bir map metodu kullanarak render etmiştik. Bu bölümde daha fazla örnek göreceğiz.

Aşağıdaki örneklerde, tarayıcıda sayı dizisi, string dizisi, ülkeler dizisi ve beceriler dizisini nasıl render edeceğimizi göreceksiniz.

```js
import React from "react";
import ReactDOM from "react-dom";
const App = () => {
  return (
    <div className="container">
      <div>
        <h1>Numbers List</h1>
        {[1, 2, 3, 4, 5]}
      </div>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
```

Tarayıcıyı kontrol ederseniz, sayıların tek bir satırda birbirine yapışık göründüğünü görürsünüz. Bunu önlemek için diziyi değiştiririz ve dizi elemanlarını JSX elementine çeviririz. Aşağıdaki örnekte, dizi bir JSX elemanları listesine dönüştürülmüştür.

### Sayı dizisini haritalama

```js
import React from "react";
import ReactDOM from "react-dom";

const Numbers = ({ numbers }) => {
  // diziyi li JSX dizisine dönüştürme
  const list = numbers.map((number) => <li>{number}</li>);
  return list;
};

// App component (Bileşeni)

const App = () => {
  const numbers = [1, 2, 3, 4, 5];

  return (
    <div className="container">
      <div>
        <h1>Numbers List</h1>
        <ul>
          <Numbers numbers={numbers} />
        </ul>
      </div>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
```

### Dizi içinde diziyi haritalama

Dizi içinde dizi nasıl haritalanır görelim:

```js
import React from "react";
import ReactDOM from "react-dom";

const skills = [
  ["HTML", 10],
  ["CSS", 7],
  ["JavaScript", 9],
  ["React", 8],
];

// Skill Component (Bileşeni)
const Skill = ({ skill: [tech, level] }) => (
  <li>
    {tech} {level}
  </li>
);

// Skills Component (Bileşeni)
const Skills = ({ skills }) => {
  const skillsList = skills.map((skill) => <Skill skill={skill} />);
  console.log(skillsList);
  return <ul>{skillsList}</ul>;
};

const App = () => {
  return (
    <div className="container">
      <div>
        <h1>Skills Level</h1>
        <Skills skills={skills} />
      </div>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
```

### Nesne dizisini haritalama

Nesne dizisini render etme:

```js
import React from "react";
import ReactDOM from "react-dom";

const countries = [
  { name: "Finland", city: "Helsinki" },
  { name: "Sweden", city: "Stockholm" },
  { name: "Denmark", city: "Copenhagen" },
  { name: "Norway", city: "Oslo" },
  { name: "Iceland", city: "Reykjavík" },
];

// Country component (Bileşeni)
const Country = ({ country: { name, city } }) => {
  return (
    <div>
      <h1>{name}</h1>
      <small>{city}</small>
    </div>
  );
};

// Countries component (Bileşeni)
const Countries = ({ countries }) => {
  const countryList = countries.map((country) => <Country country={country} />);
  return <div>{countryList}</div>;
};
// App component (Bileşeni)
const App = () => (
  <div className="container">
    <div>
      <h1>Countries List</h1>
      <Countries countries={countries} />
    </div>
  </div>
);

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
```

### Dizi haritalamada key (anahtar)

Key'ler (Anahtarlar), React'ın hangi elemanların değiştiğini, eklendiğini veya kaldırıldığını tanımlamasına yardımcı olur. Dizi içindeki elemanlara, o elemanlara kararlı bir kimlik kazandırmak için key verilmelidir. Key benzersiz olmalıdır. Çoğu zaman veriler bir id ile birlikte gelir ve bu id'yi key olarak kullanabiliriz. React'a haritalama sırasında key geçirmezsek tarayıcıda bir uyarı üretilir. Verinin id'si yoksa, haritalama sırasında her eleman için benzersiz bir tanımlayıcı oluşturmanın bir yolunu bulmamız gerekir. Aşağıdaki örneğe bakın:

```js
import React from "react";
import ReactDOM from "react-dom";

const Numbers = ({ numbers }) => {
  // diziyi li JSX dizisine dönüştürme
  const list = numbers.map((num) => <li key={num}>{num}</li>);
  return list;
};

const App = () => {
  const numbers = [1, 2, 3, 4, 5];

  return (
    <div className="container">
      <div>
        <h1>Numbers List</h1>
        <ul>
          <Numbers numbers={numbers} />
        </ul>
      </div>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
```

Şimdi ülkeler haritalama örneğine de key ekleyelim:

```js
import React from "react";
import ReactDOM from "react-dom";

const countries = [
  { name: "Finland", city: "Helsinki" },
  { name: "Sweden", city: "Stockholm" },
  { name: "Denmark", city: "Copenhagen" },
  { name: "Norway", city: "Oslo" },
  { name: "Iceland", city: "Reykjavík" },
];

// Country component (Bileşeni)
const Country = ({ country: { name, city } }) => {
  return (
    <div>
      <h1>{name}</h1>
      <small>{city}</small>
    </div>
  );
};

// Countries component (Bileşeni)
const Countries = ({ countries }) => {
  const countryList = countries.map((country) => (
    <Country key={country.name} country={country} />
  ));
  return <div>{countryList}</div>;
};
const App = () => (
  <div className="container">
    <div>
      <h1>Countries List</h1>
      <Countries countries={countries} />
    </div>
  </div>
);

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
```

# Egzersizler

## Egzersizler: Seviye 1

1. Neden bir diziyi haritalamamız gerekir?
2. Dizi haritalamada neden key'lere (anahtarlara) ihtiyaç duyarız?
3. Kodunuzu destructuring (parçalama) etmenin önemi nedir?
4. Destructuring (Parçalama) kodunuzu daha temiz ve okunması daha kolay hale getirir mi?

## Egzersizler: Seviye 2

1. Aşağıdaki tasarımda çift sayılar yeşil, tek sayılar sarı ve asal sayılar kırmızıdır. Bu renkleri React Component (Bileşen) kullanarak oluşturun.

![Number Generator](../../images/day_6_number_generater_exercise.png)

2. Aşağıdaki onaltılık (hexadecimal) renkleri React Component (Bileşen) kullanarak oluşturun.

![Number Generator](../../images/day_6_hexadecimal_colors_exercise.png)

## Egzersizler: Seviye 3

1. Verilen [veriyi](../../06_Day_Map_List_Keys/06_map_list_keys_boilerplate/src/data/ten_most_highest_populations.js) kullanarak aşağıdaki çubuk grafiğini oluşturun.

![Ten most highest populations](../../images/day_6_ten_highest_populations_exercise.png)

🎉 TEBRİKLER! 🎉

[<< Gün 5](../05_Gun_Props/05_props.md) | [Gün 7 >>](../07_Gun_Class_Bilesenler/07_class_bilesenler.md)
