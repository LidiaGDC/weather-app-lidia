import React from "react";
import "./styles.css";
export default function Temperature() {
  return (
    <h3>
      <div className="row">
        <div className="col-7 icon">
          {" "}
          <span className="currenttemp"> 30ºC</span> ☀
        </div>
        <div className="col-5">
          <div className="row">
            <div className="col-12 max">
              {" "}
              <span className="tempmax"> 25 </span> °C{" "}
            </div>
            <div className="col-12 min">
              {" "}
              <span className="tempmin"> 3 </span> °C{" "}
            </div>
          </div>
        </div>
      </div>
    </h3>
  );
}
