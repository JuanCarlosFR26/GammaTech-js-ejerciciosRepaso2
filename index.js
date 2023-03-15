// JS Fundamentals Repaso

// Ejercicio 1
// Escribe un función que acepte un array de números y devuelva la suma de los números impares.

// Ejercicio 2
// Escribe una función que acepte un array e imprima por consola cada elemento del array, pero empezando por el final.

// Ejercicio 3
// Escribe una función que acepte un array y un número. La función debe imprimir por consola un elemento cada n posiciones. Ejemplo:

// const array = ["apple", "orange", "banana", "mango", "watermelon", "grape", "peach"];

// getEachElement(array, 2) // "orange" "mango" "grape"
// getEachElement(array, 3) // "banana", "grape"
// Ejercicio 4
// Escribe una función que acepte dos argumentos: el primero será un objeto, el segundo una key. Si el objeto tiene dicha key, deberás borrarla y devolver true; si no, deberás devolver false.
// Ejemplo:

// const myObject = {
// 	name: "Paco",
// 	age: 28
// }

// deleteProp(myObject, "name") // true
// console.log(myObject) // { age: 28 }

// deleteProp(myObject, "city") // false
// console.log(myObject) // { name: "Paco", age: 28 }
// Ejercicio 5
// Escribe una función que acepte un array bidimensional e imprima por consola cada elemento presente en los arrays internos:

// const arr = [[1, 2], [3, 4, 5, 6], [7, 8, 9], [0]];

// printElements(arr) // 1 2 3 4 5 6 7 8 9 0 
// Ejercicio 6
// Tienes el siguiente array:

// const drinks = [
// 	{
// 		name: "Cerveza",
// 		price: "3.50",
// 		ingredients: ["cebada", "lúpulo"]
// 	},
// 	{
// 		name: "Coca Cola",
// 		price: "3.00",
// 		ingredients: ["desconocido"]
// 	},
// 	{
// 		name: "Vino",
// 		price: "5.50",
// 		ingredients: ["uvas", "taninos"]
// 	},
// 	{
// 		name: "Vodka",
// 		price: "7.00",
// 		ingredients: ["patata", "agua", "etanol"]
// 	},
// 	{
// 		name: "Whiskey",
// 		price: "7.00",
// 		ingredients: ["trigo", "agua", "etanol"]
// 	},
// 	{
// 		name: "Zumo de naranja sin azúcar",
// 		price: "4.75",
// 		ingredients: ["naranjas", "aspartamo", "maltitol", "xilitol"]
// 	},
// ]
// Escribe una función que itere por el array y, para cada elemento, imprima en consola el siguiente mensaje:

// "La bebida <bebida> tiene un precio de <precio> y los siguientes ingredientes: <ingrediente>, <ingrediente>, <ingrediente> (etc.)"
// Ejercicio 7
// Escribe una función que reciba un array. Este array contendrá, a su vez, varias arrays con dos valores cada una:

// [ ["name", "Pedro"], ["job", "Megateacher"], ["age", 35], ["city", "Melilla"], ["isMarried", false] ]
// La función debe devolver un objeto que tenga como key el primer elemento de cada array, y como value, el segundo:

// {
// 	"name": "Pedro",
// 	"job": "Megateacher",
// 	"age": 35,
// 	"city": "Melilla",
// 	"isMarried": false
// }
// Ejercicio 8
// Escribe una función que acepte un array de strings y devuelva otro array con los elementos del primer array que tengan menos de 6 letras:

// const arr = ["casa", "reloj", "carótida", "coco", "elemento", "GammaTech", "dado"];

// getSmallWords(arr) // ["casa", "reloj", "coco", "dado"]
// Ejercicio 9
// Escribe una función que reciba un objeto y convierta cada par key / value en un array bidimensional:

// const myObj = {
// 	name: "Pedro",
// 	age: 35
// }

// getProps(myObj) // [ ["name", "Pedro"], ["age", 35] ]
// Ejercicio 10
// Escribe una función que acepte un número y un substractor (otro número). Mientras que el número sea mayor que 0, debes restarle el substractor. Debes devolver el número tal y como ha quedado despues de las restas. No puedes usar un bucle for:

// substract(10, 3) // -2
// substract(5, 1) // 0