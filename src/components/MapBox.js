import React, { useEffect, useRef, useState } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

const styles = {
  width: "100vw",
  height: "calc(100vh - 80px)",
  position: "absolute",
};

const MapBox = () => {
  const [map, setMap] = useState(null);
  const mapContainer = useRef(null);

  useEffect(() => {
    mapboxgl.accessToken =
      "pk.eyJ1IjoianJoZW1hbm4iLCJhIjoiY2s4cXJmeGx3MDRvdzNsbjA0eHlzcHh5diJ9.62toL3HZx60UCky-naglQg";
    const initializeMap = ({ setMap, mapContainer }) => {
      const map = new mapboxgl.Map({
        container: mapContainer.current,
        style: "mapbox://styles/jrhemann/ck8v4sksk1dts1irtxthkfpvk",
        center: [0, 0],
        zoom: 0.6,
      });

      map.on("load", () => {
        setMap(map);
        map.resize();
      });
    };

    if (!map) initializeMap({ setMap, mapContainer });
  }, [map]);

  return <div ref={(el) => (mapContainer.current = el)} style={styles} />;
};

export default MapBox;
