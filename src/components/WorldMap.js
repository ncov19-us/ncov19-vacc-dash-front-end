import React, { useContext } from "react";
import { ResponsiveChoropleth } from "@nivo/geo";

import { TableContext } from "../utils/TableContext/TableState";
import { features } from "../data/features.json";
import data from "../data/map-data.json";

import { filter } from "../components/Filter";

const WorldMap = () => {
	const { mapFilter, filterByOnClick, trials } = useContext(TableContext);

	const setCountry = e => {
		mapFilter(e);
		const sorting = filter("country", e.label, trials.trials);
		filterByOnClick(sorting);
	};

	return (
		<div style={{ height: "600px" }}>
			<ResponsiveChoropleth
				data={data}
				features={features}
				margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
				colors="RdGy"
				domain={[0, 1000000]}
				unknownColor="#666666"
				label="properties.name"
				valueFormat=".2s"
				projectionTranslation={[0.5, 0.5]}
				projectionRotation={[0, 0, 0]}
				enableGraticule={false}
				graticuleLineColor="#dddddd"
				borderWidth={0.5}
				borderColor="#c0c0c0"
				// tooltip={function(e) {}}
				legends={[
					{
						anchor: "top-left",
						direction: "row",
						justify: false,
						translateX: 37,
						translateY: 40,
						itemsSpacing: 0,
						itemWidth: 94,
						itemHeight: 18,
						itemDirection: "left-to-right",
						itemTextColor: "#444444",
						itemOpacity: 0.85,
						symbolSize: 40,
						symbolShape: "square",
						effects: [
							{
								on: "hover",
								style: {
									itemTextColor: "#000000",
									itemOpacity: 1,
								},
							},
						],
					},
				]}
				onClick={e => setCountry(e)}
			/>
		</div>
	);
};

export default WorldMap;
