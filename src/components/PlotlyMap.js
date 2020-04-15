import React, { useState, useEffect } from "react";
// import Plotly from "plotly.js-geo-dist";
import Plotly from "plotly.js-mapbox-dist";
import createPlotlyComponent from "react-plotly.js/factory";
import axios from "axios";
import mapShapes from '../data/features.json';

const Plot = createPlotlyComponent(Plotly);

// import data from '../data/alcohol.json';

const PlotlyMap = ({ setSelectedCountry, dispatch }) => {
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

  const clickCountry = (data) => {
    const { points } = data;
    const [point] = points;
    setSelectedCountry(point.location);
    dispatch({ type: "CHANGE_COUNTRY", payload: point.location });
    console.log(data.points);
  };

  return (
    <Plot
      data={[
        {
          type: "choroplethmapbox",
          locationmode: "country names",
          locations: data.map((row) => row.id),
          geojson: mapShapes,
          z: data.map((row) => row.value),
          zauto: false,
          zmin: 0,
          zmax: 20,
          text: data.map((row) => row.id),
          autocolorscale: false,
          colorscale: [
            ["0.0", "#b3e5ff"],
            ["0.25", "#80d8ff"],
            ["0.5", "#40c4ff"],
            ["0.75", "#00b0ff"],
            ["1.0", "#0091ea"],
          ],
        },
      ]}
      layout={{
        width: 640,
        height: 480,
        title: "A Fancy Map",
        mapbox: {
          center: { lon: -74, lat: 43 },
          zoom: 3.5
        }
      }}
      config={{
        mapboxAccessToken: 'pk.eyJ1IjoiaHVuZ3J5cGllMDAiLCJhIjoiY2s4bTZwMzMyMGJ3ZjNycGVuajVtemVjbSJ9.pfXDUCvJrNhGhgCfC47tng'
      }}
      onClick={clickCountry}
    />
  );
};

export default PlotlyMap;
