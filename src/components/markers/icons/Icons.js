import L from "leaflet";
import ReactDOMServer from "react-dom/server";
import {
  GiCastle,
  GiCaveEntrance,
  GiCrossMark,
  GiHutsVillage,
  GiPortal,
  GiVillage,
  GiWhiteTower,
  GiWindmill,
  GiWoodenDoor,
} from "react-icons/gi";
import { IconContext } from "react-icons";

export const city = L.divIcon({
  className: "custom-icon",
  html: ReactDOMServer.renderToString(
    <IconContext.Provider value={{ size: "2em" }}>
      <div>
        <GiCastle />
      </div>
    </IconContext.Provider>
  ),
});

export const town = L.divIcon({
  className: "custom-icon",
  html: ReactDOMServer.renderToString(
    <IconContext.Provider value={{ size: "2em" }}>
      <div>
        <GiVillage />
      </div>
    </IconContext.Provider>
  ),
});

export const village = L.divIcon({
  className: "custom-icon",
  html: ReactDOMServer.renderToString(
    <IconContext.Provider value={{ size: "2em" }}>
      <div>
        <GiHutsVillage />
      </div>
    </IconContext.Provider>
  ),
});

export const dungeon = L.divIcon({
  className: "custom-icon",
  html: ReactDOMServer.renderToString(
    <IconContext.Provider value={{ size: "2em" }}>
      <div>
        <GiWoodenDoor />
      </div>
    </IconContext.Provider>
  ),
});

export const cave = L.divIcon({
  className: "custom-icon",
  html: ReactDOMServer.renderToString(
    <IconContext.Provider value={{ size: "2em" }}>
      <div>
        <GiCaveEntrance />
      </div>
    </IconContext.Provider>
  ),
});

export const fort = L.divIcon({
  className: "custom-icon",
  html: ReactDOMServer.renderToString(
    <IconContext.Provider value={{ size: "2em" }}>
      <div>
        <GiWhiteTower />
      </div>
    </IconContext.Provider>
  ),
});

export const portal = L.divIcon({
  className: "custom-icon",
  html: ReactDOMServer.renderToString(
    <IconContext.Provider value={{ size: "2em" }}>
      <div>
        <GiPortal />
      </div>
    </IconContext.Provider>
  ),
});

export const farm = L.divIcon({
  className: "custom-icon",
  html: ReactDOMServer.renderToString(
    <IconContext.Provider value={{ size: "2em" }}>
      <div>
        <GiWindmill />
      </div>
    </IconContext.Provider>
  ),
});

export const unknown = L.divIcon({
  className: "custom-icon",
  html: ReactDOMServer.renderToString(
    <IconContext.Provider value={{ size: "2em" }}>
      <div>
        <GiCrossMark />
      </div>
    </IconContext.Provider>
  ),
});
