//- Crea un fichero index.js

//- Vincula un evento de tipo "click" al botón anterior, que muestre una alerta en el navegador "click en el botón"
const boton = document.getElementById("btn")

boton.addEventListener("click", () => {
    alert("click en el botón")
})

//- Crea un script para lanzar un servidor de desarrollo con http-server 
//(ver en ./package.json Ln: 8)

// - Lanza el servidor de desarrollo a través del script anterior y prueba que el botón funciona correctamente
// (ver ./pantallazo.jpg)

// - Integra jQuery a través del CDN (https://releases.jquery.com/)
// (ver en ./index.html Ln: 9)

//- En el fichero index.js crea un evento click en el botón a través de jQuery, 
//que muestre por consola "Hola, estoy utilizando jQuery"
$(() =>{
    $("#btn").click(() => {
        console.log("Hola, estoy utilizando jQuery")
    })
})