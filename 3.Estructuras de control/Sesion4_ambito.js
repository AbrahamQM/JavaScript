/***************************Ámbito o alcance de variables en los bucles*****************************/

/*
Las variables let son locales al bucle
Las variables var son globales a todo el código
las constantes const son locales
*/

// Declaramos una variable global con var, será accesible desde fuera del bucle (Guardando el último valor)
for (var i = 0; i < 10; i++){
    console.log(i);
}

console.log(i); // muestra el último valor: 10



// Declaramos una variable local con let al declarar el bucle, NO será accesible desde fuera del bucle.
for (let j = 0; j < 10; j++){
    console.log(j);
}

//console.log(j); //muestra el mensaje j is not definied

//Declaramos una variable local y una global dentro del bucle para ver el ámbito de ambas:
for (let i = 0; i < 10; i++){
    let j = 56;
    var x = 300;
    console.log(j); //muestra 56, 10 veces
    console.log(x); //muestra 300, 10 veces
}

// console.log(j); //muestra el mensaje j is not definied
console.log(x); //muestra 300


// ---Las constantes son locales
for (let i = 0; i <= 5; i++){
    const a = 100;
    console.log(a); // muestra 100, 6 veces
}

console.log(a); // muestra a is no defined