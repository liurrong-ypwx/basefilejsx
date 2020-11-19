
import L from 'leaflet';
import { tiledMapLayer } from '@supermap/iclient-leaflet';
import { BASE_MAP_CHINA, BASE_MAP_CHINA_DARK } from './RequestPath';

const China = L.supermap.tiledMapLayer(BASE_MAP_CHINA, { noWrap: true });
const ChinaDark = L.supermap.tiledMapLayer(BASE_MAP_CHINA_DARK, { noWrap: true });

// =======================================初始化=======================================
// 初始化地图--使用指定路径的底图
export const initMap = (domID, mapUrl) => {
    const tmpMap = L.map(domID, {
        crs: L.CRS.EPSG4326,
        center: [24, 113],
        // maxZoom: 18,
        zoom: 5,
    });
    tiledMapLayer(mapUrl).addTo(tmpMap);
    return tmpMap;
}

// 初始化地图--使用supermap的底图
export const initSuperMap = (domID) => {
    const tmpMap = L.map(domID, {
        center: [24, 113],
        zoom: 5,
    });
    L.supermap.tiledMapLayer(BASE_MAP_CHINA).addTo(tmpMap);
    return tmpMap;
}


// ===========================粉刷匠 添加地图组件：缩放、比例尺、图层切换 ===========================
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

// ============================粉刷匠 画点、线、面===============================
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


// 在地图上添加点注记符号
export const addPointSymbol = (pointArr, orgMap) => {
    if (orgMap && pointArr) {
        for (let i = 0; i < pointArr.length; i++) {
            const tmpMarker = pointArr[i].coordinate;
            let marker;
            if (pointArr[i].icon) {
                marker = L.marker(tmpMarker, { icon: pointArr[i].icon }).addTo(orgMap);
            } else {
                marker = L.marker(tmpMarker).addTo(orgMap);
            }
            if (pointArr[i].popup) {
                marker.bindPopup(pointArr[i].popup);
            }
        }
    }
}

// 使用默认风格的矢量瓦片示例
export const addTiledVectorLayer = (orgmap) => {
    const url = "https://iserver.supermap.io/iserver/services/map-china400/rest/maps/China";
    //创建一个矢量瓦片图层
    const vectorLayer = L.supermap.tiledVectorLayer(url, {
        cacheEnabled: true,
        returnAttributes: true,
        attribution: "Tile Data©SuperMap iServer with©SuperMap iClient"
    }).addTo(orgmap);

    if (vectorLayer) {

        let id = null;
        let layerName = null;

        //矢量瓦片图层添加点击事件，设置默认风格
        vectorLayer.on('click', function (evt) {
            // 点击矢量瓦片图层获取id & layerName
            const selectId = evt.layer.properties.id;
            const selectLayerName = evt.layer.layerName;
            // 清空高亮
            clearHighLight();
            id = selectId;
            layerName = selectLayerName;
            // 设置矢量瓦片图层样式
            const selectStyle = {
                fillColor: '#800026',
                fillOpacity: 0.5,
                stroke: true, fill: true, color: 'red', opacity: 1, weight: 2
            };
            vectorLayer.setFeatureStyle(selectId, selectLayerName, selectStyle);
        });

        // 清空之前的高亮
        const clearHighLight = () => {
            if (id && layerName) {
                vectorLayer.resetFeatureStyle(id, layerName);
            }
            id = null;
            layerName = null;
        }
    
    }

  
}

