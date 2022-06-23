/*******************************Sesion 1 Introducción a mapas en JavaScript********************************/

//Documentación de la Api de google maps Javascript:
//https://developers.google.com/maps/documentation/javascript?hl=es_419

//1º Incluir en el html el script de google maps e incluir el <div id="map"></div>

//2º obtener una key de la api: https://developers.google.com/maps/documentation/javascript/adding-a-google-map?hl=es-419#key
//Seguir las instrucciones que nos indica la web:
//-Crear un proyecto (si lo necesitamos)
//-Seleccionamos: "Maps JavaScript API" y lo habilitamos
//-Vamos a "credenciales"->Crear credenciales-Clave de api-> COPIAMOS LA CLAVE
//-PEGAMOS LA API KEY EN EL SCRIPT DEL HTML. donde pone "YOUR_API_KEY" (en mi caso no aparecía una key, pero igual pego la mia)

//3º copiamos el estilo css en nuestro styles.css

//4º comenzamos a escribir nuestro código JS

//A- Creamos la funcion initMap    Para inicializar el mapa
function initMap (){
    // console.log("Inicializando mapa") Para comprobar que está bien conectada

    //Indicamos la posición donde inicializar el mapa
    const posicion = {
        lat: 28.269149, //latitud donde queremos que inicialice
        lng: -16.552859  //longitud donde queremos que inicialice.
    }

    //Inicializamos el mapa
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 12,
        center: posicion, //le pasamos la posición que definimos antes.
    });

    //opcional--Creamos una chincheta en el mapa.
    const marker = new google.maps.Marker( //Pide latitud y longitud 
    //o un objeto con una posición, un mapa (ya declarados) y un título si queremos
        {
        position: posicion,
        map: map,
        title: "El Paraiso de Tenerife"
        })
}

