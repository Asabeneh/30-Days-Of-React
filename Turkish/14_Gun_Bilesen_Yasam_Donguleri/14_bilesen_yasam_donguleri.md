<div align="center">
  <h1> 30 Days Of React: Bileşen Yaşam Döngüleri (Component Life Cycles)</h1>
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

[<< Gün 13](../13_Gun_Kontrollü_ve_Kontrolsüz_Input/13_kontrolsuz_input.md) | [Gün 15 >>](../15_Gun_Üçüncü_Taraf_Paketler/15_ucuncu_taraf_paketler.md)

![30 Days of React banner](../../images/30_days_of_react_banner_day_14.jpg)

- [Bileşen Yaşam Döngüleri (Component Life Cycles)](#bileşen-yaşam-döngüleri-component-life-cycles)
  - [Bileşen Yaşam Döngüsü Nedir?](#bileşen-yaşam-döngüsü-nedir)
  - [Montaj (Mounting)](#montaj-mounting)
    - [Constructor](#constructor)
    - [getDerivedStateFromProps](#getderivedstatefromprops)
    - [Render](#render)
    - [ComponentDidMount](#componentdidmount)
  - [Güncelleme (Updating)](#güncelleme-updating)
    - [getDerivedStateFromProps](#getderivedstatefromprops-1)
    - [shouldComponentUpdate](#shouldcomponentupdate)
    - [render](#render-1)
    - [componentDidUpdate](#componentdidupdate)
  - [Kaldırma (Unmounting)](#kaldırma-unmounting)
- [Egzersizler](#egzersizler)
  - [Egzersizler: Seviye 1](#egzersizler-seviye-1)
  - [Egzersizler: Seviye 2](#egzersizler-seviye-2)
  - [Egzersizler: Seviye 3](#egzersizler-seviye-3)

# Bileşen Yaşam Döngüleri (Component Life Cycles)

## Bileşen Yaşam Döngüsü Nedir?

Bileşen yaşam döngüsü, bir React uygulamasında bir bileşenin DOM'a eklenmesi (mounting), güncellenmesi (updating) ve yok edilmesi (destroying) sürecidir. Bileşen yaşam döngüsünü insanın büyüme süreciyle ilişkilendirebilirsiniz: doğum, yetişkinlik, yaşlılık ve ölüm.
React'te bir bileşen de DOM'a ilk kez eklenebilir (render edilebilir), veriler değiştirilerek güncellenebilir ve artık gerekmediğinde yok edilebilir. React'te her bileşenin üç ana aşaması vardır:

- Montaj (Mounting)
- Güncelleme (Updating)
- Kaldırma (Unmounting)

## Montaj (Mounting)

React bileşenini DOM'a render etmek veya yerleştirmek, montaj (mounting) olarak adlandırılır. Aşağıdaki yerleşik metodlar, bir React bileşeninin montajı sırasında verilen sırayla çalışır:

1. constructor()
2. static getDerivedStateFromProps()
3. render()
4. componentDidMount()

Class tabanlı bir bileşen oluştururken yerleşik render metodunu kullandık ve bu metod tüm class tabanlı bileşenlerde zorunludur; diğer metodlar ise isteğe bağlıdır. Aşağıdaki kod parçasını çalıştırarak farklı metodların çalışma sırasını görün.

```js
import React, { Component } from 'react'
import ReactDOM from 'react-dom'

class App extends Component {
  constructor(props) {
    super(props)
    console.log('Ben constructor\'um ve ilk çalışacak olan benim.')
    this.state = {
      firstName: '',
    }
  }

  static getDerivedStateFromProps(props, state) {
    console.log(
      'Ben getDerivedStateFromProps\'um ve ikinci çalışacak olan benim.'
    )
    return null
  }
  componentDidMount() {
    console.log('Ben componentDidMount\'um ve en son çalışacak olan benim.')
  }

  render() {
    console.log('Ben render\'ım ve üçüncü çalışacak olan benim.')
    return (
      <div className='App'>
        <h1>React Bileşen Yaşam Döngüsü</h1>
      </div>
    )
  }
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
```

### Constructor

Günümüzde class tabanlı bileşenleri constructor olmadan yazıyoruz ve state'i de constructor'ın dışında tanımlayabiliyoruz. React'in eski sürümlerinde state her zaman constructor'ın içinde olurdu.

constructor() metodu bileşen başlatıldığında diğer tüm metodlardan önce çalışır ve başlangıç state'i ile diğer değerlerin tanımlandığı yerdir.
Class'ta üst sınıftan miras almak için constructor parametresi kullanılır; React'te ise constructor bir props parametresi alır ve super metodu da çağrılmak zorundadır.
Constructor ve state hakkındaki kod parçasına bakın.

```js
import React, { Component } from 'react'
import ReactDOM from 'react-dom'

class App extends Component {
  constructor(props) {
    super(props)
    console.log('Ben constructor\'um ve ilk çalışacak olan benim.')
    this.state = {
      firstName: '',
    }
  }
  render() {
    return (
      <div className='App'>
        <h1>React Bileşen Yaşam Döngüsü</h1>
        <h2>Constructor İlk Çalışandır</h2>
        <p>Yazar: {this.state.firstName}</p>
      </div>
    )
  }
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
```

### getDerivedStateFromProps

Adından anlaşılacağı üzere bu metod, props'tan bir state türetir. getDerivedStateFromProps() metodu, bileşen DOM'da render edilmeden hemen önce çağrılır. Bu, başlangıç props'larına göre state nesnesini ayarlamak için doğru yerdir.

```js
import React, { Component } from 'react'
import ReactDOM from 'react-dom'

const User = ({ firstName }) => (
  <div>
    <h1>{firstName}</h1>
  </div>
)

class App extends Component {
  constructor(props) {
    super(props)
    console.log('Ben constructor\'um ve ilk çalışacak olan benim.')
    // state constructor'ın içinde veya dışında yazılabilir
    // dışında yazılırsa this anahtar kelimesine gerek yoktur
    this.state = {
      firstName: 'Ahmet',
    }
  }
  static getDerivedStateFromProps(props, state) {
    console.log(
      'Ben getDerivedStateFromProps\'um ve ikinci çalışacak olan benim.'
    )
    return { firstName: props.firstName }
  }

  render() {
    return (
      <div className='App'>
        <h1>React Bileşen Yaşam Döngüsü</h1>
        <h3>getDerivedStateFromProps</h3>
        <User firstName={this.state.firstName} />
      </div>
    )
  }
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App firstName='Asabeneh' />, rootElement)
```

### Render

render metodu, class tabanlı bir bileşen oluşturduğumuzda zorunlu bir metoddur. render metodu, JSX'i döndürdüğümüz yerdir. render metodu, state'te her değişiklik olduğunda yeniden çalışır. State'inizi render metodunun içinde belirlemeyin.

```js
import React, { Component } from 'react'
import ReactDOM from 'react-dom'

const User = ({ firstName }) => (
  <div>
    <h1>{firstName}</h1>
  </div>
)

class App extends Component {
  constructor(props) {
    super(props)
    console.log('Ben constructor\'um ve ilk çalışacak olan benim.')
    // state constructor'ın içinde veya dışında yazılabilir
    // dışında yazılırsa this anahtar kelimesine gerek yoktur
    this.state = {
      firstName: 'Ahmet',
    }
  }
  render() {
    // Bunu asla yapmayın
    // render metodunun içinde state'i sıfırlamayın, bunun için ayrı bir metod oluşturun

    return (
      <div className='App'>
        <h1>React Bileşen Yaşam Döngüsü</h1>
        <h3>Render metodu</h3>
      </div>
    )
  }
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App firstName='Asabeneh' />, rootElement)
```

### ComponentDidMount

Metodun adından da anlaşılacağı üzere bu metod, bileşen render edildikten sonra çağrılır. Zaman aralığı belirlemek ve API çağrısı yapmak için doğru yerdir. Aşağıda componentDidMount metodunda setTimeout kullanımını inceleyin.

```js
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
class App extends Component {
  constructor(props) {
    super(props)
    console.log('Ben constructor\'um ve ilk çalışacak olan benim.')
    this.state = {
      firstName: 'Ahmet',
    }
  }
  componentDidMount() {
    console.log('Ben componentDidMount\'um ve en son çalışacak olan benim.')
    // 3 saniye sonra state'i sıfırlar
    setTimeout(() => {
      this.setState({
        firstName: 'Asabeneh',
      })
    }, 3000)
  }

  render() {
    return (
      <div className='App'>
        <h1>React Bileşen Yaşam Döngüsü</h1>
        <h2>componentDidMount Metodu</h2>
        {this.state.firstName}
      </div>
    )
  }
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
```

Yukarıdaki kod parçasında, componentDidMount metodunun içinde setTimeout'un nasıl kullanılacağını gördük. Bir sonraki örnekte fetch kullanarak bir API çağrısı uygulayacağız.

```js
import React, { Component } from 'react'
import ReactDOM from 'react-dom'

class App extends Component {
  constructor(props) {
    super(props)
    console.log('Ben constructor\'um ve ilk çalışacak olan benim.')
    this.state = {
      firstName: 'Ahmet',
      data: [],
    }
  }

  componentDidMount() {
    console.log('Ben componentDidMount\'um ve en son çalışacak olan benim.')
    const API_URL = 'https://restcountries.eu/rest/v2/all'
    fetch(API_URL)
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
              <div>
                <div>
                  {' '}
                  <img src={country.flag} alt={country.name} />{' '}
                </div>
                <div>
                  <h1>{country.name}</h1>
                  <p>Başkent: {country.capital}</p>
                  <p>Nüfus: {country.population}</p>
                </div>
              </div>
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

Bazen verileri render etmek için ayrı bir metod kullanmak daha iyi olabilir. Aşağıdaki örneğe bakın:

```js
import React, { Component } from 'react'
import ReactDOM from 'react-dom'

class App extends Component {
  constructor(props) {
    super(props)
    console.log('Ben constructor\'um ve ilk çalışacak olan benim.')
    this.state = {
      firstName: 'Ahmet',
      data: [],
    }
  }

  componentDidMount() {
    console.log('Ben componentDidMount\'um ve en son çalışacak olan benim.')
    const API_URL = 'https://restcountries.eu/rest/v2/all'
    fetch(API_URL)
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
  renderCountries = () => {
    return this.state.data.map((country) => {
      return (
        <div>
          <div>
            {' '}
            <img src={country.flag} alt={country.name} />{' '}
          </div>
          <div>
            <h1>{country.name}</h1>
            <p>Nüfus: {country.population}</p>
          </div>
        </div>
      )
    })
  }

  render() {
    return (
      <div className='App'>
        <h1>React Bileşen Yaşam Döngüsü</h1>
        <h1>API Çağrısı</h1>
        <div>
          <p>API'de {this.state.data.length} ülke var</p>
          <div className='countries-wrapper'>{this.renderCountries()}</div>
        </div>
      </div>
    )
  }
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
```

## Güncelleme (Updating)

Bir bileşen DOM'a eklendikten sonra, state veya props değiştiğinde güncellenebilir. Bir React bileşeninin güncellenmesi, props veya state değişikliklerinden kaynaklanabilir. Bir bileşen yeniden render edilirken aşağıdaki metodlar sırayla çağrılır:

1. static getDerivedStateFromProps()
2. shouldComponentUpdate()
3. render()
4. getSnapshotBeforeUpdate()
5. componentDidUpdate()

### getDerivedStateFromProps

Montaj aşamasına benzer şekilde, getDerivedStateFromProps güncelleme aşamasında da çağrılabilir. getDerivedStateFromProps, bir bileşen güncellendiğinde çağrılan ilk metoddur.

### shouldComponentUpdate

shouldComponentUpdate() yerleşik yaşam döngüsü metodu bir boolean (true/false) döndürmelidir. Bu metod true döndürmezse uygulama güncellenmez.

Metod true döndürmezse uygulama hiçbir zaman güncellenmez. Bu, örneğin belirli bir noktaya ulaşıldığında (oyun, abonelik) kullanıcıyı bloke etmek veya belirli bir kullanıcıyı engellemek için kullanılabilir.

```js
import React, { Component } from 'react'
import ReactDOM from 'react-dom'

class App extends Component {
  constructor(props) {
    super(props)
    console.log('Ben constructor\'um ve ilk çalışacak olan benim.')
    this.state = {
      firstName: 'Ahmet',
      data: [],
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log(nextProps, nextState)
    // true döndürülürse uygulama güncellenir
    return true
  }

  render() {
    return (
      <div className='App'>
        <h1>React Bileşen Yaşam Döngüsü</h1>
      </div>
    )
  }
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
```

Örneğin, 30 gün sonra meydan okumayı durdurmak istersek, günü 1'den 30'a kadar artırabilir ve 30. günde uygulamayı engelleyebiliriz.
Örneğe bakın.

```js
import React, { Component } from 'react'
import ReactDOM from 'react-dom'

class App extends Component {
  constructor(props) {
    super(props)
    console.log('Ben constructor\'um ve ilk çalışacak olan benim.')
    this.state = {
      firstName: 'Ahmet',
      day: 1,
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log(nextProps, nextState)
    console.log(nextState.day)
    if (nextState.day > 31) {
      return false
    } else {
      return true
    }
  }
  // doChallenge günü bir artırır
  doChallenge = () => {
    this.setState({
      day: this.state.day + 1,
    })
  }
  render() {
    return (
      <div className='App'>
        <h1>React Bileşen Yaşam Döngüsü</h1>
        <button onClick={this.doChallenge}>Meydan Okuma Yap</button>
        <p>Meydan Okuma: Gün {this.state.day}</p>
        {this.state.congratulate && <h2>{this.state.congratulate}</h2>}
      </div>
    )
  }
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
```

### render

Bileşenin montaj aşamasında belirttiğimiz gibi, render() metodu bir bileşen güncellendiğinde de çağrılır. Yeni değişikliklerle birlikte HTML'yi DOM'a yeniden render etmek zorundadır.

### componentDidUpdate

componentDidUpdate metodu iki parametre alır: prevProps ve prevState. Bileşen DOM'da güncellendikten sonra çağrılır.

```js
import React, { Component } from 'react'
import ReactDOM from 'react-dom'

class App extends Component {
  constructor(props) {
    super(props)
    console.log('Ben constructor\'um ve ilk çalışacak olan benim.')
    this.state = {
      firstName: 'Ahmet',
      data: [],
    }
  }
  componentDidUpdate(prevProps, prevState) {
    console.log(prevState, prevProps)
  }
  render() {
    return (
      <div className='App'>
        <h1>React Bileşen Yaşam Döngüsü</h1>
      </div>
    )
  }
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
```

Yukarıdaki iki yaşam döngüsü metodunu birlikte kullanalım.

```js
import React, { Component } from 'react'
import ReactDOM from 'react-dom'

class App extends Component {
  constructor(props) {
    super(props)
    console.log('Ben constructor\'um ve ilk çalışacak olan benim.')
    this.state = {
      day: 1,
      congratulate: '',
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log(nextProps, nextState)
    console.log(nextState.day)
    if (nextState.day > 31) {
      return false
    } else {
      return true
    }
  }

  doChallenge = () => {
    this.setState({
      day: this.state.day + 1,
    })
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.day == 30) {
      this.setState({
        congratulate: 'Tebrikler, meydan okuma tamamlandı!',
      })
    }
    console.log(prevState, prevProps)
  }

  render() {
    return (
      <div className='App'>
        <h1>React Bileşen Yaşam Döngüsü</h1>
        <h1>API Çağrısı</h1>
        <button onClick={this.doChallenge}>Meydan Okuma Yap</button>
        <p>Meydan Okuma: Gün {this.state.day}</p>
        {this.state.congratulate && <h2>{this.state.congratulate}</h2>}
      </div>
    )
  }
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
```

## Kaldırma (Unmounting)

Bir bileşenin yaşam döngüsündeki son aşama kaldırma (unmounting) aşamasıdır. Kaldırma aşaması, bileşeni DOM'dan siler.
componentWillUnmount metodu, bir bileşen kaldırıldığında çağrılan tek yerleşik metoddur.

# Egzersizler

## Egzersizler: Seviye 1

1. Bileşen yaşam döngüsü nedir?
2. Yaşam döngülerinin amacı nedir?
3. Bir bileşen yaşam döngüsünün üç aşaması nelerdir?
4. Montaj (mounting) ne anlama gelir?
5. Güncelleme (updating) ne anlama gelir?
6. Kaldırma (unmounting) ne anlama gelir?
7. En yaygın kullanılan yerleşik montaj yaşam döngüsü metodu hangisidir?
8. Montaj yaşam döngüsü metodları nelerdir?
9. Güncelleme yaşam döngüsü metodları nelerdir?
10. Kaldırma yaşam döngüsü metodu nedir?

## Egzersizler: Seviye 2

Yakında

## Egzersizler: Seviye 3

Yakında

🎉 TEBRİKLER! 🎉

[<< Gün 13](../13_Gun_Kontrollü_ve_Kontrolsüz_Input/13_kontrolsuz_input.md) | [Gün 15 >>](../15_Gun_Üçüncü_Taraf_Paketler/15_ucuncu_taraf_paketler.md)
