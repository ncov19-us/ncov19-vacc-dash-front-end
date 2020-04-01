import React, { useState } from 'react';
import Map from '../components/Map';
import data from '../data/map-data';
import { treatments } from '../data/treatment-list';

function Main() {
  const [treatmentsList, setTreatmentsList] = useState(treatments);

  return (
    <main className="container">
      <div className="columns is-centered is-gapless">
        <div className="column">
          <div className="columns is-9-desktop is-gapless main">
            <div className="column">
              <h1 className="title">Ncov-19 Vaccine Dashboard</h1>
              
            </div>
            <div className="column">
              <div className="map-wrapper">
                <Map data={data} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Main;
