import React, { useState, useEffect, useContext } from "react";
import { TableContext } from "../utils/TableContext/TableState";

import { Dropdown } from "semantic-ui-react";

export default function CountryDropdown({ type, dispatch, countries }) {
  const { map } = useContext(TableContext);
  const [dropdown, setDropdown] = useState();

  useEffect(() => {
    setDropdown(
      map.map((data) => {
        return { key: data.id, text: data.id, value: data.id };
      })
    );
  }, [map]);

  // Semantic onChange called with SyntheticEvent and all props
  const handleChange = (evt, { value }) => {
    // dispatch country filter option
    dispatch({ type: "CHANGE_COUNTRY", payload: value });
  };

  return (
    <h1>
      {countries !== "world" && countries
        ? countries.replace(
            // case first letter of every word
            /\w\S*/g,
            (c) => c.charAt(0).toUpperCase() + c.substr(1)
          )
        : "World"}
      <Dropdown
        options={dropdown}
        onChange={handleChange}
        button
        labeled
        search
        icon="triangle down"
        text=" "
        style={{
          background: "white",
          color: "white",
          marginLeft: "8px",
          cursor: "pointer",
        }}
      />
    </h1>
  );
}
