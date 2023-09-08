import React from "react";
import "./activity.css";
import { Bar } from "react-chartjs-2";
import {
  chart as chartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
  scales,
} from "chart.js/auto";

const Activity = ({ data }) => {
  let { total_revenues, total_transactions, total_likes, total_users,guest,user } = data;
  
  let chartData = {
    labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
    datasets: [
      {
        label: "Guest",
        data: [guest?.week1, guest?.week2, guest?.week3,guest?.week4],
        backgroundColor: "#EE8484",
        borderRadius: 5,
        barPercentage: 0.7,
        categoryPercentage: 0.4,
        borderSkipped: false,
      },
      {
        label: "User",
        data: [user?.week1, user?.week2, user?.week3,user?.week4],
        backgroundColor: "#98D89E",
        borderRadius: 5,
        barPercentage: 1,
        categoryPercentage: 0.28,
        borderSkipped: false,
      },
    ],
  };
  let options = {
    maintainAspectRatio: false,
    scales: {
      x: {
        grid: {
          display: false, 
        },
      },
    },
    layout: {
      padding: {
        left: 20,
        right: 20,
      },
    },

    plugins: {
      legend: {
        display: true,
        position: "top", // Adjust the position as needed
        align: "end", // Adjust the alignment as needed
        labels: {
          usePointStyle: true,
        },
      },
    },
  };

  return (
    <div className="activity">
      <h3>Activities</h3>
      <p>May - June 2021</p>
      <div className="chart">
        <Bar data={chartData} options={options}></Bar>
      </div>
    </div>
  );
};

export default Activity;
