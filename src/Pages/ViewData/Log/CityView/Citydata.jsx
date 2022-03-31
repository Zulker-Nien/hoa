import React from "react";
import "./cityview.scss";
const Citydata = (props) => {
    const{cityLabel, cityData} = props
  return (
    <div className="cityDataContainer">
      <div className="cityDataWrapper">
        <h3>{cityLabel}</h3>
        <h4>{cityData}</h4>
      </div>
    </div>
  );
};

export default Citydata;
