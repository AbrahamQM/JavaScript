const hTexto = document.getElementById("h-texto")

console.log(hTexto)

//Creamos un listener para el evento personalizado(Ln:10):
hTexto.addEventListener("cambioTexto", evento => {
    console.log(evento.detail) //simplemente muestra los detalles del evento
    //(definidos en la función siguiente) por consola

    //Cambiamos el texto de htexto según le indiquemos al pasar la función cambiarTexto()
    hTexto.innerText = evento.detail.texto
    hTexto.style.color = evento.detail.color
})

//Función que Lanza el evento
function cambiarTexto(nuevoTexto, color){
    //-Creo el evento
    const evento = new CustomEvent("cambioTexto", {
        detail: {
            texto: nuevoTexto, 
            color: color
        }
    })
    //-Lanzo el evento
    hTexto.dispatchEvent(evento)
}