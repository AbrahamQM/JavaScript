

//-- Primero descargamos o importamos JQuery de la web. 


//A  -Descarga: En este caso vamos a descargar la última versión comprimida 
//"Download the compressed, production jQuery 3.6.0"
//-La guardamos en la carpeta que deseemos

//B -Importamos directamente como un script en nuestro index.html igual que en ocasiones anteriores:
//<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script> 
//ver cabecera del JQuery_sesion5/index.html

//-------------------------Hemos elejido la B

//-----Empezamos a trabajar con nuestra web

//DOCUMENTACIÓN DE LOS MÉTODOS JQuery: https://api.jquery.com/ 

//--Sintaxys básica de Jquery: $("Id Elemento").metodoFuncion()
// $("li").hide() //Oculta los elementos de la lista----Comentado para hacer mas pruebas----
$("#el-1").append(" -----Texto añadido con .append()")


//--Sintaxis para asegurarnos de que se ejecuta el script correctamente (DESPUÉS DE QUE SE HA CARGADO TODO EL DOCUMENTO):
//forma completa: $(document).ready(() => {METEMOS AQÚI LO QUE QUERAMOS HACER})
//forma simplificada: $(()=>{METEMOS AQÚI LO QUE QUERAMOS HACER}) ----Es lo mismo pero más simplificado----

//------OJO : --------------------------------------
//--se nombran a las clases usando ".NombreDeClase" 
//--se nombran a las id usando "#NombreDeClase"
//--------------------------------------------------

//Ej1 oculto el parrafo con id : 
$( () => {
    $(document.getElementById("parrafo")).hide() //lo mismo que poner $("#parrafo").hide()
})

//Ej2 Convierto el <p> de ejemplo sin id a color azul:
$(() =>{
    $("p").css("color",  "blue");
})


//Ej3 trabajamos con los botones para usar eventos: 
// Hecho por mi antes de ver la explicación:
// $(() =>{
//     $(".hide-btn").on( "click", function() {
//         $("#el-2").hide()
//     })

//     $(".show-btn").on( "click", function(){
//         $("#el-2").show()
//     })
// })

//Hecho en la explicacion del profe:
$(() =>{
    //Botones mostrar y ocultar elemento 2
    $(".hide-btn").click(() => {
        console.log("Ocultando...");  //se mostrará en la consola del navegador
        $("#el-2").fadeOut(); //Se oculta haciendo fadeOut (se desvanece con transición) 
    })

    $(".show-btn").click(() => {
        console.log("Mostrando...");  //se mostrará en la consola del navegador
        $("#el-2").fadeIn(); //Se muestra haciendo fadeIn (aparece con transición)
    })

    //boton cambiar color al elemento 3
    $(".col").click(() => {
        $("#el-3").css({color: "red"})
    })

    $(".col").dblclick(() => {
        $("#el-3").css({color: "violet"})
    })

    //boton añadir elemento
    $(".new-element").click(() => {
        $("ul").prepend("<li>Nuevo elemento AL PRINCIPIO</li>")//añade nuevo elemento de la lista al principio
        $("ul").append("<li>Nuevo elemento AL FINAL</li>") //añade nuevo elemento de la lista al final
    })

    //Trabajar on el evento hover sobre los elementos de la lista
    $("li").mouseenter((elem) => { //con el ratón sobre el elemento mouseenter(NombreVariableElemnto) => {}
        elem.target.style.color = "red"
    })
    $("li").mouseout((elem) => { //al sacar el ratón del elemento
        elem.target.style.color = "black"
    })
})