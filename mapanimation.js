// This array contains the coordinates for all bus stops between MIT and Harvard
const busStops = [
  [77.34728508046476,11.097859187705438],
  [77.34113120964906,11.079624126345244],
  [77.33899374953151,11.065743638576718],
  [77.3270996441282,11.054398634303679],
  [77.31629228212552,11.040768499936654],
  [77.29765156376615,11.01261714411744],
  [77.29200628609448,10.99460077022672],
  [77.28304217823307,10.994604473417628],
  [77.22091037514826,11.002059153325689],
  [77.20903376457075,11.007477331810147],
  [77.18424188756693,11.017510352146234],
  [77.15577824002142,11.027274564012977],
  [77.13335156888772,11.028044755233614],
];


// TODO: add your own access token
mapboxgl.accessToken = 'pk.eyJ1Ijoic2VudGhpbGt1cHB1c3dhbXkiLCJhIjoiY2twbTlkMzBlMDQxYjJ2bXcwcG5xdnhzNCJ9.mmPcPQN_3raRRh8Q0S1kEw';


// This is the map instance
let map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/streets-v11',
  center: [77.34728508046476,11.097859187705438],
  zoom: 14,
});


// TODO: add a marker to the map at the first coordinates in the array busStops. The marker variable should be named "marker"
var marker= new mapboxgl.Marker()
            .setLngLat([77.34728508046476,11.097859187705438])
            .addTo(map);
// counter here represents the index of the current bus stop
let counter = 0;
function move() {
  // TODO: move the marker on the map every 1000ms. Use the function marker.setLngLat() to update the marker coordinates
  // Use counter to access bus stops in the array busStops
  // Make sure you call move() after you increment the counter.
  setTimeout(()=> {
    if (counter>=busStops.length) return;
    marker.setLngLat(busStops[counter]);
    counter++;
    move();
    },1000);
}


// Do not edit code past this point
if (typeof module !== 'undefined') {
  module.exports = { move };
}
