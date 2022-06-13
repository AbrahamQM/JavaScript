/***Tema 13 sesion3 Instalación de ESLint y creación de ficheros de configuración personalizados*****/

//1º Inicializamos un nuevo proyecto con 'npm init -y'

//2º Instalamos ESLint con 'npm install eslint -save-dev'
//Podemos comprobar en package.json que se ha creado una dependencia LN:13

//3º Generamos un archivo de configuración (De una forma mejor que en la sesión anterior) usando:
//---'npm init @eslint/config' Segun nos recomiendan en la documentación oficial
//--Contestaremos a las preguntas que no haga la instalación en el terminal
//-Se generará un archivo de configuración .eslintrc.json (si hemos elegido json) o con el formato que elijamos

//Podremos analizar como se crean las reglas y demas en el archivo


//4º Hademos una prueba a ver si muestra los errores

const nombre = 'Abraham'

const persona2 = "María";




///*****Tema 13 sesion 4 Reglas temporales y scrips para ejecución de ESLint en nuestro código *****/

//------------Desactivar ESLint Temporalmente: 
//podemos poner como comentario 'eslint-disable' asi:
/*eslint-disable */ 

const perro = 'Tobi' //aquí debería poner el error "Strings must use doblequiote" 
//pero como es´ta deshabilitado no la muestra

//------------Reactivar ESLint: 
//poniendo un comentario que diga 'eslint-enable'
/*eslint-enable*/
const perro2 = 'Rocky' //Si se muestra el error "Strings must use doblequiote" 

//------------Desactivar una línea de ESLint:
//Poniendo un comentario en la línea que diga 'eslint-disable-line'

const nuevoString = 'este es el nuevo string' //eslint-disable-line
//En la línea anterior ESLint no muestra ningún error



//-----------Desactivar una regla de control
//--Podemos ir mirando las reglas que queremos desactivar o activar en .eslintrc.json

//Poniendo un comentario que se refiera a la línea en concreto 'eslint-disable-line LaReglaQueSea' OJO un guión menos
const cosa = 'esta es la cosa' //eslint-disable-line quotes

//-----------Desactivar una regla en la siguiente linea-> indentación (se refiere a los espacios o tabulaciones)
    const string = 'cosas' //muestra el error 'expected indentantion of 0 spaces but found 4'

/* eslint-disable-next-line indent */
    const string2 = 'mas strings'


/***************Acceder a diferentes configuraciones públicas:
-modificando el archivo de configuración donde pone:  "extends": "eslint:recommended",
podemos sustituirlo por otras configuraciónes pre-configuradas las podemos encontrar en: 
-----https://www.npmjs.com/search?q=eslint-config
Hay por ejemplo las configuraciones de airbnb, y miles mas que podemos usar si queremos.
Estan las instrucciones para usar cada configuración que queramos.
*/


/********* preparar scrips para mostrar o reparar todos los errores de forma automática: */

/*              Script para que nos muestre todos los errores 
 *
 * 1º vamos a package.json y en la parte de los scripts
 * 
 * 2º creamos la línea llamada "lint" con el comando "eslint ." EL PUNTO ES PARA QUE LO ANALICE TODO. podemos poner también 
 * un archivo en concreto en lugar de poner el '.'
 * 
 * 3º desde el terminal ejecutamos el script con 'npm run lint'
 * nos mostrará en terminal todos los errores y warnings que encuentre
*/

const str = "otro string";
    console.log('hola')


/*            Script para reparar los errores de forma automática  
 * 
 * 1º en el package.json , dentro del apartado scripts 
 * 
 * 2º creamos otra línea llamada "lint--fix" con el comando "eslint --fix ."
 * --fix (para que repare)
 * . (ruta del archivo o el . para señalar todo)
 * 
 * 3º Desde el terminal, ejecutamos npm run 'eslint--fix' 
 * 
 * Se repararán automáticamente todos los errores y warnings que pueda, salvo cosas que no pueda sustituir
*/