import React, { useState, useEffect, useContext } from "react";
import { TableContext } from "../utils/TableContext/TableState";

import { Dropdown } from "semantic-ui-react";

export default function CountryDropdown({ type, dispatch }) {
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
		console.log("value", value);
		dispatch({ type: "CHANGE_COUNTRY", payload: value });
	};
	console.log("dropdown", dropdown);

	return (
		<Dropdown
			options={dropdown}
			onChange={handleChange}
			button
			labeled
			search
			icon="triangle down"
			text=" "
			style={{ background: "white", color: "white", marginLeft: "8px" }}
		/>
	);
}
