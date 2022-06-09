//---Para usar ES6 haciendo "name export" o exportación por nombre
//Lo exportamos usando "export" al inicio de cada definicion 
//para que sean accesibles desde otros archivos.

export function suma(a, b){
    return a + b
}

export function multiplica(a, b){
    return a * b
}

export function eleva(a, b){
    return a ** b
}

export function factorial(a){
    //factorial de 5 = 5 * 4 * 3 * 2 * 1 (un nº * 1 = numero, por lo que podemos obviar el 1)
    let factorial = 1;
    for(let i = 2; i<=a; i++){
        factorial *= i;
    }
    return factorial;
}

export const nombre = "Matemáticas" 




