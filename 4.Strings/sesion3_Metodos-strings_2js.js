/************************Sesion3: Métodos de cadenas de texto 2*****************************/

//---- Convertir toda la cadena a mayúsculas o minúsculas:
//Suponemos que tenemos que comprobar dos Strings:
let input = "Administrador";
let entrada = "administrador";
console.log(input === entrada); // Muestra false por que la 1ª letra no es la misma

//Para poder comprobar los dos strings ignorando mayúsculas y minúsculas, se suele hacer asi:
//Mayúsculas: 
console.log(input.toUpperCase === entrada.toUpperCase); // Muestra true
//Minúsculas:
console.log(input.toLowerCase === entrada.toLowerCase); // Muestra true

//en definitiva, toUpperCase y toLowerCase, se pueden usar así:
let minus = input.toLowerCase();
let mayus = input.toUpperCase();
console.log(minus, mayus)


//-----------------------------------------------------------------------------------------------//
//---- Concatenar dos cadenas de caracteres:

//usando el método nombrePrimerStr.concat(LasCadenas que queramos)
let str1 = "Primera cadena.";
let str2 = "Segunda cadena.";

let str3 = str1.concat(" ", str2); //Añado un espacio antes de str2, pero no es obligatorio
console.log(str3);

//usando nombrePrimerStr + nombreSegundoStr + loQueSea (Ojo, si son números los sumará sin mas)
str3 = str2 + ' ' + str1;
console.log(str3);
//O lo que es lo mismo:
console.log(str1 + " " + str2);


//usando comillas invertidas y corchetes:  `${str1} ${str2}`
str4 = `${str1} ${str2}`;
console.log(str4);
//o lo que es lo mismo:
console.log(`${str1} ${str2}`);


//-------------------------------------------------------------------------------------------------//
//----Trimar o Eliminar los espacios del principio y el final.

//**Trimar toda la cadena con nombreCadena.trim()
let str5= "hola soy un string con espacios al final    ";
let str6= "   hola soy un string con espacios al principio";

console.log(str5.trim());
console.log(str6.trim());
//de manera que si miramos la longitud cambia al timarlos:
console.log(str5.length); //44 caracteres
let str7 = str5.trim();
console.log(str7.length); // 40 caracteres


//**Trimar solo em principio con nombreCadena.trimStart()
console.log(str6.length); //47 caracteres
let str8 = str5.trimStart();
console.log(str8.length); //44 caracteres


//**Trimar solo el final con nombreCadena.trimEnd()
console.log(str5.length); //44 caracteres
str8 = str5.trimEnd();
console.log(str8.length); //40 caracteres


//------------------------------------------------------------------------------------------------//
//---- Obtener el caracter que hay en una posición determinada:
str_9 = "Hola esto es una cadena, esto pepito"

//** Usando nombreVariable.cartAt(posición);
console.log(str_9.charAt(0)) //Muetra: H

//** Tratándolo como una lista:
console.log(str_9[1]); //Muestra: o


//-----------------------------------------------------------------------------------------------//
//---- Obtener la posición de una palabra dentro de un string:

//** Obtener la primera concurrencia usando:
// indexOf("cadena a buscar")   ---devolverá la posición en la que se inicia la cadena:
console.log(str_9.indexOf("esto")) //Muestra: 5 --refiriendose a que la cadena comienza en la posición 5--
//Si no encuentra la cadena o caracter que le indiquemos, devuelve -1

//** Obtener la última concurrencia  usando:
// lastIndexOf("cadena a buscar")
console.log(str_9.lastIndexOf("esto")); // Muestra 25 --refiriendose a que la cadena comienza en la pos 25

