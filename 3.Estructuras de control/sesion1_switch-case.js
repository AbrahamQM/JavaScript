//abierto con quokka F1->seleccionar->"quokk.js new JavaScript file",
//para que se muestre los resultados (para que funcione quokka), no guardar.


/************************Sentencias Switch************************/

let nota = 0;// Suponemos que es una nota de 0-5 (ir probando el resultado con diferentes valores)

switch (nota){
    case 5:
        console.log("Buen trabajo!!, Sobresaliente");
        break;
    case 4:
        console.log("Buen trabajo!!, Pero puedes mejorar");
        break;
    case 3:
        console.log("Aprobado!!, Justito");
        break;
    case 2:
        console.log("Suspenso, Estudia más");
        break;
    case 1:
        console.log("Bastante mal.");
        break;
    default:
        console.log("Error, introduce una nota entre 1 y 5");
        break;  
}