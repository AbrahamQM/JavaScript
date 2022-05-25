/*********Tema 8 sesion 1: Introducción a las funciones en Js ***********/

//----¿Que son las funciones?
//-Son bloques de código que se ejecutan con un fin específico
//-Se pueden utilizar antes o depues de declararlas indistintamente:
saludar('uno') // muestra en consola: Hola uno ----La declaro en Ln:11-13 la instancio aquí para mostrar que se puede
//instanciar sin problema antes o después----

//----Declaración de funciones
// function nombreDeFunción(parámetro1, parámetro2, parámetro3, ...)
function saludar(nombre){
    console.log(`Hola ${nombre}`)
}


//----Utilizar funciones
//Se pueden utilizar antes o depues de declararlas indistintamente
saludar("Abraham") //muestra en consola: Hola Abraham

//--si no le paso el parámetro 
saludar()//muestra: Hola undefined

//--si le paso una variable
let nomb = "Pepe"
saludar(nomb)// muestra: Hola Pepe


//--------------Parámetros diferencia entre pasar(variables u objetos)

//--Pasar una variable y modificarla en la función (sólo se pasará el valor de la variable)
let nombre2 = "Juan"

function despedir(nombre){
    nombre = "Diego"
    console.log(`Adiós ${nombre}`)
}

despedir(nombre2)//muestra Adiós Diego ---Ya que hemos cambiado la variable nombre DENTRO DE LA FUNCION---
console.log(nombre2) //muestra: Juan ---Ya que sólo se pasa el valor de la variable---


//--Pasar un objeto y modificarlo en la función (se pasará la referencia al objeto)
//DE FORMA QUE SI LO QUE LE PASAMOS ES UN OBJETO, SI SE MODIFICAN LOS VALORES 
let persona = {nombre: "Lucas", apellido: "González"}

function saludarPersona(objeto){
    objeto.nombre = "Loquillo"
    console.log(`Hola ${objeto.nombre} ${objeto.apellido}`)
}

saludarPersona(persona)// muestra: Hola Loquillo González
console.log(persona)//muestra: { nombre: 'Loquillo', apellido: 'González' }
//DE FORMA QUE SI LO QUE LE PASAMOS ES UN OBJETO, SI SE MODIFICAN LOS VALORES 

//-Ahora si intentamos llamar a la función sin pasarle ningun objeto, da un error(comentado para poder seguir trabajando):
//saludarPersona() //da el error: Cannot set propierties of undefinied (seting 'nombre')
//porque está intentando acceder a atributos de un objeto que no existe

//-Y si intento pasarle una variable (que no es un objeto) 
saludarPersona(nombre2)// muestra: Hola undefined undefined 


//-------------Parámetros opcionales

//Preparar un valor por defecto por si no se le pasa el parámetro indicado (de forma que sea opcional)
//function nombreFuncion(parametro1 = valorePorDefecto1, parametro2 = valorePorDefecto2, ...)
function imprimeNumero(numero = 700){
    console.log(numero)
}

imprimeNumero(9) // muestra: 9
imprimeNumero() // muestra: 700


//-------------Parámetros indeterminados

//--Usando factor de propagación nombreFunción(...parámetros) 
function imprimir(...parametros){
    console.log(parametros)
}

imprimir("Hola que tal?", 5, false, {nombre: "Abraham", edad:52})// muestra:
// [ 'Hola que tal?', 5, false, { nombre: 'Abraham', edad: 52 } ]

//mejorando esa función
function imprimir2(...parametros){
    parametros.forEach(valor => console.log(valor))
}

imprimir2(1, "Hola", 200, true);// muestra: 
// 1
// Hola 
// 200
// true

//Ejemplo del profe:
function suma(...numeros){
    console.log(numeros.reduce((a, b) => a + b))
}

suma(1, 2 ,3 ,4, 25) //muestra en consola (a causa de la Ln:98): 35 


//-------------Devolver valores

//--Usamos return loQueQueramosDevolver
function suma2(...numeros){
    return numeros.reduce((a, b) => a + b)
}

console.log(suma2(1, 2, 3, 4, 25))// muestra: 35

//ó tambien guardando el resultado
let s = suma2(1, 2, 3, 4, 1, 25)
console.log(s)// muestra: 36

//otro ejemplo:
function multiplicar(a = 1, b = 1){
    return a * b
}

console.log(multiplicar())//muestra: 1
console.log(multiplicar(5))//muestra: 5
console.log(multiplicar(5, 10))//muestra: 50


//-------------------Ámbito de las variables (dentro y fuera de la función)

let variable = 0

function resta(a = 0, b = 1){
    let variable_interna = 25
    console.log(variable) // muestra: 0 ---YA QUE PODEMOS ACCEDER A CUALQUIER VARIABLE DESDE LA FUNCIÓN----
}

resta() // Simplemente la llamo para que se ejecute y ver los resultados

console.log(variable_interna)// da un error: (variable_interna is not definied)
// ---YA QUE variable_interna ESTÁ DEFIIDA DENTRO DE LA FUNCIÓN Y NO ES ACCESIBLE DESDE FUERA---