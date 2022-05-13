/*
Crea un archivo JS que contenga las siguientes líneas
*/

//- Una variable que contenga tu altura en centímetros (entero)
let altura = 176;

// - Una variable que contenga tu altura en metros (número de coma flotante)
let altura_m = 1.76;

// - Una variable que contenga tu peso en kilogramos (número de coma flotante)
let peso = 77.8;

// - Una variable que contenga tu altura en metros redondeada hacia arriba
let alturaRedondeada = altura_m.toFixed(1);
console.log(alturaRedondeada); //Muestra 1.8

// - Una variable que contenga tu peso en kilogramos redondeado hacia abajo
let pesoRedondeado = Math.floor(peso);
console.log(pesoRedondeado); // muestra 77

// - Una variable que contenga si "el máximo valor que se puede obtener en Javascript + 1" es igual al máximo valor que se puede obtener en Javascript
let valor = (Number.MAX_VALUE + 1) === Number.MAX_VALUE;
console.log(valor); // muestra true