/*****Tema 6 sesion 2 Concatenación, factor de propagación y obtención de fragmentos de listas*****/

//** Cómo unir 2 listas

const lista1 = ["hola", 2, false, null];
const lista2 = ["adiós", 8, true, undefined];

//--Concatenar listas con .concat()
//lista1.concat(lista2)

console.log(lista1.concat(lista2)); //muestra: [ 'hola', 2, false, null, 'adiós', 8, true, undefined ]

//o si queremos guardar el resultado, sería simplemente así:
const lista3 = lista1.concat(lista2);
console.log(lista3); //muestra: [ 'hola', 2, false, null, 'adiós', 8, true, undefined ]



//--Concatenar usando el factor de propagación 
//...lista
console.log(...lista3); //muestra: hola 2 false null adiós 8 true undefined 
//podemos ver que está logeando cada uno de los elementos por separado, en lugar de hacerlo como un array

//por lo que podríamos concatenar dos listas de la siguiente manera:
const lista4 = [...lista1, ...lista2];
console.log(lista4); //muestra [ 'hola', 2, false, null, 'adiós', 8, true, undefined ]

//ERROR HABITUAL SI ENTENDEMOS MAL EL FACTOR DE PROPAGACIÓN(...)
const lista5 = [lista1, lista2]; //De esta forma tendremos una lista que contiene dos elementos que también son listas.
console.log(lista5);// Muestra: [ [ 'hola', 2, false, null ], [ 'adiós', 8, true, undefined ] ]


//--------------------------------------------------------------------------------------//

//--Cómo obtener una lista a partir de otra .slice() ¡¡¡OJO NO CONFUNDIR CON .splice()!!!
//IMPORTANTE: El método .slice() no modifica el valor del array original!!!! 

const array = ["hola", 1, 2, 3, true, null, "adiós"];

//lista.slice(indice inicial)
console.log(array.slice(4)); //muestra el array pariendo del elemento posición 4: [  true, null, 'adiós' ]

//lista.slice(indice inicial, índice final)  --obvia el elemento que se encuentra en la posición final--
console.log(array.slice(1, 3)); //muestra los elementos situados de la pos 1 a la 3: [1, 2]
console.log(array.slice(1, 4)); //muestra los elementos situados de la pos 1 a la 4: [1, 2, 3]

//** ahora vamos a obtener un array a partir de otro(seleccionando los elementos que nos interesen)
//suponemos que queremos obtener desde la posición 2 hasta la 4(recuerda que el último elemento lo obvia)
const array2 = array.slice(2, 5);
console.log(array2); //muestra: [2, 3, true ]


//** Otra forma de usar el .slice() indicando el índice desde el final (con valores negativos):
//lista.slice(indice inicial, - nº de elementos desde el final) ej:
console.log(array.slice(0, -1)); //muestra: [ 'hola', 1, 2, 3, true, null ] --descartando el último elemento.

//o de la misma forma si queremos empezar en el elemento pos 2 y descartar 3 elementos:
const array3 = array.slice(2, -3);
console.log(array3); // muestra: [ 2, 3 ] 


