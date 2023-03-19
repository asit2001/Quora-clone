import React from "react";
import LogRegDesign from "../components/LogRegDesign";
import Register from "../components/register/Register.component";

import "../assets/css/LogReg.css";
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
