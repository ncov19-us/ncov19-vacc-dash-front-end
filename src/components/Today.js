import React, { useState, useEffect } from 'react';
import moment from 'moment';

/*
  Used Moment to get format date that we get using new Date
  using useEffect so that everytime the page renders you get a new date current date
  for usage:
	moment docs: https://momentjs.com/docs/#/parsing/
*/

function Today() {
  const [time, setTime] = useState('');

  useEffect(() => {
    const time = new Date();
    setTime(time);
  }, []);

  return (
    <div className="date">
      <p className="day">{moment(`${time}`).format('dddd')}</p>
      <p className="format">{` •  ${moment(`${time}`).format('LL')}`}</p>
    </div>
  );
}

export default Today;
