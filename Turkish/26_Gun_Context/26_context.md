<div align="center">
  <h1> 30 Days Of React: Context</h1>
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

[<< Gün 25](../25_Gun_Ozel_Hooklar/25_ozel_hooklar.md) | [Gün 27 >>](../27_Gun_useRef/27_useref.md)

![30 Days of React banner](../../images/30_days_of_react_banner_day_26.jpg)

# Context

Context, bileşen ağacı boyunca her düzeydeki her alt bileşene prop'ları manuel olarak aktarmak zorunda kalmadan veri geçirmemizi sağlar.

React'te veriler prop'lar aracılığıyla yukarıdan aşağıya (ebeveynden çocuğa) aktarılır; ancak bu yöntem, bir uygulama içindeki pek çok bileşenin ihtiyaç duyduğu bazı prop türleri (örneğin yerel dil tercihi, UI teması) için zahmetli olabilir. Context, ağacın her seviyesinden bir prop'u açıkça geçirmek zorunda kalmadan bu tür değerleri bileşenler arasında paylaşmanın bir yolunu sunar.

## Context Ne Zaman Kullanılır?

Context, geçerli kimliği doğrulanmış kullanıcı, tema veya tercih edilen dil gibi, bir React bileşen ağacı için "global" sayılabilecek verileri paylaşmak amacıyla tasarlanmıştır. Örneğin aşağıdaki kodda Button bileşenini stillemek için bir "tema" prop'unu elle aktarıyoruz.

Yukarıdaki metin herhangi bir değişiklik yapılmadan [React belgeleri](https://reactjs.org/docs/context.html)'nden alınmıştır.

React belgelerinde context hakkında oldukça iyi bilgiler yer almaktadır; [React belgelerine](https://reactjs.org/docs/context.html) göz atabilirsiniz.

# Egzersizler

🎉 TEBRİKLER! 🎉

[<< Gün 25](../25_Gun_Ozel_Hooklar/25_ozel_hooklar.md) | [Gün 27 >>](../27_Gun_useRef/27_useref.md)
