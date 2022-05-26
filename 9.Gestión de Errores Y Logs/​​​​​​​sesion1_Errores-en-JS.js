/***********************Tema 9 Sesion 1 Errores en JS**********************/

//--Ejemplo sin gestionar nada
const miFuncion = valor => {
    return 2 * valor
}

console.log(miFuncion(2)) //muestra: 4 (no hay ningún error)

//Ahora forzamos un error, pasándole un valor no válido:
console.log(miFuncion("cosa")) // muestra: NaN


//--------------------------Gestión básica de los errores:
//Podemos comprobar si el valor es del tipo esperado:

const miFuncion2 = valor => {
    if (typeof valor === "number"){
        return 2 * valor
    }//si no se cumple, lanzamos el error con throw:    
    throw new Error("El valor debe ser de tipo número")
}

// **(Comento el ejemplo de (provocar un error) para poder seguir trabajando despues del error)**
// const elDoble = miFuncion2("cosa") // da error: El valor debe ser de tipo número
// **(fin de código comentado para continuar trabajando)



//------------------------Gestión de errores con try{} catch(error){}
// try{
//     Lo que queramos intentar (puede fallar)
// } catch(error){ //(error va a almecenar el error devuelto)
//     que hacer en caso de que falle el try
// } finally {
//     lo que queramos que se ejecute siempre
// }

//--Muestra sin errores:
const numero = 8
try {
    console.log("Está ejecutándose de forma correcta")
    const doble = miFuncion2(numero)
    console.log(doble)
} catch(e) {
    console.error(`Error: ----->  ${e}`) //ATENCIÓN: La palabra error en lugar de log, hace que se muestre de manera diferente en la consola
} finally {
    console.log("Esto se ejecuta siempre")
}
//Muestra en consola: 
//1º: Está ejecutándose de forma correcta (at sesion1_Errores-en-JS.js:43:5)
//2º: 16 ​​​​​(at ​​​​​​​​doble​​​ ​sesion1_Errores-en-JS.js:45:5​)
//3º: Esto se ejecuta siempre (​​​​​at ​​​​​​​sesion1_Errores-en-JS.js:49:5)


//--Muestra con errores:
try {
    console.log("Está ejecutándose de forma correcta")
    const doble = miFuncion2(cosaQueNoExiste) //Introducimos un error aquí
    console.log(doble)
} catch (e) {
    console.error(`Error: ----->  ${e}`) //ATENCIÓN: La palabra error en lugar de log, hace que se muestre de manera diferente en la consola
} finally {
    console.log("Esto se ejecuta siempre")
}
//-Muestra en consola:
//1º(en rojo y sobre todo lo que hay en consola): Error!:--> [ReferenceError: cosaQueNoExiste is not defined]
//---debería mostrar de la misma manera: Error!:--> El valor debe ser de tipo número  
//---Ya que es como lo hemos definido(posible error de quokka)
//2º: Está ejecutándose de forma correcta (​​​at sesion1_Errores-en-JS.js:59:5)
//3º: Esto se ejecuta siempre (​​​​​at sesion1_Errores-en-JS.js:65:5​)



//------------------------------Errores mas comunes en JS:

//Mirar errores en: https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Error

//--InternalError:
//Se lanza cuando hay un problema interno (Ej: un overflow en una función recursiva)

//--SyntaxError:
//Se lanza cuando hay algún fallo de sintaxis (Ej: cont variable; (donde debería poner const))

//--TypeError:
//Se lanza cuando se usa un tipo de dato erróneo (Ej: si le pasamos a una función un numero donde espera una booleano)

//--RangeError: 
//Se lanza cuando intentamos acceder a una posición de un conjunto que no existe 
//(Ej: si en un array = [1, 2, 3] con 3 elementos, e intentamos acceder a array[5])

//--ReferenceError:
//Se lanza cuando intentamos usar una referencia que no existe o no se ha declarado antes 
//(Ej: Ln:59 de este código, en el que intentamos pasar un parámetro cosaQueNoExiste)

