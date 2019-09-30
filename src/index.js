const mapboxgl = require("mapbox-gl");
const {addMarker} = require("./marker");

mapboxgl.accessToken = 'pk.eyJ1IjoibWMyZ3JlZW4iLCJhIjoiY2sxNmt1OG42MTZ1YzNtcnNseGQ4ZDUwcyJ9.IrkLUmQuCAuEeIQC41-rJg';

const map = new mapboxgl.Map({
  container: "map",
  center: [-74.009, 40.705], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available.
});
//console.log("HIIIIIII")
const marker = addMarker('hotel', [-74.009151, 40.705086]);
marker.addTo(map);