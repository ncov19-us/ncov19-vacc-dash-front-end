import React, { useState, useContext, useEffect } from "react";

import { TableContext } from "../utils/TableContext/TableState";

import Table from "./Table";
import TrialMenu from "../components/TrialMenu";
import treatments from "../data/treatments";

import "./pages.scss";

function VaccineTable() {
	const { getTable, getTrials } = useContext(TableContext);
	useEffect(async () => {
		getTable();
		getTrials();
	}, []);

	return (
		<div className="trial-padding">
			<TrialMenu />
			{/* {data={tableData}} */}
			{/* <Table /> */}
		</div>
	);
}

export default VaccineTable;
