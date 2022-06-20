/*
- En el fichero index.js:
*/

//- Crea una variable con tu nombre
let nombre = "Abraham"

//- Crea una variable con tu apellido
let apellido = "Quintana"

//- Crea un objeto con tu nombre y tu apellido
const objeto = {
    nombre,
    apellido
}

//- Almacena el objeto anterior en la SessionStorage
sessionStorage.setItem("yo-session", JSON.stringify(objeto))

//- Almacena el objeto anterior en la LocalStorage
localStorage.setItem("yo-local", JSON.stringify(objeto))

//- Crea una cookie que caduque en 2 minutos con los datos del objeto anterior
let expira = new Date()
expira.setTime(expira.getTime() + 120000)

document.cookie = "yo-cookie-caduca2min=" + JSON.stringify(objeto) + ";expires=" + expira.toUTCString()

// - Observa en Google Chrome cómo se almacenan los datos en la SessionStorage, LocalStorage y las cookies
//Ver (almacenaje LocalStore.jpg), (almacenaje SessionStore.jpg) y (almacenaje Cookie.jpg)


// - Cierra el navegador, comenta las líneas que almacenan SessionStorage, LocalStorage y CookieStorage y vuelve a abrirlo
//------------OK

// - Observa cómo la SessionStorage está vacía
//------------Comprobado

// - Observa cómo la LocalStorage sigue manteniendo el objeto que has almacenado antes de cerrar el navegador
//------------Comprobado

// - Observa cómo la cookie sigue manteniendo el objeto que has almacenado antes, aunque ya está caducado
//------------Comprobado, si espero 2 min y recargo, ya desaparece.