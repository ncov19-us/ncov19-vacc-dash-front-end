import React, { useContext, useReducer, useEffect } from "react";
import DashTopper from "./DashTopper";
import VaccineTable from "./VaccineTable";
import WorldMap from "../components/WorldMap";

import { TableContext } from "../utils/TableContext/TableState";
import { initialState, filterReducer } from "../utils/filterReducer";

function Main() {
	const { getMap, getDashCardsGlobal, getTableGlobal } = useContext(
		TableContext
	);
	useEffect(() => {
		getMap(); // give map values,
		getDashCardsGlobal(); // populate global  cards,
		getTableGlobal(); // populate global table ,
	}, []);

	const [filterInfo, dispatch] = useReducer(filterReducer, initialState);

	return (
		<>
			<main className="ui centered grid">
				<div className="column main" style={{ marginTop: "5px" }}>
					<div className="ui stackable grid">
						<div className="two column row content">
							<div className="sixteen wide tablet eight wide computer column">
								<DashTopper dispatch={dispatch} />
								<VaccineTable
									filterInfo={filterInfo}
									dispatch={dispatch}
								/>
							</div>
							<div className="map-wrapper">
								<WorldMap />
							</div>
						</div>
					</div>
				</div>
			</main>
		</>
	);
}

export default Main;
