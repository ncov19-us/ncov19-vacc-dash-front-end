import React, { useState, useContext, useEffect } from 'react';

import { TableContext } from '../utils/TableContext/TableState';

import Table from './Table';
import TrialMenu from '../components/TrialMenu';
import treatments from '../data/treatments';

import './pages.scss';

function VaccineTable({ country }) {
  const { getTable, getTrials } = useContext(TableContext);
  useEffect(async () => {
    getTable();
    getTrials();
  }, []);

  const dummyData = [
    {
      Sponsors: 'BioNTech SE and Pfizer Inc.',
      country: 'USA',
      Drug: 'BNT162',
      Phase: 'Preclinical',
      Type: 'Vaccine',
    },
    {
      Sponsors: 'Gilead Sciences Inc.',
      country: 'China',
      Drug: 'remdesivir',
      Phase: 'Phase 2',
      Type: 'Treatment',
    },
    {
      Sponsors: 'GlaxoSmithKline',
      country: 'USA',
      Drug: 'AS03 Adjuvant System',
      Phase: 'None',
      Type: 'Adjuvant platform for vaccines',
    },
    {
      Sponsors: 'Heat Biologics Inc.',
      country: 'USA',
      Drug: 'None',
      Phase: 'Preclinical',
      Type: 'Vaccine',
    },
    {
      Sponsors: 'Inovio Pharmaceuticals Inc.',
      country: 'USA',
      Drug: 'INO-4800',
      Phase: 'Preclinical',
      Type: 'DNA-based vaccine',
    },
  ];

	const [trials, setTrials] = useState(dummyData);

	// TODO: separate state for all trials vs. displayed trials
	useEffect(() => {
		setTrials(() => {
			if (country !== 'Global') {
				return dummyData.filter(trial => trial.country === country);
			} 
			
			return dummyData;
		});
	}, [country]);

  return (
    <div>
      <TrialMenu />
      <Table data={trials} />
    </div>
  );
}

export default VaccineTable;
