import React, { useState, useEffect } from 'react';
import Plot from 'react-plotly.js';
import axios from 'axios';

// import data from '../data/alcohol.json';

const PlotlyMap = ({ setSelectedCountry, dispatch }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
    // https://covid19-vacc-be.herokuapp.com/api/map
      .get("http://localhost:5000/api/map")
      .then((response) => {
        console.log(response.data);
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
          type: 'choropleth',
          locationmode: 'ISO-3',
          locations: data.map((row) => row.id),
          z: data.map((row) => row.value),
          text: data.map((row) => row.id),
          autocolorscale: true,
        },
      ]}
      layout={{ width: 640, height: 480, title: 'A Fancy Map' }}
      onClick={clickCountry}
    />
  );
};

export default PlotlyMap;
