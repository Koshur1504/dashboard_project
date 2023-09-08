import React from "react";
import "./profileform.css";
import ModalFormBtn from "./ModalFormBtn";

const ProfileForm = ({ setPage, setProfileData,profileData }) => {
  const submitFn = (e) => {
    e.preventDefault();
    setPage(2);
  };
  const handleInput = (e) => {
    setProfileData(old=> {
      return {...old,[e.target.name]:e.target.value}
    })
  };
  
  return (
    <form className="basic" onSubmit={(e) => submitFn(e)}>
      <label htmlFor="name">Enter Name*</label>
      <input
        name="name"
        type="text"
        placeholder="Eg. John Doe"
        required
        onChange={(e) => handleInput(e)}
        value={profileData.name}
      />
      <label htmlFor="email">Enter Email*</label>
      <input
        name="email"
        type="email"
        placeholder="Eg. John@xyz.com"
        required
        onChange={(e) => handleInput(e)}
        value={profileData.email}
      />
      <label htmlFor="phone">Enter Phone*</label>
      <input
        name="phone"
        type="text"
        placeholder="Eg. 9123456789 "
        required
        onChange={(e) => handleInput(e)}
        value={profileData.phone}
      />
      <div className="button">
        <ModalFormBtn type="submit" text="Next" />
      </div>
    </form>
  );
};

export default ProfileForm;
