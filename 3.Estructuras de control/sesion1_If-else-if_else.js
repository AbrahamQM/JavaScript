//abierto con quokka F1->seleccionar->"quokk.js new JavaScript file",
//para que se muestre los resultados (para que funcione quokka), no guardar.

/***************************bifurcaciones if-else **********************/
if (true){
    console.log("Es verdad")
}

if (false){
    console.log("Es verdadero")
}else{
    console.log("No es verdadero")
}

//Ejemplo con un cajero de banco
let saldo = 50;

let efectivo = 20;


if (efectivo < saldo){
    console.log("Puede sacar dinero");
}else{
    console.log("Saldo insuficiente");
}

// *** Concatenaciones de if-else usando else if{}
let nota = 3; // Suponemos que es una nota de 0-5 (ir probando el resultado con diferentes valores)

if (nota === 5){
    console.log("Enhorabuena, has obtenido un sobresaliente");
}else if (nota === 4){
    console.log("Buen trabajo, pero podrías mejorarlo");
}else if (nota === 3){
    console.log("Aprobado, pero justito.");
}else if (nota === 2){
    console.log("No has aprobado por poco.");
}else if (nota === 1){
    console.log("No has estudiado nada.");
}else if (nota === 0){
    console.log("Para esto mejor ni vengas.");
}else {
    console.log("Error, introduce una nota entre 0 y 5");
}



