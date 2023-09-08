import React, { useState } from "react";
import ModalFormBtn from "./ModalFormBtn";
import { useFirebase } from "../Context/firebaseContext";

const ContactForm = ({ setPage, setProfileData, profileData,toggleModal }) => {
  const firebase =useFirebase()
  const [error, setError] = useState(null)
  const submitFn = async(e) => {
    e.preventDefault();
    
    try {
      await firebase.writeProfile({profileData})
    } catch (error) {
      console.log(error)
      setError(error)
    }
    toggleModal()
    setPage(1);
  };
  const handleInput = (e) => {
    setProfileData((old) => {
      return { ...old, [e.target.name]: e.target.value };
    });
  };

  return (
    <form className="social basic" onSubmit={(e) => submitFn(e)}>
      <label htmlFor="ig">
        Instagram Link <span>(Optional)</span>{" "}
      </label>
      <input
        name="ig"
        type="text"
        placeholder="Eg. ..instagram.com/username"
        onChange={(e) => handleInput(e)}
        value={profileData.ig}
      />
      <label htmlFor="yt">
        Youtube Link <span>(Optional)</span>
      </label>
      <input
        name="yt"
        type="text"
        placeholder="Eg. ..youtube/username"
        onChange={(e) => handleInput(e)}
        value={profileData.yt}
      />
      <div className="button">
        <ModalFormBtn white text="Back" onClick={() => setPage(1)} />
        <ModalFormBtn text="Done" type="submit" />
      </div>
    </form>
  );
};

export default ContactForm;
