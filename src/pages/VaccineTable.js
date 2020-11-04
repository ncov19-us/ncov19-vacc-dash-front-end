import React, { useContext, useEffect } from "react";
import { TableContext } from "../utils/TableContext/TableState";
import Table from "./Table";
import PageBar from "../components/PageBar";

function VaccineTable({ filterInfo, dispatch }) {
  const {
    getTrials,
    getDashCardsByCountryAndType,
    getDashCardsGlobal,
    getDashCardsByTypeGlobal,
    table,
    isLoading,
    count,
  } = useContext(TableContext);

  const { page, country, type } = filterInfo;

  // fetch table data and card totals
  useEffect(() => {
    let apiUrl = `api/trials?limit=7&page=${page}`;
    if (country !== "world") {
      apiUrl += `&countries=${country}`;
    }
    if (type !== "all") {
      apiUrl += `&type=${type}`;
    }
    // fetch totals based on filters
    if (country === "world" && type === "all") getDashCardsGlobal();
    if (country === "world" && type !== "all") getDashCardsByTypeGlobal();
    if (country !== "world") getDashCardsByCountryAndType(country, type);
    // fetch dynamically filtered table results
    getTrials(apiUrl);
  }, [filterInfo, country, type]); // when filter info changes, fetch data

  useEffect(() => {
    console.log("test");
  }, [country, type, getDashCardsGlobal]);

  return (
    <>
      {table.length > 0 ? (
        <>
          <Table data={table} page={page} />
          {count > 7 && (
            <PageBar count={count} page={page} dispatch={dispatch} />
          )}
        </>
      ) : (
        <p>NO RECORD ON FILE</p>
      )}
    </>
  );
}

export default VaccineTable;
