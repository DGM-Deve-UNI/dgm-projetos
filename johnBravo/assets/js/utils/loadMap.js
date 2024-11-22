export function loadMap() {
    // Inicializa o mapa com OpenStreetMap e Leaflet.js
    var map = L.map('map').setView([-22.9068, -43.1729], 13); // Localização fictícia no Rio de Janeiro

    // Adiciona o tile do OpenStreetMap
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    // Adiciona um marcador no local fictício
    L.marker([-22.9068, -43.1729]).addTo(map)
        .bindPopup('Rua São João, 456 - Rio de Janeiro - RJ')
        .openPopup();
}
