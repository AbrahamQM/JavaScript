/***********************************Comparaciones***************************************/

//-------------------Igualdad
let a = 5;
let b = '5';

// Igualdad débil ==. Compara sólo el valor
if (a == b){
    console.log("a es igual a b, débil"); //esta se cumple, por que el valor es el mismo. Aunque el tipo no lo sea.
}


// Igualdad Fuerte ===. Compara el valor y el tipo

if (a === b){
    console.log("a es igual a b, fuerte"); //esta no se cumple. Porque el valor es el mismo pero el tipo no lo es.
}

console.log(typeof a) //number
console.log(typeof b) //string



//----------------------Desigualdad

let c = 4;
let d = 5;

// Desigualdad débil != (comprueba que el valore sea diferente)
if (c != d){
    console.log("c es diferente a d"); //entra
}

if (b != d){
    console.log("Son diferentes débil"); //Este no entra, porque el valor es igual aunque el tipo no lo sea.
}

// Desigualdad Fuerte !== (Comprueba que el valor y el tipo sean diferentes)
if (c !== d){
    console.log("c es diferente a d, fuerte"); //entra
}

if (b !== d){
    console.log("Son diferentes fuerte"); //entra, porque aunque tengan el mismo valor, son de diferente tipo
}


//-------------------Mayores y menores
let max = 10;
let min = 5;

// mayor que >
if (max > min){
    console.log("Max es mayor que Min")
}

//menor que <
if (max < min){
    console.log("Max es menor que Min")
}


//mayor o igual >=
if (max >= min){
    console.log("Max es mayor que Min")
}

if (max >= 10){
    console.log("Max es mayor o igual que 10")
}

//menor o igual <=
if (min <= max){
    console.log("Max es menor o igual que Min")
}

if (max <= 5){
    console.log("Max es menor o igual que 10")
}
