import React, { useState } from "react";
import DashTopper from "./DashTopper";
import WorldMap from "../components/WorldMap";
import VaccineTable from "./VaccineTable";
import data from "../data/map-data";

function Main() {
  const [countryFilter, setCountryFilter] = useState("Global");

  return (
    <>
      <DashTopper country={countryFilter} />
      <main className="container">
        <div className="columns is-centered is-gapless">
          <div className="column">
            <div className="columns is-9-desktop is-gapless main">
              <div className="column">
                <VaccineTable />
              </div>
              <div className="column">
                <WorldMap data={data} setCountry={setCountryFilter} />
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Main;
