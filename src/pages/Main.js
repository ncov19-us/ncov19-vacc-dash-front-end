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
      <main className="container">
        <div className="columns is-9-desktop is-centered is-gapless">
          <div className="ui grid">
            <div className="two column row">
              <div className="column">
                <h1 className="title">{filteredCountry} Dashboard</h1>
                <VaccineTable />
              </div>
              <div className="column">
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
