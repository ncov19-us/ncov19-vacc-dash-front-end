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
    return ['Sponsors', 'Country', 'Intervention', 'Phase', 'Type'];
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
        <a
          href={props.data.data_source}
          target="_blank"
					rel="noreferrer noopener"
					// style={{ color: 'white' }}
        >
          {props.data.sponsors}
        </a>
      </td>
      <td>
        <a
          href={props.data.data_source}
          target="_blank"
					rel="noreferrer noopener"
					// style={{ color: 'white' }}
        >
          {props.data.countries}
        </a>
      </td>
      <td>
        <a
          href={props.data.data_source}
          target="_blank"
					rel="noreferrer noopener"
					// style={{ color: 'white' }}
        >
          {props.data.intervention}
        </a>
      </td>
      <td>
        <a
          href={props.data.data_source}
          target="_blank"
					rel="noreferrer noopener"
					// style={{ color: 'white' }}
        >
          {props.data.phase}
        </a>
      </td>
      <td>
        <a
          href={props.data.data_source}
          target="_blank"
					rel="noreferrer noopener"
					// style={{ color: 'white' }}
        >
          {props.data.intervention_type}
        </a>
      </td>
    </>
  );
};
