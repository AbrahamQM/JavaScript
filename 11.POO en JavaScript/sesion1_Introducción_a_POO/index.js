/***** Tema 11 POO sesión 1 Introduccion a la programación orientada a objetos*******/

//Ej de objeto

const persona = {
    nombre: "Abraham",
    edad: 35,
    isDeveloper: true,
    saludo: function() {console.log('Hola')}    
}

console.log("--Persona:\n", persona)
persona.saludo()

//Si quisieramos crear otros objetos persona, podríamos duplicar el código o crear una funcion que devuelva una persona:

//*** FACTORY FUNCTION
//COMENTADO POR QUE LO MEJORAMOS EN Ln: 29 ya que si un parámetro tiene nombre idéntico a un atributo, se puede obviar
// const creaPersona = (nombre, edad, isDeveloper) => {
//     return{
//         nombre: nombre, 
//         edad: edad, 
//         isDeveloper: isDeveloper,
//         saludo: function(){console.log("Hello!")}
//     }
// }

//*** FACTORY FUNCTION
const creaPersona = (nombre, edad, isDeveloper) => {
    return{
        nombre, //es lo mismo que (nombre: nombre,)
        edad, 
        isDeveloper,
        saludo: function(){console.log("Hello!")}
    }
}


//--Para utilizar esa "FACTORY FUNCTION" sería así:
const persona2 = creaPersona("Paco", 40, false);

//Lo mostramos por consola para comprobar:
console.log("--Persona2:\n", persona2)

//----------De esa manera, utilizando creaPersona(), podemos crear todos los objetos que necesitemos

