import React from "react";

import "./ChartBar.css";

const ChartBar = (props) => {
  let barFillHeight = "0%";

  if (props.maxValue > 0) {
    barFillHeight = `${Math.round((props.value / props.maxValue) * 100)}%`;
  }

  // style prop works differently in react. It wants a js object as a value.With css properties as key name and properties as values. And for a property name with - we need '' arround it otherwise it will be a invalid property name or use the camel case version of the property.

  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div
          className="chart-bar__fill"
          style={{ height: barFillHeight }}
        ></div>
      </div>
      <div className="cart-bar__label">{props.label}</div>
    </div>
  );
};

export default ChartBar;
