import React from "react";
import "./WeightChart.css";
import { LineChart } from "react-chartkick";
import "chart.js";

function WeightChart(props) {
  return (
    <LineChart
      width={"600px"}
      height={"400px"}
      data={{ ...props.weightList }}
    />
  );
}

export default WeightChart;
