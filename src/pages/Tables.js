import React, { useContext } from 'react';
import { TableContext } from '../utils/TableContext/TableState';

// import "./pages.scss";

export default function Tables() {
  const { trials } = useContext(TableContext);
  return (
    <div className="table">
      <div className="title">
        <h4 className="sponsor">Sponsor</h4>
        <h4 className="country">Country</h4>
        {/* <h4>Drug</h4> */}
        <h4 className="phase">Phase</h4>
        <h4 className="type">Type</h4>
      </div>

      {trials &&
        trials.results.map((data) => (
          <div className="content" key={data.id}>
            <p className="sponsor">{data.sponsors}</p>
            <p className="country">{data.countries}</p>
            <p className="phase">{data.phase_num}</p>
            <p className="intervention_type">{data.intervention}</p>
          </div>
        ))}
    </div>
  );
}
