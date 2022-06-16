/******Tema 14 NodeJs y Express Sesion 3 Manejo de eventos en JavaScript. *****/

//---- PARA VER TODOS LOS POSIBLES EVENTOS EN HTML: 
//Listado buscado por mi (https://uniwebsidad.com/libros/javascript/capitulo-6/modelo-basico-de-eventos-2)
//Ojo que hay mas de los que aparecen ahi.
//-Desde la consola del navegador o en un archivo abierto con VSC, escribimos: document.on
//Y mostrará la lista de eventos posibles. ej:
document.onclick
document.onscroll


//------------------------------VINCULACIÓN O "Bind" 

//--Sirve para vincular un objeto a un método o cosas asi. El profe hizo el siguiente ejemplo en la consola del navegador:

function pasaPorPantalla() {
    console.log(this)
}

const objeto = { tipo: "párrafo", longitud: 32}

pasaPorPantalla.bind(objeto)


//-----------------------------Eventos por Defecto

//Por ejemplo en un evento "submit" para enviar un formulario, 
//El comportamiento por defecto es enviar el formulario al servidor.
//Pero también nos puede interesar hacer algo antes de que se envíe el formulario.

//--Ver formulario_sesion3/index.html y formulario_sesion3/index.js
// (lo he colocado en la sesion1 para poder acceder a el)
//acceder por http://localhost:8080/formulario_sesion3/

//Lo hemos puesto en una carpeta a parte para poder tener todo por separado (buenas prácticas)