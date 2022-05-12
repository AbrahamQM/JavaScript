// Tema 4  Strings Sesion 1

/********************formas de definir strings *************/

/*--------------------------String estático --------------------*/
// Con ""
let str_doble = "Hola soy un texto con somillas dobles";
console.log(str_doble);


//con ''
let str_simple = 'Hola soy un texto con somillas simples';
console.log(str_simple);


//***** Para poner "" dentro del string:

//1. Usar \ antes de cada comilla:

//" \" \" ""
let str_comillas = "1.Entonces me dijo \"ve a sacar la basura\".";
console.log(str_comillas);

//' \' \' '
let str_comillas1 = '2.Entonces me dijo \'ve a sacar la basura\'.';
console.log(str_comillas1);

//2. Usar ambos tipos de comillas intercaladas:

//' "" '
let_str_comillas2 = '3.Entonces me dijo "ve a sacar la basura".';
console.log(let_str_comillas2);

// " '' "
let_str_comillas3 = "4.Entonces me dijo 've a sacar la basura'.";
console.log(let_str_comillas3);


/*-------------------------String  dinámico y con saltos de línea---------------- */

//***********Uso de las comillas invertidas o (backticks).

//Se pueden usar de forma estática:
let str_backticks_est = `Hola esto es un string con backticks.`; 
console.log(str_backticks_est);

//Pero su razon es usarlas contenido dinámico:
let nombre = "Abraham"; //podemos cambiar el nombre y que se modifique cada vez q se use
let saludo = `Hola ${nombre}, Bienvenido!!`;

console.log(saludo);

//----Usar las backticks como plantillas html:----
//Ojo: Recuerda que permite saltos de línea, lo que lo hace mucho mas legible.
//De la siguiente manera, podemos crear html:
let plantilla = `
<html>
    <h1>Hola ${nombre}, Esto es un título</h1>
    <p>Esto es un parrafo</p>
</html>
`;

console.log(plantilla);


/*---------------------------Concatenar strings: -------------------------*/
let libros  = ["El monje que vendió su ferrari", "Empieza por el por qué.", "El poder del ahora"];
/****************************Ojo seguimos en la siguiente sesión******************** */



