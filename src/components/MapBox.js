import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import axios from 'axios';
import data from '../data/features.json';

const styles = {
  width: '100vw',
  height: 'calc(100vh - 80px)',
  position: 'absolute',
};

const MapBox = ({ setSelectedCountry, dispatch }) => {
  const [map, setMap] = useState(null);
  const mapContainer = useRef(null);

  const [mapValues, setMapValues] = useState(null);


  useEffect(() => {
    mapboxgl.accessToken =
      'pk.eyJ1IjoianJoZW1hbm4iLCJhIjoiY2s4cXJmeGx3MDRvdzNsbjA0eHlzcHh5diJ9.62toL3HZx60UCky-naglQg';
    const initializeMap = ({ setMap, mapContainer }) => {
      const map = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/jrhemann/ck8v4sksk1dts1irtxthkfpvk',
        center: [0, 0],
        zoom: 0.6,
      });

      map.on('load', async () => {
        const res = await axios.get('http://localhost:5000/api/map');

        setMap(map);
        map.resize();

        let mapData = data.features; // from features.json

        res.data.forEach(countryWithValues => {
          const countryName = countryWithValues.id;
          const countryValue = countryWithValues.value;
          mapData.map(country => {
            if (country.properties.name === countryName) {
              country.properties.value = countryValue;
            }
          
            return country;
          });
        });

        // Add a source for the country polygons.
        map.addSource('countries', {
          type: 'geojson',
          data: data,
        });

        // Add a layer of the country polygons.
        map.addLayer({
          id: 'countries-layer',
          type: 'fill',
          source: 'countries',
          paint: {
            'fill-opacity': 0,
            'fill-color': [
              'step',
              ['get', 'value'],
              '#ffeda0',
              10,
              '#ffeda0',
              20,
              '#fed976',
              50,
              '#feb24c',
              100,
              '#fd8d3c',
              200,
              '#fc4e2a',
              500,
              '#e31a1c',
              750,
              'hsl(348, 100%, 37%)',
              1000,
              '#bd0026',
            ],
          },
        });

        // Filter by country names that have data.
        map.setFilter('countries-layer', [
          'in',
          ['get', 'name'],
          ['literal', res.data.map((country) => country.id)],
        ]);

        // When a click event occurs on a feature in the countries layer,
        map.on('click', 'countries-layer', (evt) => {
          const countryName = evt.features[0].properties.name;
          setSelectedCountry(countryName);
          dispatch({ type: 'CHANGE_COUNTRY', payload: countryName });
          console.log('clicked', evt.features[0]);
        });
      });
    };

    if (!map) initializeMap({ setMap, mapContainer });
  }, [map]);

  return <div ref={(el) => (mapContainer.current = el)} style={styles} />;
};

export default MapBox;
