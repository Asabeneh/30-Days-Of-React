# 간단한 자바스크립트 내용

#### *자바스크립트를 적용하는 방법들*

1. Inline script
2. Internal script
3. External script
4. Multiple External scripts

Inline script
- alert같은 built-in function같이 html에 자연스레 들어가있음

Internal script
- <script>자바스크립트 내용</script> 이렇게 html에 끼워넣는다

External의 경우
- JS파일을 따로 만들어서 넣는다
- <script src="자바스크립트 파일 경로"></script>

## 1. 변수

const 와 let (~~var은 죽었어! 더이상 없어!~~)

const는 한번 선언하면 값이 안바뀜(constant == 상수)

```js
let firstDay = "첫째 날"
firstDay = "둘째 날"

const first_day = "첫째 날" (위에서 firstDay가있어 중복 변수 안됨)
first_day = "둘째 날"
> Uncaught TypeError: Assignment to constant variable. (값 변경 불가능)
```

## 2. Data types

## 3. Arrays

```js
const arr1 = Array()	// 보통 const로 배열을 선언한다고 한다
let arr2 = new Array()
const arr3 = []

arr1
> []
arr2
> []
```

```js
const perfectArr2 = [
    '승민',
    25,
    true,
    {country: 'Korea', city: 'Seoul'},
    {classes: ['a','b','c','d']}
    ]
// 여러 데이터 타입도 넣을 수 있음
```

