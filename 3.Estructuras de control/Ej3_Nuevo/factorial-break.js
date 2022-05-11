/*
- factorial-break.js -> Este archivo debe calcular el factorial de 10 utilizando un bucle while, una bifurcación if y una sentencia break
*/

let resultado = 10;
let i = resultado;
while (true){
    if (i > 0){
        resultado *= i;
        i--;
    }else{
        break;
    }
}


console.log(resultado);