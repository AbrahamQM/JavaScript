/*********Tema 10 Sesion 2Instalación y configuración de ESLint ***********/

//1º- Instalamos la extensión ESLint

//2º- Creamos el archivo llamado .eslintrc.json 
//(SEGÚN EL PROFE HAY OTRA FORMA MEHOR DE HACERLO, pero esto es para entenderlo mejor)

//3º- Desde la web oficial en el apartado de "Configuring ESLint": https://eslint.org/docs/user-guide/configuring/
//Comprobamos cómo debe crearse el archivo de configuración:

//-En el apartado 'configuration files' https://eslint.org/docs/user-guide/configuring/configuration-files
//copiamos al archivo de configuración las reglas de configuración que queramos y las modificamos a nuestro gusto

//-Por ejemplo en: https://eslint.org/docs/rules/quotes nos muestra las reglas sobre las comillas 
// Pegamos la regla que nos interese -> .eslintrc.json Ln:13


//4º- Probamos ESLint Esto debería mostrar errores en:
//  nombre2 ->'comillas simples y ;'
// objeto ->'nombre es una variable duplicada. 

var nombre = "Abraham"
   var nombre2 = 'María' ;

   var objeto = {
    nombre: "Circulo", 
    radio: 2,
    nombre: "Cuadrado"
   }
//Al profe le aparecen en el tutorial. 
//------------LO SULUCIONÉ EJECUTANDO "npm install -g eslint" para instalar eslint de forma global

//5º EXTENSIÓN QUE NOS AYUDARÁ A BUSCAR Y SOLUCIONAR LOS ERRORES:
//Error Lens: Mostrará en cada línea, los errores que hayan

//--------DEJO ESTE ARCHIVO CON LOS ERRORES PARA QUE PODAMOS VER COMO SE MUESTRA.
//También guardo un pantallazo como ESLint_Ejemplo.jpg para ver como se muestra sin abrir VSC