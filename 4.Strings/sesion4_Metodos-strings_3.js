/************************Sesion4: Métodos de cadenas de texto 3*****************************/

//---- Expresiones regulares:
//Ver https://regexr.com para profundizar en expresiones regulares.

let texto_largo = "Tito no es un mono cualquiera. A Tito no le gusta trepar por los árboles y odia comer plátanos. Él prefiere pasear por el bosque, oler las flores y recoger las nueces que se caen de los árboles.";


//**Buscar cuantas veces aparece una palabra usando:
//  nombreCadena.match(/Lo que queremos buscar/g);
console.log(texto_largo.match(/no/g)); // devuelve: [ 'no', 'no', 'no', 'no' ]

//y si añadimos .lenght:
console.log(texto_largo.match(/no/g).length); // devuelve 4 --refiriendose al número de veces


//**Averiguar si existe una palabra o caracter en el string usando:
// nombreCadena.includes("texto a buscar")
console.log(texto_largo.includes("Tito")); //devuelve: true
console.log(texto_largo.includes("perro")); //devuelve: false


//** Averiguar si un texto empieza o termina con una palabra o caracter:

//usando startsWith("lo que queremos buscar")
console.log(texto_largo.startsWith("Ti")); // devuelve: true
console.log(texto_largo.startsWith("Timoteo")); // devuelve: false


//usando endsWith("lo que queremos buscar")
console.log(texto_largo.endsWith("árboles.")); // devuelve: true
console.log(texto_largo.endsWith("árboles")); // devuelve: false