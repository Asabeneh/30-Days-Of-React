<div align="center">
  <h1> 30 Days Of React: Hook ile Form (Form Using React Hooks)</h1>
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

[<< Gün 21](../21_Gun_Hook_Giris/21_hook_giris.md) | [Gün 23 >>](../23_Gun_Hook_ile_Veri_Cekme/23_hook_ile_veri_cekme.md)

![30 Days of React banner](../../images/30_days_of_react_banner_day_22.jpg)

- [Formlar](#formlar)
  - [Input Alanından Veri Almak](#input-alanından-veri-almak)
  - [Formdan Çoklu Input Verisi Almak](#formdan-çoklu-input-verisi-almak)
  - [Farklı Input Alan Türlerinden Veri Almak](#farklı-input-alan-türlerinden-veri-almak)
  - [Form Doğrulama (Form Validation)](#form-doğrulama-form-validation)
    - [Doğrulama nedir?](#doğrulama-nedir)
    - [Doğrulamanın amacı nedir?](#doğrulamanın-amacı-nedir)
    - [Doğrulama Türleri](#doğrulama-türleri)
- [Egzersizler](#egzersizler)
  - [Egzersizler: Seviye 1](#egzersizler-seviye-1)
  - [Egzersizler: Seviye 2](#egzersizler-seviye-2)
  - [Egzersizler: Seviye 3](#egzersizler-seviye-3)

# Formlar

Form, kullanıcıdan veri toplamak için kullanılır. Zaman zaman bir kağıt veya web sitesi üzerinde bilgilerimizi doldurmak için form kullanırız. Kayıt olmak, giriş yapmak ya da iş başvurusu yapmak için farklı form alanlarını doldurarak verilerimizi uzak bir veritabanına göndeririz. Bir formu doldururken basit metin, e-posta, parola, telefon, tarih, onay kutusu, radyo butonu, seçenek seçimi ve metin alanı gibi farklı form alanlarıyla karşılaşırız. HTML5 günümüzde oldukça fazla alan türü sunmaktadır. Aşağıdaki mevcut HTML5 input türlerine bakabilirsiniz.

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

Formdan veri almak için kullanılan diğer HTML alanları ise textarea ve seçenekleri olan select öğesidir.

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

Artık bir formdan veri almak için gereken alanların büyük bölümünü biliyorsunuz. Metin türündeki bir input ile başlayalım. Önceki derslerde farklı olay türlerini gördük; bugün özellikle bir input alanındaki veriler değiştiğinde tetiklenen _onChange_ olay türüne odaklanacağız. Input alanının varsayılan olarak girilen veriyi saklayan bir belleği vardır; ancak bu bölümde state kullanarak bunu kontrol edeceğiz ve kontrollü bir input uygulayacağız.

## Input Alanından Veri Almak

Şimdiye kadar state kullanmak ve kontrollü input'tan veri almak için class tabanlı bileşenler kullandık; bu bölümde ise useState hook'unu kullanacağız. Artık hook'lar kullanarak input alanından veri almayı öğrenme zamanı. Kontrollü bir input'tan veri almak için bir input alanına, olay dinleyicisine (onChange) ve state'e ihtiyacımız var. Aşağıdaki örneğe bakın. Input etiketinin altındaki h1 öğesi, input'a yazdığımızı göstermektedir. Canlı [demo](https://codepen.io/Asabeneh/full/jOrVqbv)'yu inceleyin.

Input öğesinin value, name, id, placeholder, type ve olay yöneticisi gibi birçok özelliği vardır. Ayrıca bir input alanının id'si ve label'ın htmlFor'u kullanılarak label ile input alanı ilişkilendirilebilir. Label ve input ilişkilendirildiğinde, label'a tıklandığında input'a odaklanır. Aşağıdaki örneğe bakın.

```js
import React, { useState } from "react";
import ReactDOM from "react-dom";

const App = (props) => {
  // başlangıç state ve güncelleme metodu
  const [firstName, setFirstName] = useState("");
  const handleChange = (e) => {
    const value = e.target.value;
    setFirstName(value);
  };
  return (
    <div className="App">
      <label htmlFor="firstName">Ad: </label>
      <input
        type="text"
        id="firstName"
        name="firstName"
        placeholder="Ad"
        value={firstName}
        onChange={handleChange}
      />
      <h1>{firstName}</h1>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
```

Genellikle kullanıcı bilgilerini işlemek için form kullanırız. Form bölümüne geçelim ve form öğesini kullanalım.

## Formdan Çoklu Input Verisi Almak

Bu bölümde kullanıcı bilgilerini toplayan küçük bir form geliştireceğiz. Kullanıcımız bir öğrencidir. Kullanıcı bilgilerini toplamak için bir üst form öğesi ve belirli sayıda input öğesi kullanıyoruz. Bunlara ek olarak form (onSubmit) ve input'lar (onChange) için olay dinleyicisi bulunacak. Aşağıdaki örneğe bakın ve yorumları da inceleyin. Canlı [demo](https://codepen.io/Asabeneh/full/eYNvJda)'ya da bakabilirsiniz.

Gördüğünüz gibi dört alanımız var; tüm alanları güncellemek için ayrı birer metot oluşturursak (firstName, lastName, country, title için) dört ayrı metot gerekir. Bunun yerine hepsini güncelleyebilecek tek bir metot kullanalım.

```js
import React, { useState } from "react";
import ReactDOM from "react-dom";

const App = (props) => {
  const initialState = {
    firstName: "",
    lastName: "",
    country: "",
    title: "",
  };
  const [formData, setData] = useState(initialState);

  const onChange = (e) => {
    const { name, value } = e.target;
    setData({ ...formData, [name]: value });
  };
  const onSubmit = (e) => {
    /* 
     e.preventDefault()
     form öğesinin varsayılan davranışını durdurur,
     özellikle sayfanın yenilenmesini engeller
     */
    e.preventDefault();

    /*
     burası backend API'ye bağlandığımız
     ve veriyi veritabanına gönderdiğimiz yerdir
     */
    console.log(formData);
  };

  // state değerini destructuring ile erişme
  const { firstName, lastName, title, country } = formData;
  return (
    <div className="App">
      <h3>Öğrenci Ekle</h3>
      <form onSubmit={onSubmit}>
        <div>
          <input
            type="text"
            name="firstName"
            placeholder="Ad"
            value={firstName}
            onChange={onChange}
          />
        </div>
        <div>
          <input
            type="text"
            name="lastName"
            placeholder="Soyad"
            value={lastName}
            onChange={onChange}
          />
        </div>
        <div>
          <input
            type="text"
            name="country"
            placeholder="Ülke"
            value={country}
            onChange={onChange}
          />
        </div>
        <div>
          <input
            type="text"
            name="title"
            placeholder="Unvan"
            value={title}
            onChange={onChange}
          />
        </div>

        <button className="btn btn-success">Gönder</button>
      </form>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
```

Yukarıdaki form yalnızca metin türlerini işlemektedir; ancak farklı input alan türleri de vardır. Tüm farklı input alan türlerini işleyen başka bir form yazalım.

## Farklı Input Alan Türlerinden Veri Almak

```js
// index.js
import React, { useState } from "react";
import ReactDOM from "react-dom";

const options = [
  {
    value: "",
    label: "-- Ülke Seçin --",
  },
  {
    value: "Finland",
    label: "Finlandiya",
  },
  {
    value: "Sweden",
    label: "İsveç",
  },
  {
    value: "Norway",
    label: "Norveç",
  },
  {
    value: "Denmark",
    label: "Danimarka",
  },
];

// seçenekleri JSX option listesine (diziye) dönüştürme

const selectOptions = options.map(({ value, label }) => (
  <option key={label} value={value}>
    {" "}
    {label}
  </option>
));

const App = (props) => {
  const initialState = {
    firstName: "",
    lastName: "",
    email: "",
    title: "",
    country: "",
    tel: "",
    dateOfBirth: "",
    favoriteColor: "",
    weight: "",
    gender: "",
    file: "",
    bio: "",
    skills: {
      html: false,
      css: false,
      javascript: false,
    },
  };
  const [formData, setFormData] = useState(initialState);

  const onChange = (e) => {
    /*
     adı ve değeri şöyle alabiliriz: e.target.name, e.target.value
     ya da e.target'tan name ve value'yi destructure edebiliriz
    */
    const { name, value, type, checked } = e.target;
    /*
    [değişkenAdı] bir değişkende saklanan değeri nesne için
    anahtar olarak kullanmamızı sağlar; burada state için anahtar
    */

    if (type === "checkbox") {
      setFormData({
        ...formData,
        skills: { ...formData.skills, [name]: checked },
      });
    } else if (type === "file") {
      setFormData({ ...formData, [name]: e.target.files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };
  const onSubmit = (e) => {
    /*
     e.preventDefault()
     form öğesinin varsayılan davranışını durdurur,
     özellikle sayfanın yenilenmesini engeller
    */
    e.preventDefault();
    const {
      firstName,
      lastName,
      title,
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
    } = formData;

    const formattedSkills = [];
    for (const key in skills) {
      console.log(key);
      if (skills[key]) {
        formattedSkills.push(key.toUpperCase());
      }
    }
    const data = {
      firstName,
      lastName,
      title,
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
    };
    /*
     burası backend API'ye bağlandığımız
     ve veriyi veritabanına gönderdiğimiz yerdir
     */
    console.log(data);
  };

  // state değerini destructuring ile erişme
  const {
    firstName,
    lastName,
    title,
    country,
    email,
    tel,
    dateOfBirth,
    favoriteColor,
    weight,
    gender,
    bio,
  } = formData;
  return (
    <div className="App">
      <h3>Öğrenci Ekle</h3>
      <form onSubmit={onSubmit}>
        <div className="row">
          <div className="form-group">
            <label htmlFor="firstName">Ad </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={firstName}
              onChange={onChange}
              placeholder="Ad"
            />
          </div>
          <div className="form-group">
            <label htmlFor="lastName">Soyad </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={lastName}
              onChange={onChange}
              placeholder="Soyad"
            />
          </div>
          <div className="form-group">
            <label htmlFor="title">Unvan </label>
            <input
              type="text"
              id="title"
              name="title"
              placeholder="Unvan"
              value={title}
              onChange={onChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">E-posta </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={onChange}
              placeholder="E-posta"
            />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="tel">Telefon </label>
          <input
            type="tel"
            id="tel"
            name="tel"
            value={tel}
            onChange={onChange}
            placeholder="Tel"
          />
        </div>

        <div className="form-group">
          <label htmlFor="dateOfBirth">Doğum Tarihi </label>
          <input
            type="date"
            id="dateOfBirth"
            name="dateOfBirth"
            value={dateOfBirth}
            onChange={onChange}
            placeholder="Doğum Tarihi"
          />
        </div>
        <div className="form-group">
          <label htmlFor="favoriteColor">Favori Renk</label>
          <input
            type="color"
            id="color"
            name="favoriteColor"
            value={favoriteColor}
            onChange={onChange}
            placeholder="Favori Renk"
          />
        </div>
        <div className="form-group">
          <label htmlFor="weight">Kilo </label>
          <input
            type="number"
            id="weight"
            name="weight"
            value={weight}
            onChange={onChange}
            placeholder="Kg cinsinden kilo"
          />
        </div>
        <div>
          <label htmlFor="country">Ülke</label> <br />
          <select
            name="country"
            onChange={onChange}
            id="country"
            value={country}
          >
            {selectOptions}
          </select>
        </div>

        <div>
          <p>Cinsiyet</p>
          <div>
            <input
              type="radio"
              id="female"
              name="gender"
              value="Female"
              onChange={onChange}
              checked={gender === "Female"}
            />
            <label htmlFor="female">Kadın</label>
          </div>
          <div>
            <input
              id="male"
              type="radio"
              name="gender"
              value="Male"
              onChange={onChange}
              checked={gender === "Male"}
            />
            <label htmlFor="male">Erkek</label>
          </div>
          <div>
            <input
              id="other"
              type="radio"
              name="gender"
              value="Other"
              onChange={onChange}
              checked={gender === "Other"}
            />
            <label htmlFor="other">Diğer</label>
          </div>
        </div>

        <div>
          <p>Becerilerinizi seçin</p>
          <div>
            <input type="checkbox" id="html" name="html" onChange={onChange} />
            <label htmlFor="html">HTML</label>
          </div>
          <div>
            <input type="checkbox" id="css" name="css" onChange={onChange} />
            <label htmlFor="css">CSS</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="javascript"
              name="javascript"
              onChange={onChange}
            />
            <label htmlFor="javascript">JavaScript</label>
          </div>
        </div>
        <div>
          <label htmlFor="bio">Biyografi</label> <br />
          <textarea
            id="bio"
            name="bio"
            value={bio}
            onChange={onChange}
            cols="120"
            rows="10"
            placeholder="Kendiniz hakkında yazın ..."
          />
        </div>

        <div>
          <input type="file" name="file" onChange={onChange} />
        </div>
        <div>
          <button>Gönder</button>
        </div>
      </form>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
```

## Form Doğrulama (Form Validation)

## Doğrulama nedir?

Bir şeyin geçerliliğini veya doğruluğunu kontrol etme veya kanıtlama eylemi ya da süreci; bu bağlamda veri doğrulamasıdır.

## Doğrulamanın amacı nedir?

Doğrulamanın temel amacı kullanıcılardan istenen veriyi almaktır. Bunun yanı sıra kötü niyetli kullanıcıları ve verileri önlemektir.

## Doğrulama Türleri

Doğrulama istemci tarafında veya sunucu tarafında yapılabilir. Şu an React kullandığımız için ön uç teknolojisi kapsamında istemci tarafı doğrulama uyguluyoruz. Doğrulama, HTML5 yerleşik doğrulaması veya JavaScript (düzenli ifade kullanarak) ile yapılabilir.

Aşağıdaki kod parçasında ilk alan için doğrulama uygulanmıştır. Nasıl çalıştığını anlamaya çalışın. onBlur olayı, input odak dışına çıktığında geçerliliği kontrol etmek için kullanılmıştır.

```js
// index.js
import React, { useState } from "react";
import ReactDOM from "react-dom";

const options = [
  {
    value: "",
    label: "-- Ülke Seçin --",
  },
  {
    value: "Finland",
    label: "Finlandiya",
  },
  {
    value: "Sweden",
    label: "İsveç",
  },
  {
    value: "Norway",
    label: "Norveç",
  },
  {
    value: "Denmark",
    label: "Danimarka",
  },
];

// seçenekleri JSX option listesine (diziye) dönüştürme
const selectOptions = options.map(({ value, label }) => (
  <option key={label} value={value}>
    {" "}
    {label}
  </option>
));

const App = (props) => {
  const initialState = {
    firstName: "",
    lastName: "",
    email: "",
    title: "",
    country: "",
    tel: "",
    dateOfBirth: "",
    favoriteColor: "",
    weight: "",
    gender: "",
    file: "",
    bio: "",
    skills: {
      html: false,
      css: false,
      javascript: false,
    },
    touched: {
      firstName: false,
      lastName: false,
    },
  };
  const [formData, setFormData] = useState(initialState);

  const onChange = (e) => {
    /*
     adı ve değeri şöyle alabiliriz: e.target.name, e.target.value
     ya da e.target'tan name ve value'yi destructure edebiliriz
    */
    const { name, value, type, checked } = e.target;
    /*
    [değişkenAdı] bir değişkende saklanan değeri nesne için anahtar olarak kullanmamızı sağlar
    */

    if (type === "checkbox") {
      setFormData({
        ...formData,
        skills: { ...formData.skills, [name]: checked },
      });
    } else if (type === "file") {
      setFormData({ ...formData, [name]: e.target.files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };
  const onSubmit = (e) => {
    /*
     e.preventDefault()
     form öğesinin varsayılan davranışını durdurur,
     özellikle sayfanın yenilenmesini engeller
    */
    e.preventDefault();
    const {
      firstName,
      lastName,
      title,
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
    } = formData;

    const formattedSkills = [];
    for (const key in skills) {
      console.log(key);
      if (skills[key]) {
        formattedSkills.push(key.toUpperCase());
      }
    }
    const data = {
      firstName,
      lastName,
      title,
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
    };
    /*
     burası backend API'ye bağlandığımız
     ve veriyi veritabanına gönderdiğimiz yerdir
     */
    console.log(data);
  };
  const onBlur = (e) => {
    const { name } = e.target;
    setFormData({
      ...formData,
      touched: { ...formData.touched, [name]: true },
    });
  };
  const validate = () => {
    // Hata geri bildirimlerini toplamak ve formda göstermek için nesne
    const errors = {
      firstName: "",
    };

    if (
      (formData.touched.firstName && formData.firstName.length < 3) ||
      (formData.touched.firstName && formData.firstName.length > 12)
    ) {
      errors.firstName = "Ad 2 ile 12 karakter arasında olmalıdır";
    }
    return errors;
  };

  // state değerini destructuring ile erişme
  const {
    firstName,
    lastName,
    title,
    country,
    email,
    tel,
    dateOfBirth,
    favoriteColor,
    weight,
    gender,
    bio,
  } = formData;

  const errors = validate();

  return (
    <div className="App">
      <h3>Öğrenci Ekle</h3>
      <form onSubmit={onSubmit}>
        <div className="row">
          <div className="form-group">
            <label htmlFor="firstName">Ad </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={firstName}
              onChange={onChange}
              onBlur={onBlur}
              placeholder="Ad"
            />
            <br />
            {errors.firstName && <small>{errors.firstName}</small>}
          </div>
          <div className="form-group">
            <label htmlFor="lastName">Soyad </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={lastName}
              onChange={onChange}
              placeholder="Soyad"
            />
          </div>
          <div className="form-group">
            <label htmlFor="title">Unvan </label>
            <input
              type="text"
              id="title"
              name="title"
              placeholder="Unvan"
              value={title}
              onChange={onChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">E-posta </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={onChange}
              placeholder="E-posta"
            />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="tel">Telefon </label>
          <input
            type="tel"
            id="tel"
            name="tel"
            value={tel}
            onChange={onChange}
            placeholder="Tel"
          />
        </div>

        <div className="form-group">
          <label htmlFor="dateOfBirth">Doğum Tarihi </label>
          <input
            type="date"
            id="dateOfBirth"
            name="dateOfBirth"
            value={dateOfBirth}
            onChange={onChange}
            placeholder="Doğum Tarihi"
          />
        </div>
        <div className="form-group">
          <label htmlFor="favoriteColor">Favori Renk</label>
          <input
            type="color"
            id="color"
            name="favoriteColor"
            value={favoriteColor}
            onChange={onChange}
            placeholder="Favori Renk"
          />
        </div>
        <div className="form-group">
          <label htmlFor="weight">Kilo </label>
          <input
            type="number"
            id="weight"
            name="weight"
            value={weight}
            onChange={onChange}
            placeholder="Kg cinsinden kilo"
          />
        </div>
        <div>
          <label htmlFor="country">Ülke</label> <br />
          <select
            name="country"
            onChange={onChange}
            id="country"
            value={country}
          >
            {selectOptions}
          </select>
        </div>

        <div>
          <p>Cinsiyet</p>
          <div>
            <input
              type="radio"
              id="female"
              name="gender"
              value="Female"
              onChange={onChange}
              checked={gender === "Female"}
            />
            <label htmlFor="female">Kadın</label>
          </div>
          <div>
            <input
              id="male"
              type="radio"
              name="gender"
              value="Male"
              onChange={onChange}
              checked={gender === "Male"}
            />
            <label htmlFor="male">Erkek</label>
          </div>
          <div>
            <input
              id="other"
              type="radio"
              name="gender"
              value="Other"
              onChange={onChange}
              checked={gender === "Other"}
            />
            <label htmlFor="other">Diğer</label>
          </div>
        </div>

        <div>
          <p>Becerilerinizi seçin</p>
          <div>
            <input type="checkbox" id="html" name="html" onChange={onChange} />
            <label htmlFor="html">HTML</label>
          </div>
          <div>
            <input type="checkbox" id="css" name="css" onChange={onChange} />
            <label htmlFor="css">CSS</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="javascript"
              name="javascript"
              onChange={onChange}
            />
            <label htmlFor="javascript">JavaScript</label>
          </div>
        </div>
        <div>
          <label htmlFor="bio">Biyografi</label> <br />
          <textarea
            id="bio"
            name="bio"
            value={bio}
            onChange={onChange}
            cols="120"
            rows="10"
            placeholder="Kendiniz hakkında yazın ..."
          />
        </div>

        <div>
          <input type="file" name="file" onChange={onChange} />
        </div>
        <div>
          <button>Gönder</button>
        </div>
      </form>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
```

# Egzersizler

## Egzersizler: Seviye 1

1. Formun önemi nedir?
2. Kaç çeşit input türü biliyorsunuz?
3. Bir input öğesinin en az dört özelliğini sayın.
4. htmlFor'un önemi nedir?
5. Örnekte verilmeyen bir input türü var mı? Varsa yazın.
6. Kontrollü input nedir?
7. Kontrollü bir input yazmak için nelere ihtiyacınız var?
8. Bir input alanındaki değişiklikleri dinlemek için hangi olay türünü kullanırsınız?
9. Seçili bir onay kutusunun değeri nedir?
10. onChange, onBlur, onSubmit'i ne zaman kullanırsınız?
11. Submit yönetici metodunun içine e.preventDefault() yazmanın amacı nedir?
12. React'te veri bağlama nasıl yapılır? İlk input alanı örneği React'te veri bağlamadır.
13. Doğrulama nedir?
14. Bir input değiştiğinde dinlemek için hangi olay türünü kullanırsınız?
15. Bir input'u doğrulamak için hangi olay türlerini kullanırsınız?

## Egzersizler: Seviye 2

1. Yukarıda verilen formu doğrulayın (gif görüntüsü veya video daha sonra sağlanacaktır). Önce herhangi bir kütüphane kullanmadan doğrulamayı deneyin, ardından [validator.js](https://www.npmjs.com/package/validator) ile deneyin.

## Egzersizler: Seviye 3

Yakında ...

[<< Gün 21](../21_Gun_Hook_Giris/21_hook_giris.md) | [Gün 23 >>](../23_Gun_Hook_ile_Veri_Cekme/23_hook_ile_veri_cekme.md)
