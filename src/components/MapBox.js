import React, { useEffect, useRef, useState } from "react";
import ReactMapboxGl, { Layer, Feature } from "react-mapbox-gl";
// import { Map } from "@commodityvectors/react-mapbox-gl";

const MapBox = ({ children, ...props }) => {
	const Map = ReactMapboxGl({
		accessToken: process.env.REACT_APP_ACCESS_TOKEN,
	});

	return (
		<Map
			style="mapbox://styles/jrhemann/ck8v4sksk1dts1irtxthkfpvk"
			containerStyle={{
				height: "100%",
				width: "100%",
			}}
		></Map>
	);
};

export default MapBox;
