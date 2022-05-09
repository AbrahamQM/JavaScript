/*  ENUNCIADO:
En este primer ejercicio tendrás que recorrer los números del 1 al 100 mediante un bucle y que cuando muestre un número par, muestre por pantalla que el número es par, en otro caso tendrá que mostrar que es impar.

Pista: tendréis que hacer un comprobación dentro del bucle.
*/

for (let i = 1; i <= 100; i++){
    if (i % 2 === 0){
        console.log(`El número ${i} es par`);
    }else{
        console.log(`El número ${i} es impar`);
    }
}