/******Tema 14 NodeJs y Express    Crear página web con JS integrado. */

//------Trabajaremos en index.html

//---Instalamos la dependencia http server, siguiendo las instrucciones de:
//https://www.npmjs.com/package/http-server

//-----Volvemos a este archivo index.js para crear un script de ejemplo

const a = 4
const b = 8

console.log(a * b)

console.log("hola")
//-----Integramos este archivo dentro de index.html Ln:9

//-----Inicializamos node (igual que hasta ahora) con:
//--npm init -y

//-----Instalamos de nuevo (Para que el package.json tenga acceso a las dependencias) el http server con:
//--npm install --global http-server

//-----Creamos un script en package.json:
//--"start": "http-server ."


//-----Ejecutamos el script en el terminal:
//--'npm start'


//----Ya podremos ver nuestra web desde el navegador accediando a la ip que nos devuelve.


//----Desde la consola del navegador, se nos mostrará el script que hemos creado en index.js y,
//también hemos incluido en el codumento html

//Desde la consola podremos acceder a parrafo (ver index.html y la imagen 'acceder a elem(...).jpg') 
//y mostrarlo por consola por ejemplo.



//------Ahora desde este archivo voy a acceder a ese elemento con id: "parrafo" desde este archivo index.js:
const parra = document.getElementById("parrafo2")

//Y lo muestro por consola automáticamente. (se verá en la consola del navegador) ver imagen 'acceder2.jpg'
console.log(parra)