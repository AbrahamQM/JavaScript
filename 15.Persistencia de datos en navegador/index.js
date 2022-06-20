/*********Tema 15 Persistencia de datos, SOLO UNA Sesion **************/ 

//1º hemos creado el index.html y .js y hemos incluido el script en nuestro .html

//2º Vamos a trabajar en vivo (pulsando 'GoLive' en el VSC)

//3º En el navegador, con el index.html abierto, vamos a la parte de desarrollador (F12)
//y podremos ver los archivos de persistencia de datos (cookies, local storage y session storage) 
// en la parte de "Aplicattion" o "Aplicación"

//4º Para acceder a local storage podemos simplemente escribir "localStorage." y al poner el '.'
//nos aparecerán los métodos que le pertenecen (clear, getItem, key, length, removeItem, setItem, localStorage ...)

//****************************************** LOCAL STORAGE ******************************************/
console.log("------ LOCAL STORAGE ------")

//---------------- CREAMOS UN NUEVO ELEMENTO DE localstorage con setItem(clave, valor)
localStorage.setItem("nombre", "Abraham")
//Podremos verlo en inspeccionar->aplicación->Almacenamiento local->ip de localhost

//---------------- MODIFICAMOS UN ITEM de local storage:
localStorage.setItem("nombre", "Paco")

//-----------------ACCEDEMOS A UN ITEM
const nombre = localStorage.getItem("nombre")
console.log("El nombre es: " + nombre)


//---------------- Guardamos un objeto en localStorage
localStorage.setItem("persona", {nombre: "Abraham", edad: 35, objetivo: "ser desarrollador"})

//----------------- Accedemos a un valor del objeto "persona"
//Comprobamos que es un objeto:
console.log(localStorage.getItem("persona")) //lo muestra como [object Object]

//**** Para poder acceder correctamente a los atributos del objeto deberíamos serializarlo:

//1- Creo un nuevo objeto para mostrar ****SERIALIZANDO EL OBJETO****:
//------------------------------------IMPORTANTE--------------------------------------------------
//--------------------JSON.stringigy->>CONVIERTE EL OBJETO/ARRAY A STRING -----------------------|
//------JSON.parse->>CONVIERTE UN OBJETO/ARRAY modificado con stringyfy A UN OBJETO/ARRAY DE JS--|
//------------------------------------------------------------------------------------------------

//Lo creo:
//JSON.stringigy(objeto)
localStorage.setItem( "persona2", JSON.stringify({nombre: "Lucas", edad: 55, objetivo:"seguir vivo"}))

//2.A- Accedo al objeto mostándolo como se guarda (string)
console.log(localStorage.getItem("persona2")) // muestra {"nombre":"Lucas","edad":55,"objetivo":"seguir vivo"}

//2.b Accedo al objeto mostrándolo como objeto, ****PARSEANDO EL JSON****
//JSON.parse(localStorage.getItem("persona2"))
console.log(JSON.parse(localStorage.getItem("persona2"))) //muestra (al extender el objeto):
// {nombre: 'Lucas', edad: 55, objetivo: 'seguir vivo'}
// edad: 55
// nombre: "Lucas"
// objetivo: "seguir vivo"
// [[Prototype]]: Object


//-------------------Eliminar un item
//localstorage.removeItem("key del item")
localStorage.removeItem("nombre")
console.log("Intento acceder a un item eliminado:", localStorage.getItem("nombre")) //muestra: 
//Intento acceder a un item eliminado: null

//******************************************SESSION STORAGE ******************************************/
console.log("------SESSION STORAGE------")

//se trabaja igual que con local storage pero con session:

sessionStorage.setItem("perro", "Caniche")
const perro = sessionStorage.getItem("perro")
console.log("Esto es con session storage:", perro) //muestra: Esto es con session storage: Caniche

//Estos elementos sessionStorage van a aparecer en otras pestañas, porque lo hemos incluido en nuestro código
//y aparecerá en todas. 
//-Pero si se crea de forma dinámica, sólo existirá en la pestaña en la que se cree


//****************************************** COOKIES ******************************************/
console.log("----------COOKIES----------")

//----Son diferentes a los otros elementos:
//Accederemos a ellas a través de "document.cookie"
console.log(document.cookie) //no muesra nada la primera vez porque no hay cookies aún
//pero después se cargarán todas las que vayamos creando


//---------------- CREAMOS UN NUEVO ELEMENTO cookie
document.cookie = "nombre-cookie=Abraham"

//---------------- CREAMOS UNA COOKIE CON CADUCIDAD
//document.cookie = "nombre de la cookie = lo que queramos ; expires=" + objeto de tipo fecha en formato UTCString

//suponemos que queremos que caduce el 1/enero/2023 (recordar que el mes comienza por 0)
document.cookie = "nombreConCaducidad=AbrahamCaduca;expires=" + new Date(2023, 0, 1).toUTCString()
//se crea la cookie con la expiración 2023-01-01T00:00:00.000Z  
//PODEMOS COMPROBARLO EN LA inspteccion del navegador->pestaña: Aplicación->Cookies->nuestro dominio


//Para eliminar las cookies, se juega con la fecha de expiración:
//https://code.i-harness.com/es/q/9151c