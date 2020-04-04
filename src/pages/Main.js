import React, { useContext } from "react";
import DashTopper from "./DashTopper";
import VaccineTable from "./VaccineTable";
import WorldMap from "../components/WorldMap";

import { TableContext } from "../utils/TableContext/TableState";

function Main() {
	const { filter } = useContext(TableContext);

	return (
		<>
			<main className="ui centered grid">
				<div
					className="twelve wide column main"
					style={{ marginTop: "100px" }}
				>
					<div className="ui stackable grid">
						<div className="two column row content">
							<div className="sixteen wide tablet eight wide computer column">
								<DashTopper />
								<VaccineTable />
							</div>
							<div className="sixteen wide tablet eight wide computer column">
								<div className="map-wrapper">
									<h1 style={{ color: "white" }}>
										{filter && filter.label} Dashboard
									</h1>
									<WorldMap />
								</div>
							</div>
						</div>
					</div>
				</div>
			</main>
		</>
	);
}

export default Main;
