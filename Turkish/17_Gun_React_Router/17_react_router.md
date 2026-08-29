<div align="center">
  <h1> 30 Days Of React: React Router</h1>
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

[<< Gün 16](../16_Gun_Yuksek_Duzey_Bilesen/16_yuksek_duzey_bilesen.md) | [Gün 18 >>](../18_Gun_Fetch_ve_Axios/18_fetch_ve_axios.md)

![30 Days of React banner](../../images/30_days_of_react_banner_day_17.jpg)

- [React Router](#react-router)
  - [React Router Nedir?](#react-router-nedir)
  - [BrowserRouter](#browserrouter)
  - [Route](#route)
  - [Switch](#switch)
  - [NavLink](#navlink)
  - [İç İçe Yönlendirme (Nested Routing)](#i̇ç-i̇çe-yönlendirme-nested-routing)
  - [Redirect](#redirect)
  - [Prompt](#prompt)
- [Egzersizler](#egzersizler)
  - [Egzersizler: Seviye 1](#egzersizler-seviye-1)
  - [Egzersizler: Seviye 2](#egzersizler-seviye-2)
  - [Egzersizler: Seviye 3](#egzersizler-seviye-3)

# React Router

## React Router Nedir?

Route veya router kelimesini daha önce duymamış olabilirsiniz ve burada tanımlamak gerekebilir. Route kelimesinin gerçek anlamı bir yol veya bir yere ulaşmanın yoludur. React'teki anlamı da gerçek anlama benzerdir. React Router, React bileşenleri arasında gezinmeyi (navigate) sağlayan bir React bileşenidir.

Bu bölümde React router'ın nasıl kullanılacağına dair başlangıç yapacaksınız, ancak yeterince geniş bir kapsam olmayabilir. React Router'ın resmi web sitesinden öğrenmek isterseniz [buradan](https://reactrouter.com/web/guides/quick-start) erişebilirsiniz.

Daha önce belirttiğimiz üzere React, tüm uygulamada yalnızca bir index.html sayfasının bulunduğu tek sayfalı bir uygulamadır (single page application). React Router uygulandığında, farklı bileşenler farklı mantık ve koşullara göre aynı anda veya farklı zamanlarda index.html sayfasında render edilir. React Router'ın farklı sürümleri vardır ve en son sürümü React Router 5'tir. Bu meydan okuma için React Router sürüm 4 kullanacağız. React Router paketlerini yükleyerek başlayalım.

```js
Asabeneh@DESKTOP-KGC1AKC MINGW64 ~/Desktop/30-days-of-react$ npm install react-router-dom
```

Önceki günlerde oluşturduğumuz şablon kodları kullanarak basit bir yönlendirme uygulayalım. Her şeyden önce _react-router-dom_'u import edin, ardından yönlendirme için ihtiyaç duyduğumuz tüm bileşenleri react-router-dom'dan çıkarabilirsiniz.

```js
import React from 'react'
import {
  BrowserRouter,
  Route,
  NavLink,
  Switch,
  Redirect,
  Prompt,
  withRouter,
} from 'react-router-dom'
```

Her projede bu bileşenlerin tamamına ihtiyaç duymayabiliriz, ancak var olduklarını bilmek faydalıdır.

## BrowserRouter

BrowserRouter, uygulama route'unu sarmak için kullanılan üst bileşendir. BrowserRouter kullanarak tarayıcı geçmişine (history) erişebiliriz. Bazen Router olarak yeniden adlandırılabilir.

```js
import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
```

BrowserRouter'ı bir React uygulaması için navigasyon oluşturmakta kullanalım.

```js
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <Router>
        <div className='App'>
          <h1>React Router DOM</h1>
        </div>
      </Router>
    )
  }
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
```

Uygulamamızı BrowserRouter veya Router ile sardık ve her zamanki gibi sorunsuz çalışıyor. Home, About, Contact, Challenge bileşenlerini oluşturalım ve farklı bileşenlere route ekleyelim. Bileşenlere ek olarak react-router-dom'dan Route bileşenini de import etmemiz gerekiyor.

## Route

Route bileşeni bileşenler arasında gezinmeyi sağlar. Bir bileşenden diğerine giden bir yoldur.
Route bileşeninin iki zorunlu prop'u vardır: path ve component veya render.
path prop'u bileşenin render edileceği yeri, component prop'u ise o belirli path'te render edilecek bileşeni belirtir. Bileşeninizi görmek için /home route'unu isteyin.

```js
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

// Home bileşeni
const Home = (props) => <h1>Ana Sayfaya Hoş Geldiniz</h1>

class App extends Component {
  render() {
    return (
      <Router>
        <div className='App'>
          <Route path='/home' component={Home} />
        </div>
      </Router>
    )
  }
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
```

Route'umuza birkaç bileşen daha ekleyelim.

```js
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

// Home bileşeni
const Home = (props) => <h1>Ana Sayfaya Hoş Geldiniz</h1>
// About bileşeni
const About = (props) => <h1>Hakkımızda</h1>
// Contact bileşeni
const Contact = (props) => <h1>Bize Ulaşın</h1>
// Challenge bileşeni
const Challenges = (props) => (
  <div>
    <h1>30 Günde React Meydan Okuması</h1>
  </div>
)

class App extends Component {
  render() {
    return (
      <Router>
        <div className='App'>
          <Route path='/home' component={Home} />
          <Route path='/about' component={About} />
          <Route path='/contact' component={Contact} />
          <Route path='/challenges' component={Challenges} />
        </div>
      </Router>
    )
  }
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
```

Yukarıdaki örnekte görüldüğü gibi tüm route'larda eğik çizgi (/) var. Home'u genellikle yalnızca eğik çizgiyle (/) oluştururuz, o zaman home için eğik çizgiyi (/) kullanalım.

```js
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

// Home bileşeni
const Home = (props) => <h1>Ana Sayfaya Hoş Geldiniz</h1>
// About bileşeni
const About = (props) => <h1>Hakkımızda</h1>
// Contact bileşeni
const Contact = (props) => <h1>Bize Ulaşın</h1>
// Challenge bileşeni
const Challenges = (props) => (
  <div>
    <h1>30 Günde React Meydan Okuması</h1>
  </div>
)

class App extends Component {
  render() {
    return (
      <Router>
        <div className='App'>
          <Route path='/' component={Home} />
          <Route path='/about' component={About} />
          <Route path='/contact' component={Contact} />
          <Route path='/challenges' component={Challenges} />
        </div>
      </Router>
    )
  }
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
```

Artık / veya /about yazarak gezinmeye çalışırsanız her zaman ana sayfayı göreceksiniz. Ana sayfa route'u (/) diğer route'larda da ortak olduğundan her zaman görünür. Bunu önlemek için bir yol bulalım. Üç farklı şekilde çözebiliriz. Biri exact niteliği ile. /about/ gibi URL'nin sondaki eğik çizgiyle (/about/) bitmesini istemiyorsak, exact'e ek olarak strict niteliğini de kullanabiliriz.

```js
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

// Home bileşeni
const Home = (props) => <h1>Ana Sayfaya Hoş Geldiniz</h1>
// About bileşeni
const About = (props) => <h1>Hakkımızda</h1>
// Contact bileşeni
const Contact = (props) => <h1>Bize Ulaşın</h1>
// Challenge bileşeni
const Challenges = (props) => (
  <div>
    <h1>30 Günde React Meydan Okuması</h1>
  </div>
)

class App extends Component {
  render() {
    return (
      <Router>
        <div className='App'>
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
          <Route exact path='/contact' component={Contact} />
          <Route exact path='/challenges' component={Challenges} />
        </div>
      </Router>
    )
  }
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
```

URL'nin sonda eğik çizgiyle bitmesini, örneğin (/about/), istemiyorsak exact'e ek olarak strict niteliğini kullanabiliriz.

```js
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

// Home bileşeni
const Home = (props) => <h1>Ana Sayfaya Hoş Geldiniz</h1>
// About bileşeni
const About = (props) => <h1>Hakkımızda</h1>
// Contact bileşeni
const Contact = (props) => <h1>Bize Ulaşın</h1>
// Challenge bileşeni
const Challenges = (props) => (
  <div>
    <h1>30 Günde React Meydan Okuması</h1>
  </div>
)

class App extends Component {
  render() {
    return (
      <Router>
        <div className='App'>
          <Route exact path='/' component={Home} />
          <Route exact strict path='/about' component={About} />
          <Route exact strict path='/contact' component={Contact} />
          <Route exact strict path='/challenges' component={Challenges} />
        </div>
      </Router>
    )
  }
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
```

Ana sayfanın sürekli görünmesini engellemenin diğer yolu, yönlendirme sırasını ve Switch bileşenini değiştirmektir. Bunun için home route'unu en alta yerleştirmeniz yeterlidir.

## Switch

Switch bileşeni yalnızca bir bileşenin render edilmesine izin verir.

```js
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

// Home bileşeni
const Home = (props) => <h1>Ana Sayfaya Hoş Geldiniz</h1>
// About bileşeni
const About = (props) => <h1>Hakkımızda</h1>
// Contact bileşeni
const Contact = (props) => <h1>Bize Ulaşın</h1>
// Challenge bileşeni
const Challenges = (props) => (
  <div>
    <h1>30 Günde React Meydan Okuması</h1>
  </div>
)

class App extends Component {
  render() {
    return (
      <Router>
        <div className='App'>
          <Switch>
            <Route exact path='/about' component={About} />
            <Route exact path='/contact' component={Contact} />
            <Route exact path='/challenges' component={Challenges} />
            <Route exact path='/' component={Home} />
          </Switch>
        </div>
      </Router>
    )
  }
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
```

Route hazır görünüyor ama şimdiye kadar her belirli route'u manuel olarak yazarak geziniyoruz. Her belirli route'a yönlendirilmek için NavLink bileşenini kullanalım.

## NavLink

NavLink bileşeni her bileşene gitmemizi sağlar. Zorunlu bir to prop'u alır. NavLink, anchor etiketinin üzerindeki bir bileşendir. Bir NavLink'e tıklamak sayfa yenilenmesi yapmaz; bu, router kullanmanın en büyük avantajlarından biridir. Aşağıdaki örneğe bakın. Önce ana sayfa için bir navigasyon uygulayalım.

```js
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  NavLink,
} from 'react-router-dom'

// Home bileşeni
const Home = (props) => <h1>Ana Sayfaya Hoş Geldiniz</h1>
// About bileşeni
const About = (props) => <h1>Hakkımızda</h1>
// Contact bileşeni
const Contact = (props) => <h1>Bize Ulaşın</h1>
// Challenge bileşeni
const Challenges = (props) => (
  <div>
    <h1>30 Günde React Meydan Okuması</h1>
  </div>
)

class App extends Component {
  render() {
    return (
      <Router>
        <div className='App'>
          <ul>
            <li>
              <NavLink to='/'>Ana Sayfa</NavLink>
            </li>
          </ul>

          <Switch>
            <Route path='/about' component={About} />
            <Route path='/contact' component={Contact} />
            <Route path='/challenges' component={Challenges} />
            <Route path='/' component={Home} />
          </Switch>
        </div>
      </Router>
    )
  }
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
```

Şimdi tüm bileşenler için navigasyonu uygulayalım.

```js
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  NavLink,
} from 'react-router-dom'

// Home bileşeni
const Home = (props) => <h1>Ana Sayfaya Hoş Geldiniz</h1>
// About bileşeni
const About = (props) => <h1>Hakkımızda</h1>
// Contact bileşeni
const Contact = (props) => <h1>Bize Ulaşın</h1>
// Challenge bileşeni
const Challenges = (props) => (
  <div>
    <h1>30 Günde React Meydan Okuması</h1>
  </div>
)

class App extends Component {
  render() {
    return (
      <Router>
        <div className='App'>
          <ul>
            <li>
              <NavLink to='/'>Ana Sayfa</NavLink>
            </li>
            <li>
              <NavLink to='/about'>Hakkında</NavLink>
            </li>
            <li>
              <NavLink to='/contact'>İletişim</NavLink>
            </li>
            <li>
              <NavLink to='/challenges'>Meydan Okumalar</NavLink>
            </li>
          </ul>

          <Switch>
            <Route path='/about' component={About} />
            <Route path='/contact' component={Contact} />
            <Route path='/challenges' component={Challenges} />
            <Route path='/' component={Home} />
          </Switch>
        </div>
      </Router>
    )
  }
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
```

Route ve navigasyonumuz, route bulunduğu sürece mükemmel çalışıyor. Ancak bir route bulunamazsa son bileşene düşüyor. Bu sorunu önlemek için ayrı bir "sayfa bulunamadı" bileşeni oluşturup yönlendirmemize ekleyelim.

```js
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  NavLink,
} from 'react-router-dom'

// Home bileşeni
const Home = (props) => <h1>Ana Sayfaya Hoş Geldiniz</h1>
// About bileşeni
const About = (props) => <h1>Hakkımızda</h1>
// Contact bileşeni
const Contact = (props) => <h1>Bize Ulaşın</h1>
// Challenge bileşeni
const Challenges = (props) => (
  <div>
    <h1>30 Günde React Meydan Okuması</h1>
  </div>
)
const NotFound = (props) => <h1>Aradığınız sayfa bulunamadı</h1>
class App extends Component {
  render() {
    return (
      <Router>
        <div className='App'>
          <ul>
            <li>
              <NavLink to='/'>Ana Sayfa</NavLink>
            </li>
            <li>
              <NavLink to='/about'>Hakkında</NavLink>
            </li>
            <li>
              <NavLink to='/contact'>İletişim</NavLink>
            </li>
            <li>
              <NavLink to='/challenges'>Meydan Okumalar</NavLink>
            </li>
          </ul>

          <Switch>
            <Route path='/about' component={About} />
            <Route path='/contact' component={Contact} />
            <Route path='/challenge' component={Challenges} />
            <Route path='/' component={Home} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </Router>
    )
  }
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
```

Navigasyondan sorumlu ayrı bir bileşen oluşturalım.

```js
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  NavLink,
} from 'react-router-dom'

// Home bileşeni
const Home = (props) => <h1>Ana Sayfaya Hoş Geldiniz</h1>
// About bileşeni
const About = (props) => <h1>Hakkımızda</h1>
// Contact bileşeni
const Contact = (props) => <h1>Bize Ulaşın</h1>
// Challenge bileşeni
const Challenges = (props) => (
  <div>
    <h1>30 Günde React Meydan Okuması</h1>
  </div>
)
const NotFound = (props) => <h1>Aradığınız sayfa bulunamadı</h1>
const Navbar = () => (
  <ul>
    <li>
      <NavLink to='/'>Ana Sayfa</NavLink>
    </li>
    <li>
      <NavLink to='/about'>Hakkında</NavLink>
    </li>
    <li>
      <NavLink to='/contact'>İletişim</NavLink>
    </li>
    <li>
      <NavLink to='/challenges'>Meydan Okumalar</NavLink>
    </li>
  </ul>
)
class App extends Component {
  render() {
    return (
      <Router>
        <div className='App'>
          <Navbar />
          <Switch>
            <Route component={NotFound} />
            <Route path='/about' component={About} />
            <Route path='/contact' component={Contact} />
            <Route path='/challenge' component={Challenges} />
            <Route exact path='/' component={Home} />
          </Switch>
        </div>
      </Router>
    )
  }
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
```

## İç İçe Yönlendirme (Nested Routing)

React Router kullanarak basit bir navigasyon uyguladık. Şimdi route'ların iç içe nasıl yerleştirileceğini görelim. React'te iç içe route kullanmak mümkündür.

```js
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  NavLink,
} from 'react-router-dom'

// Home bileşeni
const Home = (props) => <h1>Ana Sayfaya Hoş Geldiniz</h1>
// About bileşeni
const About = (props) => <h1>Hakkımızda</h1>
// Contact bileşeni
const Contact = (props) => <h1>Bize Ulaşın</h1>
// Challenge bileşeni

const challenges = [
  {
    name: '30 Günde Python',
    description:
      '30 Günde Python meydan okuması, 30 günde Python öğrenmek için adım adım bir rehberdir.',
    status: 'tamamlandı',
    days: 30,
    level: 'Başlangıçtan İleri Seviyeye',
    duration: '20 Kas 2019 - 20 Ara 2019',
    slug: 'pyhton',
    url:
      'https://github.com/Asabeneh/30-Days-Of-Python',
    author: {
      firstName: 'Asabeneh',
      lastName: 'Yetayeh',
    },
  },
  {
    name: '30 Günde JavaScript',
    description:
      '30 Günde JavaScript meydan okuması, 30 günde JavaScript öğrenmek için adım adım bir rehberdir.',
    status: 'tamamlandı',
    days: 30,
    level: 'Başlangıçtan İleri Seviyeye',
    duration: '1 Oca 2020 - 30 Oca 2020',
    slug: 'javascript',
    url: 'https://github.com/Asabeneh/30-Days-Of-JavaScript',
    author: {
      firstName: 'Asabeneh',
      lastName: 'Yetayeh',
    },
  },
  {
    name: '30 Günde React',
    description:
      '30 Günde React meydan okuması, 30 günde React öğrenmek için adım adım bir rehberdir.',
    status: 'devam ediyor',
    days: 30,
    level: 'Başlangıçtan İleri Seviyeye',
    duration: '1 Eki 2020 - 30 Eki 2020',
    slug: 'react',
    url: 'https://github.com/Asabeneh/30-Days-Of-React',
    author: {
      firstName: 'Asabeneh',
      lastName: 'Yetayeh',
    },
  },
  {
    name: '30 HTML ve CSS',
    description:
      '30 Günde HTML ve CSS meydan okuması, 30 günde HTML ve CSS öğrenmek için adım adım bir rehberdir.',
    status: 'yakında',
    days: 30,
    level: 'Başlangıçtan İleri Seviyeye',
    duration: '',
    slug: 'html-and-css',
    url: '',
    author: {
      firstName: 'Asabeneh',
      lastName: 'Yetayeh',
    },
  },
  {
    name: '30 ReactNative',
    description:
      '30 Günde ReactNative meydan okuması, 30 günde ReactNative öğrenmek için adım adım bir rehberdir.',
    status: 'yakında',
    days: 30,
    level: 'Başlangıçtan İleri Seviyeye',
    duration: '',
    slug: 'reactnative',
    url: '',
    author: {
      firstName: 'Asabeneh',
      lastName: 'Yetayeh',
    },
  },
  {
    name: '30 Veri Analizi',
    description:
      '30 Günde Veri Analizi meydan okuması, 30 günde veri, veri görselleştirme ve veri analizi öğrenmek için adım adım bir rehberdir.',
    status: 'yakında',
    days: 30,
    level: 'Başlangıçtan İleri Seviyeye',
    duration: '',
    slug: 'data-analysis',
    url: '',
    author: {
      firstName: 'Asabeneh',
      lastName: 'Yetayeh',
    },
  },
  {
    name: '30 Makine Öğrenmesi',
    description:
      '30 Günde Makine Öğrenmesi meydan okuması, 30 günde veri temizleme, makine öğrenmesi modelleri ve tahminler öğrenmek için adım adım bir rehberdir.',
    status: 'yakında',
    days: 30,
    level: 'Başlangıçtan İleri Seviyeye',
    duration: '',
    slug: 'machine-learning',
    url: '',
    author: {
      firstName: 'Asabeneh',
      lastName: 'Yetayeh',
    },
  },
]

const Challenge = ({
  challenge: {
    name,
    description,
    status,
    days,
    level,
    duration,
    author: { firstName, lastName },
  },
}) => (
  <div>
    <h1>{name}</h1>
    <p>{level}</p>
    <p>
      Yazar: {firstName} {lastName}
    </p>
    {duration && (
      <>
        {' '}
        <small>{duration}</small> <br />
      </>
    )}
    <small>Gün sayısı: {days}</small>

    <p>{description}</p>
  </div>
)

const Challenges = (props) => {
  const path = props.location.pathname
  const slug = path.split('/').slice(path.split('/').length - 1)[0]
  const challenge = challenges.find((challenge) => challenge.slug === slug)

  return (
    <div>
      <h1>30 Günde React Meydan Okuması</h1>
      <ul>
        {challenges.map(({ name, slug }) => (
          <li>
            <NavLink to={`/challenges/${slug}`}>{name}</NavLink>
          </li>
        ))}
      </ul>
      <Switch>
        <Route
          exact
          path={'/challenges'}
          component={() => <h1>Meydan okumalardan birini seçin</h1>}
        />
        <Route
          path={path}
          component={(props) => <Challenge challenge={challenge} />}
        />
      </Switch>
    </div>
  )
}

const NotFound = (props) => <h1>Aradığınız sayfa bulunamadı</h1>
const Navbar = () => (
  <ul>
    <li>
      <NavLink to='/'>Ana Sayfa</NavLink>
    </li>
    <li>
      <NavLink to='/about'>Hakkında</NavLink>
    </li>
    <li>
      <NavLink to='/contact'>İletişim</NavLink>
    </li>
    <li>
      <NavLink to='/challenges'>Meydan Okumalar</NavLink>
    </li>
  </ul>
)
class App extends Component {
  render() {
    return (
      <Router>
        <div className='App'>
          <Navbar />
          <Switch>
            <Route path='/about' component={About} />
            <Route path='/contact' component={Contact} />
            <Route path='/challenges' component={Challenges} />
            <Route exact path='/' component={Home} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </Router>
    )
  }
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
```

Bir sonraki bölümde Prompt, Redirect ve withRouter bileşenlerini ele alacağız.

## Redirect

Redirect, bazı koşullara bağlı olarak bir route'u belirli bir path'e yönlendirmemize yardımcı olabilir. Örneğin, kullanıcı giriş yaptıysa panele (dashboard), aksi takdirde giriş sayfasına yönlendiririz. Yukarıdaki kod parçasına sahte bir giriş sistemi ekleyelim. Kullanıcı giriş yaptıysa meydan okuma sayfasına, aksi takdirde giriş yapmasını öneren sayfaya yönlendirilecek.

```js
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  NavLink,
  Redirect,
} from 'react-router-dom'

// Home bileşeni
const Home = (props) => <h1>Ana Sayfaya Hoş Geldiniz</h1>
// About bileşeni
const About = (props) => <h1>Hakkımızda</h1>
// Contact bileşeni
const Contact = (props) => <h1>Bize Ulaşın</h1>

// challenges verisi (yukarıdaki ile aynı)...

const User = ({ match, isLoggedIn, handleLogin }) => {
  const username = match.params.username
  return (
    <div>
      {isLoggedIn ? (
        <>
          <h1>Meydan okumaya hoş geldiniz, {username}</h1>
          <small>Artık tüm meydan okumalarda gezinebilirsiniz</small> <br />
        </>
      ) : (
        <p>Meydan okumalara erişmek için lütfen giriş yapın</p>
      )}
      <button onClick={handleLogin}>{isLoggedIn ? 'Çıkış Yap' : 'Giriş Yap'}</button>
    </div>
  )
}

const Welcome = ({ handleLogin, isLoggedIn }) => {
  return (
    <div>
      {isLoggedIn ? 'Meydan okumaya hoş geldiniz' : <p>Lütfen giriş yapın</p>}
      <button onClick={handleLogin}>{isLoggedIn ? 'Çıkış Yap' : 'Giriş Yap'}</button>
    </div>
  )
}
class App extends Component {
  state = {
    isLoggedIn: false,
    firstName: 'Asabeneh',
  }
  handleLogin = () => {
    this.setState({
      isLoggedIn: !this.state.isLoggedIn,
    })
  }
  render() {
    return (
      <Router>
        <div className='App'>
          <Navbar username={this.state.firstName} />
          <Switch>
            <Route path='/about' component={About} />
            <Route path='/contact' component={Contact} />
            <Route
              path='/user/:username'
              component={(props) => (
                <User
                  {...props}
                  isLoggedIn={this.state.isLoggedIn}
                  handleLogin={this.handleLogin}
                />
              )}
            />
            <Route
              path='/login'
              component={(props) => (
                <Welcome
                  {...props}
                  isLoggedIn={this.state.isLoggedIn}
                  handleLogin={this.handleLogin}
                />
              )}
            />
            <Route
              path='/challenges'
              component={(props) => {
                return this.state.isLoggedIn ? (
                  <Challenges {...props} />
                ) : (
                  <Redirect to='/user/asabeneh' />
                )
              }}
            />
            <Route exact path='/' component={Home} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </Router>
    )
  }
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
```

## Prompt

Bazen kullanıcı bir sayfayı terk etmeye çalıştığında, tamamlanmamış görevi olduğunu bildirmek isteyebiliriz. Bunun için Prompt bileşenini kullanabiliriz. Prompt bileşeni when ve message olmak üzere iki prop alır (`<Prompt when={true ? 'Mutlu':'Üzgün'} message='Ne zaman mutlu olsam' />`). Bunu önceki kodda uygulayalım.

Aşağıdaki kodda when parametresi olmadan Prompt uygulanmıştır, dolayısıyla tüm route'ları kontrol edecektir.

```js
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  NavLink,
  Redirect,
  Prompt,
} from 'react-router-dom'

// ...bileşenler ve veri burada...

class App extends Component {
  state = {
    isLoggedIn: false,
    firstName: 'Asabeneh',
  }
  handleLogin = () => {
    this.setState({
      isLoggedIn: !this.state.isLoggedIn,
    })
  }
  render() {
    return (
      <Router>
        <div className='App'>
          <Navbar username={this.state.firstName} />
          <Prompt message='Ayrılmak istediğinize emin misiniz?' />

          <Switch>
            <Route path='/about' component={About} />
            <Route path='/contact' component={Contact} />
            <Route
              path='/user/:username'
              component={(props) => (
                <User
                  {...props}
                  isLoggedIn={this.state.isLoggedIn}
                  handleLogin={this.handleLogin}
                />
              )}
            />
            <Route
              path='/login'
              component={(props) => (
                <Welcome
                  {...props}
                  isLoggedIn={this.state.isLoggedIn}
                  handleLogin={this.handleLogin}
                />
              )}
            />
            <Route
              path='/challenges'
              component={(props) => {
                return this.state.isLoggedIn ? (
                  <Challenges {...props} />
                ) : (
                  <Redirect to='/user/asabeneh' />
                )
              }}
            />
            <Route exact path='/' component={Home} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </Router>
    )
  }
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
```

Koşulsuz kullanım yerine, message içinde geri çağrı (callback) fonksiyonu kullanarak kullanıcıya gerçekten çıkış yapmak isteyip istemediğini soralım.

```js
<Prompt
  message={({ pathname }) => {
    return this.state.isLoggedIn &&
      pathname.includes('/user/Asabeneh')
      ? 'Çıkış yapmak istediğinize emin misiniz?'
      : true
  }}
/>
```

# Egzersizler

## Egzersizler: Seviye 1

1. React'te yönlendirme uygulamak için hangi paketi kullanırsınız?
2. react-router-dom'da varsayılan export nedir?
3. Aşağıdaki bileşenlerin kullanım amacı nedir? (Route, NavLink, Switch, Redirect, Prompt)

## Egzersizler: Seviye 2

Artık React router'ı biliyorsunuz. Portföyünüzü React ile oluşturun ve navigasyon için React router kullanın.

## Egzersizler: Seviye 3

Yakında

🎉 TEBRİKLER! 🎉

[<< Gün 16](../16_Gun_Yuksek_Duzey_Bilesen/16_yuksek_duzey_bilesen.md) | [Gün 18 >>](../18_Gun_Fetch_ve_Axios/18_fetch_ve_axios.md)
