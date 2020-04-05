import {
	GET_TABLE_SUCCESS,
	GET_TABLE_ERROR,
	IS_LOADING,
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
		table: { ...action.payload },
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
		trials: { ...action.payload },
	};
};
const getTrialsError = (state, action) => {
	return {
		...state,
		error: action.payload,
		is_loading: false,
	};
};
const mapFilter = (state, action) => {
	return {
		...state,
		is_loading: false,
		table: { ...action.payload },
	};
};
const mapFilterError = (state, action) => {
	return {
		...state,
		error: action.payload,
		is_loading: false,
	};
};
const filterByOnClick = (state, action) => {
	return {
		...state,
		is_loading: false,
		trials: { trials: { ...action.payload } },
	};
};
const filterByOnClickError = (state, action) => {
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
		map: { ...action.payload },
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
		trials: { ...action.payload },
	};
};
const getTrialByCountryError = (state, action) => {
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
			return mapFilter(state, action);
		case SET_FILTER_ERROR:
			return mapFilterError(state, action);
		case FILTER_BY_ON_CLICK_SUCCESS:
			return filterByOnClick(state, action);
		case FILTER_BY_ON_CLICK_ERROR:
			return filterByOnClickError(state, action);
		case GET_MAP_SUCCESS:
			return getMap(state, action);
		case GET_MAP_ERROR:
			return getMapError(state, action);
		case GET_TRIAL_BY_COUNTRY_SUCCESS:
			return getTrialByCountry(state, action);
		case GET_TRIAL_BY_COUNTRY_ERROR:
			return getTrialByCountryError(state, action);
		default:
			return state;
	}
};
