<div align="center">
  <h1> 30 Days Of React: Hook ile Veri Çekme (Fetching Data Using Hooks)</h1>
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

[<< Gün 22](../22_Gun_Hook_ile_Form/22_hook_ile_form.md) | [Gün 24 >>](../24_Gun_Projeler/24_projeler.md)

![30 Days of React banner](../../images/30_days_of_react_banner_day_23.jpg)

- [Hook ile Veri Çekme](#hook-ile-veri-çekme-fetching-data-using-hooks)
- [Egzersizler](#egzersizler)

# Hook ile Veri Çekme (Fetching Data Using Hooks)

Önceki bölümlerde fetch ve axios kullanarak veri çekmeyi öğrendiniz. Bu bölümde veri çekmek için useEffect hook'unu kullanacağız. Fetch veya axios kullanabiliriz ancak axios'u tercih ediyorum. React hook'larında veri çekmek için componentDidMount yaşam döngüsünü ayrıca kullanmamıza gerek yoktur. useEffect, React yaşam döngüsü metodlarını (mounting, updating ve unmounting) bünyesinde barındırmaktadır. Gün 18'de yazdığımız kodu React hook'larına dönüştürelim. useEffect'i react'ten import etmemiz gerekiyor. useEffect iki argüman alır: bir callback fonksiyonu ve bir dizi. Dizi boşsa componentDidMount gibi davranır; dizi başka özellikler içeriyorsa güncelleme davranışı da gösterir.

```js
import React, { useState, useEffect } from "react";
import axios from "axios";
import ReactDOM, { findDOMNode } from "react-dom";

const Country = ({ country: { name, flag, population } }) => {
  return (
    <div className="country">
      <div className="country_flag">
        <img src={flag} alt={name} />
      </div>
      <h3 className="country_name">{name.toUpperCase()}</h3>
      <div className="country_text">
        <p>
          <span>Nüfus: </span>
          {population}
        </p>
      </div>
    </div>
  );
};

const App = (props) => {
  // başlangıç state ve güncelleme metodu
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const url = "https://restcountries.eu/rest/v2/all";
    try {
      const response = await fetch(url);
      const data = await response.json();
      setData(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="App">
      <h1>Hook Kullanarak Veri Çekme</h1>
      <h1>API Çağrısı</h1>
      <div>
        <p>API'de {data.length} ülke var</p>
        <div className="countries-wrapper">
          {data.map((country) => (
            <Country country={country} />
          ))}
        </div>
      </div>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
```

# Egzersizler

🎉 TEBRİKLER! 🎉

[<< Gün 22](../22_Gun_Hook_ile_Form/22_hook_ile_form.md) | [Gün 24 >>](../24_Gun_Projeler/24_projeler.md)
