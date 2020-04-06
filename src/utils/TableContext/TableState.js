import React, { createContext, useReducer, useEffect } from "react";

import {
	IS_LOADING,
	GET_TABLE_SUCCESS,
	GET_TABLE_ERROR,
	GET_TRIALS_SUCCESS,
	GET_TRIALS_ERROR,
	SET_FILTER_SUCCESS,
	SET_FILTER_ERROR,
	FILTER_BY_ON_CLICK_SUCCESS,
	FILTER_BY_ON_CLICK_ERROR,
	GET_MAP_SUCCESS,
	GET_MAP_ERROR,
	GET_TRIAL_BY_COUNTRY_SUCCESS,
	GET_TRIAL_BY_COUNTRY_ERROR,
	SET_MAP_FILTER_TABLE_SUCCESS,
	SET_MAP_FILTER_TABLE_ERROR,
	POPULATE_WORLD_SUCCESS,
	POPULATE_WORLD_ERROR,
} from "./types";
import { loadState, saveState } from "../localStorage";
import { axiosWithAuth, client } from "../axiosWithAuth";
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
		table: {},
		trials: [],
		map: [],
		count: null,
		country: "Global",
		filter: [],
	};

	// get updated state from localStorage
	const localState = loadState("table");

	// NOTE: uncomment local storage hook for now for debugging purposes
	// const [state, dispatch] = useReducer(reducer, localState || initialState);
	const [state, dispatch] = useReducer(reducer, initialState);

	// save state to localstorage on page render
	useEffect(() => {
		saveState("table", state);
	}, [state]);

	// method that will dispatch success or error
	// send CRUD operation to backend server

	const getTrials = async (apiUrl) => {
		dispatch({ type: IS_LOADING, payload: true });
		try {
			const res = await client().get(apiUrl);

			dispatch({ type: GET_TRIALS_SUCCESS, payload: res.data });
		} catch (e) {
			console.log("error", e.message);
			{
				dispatch({ type: GET_TRIALS_ERROR, payload: e.response });
			}
		}
	};
	const mapFilterByCountry = async (country) => {
		dispatch({ type: IS_LOADING, payload: true });
		try {
			const res = await client().get(
				`/api/totals?countries=${country.properties.name}`
			);
			dispatch({ type: SET_FILTER_SUCCESS, payload: res.data });
		} catch (e) {
			console.log("error", e);
			{
				dispatch({ type: SET_FILTER_ERROR, payload: e.response });
			}
		}
	};

	const populateDashCards = async (country) => {
		dispatch({ type: IS_LOADING, payload: true });

		let apiUrl = "/api/totals";
		if (country !== "Global") {
			apiUrl = `/api/totals?countries=${country.toLowerCase()}`;
		}

		try {
			const res = await client().get(apiUrl);
			dispatch({ type: SET_FILTER_SUCCESS, payload: res.data });
		} catch ({ message, response }) {
			console.log(message);
			dispatch({ type: SET_FILTER_ERROR, payload: response });
		}
	};

	const filterByOnClick = async (data) => {
		dispatch({ type: IS_LOADING, payload: true });
		try {
			dispatch({ type: FILTER_BY_ON_CLICK_SUCCESS, payload: data });
		} catch (e) {
			console.log("error", e);
			{
				dispatch({
					type: FILTER_BY_ON_CLICK_ERROR,
					payload: e.response,
				});
			}
		}
	};
	const getMap = async () => {
		dispatch({ type: IS_LOADING, payload: true });
		try {
			const res = await client().get(`/api/map`);
			dispatch({ type: GET_MAP_SUCCESS, payload: res.data });
		} catch (e) {
			console.log("error getting map", e);
			{
				dispatch({ type: GET_MAP_ERROR, payload: e.response });
			}
		}
	};
	// const getTrialByCountry = async () => {
	// 	dispatch({ type: IS_LOADING, payload: true });
	// 	try {
	// 		const res = await client().call(`endpoint`);
	// 		dispatch({ type: TYPENAME_SUCCESS, payload: res.data });
	// 	} catch (e) {
	// 		console.log("error", e);
	// 		{
	// 			dispatch({ type: TYPENAME_ERROR, payload: e.response });
	// 		}
	// 	}
	// };
	const getTrialByCountryAndType = async (type, country) => {
		dispatch({ type: IS_LOADING, payload: true });
		try {
			const res = await client().get(
				`/api/trials?type=${type}&countries=${country}`
			);
			console.log("countryTrial", res);
			dispatch({ type: GET_TRIAL_BY_COUNTRY_SUCCESS, payload: res.data });
		} catch (e) {
			console.log("error", e);
			{
				dispatch({
					type: GET_TRIAL_BY_COUNTRY_ERROR,
					payload: e.response,
				});
			}
		}
	};

	// table populates on click with map
	const mapFilterByCountryTrials = async (country) => {
		dispatch({ type: IS_LOADING, payload: true });
		try {
			const res = await client().get(`/api/trials?countries=${country}`);
			dispatch({
				type: SET_MAP_FILTER_TABLE_SUCCESS,
				payload: res.data.results,
			});
		} catch (e) {
			console.log("error", e);
			{
				dispatch({
					type: SET_MAP_FILTER_TABLE_ERROR,
					payload: e.response,
				});
			}
		}
	};

	// dash cards populate on click with map
	const mapFilterDashCards = async (country) => {
		dispatch({ type: IS_LOADING, payload: true });
		try {
			const res = await client().get(`/api/totals?countries=${country}`);
			dispatch({ type: SET_FILTER_SUCCESS, payload: res.data });
		} catch (e) {
			console.log("error", e);
			{
				dispatch({ type: SET_FILTER_ERROR, payload: e.response });
			}
		}
	};

	// populate world
	const populateWorld = async () => {
		dispatch({ type: IS_LOADING, payload: true });
		try {
			const res = await client().get(`api/totals`);
			dispatch({ type: POPULATE_WORLD_SUCCESS, payload: res.data });
		} catch (e) {
			console.log("error", e);
			{
				dispatch({ type: POPULATE_WORLD_ERROR, payload: e.response });
			}
		}
	};

	// Provider values are in function or state
	return (
		<TableContext.Provider
			value={{
				error: state.error,
				table: state.table,
				map: state.map,
				trials: state.trials,
				count: state.count,
				filter: state.filter,
				isLoading: state.isLoading,
				getTrials,
				getMap,
				mapFilterByCountry,
				filterByOnClick,
				getTrialByCountryAndType,
				mapFilterDashCards,
				mapFilterByCountryTrials,
				populateWorld,
				populateDashCards,
			}}
		>
			{props.children}
		</TableContext.Provider>
	);
};
