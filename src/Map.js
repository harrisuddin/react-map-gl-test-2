import * as React from "react";
import { useState, useEffect } from "react";
import ReactMapGL from "react-map-gl";

function Map() {
  const [viewport, setViewport] = useState(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((pos) => {
      const { latitude, longitude } = pos.coords;
      setViewport({ zoom: 8, latitude, longitude });
    });
  }, []);

  return viewport ? (
    <ReactMapGL
      width="100vw"
      height="100vh"
      {...viewport}
      mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}
      onViewportChange={(nextViewport) => {
        const { width, height, ...etc } = nextViewport;
        setViewport(etc);
      }}
      mapStyle="mapbox://styles/harris7001/ckj1hlact9mon19mhnrlvskth"
    />
  ) : (
    <div>
      <h1>Please enable location access</h1>
    </div>
  );
}

export default Map;
