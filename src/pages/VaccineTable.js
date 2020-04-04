import React, { useState, useContext, useEffect } from "react";

import { TableContext } from "../utils/TableContext/TableState";

import Table from "./Table";
import TrialMenu from "../components/TrialMenu";
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
	const length = trials.trials.length;
	return (
		<div className="trial-padding">
			<TrialMenu />
			{length > 0 ? (
				<Table data={trials.trials} />
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
