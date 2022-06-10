/*
Crea un nuevo fichero JS que contenga las siguientes líneas:
*/


//--- Una clase llamada "Estudiante" que tenga
class Estudiante{
// - Una variable llamada nombre
    #nombre

// - Otra variable lista llamada asignaturas con 3 asignaturas: Javascript, HTML, CSS
    #asignaturas = ["Javascript", "HTML", "CSS"]

    constructor(name){this.#nombre = name}

// - Un método "obtenDatos" que devuelva un objeto con las propiedades nombre y asignaturas
    obtenDatos(){return {nombre: this.#nombre, asignaturas: this.#asignaturas}}
}


//- Crea una nueva instancia de "Estudiante"
const alumno1 = new Estudiante("Chicho Terremoto")

//- Haz la llamada al método obtenDatos
datos = alumno1.obtenDatos()

console.log(datos)// Muestra:
// {
//     nombre: 'Chicho Terremoto',
//     asignaturas: [ 'Javascript', 'HTML', 'CSS' ]
// }
