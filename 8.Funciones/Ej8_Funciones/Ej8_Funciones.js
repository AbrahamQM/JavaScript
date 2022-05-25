// Crea un archivo JS que contenga las siguientes líneas:


// - Una función sin parámetros que devuelva siempre "true"
function cierto(){return true}
console.log(cierto())// muestra: true


// - Una función asíncrona que utilice un setTimeout y pase por consola un "Hola soy una promesa" 
//5 segundos después de haberse ejecutado
function asincrona(){
    setTimeout(function(){console.log("Hola soy una promesa")}, 5000)
}

asincrona() //tarda 5 seg en mmostrar: "Hola soy una promesa"


// - Una función generadora de índices pares automáticos
function* generadora(){
    let id = 0
    while(true){
        if (id % 2 == 0){
            yield id
        }
        id++
    }
}

let pares = generadora()

console.log(pares.next().value) // muestra: 0
console.log(pares.next().value) // muestra: 2
console.log(pares.next().value) // muestra: 4
console.log(pares.next().value) // muestra: 6
console.log(pares.next().value) // muestra: 8
console.log(pares.next().value) // muestra: 10
console.log(pares.next().value) // muestra: 12
console.log(pares.next().value) // muestra: 14
