import React from "react";
import "./MapZoom.less";

function MapZoom() {
    return (
        <div className="map-zoom-container">
            <div className="btn-zoom-in btn-zoom" >+</div>
            <div className="btn-zoom-out btn-zoom">-</div>
        </div>
    )
}

export default MapZoom;