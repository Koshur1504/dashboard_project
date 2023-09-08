import React from "react";
import "./DashboardHeader.css";
import searchIcon from "./assets/Searchicon.svg";
import bellIcon from "./assets/Bell.svg";
import avatar from "./assets/avatar.png";
import { useFirebase } from "../Context/firebaseContext";
import openburger from "./assets/burger-menu-svgrepo-com.svg";
import closeburger from "./assets/list-cross-minimalistic-svgrepo-com.svg";

const DashboardHeader = ({show,setShow}) => {
  const firebase = useFirebase();
  return (
    <div className="header">
      <img className="burgerIcon" src={`${show ? closeburger : openburger}`} alt="" onClick={()=> setShow(!show)}/>
      
      <div className="heading">
        <h3> Dashboard</h3>
      </div>
      <div className="others">
        <div className="search">
          <input type="text" placeholder="Search..." />
          <img src={searchIcon} alt="" />
        </div>

        <img className="bellIcon" src={bellIcon} alt="" />
        <div
          className="avatar"
          style={{
            backgroundImage: `url(${
              firebase.user?.photoURL ? firebase.user?.photoURL : avatar
            })`,
          }}
        >
          <img style={{ backgroundColor: "red" }} alt="" />
        </div>
      </div>
    </div>
  );
};

export default DashboardHeader;
