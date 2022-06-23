/*
- Crea un mapa en HTML

- Pon chinchetas en tus 3 lugares favoritos del planeta tierra
*/

//Inicializo el mapa
function initMap(){
    const tenerife = { lat: 28.269149, lng: -16.552859}
    const puntaCana = { lat: 18.619656, lng: -68.346362}
    const islaDeshabitada = {lat: 25.243565, lng: 55.164378}
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 3,
        center: tenerife,
        });

    const marker1 = new google.maps.Marker({position: tenerife, map: map , title: "Lo mejor del mundo" })
    const marker2 = new google.maps.Marker({position: puntaCana, map: map, title: "Para descansar"})
    const marker3 = new google.maps.Marker({position: islaDeshabitada, map: map, title: "Mi objetivo ;-p"})

}