import axios from "axios";

export const client = () => {
	return axios.create({
		headers: {
			contentType: "application/json; charset=utf-8",
		},
		baseURL: "https://covid19-vacc-be.herokuapp.com/",
	});
};
