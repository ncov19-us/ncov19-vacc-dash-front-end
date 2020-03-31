import React, { useState } from "react";
import { Link } from "react-router-dom";
// burger for menu
import burger from "../assets/menu.png";

import { Modal } from "react-bulma-components";

import "./pages.scss";

/*
HEADER COMPONENT 
Styling is in pages.scss 
	unable to see body content 
	for header hover 
		.header position and top to get header to hover 
		
*/
function Header() {
	const [show, setShow] = useState(false);
	// function openMenu() {
	// 	// 	() => setShow(true);
	// }
	return (
		<div className="header">
			<div className="title">
				<h1>COVID19 US Vaccine</h1>
			</div>

			<div className="mobile" onClick={() => setShow(true)}>
				<Modal show={show} onClose={() => setShow(false)}></Modal>
				<img src={burger} alt="menu-trigger" />
			</div>
			<div className="header-links">
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

export default Header;
