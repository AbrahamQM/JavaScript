/*
Crea un archivo llamado objetos.js que contenga las siguientes líneas
*/


// - Un objeto con tus datos personales (nombre, apellido, edad, altura, eresDesarrollador)
const misDatos = {
    nombre: "Abraham",
    apellido: "Quintana",
    edad: 35,
    altura: 173,
    eresDesarrollador: true
}

// - Una variable que obtenga tu edad a partir del objeto anterior
const edad = misDatos.edad

console.log(edad)// muestra: 35

// - Una lista que contenga el objeto con tus datos personales y un nuevo objeto con 
// los datos personales de tus dos mejores amig@s
const amigo1 = { nombre: "Alejando", apellido: "Gonzalez", edad: 32, altura: 185, eresDesarrollador: false}
const amigo2 = { nombre: "Lucas", apellido: "Pérez", edad: 50, altura: 168, eresDesarrollador: false}

const lista = [{...misDatos}, {...amigo1},{...amigo2}]

console.log(lista)//muestra: 
// [ { nombre: 'Abraham',
//     apellido: 'Quintana',
//     edad: 35,
//     altura: 173,
//     eresDesarrollador: true },
//   { nombre: 'Alejando',
//     apellido: 'Gonzalez',
//     edad: 32,
//     altura: 185,
//     eresDesarrollador: false },
//   { nombre: 'Lucas',
//     apellido: 'Pérez',
//     edad: 50,
//     altura: 168,
//     eresDesarrollador: false } ]
console.log(Array.isArray(lista)) // muestra: true
console.log(Array.isArray(misDatos)) // muestra: false ----Lo puse solo para comprobar la diferencia----

// - Una nueva lista con los objetos de la lista anterior ordenados por edad, de mayor a menor
const or_lista = lista.sort((a, b) => a.edad - b.edad)

console.log(or_lista)// muestra:
// [ { nombre: 'Alejando',
//     apellido: 'Gonzalez',
//     edad: 32,
//     altura: 185,
//     eresDesarrollador: false },
//   { nombre: 'Abraham',
//     apellido: 'Quintana',
//     edad: 35,
//     altura: 173,
//     eresDesarrollador: true },
//   { nombre: 'Lucas',
//     apellido: 'Pérez',
//     edad: 50,
//     altura: 168,
//     eresDesarrollador: false } ]