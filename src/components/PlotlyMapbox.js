import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Plotly from 'plotly.js-mapbox-dist';
import createPlotlyComponent from 'react-plotly.js/factory';
import { features } from '../data/features.json';

const Plot = createPlotlyComponent(Plotly);

const PlotlyMapbox = () => {
  const [data, setData] = useState([]);
  
  useEffect(() => {
    axios
      // https://covid19-vacc-be.herokuapp.com/api/map
      .get("http://localhost:5000/api/map")
      .then((response) => {
        setData(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Plot
      data={[
        {type: "scattermapbox", lon: [-86], lat: [34], marker: {size: 20, color: 'purple'}},
        {
          
          type: 'choroplethmapbox',
          locationmode: "country names",
          locations: data.map((row) => row.id),
          z: data.map((row) => row.value),
          // geojson: features
          coloraxis: 'coloraxis',
          geojson: {
            type: 'Feature',
            id: 'AL',
            geometry: {
              type: 'Polygon',
              coordinates: [
                [
                  [-86, 35],
                  [-85, 34],
                  [-85, 32],
                  [-85, 32],
                  [-85, 32],
                  [-85, 32],
                  [-85, 31],
                  [-86, 31],
                  [-87, 31],
                  [-87, 31],
                  [-88, 30],
                  [-88, 30],
                  [-88, 30],
                  [-88, 30],
                  [-88, 34],
                  [-88, 35],
                ],
              ],
            },
          },
        },
      ]}
      layout={{
        width: 600,
        height: 400,
        mapbox: { style: 'streets', center: { lon: -86, lat: 33 }, zoom: 5 },
        marker: { line: { color: 'blue' } },
        coloraxis: { showscale: false, colorscale: 'Viridis' },
      }}
      config={{
        mapboxAccessToken:
          'pk.eyJ1IjoiaHVuZ3J5cGllMDAiLCJhIjoiY2s4bTZwMzMyMGJ3ZjNycGVuajVtemVjbSJ9.pfXDUCvJrNhGhgCfC47tng',
      }}
      onClick={() => console.log('hi')}
    />
  );
};

export default PlotlyMapbox;