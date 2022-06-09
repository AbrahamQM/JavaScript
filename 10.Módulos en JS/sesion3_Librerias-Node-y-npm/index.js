/******Tema 10 sesion 3 Librerias en Node y NPM y su utilización**********/

// para instalar librerias debemos usar npm

//Buscar librerías de Js en: https://www.npmjs.com/

// ---------Como ejemplo para este tutorial vamos a usar la librería "axios"
// https://www.npmjs.com/package/axios

//---Antes de instalar la libreria, inicializamos node con "npm init -y"
//-Luego modificamos el package.json inclutendo la línea "type": "module"
//-En "scripts" eliminamos la línea "test" y incluimos "start": "node index.js" para que se ejecute esa linea 
// al ejecutar "npm start"

//--Para instlarla ejecutamos "npm install axios"

//--Importamos axios (igual que en la sesion anterior)
import axios from "axios";


//--Copiamos el código de ejemplo de axios y trabajamos con el
//-Usaremos una api de ejemplo que se llama pokeapi: https://pokeapi.co/
axios.get('https://pokeapi.co/api/v2/pokemon/ditto') //pegamos aquí la ruta que nos da pokeapi 
// en lugar de la que viene de ejemplo
    .then(function (response) {
        // handle success
        console.log("Success!!! Funcionaa!") // linea añadida
        console.log(response.data); //modificamos "response" por "response.data" para seleccionoar la información
    })
    .catch(function (error) {
        // handle error
        console.log("Error!!! Ha fallado!") // linea añadida
        console.log(error);

    })
    .then(function () {
        // always executed
    });

// Muestra: "Success!!! Funcionaa!" + un monton de información