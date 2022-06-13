/* Ejercicio del tema 4 Strings:
--------Crea un archivo JS que contenga las siguientes líneas:
*/
/* eslint-disable no-unused-vars */

const conBacktiks = "Este es textro añadido con backtiks para el ej de la sesion 13" 

//- Una cadena de texto con tu Nombre
let nombre = "Abraham comillas simples";

//- Otra cadena de texto con tu Apellido
let apellido = "Quintana comillas dobles";

//- Una cadena de texto que se llame "estudiante" concatenando tu Nombre y tu Apellido con un espacio entre medias
let estudiante = nombre + " " + apellido;

//- Una cadena de texto que se llame "estudianteMayus" que contenga la cadena estudiante pero todo en mayúsculas
let estudianteMayus = estudiante.toUpperCase();

//- Una cadena de texto que se llame "estudianteMinus" que contenga la cadena estudiante pero todo en minúsculas
let estudianteMinus = estudiante.toLowerCase();

//- Una variable que contenga el número de letras de la cadena "estudiante" contando los espacios
let numLetras = estudiante.length;

//- Una variable que contenga la primera letra del Nombre
let primera_letra_nombre = nombre[0];

//- Otra variable que contenga la última letra del Apellido
let ultima_letra_apellido = apellido.charAt(apellido.length - 1);

//- Una cadena de texto que elimine los espacios de la variable "estudiante"
let sin_espacios = estudiante.replace(" ", ""); //si se refiere a eliminar todos los espacios
let trimada = estudiante.trim();//si se refiere a trimar la cadena

//- Una variable booleana que diga si el Nombre está contenido en la variable "estudiante"
let booleana = estudiante.includes(nombre);
