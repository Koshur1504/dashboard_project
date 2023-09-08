import React, { useEffect, useState } from "react";
import "./addprofile.css";
import plusIcon from "./assets/pluIcon.svg";
import Modal from "./Modal";
import whatsAppIcon from "./assets/whatsapp.svg";
import igIcon from "./assets/ig.svg";
import mailIcon from "./assets/Mail.svg";
import ytIcon from "./assets/yt.svg";
import { useFirebase } from "../Context/firebaseContext";

const AddProfile = () => {
  const firebase = useFirebase();
  const [profileData, setProfileData] = useState("");

  const updateProfile = () => {
    setProfileData((old) => {
      return {
        name: firebase.profile?.name
          ? firebase.profile.name
          : firebase.user?.displayName,
        number: firebase.profile?.number
          ? firebase.profile.number
          : "not added",
        ig: firebase.profile?.ig ? firebase.profile.ig : "not added",
        email: firebase.profile?.email ? firebase.profile.email : "not added",
        yt: firebase.profile?.yt ? firebase.profile.yt : "not added",
      };
    });
  };
  useEffect(() => {
    updateProfile();
  }, [firebase.profile]);

  const [modal, setModal] = useState(false);
  const toggleModal = () => {
    setModal(!modal);
  };

  return (
    <div className="addprofile-">
      {profileData.number !== "not added" ? (
        <div className="profile-card">
          <h3>{profileData.name}</h3>
          <div className="items">
            <div className="topShelf">
              <p>
                {" "}
                <img className="phone" src={whatsAppIcon} alt="" />
                {profileData.number}{" "}
              </p>
              <p>
                {" "}
                <img className="mail" src={mailIcon} alt="" />
                {profileData.email}{" "}
              </p>
            </div>
            <div className="bottomShelf">
              
              <p>
                {" "}
                <img className="ig" src={igIcon} alt="" />
                {profileData.ig}{" "}
              </p>
              <p>
                {" "}
                <img className="yt" src={ytIcon} alt="" />
                {profileData.yt}{" "}
              </p>
            </div>
          </div>
        </div>
      ) : (
        <>
          <button className="content" onClick={toggleModal}>
            <img src={plusIcon} alt="" />
            <p>Add profile</p>
          </button>
          {modal && <Modal toggleModal={toggleModal} />}
        </>
      )}
    </div>
  );
};

export default AddProfile;
