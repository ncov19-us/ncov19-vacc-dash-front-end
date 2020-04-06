import React, { useContext, useState, useEffect } from "react";

import { TableContext } from "../utils/TableContext/TableState";

import Table from "./Table";
import PageBar from "../components/PageBar";

import "./pages.scss";

/*
GOAL:
	* Display current country's data on table
	 
*/
function VaccineTable() {
	const { getTable, getTrials, trials, isLoading, count } = useContext(
		TableContext
	);
	const [apiUrl, setApiUrl] = useState("api/trials?limit=8&page=1");

	useEffect(() => {
		getTrials(apiUrl);
	}, [apiUrl]);
	return (
		<div className="trial-padding">
			{/* {isLoading && (
				<div className="ui inverted segment">
					<div className="ui active inverted loader" />
					<br />
					<br />
					<br />
				</div>
			)} */}
			{trials.length > 0 ? (
				<div>
					<Table data={trials} />
					<PageBar count={count} setUrl={setApiUrl} />
				</div>
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
