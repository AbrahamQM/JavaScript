/*
Crea un archivo llamado fechas.js que contenga las siguientes líneas
*/

// - La fecha de hoy
const fechaHoy = new Date()
console.log(fechaHoy)// muestra: Tue May 24 2022 20:14:04 GMT+0100 (hora de verano de Europa occidental)

// - La fecha de tu nacimiento
const nacimiento = new Date(1987, 6, 8)
console.log(nacimiento.toLocaleDateString("es-ES"))// muestra: 8/7/1987

// - Un variable que indique si hoy es más tarde (>) que la fecha de tu nacimiento
const esMasTarde = fechaHoy > nacimiento
console.log(esMasTarde)// muestra: true

// - Una variable que contenga el día de tu nacimiento
const dia_nacimiento = nacimiento.getDate()
console.log(dia_nacimiento)// muestra: 8

// - Una variable que contenga el mes de tu nacimiento (recuerda que Enero es mes 0)
const mes_nacimiento = nacimiento.getMonth() + 1
console.log(mes_nacimiento)// muestra: 7

// - Una variable que contenga el año de tu nacimiento (con 4 dígitos)
const anyo_nacimiento = nacimiento.getFullYear()
console.log(anyo_nacimiento)// muestra: 1987