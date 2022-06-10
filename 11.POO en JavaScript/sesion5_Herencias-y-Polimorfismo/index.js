/******Tema 11 POO sesion 5 Herencias entre objetos y polimorfismo ******/

// ******************************Herencias o Inheritance ****************

console.log("\n-----------Herencias, SE USA LA PALABRA 'extends':")

class Persona{
    constructor(name, age){this.nombre = name; this.edad = age;}

    saludo(){ console.log(`--Hola, soy la persona: ${this.nombre} y, tengo ${this.edad} años.`) }
}

class Desarrollador extends Persona{
    constructor(name, age, language){
        super(name, age) //Llamamos al superconstructor, que se refiere al de la clase superior "Persona"
        this.lenguajes = language
    }

    muestraTechs(){console.log(`---Domino: ${this.lenguajes}`)}    
}

const nuevoDev = new Desarrollador("Abraham", 35, "Java, Python, JS")
console.log(nuevoDev)//Desarrollador { nombre: 'Abraham', edad: 35, lenguaje: 'Java, Python, JS' }
nuevoDev.saludo() //--Hola, soy la persona: Abraham y, tengo 35 años)
nuevoDev.muestraTechs() //---Domino: Java, Python, JS


// ******************************Polimorfismo ***************************


console.log("\n\n-----------Polimorfismo")

class Desarrolla2 extends Persona{
    constructor(name, age, language){
        super(name, age) //Llamamos al superconstructor, que se refiere al de la clase superior "Persona"
        this.lenguajes = language
    }
    
    //--Hacemos polimorfismo 'override' del método saludo, haciendo que:
    //-si es de la clase Persona, saluda de una forma
    //-si es de la clase Desarrolla2, saluda de otra forma.
    saludo() {console.log(`--Hola, soy el desarrollador: ${this.nombre} y, tengo ${this.edad} años. Domino: ${this.lenguajes}`)}
}

const unoCualquiera = new Persona("Un tio", 18)//-si es de la clase Persona, saluda de una forma
const nuevoDev2 = new Desarrolla2("Jobs", 99, ".Net, C Sharp, otros que me invento")//-si es de la clase Desarrolla2, saluda de otra forma.

unoCualquiera.saludo()//--Hola, soy la persona: Un tio y, tengo 18 años.
nuevoDev2.saludo()//--Hola, soy el desarrollador: Jobs y, tengo 99 años. Domino: .Net, C Sharp, otros que me invento



//---------------------------Polimorfismo añadiendo super() para acceder al método de la clase padre

console.log("\n\n----**Polimorfismo añadiendo super() para acceder al método de la clase padre")
class Desarrolla3 extends Persona{
    constructor(name, age, language){
        super(name, age) //Llamamos al superconstructor, que se refiere al de la clase superior "Persona"
        this.lenguajes = language
    }
    
    //--Hacemos polimorfismo 'override' del método saludo, accediendo tmbién a el saludo de la clase padre con super.método()
    saludo() {
        super.saludo() 
        console.log(`Y soy desarrollador de: ${this.lenguajes}`)}
}

const dev3 = new Desarrolla3("Dev3", 41, "JavaScript")
dev3.saludo() //muestra:
// --Hola, soy la persona: Dev3 y, tengo 41 años.
// Y soy desarrollador de: JavaScript