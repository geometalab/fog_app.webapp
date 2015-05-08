/**
 * Created by dligtenb on 07.05.2015.
 * Main JavaScript file
 */

$(document).ready(function () {

    // Swiss Style background map
    var  swissStyle = baseMap.createLayer(
       config.background_maps.swiss_style.url,
       config.background_maps.swiss_style.attribution_url,
       config.background_maps.swiss_style.attribution_text
    );

    // Mapbox Satellite backround map
    var mapbox = baseMap.createLayer(
        config.background_maps.mapbox_satellite.url,
        config.background_maps.mapbox_satellite.attribution_url,
        config.background_maps.mapbox_satellite.attribution_text
    );

    var mapCenter = [46.7803,8.1985];

    // initiate map
    var map = baseMap.create(swissStyle, mapCenter);

    // add base tiles to the map
    var baseMaps={
        "OSM Swiss-Style":swissStyle,
        "Mapbox Satellite":mapbox
    };
    L.control.layers(baseMaps).addTo(map);
});