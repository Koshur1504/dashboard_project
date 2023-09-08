import React from "react";
import "./topproducts.css";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

const TopProducts = ({ data }) => {
  let { basictees, custompant, superhoodie } = data;
 
  let graphData = {
    labels: ["Basic Tees", "Custom Short Pants", "Super Hoodies"],
    datasets: [
      {
        label: "Guest",
        data: [basictees, custompant, superhoodie],
        backgroundColor: ["#98D89E", "#F6DC7D", "#EE8484"],
        borderJoinStyle: "round",
      },
    ],
  };
  let options = {
    responsive: true,
    maintainAspectRatio: false,
    cutout: "75%",

    plugins: {
      legend: {
        display: false,
        pointStyle: true,
        position: "right",
        align: "start",
        maxHeight: 100,
        labels: {
          usePointStyle: true,
          padding: 10,
        },
      },
    },
  };

  return (
    <div className="topproduct">
      <div className="heading">
        <h3>Top products</h3>
        <p>May-June 2021</p>
      </div>
      <div className="topproductchart">
        <div className="chart">
          <div style={{height:'100%', marginRight:'10px'}}>
            <Doughnut data={graphData} options={options} />
          </div>
        </div>
        <div className="legends">
          {graphData.labels.map((item, idx) => (
            <div className="legend-item" key={item}>
              <h3 key={item}>
                <img
                  src=""
                  alt=""
                  style={{
                    backgroundColor: `${graphData.datasets[0].backgroundColor[idx]}`,
                  }}
                />
                {item}
              </h3>
              <p>{graphData.datasets[0].data[idx]}%</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopProducts;
