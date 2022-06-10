/******Tema 11 POO sesion2 Creación y uso de clases *********/

//-----Declaración de clases:
//class NombreDeObjeto { atributos y métodos separados por ';'}
//La primera letra del nombre, mejor en mayúsculas, al contrario que las variables o atributos

class Persona {
    // nombre;
    // edad;
    // isDevelopoer;
    //-Comentado por que ya se van a definir en el contructor, y no es necesario hacerlo antes.

    //Método constructor:
    constructor(nombre, edad, isDevelopoer) {
        this.nombre = nombre
        this.edad = edad
        this.isDevelopoer = isDevelopoer
    };

    saludo(){ console.log("Hola, soy la persona:", this.nombre) }
    despedida(){ console.log(`Adiós de parte de ${this.nombre}`)}
}


//----INSTANCIACIÓN  O Creación de un objeto a partir de una clase:
const yo = new Persona("Abraham", 35, true)

yo.saludo() // muestra: Hola, soy la persona: Abraham
console.log("Tengo:", yo.edad, "años") // muestra: Tengo: 35 años
yo.despedida() // muestra: Adiós de parte de Abraham

//--Operador "instanceof" nos devolverá si un elemento u objeto es instancia de una clase
//Es como typeof pero para las clases en lugar de variables
console.log(yo instanceof Persona) // muestra: true
console.log(yo.nombre instanceof Persona ) // muestra: false