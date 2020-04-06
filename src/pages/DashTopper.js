import React, { useEffect, useState, useContext } from "react";
import { Menu } from "semantic-ui-react";

import moment from "moment";

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
	const {
		table,
		getTrialByCountryAndType,
		mapFilterDashCards,
		populateWorld,
	} = useContext(TableContext);
	const [active, setActive] = useState("all");
	const [numPhase, setNumPhase] = useState([]);
	const [time, setTime] = useState("");

	useEffect(() => {
		const time = new Date();
		setTime(time);

		console.log("table", table);
		populateWorld();

		table.length > 0 && active === "all"
			? setNumPhase(getPhase(["vaccines", "treatments", "alternatives"]))
			: setNumPhase(getPhase([`${active}`]));
	}, []);
	/*
	function that sums all the phases together 
	where 
		1-2 early
		3-4 mid 
		5 complete
	
	USAGE: 
		accepts an array parameter of what to is going to be sorted
	*/
	function getPhase(type) {
		// keep track of sum phases
		const sumPhase = {
			early: 0,
			mid: 0,
			complete: 0,
		};
		console.log("table", table);
		for (let i = 0; i < type.length; i++) {
			sumPhase.early = table[`${type[i]}`][0] + sumPhase.early;
			sumPhase.early = table[`${type[i]}`][1] + sumPhase.early;
			sumPhase.mid = table[`${type[i]}`][2] + sumPhase.mid;
			sumPhase.mid = table[`${type[i]}`][3] + sumPhase.mid;
			sumPhase.complete = table[`${type[i]}`][4] + sumPhase.complete;
		}
		return sumPhase;
	}

	// Semantic calls onClick with event, object containing all props
	const handleClick = (evt, { name }) => {
		setActive(name);
		const countryName = table.countries;
		populateWorld();

		name === "all"
			? mapFilterDashCards(countryName)
			: getTrialByCountryAndType(name, countryName);

		// active === "all"
		// 	? setNumPhase(getPhase(["vaccines", "treatments", "alternatives"]))
		// 	: setNumPhase(getPhase([`${active}`]));
	};

	return (
		<div className="vacine-dash-header">
			<div className="title">
				<h1>{table && table.countries} Dashboard </h1>
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
			<div className="ui-left-aligned-container">
				<h3 className="trials">COVID-19 Trials</h3>
				<Menu compact pointing secondary inverted>
					<Menu.Item
						name="all"
						active={active === "all"}
						onClick={handleClick}
					>
						Trials
					</Menu.Item>
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
