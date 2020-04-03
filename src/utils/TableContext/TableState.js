import React, { createContext, useReducer, useEffect } from "react";

import {
	IS_LOADING,
	GET_TABLE_SUCCESS,
	GET_TABLE_ERROR,
	GET_TRIALS_SUCCESS,
	GET_TRIALS_ERROR,
} from "./types";
import { loadState, saveState } from "../localStorage";
import { axiosWithAuth, client } from "../axiosWithAuth";
import { reducer } from "./reducers";

export const TableContext = createContext();

export const TableState = props => {
	const initialState = { error: "", isLoading: false, table: [], trials: [] };

	const localState = loadState("table");

	const [state, dispatch] = useReducer(reducer, localState || initialState);

	useEffect(() => {
		saveState("table", state);
	}, [state]);

	const getTable = async () => {
		dispatch({ type: IS_LOADING, payload: true });
		try {
			const table = await client().get("api/totals");
			dispatch({ type: GET_TABLE_SUCCESS, payload: table.data });
		} catch (e) {
			console.log("error", e);
			dispatch({ type: GET_TABLE_ERROR, payload: e.response });
		}
	};
	const getTrials = async () => {
		dispatch({ type: IS_LOADING, payload: true });
		try {
			const res = await client().get(
				`api/trials?type=vaccine&max=10&page=4`
			);
			dispatch({ type: GET_TRIALS_SUCCESS, payload: res.data });
		} catch (e) {
			console.log("error", e);
			{
				dispatch({ type: GET_TRIALS_ERROR, payload: e.response });
			}
		}
	};
	return (
		<TableContext.Provider
			value={{
				error: state.error,
				table: state.table,
				trials: state.trials,
				isLoading: state.isLoading,
				getTable,
				getTrials,
			}}
		>
			{props.children}
		</TableContext.Provider>
	);
};
