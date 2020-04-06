import React, { useContext, useState, useReducer, useEffect } from 'react';

import { TableContext } from '../utils/TableContext/TableState';

import Table from './Table';
import PageBar from '../components/PageBar';
import { initialState, filterReducer } from '../utils/filterReducer';

// import "./pages.scss";

/*
GOAL:
	* Display current country's data on table
	 
*/
function VaccineTable() {
  const { getTable, getTrials, trials, isLoading, count } = useContext(
    TableContext
  );

  const [filterInfo, dispatch] = useReducer(filterReducer, initialState);

  // const [apiUrl, setApiUrl] = useState('api/trials?limit=8&page=1');

  useEffect(() => {
    let apiUrl = `api/trials?limit=8&page=${filterInfo.page}`;

    if (filterInfo.country && filterInfo.country !== 'Global') {
      apiUrl += `&countries=${filterInfo.country}`;
    }

    getTrials(apiUrl);
  }, [filterInfo]);

  return (
    <div className="trial-padding">
      {/* {isLoading && (
				<div className="ui inverted segment">
					<div className="ui active inverted loader" />
					<br />
					<br />
					<br />
				</div>
			)} */}
      {trials.length > 0 ? (
        <div>
          <Table data={trials} />
          <PageBar count={count} dispatch={dispatch} />
        </div>
      ) : (
        <p
          style={{
            color: 'white',
            marginTop: '30px',
            marginLeft: '130px',
          }}
        >
          NO RECORD ON FILE
        </p>
      )}
    </div>
  );
}

export default VaccineTable;
