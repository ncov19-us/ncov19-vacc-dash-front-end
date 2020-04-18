import React, { useContext, useEffect, useState } from "react";
import { ResponsiveChoropleth } from "@nivo/geo";
import { TableContext } from "../utils/TableContext/TableState";
import { features } from "../data/features.json";
/*
GOAL:
	* Use global in conjunction with the map 
	* Upon clicking a country on the map it filter name on dash board and map to display that country. 
	* And have that countries information filter in a table
	
USAGE: 
	- Onclick funtion that passes the contries data and use "mapFilter" function on Context to save the data to Global state
	- then use a filter function to display filtered data on table

RETURNS: 
	- Updated Global Country Name
	- Filtered Countries' data 
*/

const WorldMap = () => {
	const { map, fillTableByCountry, getDashCardsByCountry } = useContext(
		TableContext
	);
	const [data, setData] = useState([]);
	useEffect(() => {
		setData(
			map.map((key) => {
				return { id: key.country_codes, value: key.value };
			})
		);
	}, [map]);
	function setCountry(e) {
		map.forEach((c) => {
			if (c.country_codes === e.id)
				return (
					fillTableByCountry(c.id.toLowerCase()),
					getDashCardsByCountry(c.id.toLowerCase())
				);
		});
	}

	return (
		<div className="map-wrapper">
			<ResponsiveChoropleth
				data={data}
				features={features}
				margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
				colors="blues"
				domain={[0, 10]}
				unknownColor="#19202a"
				label="properties.name"
				valueFormat=".2s"
				projectionTranslation={[0.5, 0.5]}
				projectionRotation={[0, 0, 0]}
				enableGraticule={false}
				graticuleLineColor="#dddddd"
				borderWidth={0.7}
				borderColor="white"
				legengs={[
					{
						anchor: "bottom",
						direction: "row",
						justify: true,
						translateX: 7,
						translateY: -24,
						itemsSpacing: 0,
						itemWidth: 62,
						itemHeight: 10,
						itemDirection: "left-to-right",
						itemTextColor: "#FFFFFF",
						itemOpacity: 0.85,
						symbolSize: 11,
						symbolShape: "square",
						effects: [
							{
								on: "hover",
								style: {
									itemTextColor: "#ffffff",
									itemOpacity: 1,
								},
							},
						],
					},
				]}
				onClick={(e) => setCountry(e)}
			/>
		</div>
	);
};

export default WorldMap;
