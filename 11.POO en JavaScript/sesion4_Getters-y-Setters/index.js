/**************Tema 11 POO sesion 4 Getter y Setter en objetos**************/

//Los getter y setter los usé directamente en la sesion anterior para obtener y modificar atributos
//El profe hizo el tutorial usando obtenerNombre() en lugar de getNombre(). 
//yo los modifiqué en mi index.js y añadí el setNombre() ya que los conocía de Java

//--------LAS FUNCIONES GETTER Y SETTER NO DEBEN SER PRIVADAS NI PROTEGIDAS

class Persona{
    #nombre;
    #edad;

    constructor(name, age) {
        this.#nombre = name
        this.#edad = age
    };

    //getter
    getNombre(){return this.#nombre}
    getEdad(){return this.#edad}

    //setter
    setNombre(name){this.#nombre = name}
    setEdad(age){this.#edad = age}

    saludo(){ console.log(`--Hola, soy la persona: ${this.nombre} y, tengo ${this.edad} años)`) }
}

const uno = new Persona("Abraham", 35)

console.log(uno)//Persona {}
// console.log(uno.#nombre) ----Da error
// console.log(uno.#edad) ----Da error
console.log(uno.nombre)//undefined
console.log(uno.edad)//undefined

//Uso de getter (métodos para obtener atributos private)
console.log(uno.getNombre(), uno.getEdad())//Abraham 35 

//uso de setter (métodos para modificar atributos private)
uno.setEdad(69)
uno.setNombre("Pluto")

console.log(uno.getNombre(), uno.getEdad())//Pluto 69

