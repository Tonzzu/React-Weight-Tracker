import React from "react";
import { LineChart } from "react-chartkick";
import "chart.js";

function WeightChart(props) {
  return (
    <LineChart
      // width={"650px"}
      // height={"400px"}
      xtitle="Date"
      ytitle="Weight"
      suffix="kg"
      messages={{ empty: "No weight data" }}
      colors={["rgb(109, 109, 235)"]}
      data={{ ...props.weightList }}
    />
  );
}

export default WeightChart;
