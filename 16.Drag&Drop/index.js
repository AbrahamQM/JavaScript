//1º creamos el html y dentro del body una serie de elementos metidos en secciones
//para después practicar con ellas. index.html Ln:14-22

//2º creamos el styles.css para darle estilos al documento. y lo importamos desde el html Ln:8

//3º preparamos los párrafos para poder arrasatrarlos con la etiqueta: daggable="true" 
//Ver los parrafos en el html

//4º empezamos a trabajar con este index.js 
console.log("Hola") //comprobamos que está bien conectado el index.js


// 4.1 Obtener todos los párrafos arrastables
const parrafos = document.querySelectorAll(".parrafo")
console.log(parrafos)//(sólo para comprobar que los obtenemos bien) ->ok

// 4.1.1 Creamos los eventos relacionados con comenzar/terminar a arrastrar(para cada uno de los elementos)

parrafos.forEach(parrafo => {
    //--Cuando comenzamos a arrastrar o dragstart
    parrafo.addEventListener("dragstart", event => {
        console.log("Inicio de arrastre del párrafo: ", parrafo.innerHTML) //el profe utilizó parrafo.innerText
        //pero obtiene el mismo elemento

        //-Le modificamos la clase para que se modifique el estilo
        parrafo.classList.add("dragging")

        //....pertenece a la propiedad datatransfer (lo hicimos a posteriori), ver Ln: despues de 67....
        event.dataTransfer.setData("id", parrafo.id) //----Le indicmos que el id será parrafo.id----
        const elem_fantasma = document.querySelector(".imagen-fantasma") //Definimos la imagen fantasma
        event.dataTransfer.setDragImage(elem_fantasma, 0, 0) //le indicamos que será la imagen del drag
        //en (elemento, 0, 0) los 0 se refieren a xOffset y yOffset que son desplazamientos horizzonta y vertical
    })

    //--Cuando soltamos el elemento o dragend
    parrafo.addEventListener("dragend", () => {
        console.log("He finalizado arrastre del párrafo: ", parrafo.innerText) //Ahora lo pongo igual que el profe
        //para comprobar que funcionan igual 

        //-Le elimino la clase añadida al hacer "drastart" ("dragging")
        parrafo.classList.remove("dragging")//para que vuelva a su clase original al soltarlo
    })
})

// 4.2 Obtener todos los elementos de clase sección (lo mismo que con los párrafos)
const secciones = document.querySelectorAll(".seccion")
console.log(secciones)//(sólo para comprobar que los obtenemos bien) ->ok

// 4.2.1 Creamos los eventos relacionados con arrastar-sobre ("dragover") y soltar (drop)  
secciones.forEach(seccion => {
    //--Cuando arrastramos sobre una de las secciones
    seccion.addEventListener("dragover", event => {
        console.log("Drag-Over la sección: " + seccion.innerHTML)
        //····Preparamos el "dragover" para usar tambien el "drop"·····
        event.preventDefault()
        //....pertenece a la propiedad datatransfer (lo hicimos a posteriori), ver despues de Ln:98....
        event.dataTransfer.dropEffect = "copy" //admite "move", "copy"(por defecto), "link", "none" Ver en documentacion oficial 
    })

    //--Cuando lo soltamos "Drop" ····Antes debemos tener preparado el "dragover" para que me permita gesionarlo
    //previniendo el comportamiento por defecto
    seccion.addEventListener("drop", event => {
        console.log("Drop de la sección:\n" + seccion.innerText)

/****************************************************************************************************************/        
        //------------------------------propiedad dataTransfer-----------------------------//
        //https://developer.mozilla.org/en-US/docs/Web/API/DataTransfer para ver todas las propiedades y métodos
        //Es algo parecido a lo que pasaba con local storage del tema anterior (15)

        //nos permite poder transferir información
        //1º-En el html le damos id diferente a cada parrafo

        //2º-En este .js en la función del evento dragstart añadimos la línea:
        //event.dataTransfer.setData("id", parrafo.id) ----Le indicmos que el id será parrafo.id----

        //3º-Accedemos a esa "id"
        const id_parrafo = event.dataTransfer.getData("id")
        //lo muestro por consola para ver como se muestra (obtiene el id que le indicamos en index.html a cada parrafo)
        console.log("id-parrafo en Drop: " + id_parrafo)

        //4º- Ejemplos de usos del dataTransfer:

        //----------------------------------1º------------------------------------------------------------
        //4.1: lo usamos por ejemplo para que un párrafo pase de una sección a otra:

        //A: obtenemos el párrafo que han soltado:
        const parrafo = document.getElementById(id_parrafo)

        //B: ponemos ese párrafo como un elemento hijo de la sección
        seccion.appendChild(parrafo) //Despues de esto, los párrafos se mueven de sección al arrastrarlos

        //----------------------------------2º------------------------------------------------------------
        //4.2: editamos la imagen fantasma que se ve mientras lo arrastramos "DataTransfer.setDragImage()"
        //A: la imagen debe estar disponible en el html Ln:23
        //B: le damos el estilo en el css Ln:20
        //C: editamos la imagen en el evento para que sea la "imagen-fantasma" en el dragstart

        //----------------------------------3º------------------------------------------------------------
        //4.3: editamos el efecto (icono que aparece) a la hora de soltar el elemento (dropEffect)
        //A: editamos el evento drargover en la Ln:57
        //B: Probamos los diferentes efectos y vemos como cambia el icono al arrastrar (no la imagen_fantasma)
/****************************************************************************************************************/
    })

})