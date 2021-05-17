import "./App.css";
import React, { useState } from "react";
import { MapContainer } from "react-leaflet";
import { CRS } from "leaflet";
import EventComponent from "./components/EventComponent";
import MapElements from "./components/markers/MapElements";

const App = () => {
  const [currentZoom, setZoomLevel] = useState(2);
  const updateZoom = (newZoomLevel) => setZoomLevel(newZoomLevel);

  const [coords, setCoords] = useState([0, 0]);
  const updateCoords = (coords) => setCoords(coords);
  return (
    <div className="App">
      <MapContainer
        center={[-96, 128]}
        minZoom={1}
        zoom={currentZoom}
        scrollWheelZoom={true}
        style={{ height: window.innerHeight, width: window.innerWidth }}
        crs={CRS.Simple}
        maxZoom={7}
      >
        <MapElements zoom={currentZoom} coords={coords} />
        <EventComponent updateZoom={updateZoom} updateCoords={updateCoords} />
      </MapContainer>
    </div>
  );
};

export default App;
