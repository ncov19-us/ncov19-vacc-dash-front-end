import React, { useState, useEffect } from "react";
import { Menu } from "semantic-ui-react";

import Today from "../components/Today";
import { client } from "../utils/axiosWithAuth";
// FIXME: Move this to stylesheets.
import "semantic-ui-css/semantic.min.css";

function DashTopper({ selectedCountry, setSelectedCountry, dispatch }) {
	const [numPhase, setNumPhase] = useState({
		early: null,
		mid: null,
		complete: null,
	});

	const [totals, setTotals] = useState({
		countries: null,
		vaccines: [],
		treatments: [],
		alternatives: [],
	});

	const [active, setActive] = useState("all");

	useEffect(() => {
		let apiUrl = "/api/totals";

		async function fetchTotals() {
			if (selectedCountry !== "Global") {
				apiUrl = `/api/totals?countries=${selectedCountry.toLowerCase()}`;
			}

			const { data } = await client().get(apiUrl);

			setTotals(data);
		}

		fetchTotals();
	}, [selectedCountry]);

	useEffect(() => {
		if (totals.countries) {
			setNumPhase(
				active === "all"
					? calcPhases(totals, [
							"vaccines",
							"treatments",
							"alternatives",
					  ])
					: calcPhases(totals, [`${active}`])
			);
		}
	}, [totals, active]);

	function calcPhases(totals, types) {
		let early = 0;
		let mid = 0;
		let complete = 0;

		types.forEach((type) => {
			const trialType = totals[type];

			early += trialType[0];
			early += trialType[1];
			mid += trialType[2];
			mid += trialType[3];
			complete += trialType[4];
		});

		return { early, mid, complete };
	}

	const handleClick = (evt, { name }) => {
		setActive(name);

		dispatch({ type: "CHANGE_TYPE", payload: name });
	};

	const returnGlobal = (evt) => {
		evt.preventDefault();

		setSelectedCountry("Global");
		dispatch({ type: "CHANGE_COUNTRY", payload: "global" });
	};

	return (
		<div className="vacine-dash-header">
			<div className="title">
				<h1>{selectedCountry} Dashboard</h1>
				{selectedCountry !== "Global" && (
					<p onClick={returnGlobal} className="return-to-global">
						Return to Global View
					</p>
				)}
			</div>
			<div className="today-n-global">
				<Today />
			</div>
			<div className="cards">
				<div className="card">
					<div className="stats">
						<h4>Early Phase Trials</h4>
					</div>
					<p>{numPhase && numPhase.early}</p>
				</div>
				<div className="card">
					<div className="stats">
						<h4>Mid Phase Trials</h4>
					</div>
					<p>{numPhase && numPhase.mid}</p>
				</div>
				<div className="card">
					<div className="stats">
						<h4>Completed Trials</h4>
					</div>
					<p>{numPhase && numPhase.complete}</p>
				</div>
			</div>
			<div>
				<h3 className="trials" style={{ marginTop: "1.5rem" }}>
					COVID-19 Trials
				</h3>
				<Menu
					compact
					pointing
					secondary
					inverted
					style={{ width: "100%" }}
				>
					<Menu.Item
						name="all"
						active={active === "all"}
						onClick={handleClick}
					></Menu.Item>
					<Menu.Item
						name="vaccines"
						active={active === "vaccines"}
						onClick={handleClick}
					>
						Vaccines
					</Menu.Item>
					<Menu.Item
						name="treatments"
						active={active === "treatments"}
						onClick={handleClick}
					>
						Treatments
					</Menu.Item>
					<Menu.Item
						name="alternatives"
						active={active === "alternatives"}
						onClick={handleClick}
					>
						Alternatives
					</Menu.Item>
				</Menu>
			</div>
		</div>
	);
}

export default DashTopper;
