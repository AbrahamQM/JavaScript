/*
Crea un nuevo archivo JS que contenga una lista con los siguientes elementos:

- Tu nombre (string)

- Tu edad (number)

- ¿Eres desarrollador? (boolean)

- Tu fecha de nacimiento (Date)

- Tu libro favorito (Objeto con propiedades: titulo, autor, fecha, url)
*/

const nacimiento = new Date(1987, 6, 8);
const libro = {
    titulo: "los renglones torcidos de dios",
    autor: "Torcuato Luca de Tena",
    fecha: 1979,
    url: "https://es.wikipedia.org/wiki/Los_renglones_torcidos_de_Dios_(novela)"
}

const mi_lista = ["Abraham Quintana", 34, true, nacimiento, libro];

console.log(mi_lista)