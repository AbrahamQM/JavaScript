/*********Tema 8 sesion 4 Funciones asíncronas y promesas*************/

//--Funciones Asíncronas:

//--Son aquellas funciones que al llamarlas, pueden tardar algo de tiempo en ejecutarse.
//Por ejemplo funciones que accedan a una BBDD y tengan que obtener datos, ese tiempo que tarda en hacerlo
//hay que tenerlo en cuenta para la ejecución del resto de código.

function miAsinc(){
    //Hace una llamada a una BBDD externa
    //Puede darnos algun error
}

//--Deficinión de Promesas ->Son funciones que pueden ejecutarse de forma exitosa o no exitosa:

//nombreDePromesa = new Promise(función callback con al menos 2 parámetros (resolve, reject)) 
//(resolve, reject) "Se pueden nombrar como queramos pero en ese orden"
const miPromesa = new Promise((resolve, reject) => {
    if (true) { //Si funciona correctamente ->condición que iria en lugar de true
        resolve() //Devolvemos un resolve sería como devolver (éxito) u OK
    } else{ // Si no funciona correctamente la lógica que necesitemos
        reject() //Devolvemos un reject que sería como devolver un (error o fallo)
    }
})

//Ejemplo de uso de la anterior promesa:

miPromesa
    .then(() => console.log("Se ha ejecutado de forma correcta")) //Usamos .then() para actuar si se cumple la promesa
    // Cuando se ejecute de forma correcta (lo que hay en el 1º paréntesis "ahora vacío") se ejecutara => lo que sea
//-de forma que:
// si la condición en Ln:19 se cumple, se ejecutara => lo que sea
//-para comprobar que pasaría si no se cumple, colocamos false en lugar de true en Ln:10,
// no se ejecutara =>lo que sea, en este caso no se muestra en terminal el mensaje.
    .catch(() => console.log("Error")) //Usamos .catch() para capturar el error en los casos que no se cumple la promesa
    //Capturamos el error y lo gestionamos, en este caso: mostramos por consola "Error"
// Es lo que sucede si no se cumple el if de la Ln:19
//Para comprobarlo-> poner false o una condición que no se cumpla en el if de Ln:19
    .finally(() => console.log("Fin de la promesa")) // Usamos .finally() para cosas que queremos que se ejecuten siempre
//Sea cual sea el resultado de la promesa, siempre se ejecutará, 
//Un ejemplo sería usarlo para desconectarse de la BBDD   


//---------async y await son otras formas de consumir promesas, (lo veremos mas adelante)