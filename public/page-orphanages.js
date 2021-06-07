const map = L.map('mapid').setView([-29.9430139, -50.9959819], 15); //Cria o mapa com o leaflet js

//cria um tileLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

//cria um icone
const icon = L.icon ({
    iconUrl: "./public/images/map-marker.svg",
    iconSize: [58,68],
    iconAnchor: [29,68],
    popupAnchor: [170,2]
})
//cria um popup overlay
const popup = L.popup ({
    closeButton: false,
    className: 'map-popup',
    minWidth: 240,
    minHeight: 240
}).setContent('Lar das meninas <a href="orfanato.html" class="choose-orphanage"> <img src="./public/images/arrow-white.svg"> </a>');

//cria o icone de marcação
L.marker([-29.9430139, -50.9959819], {icon}).addTo(map).bindPopup(popup)

    