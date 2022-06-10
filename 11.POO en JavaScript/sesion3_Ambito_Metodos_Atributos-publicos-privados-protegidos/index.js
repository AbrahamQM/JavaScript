/********* Tema 11 POO sesion 3: Ámbito de las clases, métodos y atributos públicos, privados y protegidos*****/

class Persona {
    constructor(name, age) {
        this.nombre = name
        this.edad = age
    };

    saludo(){ console.log(`--Hola, soy la persona: ${this.nombre} y, tengo ${this.edad} años)`) }
}


const persona = new Persona("Abraham", 35)

console.log("\n\n-----------------Atributos sin private--------------------\n")
persona.saludo() //--Hola, soy la persona: Abraham y, tengo 35 años)

persona.nombre = "Nombre cambiado"

persona.saludo() //--Hola, soy la persona: Nombre cambiado y, tengo 35 años)
//------Como vemos en la línea anterior, aunque persona sea de tipo constante, se pueden modificar los valores.


console.log("\n\n-----------------Atributos private con #--------------------\n")

//PARA PROTEGER ESOS ATRIBUTOS: usaremos la sintaxis de private: #atributo
//Si protegemos un atributo, sólo podremos acceder a este desde dentro del objeto.

//En este caso si se tienen que declarar las variables:
class Perro {
    //Atributos private
    #nombre;
    #edad;

    constructor(name, age) {
        this.#nombre = name
        this.#edad = age
    };

    //Ejemplo de función tipo getter 
    getNombre(){ return this.#nombre }
    //Ejemplo de función tipo setter
    setNombre(name){ this.#nombre = name}

    //Ejemplo de función private:
    #getEdad(){return this.#edad}

    //Ahora podemos usar #getEdad() sólo desde dentro del objeto, ver Ln:74
    saludo(){ console.log(`--Hola, soy el perro: ${this.#nombre} y, tengo ${this.#getEdad()} años)`) }
}

const pastor = new Perro("Toby", 3)

pastor.saludo() //--Hola, soy el perro: Toby y, tengo 3 años)

// pastor.#nombre = "Nombre Nuevo"     PONERLO ASÍ DA UN ERROR
pastor.nombre = "Nombre Nuevo" //Ponerlo así no modifica el atributo de pastor, sino que crea uno nuevo sin proteger

console.log(pastor.nombre)// --Nombre Nuevo

console.log(pastor)//Perro { nombre: 'Nombre Nuevo' }
//vemos que en este caso no se puede cambiar ni acceder el atributo, ya que está privado con '#' (private)

pastor.saludo()//--Hola, soy el perro: Toby y, tengo 3 años)

//-------Para acceder a los atributos o modificarlos debemos utilizar funciones declaradas en el objeto:
//getNombre o setNombre.

pastor.setNombre("#Perro.nombre modificado con setNombre()")
console.log(pastor.getNombre())//#Perro.nombre modificado con setNombre()
pastor.saludo()//--Hola, soy el perro: #Perro.nombre modificado con setNombre() y, tengo 3 años)

//Como podemos comprobar, con el setter si podemos modificar el atributo privado, ya que se hace con 
//una función desde dentro del objeto

//------Método privado #getEdad
//console.log(pastor.#getEdad()) ---Da el error "No se puede acceder a la propiedad "#getEdad" fuera de la clase "Perro" porque tiene un identificador privado."
//---Sin embargo al usar la función saludo, si se usa la función getEdad dentro de esta sin problemas.


//----------------------------PROTECTED con _
console.log("\n\n-----------------Atributos protected con '_' --------------------\n")

class Desarrollador{
    _isDeveloper = true;
    constructor(name, age){this.nombre = name; this.edad = age;}

}


const dev = new Desarrollador("Luis", 54)
// Se supone que no podremos acceder a _isDeveloper desde dentro, pero al mostrar el objeto si accede correctamente.
console.log(dev)//Desarrollador { _isDeveloper: true, nombre: 'Luis', edad: 54 }

//---------------->Algo no está funcionando correctamente o ha cambiado desde el curso.<----------------
