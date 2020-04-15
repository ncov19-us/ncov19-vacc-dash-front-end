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
		table: action.payload.results,
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
		table: action.payload,
	};
};
const getTrialByCountryError = (state, action) => {
	return {
		...state,
		error: action.payload,
		is_loading: false,
	};
};

const getWorldType = (state, action) => {
	console.log("action", action);
	return {
		...state,
		is_loading: false,
		table: action.payload,
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
		table: action.payload,
	};
};
const mapFilterTableError = (state, action) => {
	return {
		...state,
		error: action.payload,
		is_loading: false,
	};
};
const getDashCardsGlobal = (state, action) => {
	return {
		...state,
		is_loading: false,
		cards: action.payload,
	};
};
const getDashCardsGlobalError = (state, action) => {
	return {
		...state,
		error: action.payload,
		is_loading: false,
	};
};
const fillTableByTypeGlobal = (state, action) => {
	return {
		...state,
		is_loading: false,
		table: action.payload,
	};
};
const fillTableByTypeGlobalError = (state, action) => {
	return {
		...state,
		error: action.payload,
		is_loading: false,
	};
};
const getTableGlobal = (state, action) => {
	return {
		...state,
		is_loading: false,
		table: action.payload.results,
	};
};
const getTableGlobalError = (state, action) => {
	return {
		...state,
		error: action.payload,
		is_loading: false,
	};
};
const getDashCardsByCountryAndType = (state, action) => {
	return {
		...state,
		is_loading: false,
		cards: action.payload,
	};
};
const getDashCardsByCountryAndTypeError = (state, action) => {
	return {
		...state,
		error: action.payload,
		is_loading: false,
	};
};
const getDashCardsByTypeGlobal = (state, action) => {
	return {
		...state,
		is_loading: false,
		cards: action.payload,
	};
};
const getDashCardsByTypeGlobalError = (state, action) => {
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
		case GET_DASH_CARDS_GLOBAL_SUCCESS:
			return getDashCardsGlobal(state, action);
		case GET_DASH_CARDS_GLOBAL_ERROR:
			return getDashCardsGlobalError(state, action);
		case FILL_TABLE_BY_TYPE_GLOBAL_SUCCESS:
			return fillTableByTypeGlobal(state, action);
		case FILL_TABLE_BY_TYPE_GLOBAL_ERROR:
			return fillTableByTypeGlobalError(state, action);
		case GET_TABLE_GLOBAL_SUCCESS:
			return getTableGlobal(state, action);
		case GET_TABLE_GLOBAL_ERROR:
			return getTableGlobalError(state, action);
		case GET_DASH_CARDS_BY_COUNTRY_AND_TYPE_SUCCESS:
			return getDashCardsByCountryAndType(state, action);
		case GET_DASH_CARDS_BY_COUNTRY_AND_TYPE_ERROR:
			return getDashCardsByCountryAndTypeError(state, action);
		case GET_DASH_CARDS_BY_TYPE_GLOBAL_SUCCESS:
			return getDashCardsByTypeGlobal(state, action);
		case GET_DASH_CARDS_BY_TYPE_GLOBAL_ERROR:
			return getDashCardsByTypeGlobalError(state, action);
		default:
			return state;
	}
};
