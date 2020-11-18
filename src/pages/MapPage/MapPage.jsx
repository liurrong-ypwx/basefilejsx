import React, { useEffect } from "react";
import L from 'leaflet';
import {tiledMapLayer} from '@supermap/iclient-leaflet';

import "./MapPage.less";

function MapPage() {

    useEffect(() => {
        const url = "https://iserver.supermap.io/iserver/services/map-world/rest/maps/World";
        const map = L.map('map', {
            crs: L.CRS.EPSG4326,
            center: [0, 0],
            maxZoom: 18,
            zoom: 1
        });
        tiledMapLayer(url).addTo(map);
    }, [])

    return (
        <div className="map-page">
            <div className="map-container" id="map" />
        </div>
    )
}

export default MapPage
