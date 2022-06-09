/***********Tema 10 sesion 2 Módulos con ES6 (modernos)****************/


//1º hemos inicializado Node con "npm init -y" 

//2º modificamos el archivo package.json añadiendo la línea 6 "type" e indicandole que vamos a utilizar "module"
//para que nos acepte ES6

//3º Creamos la carpeta modulos y dentro de esta los módulos que queramos VER:
// matemaicas.js -> Para ejemplo de "name export"
// literatura.js -> Para "Default export" (a partir de ln 35 de este archivo)

////////////Trabajamos con matematicas.js para probar exportar por nombre

//4º EN LUGAR DE EXPORTAR AL FINAL DEL ARCHIVO CON module.exports = { elementos a exportar }
//Vamos a colocar la palabra export antes de cada definición

//5.1º Importamos lo que queramos dentro del módulo con:
// import { elementos a importar} from "ruta"
import { suma, eleva , nombre } from "./modulos/matematicas.js"

const sum = suma(10, 7)
console.log(sum) // muestra: 17

const potencia = eleva(2, 5)
console.log(potencia) // muestra 32

console.log(nombre) // muestra: Matemáticas

//5.2º Importamos todo el módulo
//import * as nombreQueQueramos from "ruta"
import * as mates from  "./modulos/matematicas.js"

console.log(mates.nombre) // muestra Matemáticas


////////////////Trabajamos con literatura.js para probar como exportar por defecto (sólo uno por módulo)

//4º En esta ocasión vamos a exportar por defecto en literatura.js usando:
//export default elemento_A_Exportar_por_defecto

//5º Importamos un elemento del módulo usando
//import elemento_A_Exportar_por_defecto, {otros elementos si queremos} from "ruta"
import getAutor, {libro} from "./modulos/literatura.js" 

console.log(getAutor()) //hay que poner () al final porque es una función
//muestra: Miguel de Cervantes

console.log("Es autor del libro: ", libro) // muestra: Es autor del libro:  Don Quijote de la mancha