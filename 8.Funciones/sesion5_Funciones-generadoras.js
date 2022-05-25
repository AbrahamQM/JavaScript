/**************Tema 8 sesion 5 Funciones Generadoras*************/

//Tienen una sintaxis especial añadiendo * despues de la palabra function:
//function* miFuncion( parámetros ) { acciones }  

//--------Creamos una función generadora de ejemplo:
//Imaginemos que queremos una función que genere un Id que valla incrementándose progresivamente:
function* generaId(){
    let id = 0;
    while(true) {
        id++
        if (id > 10) {
            return "fin"//Simplemente para que salga de la función
        }
        yield id //Ver ($) para explicación
    }
}

//$-> El yield es una especie de return, que: 
//1º -devolvera un valor que le indiquemos
//2º -se queda esperando hasta que volvamos a llamar a la función generadora
//3º -al volver a llamar a la generadora, se ejecutará el código que siga y se volverá a parar cuando 
//llegue de nuevo al yield. 


//--------Instanciamos la función generadora asignándola a una variable o constante:
//Vamos a guardar la función generadora dentro de una constante:
const gen = generaId()


//--------Usamos la instancia de la función generadora:
//-Llamamos a la función y generaremos id's:
//-para obtener un valor: nombreDeConstante.next()
console.log(gen.next()) //muestra: { value: 1, done: false } (que es el objeto que devuelve "completo")
console.log(gen.next().value) //**********muestra: 2 (que es el valor que devuelve en concreto)

//-Creo una nueva instancia y la uso para ver que sucede con ambas instancias
const gen2 = generaId()
console.log(gen2.next()) //muestra: { value: 1, done: false }
console.log(gen2.next()) //muestra: { value: 2, done: false }
console.log(gen2.next()) //muestra: { value: 3, done: false }
//-Sigo usando la primera instancia hasta que termine la función
//-Comprobamos que: (Los valores devueltos son independientes a los de gen2)

console.log(gen.next()) //muestra: { value: 3, done: false } (sigue por el valor que coresponde a gen)
console.log(gen.next()) //muestra: { value: 4, done: false }
console.log(gen.next()) //muestra: { value: 5, done: false }
console.log(gen.next()) //muestra: { value: 6, done: false }
console.log(gen.next()) //muestra: { value: 7, done: false }
console.log(gen.next()) //muestra: { value: 8, done: false }
console.log(gen.next()) //muestra: { value: 9, done: false }
console.log(gen.next()) //muestra: { value: 10, done: false }
console.log(gen.next()) //muestra: { value: 'fin', done: true }
console.log(gen.next()) //muestra: { value: undefinied, done: true }
//-Podemos ver como se ejecutó el código devolviendo un id incrementado hasta que se cumple el if
//-Cuando se cumple el if, entra en el y ejecuta el código que contiene, saliendo de la función en 
// el return devolviendo lo que le indiquemos. También puede no devolver nada si no se lo indicamos.
//-El atributo (done), indica si se ha terminado la función generadora o no

