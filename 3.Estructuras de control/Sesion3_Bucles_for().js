/******************************Bucles for*****************************/

//-----for (inicialización, condición, actualización){}
for (let i = 0; i < 5; i++){
    console.log("i vale:" + i);
}

for (let i = 0; i < 10; i += 3){
    console.log("i vale:" + i);
}


//-----Trabajando con una lista 
let lista = [1, 4, 6, 2, 3, 7, 10, 12];

// con un for normal
for (let i = 0; i < lista.length; i++) {
    console.log(lista[i]); 
}

// con un forOf: for (const iterator of object) {}

for (let elemento of lista){
    console.log(elemento)
}

// con un forEach: array.forEach(element => {});
lista.forEach(valor =>  {
    console.log(valor)
})


//------Trabajando con objetos
// con un forIn:
/*
for (const key in object) {
    if (Object.hasOwnProperty.call(object, key)) {
        const element = object[key];
    }
}
*/
let persona = { // objeto con el que trabajaremos
    nombre: "Abraham",
    apellido: "Quintana", 
    edad: 34,
    isDeveloper: true
}

for (let propiedad in persona){
    console.log(propiedad); //muesta las propiedades
    console.log(persona[propiedad]); //muestra el valor de cada propiedad
    console.log(propiedad + ': ' +persona[propiedad]); // muestra la propiedas y su valor
}
