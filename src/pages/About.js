import React from "react";

import "./pages.scss";

export default function About() {
	return (
		<div className="about">
			<div className="title">
				<h1>What is the COVID-19?</h1>
			</div>
			<div className="cards">
				<div className="card">
					<h4>What is the Novel Coronavirus</h4>
					<p>
						Coronavirus disease (COVID-19) is an infectious disease
						caused by a newly discovered coronavirus. Most people
						infected with the COVID-19 virus will experience mild to
						moderate respiratory illness and recover without
						requiring special treatment. Older people, and those
						with underlying medical problems like cardiovascular
						disease, diabetes, chronic respiratory disease, and
						cancer are more likely to develop serious illness.
						Source: WHO.org
					</p>
				</div>
			</div>
		</div>
	);
}
