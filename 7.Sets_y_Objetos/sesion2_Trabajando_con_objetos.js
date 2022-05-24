/****************Tema 7 sesión 2 Trabajando con Objetos***********/


//----------Declaración de un objeto objeto = { atributos del objeto con ':' al final de la key}
const obj = {
    id: 4,
    nombre: 'Juan', 
    apellido: 'Gonzalez',
    isDeveloper: true, 
    libros_Favoritos: ["El método", "El Método de la manifestación"],
    '4-Juegos': [1, 2, 3, 4], //Para incluir símbolos como (-, +, /, *, ...) o números+letras
    //  en la key hay que porner la key como String
    perro1: "Willy", //Poner un nº al final del nombre si se puede
    // 1perro: "Toby" //da error
}


//---------Acceso a valores objeto.key o si la key es un String objeto["key"]
console.log(obj["4-Juegos"]) // muestra: [1, 2, 3, 4]
console.log(obj.nombre) // muestra: Juan

//-Acceder a propiedades usando variables
const prop = "isDeveloper"
console.log(obj[prop]) // muestra: true


//---------Replicar un objeto ------------------------------------------------------------------

/*------------------*Forma INCORRECTA*----------------*/

//**----OJO NO SE PUEDE HACER CON UN = porque lo que hace JS es asignarle la referencia al nuevo objeto
//**por lo que no trabajaremos con diferentes objetos, sino con diferentes referencias al misno objeto
const obj2 = obj
console.log(obj2) // muestra: 
// { id: 4,
// nombre: 'Juan',
// apellido: 'Gonzalez',
// isDeveloper: true,
// libros_Favoritos: [ 'El método', 'El Método de la manifestación' ],
// '4-Juegos': [ 1, 2, 3, 4 ],
// perro1: 'Willy' }

//**Ahora modifico un atributo de obj2 y vemos como se modificca en obj también

obj2.nombre = "Abraham"
console.log(obj.nombre) // muestra: Abraham
console.log(obj2.nombre) // muestra: Abraham
//**Ambos muestran el nombre nuevo que le hemos asignado

/*------------------*Forma CORRECTA*-------------------*/

//**---- PARA REPLICAR EL OBJETO CORRECTAMENTE, SE HACE CON EL FACTOR DE PROPAGACIÓN DE ASÍ:
// nuevoObjeto = {...objetoACopiar}
const obj3 = {...obj}
obj3.nombre = "Pepe"
console.log(obj.nombre) // muestra: Abraham
console.log(obj3.nombre) // muestra: Pepe


//-------------Ordenar listas de objetos en función de un atributo-------------------------------------------
const listaPeliculas = [
    {titulo: "Lo que el viento se llevó", anyo: 1939},
    {titulo: "Titanic", anyo: 1997},
    {titulo: "Mohana", anyo: 2016},
    {titulo: "El efecto mariposa", anyo:2004},
    {titulo: "Ted", anyo:2012}
]

//--Ordenar una lista con lista.sort(funcion Callback)
// **LA DOCUMENTACION DICE:
//Sorts an array in place. This method mutates the array and returns a reference to the same array.
// @param compareFn
// Function used to determine the order of the elements. It is expected to return a negative value 
//if the first argument is less than the second argument, zero if they're equal, and a positive value otherwise. 
//If omitted, the elements are sorted in ascending, ASCII character order.
// [11,2,22,1].sort((a, b) => a - b)
// **

//*Ej1: Ordenamos por anyo en orden ascendente
listaPeliculas.sort((a, b) => a.anyo - b.anyo) //(a.anyo - b.anyo) Devuelve índice negativo cuando el año de a 
//es menor que el de b 


console.table(listaPeliculas) // Uso .table en lugar de .log para que lo muestre mas bonito, muestra:
// ┌─────────┬─────────────────────────────┬──────┐ 
// │ (index) │           titulo            │ anyo │ 
// ├─────────┼─────────────────────────────┼──────┤ 
// │    0    │ 'Lo que el viento se llevó' │ 1939 │ 
// │    1    │          'Titanic'          │ 1997 │ 
// │    2    │    'El efecto mariposa'     │ 2004 │ 
// │    3    │            'Ted'            │ 2012 │ 
// │    4    │          'Mohana'           │ 2016 │ 
// └─────────┴─────────────────────────────┴──────┘ 

//*Ej2: Ordenamos por título en orden alfabético.

//(el profe lo hizo usando a.titulo en lugar de a.anyo (como antes), pero no se lo ordenó)
//Buscando por internet encontré: https://www.delftstack.com/es/howto/javascript/javascript-sort-array-of-objects-alphabetically/

function SortArray(a, b){
    if (a.nombre < b.nombre) {return -1;}
    if (a.nombre > b.nombre) {return 1;}
    return 0;
}

const a = listaPeliculas.sort(SortArray)
console.table(a) 
//PERO TAMPOCO FUNCIONA (NO SE SI ES POR EL Quokka O XQ, pero debería funcionar, 
//tanto como lo hizo el profe, como con la función SortArray() )