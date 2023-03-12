import React from "react";
import LogRegDesign from "../components/LogRegDesign";
import Register from "../components/Register";

import "./css/LogReg.css";
function RegisterPage() {
  return (
    <div className="logIn">
      <div className="container">
        <Register />
        <LogRegDesign/>
      </div>
    </div>
  );
}

export default RegisterPage;
