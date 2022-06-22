const parrafos = document.querySelectorAll(".parrafo")

parrafos.forEach(parrafo => {

    parrafo.addEventListener("dragstart", event => {
        console.log("Inicio de arrastre del párrafo: ", parrafo.innerHTML) 
        parrafo.classList.add("dragging")
        event.dataTransfer.setData("id", parrafo.id)
        const elem_fantasma = document.querySelector(".imagen-fantasma") 
        event.dataTransfer.setDragImage(elem_fantasma, 0, 0) 
    })

    parrafo.addEventListener("dragend", () => {
        console.log("He finalizado arrastre del párrafo: ", parrafo.innerText) 
        parrafo.classList.remove("dragging")
    })
})

const secciones = document.querySelectorAll(".seccion")
console.log(secciones)

secciones.forEach(seccion => {
    seccion.addEventListener("dragover", event => {
        console.log("Drag-Over la sección: " + seccion.innerHTML)
        event.preventDefault()
        event.dataTransfer.dropEffect = "copy" 
    })

    seccion.addEventListener("drop", event => {
        console.log("Drop de la sección:\n" + seccion.innerText)
        const id_parrafo = event.dataTransfer.getData("id")
        console.log("id-parrafo en Drop: " + id_parrafo)
        const parrafo = document.getElementById(id_parrafo)

        seccion.appendChild(parrafo) 
    })
})

//- Añade el código necesario para que al arrastrar un fragmento del puzzle a la papelera, éste se elimine

const papelera = document.querySelector(".papelera")
console.log(papelera)
papelera.addEventListener("dragover", event => {
    event.preventDefault() 
    event.dataTransfer.dropEffect = "copy"    
} )

papelera.addEventListener("drop", event => {    
    const id_parrafo = event.dataTransfer.getData("id") //obtenemos el id del párrafo que hemos soltado sobre la papelera
    
    document.getElementById(id_parrafo).remove() //--Eliminamos el elemento cuya id sea la del elemento que ha originado el evento
    console.log("-----Drop EN PAPELERA---->borrando:", id_parrafo)
})