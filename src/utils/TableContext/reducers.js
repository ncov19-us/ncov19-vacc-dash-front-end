import {
	GET_TABLE_SUCCESS,
	GET_TABLE_ERROR,
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
} from "./types";

// updates the state
const setIsLoading = (state, action) => {
	return {
		...state,
		is_loading: action.payload,
	};
};
const getTable = (state, action) => {
	return {
		...state,
		is_loading: false,
		table: action.payload,
	};
};
const getTableError = (state, action) => {
	return {
		...state,
		error: action.payload,
		is_loading: false,
	};
};
const getTrials = (state, action) => {
	return {
		...state,
		is_loading: false,
		trials: action.payload.results,
		count: action.payload.count,
	};
};
const getTrialsError = (state, action) => {
	return {
		...state,
		error: action.payload,
		is_loading: false,
	};
};
const dashCard = (state, action) => {
	return {
		...state,
		is_loading: false,
		cards: action.payload,
	};
};
const dashCardError = (state, action) => {
	return {
		...state,
		error: action.payload,
		is_loading: false,
	};
};
const getMap = (state, action) => {
	return {
		...state,
		is_loading: false,
		map: action.payload,
	};
};
const getMapError = (state, action) => {
	return {
		...state,
		error: action.payload,
		is_loading: false,
	};
};
const getTrialByCountry = (state, action) => {
	return {
		...state,
		is_loading: false,
		trials: action.payload,
	};
};
const getTrialByCountryError = (state, action) => {
	return {
		...state,
		error: action.payload,
		is_loading: false,
	};
};
// const setMapFilterTable = (state, action) => {
// 	return {
// 		...state,
// 		is_loading: false,
// 		trials: action.payload,
// 	};
// };
// const setMapFilterTableError = (state, action) => {
// 	return {
// 		...state,
// 		error: action.payload,
// 		is_loading: false,
// 	};
// };
// const populateWorld = (state, action) => {
// 	return {
// 		...state,
// 		is_loading: false,
// 		table: action.payload,
// 	};
// };
// const populateWorldError = (state, action) => {
// 	return {
// 		...state,
// 		error: action.payload,
// 		is_loading: false,
// 	};
// };

const getWorldType = (state, action) => {
	console.log("action", action);
	return {
		...state,
		is_loading: false,
		trials: action.payload,
	};
};
const getWorldTypeError = (state, action) => {
	return {
		...state,
		error: action.payload,
		is_loading: false,
	};
};
const mapFilterTable = (state, action) => {
	return {
		...state,
		is_loading: false,
		trials: action.payload,
	};
};
const mapFilterTableError = (state, action) => {
	return {
		...state,
		error: action.payload,
		is_loading: false,
	};
};

// cases
export const reducer = (state, action) => {
	switch (action.type) {
		case IS_LOADING:
			return setIsLoading(state, action);
		case GET_TABLE_SUCCESS:
			return getTable(state, action);
		case GET_TABLE_ERROR:
			return getTableError(state, action);
		case GET_TRIALS_SUCCESS:
			return getTrials(state, action);
		case GET_TRIALS_ERROR:
			return getTrialsError(state, action);
		case SET_FILTER_SUCCESS:
			return dashCard(state, action);
		case SET_FILTER_ERROR:
			return dashCardError(state, action);
		case GET_MAP_SUCCESS:
			return getMap(state, action);
		case GET_MAP_ERROR:
			return getMapError(state, action);
		case GET_TRIAL_BY_COUNTRY_SUCCESS:
			return getTrialByCountry(state, action);
		case GET_TRIAL_BY_COUNTRY_ERROR:
			return getTrialByCountryError(state, action);
		case GET_WORLD_TYPE_SUCCESS:
			return getWorldType(state, action);
		case GET_WORLD_TYPE_ERROR:
			return getWorldTypeError(state, action);
		case SET_MAP_FILTER_TABLE_SUCCESS:
			return mapFilterTable(state, action);
		case SET_MAP_FILTER_TABLE_ERROR:
			return mapFilterTableError(state, action);
		default:
			return state;
	}
};
