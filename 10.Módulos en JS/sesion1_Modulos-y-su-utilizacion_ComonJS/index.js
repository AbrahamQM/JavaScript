/************Tema 10 Sesion 1 Módulos en JS y su utilización con módulos*********/

//-------Comentado despues de exportar colocar las funciones en modulos/matematicas.js y, exportar el módulo
// function suma(a, b){
//     return a + b
// }

// function multiplica(a, b){
//     return a * b
// }

// function eleva(a, b){
//     return a ** b
// }

// function factorial(a){
//     //factorial de 5 = 5 * 4 * 3 * 2 * 1 (un nº * 1 = numero, por lo que podemos obviar el 1)
//     let factorial = 1;
//     for(let i = 2; i<=a; i++){
//         factorial *= i;
//     }
//     return factorial;
// }


// //Imaginamos que queremos obtener un factorial y mostrarlo en consola.
// const fact = factorial(5);
// console.log("El resultado de fact es:", fact)

// //**Para hacer que se ejecuten las líneas 27 y 28:
// //-debemos instalar node
// //-Desde el terminal accedemos a la carpeta donde tenemos el archivo (en este caso index.js)
// //-Ejecutamos el index con: node index.js

// //Ahora ejecutamos otras funciones:
// const sum = suma(25, 14)
// console.log("El resultado de sum es:", sum)
/****************************FIN DE EXPLICACIÓN INICIAL****************************** */

/*******Si queremos trabajar desde otro archivo, Ver explicación en : explicacion.txt*******/

//Seguimos explicando el trabajo en explicacion.txt


//********VOLVEMOS DESDE EXPLICACIÓN.TXT ----Ya hemos exportado el módulo matematicas.js
//-----------------------------Ahora importamos el módulo usando la palabra: REQUIRE
const moduloMates = require("./modulos/matematicas.js")

//Mostramos lo que incluye moduloMates
console.log(moduloMates)
/* Muestra:
{
  suma: [Function: suma], 
  multiplica: [Function: multiplica],
  eleva: [Function: eleva],
  factorial: [Function: factorial]
}
*/

//---Ahora podemos acceder a las funciones utilizando el moduloMates.Funcion_a_usar
console.log("Accedemos a moduloMates.multiplica(3, 4):", moduloMates.multiplica(3, 4)) // muestra:
//Accedemos a moduloMates.multiplica(3, 4): 12

//más ejemplos:
console.log("Accedemos a moduloMates.eleva(3, 4):", moduloMates.eleva(3, 4)) // muestra:
//Accedemos a moduloMates.eleva(3, 4): 81

//Y así podremos acceder a los métodos que tenemos definidos en el módulo matematicas.js

//OTRA FORMA DE IMPORTAR ELEMENTOS DE UN MÓDULO:
//const { elementos a importar separados por comas} = require("./modulos/matematicas.js")  Ej:
const { factorial, suma } = require("./modulos/matematicas.js")
console.log(factorial(6)) // muestra: 720
console.log(suma(6, 8)) // muestra: 14
