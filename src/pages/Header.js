import React from "react";
import { Link } from "react-router-dom";
// burger for menu
import burger from "../assets/menu.png";

import { Modal } from "semantic-ui-react";

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
				<a href="https://ncov19.us" style={aTags}>
					<h1 className="subtitle-name">COVID-19 Tracker</h1>
				</a>
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
							<a href="#" alt="mobile-sms" style={aTags}>
								Get Mobile Updates
							</a>
							<Link
								to="/"
								style={aTags}
								className="menubar-right"
							>
								Vaccine Tracker
							</Link>
							<Link
								to="/about"
								style={aTags}
								className="menubar-right"
							>
								About
							</Link>
						</div>
					</Modal.Content>
				</Modal>
			</div>
			<div className="menubar-links">
				<a
					className="sms"
					href="https://ncov19-sms-bot-fe-prod.netlify.com/"
					alt="mobile-sms"
					id="sms"
				>
					Get Mobile Updates
				</a>
				<Link to="/">Vaccine Tracker</Link>
				<Link to="/about">About</Link>
			</div>
		</div>
	);
}
