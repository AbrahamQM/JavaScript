/************************Sesion2: Métodos de cadenas de texto 1*****************************/

//----Obtener la longitud del string: 
//nombreDelString.lenght
let str = "Hola soy un string";
console.log(str.length);

//----------------------------------------------------------//
//----Obtener partes de cadenas de caracteres:

//slice(posicionInicial, posiciónFinal) 
let slice_str = str.slice(5, 12);
console.log(slice_str);

//substring(posicionInicial, posiciónFinal) 
let substring_str = str.substring(5, 12);
console.log(substring_str);

//Ojo este es obsoloeto(Deprecated). NO LE INDICAMOS posiciónFinal, SINO nº de caracteres que deseamos
//substr(posiciónInicial, nº de caracteres)
let substr_str = str.substr(5, 12);
console.log(substr_str);


//---------------------------------------------------------//
//----Reemplazar la primera concurrencia del contenido de un string:
//nombreDelString.replace('loQueQueremosReemplazar', 'loQueQueremosQuePongaDespués')
let cadena = "Hola mi nombre es Abraham";
console.log(cadena.replace('Abraham', 'Menganito'));

//Ó, de la misma manera pero actualizando la variable
cadena = cadena.replace('Abraham', 'Pepito');
console.log(cadena);


//---------------------------------------------------------//
//----Reemplazar tódos los elementos que coincidan con una cadena o caracter en concreto.
//Utilizaremos la expresión regular /g (golbal), reemplaza todas las concurrencias.
let texto_largo = "Tito no es un mono cualquiera. A Tito no le gusta trepar por los árboles y odia comer plátanos";

console.log(texto_largo.replace(/Tito/g, 'PALABRA_NUEVA'));
