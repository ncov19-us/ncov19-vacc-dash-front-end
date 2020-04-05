import React, { useContext, useEffect } from 'react';

import { TableContext } from '../utils/TableContext/TableState';

import Table from './Table';
import TrialMenu from '../components/TrialMenu';

import './pages.scss';

function VaccineTable() {
  const { getTrials, trials, isLoading } = useContext(TableContext);

  useEffect(() => {
    getTrials();
  }, []);

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
      {!isLoading && trials && <Table data={trials} />}
    </div>
  );
}

export default VaccineTable;
