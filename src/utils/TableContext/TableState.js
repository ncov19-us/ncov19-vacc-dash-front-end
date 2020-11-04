import React, { createContext, useReducer } from "react";

import {
  IS_LOADING,
  GET_TRIALS_SUCCESS,
  GET_TRIALS_ERROR,
  SET_FILTER_SUCCESS,
  SET_FILTER_ERROR,
  GET_MAP_SUCCESS,
  GET_MAP_ERROR,
  GET_TRIAL_BY_COUNTRY_SUCCESS,
  GET_TRIAL_BY_COUNTRY_ERROR,
  SET_MAP_FILTER_TABLE_SUCCESS,
  SET_MAP_FILTER_TABLE_ERROR,
  GET_WORLD_TYPE_SUCCESS,
  GET_WORLD_TYPE_ERROR,
  GET_DASH_CARDS_GLOBAL_SUCCESS,
  GET_DASH_CARDS_GLOBAL_ERROR,
  FILL_TABLE_BY_TYPE_GLOBAL_SUCCESS,
  FILL_TABLE_BY_TYPE_GLOBAL_ERROR,
  GET_TABLE_GLOBAL_SUCCESS,
  GET_TABLE_GLOBAL_ERROR,
  GET_DASH_CARDS_BY_COUNTRY_AND_TYPE_SUCCESS,
  GET_DASH_CARDS_BY_COUNTRY_AND_TYPE_ERROR,
  GET_DASH_CARDS_BY_TYPE_GLOBAL_SUCCESS,
  GET_DASH_CARDS_BY_TYPE_GLOBAL_ERROR,
} from "./types";
import { client } from "../axiosWithAuth";
import { reducer } from "./reducers";

export const TableContext = createContext();

/* 
GOAL: 
	Create Global state with React Context 
	Create communication with backend server with CRUD operations

USAGE: 
	Wrap ContextState in app to initialize global state
	import useContext in component wherever needed
	import {DatatContext} from './path to State'
	create variable 
		const {state, or method-function, or both} = useContext({DataContext})

RETURNS: 
	Updated state

*/
export const TableState = (props) => {
  // create and initial state
  const initialState = {
    error: "",
    isLoading: false,
    cards: [],
    table: [],
    map: [],
    count: null,
    country: "world",
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const getMap = async () => {
    dispatch({ type: IS_LOADING, payload: true });
    try {
      const res = await client().get(`/api/map`);
      dispatch({ type: GET_MAP_SUCCESS, payload: res.data });
    } catch (e) {
      dispatch({ type: GET_MAP_ERROR, payload: e.response });
    }
  };
  // Cards by global
  const getDashCardsGlobal = async () => {
    dispatch({ type: IS_LOADING, payload: true });
    try {
      const res = await client().get(`/api/totals`);
      dispatch({
        type: GET_DASH_CARDS_GLOBAL_SUCCESS,
        payload: res.data,
      });
    } catch (e) {
      dispatch({
        type: GET_DASH_CARDS_GLOBAL_ERROR,
        payload: e.response,
      });
    }
  };
  // fill global table
  const getTableGlobal = async () => {
    dispatch({ type: IS_LOADING, payload: true });
    try {
      const res = await client().get(`api/trials`);
      dispatch({ type: GET_TABLE_GLOBAL_SUCCESS, payload: res.data });
    } catch (e) {
      dispatch({ type: GET_TABLE_GLOBAL_ERROR, payload: e.response });
    }
  };

  const getTrials = async (apiUrl) => {
    dispatch({ type: IS_LOADING, payload: true });
    try {
      const res = await client().get(apiUrl);

      dispatch({ type: GET_TRIALS_SUCCESS, payload: res.data });
    } catch (e) {
      dispatch({ type: GET_TRIALS_ERROR, payload: e.response });
    }
  };

  // Cards by country
  const getDashCardsByCountry = async (country) => {
    dispatch({ type: IS_LOADING, payload: true });
    try {
      const res = await client().get(`/api/totals?countries=${country}`);
      dispatch({ type: SET_FILTER_SUCCESS, payload: res.data });
    } catch (e) {
      dispatch({ type: SET_FILTER_ERROR, payload: e.response });
    }
  };

  const getWorldType = async (type) => {
    dispatch({ type: IS_LOADING, payload: true });
    try {
      const res = await client().get(`/api/trials?type=${type}`);
      dispatch({
        type: GET_WORLD_TYPE_SUCCESS,
        payload: res.data.results,
      });
    } catch (e) {
      dispatch({ type: GET_WORLD_TYPE_ERROR, payload: e.response });
    }
  };

  // gets trials by type and country
  const fillTableByCountryAndType = async (country, type) => {
    dispatch({ type: IS_LOADING, payload: true });
    try {
      const res = await client().get(
        `/api/trials?type=${type}&countries=${country}`
      );

      dispatch({
        type: GET_TRIAL_BY_COUNTRY_SUCCESS,
        payload: res.data.results,
      });
    } catch (e) {
      dispatch({
        type: GET_TRIAL_BY_COUNTRY_ERROR,
        payload: e.response,
      });
    }
  };

  // table populates on click with map
  const fillTableByCountry = async (country) => {
    dispatch({ type: IS_LOADING, payload: true });
    try {
      const res = await client().get(`/api/trials?countries=${country}`);
      dispatch({
        type: SET_MAP_FILTER_TABLE_SUCCESS,
        payload: res.data.results,
      });
    } catch (e) {
      dispatch({
        type: SET_MAP_FILTER_TABLE_ERROR,
        payload: e.response,
      });
    }
  };
  const fillTableByTypeGlobal = async (type) => {
    dispatch({ type: IS_LOADING, payload: true });
    try {
      const res = await client().get(`/api/trials?type=${type}`);
      dispatch({
        type: FILL_TABLE_BY_TYPE_GLOBAL_SUCCESS,
        payload: res.data.results,
      });
    } catch (e) {
      dispatch({
        type: FILL_TABLE_BY_TYPE_GLOBAL_ERROR,
        payload: e.response,
      });
    }
  };
  const getDashCardsByCountryAndType = async (country, type) => {
    dispatch({ type: IS_LOADING, payload: true });
    try {
      const res = await client().get(
        `/api/totals?countries=${country}&type=${type}`
      );
      dispatch({
        type: GET_DASH_CARDS_BY_COUNTRY_AND_TYPE_SUCCESS,
        payload: res.data,
      });
    } catch (e) {
      dispatch({
        type: GET_DASH_CARDS_BY_COUNTRY_AND_TYPE_ERROR,
        payload: e.response,
      });
    }
  };
  const getDashCardsByTypeGlobal = async (type) => {
    dispatch({ type: IS_LOADING, payload: true });
    try {
      const res = await client().get(`/api/totals?type=${type}`);
      dispatch({
        type: GET_DASH_CARDS_BY_TYPE_GLOBAL_SUCCESS,
        payload: res.data,
      });
    } catch (e) {
      dispatch({
        type: GET_DASH_CARDS_BY_TYPE_GLOBAL_ERROR,
        payload: e.response,
      });
    }
  };

  // Provider values are in function or state
  return (
    <TableContext.Provider
      value={{
        error: state.error,
        table: state.table,
        map: state.map,
        table: state.table,
        count: state.count,
        cards: state.cards,
        isLoading: state.isLoading,
        getMap, // gives map values
        getDashCardsGlobal, // call to get global cards
        getTableGlobal, // call to get global cards
        fillTableByCountry, // fill table by country
        fillTableByCountryAndType, // fill table by country and type
        getDashCardsByCountry, // dash cards
        getTrials, //gets all trials
        getWorldType,
        fillTableByTypeGlobal,
        getDashCardsByCountryAndType,
        getDashCardsByTypeGlobal,
      }}>
      {props.children}
    </TableContext.Provider>
  );
};
