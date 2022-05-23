/*
----------Crea un archivo JS que contenga las siguientes líneas
*/

//- Una variable que contenga la lista de la compra (mínimo 5 elementos)
let listaCompra = ["Agua", "Aceite", "Pan", "Azucar", "Leche"];

//- Modifica la lista de la compra y añádele "Aceite de Girasol"
listaCompra.push("Aceite de Girasol");

//- Vuelve a modificar la lista de la compra eliminando "Aceite de Girasol"
listaCompra.pop()

//- Una lista de tus 3 películas favoritas (objetos con propiedades: titulo, director, fecha)
const peliculas = [
    {titulo: "matrix", director: "Hnas. Wachowski", fecha: 1999},
    {titulo: "Malditos Bastardos", director: "Tarantino", fecha: 2009},
    {titulo: "El juego de Ender", director: "Gavin Hood", fecha: 2013}
]

//- Una nueva lista que contenga las películas posteriores al 1 de enero de 2010 (utilizando filter)
const pelis_nuevas = peliculas.filter(peli => peli.fecha >= 2010 )

//- Una nueva lista que contenga los directores de la lista de películas original (utilizando map)
const directores = peliculas.map(peli =>  peli.director)

//- Una nueva lista que contenga los títulos de la lista de películas original (utilizando map)
const titulos = peliculas.map(peli => peli.titulo)

//- Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando concat)
const directoresYTitulos = directores.concat(titulos)

//- Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando el factor de propagación)
const directoresYTitulos2 = [...directores, ...titulos]
