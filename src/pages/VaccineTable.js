import React, { useContext, useState, useEffect } from "react";

import { TableContext } from "../utils/TableContext/TableState";

import Table from "./Table";
import TrialMenu from "../components/TrialMenu";
import PageBar from "../components/PageBar";

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
	// // console.log("trials", trials);
	// return (
	// 	<div className="trial-padding">
	// 	</div>
	// );
	const { getTrials, trials, isLoading, count } = useContext(TableContext);

	const [apiUrl, setApiUrl] = useState("api/trials?limit=15&page=1");

	useEffect(() => {
		getTrials(apiUrl);
	}, [apiUrl]);

	return (
		<div className="trial-padding">
			<TrialMenu />
			{isLoading && (
				<div className="ui inverted segment">
					<div className="ui active inverted loader" />
					<br />
					<br />
					<br />
				</div>
			)}
			{!isLoading && trials && (
				<>
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

					{/* <Table data={trials} /> */}
					<PageBar count={count} setUrl={setApiUrl} />
				</>
			)}
		</div>
	);
}

export default VaccineTable;
