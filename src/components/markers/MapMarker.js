import {
  LayerGroup,
  LayersControl,
  Marker,
  Popup,
  Tooltip,
  Polyline,
  TileLayer,
} from "react-leaflet";
import {
  CAVE,
  CITY,
  DUNGEON,
  FARM,
  FORT,
  PORTAL,
  TOWN,
  UNKNOWN,
  VILLAGE,
} from "../consts";
import {
  cave,
  city,
  dungeon,
  farm,
  fort,
  portal,
  town,
  unknown,
  village,
} from "./icons/Icons";
import { markers } from "./markers";

const MapMarker = ({ marker, zoom }) => {
  const { name, type, location, description, link, major } = { ...marker };
  let icon = {};
  switch (type) {
    case CITY:
      if (zoom >= 3 || major) {
        icon = city;
      } else {
        return null;
      }
      break;
    case VILLAGE:
      if (zoom >= 5 || major) {
        icon = village;
      } else {
        return null;
      }
      break;
    case TOWN:
      if (zoom >= 4 || major) {
        icon = town;
      } else {
        return null;
      }
      break;
    case DUNGEON:
      if (zoom >= 5 || major) {
        icon = dungeon;
      } else {
        return null;
      }
      break;
    case CAVE:
      if (zoom >= 5 || major) {
        icon = cave;
      } else {
        return null;
      }
      break;
    case FORT:
      if (zoom >= 4 || major) {
        icon = fort;
      } else {
        return null;
      }
      break;
    case PORTAL:
      if (zoom >= 5 || major) {
        icon = portal;
      } else {
        return null;
      }
      break;
    case UNKNOWN:
      if (zoom >= 5 || major) {
        icon = unknown;
      } else {
        return null;
      }
      break;
    case FARM:
      if (zoom >= 5 || major) {
        icon = farm;
      } else {
        return null;
      }
      break;
    default:
      console.error("Invalid Type", marker);
      return null;
  }
  return (
    <Marker position={location} icon={icon}>
      {!!name ? <Tooltip>{name}</Tooltip> : null}
      {!!description ? (
        <Popup>
          {description}
          <br />
          {!!link ? (
            <a href={link} target="_blank" rel="noreferrer">
              Wiki Page
            </a>
          ) : (
            ""
          )}
        </Popup>
      ) : null}
    </Marker>
  );
};
//Ladhelion/Leraine, Leraine/Ithion, Siriene, Himlothlind/Delonce,Himlothlind/Delonce, Delonce/Amant,Amant/Avalas
const borders = [
  [
    [-78.25, 99.0625],
    [-79.3125, 88.75],
    [-79.3125, 84.125],
    [-78.4375, 78.375],
    [-78.125, 77.5],
    [-71.875, 65.625],
    [-71.8534, 65.4453],
  ],
  [
    [-57.25, 101.375],
    [-57.9375, 99.1875],
    [-57.8125, 93.0625],
    [-57.25, 91.9375],
    [-52.9375, 84.125],
    [-52.5625, 83.6875],
    [-49.125, 80.5],
    [-48.8245, 80.3761],
  ],
  [
    [-56.953125, 91.34375],
    [-57.125, 91.078125],
    [-57.515625, 90.5625],
    [-58.875, 87.984375],
    [-58.96875, 87.703125],
    [-59.03125, 87.3125],
    [-59.09375, 86.5625],
    [-59.0625, 85.296875],
    [-59.03125, 85.234375],
    [-57.34375, 83.1875],
    [-57.203125, 83.0625],
    [-57.109375, 83.015625],
    [-56.65625, 83.03125],
    [-56.5625, 83.078125],
    [-53.953125, 85.984375],
  ],
  [
    [-72.5625, 151.5],
    [-71.75, 151.9375],
    [-71.125, 152.375],
    [-69.9375, 153.375],
    [-61.875, 165.3125],
    [-61.3125, 166.0625],
    [-52.75, 179.8125],
    [-51.8125, 181.4375],
    [-51.8125, 181.6875],
  ],
  [
    [-59.8125, 210.78125],
    [-60.3125, 211.0625],
    [-63.5625, 211.0625],
    [-63.875, 211.125],
    [-64.5, 211.375],
    [-65.25, 211.8125],
    [-65.625, 212.3125],
    [-65.875, 212.75],
    [-66.5625, 214.25],
    [-67.8125, 216.4375],
    [-69.4375, 217.625],
    [-70.125, 217.875],
    [-72.375, 217.875],
    [-72.75, 217.9375],
    [-73.125, 218.125],
    [-73.3516, 218.1406],
  ],
  [
    [-87.5083, 216.1544],
    [-87.12903594970703, 215.79773330688477],
    [-86.37903594970703, 215.23523330688477],
    [-85.75403594970703, 214.61023330688477],
    [-85.00403594970703, 213.73523330688477],
    [-84.37903594970703, 212.86023330688477],
    [-83.94153594970703, 211.79773330688477],
    [-83.25403594970703, 210.11023330688477],
    [-82.81653594970703, 208.79773330688477],
    [-82.50403594970703, 207.54773330688477],
    [-82.44153594970703, 206.29773330688477],
    [-82.44153594970703, 204.73523330688477],
    [-83.19153594970703, 202.98523330688477],
    [-83.81653594970703, 201.17273330688477],
    [-84.06653594970703, 199.86023330688477],
    [-84.19153594970703, 198.79773330688477],
    [-84.37903594970703, 197.17273330688477],
    [-84.50403594970703, 196.23523330688477],
    [-84.75403594970703, 194.36023330688477],
    [-85.00403594970703, 192.48523330688477],
    [-85.12903594970703, 191.86023330688477],
    [-85.25403594970703, 190.92273330688477],
    [-85.50403594970703, 188.61023330688477],
    [-85.50403594970703, 186.36023330688477],
    [-85.50403594970703, 184.23523330688477],
    [-85.50403594970703, 182.98523330688477],
    [-85.50403594970703, 182.61023330688477],
    [-85.50403594970703, 182.17273330688477],
    [-85.50403594970703, 181.54773330688477],
    [-85.50403594970703, 180.42273330688477],
    [-85.00403594970703, 178.67273330688477],
    [-84.44153594970703, 176.92273330688477],
    [-84.2656, 176.5859],
  ],
  [
    [-106.1888, 243.5438],
    [-108.1201286315918, 242.84088897705078],
    [-110.0576286315918, 240.52838897705078],
    [-110.9326286315918, 238.02838897705078],
    [-111.8701286315918, 236.27838897705078],
    [-114.1201286315918, 234.40338897705078],
    [-116.8701286315918, 232.84088897705078],
    [-119.4951286315918, 231.59088897705078],
    [-119.6826286315918, 227.96588897705078],
    [-119.6826286315918, 224.65338897705078],
    [-118.6201286315918, 220.84088897705078],
    [-118.7451286315918, 218.34088897705078],
    [-120.3701286315918, 216.77838897705078],
    [-123.0576286315918, 216.15338897705078],
    [-128.2451286315918, 215.77838897705078],
    [-132.0576286315918, 213.90338897705078],
    [-136.3076286315918, 208.65338897705078],
    [-136.7451286315918, 204.84088897705078],
    [-139.5576286315918, 200.46588897705078],
    [-142.2451286315918, 198.46588897705078],
    [-144.6201286315918, 195.21588897705078],
    [-145.8701286315918, 193.90338897705078],
    [-146.3076286315918, 193.40338897705078],
    [-146.4577, 193.0905],
  ],
];

const MapMarkers = ({ zoom, coords }) => {
  let civilization = [];
  let wilderness = [];
  markers.forEach((marker) => {
    switch (marker.type) {
      case CITY:
      case VILLAGE:
      case TOWN:
      case FORT:
      case FARM:
        civilization.push(MapMarker({ marker, zoom }));
        break;
      case PORTAL:
      case DUNGEON:
      case CAVE:
      case UNKNOWN:
        wilderness.push(MapMarker({ marker, zoom }));
        break;
      default:
        console.error("Invalid Location Type");
    }
  });
  return (
    <LayersControl position="topright">
      <LayersControl.BaseLayer checked name="Naidaru">
        <TileLayer url="tiles/{z}/{x}/{y}.png" noWrap={true} />
      </LayersControl.BaseLayer>
      <LayersControl.Overlay checked name="Borders">
        <LayerGroup>
          <Polyline
            positions={borders}
            pathOptions={{ color: "white", dashArray: "4" }}
          />
        </LayerGroup>
      </LayersControl.Overlay>
      <LayersControl.Overlay checked name="Civilized Locations">
        <LayerGroup>{civilization}</LayerGroup>
      </LayersControl.Overlay>
      <LayersControl.Overlay checked name="Wilderness Locations">
        <LayerGroup>{wilderness}</LayerGroup>
      </LayersControl.Overlay>
      <LayersControl.Overlay name="Click Location">
        {coords !== [] ? (
          <Marker position={coords}>
            <Tooltip>
              {coords[0]},{coords[1]}
            </Tooltip>
          </Marker>
        ) : null}
      </LayersControl.Overlay>
    </LayersControl>
  );
};
export default MapMarkers;
