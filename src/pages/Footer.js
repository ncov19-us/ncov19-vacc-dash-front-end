import React from "react";

// github icon'
import github from "../assets/github.svg";

import "./pages.scss";

export default function Footer() {
	return (
		<div className="footer">
			<div className="footer-content">
				<p>
					This Website relies upon publicly available data from
					various sources, including and not limited to U.S. Federal,
					State, and local governments, WHO, and John Hopkins CSSE.
					News feeds obtained from Twitter and NewsAPI. The contents
					of this Website are for information purposes only and are
					not guaranteed to be accurate. Reliance on this Website for
					medical guidance is strictly prohibited.
				</p>
			</div>
			<div className="footer-copyright">
				<a
					href="https://github.com/ncov19-us/ncov19-sms-bot-frontend"
					alt="github-project"
				>
					<img src={github} alt="project-covid19-vaccine" />
				</a>
				<p>© Copyright 2020</p>
			</div>
		</div>
	);
}
