/*******************Tema 5 sesion 1 Números y precisión en JS ******************/

//************Declaración de variables numéricas:
//Número entero:
let a  = 5;
console.log(a);


//Números con decimales o coma flotante:
let b = 0.1;
console.log(b);

//Declarar usando prototipo
let x = new Number(3);
console.log(typeof(x)); // muestra object
console.log(x); // muestra Number 3 {} 
console.log(a + x); // muestra 5, se sigue comportando como un número

//***********************************Precisión: 
let c = 0.2;

console.log(b + c); // Muestra 0.30000000000000004 pero debería ser 0.3
// esto pasa por cómo se almacenan en memoria las variables también pasa con las multiplicaciones asi:
console.log(b * c); // muestra 0.020000000000000004 y debería ser 0.02
//Ojo, sucede lo mismo con las restas y divisiones. 

//Indiferentemente de la operación, puede pasarnos o no, dependiendo de los valores que tengamos, 
//así que mejor no fiarse.


//TRUCO PARA OBTENER EL RESULTADO REAL, el profe usa el siguiente truco aunque hay más formas de hacerlo:

//utilizar el operador round() que redondea por debajo sin utilizar decimales
console.log(Math.round(b + c)) // muestra 0, 
//sin embargo en la salida(parte inferior del VSC), si lo hacemos in el console.log:
Math.round(b + c); // muestra: 0.020000000000000004

//EL TRUCO ES multiplicar * 100 el resultado de la operación y dividirlo a posteriori:
console.log(Math.round((b * c)*100)/100); // ahora si obtenemos el resultado esperado 0.02
// o con la suma:
console.log(Math.round((b + c)*100)/100); // muestra el resultado esperado 0.3

