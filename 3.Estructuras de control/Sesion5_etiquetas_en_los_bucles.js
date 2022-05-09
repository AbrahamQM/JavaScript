/************************Etiquetas en los bucles**************************/

// Labels
/* Nos permiten nombrar y controlar los bucles for y while */

//****ej sin etiquetas:
let unidades = 0;
let decenas = 0;

while(true) { //este bucle se va a encargar de controlar las decenas   
    while (true) { //este se va a encargar de controlar las unidades
        console.log(`El número actual es: ${decenas}${unidades}`);
        unidades++;
        if (unidades === 10){
            unidades = 0;
            break;
        }
    }
    decenas++;

    if (decenas === 2 ) {
        console.log(`El número actual es: ${decenas}${unidades}`);
        break;
    }
}


//**** Alternativa usando labels: (se pone la etiqueta: el bucle normal)
let unidad = 0;
let decena = 0;


bucleDecenas: while(true) { //este bucle se va a encargar de controlar las decenas   
    bucleUnidades: while (true) { //este se va a encargar de controlar las unidades
        console.log(`El número actual es: ${decena}${unidad}`);
        unidad++;
        if (unidad === 10){
            unidad = 0;
            break bucleUnidades; // Indicamos específicamente que bucle queremos romper
        }
        if (decena === 2 ) {
            break bucleDecenas; // Indicamos específicamente que bucle queremos romper
        }
    }
    decena++;
}


/*
Lo interesante de las labels es que podemos afectar a bucles que estén por encima de nuestro bucle actual
*/