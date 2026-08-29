<div align="center">
  <h1> 30 Days Of React: Üçüncü Taraf Paketler (Third Party Packages)</h1>
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

[<< Gün 14](../14_Gun_Bilesen_Yasam_Donguleri/14_bilesen_yasam_donguleri.md) | [Gün 16 >>](../16_Gun_Yuksek_Duzey_Bilesen/16_yuksek_duzey_bilesen.md)

![30 Days of React banner](../../images/30_days_of_react_banner_day_15.jpg)

- [Üçüncü Taraf Paketler (Third Party Packages)](#üçüncü-taraf-paketler-third-party-packages)
  - [NPM veya Yarn](#npm-veya-yarn)
    - [node-sass](#node-sass)
    - [CSS modules](#css-modules)
    - [axios](#axios)
    - [react-icons](#react-icons)
    - [moment](#moment)
    - [styled-components](#styled-components)
    - [reactstrap](#reactstrap)
    - [lodash](#lodash)
- [Egzersizler](#egzersizler)
  - [Egzersizler: Seviye 1](#egzersizler-seviye-1)
  - [Egzersizler: Seviye 2](#egzersizler-seviye-2)
  - [Egzersizler: Seviye 3](#egzersizler-seviye-3)

# Üçüncü Taraf Paketler (Third Party Packages)

npm kayıt defterinde 1,4 milyondan fazla JavaScript paketi bulunmaktadır. Artık neredeyse her türlü sorun için bir paket mevcuttur. Tekerleği yeniden icat etmek yerine tekerleği nasıl kullanacağımızı bilmemiz gerekir. Bu bölümde npm paketlerini nasıl kullanacağımızı öğreneceğiz ve React uygulamaları için en yaygın paketleri uygulayacağız. 10 Ekim 2020 itibarıyla npm kayıt defterinin popüler paketleri, toplam paket sayısı, haftalık indirmeler ve aylık indirmeler aşağıda gösterildiği gibidir.

![NPM paketleri](../../images/npm_package_day_15.png)

React uygulamalarınızda aşağıdaki paketlere bir şekilde ihtiyaç duyabilirsiniz. Özellikle node-sass, moment ve axios bazı projeler için önemlidir.

- [node-sass](https://www.npmjs.com/package/node-sass)
- [moment](https://www.npmjs.com/package/moment)
- [axios](https://www.npmjs.com/package/axios)
- [react-icons](https://react-icons.github.io/react-icons/)
- [styled-components](https://styled-components.com/)
- [reactstrap](https://reactstrap.github.io/)
- [lodash](https://www.npmjs.com/package/lodash)
- [uuid](https://www.npmjs.com/package/uuid)

## NPM veya Yarn

Paket yüklemek için npm ya da yarn kullanabilirsiniz. [yarn](https://yarnpkg.com) kullanmak istiyorsanız ayrıca kurmanız gerekir. Paket yönetim araçlarından birini tercih etmenizi öneririm. Aynı uygulamada her iki paket yönetim aracını aynı anda kullanmayın.

Bir uygulamaya paketlerin nasıl yükleneceğini görelim. Önce proje dizinine gidip aşağıdaki komutu yazıyoruz.

```sh
// sözdizimi, i veya install kullanabiliriz
npm i paket-adı
// veya
yarn add paket-adı
```

### node-sass

Sass, CSS fonksiyonu, iç içe yazım (nesting) ve çok daha fazlasını yazmayı sağlayan bir CSS ön işlemcisidir. Sass'ın gücünden faydalanmak için node-sass'ı yükleyelim.

npm kullanarak:

```sh
Asabeneh@DESKTOP-KGC1AKC MINGW64 ~/Desktop/30-days-of-react$ npm install node-sass
```

yarn kullanarak:

```sh
Asabeneh@DESKTOP-KGC1AKC MINGW64 ~/Desktop/30-days-of-react$ yarn add node-sass
```

node-sass yüklendikten sonra React'te Sass kullanmaya başlayabilirsiniz. Bir styles klasörü oluşturun ve bu klasörün içine test.scss dosyası ekleyin. Bu dosyayı üzerinde çalıştığınız component'e veya index.js'ye import edin. node-sass'ı component'e import etmenize gerek yoktur.

```css
/* ./styles/header.scss */
header {
  background-color: #61dbfb;
  padding: 25;
  padding: 10px;
  margin: 0;
}
```

```js
// Header.js
import React from 'react'
import './styles/header.scss
const Header = () = (
   <header>
          <div className='header-wrapper'>
            <h1>30 Günde React</h1>
            <h2>React'e Başlangıç</h2>
            <h3>JavaScript Kütüphanesi</h3>
            <p>Eğitmen: Asabeneh Yetayeh</p>
            <small>15 Ekim, 2020</small>
          </div>
        </header>
)

export default Header
```

```js
// App.js

import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import './styles/header.scss

class App extends Component {
  render() {
    return (
      <div className='App'>
       <Header />
      </div>
    )
  }
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
```

### CSS modules

Sass'a ek olarak, React'te CSS modüllerinin nasıl kullanılacağını bilmek de faydalıdır. React uygulamalarında CSS modülü kullanmak için ayrı bir paket yüklememize gerek yoktur. CSS modülü, saf CSS veya Sass ile birlikte kullanılabilir. CSS modülü için isimlendirme kuralı, belirli bir ismin ardından nokta ve module ifadesi gelir (test.module.css veya test.module.scss).

İsimlendirme:

```js
// Sass için isimlendirme
// CSS için isimlendirme
;[isim].module.scss[isim].module.css
```

```css
/* ./styles/header.module.scss */
.header {
  background-color: #61dbfb;
  padding: 25;
  padding: 10px;
  margin: 0;
}
.header-wrapper {
  font-weight:500
  border: 5px solid orange;
}
```

```js
// Header.js
import React from 'react'
import headerStyles from  './styles/header.module.scss
// Sınıf adını destructure edebiliriz
const {header, headerWrapper} = headerStyles
const Header = () = (
   <header className = {headerStyles.header}>
          <div className={headerStyles.headerWrapper}>
            <h1>30 Günde React</h1>
            <h2>React'e Başlangıç</h2>
            <h3>JavaScript Kütüphanesi</h3>
            <p>Eğitmen: Asabeneh Yetayeh</p>
            <small>15 Ekim, 2020</small>
          </div>
        </header>
)

export default Header
```

```js
// App.js

import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import './styles/header.scss

class App extends Component {
  render() {
    return (
      <div className='App'>
       <Header />
      </div>
    )
  }
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
```

### axios

Axios, veri almak için HTTP istekleri yapabilen bir JavaScript kütüphanesidir. Bu bölümde GET isteğini ele alacağız. Ancak [axios](https://github.com/axios/axios) ile tüm istek türlerini yapmak mümkündür (GET, POST, PUT, PATCH, DELETE).

npm kullanarak:

```sh
Asabeneh@DESKTOP-KGC1AKC MINGW64 ~/Desktop/30-days-of-react$ npm install axios
```

yarn kullanarak:

```sh
Asabeneh@DESKTOP-KGC1AKC MINGW64 ~/Desktop/30-days-of-react$ yarn add axios
```

```js
import React, { Component } from 'react'
// axios, sunucuya veri almak için istek gönderen bir pakettir
import axios from 'axios'
import ReactDOM from 'react-dom'

class App extends Component {
  state = {
    data: [],
  }
  componentDidMount() {
    const API_URL = 'https://restcountries.eu/rest/v2/all'
    axios
      .get(API_URL)
      .then((response) => {
        this.setState({
          data: response.data,
        })
      })
      .catch((error) => {
        console.log(error)
      })
  }

  renderCountries = () => {
    return this.state.data.map((country) => {
      const languageOrLanguages =
        country.languages.length > 1 ? 'Diller' : 'Dil'
      const formatLanguages = country.languages
        .map(({ name }) => name)
        .join(', ')
      return (
        <div>
          <div>
            {' '}
            <img src={country.flag} alt={country.name} />{' '}
          </div>
          <div>
            <h1>{country.name}</h1>
            <p>Başkent: {country.capital}</p>
            <p>
              {languageOrLanguages}: {formatLanguages}
            </p>
            <p>Nüfus: {country.population}</p>
          </div>
        </div>
      )
    })
  }
  render() {
    return (
      <div className='App'>
        <h1>Axios ile Veri Çekme</h1>
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

Axios'u await ve async fonksiyonlarla birlikte kullanabiliriz. await ve async kullanmak için componentDidMount'un dışında ayrı bir fonksiyon oluşturmamız gerekir. Await ve async uygularsak hatalar try ve catch ile ele alınmalıdır.

### react-icons

İkonlar bir web sitesinin ayrılmaz bir parçasıdır. Farklı SVG ikonları kullanmak için:

npm kullanarak:

```sh
Asabeneh@DESKTOP-KGC1AKC MINGW64 ~/Desktop/30-days-of-react$ npm install react-icons
```

yarn kullanarak:

```sh
Asabeneh@DESKTOP-KGC1AKC MINGW64 ~/Desktop/30-days-of-react$ yarn add react-icons
```

```js
import React, { Component } from 'react'
import axios from 'axios'
import ReactDOM from 'react-dom'
import moment from 'moment'
import {
  TiSocialLinkedinCircular,
  TiSocialGithubCircular,
  TiSocialTwitterCircular,
} from 'react-icons/ti'

const Footer = () => (
  <footer>
    <h3>30 Günde React</h3>
    <div>
      <TiSocialLinkedinCircular />
      <TiSocialGithubCircular />
      <TiSocialTwitterCircular />
    </div>
    <div>
      <small> Telif Hakkı &copy; {new Date().getFullYear()} </small>
    </div>
  </footer>
)

class App extends Component {
  render() {
    return (
      <div className='App'>
        <h1>İkon Dünyasına Hoş Geldiniz</h1>
        <Footer />
      </div>
    )
  }
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
```

### moment

Moment, farklı zaman formatları sunan küçük bir JavaScript kütüphanesidir.

```sh
npm install moment
```

```js
import React, { Component } from 'react'
import ReactDOM from 'react-dom'

class App extends Component {
  render() {
    return (
      <div className='App'>
        <h1>moment Nasıl Kullanılır?</h1>
        <p>Bu meydan okuma {moment('2020-10-01').fromNow()} başladı</p>
        <p>Meydan okuma {moment('2020-10-30').fromNow()} sona erecek</p>
        <p>Bugün {moment(new Date()).format('MMMM DD, YYYY HH:mm')}</p>
      </div>
    )
  }
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
```

### styled-components

Bir bileşeni şekillendirmek için etiketli şablon değişmezlerini (tagged template literals) kullanır. Bileşenler ve stiller arasındaki eşleşmeyi kaldırır. Bu, stillerinizi tanımlarken aslında stillerinizin eklendiği normal bir React bileşeni oluşturduğunuz anlamına gelir.

```js
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components'

const Title = styled.h1`
  font-size: 70px;
  font-weight: 300;
`
const Header = styled.header`
  background-color: #61dbfb;
  padding: 25;
  padding: 10px;
  margin: 0;
`

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Header>
          <div>
            <Title>30 Günde React</Title>
            <h2>React'e Başlangıç</h2>
            <h3>JavaScript Kütüphanesi</h3>
            <p>Eğitmen: Asabeneh Yetayeh</p>
            <small>15 Ekim, 2020</small>
          </div>
        </Header>
      </div>
    )
  }
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
```

### reactstrap

[reactstrap](https://reactstrap.github.io/) paketi, bileşenleri Bootstrap ile birlikte kullanmayı sağlar.

### lodash

Resmi lodash belgelerine göre: 'Modülerlik, performans ve ekstralar sunan modern bir JavaScript yardımcı programı kütüphanesi.'

_classnames_ ve _validator_ paketlerini de nasıl kullanacağınızı öğrenmeye çalışın.

# Egzersizler

## Egzersizler: Seviye 1

1. Paket nedir?
2. Üçüncü taraf (third party) paket nedir?
3. Üçüncü taraf paket kullanmak zorunda mısınız?
4. Bir üçüncü taraf paketin popülerliğini ve kararlılığını nasıl anlarsınız?
5. npm kayıt defterinde kaç JavaScript paketi bulunmaktadır?
6. Üçüncü taraf paket nasıl yüklenir?
7. En sık hangi paketleri kullanırsınız?
8. Veri çekmek için hangi paketi kullanırsınız?
9. classnames paketinin amacı nedir?
10. validator paketinin amacı nedir?

## Egzersizler: Seviye 2

1. Sass'ı nasıl kullanacağınızı öğrenin.
2. axios'u nasıl kullanacağınızı öğrenin.
3. moment ve react-icons'ı nasıl kullanacağınızı öğrenin.
4. 12. gündeki formu doğrulamak için validator paketini kullanın.
5. Bir mantığa dayalı olarak sınıfı değiştirmek için classnames'i kullanın.

## Egzersizler: Seviye 3

🎉 TEBRİKLER! 🎉

[<< Gün 14](../14_Gun_Bilesen_Yasam_Donguleri/14_bilesen_yasam_donguleri.md) | [Gün 16 >>](../16_Gun_Yuksek_Duzey_Bilesen/16_yuksek_duzey_bilesen.md)
