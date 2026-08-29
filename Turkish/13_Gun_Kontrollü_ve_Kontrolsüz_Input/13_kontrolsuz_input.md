<div align="center">
  <h1> 30 Days Of React: Kontrolsüz Bileşen (Uncontrolled Component)</h1>
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

[<< Gün 12](../12_Gun_Formlar/12_formlar.md) | [Gün 14 >>](../14_Gun_Bilesen_Yasam_Donguleri/14_bilesen_yasam_donguleri.md)

![30 Days of React banner](../../images/30_days_of_react_banner_day_13.jpg)

- [Kontrolsüz Bileşenler (Uncontrolled Components)](#kontrolsüz-bileşenler-uncontrolled-components)
  - [Kontrolsüz Input'tan Veri Almak](#kontrolsüz-inputtan-veri-almak)
  - [Formdan Birden Fazla Input Verisi Almak](#formdan-birden-fazla-input-verisi-almak)
- [Egzersizler](#egzersizler)
  - [Egzersizler: Seviye 1](#egzersizler-seviye-1)

# Kontrolsüz Bileşenler (Uncontrolled Components)

Bir önceki gün meydan okumada kontrollü (controlled) input'ları ele aldık. React'te çoğu zaman, [React'in resmi belgelerinde](https://reactjs.org/docs/uncontrolled-components.html) önerildiği şekilde kontrollü input'lar kullanılır.

Kontrolsüz bir bileşen yazmak için, her state güncellemesi için bir olay işleyicisi yazmak yerine, DOM'dan form değerlerini almak amacıyla bir ref kullanabilirsiniz. Kontrolsüz input'ta, geleneksel HTML form veri yönetimine benzer şekilde input alanlarından veri alırız.

Kontrolsüz bileşen örneği:

## Kontrolsüz Input'tan Veri Almak

```js
import React, { Component } from 'react'
import ReactDOM from 'react-dom'

class App extends Component {
  firstName = React.createRef()

  handleSubmit = (e) => {
    e.preventDefault()
    console.log(this.firstName.current.value)
  }

  render() {
    return (
      <div className='App'>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor='firstName'>Ad: </label>
          <input
            type='text'
            id='firstName'
            name='firstName'
            placeholder='Ad'
            ref={this.firstName}
          />
          <button type='submit'>Gönder</button>
        </form>
      </div>
    )
  }
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
```

## Formdan Birden Fazla Input Verisi Almak

DOM'dan birden fazla input verisi alabiliriz. DOM'u doğrudan hedeflemiyoruz; React, ref kullanarak DOM'dan veri alıyor.

```js
import React, { Component } from 'react'
import ReactDOM from 'react-dom'

class App extends Component {
  firstName = React.createRef()
  lastName = React.createRef()
  country = React.createRef()
  title = React.createRef()

  handleSubmit = (e) => {
    // form öğesinin varsayılan davranışını, özellikle sayfanın yenilenmesini durdurur
    e.preventDefault()

    console.log(this.firstName.current.value)
    console.log(this.lastName.current.value)
    console.log(this.title.current.value)
    console.log(this.country.current.value)

    const data = {
      firstName: this.firstName.current.value,
      lastName: this.lastName.current.value,
      title: this.title.current.value,
      country: this.country.current.value,
    }
    // burası backend api'ye bağlandığımız ve veriyi veritabanına gönderdiğimiz yerdir
    console.log(data)
  }

  render() {
    return (
      <div className='App'>
        <h3>Öğrenci Ekle</h3>
        <form onSubmit={this.handleSubmit}>
          <div>
            <input
              type='text'
              name='firstName'
              placeholder='Ad'
              ref={this.firstName}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <input
              type='text'
              name='lastName'
              placeholder='Soyad'
              ref={this.lastName}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <input
              type='text'
              name='country'
              placeholder='Ülke'
              ref={this.country}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <input
              type='text'
              name='title'
              placeholder='Ünvan'
              ref={this.title}
              onChange={this.handleChange}
            />
          </div>

          <button className='btn btn-success'>Gönder</button>
        </form>
      </div>
    )
  }
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
```

Çoğu zaman kontrolsüz input yerine kontrollü input kullanılır. DOM üzerindeki bir öğeyi hedeflemek istediğinizde, o öğenin içeriğini almak için ref kullanırsınız. Saf JavaScript kullanarak DOM'a doğrudan dokunmayın. Bir React uygulaması geliştirirken DOM'u doğrudan değiştirmeyin; çünkü React'in DOM manipülasyonunu yönetmek için kendi yolu vardır.

# Egzersizler

## Egzersizler: Seviye 1

1. Kontrollü (controlled) input nedir?
2. Kontrolsüz (uncontrolled) input nedir?
3. React'te belirli bir HTML öğesinin içeriğini nasıl alırsınız?
4. React'te DOM'a doğrudan dokunmak neden iyi bir fikir değildir?
5. React'te en sık ne kullanılır? Kontrollü mu yoksa kontrolsüz input mu?
6. Kontrolsüz input yazmak için neye ihtiyaç duyarsınız?
7. Kontrolsüz input yazmak için state gerekli midir?
8. Kontrolsüz input'u ne zaman kullanırsınız?
9. Kontrollü input'u ne zaman kullanırsınız?
10. Form input alanlarını doğrulamak için kontrollü mu yoksa kontrolsüz input mu kullanırsınız?

🎉 TEBRİKLER! 🎉

[<< Gün 12](../12_Gun_Formlar/12_formlar.md) | [Gün 14 >>](../14_Gun_Bilesen_Yasam_Donguleri/14_bilesen_yasam_donguleri.md)
