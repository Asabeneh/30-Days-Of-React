<div align="center">
  <h1> 30 Days Of React: Olaylar (Events)</h1>
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

[<< Gün 10](../10_Gun_Proje_Klasor_Yapisi/10_proje_klasor_yapisi.md) | [Gün 12 >>](../12_Gun_Formlar/12_formlar.md)

![30 Days of React banner](../../images/30_days_of_react_banner_day_11.jpg)

- [Olaylar (Events)](#olaylar-events)
  - [Olay (Event) Nedir?](#olay-event-nedir)
- [Egzersizler](#egzersizler)
  - [Egzersizler: Seviye 1](#egzersizler-seviye-1)
  - [Egzersizler: Seviye 2](#egzersizler-seviye-2)
  - [Egzersizler: Seviye 3](#egzersizler-seviye-3)

# Olaylar (Events)

## Olay (Event) Nedir?

Bir olay (event), bir yazılım tarafından tanınan bir eylem veya oluşumdur. Olayı daha iyi anlamak için bilgisayar kullanırken yaptığımız günlük aktiviteleri düşünebiliriz: bir düğmeye tıklamak, bir görsel üzerinde fareyi gezdirmek, klavyeye basmak, fare tekerleğini kaydırmak vb. Bu bölümde yalnızca bazı fare ve klavye olaylarına odaklanacağız. React belgeleri [events (olaylar)](https://reactjs.org/docs/handling-events.html) hakkında zaten ayrıntılı bir not içermektedir.

React'te olay yönetimi (event handling), saf JavaScript kullanarak DOM öğeleri üzerindeki olay yönetimine çok benzer. React'te olay yönetimi ile saf JavaScript arasındaki bazı sözdizimi farklılıkları şunlardır:

- React olayları, küçük harf yerine camelCase kullanılarak isimlendirilir.
- JSX ile olay işleyiciye (event handler) bir string yerine bir fonksiyon geçirilir.

Olay yönetimini anlamak için bazı örneklere bakalım.

HTML'de olay yönetimi:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>30 Days Of React App</title>
  </head>
  <body>
    <button onclick="greetPeople()">İnsanları Selamla</button>
    <script>
      const greetPeople = () => {
        alert('30 Günde React Meydan Okumasına Hoş Geldiniz')
      }
    </script>
  </body>
</html>
```

React'te ise biraz farklıdır:

```js
import React from 'react'
// fonksiyonel component ise
const App = () => {
  const greetPeople = () => {
    alert('30 Günde React Meydan Okumasına Hoş Geldiniz')
  }
  return <button onClick={greetPeople}> </button>
}
```

```js
import React, { Component } from 'react'
// fonksiyonel component ise
class App extends Component {
  greetPeople = () => {
    alert('30 Günde React Meydan Okumasına Hoş Geldiniz')
  }
  render() {
    return <button onClick={this.greetPeople}> </button>
  }
}
```

HTML ve React olayları arasındaki bir diğer fark, React'te varsayılan davranışı engellemek için `false` döndürememenizdir. `preventDefault`'u açıkça çağırmanız gerekir. Örneğin, saf HTML'de yeni bir sayfanın açılmasını engellemek için şunlar yazılabilir:

Saf HTML:

```html
<a href="#" onclick="console.log('Bağlantıya tıklandı.'); return false">
  Bana tıkla
</a>
```

Ancak React'te şu şekilde olabilir:

```js
import React, { Component } from 'react'
// fonksiyonel component ise
class App extends Component {
  handleClick = () => {
    alert('30 Günde React Meydan Okumasına Hoş Geldiniz')
  }
  render() {
    return (
      <a href='#' onClick={this.handleClick}>
        Bana tıkla
      </a>
    )
  }
}
```

Olay yönetimi çok geniş bir konudur ve bu meydan okumada en yaygın olay türlerine odaklanacağız. Aşağıdaki fare ve klavye olaylarını kullanabiliriz:
_onMouseMove, onMouseEnter, onMouseLeave, onMouseOut, onClick, onKeyDown, onKeyPress, onKeyUp, onCopy, onCut, onDrag, onChange, onBlur, onInput, onSubmit_

Birkaç fare ve klavye olayını daha uygulayalım:

```js
// index.js
import React, { Component } from 'react'
import ReactDOM from 'react-dom'

class App extends Component {
  state = {
    firstName: '',
    message: '',
    key: '',
  }
  handleClick = (e) => {
    // e bir olay nesnesi verir
    // e'nin değerini console.log(e) ile kontrol edin
    this.setState({
      message: 'Olaylar dünyasına hoş geldiniz',
    })
  }
  // fare her hareket ettiğinde tetiklenir
  handleMouseMove = (e) => {
    this.setState({ message: 'fare hareket ediyor' })
  }
  // input alanı değer değiştirdiğinde değeri almak için
  handleChange = (e) => {
    this.setState({
      firstName: e.target.value,
      message: e.target.value,
    })
  }

  // input alanına basıldığında klavye tuş kodunu almak için
  // input ve textarea ile çalışır
  handleKeyPress = (e) => {
    this.setState({
      message:
        `${e.target.value} tuşuna basıldı ve tuş kodu: ` + e.charCode,
    })
  }
  // Blur, fare bir input alanından ayrıldığında gerçekleşir
  handleBlur = (e) => {
    this.setState({ message: 'Input alanı odak kaybetti (blur)' })
  }
  // Bu olay bir metin kopyalama sırasında tetiklenir
  handleCopy = (e) => {
    this.setState({
      message: '30 Günde React\'i ticari amaçlarla kullanmak yasaktır',
    })
  }
  render() {
    return (
      <div>
        <h1>Olaylar Dünyasına Hoş Geldiniz</h1>

        <button onClick={this.handleClick}>Bana Tıkla</button>
        <button onMouseMove={this.handleMouseMove}>Fareyi üzerime getir</button>
        <p onCopy={this.handleCopy}>
          Bu metni kopyalayarak telif hakkı iznini kontrol edin
        </p>

        <p>{this.state.message}</p>
        <label htmlFor=''> onKeyPress Olayı Testi: </label>
        <input type='text' onKeyPress={this.handleKeyPress} />
        <br />

        <label htmlFor=''> onBlur Olayı Testi: </label>
        <input type='text' onBlur={this.handleBlur} />

        <form onSubmit={(e) => e.preventDefault()}>
          <div>
            <label htmlFor='firstName'>Ad: </label>
            <input
              onChange={this.handleChange}
              name='firstName'
              value={this.state.firstName}
            />
          </div>

          <div>
            <input type='submit' value='Gönder' />
          </div>
        </form>
      </div>
    )
  }
}

const rootElement = document.getElementById('root')
// JSX öğesini ReactDOM paketi ile render ediyoruz
ReactDOM.render(<App />, rootElement)
```

# Egzersizler

## Egzersizler: Seviye 1

1. Olay (event) nedir?
2. HTML öğe olayı ile React olayı arasındaki fark nedir?
3. En az 4 klavye olayı yazın.
4. En az 8 fare olayı yazın.
5. En yaygın fare ve klavye olayları nelerdir?
6. Input öğesine özgü bir olay yazın.
7. Form öğesine özgü bir olay yazın.
8. Body üzerinde fare hareket ederken görüntü alanının (viewport) koordinatlarını gösterin.
9. onInput, onChange ve onBlur arasındaki fark nedir?
10. onSubmit olayı nereye yerleştirilir?

## Egzersizler: Seviye 2

Aşağıdakini onMouseEnter olayını kullanarak uygulayın:

![onMouseEnter olayı](../../images/react_event_on_mouse_enter.gif)

## Egzersizler: Seviye 3

Yakında

🎉 TEBRİKLER! 🎉

[<< Gün 10](../10_Gun_Proje_Klasor_Yapisi/10_proje_klasor_yapisi.md) | [Gün 12 >>](../12_Gun_Formlar/12_formlar.md)
