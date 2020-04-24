import React, { useContext, useEffect } from "react";

import { TableContext } from "../utils/TableContext/TableState";

import Table from "./Table";
import PageBar from "../components/PageBar";

/*
GOAL:
	* Display current country's data on table
*/

function VaccineTable({ filterInfo, dispatch }) {
	const { getTrials, table, isLoading, count, cards } = useContext(TableContext);

	const {countries} = cards
	const {page, type} = filterInfo;

	useEffect(() => {
		let apiUrl = `api/trials?limit=7&page=${filterInfo.page}`;

		if (countries && countries !== "world") {
			apiUrl += `&countries=${countries}`;
		}

		if (type && type !== "all") {
			apiUrl += `&type=${type}`;
		}

		getTrials(apiUrl);
	}, [filterInfo]);

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
