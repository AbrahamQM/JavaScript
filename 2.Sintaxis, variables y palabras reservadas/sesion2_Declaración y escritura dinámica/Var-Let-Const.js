//abierto con quokka F1->seleccionar->"quokk.js new JavaScript file",
//para que se muestre los resultados (para que funcione quokka), no guardar.

/************Formas de definir variables*************/

//Pueden cambiar
var variableVar;
let variableLet;

// las constantes no se pueden cambiar
const constante = "Abraham"; 



/**********Ver como cambian las variables (con quokka sin guardar) *********/

var a = 1;
console.log(a)

//la modificamos
a = 5;
console.log(a)

//Sin embargo si intentamos modificar una constante, da error:
console.log(constante)
// constante = "perro" //***Descomentar(en quokka) para ver el error



/***********************Variables let *********************
 * es idéntico a var, salvo por:
 * Let es una variable local, var es una variable Global
 * ***********************/

let b = 3;
console.log(b)

b = 5;
console.log(b)

//***Ejemplo para ver la diferencia entre Var y Let
//Var ---se modifica el valor global de la variable tanto dentro como fuera del if---
var variaVar = "Hola soy una variable VAR"

for (var i = 0; i<3; i++){
    var variaVar = "soy la segunda variable Var" //no se debe volver a declarar, sino que es mejor modificarla sin la palabra "var", es un ejemplo para que se vea mejor
    console.log(variaVar)
}

console.log(variaVar)

//let ---no se modifica el valor global de la variable, dentro del if tiene un valor y fuera otro ---
let variaLet = "Hola soy una variable LET"

for (var i = 0; i<3; i++){
    let variaLet = "soy la segunda variable LET" //no se debe volver a declarar, sino que es mejor modificarla sin la palabra "var", es un ejemplo para que se vea mejor
    console.log(variaLet)
}

console.log(variaLet)


/**************************ver tipos de variables con typeof ****************************/
let booleana = true
let indefinida = undefined
let nula = null
let c = 5
console.log(typeof nula)
console.log(typeof indefinida)
console.log(typeof booleana)
console.log(typeof variaVar)
console.log(typeof variaLet)
console.log(typeof c)

console.log(typeof 1)
console.log(typeof false)
console.log(typeof "Cosas")