import React from "react";
import { Popup } from "semantic-ui-react";

export default class Table extends React.Component {
	// props.data
	constructor(props) {
		super(props);
		this.getHeader = this.getHeader.bind(this);
		this.getRowsData = this.getRowsData.bind(this);
		this.getColumns = this.getColumns.bind(this);
	}

	getColumns = function () {
		return ["Sponsors", "Country", "Intervention", "Phase", "Type"];
	};

	getHeader = function () {
		var keys = this.getColumns();
		return keys.map((key) => {
			return (
				<th key={key} className="table-title">
					{key}
				</th>
			);
		});
	};

	getRowsData = function () {
		var items = this.props.data;
		return items.map((row, index) => {
			return (
				<tr key={index} className="record">
					<RenderRow key={index} data={row} />
				</tr>
			);
		});
	};

	render() {
		return (
			<div className="table-wrapper">
				<table className="table">
					<thead>
						<tr>{this.getHeader()}</tr>
					</thead>
					<tbody>{this.getRowsData()}</tbody>
				</table>
			</div>
		);
	}
}

const RenderRow = (props) => {
	// props.data

	return (
		<>
			<td>
				<Popup
					trigger={
						<a
							href={props.data.data_source}
							target="_blank"
							rel="noreferrer noopener"
						>
							{props.data.sponsors}
						</a>
					}
					content={`${props.data.sponsors.replace(
						/\w\S*/g,
						(c) => c.charAt(0).toUpperCase() + c.substr(1)
					)}`}
					position="bottom center"
					basic
				/>
			</td>

			<td>
				<a
					href={props.data.data_source}
					target="_blank"
					rel="noreferrer noopener"
				>
					{props.data.countries}
				</a>
			</td>
			<td>
				<a
					href={props.data.data_source}
					target="_blank"
					rel="noreferrer noopener"
				>
					{props.data.intervention}
				</a>
			</td>
			<td>
				<a
					href={props.data.data_source}
					target="_blank"
					rel="noreferrer noopener"
				>
					{props.data.phase}
				</a>
			</td>
			<td>
				<a
					href={props.data.data_source}
					target="_blank"
					rel="noreferrer noopener"
				>
					{props.data.intervention_type}
				</a>
			</td>
		</>
	);
};
