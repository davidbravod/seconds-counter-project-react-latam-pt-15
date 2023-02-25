import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

import "../../styles/index.css";

//create your first component
const SecondsCounter = (props) => {
	return (
<>
<div className="container mt-5 bg-dark">
  <div className="row d-flex justify-content-center">
    <div className="col-1 text-center">
      <h1>
        <span className="badge bg-secondary me-5"><i className="fa fa-clock"></i></span>
      </h1>
    </div>
    <div className="col-1 text-center">
      <h1>
        <span className="badge bg-secondary">{props.tensOfHoursCount}</span>
      </h1>
    </div>
    <div className="col-1 text-center">
      <h1>
        <span className="badge bg-secondary">{props.hoursCount}</span>
      </h1>
    </div>
    <div className="col-1 text-center">
      <h1>
        <span className="badge bg-secondary">:</span>
      </h1>
    </div>
    <div className="col-1 text-center">
      <h1>
        <span className="badge bg-secondary">{props.tensOfMinutesCount}</span>
      </h1>
    </div>
    <div className="col-1 text-center">
      <h1>
        <span className="badge bg-secondary">{props.minutesCount}</span>
      </h1>
    </div>
    <div className="col-1 text-center">
      <h1>
        <span className="badge bg-secondary">:</span>
      </h1>
    </div>
    <div className="col-1 text-center">
      <h1>
        <span className="badge bg-secondary">{props.tensOfSecondsCount}</span>
      </h1>
    </div>
    <div className="col-1 text-center">
      <h1>
        <span className="badge bg-secondary">{props.secondsCount}</span>
      </h1>
    </div>
  </div>
</div>

      </>

	);
};

export default SecondsCounter;
