import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
// Chart is the main chart object.
// RadialLinearScale is the plotdata around the circles.
// ArcElment is the element used to draw the segments in PolarArea Charts.
// Tooltip and Legend are plugins is the hover effect for the chart.

// Register the components to make it work.
ChartJS.register(ArcElement, Tooltip, Legend);

const Chart = ({ scores }) => {
  const chartData = {
    labels: [
      "Overall Score",
      "Environment Score",
      "Performance Score",
      "Progress Score",
    ],
    datasets: [
      {
        label: "Scores",
        data: scores,
        backgroundColor: [
          "rgba(255, 99, 132, 0.5)",
          "rgba(54, 162, 235, 0.5)",
          "rgba(255, 206, 86, 0.5)",
          "rgba(75, 192, 192, 0.5)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div>
      <h2 className="font-bold">Overall Score Breakdown: </h2>
      <div style={{ width: "500px", height: "500px" }}>
        <Pie data={chartData} />
      </div>
    </div>
  );
};
export default Chart;
