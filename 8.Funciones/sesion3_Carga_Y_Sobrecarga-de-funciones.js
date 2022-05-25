/*************Tema 8 sesion 3 Carga y sobrecarga de funciones*******************/

function saludar(){
    hola()
}

function hola(){
    console.log("Hola, soy la función hola()")
}

saludar()
//1º se ejecuta la función global() "CREO que es la llamada al este archivo .js"
//2º se ejecuta la linea 11 saludar()
//3º la función saludar() declarada en Ln:3-5  instanciada en Ln:11->llama a la función hola()
//4º se muestra en consola "Hola, soy la función hola()" segun especifica Ln:8 

//--orden de carga de funciones en memoria (STACK)
//1º global()
//2º saludar() global()
//3º hola() saludar() global() 
//4º saludar() global()
//5º golbal()
//-Se van cargando las funciones según el orden de instanciación y luego se van descargando en orden inverso
//una vez se han ejecutado cada una de las funciones


//--SOBRECARGA DE FUNCIONES  -StackOverflow-
//a parte de ser una web de consulta, ES EL NOMBRE PARA LA SOBRECARGA DE FUNCIONES
//Overflow o sobrecarga de funciones: Es lo que sucede por ejemplo en las funciones recursivas

//-Ejemplo de una función recursiva (se llama sa si misma)
// function recursivo(){
//     recursivo()
// }
//Esta función muestra el error: Maximum call stack size exceeded
//Ya que se llamará a si misma hasta que supere la capacidad de memoria 

