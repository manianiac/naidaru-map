// import logo from "./logo.svg";
import "./App.css";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvents,
} from "react-leaflet";
import { CRS } from "leaflet";

function App() {
  return (
    <div className="App">
      <MapContainer
        center={[-90, 128]}
        minZoom={0}
        zoom={2}
        scrollWheelZoom={true}
        style={{ height: window.innerHeight, width: window.innerWidth }}
        crs={CRS.Simple}
        maxZoom={7}
      >
        <TileLayer
          // attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="tiles/{z}/{x}/{y}.png"
          noWrap={true}
        />
        <EventComponent />
      </MapContainer>
    </div>
  );
}

export default App;
const EventComponent = () => {
  const map = useMapEvents({
    click: (e) => {
      console.log(e.latlng);
    },
  });
  return null;
};
