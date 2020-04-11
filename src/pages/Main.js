import React, { useContext, useState, useReducer } from "react";
import DashTopper from "./DashTopper";
import VaccineTable from "./VaccineTable";
import WorldMap from "../components/WorldMap";
import CountryDropdown from "../components/CountryDropdown";

import { TableContext } from "../utils/TableContext/TableState";
import { initialState, filterReducer } from "../utils/filterReducer";

function Main() {
	const { filter } = useContext(TableContext);

	const [selectedCountry, setSelectedCountry] = useState("Global");

	const [filterInfo, dispatch] = useReducer(filterReducer, initialState);

	return (
		<>
			<main className="ui centered grid">
				<div className="column main" style={{ marginTop: "5px" }}>
					<div className="ui stackable grid">
						<div className="two column row content">
							<div className="sixteen wide tablet eight wide computer column">
								<DashTopper
									selectedCountry={selectedCountry}
									setSelectedCountry={setSelectedCountry}
									dispatch={dispatch}
								/>
								<VaccineTable
									filterInfo={filterInfo}
									dispatch={dispatch}
								/>
							</div>
							<div className="sixteen wide tablet eight wide computer column">
								<div className="dropdown-wrapper">
									<CountryDropdown
										setSelectedCountry={setSelectedCountry}
									/>
								</div>
								<div className="map-wrapper">
									<WorldMap
										setSelectedCountry={setSelectedCountry}
										dispatch={dispatch}
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</main>
		</>
	);
}

export default Main;
