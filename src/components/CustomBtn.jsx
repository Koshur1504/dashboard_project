import React from "react";
import "./custombtn.css";

const CustomBtn = ({
  icon = false,
  text = false,
  type = false,
  onClick,
  disabled,
}) => {
  const handleclick = () => {
    (onClick && onClick())
  };
  return (
    <>
      {!type && (
        <button
          onClick={() => handleclick()}
          className={`custom-btn ${disabled && "disabled"}`}
        >
          {icon && <img src={icon} alt="" />}
          {text && <p>{text}</p>}
        </button>
      )}
      {type === "signin" && (
        <button
          onClick={() => handleclick()}
          className={`signin-btn ${disabled && "disabled"}`}
        >
          {text && <p>{text}</p>}
        </button>
      )}
    </>
  );
};

export default CustomBtn;
