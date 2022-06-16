//-----Creamos el lístener y trabajamos con el:

//---------------------------------------------------EJ boton 1 ---------------------------------------------

//1º-Obtenemos el botón y lo guardamos en una constante:
// const boton = document.getElementById("btn") 
//-o lo que es igual pero accedierndo por el selector:
const boton = document.querySelector("#btn")

// console.log(boton) //(no es necesario) mostramos el elemento por consola(navegador)

//2º-Añadimos el listener de eventos y creamos acciones
boton.addEventListener("click", () =>{
    //mostramos una --------------------------- ALERTA ---------------------------
    alert("Han hecho click ---¡ Esta es la única alerta de la sesión !") //saldrá un pop-up con el mensaje

    //pasar un mensaje por pantalla, pidiendo confirmar o rechzar:
    //--confirm("mensaje") ? accionSiAcepta : accionSiRechaza  ----------(Hecho por mi)
    confirm("mensaje mío, ¿confirmas?") ? console.log("Ha confirmado (mío)") : console.log("Ha rechazado (mío)") 

    //--confirm("mensaje") && accionesSiAcepta   -------------(hecho por el profe) No gestiona el rechazo
    confirm("mensaje del profe") && console.log("ha aceptado (profe)")

    //--guardando la respuesta en una variable 
    const respuesta = confirm("Seguro(guardado en variable)")

    if (respuesta) {
        console.log("ok--(guardado en variable)")
    } else {
        console.log("NO!!--(guardado en variable)")
    }
})

//---------------------------------------------------EJ boton 2 ---------------------------------------------

//1º-obtenemos el elemento
const botonInfo = document.querySelector("#info")

//2º-Creamos el listener y trabajamos con el:
botonInfo.addEventListener("click", () =>{
    const nombre = prompt("¿cuál es tu nombre?") //prompt hace una consulta de texto, 
    // si pulsas aceptar, devuelve el texto introducido.
    // si pulsas cancelar, devuelve null.
    if(nombre){ //si introduces algo y pulsas aceptar
        console.log("Tu nombre es: " + nombre)
    } else { //si no introduces nada en el prompt o si pulsas cancelar
        console.log("Has pulsado cancelar: " + nombre)
    }
})

//*********************** Mostrar por consola listas de objetos en modo tabla**************************************/

//Creo una lista de objetos:
const lista = [
    {
        nombre: "Abraham", 
        edad: 35
    },
    {
        nombre: "Pepe", 
        edad: 74
    },
    {
        nombre: "Lucas",
        edad: 18
    }
]


console.log("--Lista del final de la sesion Ln:51 index.js usando console.log(lista):")
console.log(lista)
console.log("***********************************")
console.log("--Lista del final de la sesion Ln:51 index.js usando console.table(lista):")
console.table(lista)