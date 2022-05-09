/*************************Break & Continue*************************/
let lista = [1, 2, 3, 4, 5, 6, 7, 8];

// Break: para romper el bucle
for (let i = 0; i< lista.length; i++){
    console.log(lista[i]);

    if (lista[i] > 5){
        break; //rompe el bucle 
    }
    
}


// Continue: para saltarte el código de acciones

for (let i = 0; i< lista.length; i++){
    if (lista[i] === 2){
        continue; // Cuando lista[i] vale 2, se salta el código a continuación y sigue con el siguiente valor
    } 
    console.log(lista[i]);
}
