# mapbox-gl-js-boundaries
![switch boundaries](https://cloud.githubusercontent.com/assets/126868/15373632/3214b158-1d64-11e6-858b-e005c6f44235.gif)
A Mapbox GL JS plugin that modifies the disputed boundaries in your map.

### Features
- Add claimed boundaries to a country with disputed territories for a local representation of the borders.

### Usage
Download the files from `dist/` and include it in your map html `<head>` with:

```
<script src='mapbox-gl-boundaries.js'></script>
```

In your `<script>` add this line after initializing your `map`:
```
mapboxgl.addClaimedBoundaries(map, 'IN'); // Add the claimed boundaries to the map of India
```
**Note** Currently only India is supported.

### Developing and Testing Mapbox GL JS plugins

Check the instructions on the [mapbox-gl-compare](https://github.com/mapbox/mapbox-gl-compare) plugin.
