const mapboxgl = require("mapbox-gl");

function addMarker (str, arr) {
    if (str === 'activity') {
        const markerDomEl = document.createElement("div");
        markerDomEl.style.width = "32px";
        markerDomEl.style.height = "39px";
        markerDomEl.style.backgroundImage = "url(http://i.imgur.com/WbMOfMl.png)";
        new mapboxgl.Marker(markerDomEl).setLngLat(arr).addTo(map);

    }if (str === 'hotel') {
        const markerDomEl = document.createElement("div");
        markerDomEl.style.width = "32px";
        markerDomEl.style.height = "39px";
        markerDomEl.style.backgroundImage = 'http://i.imgur.com/D9574Cu.png';
        new mapboxgl.Marker(markerDomEl).setLngLat(arr).addTo(map);

    }if (str === 'restaurant') {
        const markerDomEl = document.createElement("div");
        markerDomEl.style.width = "32px";
        markerDomEl.style.height = "39px";
        markerDomEl.style.backgroundImage = "http://i.imgur.com/cqR6pUI.png";
        new mapboxgl.Marker(markerDomEl).setLngLat(arr).addTo(map);

    }
}

module.exports = addMarker;
    
