var map = L.map('map', {
  center: [-1.652, 102.986], // Koordinat Jambi
  minZoom: 2,
  zoom: 9, // Sesuaikan level zoom sesuai kebutuhan
});

// Sisanya tetap sama
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  subdomains: ['a', 'b', 'c'],
}).addTo(map)

var myURL = jQuery('script[src$="leaf-demo.js"]')
  .attr('src')
  .replace('leaf-demo.js', '')

var myIcon = L.icon({
  iconUrl: myURL + 'images/pin24.png',
  iconRetinaUrl: myURL + 'images/pin48.png',
  iconSize: [29, 24],
  iconAnchor: [9, 21],
  popupAnchor: [0, -14],
})

for (var i = 0; i < markers.length; ++i) {
  L.marker([markers[i].lat, markers[i].lng], { icon: myIcon })
    .bindPopup(
      '<a href="' +
        markers[i].url +
        '" target="_blank">' +
        markers[i].name +
        '</a>'
    )
    .addTo(map)
}