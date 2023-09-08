import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import "./Dashboard.css";
import DashboardHeader from "../components/DashboardHeader";

import Activity from "../components/Activity";

import Cards from "../components/Cards";
import TopProducts from "../components/TopProducts";
import AddProfile from "../components/AddProfile";

const Dashboard = () => {
  let tempData = null;
  const [data, setData] = useState({});

  const fetchData = async () => {
    tempData = await fetch(
      "https://my.api.mockaroo.com/users.json?key=27cd9140"
    ).then((res) => (tempData = res.json()));
    setData(tempData);
  };
  useEffect(() => {
    fetchData();

    // saving free api calls

    // setData((old) => {
    //   return {
    //     id: 1,
    //     months: "14/11/2022",
    //     total_revenues: 46569,
    //     total_transactions: 2564,
    //     total_likes: 14572,
    //     total_users: 11359,
    //     guest_users: 16974,
    //     guest: {
    //       week1: 800,
    //       week2: 281,
    //       week3: 149,
    //       week4: 833,
    //     },
    //     user: {
    //       week1: 173,
    //       week2: 315,
    //       week3: 133,
    //       week4: 425,
    //     },
    //     basictees: 35,
    //     custompant: 49,
    //     superhoodie: 35,
    //   };
    // });
  }, []);

  //burger
  const [show, setShow] = useState(false);

  return (
    <div className="dashboard">
      <div className={`navigation burger ${show && "show"}`}>
        <Navbar />
      </div>

      <div className="dashboard-right">
        <DashboardHeader show={show} setShow={setShow} />
        <div className="cards">{data && <Cards data={data} />}</div>
        <div className="activities">{data && <Activity data={data} />}</div>
        <div className="bottom">
          <div className="topproducts">
            <TopProducts data={data} />
          </div>
          <div className="addprofile">
            <AddProfile />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
