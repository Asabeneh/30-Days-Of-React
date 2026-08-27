<div align="center">
  <h1> 30 Days Of React: Fetch ve Axios (Fetch and Axios)</h1>
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

[<< Gün 17](../17_Gun_React_Router/17_react_router.md) | [Gün 19 >>](../19_Gun_Projeler/19_projeler.md)

![30 Days of React banner](../../images/30_days_of_react_banner_day_18.jpg)

- [Fetch ve Axios (Fetch and Axios)](#fetch-ve-axios-fetch-and-axios)
  - [Fetch](#fetch)
  - [Axios](#axios)
- [Egzersizler](#egzersizler)
  - [Egzersizler: Seviye 1](#egzersizler-seviye-1)
  - [Egzersizler: Seviye 2](#egzersizler-seviye-2)
  - [Egzersizler: Seviye 3](#egzersizler-seviye-3)

# Fetch ve Axios (Fetch and Axios)

## Fetch

Günümüzde JavaScript, HTTP istekleri yapmak için fetch API'sini sunmaktadır. Fetch tüm tarayıcılar tarafından desteklenmeyebilir; bu nedenle tarayıcı desteği için ek paket yüklememiz gerekebilir. Ancak axios kullanırsak tarayıcı desteği için ek pakete ihtiyaç duymayız. Axios kodu fetch'e göre daha temiz görünmektedir. Bu bölümde fetch ile axios arasındaki farka bakacağız. Fetch'in tarayıcı desteğini öğrenmek istiyorsanız [caniuse](https://caniuse.com/ciu/index) web sitesinden kontrol edebilirsiniz. Bugün itibarıyla %95,62 tarayıcı desteğine sahiptir.

```js
import React, { Component } from 'react'
import ReactDOM from 'react-dom'

const Country = ({
  country: { name, capital, flag, languages, population, currency },
}) => {
  const formattedCapital =
    capital.length > 0 ? (
      <>
        <span>Başkent: </span>
        {capital}
      </>
    ) : (
      ''
    )
  const formatLanguage = languages.length > 1 ? `Diller` : `Dil`
  console.log(languages)
  return (
    <div className='country'>
      <div className='country_flag'>
        <img src={flag} alt={name} />
      </div>
      <h3 className='country_name'>{name.toUpperCase()}</h3>
      <div className='country_text'>
        <p>{formattedCapital}</p>
        <p>
          <span>{formatLanguage}: </span>
          {languages.map((language) => language.name).join(', ')}
        </p>
        <p>
          <span>Nüfus: </span>
          {population.toLocaleString()}
        </p>
        <p>
          <span>Para Birimi: </span>
          {currency}
        </p>
      </div>
    </div>
  )
}

class App extends Component {
  state = {
    data: [],
  }

  componentDidMount() {
    const url = 'https://restcountries.eu/rest/v2/all'
    fetch(url)
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        console.log(data)
        this.setState({
          data,
        })
      })
      .catch((error) => {
        console.log(error)
      })
  }

  render() {
    return (
      <div className='App'>
        <h1>React Bileşen Yaşam Döngüsü</h1>
        <h1>API Çağrısı</h1>
        <div>
          <p>API'de {this.state.data.length} ülke var</p>
          <div className='countries-wrapper'>
            {this.state.data.map((country) => (
              <Country country={country} />
            ))}
          </div>
        </div>
      </div>
    )
  }
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
```

Yukarıdaki kodu kısaltmak ve temizlemek için async ve await kullanabiliriz.

```js
import React, { Component } from 'react'
import ReactDOM from 'react-dom'

const Country = ({
  country: { name, capital, flag, languages, population, currency },
}) => {
  const formattedCapital =
    capital.length > 0 ? (
      <>
        <span>Başkent: </span>
        {capital}
      </>
    ) : (
      ''
    )
  const formatLanguage = languages.length > 1 ? `Diller` : `Dil`
  return (
    <div className='country'>
      <div className='country_flag'>
        <img src={flag} alt={name} />
      </div>
      <h3 className='country_name'>{name.toUpperCase()}</h3>
      <div className='country_text'>
        <p>{formattedCapital}</p>
        <p>
          <span>{formatLanguage}: </span>
          {languages.map((language) => language.name).join(', ')}
        </p>
        <p>
          <span>Nüfus: </span>
          {population.toLocaleString()}
        </p>
        <p>
          <span>Para Birimi: </span>
          {currency}
        </p>
      </div>
    </div>
  )
}

class App extends Component {
  state = {
    data: [],
  }

  componentDidMount() {
    this.fetchCountryData()
  }

  fetchCountryData = async () => {
    const url = 'https://restcountries.eu/rest/v2/all'
    const response = await fetch(url)
    const data = await response.json()
    this.setState({
      data,
    })
  }

  render() {
    return (
      <div className='App'>
        <h1>Fetch ile API Çekme</h1>
        <h1>API Çağrısı</h1>
        <div>
          <p>API'de {this.state.data.length} ülke var</p>
          <div className='countries-wrapper'>
            {this.state.data.map((country) => (
              <Country country={country} />
            ))}
          </div>
        </div>
      </div>
    )
  }
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
```

Async ve await kullandığımızda hatayı try ve catch ile ele alırız. Yukarıdaki koda try catch bloğu ekleyelim.

```js
import React, { Component } from 'react'
import ReactDOM from 'react-dom'

const Country = ({ country: { name, flag, population } }) => {
  return (
    <div className='country'>
      <div className='country_flag'>
        <img src={flag} alt={name} />
      </div>
      <h3 className='country_name'>{name.toUpperCase()}</h3>
      <div className='country_text'>
        <p>
          <span>Nüfus: </span>
          {population}
        </p>
      </div>
    </div>
  )
}

class App extends Component {
  state = {
    data: [],
  }

  componentDidMount() {
    this.fetchCountryData()
  }

  fetchCountryData = async () => {
    const url = 'https://restcountries.eu/rest/v2/all'
    try {
      const response = await fetch(url)
      const data = await response.json()
      this.setState({
        data,
      })
    } catch (error) {
      console.log(error)
    }
  }

  render() {
    return (
      <div className='App'>
        <h1>Fetch ile API Çekme</h1>
        <h1>API Çağrısı</h1>
        <div>
          <p>API'de {this.state.data.length} ülke var</p>
          <div className='countries-wrapper'>
            {this.state.data.map((country) => (
              <Country country={country} />
            ))}
          </div>
        </div>
      </div>
    )
  }
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
```

Şimdi aynı API çağrısını axios ile nasıl yapacağımıza bakalım.

Birden fazla API çağrımız varsa fetch ile nasıl yapabiliriz?

## Axios

Axios üçüncü taraf bir pakettir ve npm ile yüklememiz gerekir. HTTP istekleri yapmak için en popüler yoldur (GET, POST, PUT, PATCH, DELETE). Bu örnekte yalnızca GET isteğini ele alacağız.

```js
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'

const Country = ({
  country: { name, capital, flag, languages, population, currency },
}) => {
  return (
    <div className='country'>
      <div className='country_flag'>
        <img src={flag} alt={name} />
      </div>
      <h3 className='country_name'>{name.toUpperCase()}</h3>
      <div className='country_text'>
        <p>
          <span>Nüfus: </span>
          {population}
        </p>
      </div>
    </div>
  )
}

class App extends Component {
  state = {
    data: [],
  }

  componentDidMount() {
    const url = 'https://restcountries.eu/rest/v2/all'
    axios
      .get(url)
      .then((response) => {
        this.setState({
          data: response.data,
        })
      })
      .catch((error) => {
        console.log(error)
      })
  }

  render() {
    return (
      <div className='App'>
        <h1>React Bileşen Yaşam Döngüsü</h1>
        <h1>API Çağrısı</h1>
        <div>
          <p>API'de {this.state.data.length} ülke var</p>
          <div className='countries-wrapper'>
            {this.state.data.map((country) => (
              <Country country={country} />
            ))}
          </div>
        </div>
      </div>
    )
  }
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
```

Axios ile veri çekmeyi async ve await kullanarak da uygulayalım.

```js
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'

const Country = ({ country: { name, flag, population } }) => {
  return (
    <div className='country'>
      <div className='country_flag'>
        <img src={flag} alt={name} />
      </div>
      <h3 className='country_name'>{name.toUpperCase()}</h3>
      <div className='country_text'>
        <p>
          <span>Nüfus: </span>
          {population}
        </p>
      </div>
    </div>
  )
}

class App extends Component {
  state = {
    data: [],
  }

  componentDidMount() {
    this.fetchCountryData()
  }
  fetchCountryData = async () => {
    const url = 'https://restcountries.eu/rest/v2/all'
    try {
      const response = await axios.get(url)
      const data = await response.data
      this.setState({
        data,
      })
    } catch (error) {
      console.log(error)
    }
  }

  render() {
    return (
      <div className='App'>
        <h1>React Bileşen Yaşam Döngüsü</h1>
        <h1>API Çağrısı</h1>
        <div>
          <p>API'de {this.state.data.length} ülke var</p>
          <div className='countries-wrapper'>
            {this.state.data.map((country) => (
              <Country country={country} />
            ))}
          </div>
        </div>
      </div>
    )
  }
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
```

Gördüğünüz gibi fetch ile axios arasında çok fazla fark yoktur. Ancak tarayıcı desteği ve kullanım kolaylığı açısından fetch'e kıyasla axios kullanmanızı öneririm.

# Egzersizler

## Egzersizler: Seviye 1

1. HTTP isteği nedir?
2. En yaygın HTTP istekleri nelerdir?
3. Fetch nedir?
4. Axios nedir?
5. Fetch ile axios arasındaki fark nedir?
6. HTTP istekleri yapmak için fetch mi yoksa axios mu tercih edersiniz?

## Egzersizler: Seviye 2

1. Aşağıdaki [API](https://api.thecatapi.com/v1/breeds)'de kedilerin ortalama metrik ağırlığını ve yaşam süresini bulun. API'de 67 kedi ırkı bulunmaktadır.

![Ortalama kedi ağırlığı ve yaşı](../../images/average_cat_weight_and_age.png)

## Egzersizler: Seviye 3

1. Kaç ülkede kedi ırkı bulunmaktadır?
2. Hangi ülkede en fazla kedi ırkı var?
3. Ülkeleri sahip oldukları kedi ırkı sayısına göre artan sırayla sıralayın.

🎉 TEBRİKLER! 🎉

[<< Gün 17](../17_Gun_React_Router/17_react_router.md) | [Gün 19 >>](../19_Gun_Projeler/19_projeler.md)
