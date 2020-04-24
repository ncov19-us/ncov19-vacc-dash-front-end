import React, { useContext, useEffect } from "react";

import { TableContext } from "../utils/TableContext/TableState";

import Table from "./Table";
import PageBar from "../components/PageBar";

/*
GOAL:
	* Display current country's data on table
*/

function VaccineTable({ filterInfo, dispatch }) {
	const { getTrials, getDashCardsByCountryAndType, getDashCardsGlobal, table, isLoading, count } = useContext(TableContext);

	const { page, country, type } = filterInfo;

	useEffect(() => {
		let apiUrl = `api/trials?limit=7&page=${page}`;

		if (country !== "world") {
			apiUrl += `&countries=${country}`;
		}

		if (type !== "all") {
			apiUrl += `&type=${type}`;
		}

		// fetch totals based on filters
		if (country !== "world" || type !== "all") getDashCardsByCountryAndType(country, type);
		if (country === "world" && type === "all") getDashCardsGlobal();
		
		// fetch dynamically filtered table results
		getTrials(apiUrl);
	}, [filterInfo, country, type]); // when filter info changes, fetch data

	return (
		<div className="trial-padding">
			{isLoading && (
				<div className="ui inverted segment">
					<div className="ui active inverted loader" />
					<br />
					<br />
					<br />
				</div>
			)}
			{table.length > 0 ? (
				<div>
					<Table data={table} page={page} />
					{count > 7 && <PageBar count={count} page={page} dispatch={dispatch} />}
					
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
