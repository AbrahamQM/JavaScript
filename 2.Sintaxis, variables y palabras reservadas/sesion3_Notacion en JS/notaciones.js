//abierto con quokka F1->seleccionar->"quokk.js new JavaScript file",
//para que se muestre los resultados (para que funcione quokka), no guardar.


/****************NOTACIÓN**************/
// EXISTEN DIFERENTES NOTAIONES EN js

// ; --Punto y coma: Delimita el final de una línea (se puede obviar)
const b = 4;

// . --Punto: Se utiliza en los objetos para acceder a los atributos
var movil = new Object();//Ejemplo de creacion de objeto (lo veremos mas adelante)
movil.anchura = 55 //Asignamos un valor a una variable "anchura"
console.log(movil.anchura) //Accedemos al valor

// [] --Square Brackets: Se utilizan para las listas, arreglos o arrays.
const ar = [1, 2, 3, 4]
console.log(ar[2])

// () --Paréntesis: Se utilizan para funciones.
function suma(a, b){} 

// {} --Curly Brackets: Se utilizan para objetos, funciones y estructuras de control.
// -Objetos
const obj = {
    anchura: 5,
    altura: 10
}
// -Estructuras de control
var a = 5
if (a < 7){
    a ++;
    console.log(a++);
}
