/*************Tema 5 sesion 2 Operaciones, precisión de numeros en strings y, redondeo ****************/

//******Ppales Operaciones Aritméticas.
let a = 3.5;
let b = 4.8;

//Suma
console.log(a + b);

//Resta
console.log(a - b);

//Multiplicación
console.log(a * b);

//División
console.log(a / b);



//********Representar los números como cadenas de texto.

//Usaremos el método toString()
console.log(typeof(a)); // muestra number
let a_str = a.toString();

console.log(typeof(a_str)); //muestra string
console.log(a_str); // sigue siendo 3.5

//******** Redondeo de números decimales

let c = 3.3;
let d = c * 3;

console.log(d); // muestra 9.899999999999999 pero debería ser 9.9

//--Ahora redondeamos decimales con los métodos .toFixed() y .toPrecision()

// .toFixed(nº de decimales) ---Limita el nº de decimales al valor que le indiquemos 
console.log(d.toFixed(0)); // Muestra 10
console.log(d.toFixed(2)); // Muestra 9.90

console.log(typeof(d)); //muestra number
console.log(typeof(d.toFixed(2))); // OJO LO CONVIERTE A string!!!

let e = 1895.12325471;
console.log(e.toFixed(2)); // muestra 1895.12
let f = 9251687316621
console.log(f.toFixed(2)); // muestra 9251687316621.00


// .toPrecision(nº de dígitos) ---Realiza un redondeo científico con el número de dígitos que indiquemos
console.log(e.toPrecision(6)); // Muestra 1895.12
console.log(e.toPrecision(8)); // Muestra 1895.1233
console.log(e.toPrecision(2)); // Muestra 1.9e+3 que significa 1.9 * (10 elevado a 3) que es 1900

console.log(typeof(e.toPrecision(2))); // OJO LO CONVIERTE A string!!!