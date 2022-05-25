/***********Tema 8 Sesion 2 Funciones tipo flecha y anónimas *************/

const array = [1, 5, 6, 2, 7 ,12, 8, 92]

//--------------------------Uso de funcion tradicional, funcion flecha => y, función anónima

//-------Suponemos que queremos obtener un array con los valores de array * 2

//--Funcion tradicional que devuelve el doble de un valor
function doble(valor){
    return valor * 2
}

console.log(array.map(doble))// muestra: [ 2, 10, 12, 4, 14, 24, 16, 184 ]

//--con función anónima
const array2 = array.map(function(valor){
    return valor * 2
})

console.log(array2)// muestra: [ 2, 10, 12, 4, 14, 24, 16, 184 ]

//-Con funciones tipo flecha (=>) (TAMBIÉN SON ANÓNIMAS ya que no se han declarado antes de usarla)
const array3 = array.map(valor => valor * 2)

console.log(array3)// muestra: [ 2, 10, 12, 4, 14, 24, 16, 184 ]

//-Definiendo la funcion tipo flecha antes de usarla
//Se define la función como si fuera una variable o constante
const dobleDelValor = valor => valor * 2

const array4 = array.map(dobleDelValor)

console.log(array4)// muestra: [ 2, 10, 12, 4, 14, 24, 16, 184 ]