<div align="center">
  <h1> 30 Days Of React: Özel Hook'lar (Custom Hooks)</h1>
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

[<< Gün 24](../24_Gun_Projeler/24_projeler.md) | [Gün 26 >>](../26_Gun_Context/26_context.md)

![30 Days of React banner](../../images/30_days_of_react_banner_day_25.jpg)

# Özel Hook'lar (Custom Hooks)

Mevcut React hook'larının üzerine özel bir hook oluşturmak mümkündür. Örneğin veri çekerken fetch veya axios ile HTTP isteği göndermek ve React yaşam döngüsünü yönetmek için useEffect hook'unu kullanırız. useEffect ve useState üzerine useFetch adında bir özel hook oluşturalım.

Önceki bölümde bu kod parçasını yazmıştık ve useEffect hook'larını bir API'den veri çekmek için kullandık. Şimdi bu kodu bir özel hook'a dönüştürelim. Özel hook için isimlendirme kuralı camelCase'dir ve `use` kelimesiyle başlar; bu yüzden özel hook'umuza `useFetch` adını verdik.

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

`useFetch.js` adında bir dosya oluşturun ve useState ile useEffect'i import edin. Ardından yukarıdaki kodun state, useEffect ve fetchData fonksiyon kısmını useFetch.js dosyasına taşıyın.

```js
import { useState, useEffect } from "react";

const useFetch = () => {
  const [data, setData] = useState([]);

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

  useEffect(() => {
    fetchData();
  }, []);
};
```

Ardından useFetch fonksiyonunun bir parametre almasını sağlayalım. Veri çekerken yalnızca API değiştiğinden fonksiyon için bir URL parametresi geçirelim.

```js
import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setData(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
};

export default useFetch;
```

Yukarıdaki kodla veriyi çekebilmeliyiz ancak fonksiyonu useEffect içine koymak daha doğrudur; fonksiyon kodunu useEffect'e taşıyalım.

```js
import { useState, useEffect } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setData(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [url]);

  return data;
};

export default useFetch;
```

Şimdi her şeyi bir araya getirelim ve çalıştıralım.

```js
// index.js

import React, { useState, useEffect } from "react";
import axios from "axios";
import ReactDOM, { findDOMNode } from "react-dom";
import useFetch from "./useFetch";

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
  const url = "https://restcountries.eu/rest/v2/all";
  const data = useFetch(url);

  return (
    <div className="App">
      <h1>Özel Hook'lar</h1>
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

useState ve useEffect hook'ları günlük olarak kullandığınız en yaygın React hook'larıdır. Temel hook'lara ek olarak çok sık kullanılmayan başka hook'lar da vardır. Tüm hook'ları nasıl kullanacağınızı bilmek zorunda değilsiniz. useState, useEffect ve useRef çok önemli hook'lardır ve nasıl kullanılacaklarını bilmeniz önerilir.

# Egzersizler

Not: Ülkeler uygulamasını geliştirmeye devam edin.

1. [Ülkeler API](https://restcountries.eu/rest/v2/all)'sini kullanarak aşağıdaki uygulamayı geliştirin.
   [DEMO](https://www.30daysofreact.com/day-23/countries-data)

🎉 TEBRİKLER! 🎉

[<< Gün 24](../24_Gun_Projeler/24_projeler.md) | [Gün 26 >>](../26_Gun_Context/26_context.md)
