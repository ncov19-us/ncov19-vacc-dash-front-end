import React, { useEffect, useState } from "react";
import moment from "moment";

import VaccineStat from "../components/VaccineStat";

import { filter } from "../components/Filter";

import "./pages.scss";

/*
Used Moment to get format date that we get using new Date
using useEffect so that everytime the page renders you get a new date current date
for usage:
	moment docs: https://momentjs.com/docs/#/parsing/

Created cards that have a conditial statement from VaccineStat
send old={numberOfOldTrial} new={numberOfNewTrial}
	if the old number is greater than the old number it will return a green triangle
	if the new number is greater it will return a red return 
	if the number number is the same it will return nothing 
*/
export default function DashTopper() {
	const [time, setTime] = useState("");
	const data = {
		1: {
			Sponsors: "BioNTech SE and Pfizer Inc.",
			Country: "USA",
			Drug: "BNT162",
			Phase: "Preclinical",
			Type: "Vaccine",
		},
		2: {
			Sponsors: "Gilead Sciences Inc.",
			Country: "USA",
			Drug: "remdesivir",
			Phase: "Phase 2",
			Type: "Treatment",
		},
		3: {
			Sponsors: "GlaxoSmithKline",
			Country: "USA",
			Drug: "AS03 Adjuvant System",
			Phase: "None",
			Type: "Adjuvant platform for vaccines",
		},
		4: {
			Sponsors: "Heat Biologics Inc.",
			Country: "USA",
			Drug: "None",
			Phase: "Preclinical",
			Type: "Vaccine",
		},
		5: {
			Sponsors: "Inovio Pharmaceuticals Inc.",
			Country: "USA",
			Drug: "INO-4800",
			Phase: "Preclinical",
			Type: "DNA-based vaccine",
		},
	};
	useEffect(() => {
		const time = new Date();
		setTime(time);

		console.log("soreted", filter("Preclinical", "Phase", data));
	}, []);

	return (
		<div className="vacine-dash-header">
			<div className="title">
				<h1>Dashboard</h1>
			</div>
			<div className="date">
				<p className="day">{moment(`${time}`).format("dddd")}</p>
				<p className="format">
					{` •  ${moment(`${time}`).format("LL")}`}
				</p>
			</div>
			<div className="cards">
				<div className="card">
					<div className="stats">
						<h3>Total Vaccine trials</h3>
						<VaccineStat old={9} newStat={6} />
					</div>
					<p>29</p>
				</div>
				<div className="card">
					<div className="stats">
						<h3>Total Treatment trials</h3>
						<VaccineStat old={3} newStat={6} />
					</div>
					<p>59</p>
				</div>
				<div className="card">
					<div className="stats">
						<h3>Somethings else</h3>
						<VaccineStat old={6} newStat={6} />
					</div>
					<p>29</p>
				</div>
			</div>
		</div>
	);
}
