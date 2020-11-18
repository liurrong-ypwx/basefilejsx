import React, { useEffect, useState } from "react";
import * as MapApi from "../../utils/map/MainMap";
import { BASE_MAP_URL } from "../../utils/map/RequestPath";
import MapDraw from "../component/MapDraw/MapDraw";

import "./MapPage.less";

function MapPage() {

    const [map, setMap] = useState(null);

    useEffect(() => {
        initMap();
        // eslint-disable-next-line
    }, [])

    // 粉刷匠 初始化地图
    const initMap = () => {

        if(map){
            map.off();
            map.remove();
        }
        const tmpMap = MapApi.initMap("map", BASE_MAP_URL);  
        setMap(tmpMap);
    
 
    }



    return (
        <div className="map-page">
            <div className="map-container" id="map" >
                <MapDraw />
            </div>
        </div>
    )
}

export default MapPage
