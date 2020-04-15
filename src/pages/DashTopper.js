import React, { useState, useEffect, useContext } from "react";
import { Menu } from "semantic-ui-react";
import { TableContext } from "../utils/TableContext/TableState";

import Today from "../components/Today";
import CountryDropdown from "../components/CountryDropdown";

// FIXME: Move this to stylesheets.
import "semantic-ui-css/semantic.min.css";

function DashTopper() {
	const {
		fillTableByTypeGlobal,
		cards,
		fillTableByCountryAndType,
		getTableGlobal,
		fillTableByCountry,
		getDashCardsByCountryAndType,
		getDashCardsByTypeGlobal,
		getDashCardsGlobal,
		getDashCardsByCountry,
	} = useContext(TableContext);
	const [active, setActive] = useState("all");
	const [numPhase, setNumPhase] = useState({
		early: null,
		mid: null,
		complete: null,
	});

	useEffect(() => {
		if (active === "all") {
			setNumPhase(
				calcPhases(cards, [`vaccines`, "treatments", "alternatives"])
			);
		} else {
			setNumPhase(calcPhases(cards, [`${active}`]));
		}
	}, [cards]);

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

		// check if we are in global
		if (cards.countries === "world") {
			// check if types are all or specific for tables
			name === "all" ? getTableGlobal() : fillTableByTypeGlobal(name);
			// and dash cards
			name === "all"
				? getDashCardsGlobal()
				: getDashCardsByTypeGlobal(name);
		} else {
			// check if country types are all or specific for tables
			name === "all"
				? fillTableByCountry(cards.countries)
				: fillTableByCountryAndType(cards.countries, name);
			// and for dash cards
			name === "all"
				? getDashCardsByCountry(cards.countries)
				: getDashCardsByCountryAndType(cards.countries, name);
		}
	};

	const returnGlobal = () => {
		getDashCardsGlobal();
		getTableGlobal();
	};

	return (
		<div className="vacine-dash-header">
			<div className="title">
				<h1 style={{ fontSize: "2rem" }}>
					{cards.countries === "world"
						? "World"
						: cards.countries.replace(
								// case first letter of every word
								/\w\S*/g,
								(c) => c.charAt(0).toUpperCase() + c.substr(1)
						  )}
				</h1>
				<div style={{ width: "15rem" }}>
					<CountryDropdown />
					<span
						onClick={returnGlobal}
						style={
							cards.countries === "world"
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
			</div>
			<div className="today">
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
