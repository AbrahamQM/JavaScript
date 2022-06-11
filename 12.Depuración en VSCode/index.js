/*****Tema 12 Depuración en VSC (Sólo hay una sesion) ************* */

const persona = {
    nombre:"Abraham",
    edad: 35
}

console.log(persona)

function obtenDobleEdad(edad){return 2 * edad}

const dobleEdad = obtenDobleEdad(persona.edad)

console.log(dobleEdad)

// Para probar ese código, hasta ahora nos vamos al terminal y ejecutamos "node index.js"

//----------------Pero la forma correcta es DEPURANDO EL CÓDIGO

//--Podemos presionar F5 y seleccionar uno de los métodos de depuración que nos ofrece 
//O, Presionamos el icono del margen izquierdo en VSC que es una flecha con un bicho. 

//Podemos crear un breackpoint marcando la línea igual que hacíamos con IntelliJ

//La sesión se basa en una explicación básica sobre como depurar con este IDE

function obtenArray(edad){
    let arrayNums = []
    for (let i = 0; i < 10; i++){
        const numero = edad + i
        console.log(numero)
        arrayNums = [...arrayNums, numero]
    }

    return arrayNums
}

const array = (obtenArray(persona.edad))
console.log(array)