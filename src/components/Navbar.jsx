import React from "react";
import "./Navbar.css";
import DashboardIcon from "./assets/dashboard_icon.svg";
import TransactionsIcon from "./assets/transaction_icon.svg";
import SchedulesIcon from "./assets/schedule_icon.svg";
import UsersIcon from "./assets/user_icon.svg";
import SettingsIcon from "./assets/setting_icon.svg";
import ModalFormBtn from "./ModalFormBtn";
import logoutIcon from './assets/logout-svgrepo-com.svg'
import { useFirebase } from "../Context/firebaseContext";

const Navbar = () => {
  const firebase = useFirebase()
  const handleClick = () => { 
    firebase.signOutFn()
   }

   
  return (
    <div className="navbar">
      <div className="heading">
        <h2>Board.</h2>
      </div>
      <ul>
        <li className="active">
          <img src={DashboardIcon} alt="" />
          <h4>Dashboard</h4>
        </li>
        <li>
          <img src={TransactionsIcon} alt="" />
          <h4>Transactions</h4>
        </li>
        <li>
          <img src={SchedulesIcon} alt="" />
          <h4>Schedules</h4>
        </li>
        <li>
          <img src={UsersIcon} alt="" />
          <h4>Users</h4>
        </li>
        <li>
          <img src={SettingsIcon} alt="" />
          <h4>Settings</h4>
        </li>
        <li onClick={handleClick}>
          <img src={logoutIcon} alt="" />
          <h4>Logout</h4>
        </li>
      </ul>
      <footer>
        <p>Help</p>
        <p>Contact Us</p>
        
      </footer>
    </div>
  );
};

export default Navbar;
