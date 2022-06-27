/*
    Objeto matemático (SUS PROPIEDADES Y MÉTODOS)
*/
const PI = Math.PI // Declaramos la constante PI con el valor de PI
console.log(PI); // Mostramos por consola la variable PI

//Metodos de rendondeo de la función Math
console.log(Math.round(PI)); // Con round redondeas a la baja si el siguiente decimal es menor a 5  y a la alza si es mayor o igual 5, con PI = 3.141592653589 se redondea a 3 

console.log(Math.round(9.81)); // Esta prueba es para mostrar el redondeo a la alza, como es 9,81 se pasa a 10 

console.log(Math.floor(PI)); // Con floor siempre se redondea a la baja independientemente del valor de los decimales

console.log(Math.ceil(PI)); // Con ceil siempre se redondea a la alza, independientemente del valor de los decimales

console.log(Math.min(-5,3,20,25,5)); // Con min al pasarle un conjunto de numeros, este tomará el de menor valor, en este caso al haber un valor negativo este será tomando

console.log(Math.max(-5,3,20,25,5)); // Con max al pasarle un conjunto de numeros, este tomará el de mayor valor, en este caso será tomando como valor el 25

console.log(Math.abs(-15)); // Con abs el valor que le indiquemos lo pasará a absoluto, un positivo seguirá positivo y un negativo pasará a positivo

console.log(Math.sqrt(200)); // la función sqrt devuelve la raiz cuadrada del número que le indiquemos.

console.log(Math.pow(3,2)); // La base elevada a la exponente siendo pow(base, exponente)

console.log(Math.E); // Representa la base de los algoritmos naturales, e, aproximadamente 2,718

console.log(Math.log(2)); // Devuelve la base neutral de un número (base e)

console.log(Math.log(10));

console.log(Math.LN2); // Representa el algoritmo natural de 2, aproximadamente 0,693

console.log(Math.LN10); //Representa el algoritmo natural de 10, aproximadamente 2,302

Math.sin(0); // Devuelve el seno de un número

Math.sin(60); // Devuelve el seno de un número

Math.cos(0); // Devuelve el coseno de un número

Math.cos(60); // Devuelve el coseno de un número

console.log(Math.random()); // El método random, nos devolverá un valor aleatorio entre 0 y 0,99999999

// Si queremos un valor distinto aleatorio tendremos que hacer calculos con este método, ya sea multiplicar si valor por otro, o pudiendo
// usar los otros métodos para generar un valor.

// Aquí unos ejemplos:
const valor = Math.random();

console.log(valor * 5);

console.log(Math.floor(valor * 5));

console.log(Math.ceil(valor * 10));
/**********************************/ 

/* 
    Métodos de cadena

    length: devuelve el número de caracteres de una cadena incluido los espacios.
    Este método accede al indice de la cadena, este empieza en el 0. Aunque la cadena tenga un valor de 10 caracteres, estos van del 0 al 9

*/ 
let cadena = 'Hola a todos me llamo sergio';
let lista = 'España, Noruega, Finlancia, Francía, Alemania';
let js = 'JavaScript';

console.log(js.length);

let firtname = 'Sergio';

console.log(firtname.length);

//Probemos a acceder a distintos caracteres de las cadenas anteriores.

let PrimerLetra = js[0];
console.log(PrimerLetra); // Nos mostrará la letra J
let SegundaLetra = js[1]; // Para referirnos a un indice especifico usaremos los corchetes[]
let TercerLetra = js[2];

console.log('PrimerLetra: '+PrimerLetra+' '+'SegundaLetra: '+SegundaLetra+' '+'TerceraLetra: '+TercerLetra)

let Mayus = js.toUpperCase(); // toUpperCase transforma las letras de la cadena en Mayusculas.
console.log(Mayus);

let Minus = js.toLowerCase(); // toLowerCase transforma las letras de la cadena en Minusculas.
console.log(Minus);

let substraer = js.substring(0,4); // Toma dos argumentos, del indice primero y final, pero no se incluye el indice del final.
console.log(substraer); // Estamos extreyendo los 4 primeros caracteres, indicamos que empiece con el 0 = J y finalice en 4 = S, pero mostrará 'Java'.
                        // este metodo substring hace un lenght - 1 al final de forma predefinida.
/* El metodo split divide la cadena en un lugar específico, esto quiere decir que si no le indicamos ningun argumento al metodo este creara un array con valor unico 
   que será la cadena en cuestión.

   Si la cadena es una palabra unicamente, si indicamos split('') esta creará un array en el que cada letra ocuperá un hueco del array.
   Si la cadena es de una frase/oración, tendremos que indicar split(' ') para que cada palabra ocupe un hueco del array.
   Si la cadena es un conjunto de elementos separados por comas a modo de lista, indicaremos split(',') para que nos cree un array de cada elemento.
*/
console.log(js.split()); // Array de un solo elemento.
console.log(js.split('')); // Array con cada letra de la variable ocupando un hueco.
console.log(cadena.split(' ')); // Array con cada palabra de la variable ocupando un hueco.
console.log(lista.split(',')); // Array con cada palabra de la lista ocupando un hueco.

// Usamos trim(), para quitar los espacios iniciales y finales de la cadena. Si es cadena compleja usamos trim(''), y si es simple trim().
let QuitarEspacioFin = '  Aqui se quita el espacio final ';
console.log(QuitarEspacioFin);
console.log(QuitarEspacioFin.trim(''));

// Usamos includes() para comprobar si una cadena contiene el argumento que nosotros le pasemos, si existe da un valor true, en caso contrario false.
// Este metodo es case sensitive, es decir, a de estar el argumento perfecto, si la palabra es igual pero con una minuscula dará false.
console.log(cadena.includes('Sergio'));
console.log(cadena.includes('sergio'));

// Usamos replace() para reemplazar una cadena antigua por una nueva, primero le pasamos el elemento antiguo, y después el nuevo.
// Ej. cadena.replace(oldcadena, newcadena): Este metodo tambien el case sensitive.
console.log(cadena.replace('sergio', 'juan'));

// Usamos charAt() para tomar el valor del indice.
let letra = cadena.length - 1;
console.log(cadena.charAt(0));
console.log(cadena.charAt(letra))
// Usamos charCodeAt() para conseguir el codigo char del valor del indice que le indiquemos.
console.log(cadena.charCodeAt(0));
console.log(cadena.charCodeAt(letra));

// Usamos indexOf() para conseguir la primera posición donde exita el elemento que le pasemos, este comprobará si existe, en caso de no existir no devolverá -1.
// 
let NewCadena = '30 Dias de curso de JavaScript';
console.log(NewCadena.indexOf('D')); // Devolverá el valor 3 que es donde empieza el elemento.
console.log(NewCadena.indexOf('Dias')); // Devolverá el valor 3 que es donde empieza el elemento indicado.
console.log(NewCadena.indexOf('c')); // aqui devuelve el valor 11

// lastIndexOf() usa la misma logica que indexOf pero este nos dará el ultima posición donde aparezca el elemento dado. En caso de no encontrarse nos devolverá -1.
console.log(NewCadena.lastIndexOf('c')); // en cambio en este caso devuelve el valor 25

// Usamos concat() para unir varios elementos.
let string = '30';
console.log(string.concat('Days','Of','JavaScript'));

// Usamos startsWith() o endsWith() para comprobar si el argumento que le pasamos coincide con le inicio de la cadena o el final de la cadena.
// En caso de coincidir nos devolverá el valor booleano true, en caso de no coincidir nos devolverá el valor booleano false.

console.log(cadena.startsWith('Hola')); // Devuelve true
console.log(cadena.startsWith('hola')); // Devuelve false
console.log(cadena.endsWith('sergio')); // Devuelve true
console.log(cadena.endsWith('Sergio')); // Devuelve false

// search(): le pasamos un argumento de busqueda y este nos devolverá el índice de la primera coincidencia.
console.log(cadena.search('todos')); // indice 7

// match(): se le puede pasar el argumento de forma normal, o con un patrón de expresión. Si existe una coincidencia este devolverá una matriz, de lo contrario un
// valor nulo.

// Un patrón de expresión se indica de la siguiente manera.
let patron = 'love';
let patterOne = /love/;
let patterTwo = /love/gi; // el atributo 'g' sirve para que busque en todo el texto, el atributo 'i' no distingue entre mayusculas y minusculas.

let cadena2 = 'I love JavaScript. If you do not love JavaScript what else can you love.';
console.log(cadena2.match(patron));
console.log(cadena2.match(patterOne));
console.log(cadena2.match(patterTwo));

// repeat(): le pasamos un numero como argumento y este repetirá la cadena tantas veces como le indiquemos.
console.log(cadena.repeat(2)); // Aparecerá esto: Hola a todos me llamo sergioHola a todos me llamo sergio

/* 
    Comprobación de datos y conversión.
*/
let num = 0;
let afirmativo = true;
const Objeto = new Object();
console.log(typeof cadena); // string
console.log(typeof cadena2); // string
console.log(typeof num); // number
console.log(typeof afirmativo); // boolean
console.log(typeof Objeto); // object

// Para poder convertir un tipo de dato a otro tipo de dato tendremos que usar los siguientes metodos:
/*
    -parseInt();
    -parseFloat();
    -Number();
    - '+' signo.
    - str();
*/
// Cualquier número dentro de comillas, es un numero de cadena. Si queremos pasar un numero_cadena a número usaremos lo siguiente:
let num1 = '10';
let num2 = '9.81';
let numInt = parseInt(num1);
let numInt2 = Number(num1);
let numInt3 = +num1;
let numFloat = parseFloat(num2);
let numFloat2 = Number(num2);
let numFloat3 = +num2;
console.log(num1); // string
console.log(numInt2); // convertido con Number()
console.log(numInt); // convertido con parseInt()
console.log(numInt3); // convertido con +
console.log(num2);  // string
console.log(numFloat); // convertido con numFloat()
console.log(numFloat2); // convertido con Number()
console.log(numFloat3); // convertido con +
// Con parseInt podemos transforma un número flotante (9.10) a numero entero.
