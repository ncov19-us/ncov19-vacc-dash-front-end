/*
create a function that acceps a string command and an object data 
traverse the data and sort the data depending on the command 
*/
export function filter(command, data) {
	// Keep track of the so rted array
	const sorted = [];
	// check what command it is
	// if the command is vaccines
	if (command === "vaccine") {
		// traverse the data and
		for (let i = 0; i < Object.keys(data).length; i++) {
			// look for type = vacine
			if (data[i + 1]["Type"] === "Vaccine") {
				// add that element to the array
				sorted.push(data[i + 1]);
			}
		}
	}
	// if the command is treaments
	if (command === "treatments") {
		// traverse the data and
		for (let i = 0; i < Object.keys(data).length; i++) {
			// look for type = treaments
			if (data[i + 1]["Type"] === "Treatment") {
				// add that element to the array
				sorted.push(data[i + 1]);
			}
		}
	}
	// if the command is alternatives
	if (command === "treatments") {
		// traverse the data and look for type = alternatives
		for (let i = 0; i < Object.keys(data).length; i++) {
			if (data[i + 1]["Type"] === "Treatment") {
				// add that element to the array
				sorted.push(data[i + 1]);
			}
		}
	}
	return sorted;
}
