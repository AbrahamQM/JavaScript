/***********Tema 5 sesion 3 Métodos de numbers y límites en JS ************/

//Declarar usando prototipo (pegado en la sesion 1 de este tema ya que es una forma de declaración)
let x = new Number(3);
console.log(typeof(x));
console.log(x); // muestra Number 3 {}

//----Obtener valores reales a partir de literales 
//Operador .valueOf()

let str = new String("Soy un string");
console.log(str); // Muestra: { [Iterator] 0: 'S', 1: 'o', 2: 'y', 3: ' ', 4: 'u', 5: 'n', así hasta la última letra}
// para obtener el valor literal:
console.log(str.valueOf()); //Muestra: soy un string



//---- Infinity--- NaN (Not a Number)
let n = Number('adios');
console.log(n); // muestra NaN

//para evitarlos podemos usar isNaN(variable) que nos dirá si la variable es NaN o no
console.log(isNaN(n)); // devuelve true

//-de la misma manera intentamos dividir entre 0:
let numerador = 19;
let denominador = 0;
console.log(numerador / denominador); // devuelve Infinity (aunque no se puede dividir por 0,
// si dividimos un nuero entre 0.00000000001, va a dar un numero enorme, que aumentará cuanto mas 
// pequeño sea el denominador) "Teoría matemática"

//-o tambien si dividimos por valor nulo:
denominador = null;
console.log(numerador / denominador); // tambien devuelve Infinity


//---- Convertir strings a valores númericos con Number, parseInt y, parseFloat:

//-Number
let num = "5.89";
console.log(typeof(num)); // devuelve string

let num2 = 17.2;
console.log(num + num2); //al sumarlos devuelve 5.8917.2 concatenando ambas variables como strings

console.log(Number(num) + num2); // ahora si devuelve el valor esperado: 23.09

//-parseInt
console.log(parseInt(num)); //muestra 5, obviando todos los decimales(sin redondearlo)


//-parseFloat
console.log(parseFloat(num)); // muestra el valor completo: 5.89


//----Trabajar con Números Hexadecimales (base 16) "No usan coma flotante"
let numHex = '0x3a5b7' // Los números hexadecimales siempre empiezan por 0x

//obtenemos el nº usando parseInt(variable, base) TAMBIEN PODEMOS OBVIAR LA BASE
console.log(parseInt(numHex)); // devuelve  239031
console.log(parseInt(numHex, 16)); // devuelve  239031
console.log(parseInt(numHex, 10)); // devuelve  0 porque lo que hay despues del 0 no es un número, si pusiéramos 8 devolvería 8

console.log(parseInt(numHex) / 5); //asi podemos trabajar con nº hexadecimal, devuelve 47806.2


// Valores máximo, mínimo y, de precisión en Javascript según el nº de bits que usa para la variable

let min_precision = Number.EPSILON; //mímima diferencia de paso de un número al siguiente (precisión)
console.log(min_precision); // devuelve 2.220446049250313e-16 que es 2.2... * 10(elevado a -16)
//0.000000000000000222044604...

let min_valor_JS = Number.MIN_VALUE; // mínimo valor que podemos obtener en JS
console.log(min_valor_JS); // muestra 5e-324 que es 5 * 10(elevado a -324)
//0.(323 veces 0)5

let max_valor_JS = Number.MAX_VALUE;// máximo valor que podemos obtener en Js
console.log(max_valor_JS); // devuelve 1.7976931348623157e+308 que es 1.79... * 10(elevado a 308)
//179(305 veces 0)