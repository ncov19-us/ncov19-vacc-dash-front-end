import React, { useState, useEffect } from 'react';
import Plotly from 'plotly.js-geo-dist';
import createPlotlyComponent from 'react-plotly.js/factory';
import axios from 'axios';

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
  
  // zauto:false,
  //              zmin: 0,
  //              zmax : 6000,

  return (
    <Plot
    data={[
      {
        type: 'choropleth',
        locationmode: 'country names',
        locations: data.map((row) => row.id),
        z: data.map((row) => row.value),
        zauto: false,
        zmin: 0,
        zmax: 10,
        text: data.map((row) => row.country_codes),
        autocolorscale: true,
        colorscale: [
          ['0.0', '#0091ea'],
          ['0.11111111111', '#0091ea'],
          ['0.22222222222', '#0091ea'],
          ['0.3333333333', '#00b0ff'],
          ['0.44444444444', '#00b0ff'],
          ['0.55555555556', '#40c4ff'],
          ['0.66666666667', '#40c4ff'],
          ['0.77777777778', '#80d8ff'],
          ['0.88888888889', '#80d8ff'],
          ['1.0', '#b3e5f']
        ],
      },
    ]}
    layout={{ width: 640, height: 480, title: 'A Fancy Map' }}
    onClick={clickCountry}
    />
    );
  };
  
  export default PlotlyMap;
  
  // ['#0091ea','#00b0ff','#40c4ff','#80d8ff','#b3e5f'] 