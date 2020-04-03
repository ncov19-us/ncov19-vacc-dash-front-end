import axios from "axios";

export const client = () => {
	return axios.create({ baseURL: "https://covid19-vacc-be.herokuapp.com/" });
};
