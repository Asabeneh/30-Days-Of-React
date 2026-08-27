<div align="center">
  <h1> 30 Days Of React: Kurulum </h1>
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
</div>

[<< Gün 2](../02_Gun_Reacta_Giris/02_reacta_giris.md) | [Gün 4 >>](../04_Gun_Bilesenler/04_bilesenler.md)

![30 Days of React banner](../../images/30_days_of_react_banner_day_3.jpg)

- [Kurulum](#kurulum)
  - [Node](#node)
  - [Modül](#modül)
  - [Paket](#paket)
  - [Node Paket Yöneticisi (NPM)](#node-paket-yöneticisi-npm)
  - [Visual Studio Code](#visual-studio-code)
  - [Tarayıcı](#tarayıcı)
  - [Visual Studio Eklentileri](#visual-studio-eklentileri)
  - [React Uygulaması Oluşturma](#react-uygulaması-oluşturma)
- [İlk React Uygulamanız](#i̇lk-react-uygulamanız)
  - [React Şablonu](#react-şablonu)
  - [JSX'te Stil Kullanımı](#jsxte-stil-kullanımı)
  - [JSX Elemanlarına Veri Enjekte Etme](#jsx-elemanlarına-veri-enjekte-etme)
  - [React'ta Medya Nesnelerini İçe Aktarma](#reactta-medya-nesnelerini-i̇çe-aktarma)
- [Egzersizler](#egzersizler)
  - [Egzersizler: Seviye 1](#egzersizler-seviye-1)
  - [Egzersizler: Seviye 2](#egzersizler-seviye-2)
  - [Egzersizler: Seviye 3](#egzersizler-seviye-3)

# Kurulum

Bir önceki bölümde JSX hakkında bilgi edindik ve CDN aracılığıyla React ile ReactDOM paketlerine eriştik. Ancak gerçek projelerde CDN yerine create-react-app paketini kullanarak bir React projesi başlangıç şablonu (boilerplate) oluşturacaksınız. İlk _create-react-app_, 22 Temmuz 2016'da yayımlandı. Bu tarihten önce geliştiriciler, webpack'i bir JavaScript modül paketleyicisi, babel ve diğer gerekli paketlerle elle yapılandırmak zorundaydı; bu işlem yarım saat ya da daha fazla sürebiliyordu. Artık create-react-app her şeyle ilgilenecek ve siz projeleri yapılandırmaya zaman harcamak yerine yalnızca ürünü geliştirmeye odaklanabileceksiniz. Farklı araçları kullanmaya başlamadan önce bu meydan okumada kullanacağımız araçlara kısa bir giriş yapalım. Her şeyi anlamak zorunda değilsiniz, ancak React ile çalışırken kullandığımız bazı araç ve teknolojileri kısaca tanıtmaya çalışacağım.

## Node

Node, JavaScript'in sunucuda çalışmasını sağlayan bir JavaScript çalışma zamanı ortamıdır. Node, 2009 yılında oluşturuldu ve JavaScript'in büyümesinde büyük bir rol oynadı. React uygulamaları varsayılan olarak localhost 3000 portunda başlar. create-react-app, React uygulaması için bir node sunucusu yapılandırmıştır. Bu nedenle node ve node modüllerine ihtiyaç duyarız. create-react-app'i yakında göreceğiz.

Node kurulu değilse kurun. [node.js](https://nodejs.org/en/) adresinden yükleyin.

![Node download](../../images/download_node.png)

İndirdikten sonra çift tıklayarak kurun.

![Install node](../../images/install_node.png)

Node'un yerel makinemizde kurulu olup olmadığını, cihazımızın terminalini veya komut istemcisini açıp aşağıdaki komutu yazarak kontrol edebiliriz:

```sh
asabeneh $ node -v
v12.18.0
```

## Modül

Tek veya birden fazla fonksiyon, gerektiğinde dışa ve içe aktarılarak bir projeye dahil edilebilir.
React'ta modüllere veya paketlere erişmek için link kullanmayız; bunun yerine modülü içe aktarırız. Bir modülü ya da modülleri nasıl içe ve dışa aktarabileceğimize bakalım:

```js
// math.js
export const addTwo = (a, b) => a + b;
export const multiply = (a, b) => a * b;
export const subtract = (a, b) => a - b;

export default (function doSomeMath() {
  return {
    addTwo,
    multiply,
    subtract,
  };
})();
```

Şimdi _math.js_ modüllerini farklı bir dosyaya içe aktaralım:

```js
// index.js
// doSomeMath'i math.js dosyasından uzantıyla veya uzantısız içe aktarmak için
import doSomeMath from "./math.js";

// diğer modülleri içe aktarmak için
// bu modüller varsayılan olarak dışa aktarılmadığından destructuring kullanmamız gerekiyor
import { addTwo, multiply, subtract } from "./math.js";

import * as everything from "./math.js"; // geri kalan her şeyi içe aktarmak için
console.log(addTwo(5, 5));
console.log(doSomeMath.addTwo(5, 5));
console.log(everything);
```

Bundan sonra _import React from 'react'_ veya _import ReactDOM from 'react-dom'_ gördüğünüzde şaşırmayacaksınız.

## Paket

Bir paket, tek bir modül ya da modüller topluluğudur. Örneğin React ve ReactDOM birer pakettir.

## Node Paket Yöneticisi (NPM)

NPM, 2010 yılında oluşturuldu. NPM'i ayrıca kurmanıza gerek yoktur; node kurduğunuzda NPM de otomatik olarak yüklenir. NPM, Node.js için varsayılan paket yöneticisidir. Kullanıcıların kayıt defterinde bulunan JavaScript modüllerini tüketmesine ve dağıtmasına olanak tanır. NPM ile paket oluşturabilir, kullanabilir ve dağıtabilirsiniz. NPM de JavaScript'in büyümesinde oldukça büyük bir rol oynadı. Şu anda NPM kayıt defterinde 350.000'den fazla paket bulunmaktadır. NPM kayıt defterinde create-react-app'e bakalım. İndirme sayısı paketin ne kadar popüler olduğunu gösterir.

![NPM create-react-app](../../images/npm_registry.png)

## Visual Studio Code

Kod düzenleyici olarak Visual Studio Code kullanacağız. Henüz kurulu değilse [indirin](https://code.visualstudio.com) ve kurun.

## Tarayıcı

Google Chrome kullanacağız.

## Visual Studio Eklentileri

Visual Studio Code'dan şu eklentileri kurmanız gerekebilir:

- Prettier
- ESLint
- Bracket Pair Colorizer
- ES7 React/Redux/GraphQL/React-Native snippets

## React Uygulaması Oluşturma

Bir React projesi oluşturmak için aşağıdaki yollardan birini kullanabilirsiniz. Node'u kurduğunuzu varsayalım. Mac veya Linux'ta komut satırı arayüzünü (CLI), git bash'i ya da terminali açın. Ardından aşağıdaki komutu çalıştırın. Ben git bash kullanıyorum.

```sh
Asabeneh@DESKTOP-KGC1AKC MINGW64 ~/Desktop
$ npx create-react-app name-of-your-project
```

Her proje oluştururken npx yazmak istemiyorsanız create-react-app paketini bilgisayarınıza global olarak şu komutla kurabilirsiniz:

```sh
Asabeneh@DESKTOP-KGC1AKC MINGW64 ~/Desktop
$ npm install -g create-react-app
```

create-react-app'i kurduktan sonra React uygulamasını şu şekilde oluşturabilirsiniz:

```sh
Asabeneh@DESKTOP-KGC1AKC MINGW64 ~/Desktop
$ create-react-app name-of-project
```

# İlk React Uygulamanız

```sh
Asabeneh@DESKTOP-KGC1AKC MINGW64 ~
$ cd Desktop/
```

```sh
Asabeneh@DESKTOP-KGC1AKC MINGW64 ~/Desktop
$ npx create-react-app 30-days-of-react
```

```sh
Asabeneh@DESKTOP-KGC1AKC MINGW64 ~/Desktop
$ cd 30-days-of-react/
```

```sh
Asabeneh@DESKTOP-KGC1AKC MINGW64 ~/Desktop/30-days-of-react (master)
$ npm start
```

Artık React uygulamanız localhost 3000'de çalışıyor olmalı. App.js dosyasına gidin ve içeriği bir miktar yazı ekleyerek değiştirin; en son değişiklikleri tarayıcıda göreceksiniz.
Sunucuyu durdurmak için CLI'da Ctrl + C tuşlarına basın.

![React Starting](../../images/react_app_starting.png)

## React Şablonu

create-react-app tarafından oluşturulan React şablonuna bakalım. Yeni bir proje her oluşturduğunuzda create-react-app ve projenin adını çalıştırırsınız.

Aşağıdaki React şablonunda üç klasör bulunur: node_modules, public ve src. Bunların yanı sıra .gitignore, README.md, package.json ve yarn.lock dosyaları da mevcuttur. Bazılarınızda yarn.lock yerine package-lock.json olabilir.

Bu klasörleri ve dosyaları bilmek faydalıdır.

- node_modules - React uygulamasının tüm gerekli node paketlerini saklar.

- Public
  - index.html - uygulamanın tamamında sahip olduğumuz tek HTML dosyası

  - favicon.ico - bir simge dosyası
  - manifest.json - uygulamayı progressive web uygulaması yapmak için kullanılır
  - diğer görseller - open graph görselleri (sosyal medyada bir bağlantı paylaşıldığında görünen görseller)
  - robots.txt - web sitesinin web kazımasına izin verip vermediğine dair bilgi

- src
  - App.css, index.css - farklı CSS dosyaları
  - index.js - tüm bileşenleri index.html ile bağlamaya yarayan dosya
  - App.js - genellikle sunum bileşenlerinin çoğunu içe aktardığımız dosya
  - serviceWorker.js: progressive web uygulama özelliklerini eklemek için kullanılır
  - setupTests.js - test senaryoları yazmak için

- package.json - Uygulamanın kullandığı paketlerin listesi
- .gitignore - React şablonu git ile başlatılmış olarak gelir; .gitignore, bazı dosya ve klasörlerin GitHub'a gönderilmesini engeller
- README.md - Belgeleme yazmak için kullanılan Markdown dosyası
- yarn.lock veya package-lock.json - paket sürümünü sabitlemek için kullanılan bir araç

![React Boilerplate](../../images/react_boilerplate.png)

Şimdi şu an ihtiyacımız olmayan tüm dosyaları kaldıralım ve yalnızca ihtiyaç duyduğumuz dosyaları bırakalım.

Dosyaların büyük bölümünü kaldırdıktan sonra şablonun yapısı şöyle görünür:

![React Boilerplate Cleaned](../../images/react_bolier_plate_cleaned.png)

Şimdi index.js üzerinde kod yazmaya başlayalım. Her şeyden önce React ve ReactDOM'u içe aktarmamız gerekir. React, JSX yazmamıza; ReactDOM ise JSX'i DOM üzerinde render etmemize olanak tanır. ReactDOM'un bir render metodu vardır. Gün 2'de oluşturduğumuz tüm JSX elemanlarını kullanalım. ReactDOM render metodu iki parametre alır: bir JSX ya da bileşen ve kök eleman.

```js
//index.js
// react ve react-dom paketlerini içe aktarma

import React from "react";
import ReactDOM from "react-dom";

const jsxElement = <h1>This is a JSX element</h1>;
const rootElement = document.getElementById("root");

ReactDOM.render(jsxElement, rootElement);
```

```html
<!-- index.html -->
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link
      href="https://fonts.googleapis.com/css?family=Montserrat:300,400,500|Roboto:300,400,500&display=swap"
      rel="stylesheet"
    />
    <meta
      name="description"
      content="Web site created using create-react-app"
    />

    <title>30 Days Of React App</title>
  </head>
  <body>
    <div id="root"></div>
  </body>
</html>
```

Uygulamanız çalışmıyorsa proje klasörünüze gidin ve aşağıdaki komutu çalıştırın:

```sh
Asabeneh@DESKTOP-KGC1AKC MINGW64 ~/Desktop/30-days-of-react (master)
$ npm start
```

Herhangi bir hata yoksa React uygulamanız tarayıcıda başlatılacaktır.

![JSX using create react app](../../images/jsx_use_create_react_app.png)

Daha fazla JSX elemanı yazalım ve bunları tarayıcıda render edelim. Bu ifade, h2 HTML elemanından oluşan bir JSX elemanıdır.

```js
const title = <h2>Getting Started React</h2>;
```

Önceki JSX'e daha fazla içerik ekleyelim ve adını header olarak değiştirelim.

```js
const header = (
  <header>
    <h1>Welcome to 30 Days Of React</h1>
    <h2>Getting Started React</h2>
    <h3>JavaScript Library</h3>
  </header>
);
```

Bunu tarayıcıda render etmek için ReactDOM'a ihtiyacımız var.

```js
//index.js
// react ve react-dom paketlerini içe aktarma

import React from "react";
import ReactDOM from "react-dom";

const header = (
  <header>
    <h1>Welcome to 30 Days Of React</h1>
    <h2>Getting Started React</h2>
    <h3>JavaScript Library</h3>
    <p>Asabeneh Yetayeh</p>
    <small>Oct 2, 2020</small>
  </header>
);
const rootElement = document.getElementById("root");

ReactDOM.render(header, rootElement);
```

![JSX using create react app](../../images/rendering_more_jsx_content_create_react_app.png)

Şimdi Gün 2'de oluşturduğumuz tüm JSX'i ekleyelim.

```js
//index.js
// react ve react-dom paketlerini içe aktarma
import React from "react";
import ReactDOM from "react-dom";

// JSX element, header
const header = (
  <header>
    <h1>Welcome to 30 Days Of React</h1>
    <h2>Getting Started React</h2>
    <h3>JavaScript Library</h3>
    <p>Asabeneh Yetayeh</p>
    <small>Oct 2, 2020</small>
  </header>
);

// JSX element, main
const main = (
  <main>
    <p>Prerequisite to get started react.js:</p>
    <ul>
      <li>HTML</li>
      <li>CSS</li>
      <li>JavaScript</li>
    </ul>
  </main>
);

// JSX element, footer
const footer = (
  <footer>
    <p>Copyright 2020</p>
  </footer>
);

// JSX element, app, a container or a parent
const app = (
  <div>
    {header}
    {main}
    {footer}
  </div>
);

const rootElement = document.getElementById("root");
// JSX elemanını ReactDOM paketi kullanarak render ediyoruz
// ReactDOM'un render metodu iki argüman alır
ReactDOM.render(app, rootElement);
// ya da
//  ReactDOM.render([header, main, footer], rootElement)
```

![JSX using create react app to render more jsx](../../images/rendering_multiple_jsx_elements_create-react_app.png)

## JSX'te Stil Kullanımı

JSX elemanlarına stil uygulayalım. JSX'i satır içi, dahili veya harici CSS stilleriyle stillendirebiliriz. Şimdi her JSX elemanına satır içi stiller uygulayalım.

```js
// index.js
import React from "react";
import ReactDOM from "react-dom";

const headerStyles = {
  backgroundColor: "#61DBFB",
  fontFamily: "Helvetica Neue",
  padding: 25,
  lineHeight: 1.5,
};

// JSX element, header
const header = (
  <header style={headerStyles}>
    <div className="header-wrapper">
      <h1>Welcome to 30 Days Of React</h1>
      <h2>Getting Started React</h2>
      <h3>JavaScript Library</h3>
      <p>Asabeneh Yetayeh</p>
      <small>Oct 2, 2020</small>
    </div>
  </header>
);

// JSX element, main
const mainStyles = {
  backgroundColor: "#F3F0F5",
};
const main = (
  <main style={mainStyles}>
    <p>Prerequisite to get started react.js:</p>
    <ul>
      <li>HTML</li>
      <li>CSS</li>
      <li>JavaScript</li>
    </ul>
  </main>
);

const footerStyles = {
  backgroundColor: "#61DBFB",
};
// JSX element, footer
const footer = (
  <footer style={footerStyles}>
    <p>Copyright 2020</p>
  </footer>
);

// JSX element, app
const app = (
  <div className="app">
    {header}
    {main}
    {footer}
  </div>
);

const rootElement = document.getElementById("root");
// JSX elemanını ReactDOM paketi kullanarak render ediyoruz
ReactDOM.render(app, rootElement);
```

![Inline styling JSX](../../images/styling_jsx_inline_create_react_app.png)

Şimdi dahili bir stil uygulayalım; tüm CSS'i index.html'in başlık kısmına taşıyalım.

```js
// index.js
import React from "react";
import ReactDOM from "react-dom";
// JSX element, header
const header = (
  <header>
    <div className="header-wrapper">
      <h1>Welcome to 30 Days Of React</h1>
      <h2>Getting Started React</h2>
      <h3>JavaScript Library</h3>
      <p>Instructor: Asabeneh Yetayeh</p>
      <small>Date: Oct 1, 2020</small>
    </div>
  </header>
);

// JSX element, main
const main = (
  <main>
    <div className="main-wrapper">
      <p>
        Prerequisite to get started{" "}
        <strong>
          <em>react.js</em>
        </strong>
        :
      </p>
      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li> JavaScript</li>
      </ul>
    </div>
  </main>
);

// JSX element, footer
const footer = (
  <footer>
    <div className="footer-wrapper">
      <p>Copyright 2020</p>
    </div>
  </footer>
);

// JSX element, app
const app = (
  <div className="app">
    {header}
    {main}
    {footer}
  </div>
);

const rootElement = document.getElementById("root");
// JSX elemanını ReactDOM paketi kullanarak render ediyoruz
ReactDOM.render(app, rootElement);
```

![Inline styling JSX](../../images/js_internal_style_create_react_app.png)

## JSX Elemanlarına Veri Enjekte Etme

```js
// index.js
import React from "react";
import ReactDOM from "react-dom";
// HTML belgesinden kök elemanı almak için

// JSX element, header
const welcome = "Welcome to 30 Days Of React";
const title = "Getting Started React";
const subtitle = "JavaScript Library";
const author = {
  firstName: "Asabeneh",
  lastName: "Yetayeh",
};
const date = "Oct 2, 2020";

// JSX element, header
const header = (
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
const currentYear = new Date().getFullYear();
const age = currentYear - yearBorn;
const personAge = (
  <p>
    {" "}
    {author.firstName} {author.lastName} is {age} years old
  </p>
);

// JSX element, main
const techs = ["HTML", "CSS", "JavaScript"];
const techsFormatted = techs.map((tech) => <li>{tech}</li>);

// JSX element, main
const main = (
  <main>
    <div className="main-wrapper">
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
  </main>
);

const copyRight = "Copyright 2020";

// JSX element, footer
const footer = (
  <footer>
    <div className="footer-wrapper">
      <p>{copyRight}</p>
    </div>
  </footer>
);

// JSX element, app
const app = (
  <div className="app">
    {header}
    {main}
    {footer}
  </div>
);

const rootElement = document.getElementById("root");
// JSX elemanını ReactDOM paketi kullanarak render ediyoruz
ReactDOM.render(app, rootElement);
```

![Inline styling JSX](../../images/inecting_data_to_jsx_create_react_app.png)

## React'ta Medya Nesnelerini İçe Aktarma

React'ta görseller, video ve ses dosyaları nasıl içe aktarılır? Önce görsellerin nasıl içe aktarıldığına bakalım.
src klasörü içinde images adında bir klasör oluşturun ve içine bir görsel kaydedin. Örneğin asabeneh.jpg görselini kaydedip index.js dosyasına aktaralım. İçe aktardıktan sonra bunu bir JSX ifadesine, user değişkenine enjekte edeceğiz. Aşağıdaki koda bakın.

```js
// index.js
import React from "react";
import ReactDOM from "react-dom";
import asabenehImage from "./images/asabeneh.jpg";

const user = (
  <div>
    <img src={asabenehImage} alt="asabeneh image" />
  </div>
);

const rootElement = document.getElementById("root");
// JSX elemanını ReactDOM paketi kullanarak render ediyoruz
ReactDOM.render(user, rootElement);
```

![Rendering image](../../images/rendering_image.png)

user'ı ana JSX elemanının içine enjekte edip sonucu görelim:

```js
// index.js
import React from "react";
import ReactDOM from "react-dom";
// HTML belgesinden kök elemanı almak için
import asabenehImage from "./images/asabeneh.jpg";
// JSX element, header
const welcome = "Welcome to 30 Days Of React";
const title = "Getting Started React";
const subtitle = "JavaScript Library";
const author = {
  firstName: "Asabeneh",
  lastName: "Yetayeh",
};
const date = "Oct 2, 2020";

// JSX element, header
const header = (
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
const currentYear = new Date().getFullYear();
const age = currentYear - yearBorn;
const personAge = (
  <p>
    {" "}
    {author.firstName} {author.lastName} is {age} years old
  </p>
);

// JSX element, main
const techs = ["HTML", "CSS", "JavaScript"];
const techsFormatted = techs.map((tech) => <li>{tech}</li>);

const user = (
  <div>
    <img src={asabenehImage} alt="asabeneh image" />
  </div>
);

// JSX element, main
const main = (
  <main>
    <div className="main-wrapper">
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
      {user}
    </div>
  </main>
);

const copyRight = "Copyright 2020";

// JSX element, footer
const footer = (
  <footer>
    <div className="footer-wrapper">
      <p>{copyRight}</p>
    </div>
  </footer>
);

// JSX element, app
const app = (
  <div className="app">
    {header}
    {main}
    {footer}
  </div>
);

const rootElement = document.getElementById("root");
// JSX elemanını ReactDOM paketi kullanarak render ediyoruz
ReactDOM.render(app, rootElement);
```

![All JSX together final](../../images/all_jsx_final.png)

Şablon kodunu [buradan](../../03_Day_Setting_Up/03_setting_up_boilerplate) bulabilirsiniz.

# Egzersizler

## Egzersizler: Seviye 1

1. Modül nedir?
2. Paket nedir?
3. Modül ile paket arasındaki fark nedir?
4. NPM nedir?
5. Webpack nedir?
6. Yeni bir React projesi nasıl oluşturulur?
7. Bir proje klasörünün içindeki dosya ve klasörler nelerdir (package.json, package-lock.json veya yarn.lock, .gitignore, node_modules ve public)?
8. En sevdiğiniz kod düzenleyici nedir (Visual Studio Code olduğuna inanıyorum)?
9. Verimliliğinizi artırmak için farklı Visual Studio Code eklentileri ekleyin (örneğin Prettier, ESLint vb.).
10. Farklı bir dosyada özel bir modül oluşturmayı ve onu index.js dosyasına aktarmayı deneyin.

## Egzersizler: Seviye 2

1. Aşağıdaki görseli içe aktarın ve render edin.
   ![Front end](../../images/frontend_technologies.png)

2. h1, p, input ve button HTML elemanlarını kullanarak JSX ile aşağıdaki tasarımı oluşturun.

![News Letter](../../images/news_letter_design.png)

## Egzersizler: Seviye 3

1. Aşağıdaki kullanıcı kartını tasarlayın.

![User Card](../../images/user_card_design_jsx.png)

🎉 TEBRİKLER! 🎉

[<< Gün 2](../02_Gun_Reacta_Giris/02_reacta_giris.md) | [Gün 4 >>](../04_Gun_Bilesenler/04_bilesenler.md)
