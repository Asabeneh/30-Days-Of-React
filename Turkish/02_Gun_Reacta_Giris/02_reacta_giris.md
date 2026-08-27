<div align="center">
  <h1> 30 Days Of React: React'a Başlarken</h1>
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

[<< Gün 1](../01_Gun_JavaScript_Tazeleyici/01_javascript_tazeleyici.md) | [Gün 3 >>](../03_Gun_Kurulum/03_kurulum.md)

![30 Days of React banner](../../images/30_days_of_react_banner_day_2.jpg)

- [React'a Başlarken](#reacta-başlarken)
  - [1. React Nedir?](#1-react-nedir)
  - [2. Neden React?](#2-neden-react)
    - [Ekim 2020'de React ve Vue Popülerliği](#ekim-2020de-react-ve-vue-popülerliği)
    - [Şubat 2020'de React ve Vue Popülerliği](#şubat-2020de-react-ve-vue-popülerliği)
  - [3. JSX](#3-jsx)
    - [JSX Elementi](#jsx-elementi)
    - [JSX Elementine Yorum Satırı Ekleme](#jsx-elementine-yorum-satırı-ekleme)
    - [JSX Elementini Render Etme](#jsx-elementini-render-etme)
    - [JSX'te Style ve className](#jsxte-style-ve-classname)
    - [JSX Elementine Veri Enjekte Etme](#jsx-elementine-veri-enjekte-etme)
      - [JSX Elementine String Enjekte Etme](#jsx-elementine-string-enjekte-etme)
      - [JSX Elementine Sayı Enjekte Etme](#jsx-elementine-sayı-enjekte-etme)
      - [JSX Elementine Dizi Enjekte Etme](#jsx-elementine-dizi-enjekte-etme)
      - [JSX Elementine Nesne Enjekte Etme](#jsx-elementine-nesne-enjekte-etme)
  - [Egzersizler](#egzersizler)
    - [Egzersizler: React Nedir?](#egzersizler-react-nedir)
    - [Egzersizler: Neden React?](#egzersizler-neden-react)
    - [Egzersizler: JSX](#egzersizler-jsx)
    - [Egzersizler: JSX Elementleri](#egzersizler-jsx-elementleri)
    - [Egzersizler: Satır İçi Stil](#egzersizler-satır-içi-stil)
    - [Egzersizler: Dahili Stiller](#egzersizler-dahili-stiller)
    - [Egzersiz: JSX'e Veri Enjekte Etme](#egzersiz-jsxe-veri-enjekte-etme)

## React'a Başlarken

Bu bölüm, React'a başlamak için gerekli ön koşulları kapsamaktadır. Aşağıdaki teknolojiler hakkında iyi bir anlayışa sahip olmalısınız:

- HTML
- CSS
- JavaScript

Yukarıda belirtilen becerilere sahipseniz, React öğrenmekten keyif alacaksınız. 30 Days Of React meydan okuması, React hakkında bilmeniz gereken her şeyi içermektedir. Her bölümde bazı egzersizler ve mini projeler bulunmakta olup bunlar üzerinde çalışmanız tavsiye edilir. Bu 30 Days Of React meydan okuması, React'ın en son sürümünü ve eski sürümünü adım adım öğrenmenize yardımcı olacaktır. Konular 30 güne bölünmüş olup her gün, anlaşılması kolay açıklamalar, gerçek dünya örnekleri ve pek çok uygulamalı egzersiz içeren çeşitli konuları kapsamaktadır.
Bu meydan okuma, React ve JavaScript kullanarak web uygulaması geliştirmek isteyen hem başlangıç hem de profesyonel seviyedeki kişiler için tasarlanmıştır.
Zaman zaman React ile çalışmak için farklı sahte veriler kullanmanız gerekebilir. Farklı veriler üretmek için şu [sahte veri üreteci](https://www.30daysofreact.com/dummy-data)'ni kullanabilirsiniz.

### 1. React Nedir?

React, yeniden kullanılabilir kullanıcı arayüzü (UI) oluşturmak için bir JavaScript kütüphanesidir. İlk olarak 29 Mayıs 2013'te yayınlanmıştır. Mevcut sürüm 16.13.1 olup kararlı bir sürümdür. React, Facebook tarafından oluşturulmuştur. React, UI bileşenleri oluşturmayı çok kolaylaştırır. Resmi React dokümantasyonuna [buradan](https://reactjs.org/docs/getting-started.html) ulaşabilirsiniz. React ile çalışırken DOM ile doğrudan etkileşime girmeyiz. React, DOM (Document Object Model) manipülasyonunu kendine özgü bir şekilde ele alır. React, yeni değişiklikler yapmak için sanal DOM'unu (Virtual DOM) kullanır ve yalnızca değişmesi gereken elementi günceller. Bir React Uygulaması geliştirirken DOM ile doğrudan etkileşime girmeyin; DOM manipülasyonu görevini React'ın Virtual DOM'una bırakın. Bu meydan okumada React kullanarak 10-15 web uygulaması geliştireceğiz. Bir web uygulaması veya web sitesi; düğmeler, bağlantılar, farklı giriş alanlarına sahip formlar, başlık, alt bilgi, bölümler, makaleler, metinler, resimler, ses ve video dosyaları ile farklı şekillerdeki kutulardan oluşur. Bir web sitesinin yeniden kullanılabilir UI bileşenlerini oluşturmak için React kullanırız.

Özetlemek gerekirse:

- React Mayıs 2013'te yayınlandı
- React, Facebook tarafından oluşturuldu
- React, kullanıcı arayüzleri oluşturmak için bir JavaScript kütüphanesidir
- React, tek sayfalı uygulamalar geliştirmek için kullanılır - Yalnızca tek bir HTML sayfasına sahip uygulamalar
- React, yeniden kullanılabilir UI bileşenleri oluşturmamıza olanak tanır
- React'ın en son sürümü 16.13.1'dir
- [React sürümleri](https://reactjs.org/versions/)
- React resmi dokümantasyonuna [buradan](https://reactjs.org/docs/getting-started.html) ulaşılabilir

### 2. Neden React?

React, en popüler JavaScript kütüphanelerinden biridir. Son birkaç yıldır pek çok geliştirici ve şirket tarafından kullanılmaktadır. Popülerliği hızla artmış ve büyük bir topluluğa sahip olmuştur. Popülerliği nasıl ölçeriz? Bir popülerlik ölçütü olarak GitHub repository yıldızları, izleyiciler ve fork sayıları kullanılabilir. [React](https://github.com/facebook/react) ile [Vue](https://github.com/vuejs/vue)'nun popülerliğini karşılaştıralım. Bugün itibarıyla, iki popüler JavaScript kütüphanesi arasındaki popülerlik, diyagramda gösterildiği gibi görünmektedir. Diyagramdan en popüler JavaScript kütüphanesini tahmin edebilirsiniz. Hem React hem de Vue için izleyici, yıldız ve fork sayılarına bakabilirsiniz. Bunlar tek başına popülerliğin çok iyi bir ölçütü olmayabilir; ancak iki teknolojinin popülerliği hakkında fikir vermektedir. React'ın yanında bir başka JavaScript kütüphanesi önermem gerekse, Vue.js'i öneririm.

#### Ekim 2020'de React ve Vue Popülerliği

React Resmi GitHub Repository'si

![React Popularity October 2020](../../images/react_repo_1_oct_2020.png)

Vue Resmi GitHub Repository'si

![Vue Popularity October 2020](../../images/vue_repo_1_oct_2020.png)

#### Şubat 2020'de React ve Vue Popülerliği

React Resmi GitHub Repository'si

![React Popularity February 2020](../../images/react_popularity.png)

Vue Resmi GitHub Repository'si

![Vue Popularity February 2020](../../images/vue_popularity.png)

Neden React kullanmayı seçiyoruz? Aşağıdaki nedenlerle kullanıyoruz:

- hızlı
- modüler
- ölçeklenebilir
- esnek
- büyük topluluk ve popüler
- açık kaynak
- yüksek iş olanakları

### 3. JSX

JSX, JavaScript XML anlamına gelir. JSX, JavaScript kodu içinde HTML elementleri yazmamıza olanak tanır. Bir HTML elementinin açılış ve kapanış etiketleri, içeriği ve açılış etiketinde öznitelikleri bulunur. Ancak bazı HTML elementlerinin içeriği ve kapanış etiketi olmayabilir; bunlara kendi kendini kapatan elementler denir. React'ta HTML elementleri oluşturmak için _createElement()_ kullanmak yerine yalnızca JSX elementleri kullanırız. Bu nedenle JSX, React'ta HTML elementleri yazmayı ve eklemeyi kolaylaştırır. JSX, tarayıcıda bir transpiler olan [babel.js](https://babeljs.io/) kullanılarak JavaScript'e dönüştürülür. Babel, JSX'i saf JavaScript'e ve en son JavaScript'i daha eski sürümlere dönüştüren bir kütüphanedir. Aşağıdaki JSX koduna bakın.

```js
// JSX sözdizimi
// JSX ile tırnak işareti kullanmamıza gerek yoktur

const jsxElement = <h1>I am a JSX element</h1>;
const welcome = <h1>Welcome to 30 Days of React Challenge</h1>;
const data = <small>Oct 2, 2020</small>;
```

Yukarıdaki garip görünen kod, JavaScript gibi görünse de JavaScript değildir; HTML gibi görünse de tamamen bir HTML elementi değildir. JavaScript ile HTML elementlerinin bir karışımıdır. JSX, JavaScript içinde HTML kullanmamıza olanak tanır. Yukarıdaki JSX'teki HTML elementleri _h1_ ve _small_'dur.

#### JSX Elementi

Yukarıdaki örnekte gördüğünüz gibi, JSX'in JavaScript ve HTML'e benzer bir sözdizimi vardır. Bir JSX elementi, tek bir HTML elementi veya bir üst HTML elementi içine sarılmış birden fazla HTML elementi olabilir.

Bu JSX elementi yalnızca bir HTML elementine sahiptir: _h1_.

```js
const jsxElement = <h1>I am a JSX element</h1>; // JS ile HTML
```

Şimdi title adlı yeni bir değişken ve _h2_ içinde content tanımlayarak daha fazla JSX elementi oluşturalım.

```js
const title = <h2>Getting Started React</h2>;
```

Bu JSX elementine ek HTML elementleri ekleyerek alt başlıklar ve diğer içerikler ekleyelim. Geçerli bir JSX elementi oluşturmak için her HTML elementinin bir dış HTML elementi tarafından sarılması gerekir. JSX elementimiz uygulamanın başlık kısmının neredeyse tamamını içerdiği için title değişkeninin adı da header olarak değiştirilmelidir.

```js
const header = (
  <header>
    <h1>Welcome to 30 Days Of React</h1>
    <h2>Getting Started React</h2>
    <h3>JavaScript Library</h3>
  </header>
);
```

Yazar adı ve yılı görüntülemek için daha fazla element ekleyelim.

```js
const header = (
  <header>
    <h1>Welcome to 30 Days Of React</h1>
    <h2>Getting Started React</h2>
    <h3>JavaScript Library</h3>
    <p>Asabeneh Yetayeh</p>
    <small>Oct 2, 2020</small>
  </header>
);
```

Gördüğünüz gibi _header_ elementi, tüm iç HTML elementlerinin üst elementidir ve JSX'in bir dış üst element tarafından sarılması gerekir. _header_ HTML elementi veya başka bir üst HTML elementi olmadan yukarıdaki JSX geçersizdir.

#### JSX Elementine Yorum Satırı Ekleme

Kodu farklı nedenlerle yorum satırına alırız ve React'ta JSX elementlerini nasıl yorum satırına alacağımızı bilmek de faydalıdır.

```js
{
  /*
 <header>
    <h1>Welcome to 30 Days Of React</h1>
    <h2>Getting Started React</h2>
    <h3>JavaScript Library</h3>
    <p>Asabeneh Yetayeh</p>
    <small>Oct 2, 2020</small>
  </header>

*/
}
```

#### JSX Elementini Render Etme

Bir JSX elementini HTML belgesine render etmek için önce bir index HTML dosyası oluşturmamız gerekir. index.html, herhangi bir React Uygulamasında sahip olacağınız tek HTML dosyasıdır. Bu nedenle her React Uygulamasının tek sayfalı uygulama olduğunu söyleriz. Bir index.html dosyası oluşturalım. React ile başlamanın iki yolu vardır: CDN kullanmak veya create-react-app kullanmak. create-react-app bir React projesi iskelet yapısı oluşturur ve bu nedenle pek çok kişi React'ın nasıl çalıştığını anlamakta güçlük çeker. Mutlak başlangıç seviyesindekiler için konuyu netleştirmek adına CDN ile başlamak istiyorum. CDN'i yalnızca bu bölümde kullanacağız; meydan okumanın geri kalanında create-react-app kullanacağız ve sizin de her zaman yalnızca create-react-app kullanmanızı tavsiye ediyorum.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>30 Days Of React Challenge</title>
  </head>

  <body>
    <div class="root"></div>

    <script></script>
  </body>
</html>
```

Yukarıdaki index.html'de gördüğünüz gibi, root sınıfına sahip bir div ve bir script etiketimiz var. _root_ div'i, tüm React bileşenlerini index.html'e bağlamak için kullanılan bir geçiş noktasıdır. Script etiketine JavaScript'imizi yazacağız, ancak script'in _type_'ı _babel_ olacak. Babel, React JSX'i tarayıcıda saf JavaScript'e _transpile_ edecektir. Script'e babel ekleyelim. Babel içinde saf JavaScript, JSX ve genel olarak herhangi bir React kodu yazabiliriz.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>30 Days Of React Challenge</title>
  </head>

  <body>
    <div class="root"></div>
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
    <script type="text/babel">
      // kodumuz buraya gelecek
    </script>
  </body>
</html>
```

Babel kütüphanesi belgemize bağlandı ve artık kullanabiliriz. Sonraki adım, CDN aracılığıyla _React_ ve _ReactDOM_'u içe aktarmaktır. React ve ReactDOM'u bağlamak için her iki paketi de CDN'den index.html'nin body kısmına ekliyoruz. React'ın index.html'e bağlı olup olmadığını test etmek için console.log(React) yazarak kontrol edin. Tarayıcı konsolunu açın; bir nesne görmelisiniz. React metodlarını içeren bir nesne görürseniz projenizi React CDN ile başarıyla bağlamışsınız demektir ve React'ı kullanmaya hazırsınız.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>30 Days Of React Challenge</title>
  </head>

  <body>
    <div class="root"></div>

    <script
      crossorigin
      src="https://unpkg.com/react@16/umd/react.development.js"
    ></script>
    <script
      crossorigin
      src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"
    ></script>
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
    <script type="text/babel">
      console.log(React);
    </script>
  </body>
</html>
```

Artık index.html, React kodu yazmak için ihtiyacımız olan her şeye sahip. document.querySelect('.root') kullanarak root elementini alıp rootElement adlı bir değişkene atayalım. DOM ile doğrudan etkileşime girdiğimiz tek yer burasıdır.

Artık JSX ve JSX elementini biliyorsunuz. JSX elementini tarayıcıda render etmek için React ve ReactDOM kütüphanesine ihtiyacımız var. React ve ReactDOM'a ek olarak, JSX'i JavaScript koduna transpile etmek için babel'e ihtiyacımız var. ReactDOM paketinin bir render metodu vardır. render metodu iki argüman alır: bir JSX elementi veya bileşen ve root belge. Aşağıdaki koda bakın. [Code pen'de canlı](https://codepen.io/Asabeneh/full/JjdbjqK).

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>30 Days Of React Challenge</title>
  </head>

  <body>
    <div class="root"></div>

    <script
      crossorigin
      src="https://unpkg.com/react@16/umd/react.development.js"
    ></script>
    <script
      crossorigin
      src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"
    ></script>
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
    <script type="text/babel">
      // HTML belgesinden root elementini almak için
      const rootElement = document.querySelector(".root");

      // JSX elementi
      const jsxElement = <h1>I am a JSX element</h1>;

      // JSX elementini ReactDOM paketi kullanarak render ediyoruz
      // ReactDOM'un render metodu var ve render metodu iki argüman alır
      ReactDOM.render(jsxElement, rootElement);
    </script>
  </body>
</html>
```

![Rendering JSX](../../images/rendering_jsx.png)

Daha fazla içerik render edelim. Daha fazla içerik render etmek için JSX elementinin daha fazla HTML elementine sahip olması gerekir. Örneğin, bir web sitesinin başlığını oluşturabiliriz; bu başlık bir başlık, alt başlık, yazar veya tarih gibi bilgiler içerebilir. Unutmayın, aynı anda yalnızca bir JSX elementi render edebiliriz.
[Code pen'de canlı](https://codepen.io/Asabeneh/full/QWbGWeY).

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>30 Days Of React Challenge</title>
  </head>

  <body>
    <div class="root"></div>

    <script
      crossorigin
      src="https://unpkg.com/react@16/umd/react.development.js"
    ></script>
    <script
      crossorigin
      src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"
    ></script>
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
    <script type="text/babel">
      // HTML belgesinden root elementini almak için
      const rootElement = document.querySelector(".root");

      // JSX elementi
      const header = (
        <header>
          <h1>Welcome to 30 Days Of React</h1>
          <h2>Getting Started React</h2>
          <h3>JavaScript Library</h3>
          <p>Asabeneh Yetayeh</p>
          <small>Oct 2, 2020</small>
        </header>
      );

      // JSX elementini ReactDOM paketi kullanarak render ediyoruz
      // ReactDOM'un render metodu var ve render metodu iki argüman alır
      ReactDOM.render(header, rootElement);
    </script>
  </body>
</html>
```

![Rendering more content](../../images/rendering_more_jsx_content_.png)

Web sitesinin başlığı için bir JSX elementi oluşturduk. Peki ya web sitesinin ana içeriği ve alt bilgisi? Başlığa benzer şekilde, ana içerik ve alt bilgi için de birer JSX elementi oluşturalım.

Web sitesinin ana içerik kısmı için JSX elementi.

```js
// JSX elementi
const main = (
  <main>
    <p>Prerequisite to get started react.js:</p>
    <ul>
      <li>HTML</li>
      <li>CSS</li>
      <li>JavaScript</li>
    </ul>
  </main>
);
```

Web sitesinin alt bilgi kısmı için JSX elementi.

```js
// JSX elementi
const footer = (
  <footer>
    <p>Copyright 2020</p>
  </footer>
);
```

Artık üç JSX elementimiz var: header, main ve footer. Üç JSX elementinin tamamını render etmenin en iyi yolu, hepsini bir üst JSX elementi içine sarmak veya bir diziye koymaktır. Bir JSX elementini başka bir JSX elementi içine dahil etmek için süslü parantez {} kullanır ve içine JSX'in adını yazarız.

```js
// Web sitesinin başlık kısmı için JSX elementi
const header = (
  <header>
    <h1>Welcome to 30 Days Of React</h1>
    <h2>Getting Started React</h2>
    <h3>JavaScript Library</h3>
    <p>Asabeneh Yetayeh</p>
    <small>Oct 2, 2020</small>
  </header>
);

// Web sitesinin ana içerik kısmı için JSX elementi
const main = (
  <main>
    <p>Prerequisite to get started react.js:</p>
    <ul>
      <li>HTML</li>
      <li>CSS</li>
      <li>JavaScript</li>
    </ul>
  </main>
);

// Web sitesinin alt bilgi kısmı için JSX elementi
const footer = (
  <footer>
    <p>Copyright 2020</p>
  </footer>
);

// Tümünü içeren JSX elementi, bir kapsayıcı veya üst element
const app = (
  <div>
    {header}
    {main}
    {footer}
  </div>
);
```

Şimdi her şeyi bir araya getirelim ve tarayıcıya render edelim. [Code pen'de canlı](https://codepen.io/Asabeneh/full/MWwbYWg).

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>30 Days Of React Challenge</title>
  </head>

  <body>
    <div class="root"></div>

    <script
      crossorigin
      src="https://unpkg.com/react@16/umd/react.development.js"
    ></script>
    <script
      crossorigin
      src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"
    ></script>
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
    <script type="text/babel">
      // HTML belgesinden root elementini almak için
      const rootElement = document.querySelector(".root");

      // JSX elementi, header
      const header = (
        <header>
          <h1>Welcome to 30 Days Of React</h1>
          <h2>Getting Started React</h2>
          <h3>JavaScript Library</h3>
          <p>Asabeneh Yetayeh</p>
          <small>Oct 2, 2020</small>
        </header>
      );

      // JSX elementi, main
      const main = (
        <main>
          <p>Prerequisite to get started react.js:</p>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
          </ul>
        </main>
      );

      // JSX elementi, footer
      const footer = (
        <footer>
          <p>Copyright 2020</p>
        </footer>
      );

      // JSX elementi, app, bir kapsayıcı veya üst element
      const app = (
        <div>
          {header}
          {main}
          {footer}
        </div>
      );

      // JSX elementini ReactDOM paketi kullanarak render ediyoruz
      // ReactDOM'un render metodu var ve render metodu iki argüman alır
      ReactDOM.render(app, rootElement);
      // veya
      //  ReactDOM.render([header, main, footer], rootElement)
    </script>
  </body>
</html>
```

![Rendering Multiple JSX Elements](../../images/rendering_multiple_jsx_elements.png)

JSX elementlerimize biraz stil uygulayalım ve sonucu görelim.

![Styling JSX Element](../../images/styling_jsx_element.png).

Şimdi yalnızca header kısmına stil uygulayalım [Code pen'de canlı](https://codepen.io/Asabeneh/full/ZEGBYBG).

#### JSX'te Style ve className

Şimdiye kadar JSX elementlerine herhangi bir stil uygulamadık. Şimdi JSX elementlerimize stil ekleyelim. Satır içi stil, React'ın ortaya çıkmasından sonra çok popüler hale geldi. Header JSX elementine kenarlık ekleyelim.

Bir JSX elementine stil eklemek için satır içi stil veya className kullanırız. Stil nesnesini {} kullanarak enjekte ederiz. Her CSS özelliği bir anahtar, her CSS özellik değeri ise nesne için bir değer olur. Örneğin, aşağıdaki örnekte border bir anahtar ve '2px solid orange' bir değer, color bir anahtar ve 'black' bir değer, fontSize bir anahtar ve '18px' bir değerdir. React veya JavaScript'te CSS nesnesinde anahtar olarak kullanıldığında, iki kelimeli tüm CSS özellikleri camelCase biçimine dönüşür.[Code pen'de canlı](https://codepen.io/Asabeneh/full/ZEGBYbY).

```js
const header = (
  <header
    style={{ border: "2px solid orange", color: "black", fontSize: "18px" }}
  >
    <h1>Welcome to 30 Days Of React</h1>
    <h2>Getting Started React</h2>
    <h3>JavaScript Library</h3>
    <p>Asabeneh Yetayeh</p>
    <small>Oct 2, 2020</small>
  </header>
);

// veya şu şekilde de yazabiliriz

const style = { border: "2px solid orange", color: "black", fontSize: "18px" };

const header = (
  <header style={style}>
    <h1>Welcome to 30 Days Of React</h1>
    <h2>Getting Started React</h2>
    <h3>JavaScript Library</h3>
    <p>Asabeneh Yetayeh</p>
    <small>Oct 2, 2020</small>
  </header>
);
```

Uygulamanızı geliştirirken her şeyin yolunda gidip gitmediğini kontrol etmek için tarayıcı konsolunu açık tutmak iyi bir pratiktir.

Oluşturduğumuz tüm JSX elementlerini stilleyelim: header, main ve footer. Uygulamamızı şekillendirmek için normal dahili stil de kullanabiliriz. Normal stil kullanılarak bir HTML elementi, etiket adı, id, sınıf, öznitelik ve diğer yöntemlerle hedeflenebilir. React geliştirici topluluğunda id yerine sınıf kullanımı oldukça yaygındır. Bu materyalde yalnızca sınıf kullanacağım, id kullanmayacağım.

JSX elementinde class yerine className kullanırız, çünkü class JavaScript'te ayrılmış bir sözcüktür. Benzer şekilde, label etiketinde for yerine htmlFor kullanılır. Aşağıdaki örneğe bakın.

```js
const title = <h1 className="title">Getting Started React</h1>;
const inputField = (
  <div>
    <label htmlFor="firstname">First Name</label>
    <input type="text" id="firstname" placeholder="First Name" />
  </div>
);
```

Input elementinde kullanılan id, stil amaçlı değil; label'ı input alanına bağlamak için kullanılmaktadır.

className yerine class veya htmlFor yerine for kullanılırsa şuna benzer bir uyarı alırsınız.

![Class Name warning](../../images/className_warning.png)

Artık satır içi stil ve className kullanımını öğrendiniz. Tüm JSX elementlerini stilleyelim.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>30 Days Of React Challenge</title>
  </head>

  <body>
    <div class="root"></div>

    <script
      crossorigin
      src="https://unpkg.com/react@16/umd/react.development.js"
    ></script>
    <script
      crossorigin
      src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"
    ></script>
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
    <script type="text/babel">
      // HTML belgesinden root elementini almak için
      const rootElement = document.querySelector(".root");

      // stil
      const headerStyles = {
        backgroundColor: "#61DBFB",
        fontFamily: "Helvetica Neue",
        padding: 25,
        lineHeight: 1.5,
      };

      // JSX elementi, header
      const header = (
        <header style={headerStyles}>
          <div className="header-wrapper">
            <h1>Welcome to 30 Days Of React</h1>
            <h2>Getting Started React</h2>
            <h3>JavaScript Library</h3>
            <p>Asabeneh Yetayeh</p>
            <small>Oct 2, 2020</small>
          </div>
        </header>
      );

      // JSX elementi, main
      const mainStyles = {
        backgroundColor: "#F3F0F5",
      };
      const main = (
        <main style={mainStyles}>
          <p>Prerequisite to get started react.js:</p>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
          </ul>
        </main>
      );

      const footerStyles = {
        backgroundColor: "#61DBFB",
      };
      // JSX elementi, footer
      const footer = (
        <footer style={footerStyles}>
          <p>Copyright 2020</p>
        </footer>
      );

      // JSX elementi, app
      const app = (
        <div className="app">
          {header}
          {main}
          {footer}
        </div>
      );

      // JSX elementini ReactDOM paketi kullanarak render ediyoruz
      ReactDOM.render(app, rootElement);
    </script>
  </body>
</html>
```

![Styling all JSX elements](../../images/styling_all_jsx_elements.png)

Stil nesnesi kullanmak yerine normal stil yöntemini kullanmak, yukarıdakinden daha kolaydır. Şimdi tüm JSX'i stillemek için dahili stil kullanalım. Harici stil yöntemi de kullanılabilir. [Code pen'de canlı](https://codepen.io/Asabeneh/full/QWbGwge)

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link
      href="https://fonts.googleapis.com/css?family=Montserrat:300,400,500|Roboto:300,400,500&display=swap"
      rel="stylesheet"
    />

    <title>30 Days Of React Challenge</title>
    <style>
      /* == Genel stil === */
      * {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
      }

      html,
      body {
        height: 100%;
        line-height: 1.5;
        font-family: "Montserrat";
        font-weight: 300;
        color: black;
      }

      .root {
        min-height: 100%;
        position: relative;
      }

      .header-wrapper,
      .main-wrapper,
      .footer-wrapper {
        width: 85%;
        margin: auto;
      }

      .header-wrapper,
      .main-wrapper {
        padding: 10px;
        margin: 2px auto;
      }

      h1 {
        font-size: 70px;
        font-weight: 300;
      }

      h2,
      h3 {
        font-weight: 300;
      }

      header {
        background-color: #61dbfb;
        padding: 10px;
      }

      main {
        padding: 10px;
        padding-bottom: 60px;
        /* Alt bilginin yüksekliği */
      }

      ul {
        margin-left: 15px;
      }

      ul li {
        list-style: none;
      }

      footer {
        position: absolute;
        bottom: 0;
        width: 100%;
        height: 60px;
        /* Alt bilginin yüksekliği */
        background: #6cf;
      }

      .footer-wrapper {
        font-weight: 400;
        text-align: center;
        line-height: 60px;
      }
    </style>
  </head>

  <body>
    <div class="root"></div>

    <script
      crossorigin
      src="https://unpkg.com/react@16/umd/react.development.js"
    ></script>
    <script
      crossorigin
      src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"
    ></script>
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
    <script type="text/babel">
      // HTML belgesinden root elementini almak için
      const rootElement = document.querySelector(".root");

      // JSX elementi, header
      const header = (
        <header>
          <div className="header-wrapper">
            <h1>Welcome to 30 Days Of React</h1>
            <h2>Getting Started React</h2>
            <h3>JavaScript Library</h3>
            <p>Instructor: Asabeneh Yetayeh</p>
            <small>Date: Oct 1, 2020</small>
          </div>
        </header>
      );

      // JSX elementi, main
      const main = (
        <main>
          <div className="main-wrapper">
            <p>
              Prerequisite to get started{" "}
              <strong>
                <em>react.js</em>
              </strong>
              :
            </p>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li> JavaScript</li>
            </ul>
          </div>
        </main>
      );

      // JSX elementi, footer
      const footer = (
        <footer>
          <div className="footer-wrapper">
            <p>Copyright 2020</p>
          </div>
        </footer>
      );

      // JSX elementi, app
      const app = (
        <div className="app">
          {header}
          {main}
          {footer}
        </div>
      );

      // JSX elementini ReactDOM paketi kullanarak render ediyoruz
      ReactDOM.render(app, rootElement);
    </script>
  </body>
</html>
```

![Internal Style](../../images/internal_style.png)

#### JSX Elementine Veri Enjekte Etme

Şimdiye kadar JSX elementlerinde statik veriler kullandık; ancak farklı veri türlerini dinamik veri olarak da geçirebiliriz. Dinamik veriler; string, sayı, boolean, dizi veya nesne olabilir. Her veri türünü adım adım inceleyelim. JSX'e veri enjekte etmek için {} parantezini kullanırız.

```js
const welcome = "Welcome to 30 Days Of React";
const title = "Getting Started React";
const subtitle = "JavaScript Library";
const authorFirstName = "Asabeneh";
const authorLastName = "Yetayeh";
const date = "Oct 1, 2020";

// JSX elementi, header
const header = (
  <header>
    <div className="header-wrapper">
      <h1>{welcome}</h1>
      <h2>{title}</h2>
      <h3>{subtitle}</h3>
      <p>
        Instructor: {authorFirstName} {authorLastName}
      </p>
      <small>Date: {date}</small>
    </div>
  </header>
);
```

Header JSX elementine benzer şekilde, main ve footer JSX elementlerine de veri enjeksiyonu uygulayabiliriz.

##### JSX Elementine String Enjekte Etme

Bu bölümde yalnızca string'ler enjekte edeceğiz

```js
const welcome = "Welcome to 30 Days Of React";
const title = "Getting Started React";
const subtitle = "JavaScript Library";
const firstName = "Asabeneh";
const lastName = "Yetayeh";
const date = "Oct 2, 2020";

// JSX elementi, header

// JSX elementi, header
const header = (
  <header>
    <div className="header-wrapper">
      <h1>{welcome}</h1>
      <h2>{title}</h2>
      <h3>{subtitle}</h3>
      <p>
        Instructor: {firstName} {lastName}
      </p>
      <small>Date: {date}</small>
    </div>
  </header>
);
```

##### JSX Elementine Sayı Enjekte Etme

```js
const numOne = 3;
const numTwo = 2;

const result = (
  <p>
    {numOne} + {numTwo} = {numOne + numTwo}
  </p>
);

const yearBorn = 1820;
const currentYear = new Date().getFullYear();
const age = currentYear - yearBorn;
const personAge = <p> {age}</p>;
```

Yukarıdaki örnekte gördüğünüz gibi, aritmetik hesaplamalar ve üçlü işlemler yapmak mümkündür.

##### JSX Elementine Dizi Enjekte Etme

Dizi örneği vermek için HTML, CSS, JavaScript'i bir diziye çevirelim ve aşağıdaki main JSX elementine enjekte edelim. Daha sonra liste render etme bölümünde daha ayrıntılı ele alacağız.

```js
const techs = ["HTML", "CSS", "JavaScript"];

// JSX elementi, main
const main = (
  <main>
    <div className="main-wrapper">
      <p>
        Prerequisite to get started{" "}
        <strong>
          <em>react.js</em>
        </strong>
        :
      </p>
      <ul>{techs}</ul>
    </div>
  </main>
);
```

##### JSX Elementine Nesne Enjekte Etme

JSX'e string, sayı, boolean ve dizi verisi enjekte edebiliriz; ancak doğrudan nesne enjekte edemeyiz. Nesne değerlerini önce çıkarmamız veya nesnenin içeriğini destructure etmemiz, ardından veriyi JSX elementine enjekte etmemiz gerekir. Örneğin, firstName ve lastName'i bir nesne içinde yazalım ve JSX içinde kullanmak için çıkaralım.

Şimdi her şeyi bir araya getirelim. Aşağıdaki örnekte, veriler JSX'e dinamik olarak enjekte edilmektedir. [Code pen'de canlı](https://codepen.io/Asabeneh/full/YzXWgpZ)

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link
      href="https://fonts.googleapis.com/css?family=Montserrat:300,400,500|Roboto:300,400,500&display=swap"
      rel="stylesheet"
    />

    <title>30 Days Of React Challenge</title>
    <style>
      /* == Genel stil === */
      * {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
      }

      html,
      body {
        height: 100%;
        line-height: 1.5;
        font-family: "Montserrat";
        font-weight: 300;
        color: black;
      }

      .root {
        min-height: 100%;
        position: relative;
      }

      .header-wrapper,
      .main-wrapper,
      .footer-wrapper {
        width: 85%;
        margin: auto;
      }

      .header-wrapper,
      .main-wrapper {
        padding: 10px;
        margin: 2px auto;
      }

      h1 {
        font-size: 70px;
        font-weight: 300;
      }

      h2,
      h3 {
        font-weight: 300;
      }

      header {
        background-color: #61dbfb;
        padding: 10px;
      }

      main {
        padding: 10px 10px 60px;
        /* Alt bilginin yüksekliği */
      }

      ul {
        margin-left: 15px;
      }

      ul li {
        list-style: none;
      }

      footer {
        position: absolute;
        bottom: 0;
        width: 100%;
        height: 60px;
        /* Alt bilginin yüksekliği */
        background: #6cf;
      }

      .footer-wrapper {
        font-weight: 400;
        text-align: center;
        line-height: 60px;
      }
    </style>
  </head>

  <body>
    <div class="root"></div>

    <script
      crossorigin
      src="https://unpkg.com/react@16/umd/react.development.js"
    ></script>
    <script
      crossorigin
      src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"
    ></script>
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
    <script type="text/babel">
      // HTML belgesinden root elementini almak için
      const rootElement = document.querySelector(".root");
      // JSX elementi, header
      const welcome = "Welcome to 30 Days Of React";
      const title = "Getting Started React";
      const subtitle = "JavaScript Library";
      const author = {
        firstName: "Asabeneh",
        lastName: "Yetayeh",
      };
      const date = "Oct 2, 2020";

      // JSX elementi, header
      const header = (
        <header>
          <div className="header-wrapper">
            <h1>{welcome}</h1>
            <h2>{title}</h2>
            <h3>{subtitle}</h3>
            <p>
              Instructor: {author.firstName} {author.lastName}
            </p>
            <small>Date: {date}</small>
          </div>
        </header>
      );

      const numOne = 3;
      const numTwo = 2;

      const result = (
        <p>
          {numOne} + {numTwo} = {numOne + numTwo}
        </p>
      );

      const yearBorn = 1820;
      const currentYear = new Date().getFullYear();
      const age = currentYear - yearBorn;
      const personAge = (
        <p>
          {" "}
          {author.firstName} {author.lastName} is {age} years old
        </p>
      );

      // JSX elementi, main
      const techs = ["HTML", "CSS", "JavaScript"];

      // JSX elementi, main
      const main = (
        <main>
          <div className="main-wrapper">
            <p>
              Prerequisite to get started{" "}
              <strong>
                <em>react.js</em>
              </strong>
              :
            </p>
            <ul>{techs}</ul>
            {result}
            {personAge}
          </div>
        </main>
      );

      const copyRight = "Copyright 2020";

      // JSX elementi, footer
      const footer = (
        <footer>
          <div className="footer-wrapper">
            <p>{copyRight}</p>
          </div>
        </footer>
      );

      // JSX elementi, app
      const app = (
        <div className="app">
          {header}
          {main}
          {footer}
        </div>
      );

      // JSX elementini ReactDOM paketi kullanarak render ediyoruz
      ReactDOM.render(app, rootElement);
    </script>
  </body>
</html>
```

![Dynamic Data](../../images/dynamic_data.png)

Gördüğünüz gibi listeler tek satırda görünmektedir. Bu nedenle, JSX'e enjekte etmeden önce listeyi istediğimiz şekilde biçimlendirmeliyiz. Listeyi biçimlendirmek için JSX'e enjekte etmeden önce diziyi değiştirmeliyiz. _map_ kullanarak diziyi değiştirebiliriz. Bir React geliştirici olarak, fonksiyonel programlamayı (map, filter, reduce, find, some, every) çok iyi anlamalısınız. Fonksiyonel programlamayı iyi anlamıyorsanız, 1. güne bakın.

```js
const techs = ["HTML", "CSS", "JavaScript"];
const techsFormatted = techs.map((tech) => <li>{tech}</li>);
```

Aşağıdaki kod örneğinde, liste artık liste elementleri içermekte ve düzgün biçimlendirilmiş durumdadır.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link
      href="https://fonts.googleapis.com/css?family=Montserrat:300,400,500|Roboto:300,400,500&display=swap"
      rel="stylesheet"
    />

    <title>30 Days Of React Challenge</title>
    <style>
      /* == Genel stil === */
      * {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
      }

      html,
      body {
        height: 100%;
        line-height: 1.5;
        font-family: "Montserrat";
        font-weight: 300;
        color: black;
      }

      .root {
        min-height: 100%;
        position: relative;
      }

      .header-wrapper,
      .main-wrapper,
      .footer-wrapper {
        width: 85%;
        margin: auto;
      }

      .header-wrapper,
      .main-wrapper {
        padding: 10px;
        margin: 2px auto;
      }

      h1 {
        font-size: 70px;
        font-weight: 300;
      }

      h2,
      h3 {
        font-weight: 300;
      }

      header {
        background-color: #61dbfb;
        padding: 10px;
      }

      main {
        padding: 10px 10px 60px;
        /* Alt bilginin yüksekliği */
      }

      ul {
        margin-left: 15px;
      }

      ul li {
        list-style: none;
      }

      footer {
        position: absolute;
        bottom: 0;
        width: 100%;
        height: 60px;
        /* Alt bilginin yüksekliği */
        background: #6cf;
      }

      .footer-wrapper {
        font-weight: 400;
        text-align: center;
        line-height: 60px;
      }
    </style>
  </head>

  <body>
    <div class="root"></div>

    <script
      crossorigin
      src="https://unpkg.com/react@16/umd/react.development.js"
    ></script>
    <script
      crossorigin
      src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"
    ></script>
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
    <script type="text/babel">
      // HTML belgesinden root elementini almak için
      const rootElement = document.querySelector(".root");
      // JSX elementi, header
      const welcome = "Welcome to 30 Days Of React Challenge";
      const title = "Getting Started React";
      const subtitle = "JavaScript Library";
      const author = {
        firstName: "Asabeneh",
        lastName: "Yetayeh",
      };
      const date = "Oct 2, 2020";

      // JSX elementi, header
      const header = (
        <header>
          <div className="header-wrapper">
            <h1>{welcome}</h1>
            <h2>{title}</h2>
            <h3>{subtitle}</h3>
            <p>
              Instructor: {author.firstName} {author.lastName}
            </p>
            <small>Date: {date}</small>
          </div>
        </header>
      );

      const numOne = 3;
      const numTwo = 2;

      const result = (
        <p>
          {numOne} + {numTwo} = {numOne + numTwo}
        </p>
      );

      const yearBorn = 1820;
      const currentYear = new Date().getFullYear();
      const age = currentYear - yearBorn;
      const personAge = (
        <p>
          {" "}
          {author.firstName} {author.lastName} is {age} years old
        </p>
      );

      // JSX elementi, main
      const techs = ["HTML", "CSS", "JavaScript"];
      const techsFormatted = techs.map((tech) => <li>{tech}</li>);

      // JSX elementi, main
      const main = (
        <main>
          <div className="main-wrapper">
            <p>
              Prerequisite to get started{" "}
              <strong>
                <em>react.js</em>
              </strong>
              :
            </p>
            <ul>{techsFormatted}</ul>
            {result}
            {personAge}
          </div>
        </main>
      );

      const copyRight = "Copyright 2020";

      // JSX elementi, footer
      const footer = (
        <footer>
          <div className="footer-wrapper">
            <p>{copyRight}</p>
          </div>
        </footer>
      );

      // JSX elementi, app
      const app = (
        <div className="app">
          {header}
          {main}
          {footer}
        </div>
      );

      // JSX elementini ReactDOM paketi kullanarak render ediyoruz
      ReactDOM.render(app, rootElement);
    </script>
  </body>
</html>
```

Liste render etme

![List Id](../../images/map_list_id.png)
Yukarıda gördüğünüz gibi, listeler artık düzgün biçimlendirilmiş durumda; ancak konsolda her liste çocuğunun benzersiz bir key'e sahip olması gerektiğini söyleyen bir uyarı var. Dizide id bulunmamaktadır; ancak verilerinizde id mevcutsa benzersiz bir değer olarak id geçirmek yaygın bir pratiktir. Şimdi, uyarıyı kaldırmak için her öğeyi benzersiz bir key ile geçirelim.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link
      href="https://fonts.googleapis.com/css?family=Montserrat:300,400,500|Roboto:300,400,500&display=swap"
      rel="stylesheet"
    />

    <title>30 Days Of React Challenge</title>
    <style>
      /* == Genel stil === */
      * {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
      }

      html,
      body {
        height: 100%;
        line-height: 1.5;
        font-family: "Montserrat";
        font-weight: 300;
        color: black;
      }

      .root {
        min-height: 100%;
        position: relative;
      }

      .header-wrapper,
      .main-wrapper,
      .footer-wrapper {
        width: 85%;
        margin: auto;
      }

      .header-wrapper,
      .main-wrapper {
        padding: 10px;
        margin: 2px auto;
      }

      h1 {
        font-size: 70px;
        font-weight: 300;
      }

      h2,
      h3 {
        font-weight: 300;
      }

      header {
        background-color: #61dbfb;
        padding: 10px;
      }

      main {
        padding: 10px;
        padding-bottom: 60px;
        /* Alt bilginin yüksekliği */
      }

      ul {
        margin-left: 15px;
      }

      ul li {
        list-style: none;
      }

      footer {
        position: absolute;
        bottom: 0;
        width: 100%;
        height: 60px;
        /* Alt bilginin yüksekliği */
        background: #6cf;
      }

      .footer-wrapper {
        font-weight: 400;
        text-align: center;
        line-height: 60px;
      }
    </style>
  </head>

  <body>
    <div class="root"></div>

    <script
      crossorigin
      src="https://unpkg.com/react@16/umd/react.development.js"
    ></script>
    <script
      crossorigin
      src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"
    ></script>
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
    <script type="text/babel">
      // HTML belgesinden root elementini almak için
      const rootElement = document.querySelector(".root");
      // JSX elementi, header
      const welcome = "Welcome to 30 Days Of React Challenge";
      const title = "Getting Started React";
      const subtitle = "JavaScript Library";
      const author = {
        firstName: "Asabeneh",
        lastName: "Yetayeh",
      };
      const date = "Oct 2, 2020";

      // JSX elementi, header
      const header = (
        <header>
          <div className="header-wrapper">
            <h1>{welcome}</h1>
            <h2>{title}</h2>
            <h3>{subtitle}</h3>
            <p>
              Instructor: {author.firstName} {author.lastName}
            </p>
            <small>Date: {date}</small>
          </div>
        </header>
      );

      const numOne = 3;
      const numTwo = 2;

      const result = (
        <p>
          {numOne} + {numTwo} = {numOne + numTwo}
        </p>
      );

      const yearBorn = 1820;
      const currentYear = 2020;
      const age = currentYear - yearBorn;
      const personAge = (
        <p>
          {" "}
          {author.firstName} {author.lastName} is {age} years old
        </p>
      );

      // JSX elementi, main
      const techs = ["HTML", "CSS", "JavaScript"];
      const techsFormatted = techs.map((tech) => <li key={tech}>{tech}</li>);

      // JSX elementi, main
      const main = (
        <main>
          <div className="main-wrapper">
            <p>
              Prerequisite to get started{" "}
              <strong>
                <em>react.js</em>
              </strong>
              :
            </p>
            <ul>{techsFormatted}</ul>
            {result}
            {personAge}
          </div>
        </main>
      );

      const copyRight = "Copyright 2020";

      // JSX elementi, footer
      const footer = (
        <footer>
          <div className="footer-wrapper">
            <p>{copyRight}</p>
          </div>
        </footer>
      );

      // JSX elementi, app
      const app = (
        <div className="app">
          {header}
          {main}
          {footer}
        </div>
      );

      // JSX elementini ReactDOM paketi kullanarak render ediyoruz
      ReactDOM.render(app, rootElement);
    </script>
  </body>
</html>
```

![Removing the warning ](../../images/removing_unique_id_warning.png)

Artık JSX elementlerinin nasıl oluşturulacağını ve JSX'e verinin nasıl enjekte edileceğini çok iyi anlıyorsunuz. Bir sonraki bölümde create-react-app ve bileşenlerin nasıl kullanılacağını konuşacağız. Bileşenler, JSX'ten daha güçlü ve kullanışlıdır.

Harika bir iş çıkardınız. 2. gün meydan okumalarını tamamladınız ve büyüklüğe giden yolda iki adım öndesiniz. Şimdi beyniniz ve kaslarınız için bazı egzersizler yapın.

### Egzersizler

#### Egzersizler: React Nedir?

1. React nedir?
2. Kütüphane nedir?
3. Tek sayfalı uygulama nedir?
4. Bileşen (Component) nedir?
5. React'ın en son sürümü hangisidir?
6. DOM nedir?
7. React Virtual DOM nedir?
8. Bir web uygulaması veya web sitesi nelerden oluşur?

#### Egzersizler: Neden React?

1. React kullanmayı neden seçtiniz?
2. Popülerliği ölçmek için hangi ölçütleri kullanıyorsunuz?
3. React mi daha popüler, Vue mu?

#### Egzersizler: JSX

1. HTML elementi nedir?
2. Kendi kendini kapatan bir HTML elementi nasıl yazılır?
3. HTML özniteliği nedir? Birkaçını yazın
4. JSX nedir?
5. Babel nedir?
6. Transpiler nedir?

#### Egzersizler: JSX Elementleri

1. JSX elementi nedir?
2. Adınızı bir JSX elementine yazın ve name adlı bir değişkende saklayın
3. Tam adınızı, ülkenizi, unvanınızı, cinsiyetinizi, e-postanızı ve telefon numaranızı görüntüleyen bir JSX elementi oluşturun. Ad için h1, diğer bilgiler için p kullanın ve user adlı bir değişkende saklayın
4. Footer JSX elementi oluşturun

#### Egzersizler: Satır İçi Stil

1. Main JSX için bir stil nesnesi oluşturun
2. Footer ve app JSX için bir stil nesnesi oluşturun
3. JSX elementlerine daha fazla stil ekleyin

#### Egzersizler: Dahili Stiller

1. JSX elementlerinize farklı stiller uygulayın

#### Egzersiz: JSX'e Veri Enjekte Etme

1. JSX elementi oluşturmayı ve dinamik veri (string, sayı, boolean, dizi, nesne) enjekte etmeyi pratik yapın

TEBRİKLER!

[<< Gün 1](../01_Gun_JavaScript_Tazeleyici/01_javascript_tazeleyici.md) | [Gün 3 >>](../03_Gun_Kurulum/03_kurulum.md)
