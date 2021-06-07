
//criando um objeto para desabilitar o zoom do mapa
const options = {
    dragging: false,
    touchZoom: false,
    doubleClickZoom: false,
    scrollWheelZoom: false,
    zoomControl: false
}


const map = L.map('mapid', options).setView([-29.9430139, -50.9959819], 15); //Cria o mapa com o leaflet js

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

//cria o icone de marcação
L.marker([-29.9430139, -50.9959819], {icon}).addTo(map)

function selectImage(event)
{
    const button = event.currentTarget
    console.log(button.children)

    //remover todas as classes active
const buttons = document.querySelectorAll(".images button")
buttons.forEach(removeActiveClass)

function removeActiveClass(button){
    button.classList.remove("active")
}
//selecionar a imagem clicada
const image = button.children[0]
const imageContainer = document.querySelector(".orfanato-details > img")
//atualizar o container de image
imageContainer.src = image.src
//adicionar a classe active para este botão
button.classList.add('active')

}

























    