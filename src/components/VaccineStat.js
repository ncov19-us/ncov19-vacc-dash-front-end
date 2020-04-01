import React from "react";

// img src
import good from "../assets/green-good.png";
import bad from "../assets/red-bad.png";

/*
Conditial function that accepts numbers and compares them both 
	if the old number is greater than the old number it will return a green triangle
	if the new number is greater it will return a red return 
    if the number number is the same it will return nothing 
*/
export default function VaccineStat({ old, newStat }) {
	if (newStat < old) {
		return (
			<div>
				<img
					src={good}
					alt="getting-better"
					style={{ transform: "rotate(58deg)" }}
				/>
			</div>
		);
	} else if (newStat > old) {
		return (
			<div>
				<img src={bad} alt="getting-worse" />
			</div>
		);
	} else return null;
}
