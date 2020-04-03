import React, { useState } from 'react';
import DashTopper from './DashTopper';
import VaccineTable from './VaccineTable';
import WorldMap from '../components/WorldMap';
import data from '../data/map-data.json';

function Main() {
  const [filteredCountry, setFilteredCountry] = useState('Global');

  return (
    <>
      <main className="ui centered grid">
        <div className="twelve wide column main" style={{ marginTop: '100px' }}>
          <div className="ui stackable grid">
            <div className="two column row content">
              <div className="sixteen wide tablet eight wide computer column">
                <DashTopper />
                <VaccineTable />
              </div>
              <div className="sixteen wide tablet eight wide computer column">
                <div className="map-wrapper">
                  <WorldMap data={data} setCountry={setFilteredCountry} />
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
