/**************** Tema 7 sesion 1 Trabajando con sets ***************/

//----------------------------------Definición de set:

//Los objetos Set son colecciones de valores. Se puede iterar sus elementos en el orden de su inserción. 
//-----Un valor en un Set sólo puede estar una vez; éste es único en la colección----
const array = ['Hola', 1, 2, 3, 'Hola',  1, 2, 3, {nombre:"pepe", edad: 55}, {nombre:"pepe", edad: 55}]

//Declaramos un set
const miSet = new Set(array)

console.log(array) //muestra: 
//[ 'Hola',
// 1,
// 2,
// 3,
// 'Hola',
// 1,
// 2,
// 3,
// { nombre: 'pepe', edad: 55 },
// { nombre: 'pepe', edad: 55 } ]


console.log(miSet) //muestra:
// Set { 'Hola',
//   1,
//   2,
//   3,
//   { nombre: 'pepe', edad: 55 },
//   { nombre: 'pepe', edad: 55 } }

//---OJO el set NO contiene el segundo 'Hola', ni los números 1, 2, 3 ---PORQUE SON VALORES REPETIDOS
// SIN EMBARGO LOS OBJETOS NO SON VALORES, POR LO QUE AUNQUE SEAN IDÉNTICOS, SI LOS CONTENDRÁ. 



//------------------------------Métodos para añadir o eliminar valores

//---Añadir
// .add(elemento) --Solo un elemento cada vez y elementos que no existen ya en el set
miSet.add(8)
console.log(miSet) //muestra:
// Set { 'Hola',
//   1,
//   2,
//   3,
//   { nombre: 'pepe', edad: 55 },
//   { nombre: 'pepe', edad: 55 },
//   8 }

//--Eliminar 1 elemento
// .delete(elemento)
miSet.delete("Hola")
console.log(miSet) //muestra:
// Set { 1,
//     2,
//     3,
//     { nombre: 'pepe', edad: 55 },
//     { nombre: 'pepe', edad: 55 },
//     8 }

//Eliminar todos los elementos
//Antes de vaciar mi_Set, copio miSet para seguir trabajando con el como miSet1 después
const miSet1 = new Set(miSet);
//.clear()
miSet.clear()
console.log(miSet) //muestra: Set {  }


//------------------------------Saber si un set contiene un valor

//.has(elemento) --Es similar a el método .includes() en los arrays--
console.log(miSet1.has(8)) //muestra: true
console.log(miSet1.has(80)) //muestra: false

/*********************/
//Para saber si un set contiene un objeto en concreto tipo { nombre: 'pepe', edad: 55 }, Hay que conocer la referencia
// o nombre del objeto (que no es lo mismo que el atributo nombre), por lo que tendríamos que haber declarado el 
//array del principio (Lin: 7) asignando una referencia a cada objeto.

//Creo array2(referenciando los objetos obj1 y obj2) y miSet2 solo para este ejemplo(el profe no explicó eso)
const array2 = ['Hola', 1, 2, 3, 'Hola',  1, 2, 3, obj1 = {nombre:"pepe", edad: 55}, obj2 = {nombre:"pepe", edad: 55}]
const miSet2 = new Set(array2)
console.log(miSet2.has(obj1)) // muestra: true

//Si intentamos saber si el objeto existe así: miSet.has({nombre:"pepe", edad: 55}), dirá siempre "false":
console.log(miSet1.has({nombre:"pepe", edad: 55}))//muestra: false
/*********************/


//------------------------------Obtener el tamaño de un set:

//.size 
console.log(miSet1.size)// muestra: 6


//------------------------------Iterar con un set:

//.forEach()
miSet1.forEach(valor => console.log(valor))
//6 ​​​​​
// 1
// 2
// 3
// { nombre: 'pepe', edad: 55 }
// { nombre: 'pepe', edad: 55 }
// 8

//------------------------------Obtener los valores de un set:

// declaramos un objeto iterador y le asignamos los valores con .values()
const iterador_miSet = miSet1.values()
console.log(iterador_miSet)// muestra: { [Iterator] } 

for (let item of iterador_miSet) console.log(item); //muestra: 
//1, 2, 3, { nombre: 'pepe', edad: 55 }, { nombre: 'pepe', edad: 55 }, 8


//------------------------------Convertir un set en un array:

//Usando el factor de propagación arrayDondeGuardaremosElSet = [...miSet]

const ar_miSet = [...miSet1]
console.log(ar_miSet) // muestra:
// [ 1,
//   2,
//   3,
//   { nombre: 'pepe', edad: 55 },
//   { nombre: 'pepe', edad: 55 },
//   8 ]

console.log(ar_miSet[3]) // muestra: { nombre: 'pepe', edad: 55 }
