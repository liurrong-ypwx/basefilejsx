
import L from 'leaflet';
import { tiledMapLayer } from '@supermap/iclient-leaflet';
import { BASE_MAP_CHINA, BASE_MAP_CHINA_DARK } from './RequestPath';

const China = L.supermap.tiledMapLayer(BASE_MAP_CHINA, { noWrap: true });
const ChinaDark = L.supermap.tiledMapLayer(BASE_MAP_CHINA_DARK, { noWrap: true });

// ---------------------------------------粉刷匠 初始化地图---------------------------------------
export const initMap = (domID, mapUrl) => {
    const tmpMap = L.map(domID, {
        crs: L.CRS.EPSG4326,
        center: [24, 113],
        maxZoom: 18,
        zoom: 5
    });
    tiledMapLayer(mapUrl).addTo(tmpMap);
    return tmpMap;
}

// ---------------------------粉刷匠 添加地图组件：缩放、比例尺、图层切换 ---------------------------
export const addMapCom = (type, orgMap) => {
    if (type === "zoom") {
        L.control.zoom().addTo(orgMap);
    } else if (type === "scale") {
        L.control.scale().addTo(orgMap);
    } else if (type === "layers") {
      
        const baseMaps = {
            "China": China,
            "ChinaDark": ChinaDark
        }
        L.control.layers(baseMaps).addTo(orgMap);
    }
}

// ----------------------------粉刷匠 添加地图注记图层-------------------------------
export const addDrawTool = (map) => {
    // 创建一个绘制图层
    let editableLayers = new L.FeatureGroup();
    // 绘制控件参数配置
    let options = {
        position: 'topleft',
        draw: {
            polyline: {}, // 线
            polygon: {}, // 面
            circle: {}, // 圆
            rectangle: {}, // 矩形
            marker: {}, // 标记点
            remove: {}
        },
        edit: {
            featureGroup: editableLayers,
            remove: true
        }
    };
    // 创建并添加绘制控件
    let drawControl = new L.Control.Draw(options);
    map.addControl(drawControl);
    // 监听绘制事件
    map.on(L.Draw.Event.CREATED, function (e) {
        // let type = e.layerType;
        let layer = e.layer;
        editableLayers.addLayer(layer);
    });
}