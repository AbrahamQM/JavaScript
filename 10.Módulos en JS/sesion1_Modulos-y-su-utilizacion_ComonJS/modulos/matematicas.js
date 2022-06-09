function suma(a, b){
    return a + b
}

function multiplica(a, b){
    return a * b
}

function eleva(a, b){
    return a ** b
}

function factorial(a){
    //factorial de 5 = 5 * 4 * 3 * 2 * 1 (un nº * 1 = numero, por lo que podemos obviar el 1)
    let factorial = 1;
    for(let i = 2; i<=a; i++){
        factorial *= i;
    }
    return factorial;
}


//---Lo exportamos usando "module.exports" para que sean accesibles desde otros archivos.

module.exports = { //definimos que es lo que queremos exportar
    suma,
    multiplica,
    eleva,
    factorial
}