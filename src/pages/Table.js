import React from "react";

export default class Table extends React.Component {
	constructor(props) {
		super(props);
		this.getHeader = this.getHeader.bind(this);
		this.getRowsData = this.getRowsData.bind(this);
		this.getKeys = this.getKeys.bind(this);
	}

	getKeys = function() {
		return Object.keys(this.props.data[0]);
	};

	getHeader = function() {
		var keys = this.getKeys();
		return keys.map((key, index) => {
			return <th key={key}>{key}</th>;
		});
	};

	getRowsData = function() {
		var items = this.props.data;
		var keys = this.getKeys();
		return items.map((row, index) => {
			return (
				<tr key={index}>
					<RenderRow key={index} data={row} keys={keys} />
				</tr>
			);
		});
	};

	render() {
		return (
			<div className="table-wrapper">
				<table className="table is-hoverable">
					<thead>
						<tr>{this.getHeader()}</tr>
					</thead>
					<tbody>{this.getRowsData()}</tbody>
				</table>
			</div>
		);
	}
}

const RenderRow = props => {
	return props.keys.map((key, index) => {
		if (key === "Sponsors") {
			return (
				<td key={props.data[key]} className="block">
					<p className="country">COUNTRY</p>
					<p>{props.data[key]}</p>
				</td>
			);
		} else {
			return <td key={props.data[key]}>{props.data[key]}</td>;
		}
	});
};
