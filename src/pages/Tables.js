import React, { useContext } from "react";
import { TableContext } from "../utils/TableContext/TableState";

export default function Tables() {
	const { trials } = useContext(TableContext);
	return (
		<div className="table">
			<div className="title">
				<h4 className="sponsor">Sponsor</h4>
				<h4 className="country">Country</h4>
				<h4 className="intervention">Intervention</h4>
				<h4 className="phase">Phase</h4>
				<h4 className="type">Type</h4>
			</div>

			{trials &&
				trials.map((data) => (
					<div className="content" key={data.id}>
						<p className="sponsor">{data.sponsors}</p>
						<p className="country">{data.countries}</p>
						<p className="intervention">{data.intervention}</p>
						<p className="phase">{data.phase}</p>
						<p className="type">{data.intervention_type}</p>
					</div>
				))}
		</div>
	);
}
