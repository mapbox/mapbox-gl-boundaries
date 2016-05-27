'use strict';
/* global mapboxgl */

require('../');
mapboxgl.accessToken = window.localStorage.getItem('MapboxAccessToken');

var map = new mapboxgl.Map({
    container: 'map', // container id
    style: 'mapbox://styles/mapbox/streets-v9', //stylesheet location
    center: [80, 25], // starting position
    zoom: 3.6, // starting zoom
    hash: true
});

document.getElementById("switch").onclick = function(){
   mapboxgl.addClaimedBoundaries(map, 'IN');
}
