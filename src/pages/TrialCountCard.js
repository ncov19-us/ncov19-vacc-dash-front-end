import React from "react";

const TrialCountCard = ({ title, count }) => {
  return (
    <div className="card">
      <div className="stats">
        <h4>{title} Trials</h4>
      </div>
      <p className="count">{count}</p>
    </div>
  );
};

export default TrialCountCard;
