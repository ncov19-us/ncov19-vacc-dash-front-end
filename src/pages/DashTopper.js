import React, { useState, useEffect, useContext } from "react";
import { Menu } from "semantic-ui-react";
import { TableContext } from "../utils/TableContext/TableState";

import Today from "../components/Today";
import CountryDropdown from "../components/CountryDropdown";
import TrialCountCard from "./TrialCountCard";

// FIXME: Move this to stylesheets.
import "semantic-ui-css/semantic.min.css";

function DashTopper({ filterInfo, dispatch }) {
	const { cards } = useContext(TableContext);

	const { type } = filterInfo;
	const { countries } = cards;

	const [numPhase, setNumPhase] = useState({
		early: null,
		mid: null,
		complete: null,
	});

	useEffect(() => {
		if (countries && type === "all") {
			setNumPhase(calcPhases(cards, [`vaccines`, "treatments", "alternatives"]));
			} else if (countries && type !== "all") {
			setNumPhase(calcPhases(cards, [`${type}`]));
		}
	}, [cards, countries, type]);

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

		const total = early + mid + complete;
		return { early, mid, complete, total };
	}

	const handleClick = (evt, { name }) => {
		dispatch({ type: "CHANGE_TYPE", payload: name });
	};

	const returnGlobal = () => {
		dispatch({ type: "CHANGE_COUNTRY", payload: "world" });
		dispatch({ type: "CHANGE_TYPE", payload: "all" });
	};

	return (
		<div className="vacine-dash-header">
			<div className="title">
				<h1 style={{ fontSize: "2rem", color: "white" }}>
					{countries !== "world" && countries
						? countries.replace(
								// case first letter of every word
								/\w\S*/g,
								(c) => c.charAt(0).toUpperCase() + c.substr(1)
						  )
						: "World"}
					<CountryDropdown type={type} dispatch={dispatch} />
				</h1>
				<span
					onClick={returnGlobal}
					style={
						countries === "world"
							? { display: "none" }
							: {
									display: "block",
									color: "#f4b000",
									cursor: "pointer",
							  }
					}
				>
					&#x25C1; Return to Global View
				</span>
			</div>
			<div className="today">
				<Today />
			</div>

			<div className="cards">
				<TrialCountCard title="Early Phase" count={numPhase.early} />
				<TrialCountCard title="Mid Phase" count={numPhase.mid} />
				<TrialCountCard title="Completed" count={numPhase.complete} />
				<TrialCountCard title="Total" count={numPhase.total} />
			</div>

			<div>
				<h2 className="trials" style={{ marginTop: "1.5rem" }}>
					COVID-19 Trials
				</h2>
				<Menu
					compact
					pointing
					secondary
					inverted
					style={{ width: "100%" }}
				>
					<Menu.Item
						name="all"
						active={type === "all"}
						onClick={handleClick}
					></Menu.Item>
					<Menu.Item
						name="vaccines"
						active={type === "vaccines"}
						onClick={handleClick}
					>
						Vaccines
					</Menu.Item>
					<Menu.Item
						name="treatments"
						active={type === "treatments"}
						onClick={handleClick}
					>
						Treatments
					</Menu.Item>
					<Menu.Item
						name="alternatives"
						active={type === "alternatives"}
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
