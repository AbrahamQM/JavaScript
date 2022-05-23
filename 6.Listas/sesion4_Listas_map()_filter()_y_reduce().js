/*************Tema 6 Sesion 4 Métodos avanzados (obtención de listas a partir de listas)*******/
const array = ["San Sebastián", "Madrid", "Barcelona", "Bilbao"]


//------------------.map()
// nos devolverá un nuevo array según lo que le indiquemos en la función (Callback)

//....Ej1: Suponemos que queremos añadir un índice al principio de cada elemento ej: ("1-San Sebastián", "2-Madrid", ...)
const newArray = array.map((valor, indice) => {
    return `${indice + 1}-${valor}`; //Pongo + 1 para que no comience por 0, sino que le sumemos 1 siempre
})

console.log(newArray); //muestra:[ '1-San Sebastián', '2-Madrid', '3-Barcelona', '4-Bilbao' ]

//....Ej2: Ahora simplificamos ese código eliminando el return y las {}
const newArray2 = array.map((valor, indice) => `${indice + 1}-${valor}`);

console.log(newArray2); // Produce el resultado esperado: [ '1-San Sebastián', '2-Madrid', '3-Barcelona', '4-Bilbao' ]



//------------------.filer()
// Nos devolverá un array con los elementos que cumplan la condción

//....Ej1: En este ejemplo vamos a trabajar con un array de objetos
const listaObjetos = [
    {nombre: "Abraham", edad: 35},
    {nombre: "Pepe", edad: 70}, 
    {nombre: "Lucía", edad: 28},
    {nombre: "Paco", edad: 50},  
    {nombre: "María", edad: 23}
]

const nuevaListaObjetos = listaObjetos.filter(objeto =>{
    return objeto.nombre === "Abraham";
})

console.log(nuevaListaObjetos); // nos ha devuelto el objeto que coincide con esa condición: [ { nombre: 'Abraham', edad: 35 } ]

//....Ej2: Imaginemos que queremos obtener los objetos de personas con mas de 30 años:

//*De forma extendda para que se entienda mejor
const nuevaListaObjetos2 = listaObjetos.filter(obj => {
    if (obj.edad > 30){
        return true;
    } else{
        return false;
    }
})
console.log(nuevaListaObjetos2); // nos ha devuelto los que coinciden con esa condición:
// [ { nombre: 'Abraham', edad: 35 }, { nombre: 'Pepe', edad: 70 }, { nombre: 'Paco', edad: 50 } ]

//*De forma simplificada
const nuevaListaObjetos3 = listaObjetos.filter(obj => obj.edad > 30); //igualmente, devuelve los objetos cuya edad > 30
console.log(nuevaListaObjetos3); //muestra: 
//[ { nombre: 'Abraham', edad: 35 }, { nombre: 'Pepe', edad: 70 }, { nombre: 'Paco', edad: 50 } ]

//....Ej3: Suponemos que queremos todos los que no se llaman Pepe y son mayores de 30:

const nuevaListaObjetos4 = listaObjetos.filter(obj => obj.nombre !== "Pepe" && obj.edad > 30);
console.log(nuevaListaObjetos4); // muestra : [ { nombre: 'Abraham', edad: 35 }, { nombre: 'Paco', edad: 50 } ]

//------------------.reduce()
// Nos devolverá un elemento, valor u objeto a partir de una lista
//.reduce Permite el paso de 4 parámetros de la siguiente manera:
//lista.reduce((acumulador, valorActual, índice, arrayOriginal) => {lo que queramos hacer con ellos});
const edades = [25, 30, 5, 52, 4];

//....Ej1: Sumatorio de las edades (explicado por el profe)
const suma = edades.reduce((acumulador, valorActual, indice, arrayOriginal) =>{
    console.log(acumulador); //muestra el resultado de las operaciones (siempre se inicializa con el 1º elemento"25")
    // en cada pasada mostrara las sumas: (25, 55, 60, 112) que es :
    //(1º pasada: valor inicial, 2º pasada: valor inicial + siguiente elemento, y así mostrando el resultado de todas las operaciones excepto la última que ya se guarda en la constante suma que hemos definido) 
    console.log(valorActual); // en cada pasada mostrará los elementos que siguen al 1º (que ya está cargado en el acumulador)
    //30, 5, 52, 4
    console.log(indice); //mostrará en cada pasada el valor de indice que comenzará por 1 (el 0 ya está cargado en el acumulador)
    //1, 2, 3, 4
    console.log(arrayOriginal); //muestra en cada pasada la lista original a la que nos referimos
    
    //----Los elementos anteriores los muestro solo para entender a que se refiere cada parámetro. 
    //Ahora la operación:
    return acumulador + valorActual; //Le indicamos lo que queremos devolver.
})

console.log(suma); //muestra la suma de todos los valores: 116

//....Ej2:(implementado por mi) usando sólo los parámetros que necesitamos y simplficando la Callback Function:
const sumaEdades = edades.reduce((edad, edadActual) => edad + edadActual)
console.log(sumaEdades); //muestra la suma de todos los valores: 116


//Aún no se como sumar la edad de cada persona usando sólo el reduce() con una lista de objetos, 
//ya que me carga en el acumulador el primer objeto completo, pero he encontrado una forma en:
//https://www.delftstack.com/es/howto/javascript/sum-array-of-objects-javascript/#:~:text=Podemos%20crear%20una%20funci%C3%B3n%20llamada,simult%C3%A1neamente%20en%20una%20sola%20pasada.
// que podría ser la solución. Pero uso map() + reduce() para llegar al mismo resultado en el sig Ej3


console.log(listaObjetos.edad.reduce((sumador, edad) => sumador + edad));

/*******Prueba mía mezclando map(para obtener solo las edades) y reduce(para sumarlas)****/

//....Ej3: Imaginemos que queremos obtener la suma de todas las edades de los objetos de la listaObjetos:
const sumaEdadesPersonas = listaObjetos.map(valor => valor.edad).reduce((sumador, edad) => {
    return sumador + edad;
});

console.log(sumaEdadesPersonas); //Muestra el resultado esperado: 206

