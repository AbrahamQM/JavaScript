const f = document.getElementById("formulario")

console.log(f)

f.addEventListener("submit", evento => { //Cuando se envíe el formulario
    console.log(evento) //Mostrará por consola la indormación del evento
    evento.preventDefault() //Evita que se ejecute el comportamiento por defecto
})