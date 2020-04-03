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

	const tableData = [
		{
			Sponsors: "BioNTech SE and Pfizer Inc.",
			Country: "USA",
			Drug: "BNT162",
			Phase: "Preclinical",
			Type: "Vaccine",
		},
		{
			Sponsors: "Gilead Sciences Inc.",
			Country: "China",
			Drug: "remdesivir",
			Phase: "Phase 2",
			Type: "Treatment",
		},
		{
			Sponsors: "GlaxoSmithKline",
			Country: "USA",
			Drug: "AS03 Adjuvant System",
			Phase: "None",
			Type: "Adjuvant platform for vaccines",
		},
		{
			Sponsors: "Heat Biologics Inc.",
			Country: "USA",
			Drug: "None",
			Phase: "Preclinical",
			Type: "Vaccine",
		},
		{
			Sponsors: "Inovio Pharmaceuticals Inc.",
			Country: "USA",
			Drug: "INO-4800",
			Phase: "Preclinical",
			Type: "DNA-based vaccine",
		},
	];

	return (
		<div>
			<TrialMenu />
			<Table data={tableData} />
		</div>
	);
}

export default VaccineTable;
