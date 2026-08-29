<div align="center">
  <h1> 30 Days Of React: JavaScript Tazeleyici</h1>
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

[<< Gün 0](../readMe.md) | [Gün 2 >>](../02_Gun_Reacta_Giris/02_reacta_giris.md)

![30 Days of React banner](../../images/30_days_of_react_banner_day_1.jpg)

- [JavaScript Tazeleyici](#javascript-tazeleyici)
  - [0. Web Sayfasına JavaScript Ekleme](#0-web-sayfasına-javascript-ekleme)
    - [Satır İçi Script (Inline Script)](#satır-içi-script-inline-script)
    - [Dahili Script (Internal Script)](#dahili-script-internal-script)
    - [Harici Script (External Script)](#harici-script-external-script)
    - [Birden Fazla Harici Script](#birden-fazla-harici-script)
  - [1. Değişkenler (Variables)](#1-değişkenler-variables)
  - [2. Veri Tipleri (Data Types)](#2-veri-tipleri-data-types)
  - [3. Diziler (Arrays)](#3-diziler-arrays)
    - [Boş dizi oluşturma](#boş-dizi-oluşturma)
    - [Değerli dizi oluşturma](#değerli-dizi-oluşturma)
    - [split ile dizi oluşturma](#split-ile-dizi-oluşturma)
    - [İndeks ile dizi elemanına erişme](#i̇ndeks-ile-dizi-elemanına-erişme)
    - [Dizi elemanını değiştirme](#dizi-elemanını-değiştirme)
    - [Dizi manipülasyon metotları](#dizi-manipülasyon-metotları)
      - [Array Constructor (Dizi Yapıcısı)](#array-constructor-dizi-yapıcısı)
      - [fill ile statik değer oluşturma](#fill-ile-statik-değer-oluşturma)
      - [concat ile dizi birleştirme](#concat-ile-dizi-birleştirme)
      - [Dizi uzunluğunu öğrenme](#dizi-uzunluğunu-öğrenme)
      - [Dizide eleman indeksi bulma](#dizide-eleman-indeksi-bulma)
      - [Dizide elemanın son indeksini bulma](#dizide-elemanın-son-indeksini-bulma)
      - [Diziyi kontrol etme](#diziyi-kontrol-etme)
      - [Diziyi stringe çevirme](#diziyi-stringe-çevirme)
      - [Dizi elemanlarını birleştirme (join)](#dizi-elemanlarını-birleştirme-join)
      - [Dizi elemanlarını dilimleme (slice)](#dizi-elemanlarını-dilimleme-slice)
      - [Dizide splice metodu](#dizide-splice-metodu)
      - [push ile diziye eleman ekleme](#push-ile-diziye-eleman-ekleme)
      - [pop ile son elemanı çıkarma](#pop-ile-son-elemanı-çıkarma)
      - [Baştan eleman çıkarma](#baştan-eleman-çıkarma)
      - [Başa eleman ekleme](#başa-eleman-ekleme)
      - [Dizi sırasını tersine çevirme](#dizi-sırasını-tersine-çevirme)
      - [Dizide sıralama](#dizide-sıralama)
    - [Dizi içinde dizi](#dizi-içinde-dizi)
  - [💻 Egzersiz](#-egzersiz)
    - [Egzersiz: Seviye 1](#egzersiz-seviye-1)
    - [Egzersiz: Seviye 2](#egzersiz-seviye-2)
    - [Egzersiz: Seviye 3](#egzersiz-seviye-3)
  - [4. Koşullar (Conditionals)](#4-koşullar-conditionals)
    - [If](#if)
    - [If Else](#if-else)
    - [If Else if Else](#if-else-if-else)
    - [Switch](#switch)
    - [Üçlü Operatörler (Ternary Operators)](#üçlü-operatörler-ternary-operators)
  - [💻 Egzersizler](#-egzersizler)
    - [Egzersizler: Seviye 1](#egzersizler-seviye-1)
    - [Egzersizler: Seviye 2](#egzersizler-seviye-2)
    - [Egzersizler: Seviye 3](#egzersizler-seviye-3)
  - [5. Döngüler (Loops)](#5-döngüler-loops)
    - [Döngü Türleri](#döngü-türleri)
      - [1. for](#1-for)
      - [2. while](#2-while)
      - [3. do while](#3-do-while)
      - [4. for of](#4-for-of)
      - [5. forEach](#5-foreach)
      - [6. for in](#6-for-in)
    - [Döngüyü kesme ve eleman atlama](#döngüyü-kesme-ve-eleman-atlama)
      - [break](#break)
      - [continue](#continue)
    - [Sonuçlar](#sonuçlar)
  - [6. Kapsam (Scope)](#6-kapsam-scope)
    - [Window Scope (Pencere Kapsamı)](#window-scope-pencere-kapsamı)
    - [Global Scope (Global Kapsam)](#global-scope-global-kapsam)
    - [Local Scope (Yerel Kapsam)](#local-scope-yerel-kapsam)
  - [7. Nesne (Object)](#7-nesne-object)
    - [Boş nesne oluşturma](#boş-nesne-oluşturma)
    - [Değerli nesne oluşturma](#değerli-nesne-oluşturma)
    - [Nesneden değer okuma](#nesneden-değer-okuma)
    - [Nesne metotları oluşturma](#nesne-metotları-oluşturma)
    - [Nesneye yeni anahtar ekleme](#nesneye-yeni-anahtar-ekleme)
    - [Nesne Metotları (Object Methods)](#nesne-metotları-object-methods)
      - [Object.keys() ile nesne anahtarlarını alma](#objectkeys-ile-nesne-anahtarlarını-alma)
      - [Object.values() ile nesne değerlerini alma](#objectvalues-ile-nesne-değerlerini-alma)
      - [Object.entries() ile anahtar-değer çiftlerini alma](#objectentries-ile-anahtar-değer-çiftlerini-alma)
      - [hasOwnProperty() ile özellik kontrolü](#hasownproperty-ile-özellik-kontrolü)
  - [💻 Egzersizler](#-egzersizler-1)
  - [8. Fonksiyonlar (Functions)](#8-fonksiyonlar-functions)
    - [Fonksiyon Tanımlama (Function Declaration)](#fonksiyon-tanımlama-function-declaration)
    - [Parametresiz ve geri dönüşsüz fonksiyon](#parametresiz-ve-geri-dönüşsüz-fonksiyon)
    - [Değer döndüren fonksiyon](#değer-döndüren-fonksiyon)
    - [Parametreli fonksiyon](#parametreli-fonksiyon)
    - [İki parametreli fonksiyon](#i̇ki-parametreli-fonksiyon)
    - [Çok parametreli fonksiyon](#çok-parametreli-fonksiyon)
    - [Sınırsız parametreli fonksiyon](#sınırsız-parametreli-fonksiyon)
    - [Anonim Fonksiyon (Anonymous Function)](#anonim-fonksiyon-anonymous-function)
    - [Expression Function (İfade Fonksiyonu)](#expression-function-i̇fade-fonksiyonu)
    - [Kendi Kendini Çağıran Fonksiyonlar (Self Invoking Functions)](#kendi-kendini-çağıran-fonksiyonlar-self-invoking-functions)
    - [Ok Fonksiyonu (Arrow Function)](#ok-fonksiyonu-arrow-function)
    - [Varsayılan parametreli fonksiyon](#varsayılan-parametreli-fonksiyon)
  - [💻 Egzersizler](#-egzersizler-2)
  - [9. Higher Order Function (Yüksek Dereceli Fonksiyon)](#9-higher-order-function-yüksek-dereceli-fonksiyon)
    - [Callback (Geri Çağrım Fonksiyonu)](#callback-geri-çağrım-fonksiyonu)
    - [Fonksiyon döndürme](#fonksiyon-döndürme)
    - [Zamanlama Fonksiyonları](#zamanlama-fonksiyonları)
      - [setInterval](#setinterval)
      - [setTimeout](#settimeout)
  - [10. Destructuring (Parçalama) ve Spread (Yayma)](#10-destructuring-parçalama-ve-spread-yayma)
    - [Destructuring (Parçalama) Nedir?](#destructuring-parçalama-nedir)
    - [Ne parçalayabiliriz?](#ne-parçalayabiliriz)
      - [1. Dizi Parçalama (Array Destructuring)](#1-dizi-parçalama-array-destructuring)
      - [2. Nesne Parçalama (Object Destructuring)](#2-nesne-parçalama-object-destructuring)
    - [Egzersizler](#egzersizler)
    - [Spread veya Rest Operatörü](#spread-veya-rest-operatörü)
  - [11. Fonksiyonel Programlama (Functional Programming)](#11-fonksiyonel-programlama-functional-programming)
    - [1. forEach](#1-foreach)
    - [2. map](#2-map)
    - [3. filter](#3-filter)
    - [4. reduce](#4-reduce)
    - [5. find](#5-find)
    - [6. findIndex](#6-findindex)
    - [7. some](#7-some)
    - [8. every](#8-every)
  - [12. Class (Sınıf)](#12-class-sınıf)
    - [Class Tanımlama](#class-tanımlama)
    - [Class Örnekleme (Instantiation)](#class-örnekleme-instantiation)
    - [Class Constructor (Kurucu)](#class-constructor-kurucu)
    - [Constructor ile varsayılan değerler](#constructor-ile-varsayılan-değerler)
    - [Class Metotları](#class-metotları)
    - [Başlangıç değerli özellikler](#başlangıç-değerli-özellikler)
    - [getter](#getter)
    - [setter](#setter)
    - [Static metot](#static-metot)
    - [Inheritance (Kalıtım)](#inheritance-kalıtım)
    - [Metot Override (Geçersiz Kılma)](#metot-override-geçersiz-kılma)
  - [13. Document Object Model (DOM)](#13-document-object-model-dom)

## JavaScript Tazeleyici

### 0. Web Sayfasına JavaScript Ekleme

JavaScript, bir web sayfasına üç farklı yolla eklenebilir:

- **_Satır içi script (Inline script)_**
- **_Dahili script (Internal script)_**
- **_Harici script (External script)_**
- **_Birden fazla harici script_**

Aşağıdaki bölümler, web sayfanıza JavaScript kodu eklemenin farklı yollarını göstermektedir.

#### Satır İçi Script (Inline Script)

Masaüstünüzde veya herhangi bir konumda 30DaysOfJS adında bir proje klasörü oluşturun ve proje klasörü içinde bir **_index.html_** dosyası oluşturun. Ardından aşağıdaki kodu yapıştırıp tarayıcıda, örneğin [Chrome](https://www.google.com/chrome/)'da açın.

```html
<!DOCTYPE html>
<html>
  <head>
    <title>30DaysOfScript:Inline Script</title>
  </head>
  <body>
    <button onclick="alert('30DaysOfJavaScript\'e Hoş Geldiniz!')">
      Tıkla
    </button>
  </body>
</html>
```

Az önce ilk satır içi script'inizi yazdınız. _alert()_ yerleşik fonksiyonunu kullanarak bir açılır uyarı mesajı oluşturabiliriz.

#### Dahili Script (Internal Script)

Dahili script, _head_ veya _body_ içine yazılabilir; ancak HTML belgesinin body'sine koymak tercih edilir. Önce sayfanın head kısmına yazalım.

```html
<!DOCTYPE html>
<html>
  <head>
    <title>30DaysOfScript:Internal Script</title>
    <script>
      console.log("30DaysOfJavaScript'e Hoş Geldiniz");
    </script>
  </head>
  <body></body>
</html>
```

Çoğu zaman dahili script'i bu şekilde yazarız. JavaScript kodunu body bölümüne yazmak en çok tercih edilen seçenektir. console.log() çıktısını görmek için tarayıcı konsolunu açın.

```html
<!DOCTYPE html>
<html>
  <head>
    <title>30DaysOfScript:Internal Script</title>
  </head>
  <body>
    <button onclick="alert('30DaysOfJavaScript\'e Hoş Geldiniz!');">
      Tıkla
    </button>
    <script>
      console.log("30DaysOfJavaScript'e Hoş Geldiniz");
    </script>
  </body>
</html>
```

console.log() çıktısını görmek için tarayıcı konsolunu açın.

![js code from vscode](../../images/js_code_vscode.png)

#### Harici Script (External Script)

Dahili script'e benzer şekilde, harici script linki head veya body'de olabilir; ancak body'e koymak tercih edilir. Önce .js uzantılı harici bir JavaScript dosyası oluşturmalıyız. .js uzantısıyla biten tüm dosyalar JavaScript dosyasıdır. Proje dizininizde introduction.js adında bir dosya oluşturun, aşağıdaki kodu yazın ve bu .js dosyasını body'nin altına bağlayın.

```js
console.log("30DaysOfJavaScript'e Hoş Geldiniz");
```

_head_ içinde harici script:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>30DaysOfJavaScript:External script</title>
    <script src="introduction.js"></script>
  </head>
  <body></body>
</html>
```

_body_ içinde harici script:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>30DaysOfJavaScript:External script</title>
  </head>
  <body>
    <!-- head veya body içinde olabilir; önerilen yer burasıdır -->
    <script src="introduction.js"></script>
  </body>
</html>
```

console.log() çıktısını görmek için tarayıcı konsolunu açın.

#### Birden Fazla Harici Script

Bir web sayfasına birden fazla harici JavaScript dosyası bağlayabiliriz. 30DaysOfJS klasörü içinde helloworld.js adında bir dosya oluşturun ve aşağıdaki kodu yazın.

```js
console.log("Merhaba, Dünya!");
```

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Multiple External Scripts</title>
  </head>
  <body>
    <script src="./helloworld.js"></script>
    <script src="./introduction.js"></script>
  </body>
</html>
```

_main.js dosyanız diğer tüm script'lerin altında olmalıdır_. Bunu hatırlamak çok önemlidir.

![Multiple Script](../../images/multiple_script.png)

### 1. Değişkenler (Variables)

Değişken tanımlamak için _var_, _let_ ve _const_ kullanırız. _var_ fonksiyon scope'una sahipken, _let_ ve _const_ blok scope'una sahiptir. Bu meydan okumada JavaScript'in ES6 ve üzeri özelliklerini kullanıyoruz. _var_ kullanmaktan kaçının.

```js
let firstName = "Asabeneh";
firstName = "Eyob";

const PI = 3.14; // PI'ye yeni değer atamak yasaktır
// PI = 3.
```

### 2. Veri Tipleri (Data Types)

Veri tipleri konusunda kendinizi rahat hissetmiyorsanız şu [bağlantıyı](https://github.com/Asabeneh/30-Days-Of-JavaScript/blob/master/02_Day_Data_types/02_day_data_types.md) inceleyin.

### 3. Diziler (Arrays)

Değişkenlerin aksine, bir array (dizi) _birden fazla değer_ saklayabilir. Dizideki her değerin bir _indeksi_ vardır ve her indeks _bellekte bir referansa_ sahiptir. Her değere _indeksleri_ kullanılarak erişilebilir. Bir dizinin indeksi _sıfırdan_ başlar ve son elemanın indeksi dizinin uzunluğundan bir eksiktir.

Dizi, sıralı ve değiştirilebilir (modifiye edilebilir) farklı veri tiplerinden oluşan bir koleksiyondur. Dizi, yinelenen elemanları ve farklı veri tiplerini saklayabilir. Dizi boş olabilir ya da farklı veri tipi değerleri içerebilir.

#### Boş dizi oluşturma

JavaScript'te bir diziyi farklı yollarla oluşturabiliriz.
Dizi değişkeni tanımlarken _let_ yerine _const_ kullanmak çok yaygındır. const kullanıyorsanız, o değişken adını tekrar kullanmayacaksınız demektir.

- Array Constructor kullanarak

```js
// sözdizimi
const arr = Array();
// veya
// let arr = new Array()
console.log(arr); // []
```

- Köşeli parantez ([]) kullanarak

```js
// sözdizimi
// Boş dizi oluşturmanın en çok önerilen yolu budur
const arr = [];
console.log(arr);
```

#### Değerli dizi oluşturma

Başlangıç değerleri olan dizi. Uzunluğu bulmak için _length_ özelliğini kullanırız.

```js
const numbers = [0, 3.14, 9.81, 37, 98.6, 100]; // sayılardan oluşan dizi
const fruits = ["banana", "orange", "mango", "lemon"]; // string dizisi, meyveler
const vegetables = ["Tomato", "Potato", "Cabbage", "Onion", "Carrot"]; // string dizisi, sebzeler
const animalProducts = ["milk", "meat", "butter", "yoghurt"]; // string dizisi, ürünler
const webTechs = ["HTML", "CSS", "JS", "React", "Redux", "Node", "MongDB"]; // web teknolojileri dizisi
const countries = ["Finland", "Denmark", "Sweden", "Norway", "Iceland"]; // string dizisi, ülkeler

// Diziyi ve uzunluğunu yazdır

console.log("Numbers:", numbers);
console.log("Number of numbers:", numbers.length);

console.log("Fruits:", fruits);
console.log("Number of fruits:", fruits.length);

console.log("Vegetables:", vegetables);
console.log("Number of vegetables:", vegetables.length);

console.log("Animal products:", animalProducts);
console.log("Number of animal products:", animalProducts.length);

console.log("Web technologies:", webTechs);
console.log("Number of web technologies:", webTechs.length);

console.log("Countries:", countries);
console.log("Number of countries:", countries.length);
```

- Dizi farklı veri tiplerinden eleman içerebilir

```js
const arr = [
  "Asabeneh",
  250,
  true,
  { country: "Finland", city: "Helsinki" },
  { skills: ["HTML", "CSS", "JS", "React", "Python"] },
]; // farklı veri tiplerini içeren dizi
console.log(arr);
```

#### split ile dizi oluşturma

Önceki bölümde gördüğümüz gibi, bir string'i farklı konumlardan bölebilir ve diziye dönüştürebiliriz. Aşağıdaki örneklere bakalım.

```js
let js = "JavaScript";
const charsInJavaScript = js.split("");

console.log(charsInJavaScript); // ["J", "a", "v", "a", "S", "c", "r", "i", "p", "t"]

let companiesString = "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon";
const companies = companiesString.split(",");

console.log(companies); // ["Facebook", " Google", " Microsoft", " Apple", " IBM", " Oracle", " Amazon"]
let txt =
  "I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.";
const words = txt.split(" ");

console.log(words);
// metnin özel karakterleri var; yalnızca kelimeleri nasıl alabileceğinizi düşünün
// ["I", "love", "teaching", "and", "empowering", "people.", "I", "teach", "HTML,", "CSS,", "JS,", "React,", "Python"]
```

#### İndeks ile dizi elemanına erişme

Dizideki her elemana indeksini kullanarak erişiriz. Dizi indeksi 0'dan başlar. Aşağıdaki resim dizideki her elemanın indeksini açıkça göstermektedir.

![arr index](../../images/array_index.png)

```js
const fruits = ["banana", "orange", "mango", "lemon"];
let firstFruit = fruits[0]; // indeksini kullanarak ilk elemana erişiyoruz

console.log(firstFruit); // banana

secondFruit = fruits[1];
console.log(secondFruit); // orange

let lastFruit = fruits[3];
console.log(lastFruit); // lemon
// Son indeks şu şekilde hesaplanabilir

let lastIndex = fruits.length - 1;
lastFruit = fruits[lastIndex];

console.log(lastFruit); // lemon
```

```js
const numbers = [0, 3.14, 9.81, 37, 98.6, 100]; // sayı kümesi

console.log(numbers.length); // => dizinin büyüklüğünü bilmek için, yani 6
console.log(numbers); // -> [0, 3.14, 9.81, 37, 98.6, 100]
console.log(numbers[0]); //  -> 0
console.log(numbers[5]); //  -> 100

let lastIndex = numbers.length - 1;
console.log(numbers[lastIndex]); // -> 100
```

```js
const webTechs = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Redux",
  "Node",
  "MongoDB",
]; // Web teknolojileri listesi

console.log(webTechs); // tüm dizi elemanları
console.log(webTechs.length); // => dizinin büyüklüğü, yani 7
console.log(webTechs[0]); //  -> HTML
console.log(webTechs[6]); //  -> MongoDB

let lastIndex = webTechs.length - 1;
console.log(webTechs[lastIndex]); // -> MongoDB
```

#### Dizi elemanını değiştirme

Dizi değiştirilebilirdir (mutable). Bir dizi oluşturulduktan sonra dizi elemanlarının içeriğini değiştirebiliriz.

```js
const numbers = [1, 2, 3, 4, 5];
numbers[0] = 10; // 0. indeksteki 1'i 10 ile değiştirme
numbers[1] = 20; // 1. indeksteki 2'yi 20 ile değiştirme

console.log(numbers); // [10, 20, 3, 4, 5]

const countries = [
  "Albania",
  "Bolivia",
  "Canada",
  "Denmark",
  "Ethiopia",
  "Finland",
  "Germany",
  "Hungary",
  "Ireland",
  "Japan",
  "Kenya",
];

countries[0] = "Afghanistan"; // Albania'yı Afghanistan ile değiştirme
let lastIndex = countries.length - 1;
countries[lastIndex] = "Korea"; // Kenya'yı Korea ile değiştirme

console.log(countries);
```

#### Dizi manipülasyon metotları

Bir diziyi manipüle etmek için farklı metotlar vardır. Dizilerle ilgilenirken kullanabileceğimiz bazı metotlar şunlardır: _Array, length, concat, indexOf, slice, splice, join, toString, includes, lastIndexOf, isArray, fill, push, pop, shift, unshift_

##### Array Constructor (Dizi Yapıcısı)

Array: Dizi oluşturmak için.

```js
const arr = Array(); // boş bir dizi oluşturur
console.log(arr);

const eightEmptyValues = Array(8); // sekiz boş değer oluşturur
console.log(eightEmptyValues); // [empty x 8]
```

##### fill ile statik değer oluşturma

fill: Tüm dizi elemanlarını statik bir değerle doldurur.

```js
const arr = Array(); // boş bir dizi oluşturur
console.log(arr);

const eightXvalues = Array(8).fill("X"); // 'X' ile dolu sekiz elemanlı dizi oluşturur
console.log(eightXvalues); // ['X', 'X','X','X','X','X','X','X']

const eight0values = Array(8).fill(0); // '0' ile dolu sekiz elemanlı dizi oluşturur
console.log(eight0values); // [0, 0, 0, 0, 0, 0, 0, 0]

const four4values = Array(4).fill(4); // '4' ile dolu dört elemanlı dizi oluşturur
console.log(four4values); // [4, 4, 4, 4]
```

##### concat ile dizi birleştirme

concat: İki diziyi birleştirmek için.

```js
const firstList = [1, 2, 3];
const secondList = [4, 5, 6];
const thirdList = firstList.concat(secondList);

console.log(thirdList); // [1, 2, 3, 4, 5, 6]
```

```js
const fruits = ["banana", "orange", "mango", "lemon"]; // meyve dizisi
const vegetables = ["Tomato", "Potato", "Cabbage", "Onion", "Carrot"]; // sebze dizisi
const fruitsAndVegetables = fruits.concat(vegetables); // iki diziyi birleştir

console.log(fruitsAndVegetables);
```

##### Dizi uzunluğunu öğrenme

Length: Dizinin büyüklüğünü öğrenmek için.

```js
const numbers = [1, 2, 3, 4, 5];
console.log(numbers.length); // -> 5 dizinin büyüklüğüdür
```

##### Dizide eleman indeksi bulma

indexOf: Bir elemanın dizide var olup olmadığını kontrol etmek için. Varsa indeksini, yoksa -1 döndürür.

```js
const numbers = [1, 2, 3, 4, 5];

console.log(numbers.indexOf(5)); // -> 4
console.log(numbers.indexOf(0)); // -> -1
console.log(numbers.indexOf(1)); // -> 0
console.log(numbers.indexOf(6)); // -> -1
```

Bir elemanın dizide var olup olmadığını kontrol etmek için:

```js
// banana'nın dizide olup olmadığını kontrol edelim

const fruits = ["banana", "orange", "mango", "lemon"];
let index = fruits.indexOf("banana"); // 0

if (index != -1) {
  console.log("Bu meyve dizide mevcut");
} else {
  console.log("Bu meyve dizide mevcut değil");
}
// Bu meyve dizide mevcut

// üçlü operatör de kullanılabilir
index != -1
  ? console.log("Bu meyve dizide mevcut")
  : console.log("Bu meyve dizide mevcut değil");

// avocado'nun dizide olup olmadığını kontrol edelim
let indexOfAvocado = fruits.indexOf("avocado"); // -1, eleman bulunamazsa indeks -1'dir
if (indexOfAvocado != -1) {
  console.log("Bu meyve dizide mevcut");
} else {
  console.log("Bu meyve dizide mevcut değil");
}
// Bu meyve dizide mevcut değil
```

##### Dizide elemanın son indeksini bulma

lastIndexOf: Dizideki son elemanın konumunu verir. Varsa indeksi, yoksa -1 döndürür.

```js
const numbers = [1, 2, 3, 4, 5, 3, 1, 2];

console.log(numbers.lastIndexOf(2)); // 7
console.log(numbers.lastIndexOf(0)); // -1
console.log(numbers.lastIndexOf(1)); //  6
console.log(numbers.lastIndexOf(4)); //  3
console.log(numbers.lastIndexOf(6)); // -1
```

includes: Bir elemanın dizide var olup olmadığını kontrol eder. Varsa true, yoksa false döndürür.

```js
const numbers = [1, 2, 3, 4, 5];

console.log(numbers.includes(5)); // true
console.log(numbers.includes(0)); // false
console.log(numbers.includes(1)); // true
console.log(numbers.includes(6)); // false

const webTechs = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Redux",
  "Node",
  "MongoDB",
]; // Web teknolojileri listesi

console.log(webTechs.includes("Node")); // true
console.log(webTechs.includes("C")); // false
```

##### Diziyi kontrol etme

Array.isArray: Veri tipinin dizi olup olmadığını kontrol etmek için.

```js
const numbers = [1, 2, 3, 4, 5];
console.log(Array.isArray(numbers)); // true

const number = 100;
console.log(Array.isArray(number)); // false
```

##### Diziyi stringe çevirme

toString: Diziyi stringe çevirir.

```js
const numbers = [1, 2, 3, 4, 5];
console.log(numbers.toString()); // 1,2,3,4,5

const names = ["Asabeneh", "Mathias", "Elias", "Brook"];
console.log(names.toString()); // Asabeneh,Mathias,Elias,Brook
```

##### Dizi elemanlarını birleştirme (join)

join: Dizi elemanlarını birleştirmek için kullanılır. join metoduna geçirilen argüman elemanlar arasına eklenerek string olarak döndürülür. Varsayılan olarak virgülle birleştirir; ancak elemanlar arasına farklı string parametre geçirebiliriz.

```js
const numbers = [1, 2, 3, 4, 5];
console.log(numbers.join()); // 1,2,3,4,5

const names = ["Asabeneh", "Mathias", "Elias", "Brook"];

console.log(names.join()); // Asabeneh,Mathias,Elias,Brook
console.log(names.join("")); //AsabenehMathiasEliasBrook
console.log(names.join(" ")); //Asabeneh Mathias Elias Brook
console.log(names.join(", ")); //Asabeneh, Mathias, Elias, Brook
console.log(names.join(" # ")); //Asabeneh # Mathias # Elias # Brook
```

##### Dizi elemanlarını dilimleme (slice)

Slice: Belirli bir aralıktaki birden fazla elemanı kesmek için. Başlangıç ve bitiş konumu olmak üzere iki parametre alır. Bitiş konumundaki elemanı dahil etmez.

```js
const numbers = [1, 2, 3, 4, 5];

console.log(numbers.slice()); // -> tüm elemanları kopyalar
console.log(numbers.slice(0)); // -> tüm elemanları kopyalar
console.log(numbers.slice(0, numbers.length)); // tüm elemanları kopyalar
console.log(numbers.slice(1, 4)); // -> [2,3,4] // bitiş konumunu dahil etmez
```

##### Dizide splice metodu

Splice: Üç parametre alır: Başlangıç konumu, kaç eleman çıkarılacağı ve kaç eleman ekleneceği.

```js
const numbers = [1, 2, 3, 4, 5];

console.log(numbers.splice()); // -> tüm elemanları çıkarır
```

```js
const numbers = [1, 2, 3, 4, 5];
console.log(numbers.splice(0, 1)); // ilk elemanı çıkar
```

```js
const numbers = [1, 2, 3, 4, 5, 6];
console.log(numbers.splice(3, 3, 7, 8, 9)); // -> [1, 2, 3, 7, 8, 9] // üç eleman çıkarır ve üç eleman ekler
```

##### push ile diziye eleman ekleme

Push: Sona eleman ekleme. Mevcut bir dizinin sonuna eleman eklemek için push metodunu kullanırız.

```js
// sözdizimi
const arr = ["item1", "item2", "item3"];
arr.push("new item");

console.log(arr);
// ['item1', 'item2','item3','new item']
```

```js
const numbers = [1, 2, 3, 4, 5];
numbers.push(6);

console.log(numbers); // -> [1,2,3,4,5,6]

numbers.pop(); // -> sondan bir elemanı çıkar
console.log(numbers); // -> [1,2,3,4,5]
```

##### pop ile son elemanı çıkarma

pop: Sondan eleman çıkarma.

```js
const numbers = [1, 2, 3, 4, 5];
numbers.pop(); // -> sondan bir elemanı çıkarır

console.log(numbers); // -> [1,2,3,4]
```

##### Baştan eleman çıkarma

shift: Dizinin başından bir eleman çıkarır.

```js
const numbers = [1, 2, 3, 4, 5];
numbers.shift(); // -> baştan bir elemanı çıkarır

console.log(numbers); // -> [2,3,4,5]
```

##### Başa eleman ekleme

unshift: Dizinin başına bir eleman ekler.

```js
const numbers = [1, 2, 3, 4, 5];
numbers.unshift(0); // -> başa bir eleman ekler

console.log(numbers); // -> [0,1,2,3,4,5]
```

##### Dizi sırasını tersine çevirme

reverse: Dizinin sırasını tersine çevirir.

```js
const numbers = [1, 2, 3, 4, 5];
numbers.reverse(); // -> dizi sırasını tersine çevirir

console.log(numbers); // [5, 4, 3, 2, 1]

numbers.reverse();
console.log(numbers); // [1, 2, 3, 4, 5]
```

##### Dizide sıralama

sort: Dizi elemanlarını artan sırayla düzenler. sort bir callback fonksiyonu alır; callback ile nasıl kullanıldığını ilerleyen bölümlerde göreceğiz.

```js
const webTechs = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Redux",
  "Node",
  "MongoDB",
];

webTechs.sort();
console.log(webTechs); // ["CSS", "HTML", "JavaScript", "MongoDB", "Node", "React", "Redux"]

webTechs.reverse(); // sıraladıktan sonra tersine çevirebiliriz
console.log(webTechs); // ["Redux", "React", "Node", "MongoDB", "JavaScript", "HTML", "CSS"]
```

#### Dizi içinde dizi

Dizi, dizi dahil farklı veri tiplerini saklayabilir. Dizi içinde dizi oluşturalım.

```js
const firstNums = [1, 2, 3];
const secondNums = [1, 4, 9];

const arrayOfArray = [
  [1, 2, 3],
  [1, 2, 3],
];
console.log(arrayOfArray[0]); // [1, 2, 3]

const frontEnd = ["HTML", "CSS", "JS", "React", "Redux"];
const backEnd = ["Node", "Express", "MongoDB"];
const fullStack = [frontEnd, backEnd];
console.log(fullStack); // [["HTML", "CSS", "JS", "React", "Redux"], ["Node", "Express", "MongoDB"]]
console.log(fullStack.length); // 2
console.log(fullStack[0]); // ["HTML", "CSS", "JS", "React", "Redux"]
console.log(fullStack[1]); // ["Node", "Express", "MongoDB"]
```

### 💻 Egzersiz

##### Egzersiz: Seviye 1

```js
const countries = [
  "Albania",
  "Bolivia",
  "Canada",
  "Denmark",
  "Ethiopia",
  "Finland",
  "Germany",
  "Hungary",
  "Ireland",
  "Japan",
  "Kenya",
];

const webTechs = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Redux",
  "Node",
  "MongoDB",
];
```

1. _Boş_ bir dizi tanımlayın
2. 5'ten fazla elemanlı bir dizi tanımlayın
3. Dizinizin uzunluğunu bulun
4. Dizinin ilk, orta ve son elemanını alın
5. _mixedDataTypes_ adında bir dizi tanımlayın, farklı veri tiplerini ekleyin ve uzunluğunu bulun. Dizi boyutu 5'ten büyük olmalıdır
6. itCompanies adında bir değişken tanımlayın ve Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon başlangıç değerlerini atayın
7. _console.log()_ ile diziyi yazdırın
8. Dizideki şirket sayısını yazdırın
9. İlk, orta ve son şirketi yazdırın
10. Her şirketi ayrı ayrı yazdırın
11. Her şirket adını büyük harfe çevirip yazdırın
12. Diziyi cümle gibi yazdırın: Facebook, Google, Microsoft, Apple, IBM, Oracle ve Amazon büyük IT şirketleridir.
13. itCompanies dizisinde belirli bir şirketin olup olmadığını kontrol edin. Varsa şirketi, yoksa _bulunamadı_ mesajını döndürün
14. filter metodu kullanmadan birden fazla 'o' içeren şirketleri filtreleyin
15. _sort()_ metodu ile diziyi sıralayın
16. _reverse()_ metodu ile diziyi tersine çevirin
17. Diziden ilk 3 şirketi dilimleyin
18. Diziden son 3 şirketi dilimleyin
19. Dizinin ortasındaki IT şirketini/şirketlerini dilimleyin
20. İlk IT şirketini diziden çıkarın
21. Ortadaki IT şirketini/şirketlerini diziden çıkarın
22. Son IT şirketini diziden çıkarın
23. Tüm IT şirketlerini çıkarın

##### Egzersiz: Seviye 2

1. Ayrı bir countries.js dosyası oluşturun ve ülkeler dizisini bu dosyaya, ayrı bir web_techs.js dosyası oluşturun ve webTechs dizisini bu dosyaya saklayın. Her iki dosyaya main.js dosyasından erişin.
2. Önce tüm noktalama işaretlerini kaldırıp stringi diziye çevirin ve dizideki kelime sayısını sayın.

   ```js
   let text =
     "I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.";
   console.log(words);
   console.log(words.length);
   ```

3. Aşağıdaki alışveriş sepetine eleman ekleyin, çıkarın, düzenleyin.

   ```js
   const shoppingCart = ["Milk", "Coffee", "Tea", "Honey"];
   ```

   - Daha önce eklenmemişse başa 'Meat' ekleyin
   - Daha önce eklenmemişse sona Şeker ekleyin
   - Bal alerjiniz varsa 'Honey' çıkarın
   - Tea'yi 'Green Tea' olarak değiştirin

4. countries dizisinde 'Ethiopia' varsa 'ETHIOPIA' yazdırın. Yoksa ülkeler listesine ekleyin.
5. webTechs dizisinde Sass varsa 'Sass bir CSS ön işlemcisidir' yazdırın. Yoksa diziye ekleyip yazdırın.
6. Aşağıdaki iki değişkeni birleştirip fullStack değişkenine saklayın.

##### Egzersiz: Seviye 3

1. Aşağıda 10 öğrencinin yaşlarından oluşan bir dizi var:
   `const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]`
   - Diziyi sıralayın, minimum ve maksimum yaşı bulun
   - Medyan yaşı bulun (ortadaki bir eleman veya iki orta eleman toplamının yarısı)
   - Ortalama yaşı bulun (tüm elemanların toplamı / eleman sayısı)
   - Yaş aralığını bulun (max - min)
   - (min - ortalama) ve (max - ortalama)'nın değerini karşılaştırın, _abs()_ metodunu kullanın

### 4. Koşullar (Conditionals)

Koşullu ifadeler, farklı koşullara göre kararlar almak için kullanılır. Varsayılan olarak JavaScript'teki ifadeler yukarıdan aşağıya sırayla çalışır. İşleme mantığı gerektiriyorsa, sıralı yürütme akışı iki şekilde değiştirilebilir:

- Koşullu yürütme: Belirli bir ifade doğruysa bir veya daha fazla ifadeden oluşan bir blok çalışır.
- Tekrarlı yürütme: Belirli bir ifade doğru olduğu sürece bir veya daha fazla ifadeden oluşan bir blok tekrar tekrar çalışır. Bu bölümde _if_, _else_, _else if_ ifadelerini ele alacağız.

Koşullar şu yollarla uygulanabilir:

- if
- if else
- if else if else
- switch
- üçlü operatör (ternary operator)

#### If

JavaScript ve diğer programlama dillerinde _if_ anahtar kelimesi, bir koşulun doğru olup olmadığını kontrol etmek ve blok kodu çalıştırmak için kullanılır.

```js
// sözdizimi
if (koşul) {
  // bu bölüm doğru koşul için çalışır
}
```

**Örnek:**

```js
let num = 3;
if (num > 0) {
  console.log(`${num} pozitif bir sayıdır`);
}
//  3 pozitif bir sayıdır
```

#### If Else

Koşul doğruysa ilk blok, değilse else bloğu çalışır.

```js
// sözdizimi
if (koşul) {
  // bu bölüm doğru koşul için çalışır
} else {
  // bu bölüm yanlış koşul için çalışır
}
```

```js
let num = 3;
if (num > 0) {
  console.log(`${num} pozitif bir sayıdır`);
} else {
  console.log(`${num} negatif bir sayıdır`);
}
//  3 pozitif bir sayıdır

num = -3;
if (num > 0) {
  console.log(`${num} pozitif bir sayıdır`);
} else {
  console.log(`${num} negatif bir sayıdır`);
}
//  -3 negatif bir sayıdır
```

#### If Else if Else

İkiden fazla koşulumuz olduğunda _else if_ kullanırız.

```js
// sözdizimi
if (koşul) {
  // kod
} else if (koşul) {
  // kod
} else {
  // kod
}
```

**Örnek:**

```js
let a = 0;
if (a > 0) {
  console.log(`${a} pozitif bir sayıdır`);
} else if (a < 0) {
  console.log(`${a} negatif bir sayıdır`);
} else if (a == 0) {
  console.log(`${a} sıfırdır`);
} else {
  console.log(`${a} bir sayı değildir`);
}
```

#### Switch

Switch, **if else if else**'e bir alternatiftir. switch ifadesi bir _switch_ anahtar kelimesiyle başlar, ardından parantez ve kod bloğu gelir. Kod bloğunun içinde farklı case'ler olacaktır. switch parantezindeki değer, case değeriyle eşleşirse case bloğu çalışır. break ifadesi, koşul sağlandıktan sonra kodun aşağıya devam etmemesi için çalışmayı durdurur. Hiçbir case koşulu sağlamazsa default bloğu çalışır.

```js
switch (caseValue) {
  case 1:
    // kod
    break;
  case 2:
    // kod
    break;
  case 3:
  // kod
  default:
  // kod
}
```

#### Üçlü Operatörler (Ternary Operators)

Üçlü operatör _React_'ta çok yaygındır. If else ifadesini kısa yazmak için kullanılır. React'ta pek çok durumda üçlü operatörü kullanırız.

```js
let isRaining = true;
isRaining
  ? console.log("Yağmurluk almanız gerekiyor.")
  : console.log("Yağmurluk gerekmez.");
```

### 💻 Egzersizler

##### Egzersizler: Seviye 1

1. prompt("Yaşınızı girin:") kullanarak kullanıcıdan yaş alın. 18 veya daha büyükse 'Araba kullanabilecek yaştasınız' geri bildirimi verin; değilse kaç yıl beklemesi gerektiğini söyleyin.
2. myAge ve yourAge'yi if...else kullanarak karşılaştırın ve sonucu konsola yazdırın.
3. a, b'den büyükse 'a, b'den büyük' değilse 'a, b'den küçük' döndürün. İki yolla uygulayın: if else ve üçlü operatör.
4. Çift sayılar 2'ye bölünebilir ve kalanı sıfırdır. JavaScript ile bir sayının çift mi tek mi olduğunu nasıl kontrol edersiniz?

##### Egzersizler: Seviye 2

1. Öğrenci notlarına göre harf notu veren bir kod yazın: 80-100 A, 70-89 B, 60-69 C, 50-59 D, 0-49 F.
2. Mevsimi kontrol edin: Sonbahar, Kış, İlkbahar veya Yaz.
3. Bir günün hafta sonu mu yoksa iş günü mü olduğunu kontrol edin.

##### Egzersizler: Seviye 3

1. Bir ayın kaç gün olduğunu söyleyen bir program yazın.
2. Artık yılı da dikkate alan bir program yazın.

### 5. Döngüler (Loops)

Programlamada tekrarlayan görevleri yerine getirmek için farklı döngüler kullanırız. Döngüler, sıkıcı ve tekrar eden görevleri otomatikleştirmemize yardımcı olabilir.

Döngüler:

- for
- while
- do while
- for of
- forEach
- for in

Bir döngü genellikle koşul false olana kadar devam eder. Ancak bazen döngüyü kesmek veya iterasyon sırasında bir elemanı atlamak isteyebiliriz. Döngüyü kesmek için _break_, iterasyon sırasında bir elemanı atlamak için _continue_ kullanırız.

#### Döngü Türleri

##### 1. for

Kaç iterasyon yapacağımızı bildiğimizde for döngüsü kullanırız.

```js
// for döngüsü sözdizimi

for (başlangıç, koşul, artış/azalış) {
    kod buraya gelir
}
```

Bu kod 0'dan 5'e kadar yazdırır:

```js
for (let i = 0; i < 6; i++) {
  console.log(i);
}
```

0'dan 100'e kadar tüm sayıları toplamak için:

```js
let sum = 0;
for (let i = 0; i < 101; i++) {
  sum += i;
}

console.log(sum);
```

Sadece çift sayıları toplamak için:

```js
let sum = 0;
for (let i = 0; i < 101; i += 2) {
  sum += i;
}

console.log(sum);
```

Ters sırada döngü:

```js
for (let i = 5; i >= 0; i--) {
  console.log(i);
}
```

##### 2. while

Kaç iterasyon yapacağımızı önceden bilmediğimizde while döngüsü kullanırız.

```js
let count = prompt("Pozitif bir sayı girin: ");
while (count > 0) {
  console.log(count);
  count--;
}
```

##### 3. do while

do while döngüsü, koşul doğru veya yanlış olsa bile en az bir kez çalışır.

```js
let count = 0;
do {
  console.log(count);
  count++;
} while (count < 11);
```

##### 4. for of

for of döngüsü dizilerle kullanmak için çok kullanışlıdır. Dizi indeksiyle ilgilenmiyorsak for of döngüsü, normal for veya forEach döngüsüne tercih edilir.

```js
const numbers = [1, 2, 3, 4, 5];
for (const number of numbers) {
  console.log(number);
}

const countries = ["Finland", "Sweden", "Norway", "Denmark", "Iceland"];
for (const country of countries) {
  console.log(country.toUpperCase());
}
```

##### 5. forEach

Dizi indeksiyle ilgileniyorsak forEach, for of döngüsüne tercih edilir. forEach dizi metodu bir callback fonksiyonu alır; callback üç argüman alır: eleman, indeks ve dizinin kendisi.

```js
const numbers = [1, 2, 3, 4, 5];
numbers.forEach((number, i) => {
  console.log(number, i);
});

const countries = ["Finland", "Sweden", "Norway", "Denmark", "Iceland"];
countries.forEach((country, i, arr) => {
  console.log(i, country.toUpperCase());
});
```

##### 6. for in

for in döngüsü, nesne literalleriyle nesnenin anahtarlarını almak için kullanılabilir.

```js
const user = {
  firstName: "Asabeneh",
  lastName: "Yetayeh",
  age: 250,
  country: "Finland",
  skills: ["HTML", "CSS", "JS", "React", "Node", "Python", "D3.js"],
};

for (const key in user) {
  console.log(key, user[key]);
}
```

#### Döngüyü kesme ve eleman atlama

##### break

break, bir döngüyü kesmek için kullanılır.

```js
for (let i = 0; i <= 5; i++) {
  if (i == 3) {
    break;
  }
  console.log(i);
}

// 0 1 2
```

##### continue

Belirli iterasyonları atlamak için continue anahtar kelimesini kullanırız.

```js
for (let i = 0; i <= 5; i++) {
  if (i == 3) {
    continue;
  }
  console.log(i);
}
// 0 1 2 4 5
```

#### Sonuçlar

- Normal for döngüsü, iterasyon sayısı bilindiğinde her yerde kullanılabilir.
- while döngüsü, iterasyon sayısı bilinmediğinde kullanılır.
- do while ve while neredeyse aynıdır; ancak do while koşul yanlış olsa bile en az bir kez çalışır.
- for of yalnızca dizi için kullanılır.
- forEach dizi için kullanılır.
- for in nesne için kullanılır.

### 6. Kapsam (Scope)

Değişken, programlamanın temel parçasıdır. Farklı veri tiplerini saklamak için değişken tanımlarız. Değişken tanımlamak için _var_, _let_ ve _const_ anahtar kelimelerini kullanırız. Bir değişken farklı scope'larda tanımlanabilir. Bu bölümde scope'u ve _var_ veya _let_ kullandığımızda değişken scope'larını göreceğiz.

Değişken scope'ları:

- Window (Pencere)
- Global (Küresel)
- Local (Yerel)

#### Window Scope (Pencere Kapsamı)

console.log() kullanmadan tarayıcınızı açın ve a veya b yazarsanız değerini görürsünüz. Bu, a ve b'nin zaten window'da mevcut olduğu anlamına gelir.

```js
//scope.js
a = "JavaScript"; // window scope'unda bulunur, her yerden erişilebilir
b = 10; // bu bir window scope değişkenidir
function letsLearnScope() {
  console.log(a, b);
  if (true) {
    console.log(a, b);
  }
}
console.log(a, b); // erişilebilir
```

#### Global Scope (Global Kapsam)

Global olarak tanımlanan bir değişkene aynı dosyanın her yerinden erişilebilir.

```js
//scope.js
let a = "JavaScript"; // global scope'ta, bu dosyanın her yerinde bulunacak
let b = 10; // global scope'ta, bu dosyanın her yerinde bulunacak
function letsLearnScope() {
  console.log(a, b); // JavaScript 10, erişilebilir
  if (true) {
    let a = "Python";
    let b = 100;
    console.log(a, b); // Python 100
  }
  console.log(a, b);
}
letsLearnScope();
console.log(a, b); // JavaScript 10, erişilebilir
```

#### Local Scope (Yerel Kapsam)

Yerel olarak tanımlanan bir değişkene yalnızca belirli kod bloğu içinden erişilebilir.

```js
//scope.js
let a = "JavaScript"; // global scope'ta
let b = 10; // global scope'ta
function letsLearnScope() {
  console.log(a, b); // JavaScript 10, erişilebilir
  let c = 30;
  if (true) {
    // fonksiyon içinden ve dışından erişebiliriz; ancak
    // if içinde tanımlanan değişkenlere if dışından erişilemez
    let a = "Python";
    let b = 20;
    let d = 40;
    console.log(a, b, c); // Python 20 30
  }
  // c'ye erişemeyiz çünkü c'nin scope'u yalnızca if bloğudur
  console.log(a, b); // JavaScript 10
}
letsLearnScope();
console.log(a, b); // JavaScript 10, erişilebilir
```

_var_ ile tanımlanan değişken yalnızca fonksiyon scope'una sahipken, _let_ veya _const_ ile tanımlanan değişken blok scope'una sahiptir (fonksiyon bloğu, if bloğu, döngü vb.).

```js
//scope.js
function letsLearnScope() {
  var gravity = 9.81;
  console.log(gravity);
}
// console.log(gravity), Hata: gravity tanımlı değil

if (true) {
  var gravity = 9.81;
  console.log(gravity); // 9.81
}
console.log(gravity); // 9.81

for (var i = 0; i < 3; i++) {
  console.log(i); // 1, 2, 3
}
console.log(i);
```

ES6 ve üzerinde _let_ ve _const_ var olduğundan _var_'ın sorunlarıyla uğraşmak zorunda kalmazsınız.

```js
//scope.js
function letsLearnScope() {
  const gravity = 9.81;
  console.log(gravity);
}
// console.log(gravity), Hata: gravity tanımlı değil

if (true) {
  const gravity = 9.81;
  console.log(gravity); // 9.81
}
// console.log(gravity), Hata: gravity tanımlı değil

for (let i = 0; i < 3; i++) {
  console.log(i); // 1, 2, 3
}
// console.log(i), Hata: i tanımlı değil
```

_let_ ve _const_'un scope'u aynıdır. Fark yalnızca yeniden atamadadır. const değişkeninin değerini değiştiremez veya yeniden atayamayız. Değişen her değer için _let_, sabit her değer için _const_ kullanmanız önerilir. Diziler, nesneler, ok fonksiyonları ve fonksiyon ifadeleri için de _const_ kullanın.

### 7. Nesne (Object)

Her şey nesne olabilir ve nesnelerin özellikleri, özelliklerin de değerleri vardır; bu nedenle nesne bir anahtar-değer çiftidir.

#### Boş nesne oluşturma

```js
const person = {};
```

#### Değerli nesne oluşturma

```js
const rectangle = {
  length: 20,
  width: 20,
};
console.log(rectangle); // {length: 20, width: 20}

const person = {
  firstName: "Asabeneh",
  lastName: "Yetayeh",
  age: 250,
  country: "Finland",
  city: "Helsinki",
  skills: [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Node",
    "MongoDB",
    "Python",
    "D3.js",
  ],
  isMarried: true,
};
console.log(person);
```

#### Nesneden değer okuma

Nesne değerlerine iki yöntemle erişebiliriz:

- Anahtar adını takiben nokta (.) kullanarak (tek kelimelik anahtar adı için)
- Köşeli parantez ve tırnak işareti kullanarak

```js
const person = {
  firstName: "Asabeneh",
  lastName: "Yetayeh",
  age: 250,
  country: "Finland",
  city: "Helsinki",
  skills: [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Node",
    "MongoDB",
    "Python",
    "D3.js",
  ],
  getFullName: function () {
    return `${this.firstName}${this.lastName}`;
  },
  "phone number": "+3584545454545",
};

// nokta ile değere erişme
console.log(person.firstName);
console.log(person.lastName);
console.log(person.age);
console.log(person.location);

// köşeli parantez ve anahtar adıyla değere erişme
console.log(person["firstName"]);
console.log(person["lastName"]);
console.log(person["age"]);
console.log(person["location"]);

// telefon numarasına yalnızca köşeli parantez yöntemiyle erişebiliriz
console.log(person["phone number"]);
```

#### Nesne metotları oluşturma

person nesnesi artık getFullName özelliğine sahiptir. getFullName, person nesnesi içindeki bir fonksiyondur ve buna nesne metotu deriz. _this_ anahtar kelimesi nesnenin kendisine atıfta bulunur. Nesne metodunda ok fonksiyonu kullanmamalıyız çünkü ok fonksiyonu içinde _this_ nesnenin kendisi yerine window'a atıfta bulunur.

```js
const person = {
  firstName: "Asabeneh",
  lastName: "Yetayeh",
  age: 250,
  country: "Finland",
  city: "Helsinki",
  skills: [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Node",
    "MongoDB",
    "Python",
    "D3.js",
  ],
  getFullName: function () {
    return `${this.firstName} ${this.lastName}`;
  },
};

console.log(person.getFullName());
// Asabeneh Yetayeh
```

#### Nesneye yeni anahtar ekleme

Nesne değiştirilebilir bir veri yapısıdır ve oluşturulduktan sonra içeriğini değiştirebiliriz.

```js
person.nationality = "Ethiopian";
person.country = "Finland";
person.title = "teacher";
person.skills.push("Meteor");
person.skills.push("SasS");
person.isMarried = true;
```

#### Nesne Metotları (Object Methods)

##### Object.keys() ile nesne anahtarlarını alma

_Object.keys_: Bir nesnenin anahtarlarını veya özelliklerini dizi olarak almak için.

```js
const keys = Object.keys(copyPerson);
console.log(keys); //['name', 'age', 'country', 'skills', 'address', 'getPersonInfo']
```

##### Object.values() ile nesne değerlerini alma

_Object.values_: Bir nesnenin değerlerini dizi olarak almak için.

```js
const values = Object.values(copyPerson);
console.log(values);
```

##### Object.entries() ile anahtar-değer çiftlerini alma

_Object.entries_: Anahtarları ve değerleri dizi olarak almak için.

```js
const entries = Object.entries(copyPerson);
console.log(entries);
```

##### hasOwnProperty() ile özellik kontrolü

_hasOwnProperty_: Belirli bir anahtar veya özelliğin nesnede olup olmadığını kontrol etmek için.

```js
console.log(copyPerson.hasOwnProperty("name"));
console.log(copyPerson.hasOwnProperty("score"));
```

### 💻 Egzersizler

##### Egzersizler: Seviye 1

1. dog adında boş bir nesne oluşturun
2. Nesneye name, legs, color, age ve bark özellikleri ekleyin. bark özelliği _woof woof_ döndüren bir metot olsun
3. dog nesnesinden değerleri alın
4. dog nesnesine breed ve getDogInfo özelliklerini ayarlayın

##### Egzersizler: Seviye 2

1. users nesnesinde en fazla beceriye sahip kişiyi bulun.
2. Giriş yapmış kullanıcıları sayın, 50 veya daha fazla puanı olan kullanıcıları sayın.
3. MERN stack geliştiricisi olan kişileri bulun.

##### Egzersizler: Seviye 3

1. Merkezi eğilim ölçüsünü (ortalama, medyan, mod) ve değişkenlik ölçüsünü (aralık, varyans, standart sapma) hesaplayan bir Statistics sınıfı oluşturun.

### 8. Fonksiyonlar (Functions)

Fonksiyon, belirli bir görevi gerçekleştirmek için tasarlanmış yeniden kullanılabilir kod bloğu veya programlama ifadeleridir.

Fonksiyon şu yollarla tanımlanabilir veya oluşturulabilir:

- _Declaration function (Tanımlama fonksiyonu)_
- _Expression function (İfade fonksiyonu)_
- _Anonymous function (Anonim fonksiyon)_
- _Arrow function (Ok fonksiyonu)_

#### Fonksiyon Tanımlama (Function Declaration)

```js
// parametresiz fonksiyon tanımlama
function functionName() {
  // kod buraya gelir
}
functionName(); // fonksiyonu adı ve parantezle çağırma
```

#### Parametresiz ve geri dönüşsüz fonksiyon

```js
// parametresiz fonksiyon, kareyi hesaplayan fonksiyon
function square() {
  let num = 2;
  let sq = num * num;
  console.log(sq);
}

square(); // 4

// parametresiz fonksiyon
function addTwoNumbers() {
  let numOne = 10;
  let numTwo = 20;
  let sum = numOne + numTwo;

  console.log(sum);
}

addTwoNumbers(); // çalıştırmak için ismiyle çağrılmalıdır
```

#### Değer döndüren fonksiyon

Fonksiyon değer döndürmüyorsa döndürülen değer undefined'dır.

```js
function printFullName() {
  let firstName = "Asabeneh";
  let lastName = "Yetayeh";
  let space = " ";
  let fullName = firstName + space + lastName;
  return fullName;
}
console.log(printFullName());
```

#### Parametreli fonksiyon

```js
// bir parametreli fonksiyon
function functionName(parm1) {
  // kod buraya gelir
}
functionName(parm1); // çağırırken bir argüman gerekir

function areaOfCircle(r) {
  let area = Math.PI * r * r;
  return area;
}

console.log(areaOfCircle(10)); // bir argümanla çağrılmalıdır
```

#### İki parametreli fonksiyon

```js
// iki parametreli fonksiyon
function functionName(parm1, parm2) {
  // kod buraya gelir
}
functionName(parm1, parm2); // çağırırken iki argüman gerekir

function sumTwoNumbers(numOne, numTwo) {
  let sum = numOne + numTwo;
  return sum;
}

console.log(sumTwoNumbers(10, 20));
```

#### Çok parametreli fonksiyon

```js
// çok parametreli fonksiyon
function functionName(parm1, parm2, parm3,...){
  // kod buraya gelir
}
```

#### Sınırsız parametreli fonksiyon

Bazen kullanıcının kaç argüman geçireceğini bilmeyiz. Sınırsız sayıda argüman alabilecek fonksiyon yazmayı bilmeliyiz.

Normal fonksiyonda:

```js
// arguments nesnesine erişim
function sumAllNums() {
  let sum = 0;
  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  return sum;
}

console.log(sumAllNums(1, 2, 3, 4)); // 10
console.log(sumAllNums(10, 20, 13, 40, 10)); // 93
```

Ok fonksiyonunda spread operatörü kullanarak:

```js
const sumAllNums = (...args) => {
  let sum = 0;
  for (const element of args) {
    sum += element;
  }
  return sum;
};

console.log(sumAllNums(1, 2, 3, 4)); // 10
console.log(sumAllNums(10, 20, 13, 40, 10)); // 93
```

#### Anonim Fonksiyon (Anonymous Function)

İsimsiz fonksiyon:

```js
const anonymousFun = function () {
  console.log(
    "Ben anonim bir fonksiyonum ve değerim anonymousFun içinde saklanıyor",
  );
};
```

#### Expression Function (İfade Fonksiyonu)

Expression function'lar anonim fonksiyonlardır. İsimsiz bir fonksiyon oluşturup değişkene atarız.

```js
// Fonksiyon ifadesi
const square = function (n) {
  return n * n;
};

console.log(square(2)); // -> 4
```

#### Kendi Kendini Çağıran Fonksiyonlar (Self Invoking Functions)

Kendi kendini çağıran fonksiyonlar, değer döndürmek için çağrılmaya gerek duyulmayan anonim fonksiyonlardır.

```js
(function (n) {
  console.log(n * n);
})(2); // 4

let squaredNum = (function (n) {
  return n * n;
})(10);

console.log(squaredNum);
```

#### Ok Fonksiyonu (Arrow Function)

Ok fonksiyonu, fonksiyon yazmak için bir alternatiftir.

```js
// normal fonksiyon tanımlama
function square(n) {
  return n * n;
}

console.log(square(2)); // 4

// ok fonksiyonu olarak
const square = (n) => {
  return n * n;
};

console.log(square(2)); // -> 4

// yalnızca bir satır varsa açık return ile şöyle yazılabilir
const square = (n) => n * n; // -> 4
```

#### Varsayılan parametreli fonksiyon

Bazen parametrelere varsayılan değerler geçiririz; fonksiyon çağrıldığında argüman geçirilmezse varsayılan değer kullanılır.

```js
function greetings(name = "Peter") {
  let message = `${name}, 30 Days Of JavaScript'e hoş geldiniz!`;
  return message;
}

console.log(greetings());
console.log(greetings("Asabeneh"));
```

### 💻 Egzersizler

##### Egzersizler: Seviye 1

1. firstName ve lastName parametresi alan ve tam adı döndüren _fullName_ fonksiyonunu tanımlayın.
2. İki parametre alan ve toplamı döndüren _addNumbers_ fonksiyonunu tanımlayın.
3. Çember alanını hesaplayan _areaOfCircle_ fonksiyonunu yazın.
4. Celsius'u Fahrenheit'a çeviren _convertCelciusToFahrenheit_ fonksiyonunu yazın.
5. BMI hesaplayan ve kişinin durumunu belirleyen _bmi_ fonksiyonunu yazın.

##### Egzersizler: Seviye 2

1. İkinci dereceden denklem çözen _solveQuadEquation_ fonksiyonunu yazın.
2. _printArray_ fonksiyonunu tanımlayın.
3. Tarih/saati belirli formatta gösteren _showDateTime_ fonksiyonunu yazın.

##### Egzersizler: Seviye 3

1. Herhangi sayıda argüman alıp hex veya rgb renk üretebilen _generateColors_ fonksiyonunu yazın.
2. Bir dizinin ortalamasını hesaplayan _average_ fonksiyonunu yazın.

### 9. Higher Order Function (Yüksek Dereceli Fonksiyon)

Higher order function (Yüksek dereceli fonksiyon), başka bir fonksiyonu parametre olarak alan veya değer olarak fonksiyon döndüren fonksiyondur. Parametre olarak geçirilen fonksiyona callback (geri çağrım fonksiyonu) denir.

#### Callback (Geri Çağrım Fonksiyonu)

Callback, başka bir fonksiyona parametre olarak geçirilebilen bir fonksiyondur.

```js
// callback fonksiyonu, fonksiyon herhangi bir isimde olabilir
const callback = (n) => {
  return n ** 2;
};

// başka bir fonksiyonu callback olarak alan fonksiyon
function cube(callback, n) {
  return callback(n) * n;
}

console.log(cube(callback, 3));
```

#### Fonksiyon döndürme

Higher order function (Yüksek dereceli fonksiyon), değer olarak fonksiyon döndürür.

```js
// başka bir fonksiyon döndüren higher order function (yüksek dereceli fonksiyon)
const higherOrder = (n) => {
  const doSomething = (m) => {
    const doWhatEver = (t) => {
      return 2 * n + 3 * m + t;
    };
    return doWhatEver;
  };
  return doSomething;
};
console.log(higherOrder(2)(3)(10));
```

Callback fonksiyonlarını nerede kullandığımıza bakalım. Örneğin _forEach_ metodu callback kullanır:

```js
const numbers = [1, 2, 3, 4];
const sumArray = (arr) => {
  let sum = 0;
  const callback = function (element) {
    sum += element;
  };
  arr.forEach(callback);
  return sum;
};
console.log(sumArray(numbers));
```

#### Zamanlama Fonksiyonları

JavaScript'te belirli zaman aralıklarında bir aktivite çalıştırabilir veya bir süre sonra çalıştırmak üzere zamanlayabiliriz.

- setInterval
- setTimeout

##### setInterval

setInterval, belirli bir zaman aralığında sürekli olarak bir aktivite yapmak için kullanılır. setInterval global metodu bir callback fonksiyonu ve süre (ms cinsinden) alır.

```js
// sözdizimi
function callback() {
  // kod buraya gelir
}
setInterval(callback, sure);
```

```js
function sayHello() {
  console.log("Merhaba");
}
setInterval(sayHello, 2000); // her 2 saniyede bir Merhaba yazdırır
```

##### setTimeout

setTimeout, gelecekte bir anda bir işlemi yürütmek için kullanılır.

```js
function sayHello() {
  console.log("Merhaba");
}
setTimeout(sayHello, 2000); // 2 saniye bekledikten sonra Merhaba yazdırır
```

### 10. Destructuring (Parçalama) ve Spread (Yayma)

#### Destructuring (Parçalama) Nedir?

Destructuring (Parçalama), dizileri ve nesneleri paketinden çıkarıp ayrı değişkenlere atama yöntemidir. Destructuring temiz ve okunabilir kod yazmamıza olanak tanır.

#### Ne parçalayabiliriz?

1. Diziler
2. Nesneler

##### 1. Dizi Parçalama (Array Destructuring)

```js
const numbers = [1, 2, 3];
const [num1, num2, num3] = numbers;
console.log(num1, num2, num3); // 1, 2, 3

const countries = ["Finland", "Sweden", "Norway"];
const [fin, swe, nor] = countries;
console.log(fin, swe, nor); // Finland, Sweden, Norway
```

Destructuring sırasında bir elemanı atlama:

```js
const countries = ["Finland", "Sweden", "Iceland", "Norway", "Denmark"];
const [fin, , ice, , den] = countries;
console.log(fin, ice, den); // Finland, Iceland, Denmark
```

Spread operatörü ile dizinin geri kalanını alma:

```js
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const [num1, num2, num3, ...rest] = nums;
console.log(num1, num2, num3, rest); //1, 2, 3, [4, 5, 6, 7, 8, 9, 10]
```

React Hook'larını kullanıyorsanız bunu zaten biliyorsunuzdur. useState hook'u ile kullanım:

```js
const [count, setCount] = useState(0);
```

##### 2. Nesne Parçalama (Object Destructuring)

Bir nesneyi parçaladığımızda değişken adı, nesnenin anahtarıyla ya da özelliğiyle birebir aynı olmalıdır.

```js
const rectangle = {
  width: 20,
  height: 10,
};

let { width, height } = rectangle;
console.log(width, height); // 20, 10
```

Yeniden adlandırma:

```js
const rectangle = {
  width: 20,
  height: 10,
};

let { width: w, height: h } = rectangle;
```

#### Egzersizler

getPersonInfo adında bir fonksiyon oluşturun. Bu fonksiyon bir nesne parametresi alır.

#### Spread veya Rest Operatörü

##### Spread operatörü ile dizi elemanlarını kopyalama

```js
const evens = [0, 2, 4, 6, 8, 10];
const evenNumbers = [...evens];

const odds = [1, 3, 5, 7, 9];
const oddNumbers = [...odds];

const wholeNumbers = [...evens, ...odds];

console.log(evenNumbers);
console.log(oddNumbers);
console.log(wholeNumbers);
```

##### Spread operatörü ile nesne kopyalama

```js
const user = {
  name: "Asabeneh",
  title: "Programmer",
  country: "Finland",
  city: "Helsinki",
};

const copiedUser = { ...user };
console.log(copiedUser);
```

##### Ok fonksiyonuyla spread operatörü

```js
const sumAllNums = (...args) => {
  let sum = 0;
  for (const num of args) {
    sum += num;
  }
  return sum;
};

console.log(sumAllNums(1, 2, 3, 4, 5));
```

### 11. Fonksiyonel Programlama (Functional Programming)

_Fonksiyonel programlama_ (Functional programming), daha kısa ve temiz kod yazmanıza ve geleneksel yöntemlerle çözülmesi zor olabilecek karmaşık sorunları çözmenize olanak tanır.

Ele alacağımız JS fonksiyonel programlama metotları:

- forEach
- map
- filter
- reduce
- find
- findIndex
- some
- every

#### 1. forEach

Bir dizi elemanları üzerinde iterasyon yapmak istediğimizde forEach kullanırız. forEach bir higher order function (yüksek dereceli fonksiyon) olup callback alır.

```js
const countries = ["Finland", "Estonia", "Sweden", "Norway"];
countries.forEach((country, i) => console.log(i, country.toUpperCase()));
```

#### 2. map

Bir diziyi değiştirmek istediğimizde map metodunu kullanırız. map her zaman bir dizi döndürür.

```js
const countries = ["Finland", "Estonia", "Sweden", "Norway"];
const newCountries = countries.map((country) => country.toUpperCase());

console.log(newCountries); // ["FINLAND", "ESTONIA", "SWEDEN", "NORWAY"]
```

#### 3. filter

filter, bazı kriterlere göre elemanları filtreler ve filtrelenmiş elemanlardan oluşan bir dizi döndürür.

```js
const countries = ["Finland", "Estonia", "Sweden", "Norway", "Iceland"];
const countriesWithLand = countries.filter((country) =>
  country.includes("land"),
);
console.log(countriesWithLand); // ["Finland", "Iceland"]
```

#### 4. reduce

reduce, bir dizi üzerinde kullanılır ve tek bir değer döndürür. Farklı meyveler blenderdan geçirilip meyve suyu elde edilmesi gibi düşünülebilir.

```js
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const sum = numbers.reduce((acc, cur) => acc + cur);
console.log(sum); // 55
```

#### 5. find

Bir dizideki belirli bir elemanın ilk oluşumunu istiyorsak find metodunu kullanırız. find, dizi yerine yalnızca ilk oluşumu döndürür.

```js
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const firstEvenNum = numbers.find((n) => n % 2 === 0);
const firstOddNum = numbers.find((n) => n % 2 !== 0);
console.log(firstEvenNum); // 0
console.log(firstOddNum); // 1
```

#### 6. findIndex

findIndex, find gibi çalışır ama elemanın indeksini döndürür.

```js
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const firstEvenIndex = numbers.findIndex((n) => n % 2 === 0);
const firstOddIndex = numbers.findIndex((n) => n % 2 !== 0);
console.log(firstEvenIndex); // 0
console.log(firstOddIndex); // 1
```

#### 7. some

some metodu, dizi ile kullanılır ve boolean döndürür. Bir veya daha fazla eleman kriteri karşılıyorsa true, aksi takdirde false döndürür.

```js
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const someAreEvens = numbers.some((n) => n % 2 === 0);
const someAreOdds = numbers.some((n) => n % 2 !== 0);
console.log(someAreEvens); // true
console.log(someAreOdds); // true
```

#### 8. every

every metodu some'a benzer; ancak tüm elemanların kriteri karşılaması gerekir.

```js
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const allAreEvens = numbers.every((n) => n % 2 === 0);
const allAreOdds = numbers.every((n) => n % 2 !== 0);

console.log(allAreEvens); // false
console.log(allAreOdds); // false
```

#### Egzersizler

```js
const products = [
  { product: "banana", price: 3 },
  { product: "mango", price: 6 },
  { product: "potato", price: " " },
  { product: "avocado", price: 8 },
  { product: "coffee", price: 10 },
  { product: "tea", price: "" },
];
```

1. Her ürünün fiyatını forEach kullanarak yazdırın
2. Aşağıdaki formatta ürün kalemlerini yazdırın (forEach ile)
3. Tüm fiyatların toplamını forEach kullanarak hesaplayın
4. map kullanarak fiyatlardan oluşan bir dizi oluşturun
5. Fiyatı olan ürünleri filtreleyin
6. Fiyatların toplamını almak için metot zincirleme kullanın (map, filter, reduce)
7. forEach, map, filter ve reduce arasındaki farkı açıklayın

### 12. Class (Sınıf)

JavaScript nesne yönelimli bir programlama dilidir. JavaScript'teki her şey özellikleri ve metotları olan bir nesnedir. Class, nesne oluşturmak için bir constructor (kurucu) veya nesne için bir "şablon"dur.

#### Class Tanımlama

JavaScript'te class tanımlamak için _class_ anahtar kelimesi, **CamelCase** olarak class adı ve blok kod (iki süslü parantez) gerekir.

```js
class Person {
  // kod buraya gelir
}
```

#### Class Örnekleme (Instantiation)

Bir class'tan nesne oluşturmak için _new_ anahtar kelimesini kullanır ve ardından class adını yazarız.

```js
class Person {
  // kod buraya gelir
}
const person = new Person();
console.log(person);
```

#### Class Constructor (Kurucu)

Constructor, nesnemiz için bir şablon oluşturmamıza olanak tanıyan yerleşik bir fonksiyondur. _this_ anahtar kelimesini, constructor parametrelerini class'a bağlamak için kullanırız.

```js
class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
}

const person1 = new Person("Asabeneh", "Yetayeh");
console.log(person1);
```

#### Constructor ile varsayılan değerler

Constructor fonksiyonu özellikleri, diğer normal fonksiyonlar gibi varsayılan değere sahip olabilir.

```js
class Person {
  constructor(
    firstName = "Asabeneh",
    lastName = "Yetayeh",
    age = 250,
    country = "Finland",
    city = "Helsinki",
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.country = country;
    this.city = city;
  }
}
```

#### Class Metotları

```js
class Person {
  constructor(firstName, lastName, age, country, city) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.country = country;
    this.city = city;
  }
  getFullName() {
    const fullName = this.firstName + " " + this.lastName;
    return fullName;
  }
}

const person1 = new Person("Asabeneh", "Yetayeh", 250, "Finland", "Helsinki");
console.log(person1.getFullName());
```

#### Başlangıç değerli özellikler

Bir class oluştururken bazı özelliklerin başlangıç değeri olabilir.

```js
class Person {
  constructor(firstName, lastName, age, country, city) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.country = country;
    this.city = city;
    this.score = 0;
    this.skills = [];
  }
}
```

#### getter

get metodu, nesneden değer okumamıza olanak tanır. Özelliklere doğrudan erişmek yerine getter kullanırız.

```js
class Person {
  constructor(firstName, lastName, age, country, city) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.country = country;
    this.city = city;
    this.score = 0;
    this.skills = [];
  }
  get getScore() {
    return this.score;
  }
  get getSkills() {
    return this.skills;
  }
}

const person1 = new Person("Asabeneh", "Yetayeh", 250, "Finland", "Helsinki");
console.log(person1.getScore); // getter metodunu çağırmak için parantez gerekmez
console.log(person1.getSkills);
```

#### setter

setter metodu, belirli özelliklerin değerini değiştirmemize olanak tanır.

```js
class Person {
  // ... constructor ve diğer metotlar ...
  set setScore(score) {
    this.score += score;
  }
  set setSkill(skill) {
    this.skills.push(skill);
  }
}

person1.setScore = 1;
person1.setSkill = "HTML";
```

#### Static metot

static anahtar kelimesi, bir class için statik metot tanımlar. Statik metotlar class örnekleri üzerinde çağrılmaz; class'ın kendisi üzerinde çağrılır.

```js
class Person {
  // ...
  static favoriteSkill() {
    const skills = ["HTML", "CSS", "JS", "React", "Python", "Node"];
    const index = Math.floor(Math.random() * skills.length);
    return skills[index];
  }
  static showDateTime() {
    let now = new Date();
    let year = now.getFullYear();
    let month = now.getMonth() + 1;
    let date = now.getDate();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    if (hours < 10) {
      hours = "0" + hours;
    }
    if (minutes < 10) {
      minutes = "0" + minutes;
    }
    let dateMonthYear = date + "." + month + "." + year;
    let time = hours + ":" + minutes;
    let fullTime = dateMonthYear + " " + time;
    return fullTime;
  }
}

console.log(Person.favoriteSkill());
console.log(Person.showDateTime());
```

#### Inheritance (Kalıtım)

Inheritance (Kalıtım) kullanarak üst class'ın tüm özelliklerine ve metotlarına erişebiliriz. Bu, kod tekrarını azaltır.

```js
class Student extends Person {
  saySomething() {
    console.log("Ben Person class'ının bir çocuğuyum");
  }
}

const s1 = new Student("Asabeneh", "Yetayeh", "Finland", 250, "Helsinki");
console.log(s1);
console.log(s1.saySomething());
console.log(s1.getFullName());
```

#### Metot Override (Geçersiz Kılma)

Üst class'tan tüm metotlara erişebildiğimizi gördük. Üst metotları özelleştirebilir, child class'a ek özellikler ekleyebiliriz. super() fonksiyonu, üst class'ın tüm özelliklerine erişmek için kullanılır.

```js
class Student extends Person {
  constructor(firstName, lastName, age, country, city, gender) {
    super(firstName, lastName, age, country, city);
    this.gender = gender;
  }

  saySomething() {
    console.log("Ben Person class'ının bir çocuğuyum");
  }
  getPersonInfo() {
    let fullName = this.getFullName();
    let pronoun = this.gender == "Male" ? "O" : "O";
    let info = `${fullName} ${this.age} yaşında. ${pronoun} ${this.city}'de yaşıyor, ${this.country}.`;
    return info;
  }
}
```

#### Egzersizler

##### Egzersizler Seviye 1

1. name, age, color, legs özelliklerine sahip ve farklı metotlar içeren Animal (Hayvan) class'ı oluşturun.
2. Animal class'ından Dog (Köpek) ve Cat (Kedi) child class'ları oluşturun.

##### Egzersizler Seviye 2

1. Animal class'ında oluşturduğunuz metodu override edin.

##### Egzersizler Seviye 3

1. Merkezi eğilim ölçüsünü (ortalama, medyan, mod) hesaplayan Statistics class'ı oluşturun.

### 13. Document Object Model (DOM)

HTML belgesi bir JavaScript Object (Nesne) olarak yapılandırılmıştır. Her HTML elementinin onu manipüle etmemize yardımcı olabilecek farklı özellikleri vardır.

React söz konusu olduğunda DOM'u doğrudan manipüle etmeyiz; bunun yerine React Virtual DOM (Sanal DOM) gerekli tüm değişiklikleri yapar.

Bu nedenle React kullanıyorsanız DOM'u doğrudan manipüle etmeyin. DOM'a doğrudan dokunduğumuz tek yer index.html'dir. React tek sayfalı bir uygulamadır çünkü tüm component'ler (bileşenler) index.html sayfasında render edilir ve React Uygulamasının tamamında başka bir HTML olmayacaktır.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>React App</title>
  </head>

  <body>
    <div id="root"></div>

    <script>
      const root = document.querySelector("#root");
      root.innerHTML = "<h1>30 Days Of React'e Hoş Geldiniz</h1>";
    </script>
  </body>
</html>
```

Sonucu [codepen](https://codepen.io/Asabeneh/full/vYGqQxP)'de inceleyin.

🌕 Harikasınız! Gün 1 meydan okumasını tamamladınız ve büyüklüğe giden yoldasınız. Artık bir JavaScript Ninja'sınız ve React'a dalmaya hazırsınız.

🎉 TEBRİKLER! 🎉

[<< Gün 0](../readMe.md) | [Gün 2 >>](../02_Gun_Reacta_Giris/02_reacta_giris.md)
