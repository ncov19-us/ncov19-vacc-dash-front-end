import React, { useState, useContext } from "react";
import { Menu } from "semantic-ui-react";
import { TableContext } from "../utils/TableContext/TableState";
import { filter } from "../components/Filter";

function TrialMenu() {
	const { getTrials, filterByOnClick, trials } = useContext(TableContext);
	const [active, setActive] = useState("all");

	// Semantic calls onClick with event, object containing all props
	const handleClick = (evt, { name }) => {
		setActive(name);
		if (name === "vaccines") {
			const sorting = filter("vaccines", name, trials.trials);
			filterByOnClick(sorting);
		} else if (name === "treatments") {
			const sorting = filter("treatments", name, trials.trials);
			filterByOnClick(sorting);
		} else if (name === "alternatives") {
			const sorting = filter("alternatives", name, trials.trials);
			filterByOnClick(sorting);
		} else {
			getTrials();
		}
	};

	return (
		<div className="ui left aligned container">
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
	);
}

export default TrialMenu;
