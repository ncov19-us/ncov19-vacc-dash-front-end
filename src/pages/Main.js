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
        <div
          className="sixteen wide mobile column main"
          style={{ marginTop: '14px' }}
        >
          <div className="ui stackable grid">
            <div className="two column row content">
              <div className="sixteen wide tablet eight wide computer column">
                <DashTopper country={filteredCountry} />
                <VaccineTable />
              </div>
              <div className="sixteen wide tablet eight wide computer column">
                <div className="map-wrapper">
                  <h3 className="map-title">
                    {`COVID-19 ${filteredCountry} Trials`}
                  </h3>
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
