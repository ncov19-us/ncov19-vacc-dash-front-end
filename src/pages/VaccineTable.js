import React, { useState, useContext, useEffect } from "react";

import { TableContext } from "../utils/TableContext/TableState";

import Table from "./Table";
import TrialMenu from "../components/TrialMenu";
import treatments from "../data/treatments";

import "./pages.scss";

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
			{(() => {
				if (length > 0) {
					return <Table data={trials.trials} />;
				} else
					return (
						<p
							style={{
								color: "white",
								marginTop: "30px",
								marginLeft: "130px",
							}}
						>
							NO RECORD ON FILE
						</p>
					);
			})()}
		</div>
	);
}

export default VaccineTable;
