const mapboxgl = require("mapbox-gl");

const addMarker = function (str, arr) {  
    if (str === 'activity') {
        const markerDomEl = document.createElement("div");
        markerDomEl.style.width = "32px";
        markerDomEl.style.height = "39px";
        markerDomEl.style.backgroundImage = "url(http://i.imgur.com/WbMOfMl.png)";
        return new mapboxgl.Marker(markerDomEl).setLngLat(arr)

    }if (str === 'hotel') {
        console.log('HIIIIIIIIIII');
        const markerDomEl = document.createElement("div");
        markerDomEl.style.width = "32px";
        markerDomEl.style.height = "39px";
        markerDomEl.style.backgroundImage = 'url(http://i.imgur.com/D9574Cu.png)';
        return new mapboxgl.Marker(markerDomEl).setLngLat(arr);

    } else if (str === 'restaurant') {
        const markerDomEl = document.createElement("div");
        markerDomEl.style.width = "32px";
        markerDomEl.style.height = "39px";
        markerDomEl.style.backgroundImage = "url(http://i.imgur.com/cqR6pUI.png)";
        return new mapboxgl.Marker(markerDomEl).setLngLat(arr);

    }
}

module.exports = {addMarker};
    
