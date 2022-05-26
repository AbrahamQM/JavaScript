//Ver todos los pasos en Explicación proceso.txt

//Tipos de mensaje (métodos de console.xxx()) más utilzizados

console.log("Hola, estoy saliendo por pantalla console.log()\n")

console.info("Esto es un console.info() que contiene este mensaje\n")

console.debug("Esto es un console.debug() que contiene este mensaje de debug\n")

console.warn("Esto es un console.warn() que contiene esta advertencia\n")

console.error("Esto es un console.error() que contiene este error\n")

//-----------parte 2 Winston

//Librería para almacenar todos los logs: Wingston

//Código copiado de https://www.npmjs.com/package/winston
const winston = require('winston');

const logger = winston.createLogger({
    level: 'debug', //Antes ponía info en lugar de debug cambido según Ln:47
    format: winston.format.json(),//Formato en el que vamos a trabajar
    defaultMeta: { service: 'user-service' },//Mensaje estandart que se incluirá
    transports: [ //Incluirá tódas las acciones que se van a ejecutar cada vez que haya un log
        //
        // - Write all logs with importance level of `error` or less to `error.log`
        // - Write all logs with importance level of `info` or less to `combined.log`
        //Archivos que registrarán los errores
        new winston.transports.File({ filename: 'error.log', level: 'error' }),
        new winston.transports.File({ filename: 'combined.log' }),
        //LINEA AÑADIDA para probar otra acción (en este caso mostrar por consola):
        new winston.transports.Console(),
    ],
});

//Ahora podemos usar el logger en lugar de console para que los logs se trabajen con winston

// logger.log("Hola, estoy saliendo por pantalla logger.log()\n") EL .log() no existe en winston
logger.info("Esto es un logger.info() que contiene este mensaje\n")
logger.debug("Esto es un logger.debug() que contiene este mensaje de debug\n")
logger.warn("Esto es un logger.warn() que contiene esta advertencia\n")
logger.error("Esto es un logger.error() que contiene este error\n")

// Después de ejecutar el "npm start", se crean los archivos indicados en el código anterior Ln:31-32 
//Podemos modificar esas líneas.

//-- También podemos modificar el level a partir del cual queremos que se registren los mensajes en el log
//modificando la ln:23 e indicando que nivel queremos que sea el máximo al que queremos llegar. 
//Niveles copiados de winston:
// const levels = {
//     error: 0,
//     warn: 1,
//     info: 2,
//     http: 3,
//     verbose: 4,
//     debug: 5,
//     silly: 6
//   };


//---Recomendación (buena práctica):
//Colocar todo el objeto logger en una carpeta que se llame logger y dentro de un archivo index.js
//y despues, exportar el objeto logger con la siguiente línea incluida al final de logger/index.js
//para poder utilizarlo en el index principal
//-Linea para que se exporte: module.exports = objetoQueQueramosExportar
module.exports = logger;
//-Línea que debe ir al principio de el archivo principal index.js para importar el módulo:
//const logguer =  require(./logger) 