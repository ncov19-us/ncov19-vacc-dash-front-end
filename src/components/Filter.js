/*
create a function that acceps a string command and an object data and string type 
traverse the data and sort the data depending on the command 

where type is the key of data[i] 
and command is the value you are searching for 

*/
export function filter(command, type, data) {
	// Keep track of the so rted array
	const sorted = [];
	// traverse the data and look for type = alternatives
	for (let i = 0; i < Object.keys(data).length; i++) {
		// check what command it is
		if (data[i + 1][type] === command) {
			// add that element to the array
			sorted.push(data[i + 1]);
		}
	}

	return sorted;
}
