/*
Crea un nuevo proyecto de Node (npm init)-->Ok

- Instala la dependencia Winston (npm install winston)--> ok

- En el archivo index.js crea una función que devuelva un error con un mensaje personalizado

- Registra el error en un archivo a través de un try...catch
*/

const winston = require('winston');

const logger = winston.createLogger({
    level: 'info',
    format: winston.format.json(),
    transports: [
        new winston.transports.File({ filename: 'error.log', level: 'error' }),
    ],
    });

try{
    console.log(variableQueNoExiste)
} catch(e){
    logger.error("No se puede dividir por cero: " + e)
}
