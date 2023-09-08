import React from "react";
import "./Signin.css";
import github from "../components/assets/github.svg";
import twitter from "../components/assets/twitter.svg";
import linkdin from "../components/assets/linkdin.svg";
import discord from "../components/assets/discord.svg";
import SigninForm from "../components/SigninForm";
import { useFirebase } from "../Context/firebaseContext";

const SignIn = () => {
  return (
    <div className="signin">
      <div className="header">
        <h2>LOGO</h2>
      </div>
      <div className="signin-left">
        <div className="board">
          <h1>Board.</h1>
        </div>
        <div className="iconcontainer">
          <img src={github} alt="" />
          <img src={twitter} alt="" />
          <img src={linkdin} alt="" />
          <img src={discord} alt="" />
        </div>
      </div>
      <div className="right">
        <SigninForm />
      </div>
    </div>
  );
};

export default SignIn;
