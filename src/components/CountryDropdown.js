import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Dropdown } from 'semantic-ui-react';

const CountryDropdown = ({ setSelectedCountry }) => {
  const [countryOptions, setCountryOptions] = useState([]);
  const [selectedValue, setSelectedValue] = useState(null);

  useEffect(() => {
    axios.get('https://covid19-vacc-be.herokuapp.com/api/map').then((res) => {
      setCountryOptions(
        res.data.map((country) => {
          return {
            key: country.id,
            text: country.id,
            value: country.id,
          };
        })
      );
    });
  }, []);

  // Semantic onChange called with SyntheticEvent and all props
  const handleChange = (evt, { value }) => {
    setSelectedValue(value);
    setSelectedCountry('Thailand');
  };

  return (
    <Dropdown
      onChange={handleChange}
      options={countryOptions}
      placeholder="Choose a country"
      selection
      value={selectedValue}
      search
    />
  );
};

export default CountryDropdown;
