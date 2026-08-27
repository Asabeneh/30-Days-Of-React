<div align="center">
  <h1> 30 Days Of React: useRef</h1>
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

[<< Gün 26](../26_Gun_Context/26_context.md) | [Gün 28 >>](../28_Gun_Proje/28_proje.md)

![30 Days of React banner](../../images/30_days_of_react_banner_day_27.jpg)

# useRef

Bu eğitimde kontrolsüz input verisinin nasıl işleneceğini ele aldık. Bu bölümde ise input verisini almak veya React uygulamanızdaki herhangi bir DOM öğesine erişmek için useRef hook'unu kullanacağız.

useRef, `.current` özelliği aktarılan argümana (initialValue) başlatılmış değiştirilebilir bir ref nesnesi döndürür. Döndürülen nesne bileşenin tüm yaşam süresi boyunca varlığını korur.

Aşağıdaki örnekte useRef hook'unu kullanarak input'tan nasıl veri alacağımızı ve DOM ağacından öğelere nasıl erişeceğimizi görebiliriz.

## Input'tan Veri Alma

Kontrolsüz input öğesinden veri alalım.

```js
import React, { useRef } from "react";
import ReactDOM from "react-dom";

const App = (props) => {
  const ref = useRef(null);
  const onClick = () => {
    let value = ref.current.value;
    alert(value);
  };
  return (
    <div className="App">
      <h1>useRef ile kontrolsüz input'tan veri nasıl alınır</h1>
      <input type="text" ref={ref} />
      <br />
      <button onClick={onClick}>Input Verisini Al</button>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
```

## Odaklanma (Focus)

useRef kullanarak input üzerinde odak olayını tetikleyebiliriz.

```js
import React, { useRef } from "react";
import ReactDOM from "react-dom";

const App = (props) => {
  const ref = useRef(null);
  const onClick = () => {
    ref.current.focus();
  };
  return (
    <div className="App">
      <h1>useRef ile input öğesine nasıl odaklanılır</h1>
      <input type="text" ref={ref} />
      <br />
      <button onClick={onClick}>Input'a Odaklanmak İçin Tıkla</button>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
```

## DOM Ağacından İçerik Alma

React uygulaması geliştirirken DOM'a doğrudan müdahale etmeyin çünkü React, sanal DOM aracılığıyla DOM'u manipüle etmenin kendi yoluna sahiptir. Bununla birlikte DOM ağacından içerik almak istediğimizde useRef hook'unu kullanabiliriz. Örneğe bakın:

```js
import React, { useRef } from "react";
import ReactDOM from "react-dom";

const App = (props) => {
  const ref = useRef(null);
  const onClick = () => {
    let content = ref.current.textContent;
    alert(content);
    console.log(content);
  };
  return (
    <div className="App">
      <h1 ref={ref}>DOM ağacından içerik nasıl alınır</h1>
      <button onClick={onClick}>İçeriği Al</button>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
```

## Bir DOM Öğesine Erişme ve Stillendirme

DOM ağacındaki bir öğeye erişebilir ve stilini değiştirebiliriz. Aşağıdaki örneğe bakın:

```js
import React, { useRef } from "react";
import ReactDOM from "react-dom";

const App = (props) => {
  const ref = useRef(null);
  const onClick = () => {
    ref.current.style.backgroundColor = "#61dbfb";
    ref.current.style.padding = "50px";
    ref.current.style.textAlign = "center";
  };
  return (
    <div className="App">
      <h1 ref={ref}>useRef ile DOM ağacındaki HTML nasıl stillendirilir</h1>
      <button onClick={onClick}>Stillendir</button>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
```

# Egzersizler

1. Aşağıdaki [uygulamayı](https://www.30daysofreact.com/day-27/hexadecimal-colors) geliştirin. Uygulama varsayılan olarak 27 onaltılık renk üretir. Oluştur butonuna tıklandığında yeni 27 onaltılık renk üretir.

🎉 TEBRİKLER! 🎉

[<< Gün 26](../26_Gun_Context/26_context.md) | [Gün 28 >>](../28_Gun_Proje/28_proje.md)
