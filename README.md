# mapbox-gl-boundaries
A Mapbox GL JS plugin that adds tools to work with OpenStreetMap data in your map

### Usage
__Under Development__

Download the files from `dist/` and add it to your Mapbox Map `<head>` with:

```
<script src='mapbox-gl-js-boundaries.js'></script>
```

In your `<script>` add this line after initializing your `map`:
```
new mapboxgl.setBoundaries('IN'); // Switch the disputed area boundaries to the Indian version
```

### Features
- Switch the boundary of a disputed are for a particular country

### Developing and Testing Mapbox GL JS plugins

Check the instructions on the [mapbox-gl-compare](https://github.com/mapbox/mapbox-gl-compare) plugin.
