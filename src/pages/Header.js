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
					<h1 className="title-name">COVID-19 <span className="title-unbold">Tracker</span></h1>
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
							<a href="#" alt="mobile-sms" style={aTags}>
								Get Mobile Updates
							</a>
							<Link to="/" style={aTags} className="menubar-right">
								Vaccine Tracker
							</Link>
							<Link to="/about" style={aTags} className="menubar-right">
								About
							</Link>
						</div>
					</Modal.Content>
				</Modal>
			</div>
			<div className="menubar-links">
				<a href="#" alt="mobile-sms" id="sms">
					Get Mobile Updates
				</a>
				<Link to="/">Vaccine Tracker</Link>
				<Link to="/about">About</Link>
			</div>
		</div>
	);
}
