import React, { useState, useEffect, useRef } from "react";
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
		mapboxgl.accessToken = process.env.REACT_APP_ACCESS_TOKEN;

		const initializeMap = ({ setMap, mapContainer }) => {
			const map = new mapboxgl.Map({
				container: mapContainer.current,
				style: "mapbox://styles/jrhemann/ck8v4sksk1dts1irtxthkfpvk",
				center: [0, 0],
				zoom: 5,
			});
			map.on("load", () => {
				setMap(map);
				map.resize();
			});
			if (!map) initializeMap({ setMap, mapContainer });
		};
	}, [map]);

	return <div ref={(el) => (mapContainer.current = el)} style={styles} />;
};

{
	/* <div>
      Longitude: {this.state.lng} | Latitude: {this.state.lat} | Zoom:{" "}
      {this.state.zoom}
    </div>
  </div> */
}
{
	/* <div ref={(el) => (this.mapContainer = el)} className="mapContainer" /> */
}
// </div>
export default MapBox;
