//abierto con quokka F1->seleccionar->"quokk.js new JavaScript file",
//para que se muestre los resultados (para que funcione quokka), no guardar.


/***********************Listas, arreglos, vectores o arrays************************/
//--------------Es un conjunto de variables puestas en orden, hay diferentes formas de definirlas:

//********1: declarándola diréctamente
const lista = [1, "hola", true, undefined, null];
console.log(lista);

lista[5] = "Elemento añadido";
console.log(lista);

//********2: con new Array()
//--Lista Sin inicializar
const listaSinIniciar = new Array();
console.log(listaSinIniciar);

//--Lista inicializada
const listaInicializada = new Array(2, "adios", false, undefined, null);
console.log(listaInicializada);

//--lista indicando numero de elementos sin inicializar
const listaConElementosSinInicializar = new Array(3);
console.log(listaConElementosSinInicializar);
//inicializo uno de los elementos de la lista así:
listaConElementosSinInicializar[0] = "Primer elemento";
console.log(listaConElementosSinInicializar);

//--------------LAS LISTAS PUEDEN CONTENER LISTAS:
const lista3 = [lista, listaSinIniciar, 3];
console.log(lista3);
console.log(lista3[0]);




/**************************************Objetos************************************/
//--Creacion de objetos:
const movil = {
    //Atributos del objeto
    altura: 10,
    anchura: 5,
    marca: "Xiaomi",
    isWhite: false,
    contactos: ["Abraham", "Martin", "Lucas"],
    //objeto como atributo dentro del objeto
    tarjeta:{
        marca: "Sandisk",
        capacidad: 32
    }
}

console.log(movil.marca, movil.tarjeta.marca)

//--Crear un nuevo atributo para un objeto creado anteriormente:
movil.anyo = 2019;

console.log(movil.anyo);

//--Modificar los atributos:
movil.marca = "Samsung";

console.log(movil.marca)

//--Se pueden definir las keys(nombres de los atributos) con "" 
// porque no pueden tener algunos símbolos como '-':
const coche = {
    "cc-motor": 1800,
}

console.log(coche["cc-motor"])



/***************************************Fechas*************************************/
//Existen librerias como Moment.js para ayudarnos a trabajar con fechas

//--Crear fechas:
//new Date();
const ahora = new Date(); //Fecha exacta del momento en que se creó la variable

console.log(ahora);

//Fecha indicando milisegundos (comienza a contar desde 01/01/1970):
const fecha_milis = new Date(5000); //Dentro del paréntesis podemos indicar una cantidad de milisegundos desde que  se empieza a contar. (5000ms = 5s)

console.log(fecha_milis)

//Fecha indicando una cadena que se refiere a una fecha:
const fecha_cadena = new Date("8 july 1987");

console.log(fecha_cadena);

//Fecha de valores (año, mes"comienzan por 0 como los arrays", día):
const fecha_valores = new Date(1987, 6, 8)

console.log(fecha_valores)

//Obtener las partes de la fecha por separado
const dia = ahora.getDate();
const mes = ahora.getMonth() + 1; // +1 para compensar que comienzan por 0 como los arrays
const anyo = ahora.getFullYear();

console.log(dia, mes, anyo); //Sin formatear la cadena
console.log(dia + '/' + mes + '/'+ anyo); //Formateando la cadena


