import React from "react";

import ChartBar from "./ChartBar";

import "./Chart.css";

// We want our chart component to be such that it will be plotted according to the data point it receives as props.

const Chart = (props) => {
  const totalMaximum = Math.max(
    ...props.dataPoints.map((dp) => {
      return dp.value;
    })
  );

  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => {
        return (
          <ChartBar
            key={dataPoint.label}
            value={dataPoint.value}
            maxValue={totalMaximum}
            label={dataPoint.label}
          />
        );
      })}
    </div>
  );
};

export default Chart;
