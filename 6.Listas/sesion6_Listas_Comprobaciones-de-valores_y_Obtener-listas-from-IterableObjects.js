/***********Tema6, sesión 6 Identificar si existe un valor en una lista y Obtener array a partir de objetos iretables***********/

// -------------Comprobar condiciones o valores en listas:

//-Comprobar si alguno/s de los elementos de la lista cumplen una condición con .some
const array = [3, 7, 2, 4, 7, 9, 42, 35, 7865, 23, -2]


const res = array.some(valor => valor < 0) //comprobamos si hay alguno que sea negativo

console.log(res) //muestra true, ya que el -2 cumple esa condición

//si hay algun elemento < -10
const res2 = array.some(valor => valor < -10)
console.log(res2) // muestra: false, ya que no hay ningún elemento que cumpla esa condición


//-Comprobamos si existe un valor determinado en el array
const existe = array.some(valor => valor === 35)
console.log(existe) // muestra true

const existe2 = array.some(valor => valor === 100)
console.log(existe2) // muestra false

// -------------Comprobar condiciones o valores en listas de objetos:
const listaObjetos = [
    {nombre: "Abraham", edad: 35},
    {nombre: "Pepe", edad: 70}, 
    {nombre: "Lucía", edad: 28},
    {nombre: "Paco", edad: 50},  
    {nombre: "María", edad: 23}
]

const existePepe = listaObjetos.some(persona => persona.nombre === "Pepe") // comprobamos si alguno de los objetos se llama Pepe
console.log(existePepe) // muestra true

const existeLucas = listaObjetos.some(persona => persona.nombre === "Lucas")
console.log(existeLucas) // muestra false


//-------------------------------Obtener una lista a partir de Objetos iterables: 

//****Explicación objetos iterables:
//Son iterables los elementos en los cuales podemos acceder a alguna de sus partes usando [indice]
const str = "Hola soy Abraham"
console.log(str[9]) // muestra: A, que es el elemento que esta en el indice 9

//****obtenemos una lista a partir de un objeto String con Array.from(objetoIterable)

console.log(str)//muestra: Hola soy Abraham

//Ahora vamos a obtener una lista a partir de str
const ar_str = Array.from(str) 
console.log(ar_str)// muestra: [ 'H', 'o', 'l', 'a', ' ', 's', 'o', 'y', ' ', 'A', 'b', 'r', 'a', 'h', 'a', 'm']



//****obtenemos una lista a partir de un Array.from(Set([elementos separados por comas]))
const set = new Set([2, 3, "hola", true, 4]) // declaramos el Set

const ar_set = Array.from(set);

console.log(set)// muestra: Set { 2, 3, 'hola', true, 4 }
console.log(ar_set)// muestra: [ 2, 3, 'hola', true, 4 ]



//**** Obtener un iterable de todos los índices de nuestro array nombreArray.keys()
const keys = array.keys()


console.log(keys) // muestra:{ [Iterator] }
console.log(typeof(keys)) // muestra: object


//acceder a las keys del array, creando un array a partir de keys
const ar_keys = Array.from(keys)

console.log(ar_keys) // devuelve los indices que había en array: [0, 1, 2, 3,....10]

