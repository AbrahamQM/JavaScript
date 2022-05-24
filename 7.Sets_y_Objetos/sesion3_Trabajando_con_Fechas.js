/**************Tema 7 sesion 3 Trabajando con fechas*******************/

//-----------------Declaración de fechas

//--Obtener la fecha del sistema

const fecha = new Date() //va a crear una constante (const) con el momento actual (se va actualizando por momentos)

console.log(fecha) //muestra: Tue May 24 2022 18:08:49 GMT+0100 (hora de verano de Europa occidental)

console.log(fecha) //muestra: Tue May 24 2022 18:12:31 GMT+0100 (hora de verano de Europa occidental)
//Siendo la misma constante, cada vez que accedemos a ella, mostrará el momento actual


//--Inicializar una fecha INDICANDO DATOS CONCRETOS

//*Usando año, mes, día, ...

//new Date(Año, Mes, día, horas, minutos, segundos, milisegundos) son obligatorios Año y Mes
//Ojo, los meses se inicializan en 0 (0=Enero 11=Diciembre)
const fecha2 = new Date(1987, 06, 8, 12, 25, 16)
console.log(fecha2) //muestra: Wed Jul 08 1987 12:25:16 GMT+0100 (hora de verano de Europa occidental)


//*Usando milisegundos

//Ejemplos indicando milisegundos
const fecha3 = new Date(0) //indicamos el momento inicial desde el que se empieza a contar
console.log(fecha3) //muestra: Thu Jan 01 1970 00:00:00 GMT+0000 (hora estándar de Europa occidental)

const fecha4 = new Date(10000000)
console.log(fecha4) //muestra: Thu Jan 01 1970 02:46:40 GMT+0000 (hora estándar de Europa occidental)

//Para indicar fechas anteriores al 1 enero 1970 SE PUEDE USAR Nº NEGATIVO

const fecha5 = new Date(-200000000)
console.log(fecha5) //muestra: Mon Dec 29 1969 16:26:40 GMT+0000 (hora estándar de Europa occidental)


//*Usando Strings

//Ejemplos usando Strings
const fecha6 = new Date("October 13, 1979, 12:28:37")
console.log(fecha6) // muestra: Sat Oct 13 1979 12:28:37 GMT+0000 (hora estándar de Europa occidental)


//----------------------Comparar fechas

//--SABER SI UNA FECHA ES ANTERIOR O POSTERIOR
//--usando <, >
console.log(fecha > fecha2) // muestra true
console.log(fecha < fecha2) // muestra false


//--SABER SI UNA FECHA IGUAL A OTRA
//Ojo, no sirve usar el == o ===
console.log(fecha == fecha) // muestra true PORQUE SON EL MISMO OBJETO

const fecha7 = new Date(1987, 06, 8, 12, 25, 16) //vuelvo a inicializar una fecha igual que fecha2 para comprobar
console.log(fecha7 === fecha2) //muestra: false AUNQUE EL VALOR QUE CONTIENE ES EL MISMO
console.log(fecha7 == fecha2) //muestra false

//Para compararlas hay que convertirlas a milisegundos usando .getTime()
//fecha.getTime() obtiene el tiempo en ms
console.log(fecha7.getTime() === fecha2.getTime()) // muestra: true


//----------------------Obtener el día, el mes, el año de una fecha

//--Obtener el día
//usando .getDate()
console.log(fecha7.getDate()) // muestra 8


//--Obtener el mes (Recordar que comienza por Enero:0 Diciembre:11)
//usando .getMonth()
console.log(fecha7.getMonth()) // Muestra 6  que es el mes 7 - 1 ya que comienza por 0
//Tenemos que sumarle uno para obtener el mes real
console.log(fecha7.getMonth() + 1)// muestra: 7 


//--Obtener el año
//Usando .getFullYear()
console.log(fecha7.getFullYear())// muestra 1987


//--Truco para mostrar una fecha en un string
console.log(fecha7)// muestra: Wed Jul 08 1987 12:25:16 GMT+0100 (hora de verano de Europa occidental)
//pero ... Para mostrar la fecha local usar .toLocaleDateString()
console.log(fecha7.toLocaleDateString())// muestra: 8/7/1987

//pasándole el Locale (sería como el idioma) 
//ver: https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleDateString
console.log(fecha7.toLocaleDateString('es-ES'))// muestra: 8/7/1987 En España se usa dd/mm/aaaa
console.log(fecha7.toLocaleDateString('en-US'))// muestra: 7/8/1987 Ya que en US las fechas se pone mm/dd/aaaa
console.log(fecha7.toLocaleDateString('ar-EG'))// muestraalgo así: ۱۳۹۱/۹/۳۰ Es en Árabe