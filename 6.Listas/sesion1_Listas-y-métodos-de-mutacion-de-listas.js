/***********Tema 6, sesión 1: Listas y métodos de mutación de listas*******************/

//----Declaración de listas

let array_demo = new Array('lis valores que queramos');

let var1 = 45;
let array = [1, "hola", false, {id: 5}, null, undefined, var1]; //Le podemos pasar cualquier tipo de elemento

console.log(array); // muestra: [ 1, 'hola', false, { id: 5 }, null, undefined, 45 ]


//----Acceder a los valores de un array a través de su posición:
// nombreArray[indice]
console.log(array[0]); //muestra: 1
console.log(array[1]); //muestra: hola
console.log(array[2]); //muestra: false
//Y así con todos ...


/*****************************************************************************************/
//----Métodos para introducir nuevos valores en el array:

//** .push() AÑADE ELEMENTOS AL FINAL DEL ARRAY

array.push("Añadido con .push()");
console.log(array); //muestra: [ 1, 'hola', false, { id: 5 }, null, undefined, 45, 'Añadido con .push()' ]
console.log(array[7]); // muestra: Añadido con .push()
//se pueden añadir diferentes elementos separados por comas:
array.push("otro", var1);
console.log(array); //muestra: [ 1, 'hola', false, { id: 5 }, null, undefined, 45, 'Añadido con .push()',  'otro', 45 ]

//** .unshift() AÑADE VALORES AL PRINCIPIO DEL ARRAY
array.unshift("Añadido con .unshift()")
console.log(array); // muestra: [ 'Añadido con .unshift()', 1, 'hola', false, { id: 5 }, null, undefined, 45, 'Añadido con .push()', 'otro', 45 ]
//se pueden añadir diferentes elementos separados por comas igual que con el push()



/*****************************************************************************************/
//----Métodos para eliminar valores en nuestro array:
let array2 = [1, 3, "hola", false];

//**  .pop() ELIMINA ELEMENTOS AL FINAL DEL ARRAY Y NOS DEVUELVE EL VALOR ELIMINADO 
console.log(array2.pop()) //devuelve: hola 
array2.pop();
console.log(array2); // muestra: [1, 3] // El 1º pop ha eliminado false del final y el segundo 'hola'

//** .shift() ELIMINA ELEMENTOS AL PRINCIPIO DEL ARRAY
array2.shift();
console.log(array2); // muestra: 3 // ya que hemos eliminado el 1 que era el primer elemento o array2[0]



/*****************************************************************************************/
//----Método para eliminar, modificar o añadir elementos al array:
const array3 = [1, 2, 3, 4, 5 , 6];

//** .splice(elementos)

//Eliminar el elemento que ocupa el índice 2, x elementos .splice(indice, nº elementos)
array3.splice(2, 0); //Elimina 0 elementos desde la posición 2
console.log(array3); // muestra:[1, 2, 3, 4, 5 , 6]

array3.splice(2, 2); //Elimina 2 elementos desde la posición 2
console.log(array3); // muestra:[1, 2, 5, 6]

//Añadir valores  .splice(indice, 0, elementos a añadir separados por comas)
array3.splice(2, 0, 'añadido1', 'añadido2');
console.log(array3); // muestra:[1, 2, 'añadido1', 'añadido2', 5, 6]


//Modificar valores .splice(indice, nº elementos a modificar, elementos nuevos separados por comas)
array3.splice(2, 1, "modificado1", "modificado2"); //así modifica el primero y añade el segundo elemento
console.log(array3); // muestra: [ 1, 2, 'modificado1', 'modificado2', 'añadido2', 5, 6 ]

array3.splice(2, 2, "modificado3", "modificado4"); //así modifica los 2 elementos según le hemos indicado
console.log(array3); // muestra: [ 1, 2, 'modificado3', 'modificado4', 'añadido2', 5, 6 ]

array3.splice(2, 1, "modificado5"); //así modifica el que esta en la posicion 2
console.log(array3); // muestra: [ 1, 2, 'modificado5', 'modificado4', 'añadido2', 5, 6 ]