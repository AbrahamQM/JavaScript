/*
Crea un archivo llamado conjuntos.js que contenga las siguientes líneas
*/

//- Un nuevo Set con los nombres de tu familia
const familia = ["Abraham", "Ana Mª", "Jonathan", "María", "Sara", "Judith"]
let set_familia = new Set(familia)

console.log(set_familia) //muestra: Set { 'Abraham', 'Ana Mª', 'Jonathan', 'María', 'Sara', 'Judith' }

//- Modifica el Set original añadiendo tu nombre (duplicado) (debería darte lo mismo)
set_familia.add("Abraham")

console.log(set_familia)//muestra: Set { 'Abraham', 'Ana Mª', 'Jonathan', 'María', 'Sara', 'Judith' }

//- Modifica el Set original añadiendo el nombre "Javascript" (ya que empieza a formar parte de tu vida ;)
set_familia.add("JavaScript")

console.log(set_familia)//muestra: 
// Set { 'Abraham',
//   'Ana Mª',
//   'Jonathan',
//   'María',
//   'Sara',
//   'Judith',
//   'JavaScript' }