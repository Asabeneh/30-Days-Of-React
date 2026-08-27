<div align="center">
  <h1> 30 Days Of React: Props </h1>
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

[<< Gün 4](../04_Gun_Bilesenler/04_bilesenler.md) | [Gün 6 >>](../06_Gun_Dizi_Haritalama/06_dizi_haritalama.md)

![30 Days of React banner](../../images/30_days_of_react_banner_day_5.jpg)

- [Props](#props)
  - [Fonksiyonel Component'te Props](#fonksiyonel-componentte-props)
  - [Props Nedir?](#props-nedir)
  - [Props Nesnesi](#props-nesnesi)
    - [Farklı Veri Türü Props'ları](#farklı-veri-türü-propsları)
    - [String Props Türü](#string-props-türü)
    - [Number Props Türü](#number-props-türü)
    - [Boolean Props Türü](#boolean-props-türü)
    - [Array Props Türü](#array-props-türü)
    - [Object Props Türü](#object-props-türü)
    - [Function Props Türü](#function-props-türü)
  - [Props'u Parçalama](#propsu-parçalama)
  - [propTypes](#proptypes)
  - [defaultProps](#defaultprops)
- [Egzersizler: Component'ler ve Props](#egzersizler-componentler-ve-props)
  - [Egzersizler: Seviye 1](#egzersizler-seviye-1)
  - [Egzersizler: Seviye 2](#egzersizler-seviye-2)
  - [Egzersizler: Seviye 3](#egzersizler-seviye-3)

# Props

## Fonksiyonel Component'te Props

Bir önceki günde, React component JSX'ine farklı veri türlerinin nasıl enjekte edileceğini gördük. Şimdi bunu component içinde nasıl kullandığımızı ve farklı verileri props olarak nasıl geçirdiğimizi inceleyelim.

## Props Nedir?

Props, React'te "properties" (özellikler) sözcüğünün kısaltmasıdır ve verileri bir component'ten diğerine, çoğunlukla üst (parent) component'ten alt (child) component'e aktarmak için kullanılır. Props'u bir veri taşıyıcısı ya da veri iletim aracı olarak düşünebiliriz.

JavaScript fonksiyonlarına aşina olduğunuzu umuyorum. Parametreli fonksiyonlar dinamik veri alabildiği gibi, props da bir component'e veri ya da parametre geçirmenin yoludur. Bir fonksiyon ile bir component arasındaki farkı şöyle görebiliriz:

```js
// fonksiyon sözdizimi

const getUserInfo = (firstName, lastName, country) => {
  return `${firstName} ${lastName}. Lives in ${country}.`
}

// fonksiyonları çağırma

getUserInfo('Asabeneh', 'Yeteyeh', 'Finland')

//component syntax

// User bileşeni, bileşen adları büyük harfle başlamalıdır
const User = (props) => {
  return (
    <div>
      <h1>
        {props.firstName}
        {props.lastName}
      </h1>
      <small>{props.country}</small>
    </div>
  )
}
// bileşeni çağırma, bu bileşenin üç özelliği var ve bunları props olarak adlandırıyoruz: firstName, lastName, country
<User firstName='Asabeneh' lastName='Yetayeh' country='Finland' />
```

Bir önceki bölümde verileri şu şekilde enjekte etmiştik; bugün bu verileri props'a dönüştüreceğiz.

```js
const welcome = "Welcome to 30 Days Of React";
const title = "Getting Started React";
const subtitle = "JavaScript Library";
const author = {
  firstName: "Asabeneh",
  lastName: "Yetayeh",
};
const date = "Oct 4, 2020";

// Header Bileşeni
const Header = () => (
  <header>
    <div className="header-wrapper">
      <h1>{welcome}</h1>
      <h2>{title}</h2>
      <h3>{subtitle}</h3>
      <p>
        {author.firstName} {author.lastName}
      </p>
      <small>{date}</small>
    </div>
  </header>
);
```

Veri enjekte etmek yerine verileri props olarak da geçirebiliriz. React props'ları, fonksiyonlardaki parametrelere benzer.

## Props Nesnesi

React props'ı, bir React component'i oluşturduğunuzda anında elde ettiğiniz bir nesnedir. Component'e özellik geçirmeden önce props nesnesinde ne elde ettiğimize bakalım.

```js
import React from "react";
import ReactDOM from "react-dom";

// Header Bileşeni
const Header = (props) => {
  console.log(props); // boş nesne, {}
  return (
    <header>
      <div className="header-wrapper">
        <h1>{welcome}</h1>
        <h2>{title}</h2>
        <h3>{subtitle}</h3>
        <p>
          {author.firstName} {author.lastName}
        </p>
        <small>{date}</small>
      </div>
    </header>
  );
};

// App, üst veya kapsayıcı bileşen
// Fonksiyonel Bileşen
const App = () => {
  return (
    <div className="app">
      <Header />
    </div>
  );
};

const rootElement = document.getElementById("root");

ReactDOM.render(<App />, rootElement);
```

Yukarıdaki console.log(props) ifadesinde boş bir nesne ({}) görürsünüz. Bu şu anlama gelir: component'i oluştururken herhangi bir özellik ya da nitelik geçirmezseniz props boş olacaktır; geçirirseniz, geçirdiğiniz verilerle doldurulacak ve bu niteliklerin doğru adı props olacaktır.

Basit bir örnekle başlayalım. Aşağıdaki örnekte, Header component'ine props olarak welcome dizesi geçirilmiştir.

```js
import React from "react";
import ReactDOM from "react-dom";

// Header Bileşeni
const Header = (props) => {
  console.log(props); // {welcome:'Welcome to 30 Days Of React'}
  return (
    <header>
      <div className="header-wrapper">
        <h1>{props.welcome}</h1>
      </div>
    </header>
  );
};

// App, üst veya kapsayıcı bileşen
// Fonksiyonel Bileşen
const App = () => {
  return (
    <div className="app">
      <Header welcome="Welcome to 30 Days Of React" />
    </div>
  );
};

const rootElement = document.getElementById("root");

ReactDOM.render(<App />, rootElement);
```

Artık console.log(props) yaptığınızda şu nesneyi görmelisiniz; bu, Header component'ine geçirdiğimiz welcome özelliğinin props nesnesinin içinde bulunduğu anlamına gelir.

```js
{
  welcome: "Welcome to 30 Days Of React";
}
```

Yukarıdaki koddan görüleceği üzere Header component'ine yalnızca tek bir props geçirdik: welcome props'u. Bir component'in bir ya da birden fazla props'u olabilir. Props farklı veri türlerinde olabilir: string, number, boolean, array, object veya function. Sonraki bölümlerde farklı props türlerini ele alacağız.

### Farklı Veri Türü Props'ları

### String Props Türü

Component'e nitelik olarak geçirilen props'ın veri türü string'dir.

```js
import React from "react";
import ReactDOM from "react-dom";

// Header Bileşeni
const Header = (props) => {
  console.log(props);
  return (
    <header>
      <div className="header-wrapper">
        <h1>{props.welcome}</h1>
        <h2>{props.title}</h2>
        <h3>{props.subtitle}</h3>
        <p>
          {props.firstName} {props.lastName}
        </p>
        <small>{props.date}</small>
      </div>
    </header>
  );
};

// App, üst veya kapsayıcı bileşen
// Fonksiyonel Bileşen
const App = () => (
  <div className="app">
    <Header
      welcome="Welcome to 30 Days Of React"
      title="Getting Started React"
      subtitle="JavaScript Library"
      firstName="Asabeneh"
      lastName="Yetayeh"
      date="Oct 4, 2020"
    />
  </div>
);

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
```

Tarayıcı konsolunu kontrol ederseniz şu nesneyi görürsünüz:

```js
{
firstName: "Asabeneh",
lastName: "Yetayeh",
date: "Oct 4, 2020"
subtitle: "JavaScript Library"
title: "Getting Started React"
welcome: "Welcome to 30 Days Of React"
}
```

Artık bir JavaScript ustası olduğunuza göre bu nesneyle ne yapacağınızı biliyorsunuz.

Yukarıdaki örnekte görüldüğü gibi props değerleri statik olarak yazılmıştır. Ancak bir mantık uygulamak istediğimizde statik verilerle bunu yapmak güçleşir; bu nedenle değişkenleri props olarak kullanmak daha iyi olacaktır. Şu örneğe bakalım:

```js
import React from "react";
import ReactDOM from "react-dom";

// Header Bileşeni
const Header = (props) => (
  <header>
    <div className="header-wrapper">
      <h1>{props.welcome}</h1>
      <h2>{props.title}</h2>
      <h3>{props.subtitle}</h3>
      <p>
        {props.firstName} {props.lastName}
      </p>
      <small>{props.date}</small>
    </div>
  </header>
);

// App, üst veya kapsayıcı bileşen
// Fonksiyonel Bileşen
const App = () => {
  const welcome = "Welcome to 30 Days Of React";
  const title = "Getting Started React";
  const subtitle = "JavaScript Library";
  const firstName = "Asabeneh";
  const lastName = "Yetayeh";
  const date = "Oct 4, 2020";

  return (
    <div className="app">
      <Header
        welcome={welcome}
        title={title}
        subtitle={subtitle}
        firstName={firstName}
        lastName={lastName}
        date={date}
      />
    </div>
  );
};
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
```

### Number Props Türü

Bir component'e sayısal props kullanalım.

```js
import React from "react";
import ReactDOM from "react-dom";

const Age = (props) => <div>The person is {props.age} years old.</div>;
const Weight = (props) => (
  <p>The weight of the object on earth is {props.weight} N.</p>
);

// App, üst veya kapsayıcı bileşen
// Fonksiyonel Bileşen
const App = () => {
  let currentYear = 2020;
  let birthYear = 1820;
  const age = currentYear - birthYear;
  const gravity = 9.81;
  const mass = 75;

  return (
    <div className="app">
      <Age age={age} />
      <Weight weight={gravity * mass} />
    </div>
  );
};
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
```

### Boolean Props Türü

Bir React component'ine boolean veri türü geçirebiliriz.

```js
import React from "react";
import ReactDOM from "react-dom";

const Status = (props) => {
  // kişinin durumunu kontrol etmek için üçlü operatör
  let status = props.status ? "Old enough to drive" : "Too young for driving";
  return <p>{status}</p>;
};

// App, üst veya kapsayıcı bileşen
// Fonksiyonel Bileşen
const App = () => {
  let currentYear = 2020;
  let birthYear = 2015;
  const age = currentYear - birthYear; // 15 yıl

  let status = age >= 18;

  return (
    <div className="app">
      <Status status={status} />
    </div>
  );
};
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
```

### Array Props Türü

Programlamada diziler ve nesneler, farklı problemleri çözmek ve verileri daha yapılandırılmış biçimde depolamak için en sık kullanılan veri yapılarıdır. Bu nedenle verilerle dizi biçiminde sıklıkla karşılaşırız. Bir component'e dizi geçirelim.

```js
import React from "react";
import ReactDOM from "react-dom";

const Skills = (props) => <ul>{props.skills}</ul>;

const App = () => (
  <div className="app">
    <Skills skills={["HTML", "CSS", "JavaScript"]} />
  </div>
);

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
```

Tarayıcıdaki sonuca bakarsanız skills öğelerinin biçimlendirilmesi gerektiğini görürsünüz. Bu nedenle render etmeden önce her bir beceri arasına bir eleman eklememiz gerekir. Diziyi değiştirmek ve li öğesi eklemek için map metodunu kullanabiliriz. React'te rahat hissetmek için map, filter ve reduce gibi fonksiyonel programlama yöntemlerine hakim olmanız gerekir; değilseniz 1. Gün JavaScript tazeleyicisine geri dönün. Şimdi diziyi değiştirmek için map'i uygulayalım:

```js
import React from "react";
import ReactDOM from "react-dom";

// Skills Bileşeni
const Skills = (props) => {
  // skills dizisini değiştirme
  const skillList = props.skills.map((skill) => <li>{skill}</li>);
  return <ul>{skillList}</ul>;
};

const App = () => (
  <div className="app">
    <Skills skills={["HTML", "CSS", "JavaScript"]} />
  </div>
);

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
```

Liste ve map konusuna ilerleyen bölümlerde ayrıntılı değineceğiz. Şimdi nesneyi props olarak nasıl kullanacağımıza bakalım.

### Object Props Türü

Bir React component'ine nesne olarak props geçirebiliriz. Bir örnek görelim.
Önceki Header props'larını nesneye çevirebiliriz. Daha iyi anlamak için birkaç özelliği değiştirelim.

```js
import React from "react";
import ReactDOM from "react-dom";

// Header Bileşeni
const Header = (props) => {
  return (
    <header>
      <div className="header-wrapper">
        <h1>{props.data.welcome}</h1>
        <h2>{props.data.title}</h2>
        <h3>{props.data.subtitle}</h3>
      </div>
    </header>
  );
};

// App, üst veya kapsayıcı bileşen
// Fonksiyonel Bileşen
const App = () => {
  const data = {
    welcome: "Welcome to 30 Days Of React",
    title: "Getting Started React",
    subtitle: "JavaScript Library",
  };

  return (
    <div className="app">
      <Header data={data} />
    </div>
  );
};
const rootElement = document.getElementById("root");
// JSX elementini ReactDOM paketi kullanarak render ediyoruz
ReactDOM.render(<App />, rootElement);
```

Şimdi önceki tüm Header özelliklerini bir nesneye dönüştürelim.

```js
import React from "react";
import ReactDOM from "react-dom";

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
// Header Bileşeni
const Header = (props) => {
  return (
    <header>
      <div className="header-wrapper">
        <h1>{props.data.welcome}</h1>
        <h2>{props.data.title}</h2>
        <h3>{props.data.subtitle}</h3>
        <p>
          {props.data.author.firstName} {props.data.author.lastName}
        </p>
        <small>{showDate(props.data.date)}</small>
      </div>
    </header>
  );
};

// App, üst veya kapsayıcı bileşen
// Fonksiyonel Bileşen
const App = () => {
  const data = {
    welcome: "Welcome to 30 Days Of React",
    title: "Getting Started React",
    subtitle: "JavaScript Library",
    author: {
      firstName: "Asabeneh",
      lastName: "Yetayeh",
    },
    date: new Date(), // tarih, okunabilir bir formata dönüştürülmelidir
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

Nesneyi props olarak kullandığımızda, değerlere erişmek için genellikle veriyi destructure ederiz. Destructuring kodu okumayı kolaylaştırır. Props'u destructure etmeyi yakında göreceğiz; ama önce bir React component'i için function props türüne bakalım.

### Function Props Türü

Bir React component'ine fonksiyon türünde props geçirebiliriz. Birkaç örnek inceleyelim:

```js
import React from "react";
import ReactDOM from "react-dom";

// Bir button bileşeni

const Button = (props) => <button onClick={props.onClick}>{props.text}</button>;

// App, üst veya kapsayıcı bileşen
// Fonksiyonel Bileşen
const App = () => {
  const sayHi = () => {
    alert("Hi");
  };

  return (
    <div className="app">
      <Button text="Say Hi" onClick={sayHi} />
    </div>
  );
};
const rootElement = document.getElementById("root");
// JSX elementini ReactDOM paketi kullanarak render ediyoruz
ReactDOM.render(<App />, rootElement);
```

Fonksiyonu süslü parantez içine de yazabiliriz:

```js
import React from "react";
import ReactDOM from "react-dom";

// Bir button bileşeni

const Button = (props) => <button onClick={props.onClick}>{props.text}</button>;

// App, üst veya kapsayıcı bileşen
// Fonksiyonel Bileşen
const App = () => {
  return (
    <div className="app">
      <Button text="Say Hi" onClick={() => alert("Hi")} />
    </div>
  );
};
const rootElement = document.getElementById("root");
// JSX elementini ReactDOM paketi kullanarak render ediyoruz
ReactDOM.render(<App />, rootElement);
```

Şimdi farklı fonksiyonları props olarak uygulayalım:

```js
import React from "react";
import ReactDOM from "react-dom";

// Bir button bileşeni

const Button = (props) => <button onClick={props.onClick}>{props.text}</button>;

// App, üst veya kapsayıcı bileşen
// Fonksiyonel Bileşen
const App = () => {
  const greetPeople = () => {
    alert("Welcome to 30 Days Of React Challenge, 2020");
  };

  return (
    <div className="app">
      <Button text="Greet People" onClick={greetPeople} />
      <Button text="Show Time" onClick={() => alert(new Date())} />
    </div>
  );
};
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
```

Yukarıdaki örnekte onClick, greetPeople fonksiyonunu tutan bir props'tur. HTML'de onclick, onmouseover, onhover, onkeypress gibi olay işleyicileri bulunur. React'te bu işleyiciler camelCase yazımıyla kullanılır; örneğin onClick, onMouseOver, onKeyPress gibi. React'teki olayları ilerleyen bölümlerde ayrıntılı ele alacağız.

Bir React component'inde fonksiyonun props olarak nasıl kullanılacağını daha iyi anlamak için birkaç örnek daha görelim.

Bu component, ay, gün ve yılı bir uyarı kutusu olarak gösterir:

```js
import React from "react";
import ReactDOM from "react-dom";

// Zamanı Ay gün, yıl formatında göstermek için fonksiyon, örn. Oct 4, 2020
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

// Bir button bileşeni

const Button = (props) => <button onClick={props.onClick}>{props.text}</button>;

// App, üst veya kapsayıcı bileşen
// Fonksiyonel Bileşen
const App = () => {
  const handleTime = () => {
    alert(showDate(new Date()));
  };
  const greetPeople = () => {
    alert("Welcome to 30 Days Of React Challenge, 2020");
  };
  return (
    <div className="app">
      <Button text="show time" onClick={handleTime} />
      <Button text="Greet People" onClick={greetPeople} />
    </div>
  );
};
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
```

## Props'u Parçalama

Artık bir JavaScript ustası olduğunuzu ve dizileri ile nesneleri nasıl parçalayacağınızı (destructuring) bildiğinizi düşünüyorum. Kodu parçalamak, belirli ölçüde okunabilirliği artırır. Header component'indeki props'u parçalayalım. Props olarak geçirdiğimiz her şey props nesnesinin içinde saklanır. Dolayısıyla props bir nesnedir ve özelliklerini destructure edebiliriz. Nesne props örneğinde yazdığımız props'ların bir kısmını birçok şekilde parçalayabiliriz:

1. Adım adım parçalama

```js
import React from "react";
import ReactDOM from "react-dom";

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
// Header Bileşeni
const Header = (props) => {
  const data = props.data;
  const { welcome, title, subtitle, author, date } = data;
  const { firstName, lastName } = author;
  return (
    <header>
      <div className="header-wrapper">
        <h1>{welcome}</h1>
        <h2>{title}</h2>
        <h3>{subtitle}</h3>
        <p>
          {firstName} {lastName}
        </p>
        <small>{showDate(date)}</small>
      </div>
    </header>
  );
};

// App, üst veya kapsayıcı bileşen
// Fonksiyonel Bileşen
const App = () => {
  const data = {
    welcome: "Welcome to 30 Days Of React",
    title: "Getting Started React",
    subtitle: "JavaScript Library",
    author: {
      firstName: "Asabeneh",
      lastName: "Yetayeh",
    },
    date: new Date(),
  };

  return (
    <div className="app">
      <Header data={data} />
    </div>
  );
};
const rootElement = document.getElementById("root");
// JSX elementini ReactDOM paketi kullanarak render ediyoruz
ReactDOM.render(<App />, rootElement);
```

2. Tek satırda parçalama

```js
import React from "react";
import ReactDOM from "react-dom";

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
// Header Bileşeni
const Header = (props) => {
  const data = props.data;
  const {
    welcome,
    title,
    subtitle,
    author: { firstName, lastName },
    date,
  } = data;

  return (
    <header>
      <div className="header-wrapper">
        <h1>{welcome}</h1>
        <h2>{title}</h2>
        <h3>{subtitle}</h3>
        <p>
          {firstName} {lastName}
        </p>
        <small>{showDate(date)}</small>
      </div>
    </header>
  );
};

// App, üst veya kapsayıcı bileşen
// Fonksiyonel Bileşen
const App = () => {
  const data = {
    welcome: "Welcome to 30 Days Of React",
    title: "Getting Started React",
    subtitle: "JavaScript Library",
    author: {
      firstName: "Asabeneh",
      lastName: "Yetayeh",
    },
    date: new Date(),
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

3. Props'u parantez içinde parçalama

```js
import React from "react";
import ReactDOM from "react-dom";

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
// Header Bileşeni
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
        <small>{showDate(date)}</small>
      </div>
    </header>
  );
};

// App, üst veya kapsayıcı bileşen
// Fonksiyonel Bileşen
const App = () => {
  const data = {
    welcome: "Welcome to 30 Days Of React",
    title: "Getting Started React",
    subtitle: "JavaScript Library",
    author: {
      firstName: "Asabeneh",
      lastName: "Yetayeh",
    },
    date: new Date(),
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

Şimdi sahip olduğumuz tüm component'leri parçalayalım ve bir araya getirelim. Props'u genellikle üst component'ten alt component'e doğru bir component'ten diğerine geçiririz.
Örneğin, Main component'inde techs, user, greetPeople ve handleTime props'ları, üst component olan Main'den alt component'lere (TechList ve UserCard) geçirilmiştir. Aşağıda tüm kodlar parçalanmış ve temizlenmiş haliyle yer almaktadır.

```js
import React from "react";
import ReactDOM from "react-dom";
import asabenehImage from "./images/asabeneh.jpg";

// Ay gün yıl göstermek için fonksiyon

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

// Header Bileşeni
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
        <small>{showDate(date)}</small>
      </div>
    </header>
  );
};

// TechList Bileşeni
const TechList = ({ techs }) => {
  const techList = techs.map((tech) => <li key={tech}>{tech}</li>);
  return techList;
};

// User Card Bileşeni
const UserCard = ({ user: { firstName, lastName, image } }) => (
  <div className="user-card">
    <img src={image} alt={firstName} />
    <h2>
      {firstName}
      {lastName}
    </h2>
  </div>
);

// Bir button bileşeni

const Button = ({ text, onClick, style }) => (
  <button style={style} onClick={onClick}>
    {text}
  </button>
);

// JavaScript Nesnesi olarak CSS stilleri
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

// Main Bileşeni
const Main = ({ user, techs, greetPeople, handleTime }) => (
  <main>
    <div className="main-wrapper">
      <p>Prerequisite to get started react.js:</p>
      <ul>
        <TechList techs={techs} />
      </ul>
      <UserCard user={user} />
      <Button text="Greet People" onClick={greetPeople} style={buttonStyles} />
      <Button text="Show Time" onClick={handleTime} style={buttonStyles} />
    </div>
  </main>
);

// Footer Bileşeni
const Footer = ({ copyRight }) => (
  <footer>
    <div className="footer-wrapper">
      <p>Copyright {copyRight.getFullYear()}</p>
    </div>
  </footer>
);

// App, üst veya kapsayıcı bileşen
// Fonksiyonel Bileşen
const App = () => {
  const data = {
    welcome: "Welcome to 30 Days Of React",
    title: "Getting Started React",
    subtitle: "JavaScript Library",
    author: {
      firstName: "Asabeneh",
      lastName: "Yetayeh",
    },
    date: new Date(), // tarih, okunabilir bir formata dönüştürülmelidir
  };
  const date = new Date();
  const techs = ["HTML", "CSS", "JavaScript"];
  // spread operatörü kullanarak data nesnesindeki author'ı user değişkenine kopyalama
  const user = { ...data.author, image: asabenehImage };

  const handleTime = () => {
    alert(showDate(new Date()));
  };
  const greetPeople = () => {
    alert("Welcome to 30 Days Of React Challenge, 2020");
  };

  return (
    <div className="app">
      <Header data={data} />
      <Main
        user={user}
        techs={techs}
        handleTime={handleTime}
        greetPeople={greetPeople}
      />
      <Footer copyRight={date} />
    </div>
  );
};
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
```

## propTypes

propTypes paketi, bir component'e geçirdiğimiz props'ların veri türlerini belirlememize yardımcı olur.

## defaultProps

defaultProps, bir component için bazı varsayılan prop türlerine sahip olmak istediğimizde kullanılabilir.

propTypes konusunu ilerleyen bölümlerde ayrıntılı olarak ele alacağız.

# Egzersizler: Component'ler ve Props

## Egzersizler: Seviye 1

1. React component'inde props nedir?
2. React component'inde props'a nasıl erişirsiniz?
3. Component'lere props olarak hangi veri türlerini geçirebiliriz?
4. propTypes nedir?
5. Varsayılan propTypes nedir?

## Egzersizler: Seviye 2

1. Bir fonksiyonel component oluşturun ve aşağıdaki görselleri görüntüleyin:
   ![Front end](../../images/frontend_technologies.png)

2. Aşağıdaki tasarımı oluşturmak için fonksiyonel component kullanın:

![News Letter](../../images/news_letter_design.png)

## Egzersizler: Seviye 3

1.  Örnekteki verilen hexadecimal renk üretecini kullanarak şu rastgele renkleri oluşturun. Hexadecimal rengi nasıl üreteceğinizi bilmiyorsanız [dummy data generator](https://www.30daysofreact.com/dummy-data) adresini kullanabilirsiniz.

![Hexadecimal colors](../../images/hexadecimal_color_exercise.png)

2. Aşağıdaki kullanıcı kartını tasarlamak için fonksiyonel component kullanın.

![User Card](../../images/user_card_design_jsx.png)

🎉 TEBRİKLER! 🎉

[<< Gün 4](../04_Gun_Bilesenler/04_bilesenler.md) | [Gün 6 >>](../06_Gun_Dizi_Haritalama/06_dizi_haritalama.md)
