import React, { useEffect } from "react";
import "./signinform.css";
import CustomBtn from "./CustomBtn";
import googleicon from "./assets/googleicon.svg";
import appleicon from "./assets/apple.svg";
import { useFirebase } from "../Context/firebaseContext";
import { useNavigate } from "react-router-dom";
const SigninForm = () => {
  const firebase = useFirebase();
  const navigate = useNavigate()

  const handleGoogle = () => {
    firebase.signInWithGoogle();
  };

  useEffect(() => {
    if(firebase.user){
      navigate('/dashboard')
    }
   
  }, [firebase.loggedIn])
  
  return (
    <div className="signinform">
      <h2>Sign In</h2>
      <h4>Sign in to your account</h4>
      <div className="buttons">
        <CustomBtn text={"Sign in with Google"} icon={googleicon} onClick={handleGoogle}/>
        <CustomBtn text={"Sign in with Apple"} icon={appleicon} disabled/>
      </div>
      <form action="">
        <label htmlFor="email">Email address</label>
        <input name="email" type="email" placeholder="johndoe@gmail.com" disabled className="disabled"/>
        <label htmlFor="password">Password</label>
        <input name="password" type="password" placeholder="••••••••" disabled className="disabled"/>
        <a href="#" className="disabled"disabled >Forgot pasword</a>
        <CustomBtn text="Sign In" type="signin" disabled/>
      </form>
      <a href="#" className="disabled">
        Don't have an account? <span >Register here</span>
      </a>
    </div>
  );
};

export default SigninForm;
