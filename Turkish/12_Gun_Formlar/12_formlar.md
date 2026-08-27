<div align="center">
  <h1> 30 Days Of React: Formlar (Forms)</h1>
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

[<< Gün 11](../11_Gun_Olaylar/11_olaylar.md) | [Gün 13 >>](../13_Gun_Kontrollü_ve_Kontrolsüz_Input/13_kontrolsuz_input.md)

![30 Days of React banner](../../images/30_days_of_react_banner_day_12.jpg)

- [Formlar (Forms)](#formlar-forms)
  - [Input Alanından Veri Almak](#input-alanından-veri-almak)
  - [Formdan Birden Fazla Input Verisi Almak](#formdan-birden-fazla-input-verisi-almak)
  - [Farklı Input Alan Türlerinden Veri Almak](#farklı-input-alan-türlerinden-veri-almak)
  - [Form Doğrulama (Validation)](#form-doğrulama-validation)
  - [Doğrulama Nedir?](#doğrulama-nedir)
  - [Doğrulamanın Amacı Nedir?](#doğrulamanın-amacı-nedir)
  - [Doğrulama Türleri](#doğrulama-türleri)
- [Egzersizler](#egzersizler)
  - [Egzersizler: Seviye 1](#egzersizler-seviye-1)
  - [Egzersizler: Seviye 2](#egzersizler-seviye-2)
  - [Egzersizler: Seviye 3](#egzersizler-seviye-3)

# Formlar (Forms)

Form, kullanıcıdan veri toplamak için kullanılır. Zaman zaman bir kâğıt üzerinde ya da bir web sitesinde bilgilerimizi doldurmak için form kullanırız. Kayıt olmak, giriş yapmak veya bir işe başvurmak için farklı form alanlarını doldurarak verilerimizi uzak bir veritabanına göndeririz. Bir formu doldururken basit metin, e-posta, parola, telefon, tarih, onay kutusu (checkbox), radyo düğmesi, seçim kutusu ve metin alanı gibi farklı form alanlarıyla karşılaşırız. HTML5, oldukça fazla alan türü sunmaktadır. Aşağıdaki mevcut HTML5 input türlerine göz atabilirsiniz.

```html
<input type="text" />
<input type="number" />
<input type="range" />

<input type="email" />
<input type="password" />
<input type="tel" />

<input type="checkbox" />
<input type="radio" />

<input type="color" />

<input type="url" />
<input type="image" />
<input type="file" />

<input type="hidden" />

<input type="date" />
<input type="datetime-local" />
<input type="month" />
<input type="week" />
<input type="time" />

<input type="reset" />
<input type="search" />
<input type="submit" />
<input type="button" />
```

Formdan veri almak için kullanılan diğer HTML alanları arasında textarea ve seçenekli select öğesi yer alır.

```html
<textarea>Lütfen yorumunuzu yazın ...</textarea>

<select name="country">
  <option value="">Ülkenizi seçin</option>
  <option value="finland">Finlandiya</option>
  <option value="sweden">İsveç</option>
  <option value="denmark">Danimarka</option>
  <option value="norway">Norveç</option>
  <option value="iceland">İzlanda</option>
</select>
```

Artık bir formdan veri almak için ihtiyaç duyduğumuz alanların çoğunu biliyorsunuz. Metin tipinde bir input ile başlayalım. Bir önceki günde farklı olay türlerini gördük; bugün ise bir input alanının verisi değiştiğinde tetiklenen _onChange_ olay türüne odaklanacağız. Input alanı varsayılan olarak girilen veriyi hafızada tutar; ancak bu bölümde bunu state kullanarak kontrol edecek ve kontrollü (controlled) bir input uygulayacağız. Kontrolsüz (uncontrolled) input'u ayrı bir bölümde ele alacağız.

## Input Alanından Veri Almak

Şimdiye kadar input alanından herhangi bir veri almadık. Şimdi bir input alanından nasıl veri alacağımızı öğrenme zamanı. Kontrollü bir input'tan veri alabilmek için bir input alanına, olay dinleyicisine (onChange) ve state'e ihtiyacımız var. Aşağıdaki örneğe bakın. Input etiketinin altındaki h1 öğesi, input'a yazdığımız şeyi gösterir. Canlı [demo](https://codepen.io/Asabeneh/full/OJVpyqm)'ya bakabilirsiniz.

Input öğesinin value, name, id, placeholder, type ve olay işleyicisi gibi birçok niteliği (attribute) vardır. Buna ek olarak, bir label ile input alanını input alanının id'si ve etiketin htmlFor'u aracılığıyla ilişkilendirebiliriz. Label ve input ilişkilendirildiğinde, etikete tıklandığında input'a odaklanır. Aşağıdaki örneğe bakın.

```js
import React, { Component } from 'react'
import ReactDOM from 'react-dom'

class App extends Component {
  // state tanımlama
  // başlangıç state'i
  state = {
    firstName: '',
  }
  handleChange = (e) => {
    const value = e.target.value
    this.setState({ firstName: value })
  }

  render() {
    /*
     state değerine erişim ve 
     bu değer input'un value niteliğine enjekte edilecek
     */

    const firstName = this.state.firstName
    return (
      <div className='App'>
        <label htmlFor='firstName'>Ad: </label>
        <input
          type='text'
          id='firstName'
          name='firstName'
          placeholder='Ad'
          value={firstName}
          onChange={this.handleChange}
        />
        <h1>{this.state.firstName}</h1>
      </div>
    )
  }
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
```

Kullanıcı bilgilerini yönetmek için genellikle form kullanırız. Form bölümüne geçerek form öğesini kullanalım.

## Formdan Birden Fazla Input Verisi Almak

Bu bölümde kullanıcı bilgilerini toplayan küçük bir form geliştireceğiz. Kullanıcımız bir öğrencidir. Kullanıcı bilgilerini toplamak için üst (parent) bir form öğesi ve belirli sayıda input öğesi kullanacağız. Bunlara ek olarak form için (onSubmit) ve input'lar için (onChange) olay dinleyicilerimiz olacak. Aşağıdaki örneğe bakın, yorumları da incelemeye çalışın. Canlı [demo](https://codepen.io/Asabeneh/full/eYNvJda)'ya da bakabilirsiniz.

```js
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
class App extends Component {
  // başlangıç state'ini tanımlama
  state = {
    firstName: '',
    lastName: '',
    country: '',
    title: '',
  }
  handleChange = (e) => {
    /*
    name ve value'yu şu şekilde alabiliriz: e.target.name, e.target.value
    ya da e.target'tan name ve value'yu destructure edebiliriz
    const name = e.target.name
    const value = e.target.value
    */
    const { name, value } = e.target
    // bir nesnede anahtar olarak değişken adı kullanmak için [değişkenadı]
    // name, input öğelerinin name niteliğine atıfta bulunur
    this.setState({ [name]: value })
  }
  handleSubmit = (e) => {
    /* 
     e.preventDefault()
      form öğesinin varsayılan davranışını durdurur
     özellikle sayfanın yenilenmesini engeller
     */
    e.preventDefault()

    /*
     burası backend api'ye bağlandığımız ve
     verinin veritabanına gönderildiği yerdir
     */

    console.log(this.state)
  }

  render() {
    // state'i destructure ederek state değerine erişim
    const { firstName, lastName, title, country } = this.state
    return (
      <div className='App'>
        <h3>Öğrenci Ekle</h3>
        <form onSubmit={this.handleSubmit}>
          <div>
            <input
              type='text'
              name='firstName'
              placeholder='Ad'
              value={firstName}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <input
              type='text'
              name='lastName'
              placeholder='Soyad'
              value={lastName}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <input
              type='text'
              name='country'
              placeholder='Ülke'
              value={country}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <input
              type='text'
              name='title'
              placeholder='Ünvan'
              value={title}
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

Yukarıdaki form yalnızca metin türlerini işlemektedir, ancak farklı input alanı türleri de mevcuttur. Tüm farklı input alanı türlerini işleyen başka bir form yapalım.

## Farklı Input Alan Türlerinden Veri Almak

```js
// index.js
import React, { Component } from 'react'
import ReactDOM from 'react-dom'

const options = [
  {
    value: '',
    label: '-- Ülke Seçin --',
  },
  {
    value: 'Finland',
    label: 'Finlandiya',
  },
  {
    value: 'Sweden',
    label: 'İsveç',
  },
  {
    value: 'Norway',
    label: 'Norveç',
  },
  {
    value: 'Denmark',
    label: 'Danimarka',
  },
]

// seçenekleri JSX option listesine (dizisine) eşleme

const selectOptions = options.map(({ value, label }) => (
  <option value={value}> {label}</option>
))

class App extends React.Component {
  // state tanımlama
  state = {
    firstName: '',
    lastName: '',
    email: '',
    country: '',
    tel: '',
    dateOfBirth: '',
    favoriteColor: '',
    weight: '',
    gender: '',
    file: '',
    bio: '',
    skills: {
      html: false,
      css: false,
      javascript: false,
    },
  }
  handleChange = (e) => {
    /*
     name ve value'yu şu şekilde alabiliriz: e.target.name, e.target.value
     ya da e.target'tan name ve value'yu destructure edebiliriz
     const name = e.target.name
     const value = e.target.value
    */
    const { name, value, type, checked } = e.target
    /*
    [değişkenadı] — belirli bir değişkende saklanan değeri nesne için anahtar olarak kullanabiliriz; bu durumda state için bir anahtar
    */

    if (type === 'checkbox') {
      this.setState({
        skills: { ...this.state.skills, [name]: checked },
      })
    } else if (type === 'file') {
      console.log(type, 'buraya bakın')
      this.setState({ [name]: e.target.files[0] })
    } else {
      this.setState({ [name]: value })
    }
  }
  handleSubmit = (e) => {
    /*
     e.preventDefault()
     form öğesinin varsayılan davranışını durdurur
     özellikle sayfanın yenilenmesini engeller
    */
    e.preventDefault()
    const {
      firstName,
      lastName,
      email,
      tel,
      dateOfBirth,
      favoriteColor,
      weight,
      country,
      gender,
      bio,
      file,
      skills,
    } = this.state

    const formattedSkills = []
    for (const key in skills) {
      console.log(key)
      if (skills[key]) {
        formattedSkills.push(key.toUpperCase())
      }
    }
    const data = {
      firstName,
      lastName,
      email,
      tel,
      dateOfBirth,
      favoriteColor,
      weight,
      country,
      gender,
      bio,
      file,
      skills: formattedSkills,
    }
    /*
     burası backend api'ye bağlandığımız ve
     verinin veritabanına gönderildiği yerdir
     */
    console.log(data)
  }

  render() {
    // state'i destructure ederek state değerine erişim
    const {
      firstName,
      lastName,
      email,
      tel,
      dateOfBirth,
      favoriteColor,
      weight,
      country,
      gender,
      bio,
    } = this.state
    return (
      <div className='App'>
        <h3>Öğrenci Ekle</h3>
        <form onSubmit={this.handleSubmit}>
          <div className='row'>
            <div className='form-group'>
              <label htmlFor='firstName'>Ad </label>
              <input
                type='text'
                name='firstName'
                value={firstName}
                onChange={this.handleChange}
                placeholder='Ad'
              />
            </div>
            <div className='form-group'>
              <label htmlFor='lastName'>Soyad </label>
              <input
                type='text'
                name='lastName'
                value={this.state.lastName}
                onChange={this.handleChange}
                placeholder='Soyad'
              />
            </div>
            <div className='form-group'>
              <label htmlFor='email'>E-posta </label>
              <input
                type='email'
                name='email'
                value={email}
                onChange={this.handleChange}
                placeholder='E-posta'
              />
            </div>
          </div>

          <div className='form-group'>
            <label htmlFor='tel'>Telefon </label>
            <input
              type='tel'
              name='tel'
              value={tel}
              onChange={this.handleChange}
              placeholder='Tel'
            />
          </div>

          <div className='form-group'>
            <label htmlFor='dateOfBirth'>Doğum tarihi </label>
            <input
              type='date'
              name='dateOfBirth'
              value={dateOfBirth}
              onChange={this.handleChange}
              placeholder='Doğum Tarihi'
            />
          </div>
          <div className='form-group'>
            <label htmlFor='favoriteColor'>En Sevdiğiniz Renk</label>
            <input
              type='color'
              id='favoriteColor'
              name='favoriteColor'
              value={favoriteColor}
              onChange={this.handleChange}
              placeholder='En Sevdiğiniz Renk'
            />
          </div>
          <div className='form-group'>
            <label htmlFor='weight'>Kilo </label>
            <input
              type='number'
              id='weight'
              name='weight'
              value={weight}
              onChange={this.handleChange}
              placeholder='Kg cinsinden kilo'
            />
          </div>
          <div>
            <label htmlFor='country'>Ülke</label> <br />
            <select name='country' onChange={this.handleChange} id='country'>
              {selectOptions}
            </select>
          </div>

          <div>
            <p>Cinsiyet</p>
            <div>
              <input
                type='radio'
                id='female'
                name='gender'
                value='Female'
                onChange={this.handleChange}
                checked={gender === 'Female'}
              />
              <label htmlFor='female'>Kadın</label>
            </div>
            <div>
              <input
                id='male'
                type='radio'
                name='gender'
                value='Male'
                onChange={this.handleChange}
                checked={gender === 'Male'}
              />
              <label htmlFor='male'>Erkek</label>
            </div>
            <div>
              <input
                id='other'
                type='radio'
                name='gender'
                value='Other'
                onChange={this.handleChange}
                checked={gender === 'Other'}
              />
              <label htmlFor='other'>Diğer</label>
            </div>
          </div>

          <div>
            <p>Becerilerinizi seçin</p>
            <div>
              <input
                type='checkbox'
                id='html'
                name='html'
                onChange={this.handleChange}
              />
              <label htmlFor='html'>HTML</label>
            </div>
            <div>
              <input
                type='checkbox'
                id='css'
                name='css'
                onChange={this.handleChange}
              />
              <label htmlFor='css'>CSS</label>
            </div>
            <div>
              <input
                type='checkbox'
                id='javascript'
                name='javascript'
                onChange={this.handleChange}
              />
              <label htmlFor='javascript'>JavaScript</label>
            </div>
          </div>
          <div>
            <label htmlFor='bio'>Biyografi</label> <br />
            <textarea
              id='bio'
              name='bio'
              value={bio}
              onChange={this.handleChange}
              cols='120'
              rows='10'
              placeholder='Kendinizden bahsedin ...'
            />
          </div>

          <div>
            <input type='file' name='file' onChange={this.handleChange} />
          </div>
          <div>
            <button>Gönder</button>
          </div>
        </form>
      </div>
    )
  }
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
```

## Form Doğrulama (Validation)

## Doğrulama Nedir?

Doğrulama, bu durumda verinin geçerliliğini veya doğruluğunu kontrol etme ya da kanıtlama eylemi veya sürecidir.

## Doğrulamanın Amacı Nedir?

Doğrulamanın temel amacı, kullanıcılardan istenen veriyi elde etmektir. Bunun yanı sıra kötü niyetli kullanıcıları ve verileri engellemek amacıyla da kullanılır.

## Doğrulama Türleri

Doğrulama, istemci tarafında (client side) veya sunucu tarafında (server side) yapılabilir. Şu anda bir ön yüz teknolojisi olan React kullanıyoruz ve istemci tarafı doğrulaması uyguluyoruz. Doğrulama, HTML5'in yerleşik doğrulaması kullanılarak veya JavaScript (düzenli ifadeler / regular expression) kullanılarak uygulanabilir.

Aşağıdaki kod parçasında ilk alana bir doğrulama uygulanmıştır. Nasıl çalıştığını anlamaya çalışın. Input odaklanılmadığında geçerliliği kontrol etmek için onBlur olayı kullanılmıştır.

```js
// index.js
import React, { Component } from 'react'
import ReactDOM from 'react-dom'

const options = [
  {
    value: '',
    label: '-- Ülke Seçin --',
  },
  {
    value: 'Finland',
    label: 'Finlandiya',
  },
  {
    value: 'Sweden',
    label: 'İsveç',
  },
  {
    value: 'Norway',
    label: 'Norveç',
  },
  {
    value: 'Denmark',
    label: 'Danimarka',
  },
]

// seçenekleri JSX option listesine (dizisine) eşleme

const selectOptions = options.map(({ value, label }) => (
  <option value={value}> {label}</option>
))

class App extends Component {
  // state tanımlama
  state = {
    firstName: '',
    lastName: '',
    email: '',
    country: '',
    tel: '',
    dateOfBirth: '',
    favoriteColor: '',
    weight: '',
    gender: '',
    file: '',
    bio: '',
    skills: {
      html: false,
      css: false,
      javascript: false,
    },
    touched: {
      firstName: false,
      lastName: false,
    },
  }
  handleChange = (e) => {
    /*
     name ve value'yu şu şekilde alabiliriz: e.target.name, e.target.value
     ya da e.target'tan name ve value'yu destructure edebiliriz
     const name = e.target.name
     const value = e.target.value
    */
    const { name, value, type, checked } = e.target
    /*
    [değişkenadı] — belirli bir değişkende saklanan değeri nesne için anahtar olarak kullanabiliriz; bu durumda state için bir anahtar
    */

    if (type === 'checkbox') {
      this.setState({
        skills: { ...this.state.skills, [name]: checked },
      })
    } else if (type === 'file') {
      this.setState({ [name]: e.target.files[0] })
    } else {
      this.setState({ [name]: value })
    }
  }
  handleBlur = (e) => {
    const { name, value } = e.target
    this.setState({ touched: { ...this.state.touched, [name]: true } })
  }
  validate = () => {
    // Hata geri bildirimlerini toplamak ve formda göstermek için nesne
    const errors = {
      firstName: '',
    }

    if (
      (this.state.touched.firstName && this.state.firstName.length < 3) ||
      (this.state.touched.firstName && this.state.firstName.length > 12)
    ) {
      errors.firstName = 'Ad 3 ile 12 karakter arasında olmalıdır'
    }
    return errors
  }
  handleSubmit = (e) => {
    /*
      e.preventDefault()
      form öğesinin varsayılan davranışını durdurur
      özellikle sayfanın yenilenmesini engeller
      */
    e.preventDefault()

    const {
      firstName,
      lastName,
      email,
      country,
      gender,
      tel,
      dateOfBirth,
      favoriteColor,
      weight,
      bio,
      file,
      skills,
    } = this.state

    const formattedSkills = []
    for (const key in skills) {
      console.log(key)
      if (skills[key]) {
        formattedSkills.push(key.toUpperCase())
      }
    }
    const data = {
      firstName,
      lastName,
      email,
      country,
      gender,
      tel,
      dateOfBirth,
      favoriteColor,
      weight,
      bio,
      file,
      skills: formattedSkills,
    }
    /*
     burası backend api'ye bağlandığımız ve
     verinin veritabanına gönderildiği yerdir
     */
    console.log(data)
  }

  render() {
    // state'i destructure ederek state değerine erişim
    // formdaki noValidate niteliği HTML5'in yerleşik doğrulamasını devre dışı bırakır

    const { firstName } = this.validate()
    return (
      <div className='App'>
        <h3>Öğrenci Ekle</h3>
        <form onSubmit={this.handleSubmit} noValidate>
          <div className='row'>
            <div className='form-group'>
              <label htmlFor='firstName'>Ad </label>
              <input
                type='text'
                name='firstName'
                value={this.state.firstName}
                onChange={this.handleChange}
                onBlur={this.handleBlur}
                placeholder='Ad'
              /> <br />
              <small>{firstName}</small>
            </div>
            <div className='form-group'>
              <label htmlFor='lastName'>Soyad </label>
              <input
                type='text'
                name='lastName'
                value={this.state.lastName}
                onChange={this.handleChange}
                placeholder='Soyad'
              />
            </div>
            <div className='form-group'>
              <label htmlFor='email'>E-posta </label>
              <input
                type='email'
                name='email'
                value={this.state.email}
                onChange={this.handleChange}
                placeholder='E-posta'
              />
            </div>
          </div>

          <div className='form-group'>
            <label htmlFor='tel'>Telefon </label>
            <input
              type='tel'
              name='tel'
              value={this.state.tel}
              onChange={this.handleChange}
              placeholder='Tel'
            />
          </div>

          <div className='form-group'>
            <label htmlFor='dateOfBirth'>Doğum tarihi </label>
            <input
              type='date'
              name='dateOfBirth'
              value={this.state.dateOfBirth}
              onChange={this.handleChange}
              placeholder='Doğum Tarihi'
            />
          </div>
          <div className='form-group'>
            <label htmlFor='favoriteColor'>En Sevdiğiniz Renk</label>
            <input
              type='color'
              id='favoriteColor'
              name='favoriteColor'
              value={this.state.favoriteColor}
              onChange={this.handleChange}
              placeholder='En Sevdiğiniz Renk'
            />
          </div>
          <div className='form-group'>
            <label htmlFor='weight'>Kilo </label>
            <input
              type='number'
              id='weight'
              name='weight'
              value={this.state.weight}
              onChange={this.handleChange}
              placeholder='Kg cinsinden kilo'
            />
          </div>
          <div>
            <label htmlFor='country'>Ülke</label> <br />
            <select name='country' onChange={this.handleChange} id='country'>
              {selectOptions}
            </select>
          </div>

          <div>
            <p>Cinsiyet</p>
            <div>
              <input
                type='radio'
                id='female'
                name='gender'
                value='Female'
                onChange={this.handleChange}
                checked={this.state.gender === 'Female'}
              />
              <label htmlFor='female'>Kadın</label>
            </div>
            <div>
              <input
                id='male'
                type='radio'
                name='gender'
                value='Male'
                onChange={this.handleChange}
                checked={this.state.gender === 'Male'}
              />
              <label htmlFor='male'>Erkek</label>
            </div>
            <div>
              <input
                id='other'
                type='radio'
                name='gender'
                value='Other'
                onChange={this.handleChange}
                checked={this.state.gender === 'Other'}
              />
              <label htmlFor='other'>Diğer</label>
            </div>
          </div>

          <div>
            <p>Becerilerinizi seçin</p>
            <div>
              <input
                type='checkbox'
                id='html'
                name='html'
                onChange={this.handleChange}
              />
              <label htmlFor='html'>HTML</label>
            </div>
            <div>
              <input
                type='checkbox'
                id='css'
                name='css'
                onChange={this.handleChange}
              />
              <label htmlFor='css'>CSS</label>
            </div>
            <div>
              <input
                type='checkbox'
                id='javascript'
                name='javascript'
                onChange={this.handleChange}
              />
              <label htmlFor='javascript'>JavaScript</label>
            </div>
          </div>
          <div>
            <label htmlFor='bio'>Biyografi</label> <br />
            <textarea
              id='bio'
              name='bio'
              value={this.state.bio}
              onChange={this.handleChange}
              cols='120'
              rows='10'
              placeholder='Kendinizden bahsedin ...'
            />
          </div>

          <div>
            <input type='file' name='file' onChange={this.handleChange} />
          </div>
          <div>
            <button>Gönder</button>
          </div>
        </form>
      </div>
    )
  }
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
```

# Egzersizler

## Egzersizler: Seviye 1

1. Formun önemi nedir?
2. Kaç tane input türü biliyorsunuz?
3. Bir input öğesinin en az dört niteliğini (attribute) belirtin.
4. htmlFor'un önemi nedir?
5. Örnekte verilmemiş bir input türü varsa onu yazın.
6. Kontrollü (controlled) input nedir?
7. Kontrollü bir input yazmak için neye ihtiyaç duyarsınız?
8. Bir input alanındaki değişiklikleri dinlemek için hangi olay türünü kullanırsınız?
9. İşaretlenmiş (checked) bir checkbox'ın değeri nedir?
10. onChange, onBlur, onSubmit'i ne zaman kullanırsınız?
11. Submit işleyici metodunun içine e.preventDefault() yazmanın amacı nedir?
12. React'te veriler nasıl bağlanır (data binding)? İlk input alanı örneği React'te veri bağlamadır.
13. Doğrulama (validation) nedir?
14. Bir input değiştiğinde dinlemek için hangi olay türünü kullanırsınız?
15. Bir input'u doğrulamak için hangi olay türlerini kullanırsınız?

## Egzersizler: Seviye 2

1. Yukarıda verilen formu doğrulayın (daha sonra bir gif görseli veya video sağlanacaktır). Önce herhangi bir kütüphane kullanmadan doğrulamayı deneyin, ardından [validator.js](https://www.npmjs.com/package/validator) ile deneyin.

## Egzersizler: Seviye 3

Yakında ..

🎉 TEBRİKLER! 🎉

[<< Gün 11](../11_Gun_Olaylar/11_olaylar.md) | [Gün 13 >>](../13_Gun_Kontrollü_ve_Kontrolsüz_Input/13_kontrolsuz_input.md)
