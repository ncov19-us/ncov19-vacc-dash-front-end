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
        {props.data.sponsors.length > 10 ? (
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
        ) : (
          <a
            href={props.data.data_source}
            target="_blank"
            rel="noreferrer noopener"
          >
            {props.data.sponsors}
          </a>
        )}
      </td>
      <td>
        {props.data.countries.length > 13 ? (
          <Popup
            trigger={
              <a
                href={props.data.data_source}
                target="_blank"
                rel="noreferrer noopener"
              >
                {props.data.countries}
              </a>
            }
            content={`${props.data.countries.replace(
              /\w\S*/g,
              (c) => c.charAt(0).toUpperCase() + c.substr(1)
            )}`}
            position="bottom center"
            basic
          />
        ) : (
          <a
            href={props.data.data_source}
            target="_blank"
            rel="noreferrer noopener"
          >
            {props.data.countries}
          </a>
        )}
      </td>
      <td>
        {props.data.intervention.length > 14 ? (
          <Popup
            trigger={
              <a
                href={props.data.data_source}
                target="_blank"
                rel="noreferrer noopener"
              >
                {props.data.intervention}
              </a>
            }
            content={`${props.data.intervention.replace(
              /\w\S*/g,
              (c) => c.charAt(0).toUpperCase() + c.substr(1)
            )}`}
            position="bottom center"
            basic
          />
        ) : (
          <a
            href={props.data.data_source}
            target="_blank"
            rel="noreferrer noopener"
          >
            {props.data.intervention}
          </a>
        )}
      </td>
      <td>
        {props.data.phase.length > 14 ? (
          <Popup
            trigger={
              <a
                href={props.data.data_source}
                target="_blank"
                rel="noreferrer noopener"
              >
                {props.data.phase}
              </a>
            }
            content={`${props.data.phase.replace(
              /\w\S*/g,
              (c) => c.charAt(0).toUpperCase() + c.substr(1)
            )}`}
            position="bottom center"
            basic
          />
        ) : (
          <a
            href={props.data.data_source}
            target="_blank"
            rel="noreferrer noopener"
          >
            {props.data.phase}
          </a>
        )}
      </td>
      <td>
        {props.data.intervention_type.length > 14 ? (
          <Popup
            trigger={
              <a
                href={props.data.data_source}
                target="_blank"
                rel="noreferrer noopener"
              >
                {props.data.intervention_type}
              </a>
            }
            content={`${props.data.intervention_type.replace(
              /\w\S*/g,
              (c) => c.charAt(0).toUpperCase() + c.substr(1)
            )}`}
            position="bottom center"
            basic
          />
        ) : (
          <a
            href={props.data.data_source}
            target="_blank"
            rel="noreferrer noopener"
          >
            {props.data.intervention_type}
          </a>
        )}
      </td>
    </>
  );
};
