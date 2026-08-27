<div align="center">
  <h1> 30 Days Of React: Yüksek Düzey Bileşen (Higher Order Component)</h1>
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

[<< Gün 15](../15_Gun_Üçüncü_Taraf_Paketler/15_ucuncu_taraf_paketler.md) | [Gün 17 >>](../17_Gun_React_Router/17_react_router.md)

![30 Days of React banner](../../images/30_days_of_react_banner_day_16.jpg)

- [Yüksek Düzey Bileşen (Higher Order Component)](#yüksek-düzey-bileşen-higher-order-component)
- [Egzersizler](#egzersizler)
  - [Egzersizler: Seviye 1](#egzersizler-seviye-1)
  - [Egzersizler: Seviye 2](#egzersizler-seviye-2)
  - [Egzersizler: Seviye 3](#egzersizler-seviye-3)

# Yüksek Düzey Bileşen (Higher Order Component)

Yüksek düzey bileşen (Higher Order Component) terimi, JavaScript'teki yüksek düzey fonksiyon (higher order function) kavramına benzerdir. JavaScript'te yüksek düzey fonksiyon; başka bir fonksiyonu parametre olarak alan veya başka bir fonksiyon döndüren fonksiyondur.

Yüksek düzey fonksiyona benzer şekilde, yüksek düzey bileşen bir bileşen alır ve başka bir bileşen döndürür.
Bu tanım örneklerle daha anlamlı hale gelecektir. Daha iyi anlamak için aşağıdaki örneğe bakın.

```js
// Yüksek Düzey Bileşen (HOC) yazmanın bir yolu
import React from 'react'
const higherOrderComponent = (Component) => {
  return (props) => {
    return <Component {...props} />
  }
}
```

Çoğu zaman üçüncü taraf kütüphaneler yüksek düzey bileşen kullanır. Örneğin redux, react-router-dom ve material-ui yüksek düzey bileşen kullanır.

```js
import React from 'react'

const Button = ({ onClick, text, style }) => {
  return (
    <button onClick={onClick} style={style}>
      {text}
    </button>
  )
}

const buttonWithStyle = (CompParam) => {
  const buttonStyles = {
    backgroundColor: '#61dbfb',
    padding: '10px 25px',
    border: 'none',
    borderRadius: 5,
    margin: 3,
    cursor: 'pointer',
    fontSize: 18,
    color: 'white',
  }
  return (props) => {
    return <CompParam {...props} style={buttonStyles} />
  }
}
const NewButton = buttonWithStyle(Button)

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Button text='Stilsiz' />
        <NewButton text='Stillendirilmiş Buton' />
      </div>
    )
  }
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
```

buttonWithStyle yüksek düzey bileşenini bileşene ek olarak daha fazla parametre alacak şekilde geliştirelim.

```js
import React from 'react'

const Button = ({ onClick, text, style }) => {
  return (
    <button onClick={onClick} style={style}>
      {text}
    </button>
  )
}

const buttonWithStyles = (CompParam, name = 'default') => {
  const colors = [
    {
      name: 'default',
      backgroundColor: '#e7e7e7',
      color: '#000000',
    },
    {
      name: 'react',
      backgroundColor: '#61dbfb',
      color: '#ffffff',
    },
    {
      name: 'success',
      backgroundColor: '#4CAF50',
      color: '#ffffff',
    },
    {
      name: 'info',
      backgroundColor: '#2196F3',
      color: '#ffffff',
    },
    {
      name: 'warning',
      backgroundColor: '#ff9800',
      color: '#ffffff',
    },
    {
      name: 'danger',
      backgroundColor: '#f44336',
      color: '#ffffff',
    },
  ]
  const { backgroundColor, color } = colors.find((c) => c.name === name)

  const buttonStyles = {
    backgroundColor,
    padding: '10px 45px',
    border: 'none',
    borderRadius: 3,
    margin: 3,
    cursor: 'pointer',
    fontSize: '1.25rem',
    color,
  }
  return (props) => {
    return <CompParam {...props} style={buttonStyles} />
  }
}

const NewButton = buttonWithStyles(Button)
const ReactButton = buttonWithStyles(Button, 'react')
const InfoButton = buttonWithStyles(Button, 'info')
const SuccessButton = buttonWithStyles(Button, 'success')
const WarningButton = buttonWithStyles(Button, 'warning')
const DangerButton = buttonWithStyles(Button, 'danger')

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Button text='Stil Yok' onClick={() => alert('Henüz stillendirilmedim')} />
        <NewButton
          text='Stillendirilmiş Buton'
          onClick={() => alert('Ben varsayılan stilim')}
        />
        <ReactButton text='React' onClick={() => alert('React rengine sahibim')} />
        <InfoButton
          text='Bilgi'
          onClick={() => alert('Bilgi rengiyle stillendirildim')}
        />
        <SuccessButton text='Başarılı' onClick={() => alert('Ben başarılıyım')} />
        <WarningButton
          text='Uyarı'
          onClick={() => alert('Sizi birçok kez uyarıyorum')}
        />
        <DangerButton
          text='Tehlike'
          onClick={() => alert('Ah hayır, geri yükleyemezsiniz')}
        />
      </div>
    )
  }
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
```

Yukarıdaki örnek, Yüksek Düzey Bileşenin bir kullanım durumudur. Ancak kullanım alanı yalnızca basit bir butonu şekillendirmekle sınırlı değildir. Çok daha fazla kullanım alanı vardır; bileşeni yeniden kullanmamıza ve bir bileşeni stil ve işlevsellikle geliştirmemize olanak tanır. İlerleyen bölümlerde React Router'ı ele alacağız ve HOC kullanacağız; bir bileşenin başka bir bileşeni sardığını gördüğünüzde şaşırmayacaksınız.

# Egzersizler

## Egzersizler: Seviye 1

1. Yüksek düzey fonksiyon nedir?
2. Yüksek Düzey Bileşen nedir?
3. Yüksek düzey fonksiyon ile yüksek düzey bileşen arasındaki fark nedir?
4. Yüksek düzey bileşen bir bileşeni geliştirmemizi sağlar. (Doğru mu Yanlış mı?)

## Egzersizler: Seviye 2

1. Tüm input türlerini yönetebilen bir yüksek düzey bileşen oluşturun.

## Egzersizler: Seviye 3

Yakında

🎉 TEBRİKLER! 🎉

[<< Gün 15](../15_Gun_Üçüncü_Taraf_Paketler/15_ucuncu_taraf_paketler.md) | [Gün 17 >>](../17_Gun_React_Router/17_react_router.md)
