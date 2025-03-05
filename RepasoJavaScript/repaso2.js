/*
    MATRICES
*/
// constructor de matrices
const arr = Array();
// or 
// let arr = new Array();
console.log(arr); // []

// usando corchetes
const arr2 = [];
console.log(arr2); // []

const numbers = [0, 3.14, 9.81, 37, 98.6, 100] // array of numbers
const fruits = ['banana', 'orange', 'mango', 'lemon'] // array of strings, fruits
const vegetables = ['Tomato', 'Potato', 'Cabbage', 'Onion', 'Carrot'] // array of strings, vegetables
const animalProducts = ['milk', 'meat', 'butter', 'yoghurt'] // array of strings, products
const webTechs = ['HTML', 'CSS', 'JS', 'React', 'Redux', 'Node', 'MongDB'] // array of web technologies
const countries = ['Finland', 'Denmark', 'Sweden', 'Norway', 'Iceland'] // array of strings, countries

// Mostrar por pantalla los arrays y el tamaño de este
console.log('Numbers: ',numbers);
console.log('Numero de Numbers: ',numbers.length);
console.log('Fruits: ',fruits);
console.log('Numero de fruits: ',fruits.length);
console.log('vegetables: ',vegetables);
console.log('Numero de vegetables: ',vegetables.length);
console.log('AnimalProducts: ',animalProducts);
console.log('Numero de AnimalProducts: ',animalProducts.length);
console.log('webTechs: ',webTechs);
console.log('Numero de webTechs: ',webTechs.length);
console.log('countries: ',countries);
console.log('Numero de countries: ',countries.length);

// Podemos crear una matriz con diferentes datos dentro de la misma
const arr3 = [
    'Sergio', // Strings
    26, // Number
    { pais: 'España', ciudad: 'León'}, // array
    { skills: ['HTML', 'CSS','JS','React']} // array
];
console.log(arr3);

// Para acceder a cualquier dato dentro del array haremos uso de los indices. Como los arrays empiezan desde el 0 hasta el tamaño -1 el primer valor
// del array se encontrará en el indice 0.
console.log(numbers[2]); // Con esto accederemos al valor numero 3 de array que es 9.81
// Si queremos modificar el valor de dicha posición haremos lo siguiente:
numbers[2] = 10.82; // Le hemos dado otro valor a la posición de array.
console.log(numbers[2]);

/*
    Metodos para manipular arrays
*/
// Array
const arr4 = Array(3); // Creamos un array. El valor que indiquemos entre parentesis indicará el tamaño del mismo.
console.log(arr4);

// Fill (relleno)
arr4.fill('X'); // Rellenamos el array con el valor que le indiquemos, en este caso con 'X'
console.log(arr4); // ['X','X','X'] esto será lo que veamos dentro.

// Concat: Para concatenar dos arreglos.
const PrimerArreglo = ['1','2','3'];
const SegundoArreglo = ['4','5','6'];
const TercerArrerglo = PrimerArreglo.concat(SegundoArreglo);
console.log(TercerArrerglo); // ['1','2','3','4','5','6']

// lenght : Longitud del array.
console.log('Longitud: ',TercerArrerglo.length);

// indexOf: Para comprobar si un indice existe dentro de la matriz, si existe devuelve el valor dentro de la matriz, si no existe devuelve -1
console.log(TercerArrerglo.indexOf('4')); // Existe en la posición 3
console.log(TercerArrerglo.indexOf('0')); // No existe entonces devuelve -1

// join: Para unir elementos de la matriz. El argumento que indiques unirá la matriz y devolvera todo los elementos como una cadena.

const numeros = [1,2,3,4,5];
console.log(numeros.join());

const webTechs2 = [
    'HTML',
    'CSS',
    'JS',
    'React',
    'MongDB'
];
console.log(webTechs2);
console.log(webTechs2.join(' # '));

// Slice : Usado para cortar elementos de un rango que le indiquemos. Toma dos parametros, posición inicial y final. No incluye la posición final.
/*
    En estos tres casos el resultado será el mismo. Nos mostrará todos los resultados
    console.log(numeros.slice());
    console.log(numeros.slice(0));
    console.log(numeros.slice(0, numeros.length));
*/
console.log(numeros.slice(0,2)); // Mostrará los elementos [1,2]

// Splice : Toma tres parámetros: Posición inicial, número de veces que se quitará y número de elementos que se agregarán.
// Este método funciona haciendo los cambios a la matriz, probando usandolo dentro del console.log() da fallos.

const numeros2 = [1,3,4,5,6];
//console.log(numeros2.splice()); // Elimina todos los elementos.
//console.log(numeros2.splice(0,1));
console.log(numeros2);
numeros2.splice(1,0,2);
console.log(numeros2);
numeros2.splice(3,3,7,8,9);

// Push: Metodo para añadir elementos al array. Estos se añaden al final de la matriz
// unshift: Metodo para añadir elementos al array. Estos se añaden al inicio de la matriz.
const numeros3 = [1,2,3,4,5,6];
numeros3.unshift(0);
numeros3.push(7);
console.log(numeros3);

// Pop: Elimina el ultimo valor del array.
// shift: Elimina el primer valor del array.
numeros3.shift();
numeros3.pop();
console.log(numeros3);


