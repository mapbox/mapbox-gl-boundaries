'use strict';


function removeDispute(map, country) {

    // Switch the international borders to a non neutral version for disputed areas
    console.log('Switching borders for: ' + country);

    // Add the claimed boundaries vector source
    map.addSource('claimedboundaries', {
        type: 'vector',
        url: 'mapbox://planemad.claimedboundaries'
    });

    // Style the claimed boundaries
    map.addLayer({
        "id": "admin-2-claimed",
        "type": "line",
        "source": "claimedboundaries",
        "source-layer": "claimedboundaries"
    }, "admin-2-boundaries");
    pickPaintProperties("admin-2-claimed", "admin-2-boundaries", ["line-color", "line-opacity", "line-width"]);

    // Hide disputed boundaries
    map.setLayoutProperty("admin-2-boundaries-dispute", "visibility", "none")

    // Pick style properties from a target layer
    function pickPaintProperties(source, target, properties) {
        properties.forEach(function(prop) {
            map.setPaintProperty(source, prop, map.getPaintProperty(target, prop));
        });
    };

    function pickLayoutProperties(source, target, properties) {
        properties.forEach(function(prop) {
            map.setLayoutProperty(source, prop, map.getLayoutProperty(target, prop));
        });
    };

    // // DEBUG: List all layers in the style
    // map.getStyle().layers.forEach(function(layer) {
    //     console.log("Current layer is ", layer)
    // })

}


// Export OSM module
if (window.mapboxgl) {
    mapboxgl.removeDispute = removeDispute;
} else if (typeof module !== 'undefined') {
    module.exports = removeDispute;
}
