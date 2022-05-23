/**********Tema 6 Listas , sesion 5 Ordenación de listas, comprobar condiciones y comparacion entre dos listas************/

const array = [2, 5 ,9, 15, 1 , 2, 0 ,4];

//------------------------------------Método .sort(Funcion Callback)

//oreden de menor a mayor (-1)
array.sort((a, b) => {
    if (a < b){
        return -1;  //El -1 le indica que a tdebe tener un índice anterior a b
    } else if (a>1) {
        return 1;
    }else { // Si a === b
        return 0 //lo deja igual
    }
})

console.log(array);//muestra: [ 0, 1, 2, 2, 4, 5, 9, 15 ]

//orden inverso (1)
array.sort((a, b) => {
    if (a < b){
        return +1;  //El 1 le indica que a debe tener un índice posterior a b
    } else{
        return -1
    }
})

console.log(array); // muestra: [ 15, 9, 5, 4, 2, 2, 1, 0 ]


//-----Ordenar unicamente arrays numéricos:

const arrayNum = [4, 1, 7, 3, 1, 3, 56, 1, 546];

// de menor a mayor
arrayNum.sort((a, b) => a - b); // esto significa que si b > a, nos va a devolver que b tiene que estar antes

console.log(arrayNum); //muestra: [ 1, 1, 1, 3, 3, 4, 7, 56, 546 ]

// de mayor a menor
arrayNum.sort((a, b) => b - a); // esto significa que si a > b, nos va a devolver que b tiene que estar después

console.log(arrayNum); // muestra: [ 546, 56, 7, 4, 3, 3, 1, 1, 1 ]


//-----Ordenar un array de objetos:

const listaObjetos = [
    {nombre: "Abraham", edad: 35},
    {nombre: "Pepe", edad: 70}, 
    {nombre: "Lucía", edad: 28},
    {nombre: "Paco", edad: 50},  
    {nombre: "María", edad: 23}
]

// Ordenamos los objetos de menor edad a mayor edad
listaObjetos.sort((a, b) =>{
    if (a.edad < b.edad){
        return -1; //le devolvemos -1 si a debe tener un índice menor que b (a va antes de b)
    } else if (a.edad < b.edad){
        return +1; //le devolvemos +1 si a debe tener un índice mayor que b (a va despues de b)
    }else{
        return 0; //le devolvemos 0 si tuvieran la misma edad
    }
})

console.log(listaObjetos); // muestra: 
// [ { nombre: 'María', edad: 23 },
//   { nombre: 'Lucía', edad: 28 },
//   { nombre: 'Abraham', edad: 35 },
//   { nombre: 'Paco', edad: 50 },
//   { nombre: 'Pepe', edad: 70 } ]

// Igual pero con la callback simplificada
listaObjetos.sort((a, b) => a.edad - b.edad);

console.log(listaObjetos); //muestra lo mismo ya que no hemos cambiado el orden

// En orden inverso:
listaObjetos.sort((a, b) => b.edad - a.edad);

console.log(listaObjetos); // muestra la lista de objetos ordenados por la edad, de mayor a menor
//[ { nombre: 'Pepe', edad: 70 },
// { nombre: 'Paco', edad: 50 },
// { nombre: 'Abraham', edad: 35 },
// { nombre: 'Lucía', edad: 28 },
// { nombre: 'María', edad: 23 } ]


//-------------------------------------------------------Comprobar cosas de listas con .every(Funcion Callback)
//Nos dirá si TODOs los elementos de la lista cumplen una condición

const array2 = [4, 6, 7, 8, 3, 6, 2, 1, -4, -7, 12, 5, -40]

//Vamos a comprobar si todos los elementos son de tipo number
const resultado = array2.every(valor => {
    if  (typeof valor === "number") {
        return true
    } else{
        return false
    }
} );

console.log(resultado); //muestra: true, ya que todos son de tipo number


//vamos a comprobar si todos los valores son > 0
 const resultado2 = array2.every(valor =>{
     if (valor > 0){
         return true
     } else {
         return false
     }
 })

 console.log(resultado2) // muestra: false,  ya que hay valores negativos


//lo mismo pero simplificando la lambda
const resultado3 = array2.every(valor => valor > 0);
console.log(resultado3); //muestra: false

//--------PARA COMPROBAR SI ALGUNO DE LOS VALORES CUMPLE LA CONDICION .some() VER SIGUIENTE SESIÓN
// Comprobar si alguno/s de los elementos de la lista cumplen una condición con .some
const arr = [3, 7, 2, 4, 7, 9, 42, 35, 7865, 23, -2]

const res = arr.some(valor => valor < 0) //comprobamos si hay alguno que sea negativo

console.log(res) //muestra true, ya que el -2 cumple esa condición



//----------------------------------------------------------Comparacion de listas
const ar1 = [1, 2, 3, 4];
const ar2 = [1, 2, 3, 4];

console.log(ar1 === ar2); //muestra false, aunque son idénticos, porque las listas no se pueden comparar de esta manera

//para hacerlo 1º creamos una función
const compararArrays = (array_1, array_2) =>{
    if (array_1.length !== array_2.length) return false //comprobamos si no miden lo mismo, (si no lo son, devuelve false y sale de la función)
    const res = array_1.every((valor, indice) =>{
        if (valor === array_2[indice]) return true //comparamos si el valor de array_1[indice] es idéntido a array_2[indice] 
        return false // si no se cumple lo anterior sale de la función devolviendo false
    })
    return res //si no ha salido al comparar las longitudes, devolveremos lo que esté en res
}

console.log(compararArrays(ar1, ar2)); // muestra el resultado que es true


//lo mismo de forma mas simplificada
const compararArrays2 = (array_1, array_2) => {
    if (array_1.length !== array_2.length) return false
    const res = array_1.every((valor, i) => valor === array_2[i])
    return res
}

console.log(compararArrays2(ar1, ar2)); //muestra true


//-Comprobamos que si los arrays no son idénticos, devuelve el resultado esperado:

//mismo tamaño, diferentes valores:
const ar3 = [1, 3, 3, 4]
console.log(compararArrays(ar1, ar3)) // muestra false, ya que los valores no coinciden

//distinto tamaño:
const ar4 = [1, 2, 3]
console.log(compararArrays(ar1, ar4)) // muestra false, ya que no miden lo mismo


