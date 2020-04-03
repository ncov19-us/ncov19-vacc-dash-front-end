export const loadState = state => {
	try {
		const serializedState = localStorage.getItem(state);
		if (serializedState === null) {
			return undefined;
		}

		return JSON.parse(serializedState);
	} catch (error) {
		return undefined;
	}
};

export const saveState = (stateName, stateDetail) => {
	try {
		const serializedState = JSON.stringify(stateDetail);
		localStorage.setItem(stateName, serializedState);
	} catch (error) {
		console.log(`Error occurs while saving state: ${error}`);
	}
};

export const removeState = () => {
	try {
		localStorage.clear();
	} catch (error) {
		console.log(`Error occurs while clearing state: ${error}`);
	}
};

export const logout = props => {
	localStorage.removeItem("token");
	props.history.push("/");
};
