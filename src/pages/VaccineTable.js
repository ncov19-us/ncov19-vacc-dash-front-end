import React, { useContext, useEffect } from "react";

import { TableContext } from "../utils/TableContext/TableState";

// import Table from "./Table";
import Tables from "./Tables";
import treatments from "../data/treatments";

import "./pages.scss";

/*
GOAL:
	* Display current country's data on table
	 
*/
function VaccineTable() {
	const { getTable, getTrials, trials } = useContext(TableContext);
	useEffect(() => {
		getTable();
		getTrials();
	}, []);
	// console.log("trials", trials);
	return (
		<div className="trial-padding">
			{trials.results.length > 0 ? (
				<Tables />
			) : (
				<p
					style={{
						color: "white",
						marginTop: "30px",
						marginLeft: "130px",
					}}
				>
					NO RECORD ON FILE
				</p>
			)}
		</div>
	);
}

export default VaccineTable;
