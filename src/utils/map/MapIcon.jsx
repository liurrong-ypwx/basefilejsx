import L from 'leaflet';
import leafGreen from "../../assets/image/markers/leaf-green.png";
import leafRed from "../../assets/image/markers/leaf-red.png";
import leafOrange from "../../assets/image/markers/leaf-orange.png";
import leafShadow from "../../assets/image/markers/leaf-shadow.png";

export const greenIcon = L.icon({
    iconUrl: leafGreen,
    shadowUrl: leafShadow,

    iconSize: [38, 95], // size of the icon
    shadowSize: [50, 64], // size of the shadow
    iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
    shadowAnchor: [4, 62],  // the same for the shadow
    popupAnchor: [-3, -76] // point from which the popup should open relative to the iconAnchor
});

export const redIcon = L.icon({
    iconUrl: leafRed,
    shadowUrl: leafShadow,

    iconSize: [38, 95], // size of the icon
    shadowSize: [50, 64], // size of the shadow
    iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
    shadowAnchor: [4, 62],  // the same for the shadow
    popupAnchor: [-3, -76] // point from which the popup should open relative to the iconAnchor
});

export const orangeIcon = L.icon({
    iconUrl: leafOrange,
    shadowUrl: leafShadow,

    iconSize: [38, 95], // size of the icon
    shadowSize: [50, 64], // size of the shadow
    iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
    shadowAnchor: [4, 62],  // the same for the shadow
    popupAnchor: [-3, -76] // point from which the popup should open relative to the iconAnchor
});