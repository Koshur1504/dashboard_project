import React, { useState } from "react";
import "./modal.css";
import crossIcon from "./assets/crossIcon.svg";
import ProfileForm from "./ProfileForm";
import ContactForm from "./ContactForm";
const Modal = ({ toggleModal }) => {
  const [page, setPage] = useState(1);
  const [profileData, setProfileData] = useState({});
  

  return (
    <div className="modal">
      <div className="modal-content ">
        <div className="header">
          <h3>Add New Profile</h3>
          <img src={crossIcon} alt="" onClick={toggleModal} />
        </div>
        <div className="selector">
          <h4 className={`${page === 1 && "active"}`}>Basic</h4>
          <h4 className={`${page === 2 && "active"}`}>Contact</h4>
        </div>
        {page === 1 && (
          <ProfileForm setPage={setPage} setProfileData={setProfileData} profileData={profileData} />
        )}
        {page === 2 && (
          <ContactForm setPage={setPage} setProfileData={setProfileData} profileData={profileData} toggleModal={toggleModal}/>
        )}
      </div>
    </div>
  );
};

export default Modal;
