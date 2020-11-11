import React, { useContext, useReducer, useEffect } from "react";
import DashTopper from "./DashTopper";
import VaccineTable from "./VaccineTable";

import { TableContext } from "../utils/TableContext/TableState";
import { initialState, filterReducer } from "../utils/filterReducer";

function Main() {
	const { getMap } = useContext(TableContext);

	useEffect(() => {
		getMap(); // give map values,
		// table data is queried in a useEffect in <VaccineTable />
	}, []);

	const [filterInfo, dispatch] = useReducer(filterReducer, initialState);

	return (
		<div className="main">
			<DashTopper filterInfo={filterInfo} dispatch={dispatch} />
			<VaccineTable filterInfo={filterInfo} dispatch={dispatch} />
		</div>
	);
}

export default Main;
