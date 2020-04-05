import React, { useContext, useState, useEffect } from "react";

import { TableContext } from "../utils/TableContext/TableState";

import Tables from "./Table";
import PageBar from "../components/PageBar";

import "./pages.scss";

/*
GOAL: 
	* Display current country's data on table
	 
*/
function VaccineTable() {
	const { getTrials, trials, isLoading, count } = useContext(TableContext);
	const [apiUrl, setApiUrl] = useState("api/trials?limit=15&page=1");

	useEffect(() => {
		getTrials(apiUrl);
	}, [apiUrl]);

	return (
		<div className="trial-padding">
			{trials.length > 0 ? (
				<div>
					<div className="table">
						<div className="title">
							<h4 className="sponsor">Sponsor</h4>
							<h4 className="country">Country</h4>
							{/* <h4>Drug</h4> */}
							<h4 className="phase">Phase</h4>
							<h4 className="type">Type</h4>
						</div>

						{trials &&
							trials.map((data) => (
								<div className="content" key={data.id}>
									<p className="sponsor">{data.sponsors}</p>
									<p className="country">{data.countries}</p>
									<p className="phase">{data.phase_num}</p>
									<p className="intervention_type">
										{data.intervention}
									</p>
								</div>
							))}
					</div>
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
