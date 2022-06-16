/******Tema 14 NodeJs y Express Sesion 2 Utilización de librerías de terceros. *****/

//Vemamos un ejemplo de librería externa que se llama typeIt: https://www.typeitjs.com/

//En la parte de "Documents", vamos a "Vanilla JavaScript" y vemos las instrucciones sobre cómo
//importar el script: https://www.typeitjs.com/docs/vanilla

//----Podríamos ir a la dirección que nos marcan en la línea del script Y:
//Línea original: <script src="https://unpkg.com/typeit@8.6.0/dist/index.umd.js"></script>

//A---De ahí habría que ir a la url indicada y guardarnos ese archivo en local. (para no depender de webs externas)

//b---Podemos simplemente pegar la línea original en index.html (ver en sesión1(...)/index.html->
//-> a partir de la Ln:22)

//***Después de incliuir la línea del script (opcion B), vamos a integrar algún ejemplo en nuestro index.html

//--Como buena práctica, el script:
/* <script>
    new TypeIt("#myElement", {
    strings: "Este es el texto que aparecerá poco a poco!",
    }).go();
</script> */

//--Debería estar en otro archivo, e importarlo poniendo:
//<script src="nombreQueLePongamosAlArchivo.js"></script>

//--Igual que hicimos con nuestro script incluido en index.js
