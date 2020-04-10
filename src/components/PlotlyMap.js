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
        locationmode: 'country names',
        locations: data.map((row) => row.id),
        z: data.map((row) => row.value),
        text: data.map((row) => row.id),
        autocolorscale: false,
        colorscale: [
          ['0.0', 'rgb(165,0,38)'],
          ['1.11111111111', 'rgb(215,48,39)'],
          ['2.22222222222', 'rgb(244,109,67)'],
          ['3.3333333333', 'rgb(253,174,97)'],
          ['4.44444444444', 'rgb(254,224,144)'],
          ['5.55555555556', 'rgb(224,243,248)'],
          ['6.66666666667', 'rgb(171,217,233)'],
          ['7.77777777778', 'rgb(116,173,209)'],
          ['8.88888888889', 'rgb(69,117,180)'],
          ['10.0', 'rgb(49,54,149)']
        ],
      },
    ]}
    layout={{ width: 640, height: 480, title: 'A Fancy Map' }}
    onClick={clickCountry}
    />
    );
  };
  
  export default PlotlyMap;
  