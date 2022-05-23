/*****Tema 6 sesion3 Métodos de iteración de listas y búsqueda de valores*****/

const array = ["hola", 2, 5, 90, false, undefined]
//----Usando un bucle for (es la forma tracicional de hacerlo)

for (let i = 0; i<array.length; i++){
    console.log(array[i]); //irá mostrando en cada valor de i el contenido del array en ese índice
}


//----Usando método mas moderno y eficiente:

//-Metodo .forEach()
//lista.forEach(elemento => {acciones a realizar})
array.forEach(valor => {
    console.log(valor); // irá mostrando cada elemento del array
});

//Otro ejemplo en el que vamos a sumar los elementos con .forEach()
let resultado = 0;
const arrayNums = [3, 6, 2, 77, 2];

arrayNums.forEach(valor =>{
    resultado += valor;
})

console.log(resultado); // muestra el resultado de la suma: 90


//---------------------------------------------------------------------------------//

//---Búsqueda de un valor dentro de una lista con .find(función Callback o recursiva)
//lista.find(valor => {lo que queremos})


//....Ej1: suponemos que queremos encoontrar el elemento 77 dentro de la lista
const variable = arrayNums.find(valor =>{
    if (valor === 77){
        return true;
    }
});

console.log(variable); //devuelve el valor: 77
//Pero esto sólo nos devuelve el valor que buscamos (SI ESTÁ EN LA LISTA, si no devuelve undefined)


//....Ej2: queremos que nos devuelva un objeto de una lista, en este caso quien tenga 50 años
const listaObjetos = [
    {nombre: "Abraham", edad: 35},
    {nombre: "Pepe", edad: 70}, 
    {nombre: "Lucía", edad: 28},
    {nombre: "Paco", edad: 50},  
    {nombre: "María", edad: 23}
]

const objeto = listaObjetos.find(obj =>{
    if (obj.edad === 50){
        return true;
        //return obj produce el mismo resultado
    }
})

console.log(objeto); //Vemos como nos ha devuelto el objeto dentro de la lista que cumple con la condición (edad: 50) muestra: { nombre: 'Paco', edad: 50 }
//Si hubiera más de un objeto que cumple esa condición, devolverá el primero


//....Ej3: El mismo ejemplo pero simplificando la función (callback o recursiva) que le pasamos al find
const objeto2 = listaObjetos.find(obj =>{
    return obj.edad === 50; //devolvemos el objeto cuya edad coincide con lo que queremos
})

console.log(objeto2);// muestra: { nombre: 'Paco', edad: 50 }


//....Ej4: lo mismo pero aún mas simplificado
const objeto3 = listaObjetos.find(obj => obj.nombre === 'Lucía'); 
// produce el mismo resultado, devuelve el objeto cuyo nombre coincide con el valor que le indiquemos (en este caso 'Lucía').
console.log(objeto3); //muestra: { nombre: 'Lucía', edad: 28 }
console.log(objeto3.edad); //muestra: 28 


//....Ej5: Una forma aún más eficiente usando (deconstrucción de objetos):
const { edad } = listaObjetos.find(o => o.nombre === 'Abraham'); //nos devolverá el elemento edad del objeto cuyo nombre coincida con el indicado:
console.log(edad); // muestra: 35

//o:
const {nombre} = listaObjetos.find(o => o.edad === 35);
console.log(nombre); // muestra: Abraham