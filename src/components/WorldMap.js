import React from "react";
import { ResponsiveChoropleth } from "@nivo/geo";
import { features } from "../data/features";
import styled from "styled-components";
// make sure parent container has a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.

const MapContainer = styled.div`
  height: 900px;
`;

const WorldMap = ({ data, country, setCountry }) => {
  const getCountry = (feature) => {
    if (feature.data) {
      console.dir(feature);
      setCountry(feature.properties.name);
    }
  };

  return (
    <MapContainer>
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
        onClick={(feature) => getCountry(feature)}
      />
    </MapContainer>
  );
};

export default WorldMap;
