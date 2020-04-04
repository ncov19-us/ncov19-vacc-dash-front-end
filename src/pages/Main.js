import React, { useContext, useState } from "react";
import DashTopper from "./DashTopper";
import VaccineTable from "./VaccineTable";
import WorldMap from "../components/WorldMap";
import data from "../data/map-data.json"
import { TableContext } from "../utils/TableContext/TableState";

function Main() {
	const { filter } = useContext(TableContext);
  console.log("filter", filter.label);
  
  const [filteredCountry, setFilteredCountry] = useState('Global');

	return (
		<>
			<main className="ui centered grid">
				<div
					className="column main"
					style={{ marginTop: "5px" }}
				>
					<div className="ui stackable grid">
						<div className="two column row content">
							<div className="sixteen wide tablet eight wide computer column">
								<DashTopper country={filteredCountry} />
								<VaccineTable country={filteredCountry} />
							</div>
							<div className="sixteen wide tablet eight wide computer column">
								<div className="map-wrapper">
									{/* {(() => {
										if (filter.length > 0) {
											return (
												<h1 style={{ color: "white" }}>
												{filter && filter.label} Dashboard
												</h1>
											);
										} else {
											return (
												<h1 style={{ color: "white" }}>
													{filter && filter.label}{" "}
													Dashboard
												</h1>
											);
										}
									})()} */}
									<WorldMap data={data} setCountry={setFilteredCountry}/>
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
