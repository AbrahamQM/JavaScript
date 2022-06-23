/*******************************Sesion 2 Geolocalización del navegador********************************/

//-------------------Seguimos desde la sesion 1-----------------------

//--Declaramos como globales las variables marker y 

let marker, map; //A diferencia de la sesión 1, las LN: 17 y 23 las declaramos fuera de la función para tener acceso golbal

function initMap (){
    //Indicamos la posición donde inicializar el mapa
    const posicion = {
        lat: 28.269149, //latitud donde queremos que inicialice
        lng: -16.552859  //longitud donde queremos que inicialice.
    }

    //Inicializamos el mapa
    map = new google.maps.Map(document.getElementById("map"), {
        zoom: 12,
        center: posicion, //le pasamos la posición que definimos antes.
    });

    //opcional--Creamos una chincheta en el mapa.
    marker = new google.maps.Marker( //Pide latitud y longitud 
    //o un objeto con una posición, un mapa (ya declarados) y un título si queremos
        {
        position: posicion,
        map: map,
        title: "El Paraiso de Tenerife"
        })
    
    geoPosiciona() //Para que se ejecute el código de la seión 2
}


//Podremos acceder a las funciones del navegador "usando navigator." 
//La propiedad geolocalization nos devuelve un objeto.
//Dentro de este objeto tendremos el método "watchPosition( "metodo callback para trabajar con el")" :
//navigator.geolocation.watchPosition( position => {console.log(position)}) //Mostrará la posición cada x tiempo.

//Después de permitirle al navegador acceder a la ubicación, 
//Devuelve un objeto y dentro podremos encontrar las coordenadas y otros datos

//---Hacemos que se inicialice el mapa en nuestra posición
function geoPosiciona(){
    //1º Obtenemos nuestra geoposición
    if (navigator.geolocation){  //Comprobamos si el navegador que usa el cliente, tiene esta propiedad
        const geoLoc = navigator.geolocation
        //Función watchPosition(funcion callback o externa, error callback o externa, opciones)
        const watchPosicion = geoLoc.watchPosition(centraMapa , onError, opciones)  

    } else { //si el navegador no la tiene:
        alert("Tu navegador no admite geolocalización.")
    }
    
}

//Declaramos las funciones y el objeto opciones a parte para que se vea mas claro
function centraMapa(posicion){
    const nuevaPos = { //Declaramos una nueva posición que va a tener según el momento las coordenadas que le 
        //de el método watchPosition()
        lat: posicion.coords.latitude,
        lng: posicion.coords.longitude
    }
    console.log(nuevaPos)

    marker.setPosition(nuevaPos) //Le modificamos la posición a la chincheta (marker)
    map.setCenter(nuevaPos) //modificamos la posición donde se centra el mapa
}

function onError(error){ //si sucede un error lo mostrará por consola:
    console.log("Se ha producido un error, lo hemos gestionado, error a continuación:")
    console.error(error)
}//Para comprobarlo, podemos po ejemplo denegarle el acceso a la ubicación (cuando lo pregunta o deshabilitándolo)

const opciones = {timeout: 5000}// indicamos Tiempo para intentar obtener la posición 5seg
//Si no la obtiene en ese tiempo, se ejecutará la función onError (según se la hemos indicado)