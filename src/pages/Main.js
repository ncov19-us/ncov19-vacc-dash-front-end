import React, { useState } from 'react';
import DashTopper from './DashTopper';
import VaccineTable from './VaccineTable';
import Map from '../components/Map';
import { treatments } from '../data/treatment-list';
import data from '../data/map-data';

function Main() {
  const [treatmentsList, setTreatmentsList] = useState(treatments);
  const [filteredCountry, setFilteredCountry] = useState('Global');

  return (
    <>
      <DashTopper />
      <main className="ui centered grid">
        <div className="twelve wide column">
          <div className="ui stackable grid">
            <div className="two column row">
              <div className="sixteen wide tablet eight wide computer column">
                <h1 className="title">{filteredCountry} Dashboard</h1>
                <VaccineTable />
              </div>
              <div className="sixteen wide tablet eight wide computer column">
                <div className="map-wrapper">
                  <Map data={data} setCountry={setFilteredCountry} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Main;
