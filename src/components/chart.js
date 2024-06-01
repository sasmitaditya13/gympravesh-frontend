import React from "react"; // Importing the React library

import Chart from "chart.js/auto"; // Importing the Chart.js library

import { Line } from "react-chartjs-2"; // Importing the Line component from the react-chartjs-2 library

// Setting up the labels for the x-axis of the chart
const labels = ["6 AM", "7 AM", "8 AM", "9 AM", "10 AM", "11 AM" , "12PM"];

// Setting up the data for the chart, including the labels and datasets
const data = {
  labels: labels,
  datasets: [
    {
      label: "UG", // Setting up the label for the dataset
      backgroundColor: "rgba(202, 83, 83, 0.2)", // Setting up the background color for the dataset
      borderColor: "rgba(202, 83, 83, 1)", // Setting up the border color for the dataset
      data: [0, 10, 5, 2, 20, 30, 45], // Setting up the data for the dataset
      lineTension: 0.25,
      fill:true,
    },
    {
        label: "PG and Staff", // Setting up the label for the dataset
        backgroundColor: "rgba(83, 145, 202, 0.2)", // Setting up the background color for the dataset
        borderColor: "rgba(83, 145, 202, 1)", // Setting up the border color for the dataset
        data: [0, 76, 9, 14, 24, 10, 20], // Setting up the data for the dataset
        lineTension: 0.25,
        fill:true,
      },

  ],
};

// Defining the LineChart component
const LineChart = () => {
  return (
    <div>
      <Line data={data} />
    </div>
  );
};

export default LineChart; // Exporting the LineChart component as the default export of the module
