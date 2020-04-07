import React, { useContext, useEffect, useState } from "react";
import { ResponsiveChoropleth } from "@nivo/geo";

import { TableContext } from "../utils/TableContext/TableState";
import { features } from "../data/features.json";

import axios from "axios";

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

const WorldMap = ({ setSelectedCountry, dispatch }) => {
  const [data, setData] = useState([]);
  const { mapFilterDashCards, mapFilterByCountryTrials } = useContext(
    TableContext
  );

  useEffect(() => {
    axios
      .get("https://covid19-vacc-be.herokuapp.com/api/map")
      .then((response) => {
        setData(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const setCountry = (e) => {
    if (e.data) {
      mapFilterDashCards(e.properties.name); //populate dash cards
      mapFilterByCountryTrials(e.properties.name); //populate table

      setSelectedCountry(e.properties.name);

      dispatch({ type: "CHANGE_COUNTRY", payload: e.properties.name });
    }
  };

  return (
    <div style={{ height: "700px" }}>
      <ResponsiveChoropleth
        data={data}
        features={features}
        margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
        colors="YlOrRd"
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
        legends={[
          {
            // anchor: "top-left",
            // direction: "column",
            // justify: false,
            // translateX: 30,
            // translateY: 300,
            // itemsSpacing: 0,
            // itemWidth: 60,
            // itemHeight: 18,
            // itemDirection: "left-to-right",
            // itemTextColor: "#FFFFFF",
            // itemOpacity: 0.85,
            // symbolSize: 20,
            // symbolShape: "square",

anchor: 'bottom',
direction: 'row',
justify: true,
translateX: 7,
translateY: -24,
itemsSpacing: 0,
itemWidth: 62,
itemHeight: 10,
itemDirection: 'left-to-right',
itemTextColor: '#FFFFFF',
itemOpacity: 0.85,
symbolSize: 11,
symbolShape: "square",



            effects: [
              {
                on: "hover",
                style: {
                  itemTextColor: "#FFFFFF",
                  itemOpacity: 1,
                },
              },
            ],
          },
        ]}
        onClick={(feature) => setCountry(feature)}
      />
    </div>
  );
};

export default WorldMap;
