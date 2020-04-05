import React from 'react';

export default class Table extends React.Component {
  // props.data
  constructor(props) {
    super(props);
    this.getHeader = this.getHeader.bind(this);
    this.getRowsData = this.getRowsData.bind(this);
    this.getColumns = this.getColumns.bind(this);
  }

  getColumns = function () {
    return ['Sponsors', 'Country', 'Drug', 'Phase', 'Type'];
  };

  getHeader = function () {
    var keys = this.getColumns();
    return keys.map((key) => {
      return <th key={key}>{key}</th>;
    });
  };

  getRowsData = function () {
    var items = this.props.data;
    return items.map((row, index) => {
      return (
        <tr key={index}>
          <RenderRow key={index} data={row} />
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

const RenderRow = (props) => {
  // props.data

  return (
    <>
      <td>{props.data.sponsors}</td>
      <td>{props.data.countries}</td>
      <td>{props.data.intervention}</td>
      <td>{props.data.phase}</td>
      <td>{props.data.intervention_type}</td>
    </>
  );
};
