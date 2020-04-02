import React from "react";
import { Link } from "react-router-dom";
// burger for menu
import burger from "../assets/menu.png";

import { Modal } from "semantic-ui-react";

import "./pages.scss";

/*
menubar COMPONENT 
Styling is in pages.scss 
	unable to see body content 
	for menubar hover 
		.menubar position and top to get menubar to hover 
		
Needed inline styling for Modal 
*/

const aTags = { color: "white" };

export default function Header() {
	return (
		<div className="menubar">
			<div className="tittle">
				<Link to="/">
					<h1>COVID19 US Vaccine</h1>
				</Link>
			</div>

			<div className="mobile">
				<Modal trigger={<img src={burger} alt="menu-trigger" />} basic>
					<Modal.Content>
						<div
							style={{
								display: "flex",
								flexDirection: "column",
								textAlign: "center",
								fontSize: "1.5rem",
							}}
						>
							<Link to="/about" style={aTags}>
								About
							</Link>
							<a
								href="https://www.cdc.gov/coronavirus/2019-ncov/index.html"
								alt="cdc-website"
								style={aTags}
							>
								CDC Resources
							</a>
							<a
								href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019"
								alt="world-health-organization"
								style={aTags}
							>
								WHO Resources
							</a>
						</div>
					</Modal.Content>
				</Modal>
			</div>
			<div className="menubar-links">
				<Link to="/about">About</Link>
				<a
					href="https://www.cdc.gov/coronavirus/2019-ncov/index.html"
					alt="cdc-website"
				>
					CDC Resources
				</a>
				<a
					href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019"
					alt="world-health-organization"
				>
					WHO Resources
				</a>
			</div>
		</div>
	);
}
