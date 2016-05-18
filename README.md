# mapbox-gl-boundaries
![switch boundaries](https://cloud.githubusercontent.com/assets/126868/15373632/3214b158-1d64-11e6-858b-e005c6f44235.gif)
A Mapbox GL JS plugin that modifies the boundaries in your map.


### Usage
Download the files from `dist/` and add it to your Mapbox Map `<head>` with:

```
<script src='mapbox-gl-js-boundaries.js'></script>
```

In your `<script>` add this line after initializing your `map`:
```
nmapboxgl.removeDispute(map, 'IN'); // Remove the disputed boundaries for India
```

### Features
- Switch the boundary of a disputed area for a particular country

### Developing and Testing Mapbox GL JS plugins

Check the instructions on the [mapbox-gl-compare](https://github.com/mapbox/mapbox-gl-compare) plugin.
