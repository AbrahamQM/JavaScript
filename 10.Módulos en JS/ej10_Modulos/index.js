

//-Crea un nuevo proyecto de Node
//  npm init -y

//- Configura el proyecto para utilizar los módulos de ES6
//Modificamos package.json añadiendo en la línea 6: "type": "module",

//- Crea un archivo controller.js que exporte 2 funciones: suma(a, b) y multiplica(a, b)
//ver controller.js

//- En el entrypoint index.js, importa el módulo controller.js
import * as metodos from "./controller.js"

//- El entrypoint index.js debe utilizar las funciones del módulo para devolver la multiplicación de suma(1, 2) y suma(4, 5)
console.log("Resultado de: suma(1,2) * suma(4, 5) = ", metodos.multiplica(metodos.suma(1, 2), metodos.suma(4, 5)))
//muestra: Resultado de: suma(1,2) * suma(4, 5) =  27

//- Instala e importa la librería chalk (https://www.npmjs.com/package/chalk)
//npm i chalk
import chalk from "chalk"


// - Modifica el último console.log del entrypoint index.js para devolver el resultado en color verde*/ 
console.log(chalk.green("--En verde: Resultado de: suma(1,2) * suma(4, 5) = ", metodos.multiplica(metodos.suma(1, 2), metodos.suma(4, 5))))
//muestra en texto color verde: "--En verde: Resultado de: suma(1,2) * suma(4, 5) =  27"