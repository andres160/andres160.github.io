// // Creating our initial map object
// // We set the longitude, latitude, and the starting zoom level
// // This gets inserted into the div with an id of 'map'
// var myMap = L.map("map", {
//     center: [39, -97],
//     style: 'mapbox://styles/andres160/cjtqg7wzb7aq11focbt9xrsnk',
//     zoom: 4
//   });
  
//   // Adding a tile layer (the background map image) to our map
//   // We use the addTo method to add objects to our map
//   L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
//     attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
//     maxZoom: 18,
//     id: "mapbox.streets",
//     accessToken: API_KEY
//   }).addTo(myMap);  


mapboxgl.accessToken = 'pk.eyJ1IjoiYW5kcmVzMTYwIiwiYSI6ImNqdHFnMG5tbzAyY2g0ZnFvY3h0YmFoNzUifQ.ZssPqCXYwPXKw6IFI7DUUQ';
const map = new mapboxgl.Map({
container: 'map',
style: 'mapbox://styles/andres160/cju6mcowg2srl1ftidefnf7ia',
center: [-97, 38],
zoom: 3
});
