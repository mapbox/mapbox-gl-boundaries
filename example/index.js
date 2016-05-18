'use strict';
/* global mapboxgl */

require('../');
mapboxgl.accessToken = window.localStorage.getItem('MapboxAccessToken');

var map = new mapboxgl.Map({
    container: 'map', // container id
    style: 'mapbox://styles/mapbox/streets-v8', //stylesheet location
    center: [77.641, 12.978], // starting position
    zoom: 14, // starting zoom
    hash: true
});

document.getElementById("switch").onclick = function(){
   mapboxgl.removeDispute(map, 'IN');
}
