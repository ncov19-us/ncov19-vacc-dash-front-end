import React, { useEffect, useState, useContext } from "react";
import moment from "moment";

import VaccineStat from "../components/VaccineStat";

import { filter } from "../components/Filter";
import { TableContext } from "../utils/TableContext/TableState";

import "./pages.scss";
import "semantic-ui-css/semantic.min.css";

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
	const { table, trials } = useContext(TableContext);

	const [time, setTime] = useState("");
	const data = trials.trials;

	console.log("data", data);

	console.log(filter("phase 4", "phase", data));
	useEffect(() => {
		const time = new Date();
		setTime(time);
	}, []);

	return (
		<div className="vacine-dash-header">
			<div className="title">
				<h1>{table && table.country} Dashboard</h1>
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
