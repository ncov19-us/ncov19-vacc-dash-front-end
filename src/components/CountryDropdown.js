import React, { useState, useEffect, useContext } from "react";
import { TableContext } from "../utils/TableContext/TableState";

import { Dropdown } from "semantic-ui-react";

export default function CountryDropdown() {
	const { map, getDashCardsByCountry, getTrialsByCountry } = useContext(
		TableContext
	);
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
		getDashCardsByCountry(value.toLowerCase());
		getTrialsByCountry(value.toLowerCase());
	};

	return (
		<Dropdown
			placeholder="Choose a Country"
			options={dropdown}
			fluid
			selection
			onChange={handleChange}
		/>
	);
}
