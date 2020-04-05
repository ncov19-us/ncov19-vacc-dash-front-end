import React, { useContext, useState, useEffect } from 'react';

import { TableContext } from '../utils/TableContext/TableState';

import Table from './Table';
import TrialMenu from '../components/TrialMenu';
import PageBar from '../components/PageBar';

import './pages.scss';

function VaccineTable() {
  const { getTrials, trials, isLoading, count } = useContext(TableContext);

	const [apiUrl, setApiUrl] = useState('api/trials?limit=15&page=1');

  useEffect(() => {
    getTrials(apiUrl);
  }, [apiUrl]);

  return (
    <div className="trial-padding">
      <TrialMenu />
      {isLoading && (
        <div className="ui inverted segment">
          <div className="ui active inverted loader" />
          <br />
          <br />
          <br />
        </div>
      )}
      {!isLoading && trials && (
				<>
				<Table data={trials} />
				<PageBar count={count} setUrl={setApiUrl} />
				</>
			)}
    </div>
  );
}

export default VaccineTable;
