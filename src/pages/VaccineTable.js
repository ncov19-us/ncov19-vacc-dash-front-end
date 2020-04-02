import React, { useState } from "react";

import Table from "./Table";

import "./pages.scss";

function VaccineTable() {
	const [tableData] = useState([
		{
			Sponsors: "BioNTech SE and Pfizer Inc.",
			Country: "USA",
			Drug: "BNT162",
			Phase: "Preclinical",
			Type: "Vaccine",
		},
		{
			Sponsors: "Gilead Sciences Inc.",
			Country: "USA",
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
	]);

	return (
		<>
			<div className="trial-headers">
				<h2 className="trial">COVID-19 Trials</h2>
				<h2 className="trial">Vaccines</h2>
				<h2 className="trial">Treatments</h2>
				<h2 className="trial">Alternatives</h2>
			</div>
			<Table data={tableData} />
		</>
	);
}

export default VaccineTable;
