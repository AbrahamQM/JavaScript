//abierto con quokka F1->seleccionar->"quokk.js new JavaScript file",
//para que se muestre los resultados (para que funcione quokka), no guardar.

//----TIpos primitivos:
//Number:
4;

//String(pueden usar "", '', ó ``):
"hola mundo";
'hola mundo';
`Hola mundo`;

//Booleanos(siempre sin comillas):
true;
false;

//nulo y undefined:
null;
undefined;

/*Diferencias entre: null(Vacío), undefined(Sin definir), false(booleano 0 o false), 0(numérico)
(ver cual se ilumina dependiendo del valor que pongamos en el if)
----SIMILITUDES ENTRE ELLOS: null, undefined, false, 0 ===>son todas "Falsy" o falso 
*/
// Valor true para comprobar las diferencias con los Falsy
if (true) {
    //si se cumple
    console.log("Cumple")
}else {
    //si no se cumple
    console.log("No cumple")
}


//null (Vacío)
if (null) {
    console.log("Cumple")
}else {
    console.log("No cumple")
}

//undefined (Sin definir)
if (undefined) {
    console.log("Cumple")
}else {
    console.log("No cumple")
}


//false (booleano 0 o false)
if (false) {
    console.log("Cumple")
}else {
    console.log("No cumple")
}

//0 (numérico)
if (0) {
    console.log("Cumple")
}else {
    console.log("No cumple")
}

