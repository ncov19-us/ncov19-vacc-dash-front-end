import React from "react";
import DashTopper from "./DashTopper";

import VaccineTable from "./VaccineTable";

function Main() {
	return (
		<>
			<DashTopper />
			<main className="container">
				<div className="columns is-centered is-gapless">
					<div className="column">
						<div className="columns is-9-desktop is-gapless main">
							<div className="column">
								<VaccineTable />
							</div>
						</div>
					</div>
				</div>
			</main>
		</>
	);
}

export default Main;
