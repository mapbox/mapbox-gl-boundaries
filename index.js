'use strict';


function removeDispute(map, country) {

    // // DEBUG: List all layers in the style
    // map.getStyle().layers.forEach(function(layer) {
    //     console.log("Current layer is ", layer)
    // });

    // Switch the international borders to a non neutral version for disputed areas
    console.log('Switching borders for: ' + country);

    // Add the claimed boundaries vector source
    map.addSource('claimedboundaries', {
        type: 'vector',
        url: 'mapbox://planemad.claimedboundaries'
    });

    // Style the claimed boundaries background line
    map.addLayer({
        "id": "admin-2-claimed-bg",
        "type": "line",
        "source": "claimedboundaries",
        "source-layer": "claimedboundaries"
    }, "admin-2-boundaries");

    ["admin-2-boundaries-bg"].forEach(function(layer) {
        pickPaintProperties("admin-2-claimed-bg", layer, ["line-color", "line-opacity", "line-width"]);
    });

    // Style the claimed boundaries line
    map.addLayer({
        "id": "admin-2-claimed",
        "type": "line",
        "source": "claimedboundaries",
        "source-layer": "claimedboundaries"
    }, "admin-2-boundaries");

    ["admin-2-boundaries"].forEach(function(layer) {
        pickPaintProperties("admin-2-claimed", layer, ["line-color", "line-opacity", "line-width"]);
    });

    // Filter out the disputed boundaries from the background line
    ["admin-2-boundaries-bg"].forEach(function(layer) {
        var filter = map.getFilter(layer);
        filter.push([
            "==",
            "disputed",
            0
        ]);
        map.setFilter(layer, filter);
    });

    // // Hide disputed boundaries line
    // ["admin-disputed", "admin-2-boundaries-dispute"].forEach(function(layer) {
    //   try{
    //     map.setLayoutProperty(layer, "visibility", "none");
    //   }catch(e){
    //     // Wrong layer name
    //   }
    // });


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

}


// Export OSM module
if (window.mapboxgl) {
    mapboxgl.removeDispute = removeDispute;
} else if (typeof module !== 'undefined') {
    module.exports = removeDispute;
}
