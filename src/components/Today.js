import React from "react";
import moment from "moment";

/*
  Used Moment to get format date that we get using new Date
  using useEffect so that everytime the page renders you get a new date current date
  for usage:
	moment docs: https://momentjs.com/docs/#/parsing/
*/

function Today() {
  return (
    <div className="date">
      <p className="day">{moment().format("dddd")}</p>
      <p className="format">{` •  ${moment().format("LL")}`}</p>
    </div>
  );
}

export default Today;
