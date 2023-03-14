import React from "react";
import LogIn from "../components/LogIn";
import LogRegDesign from "../components/LogRegDesign";

import "../assets/css/LogReg.css";
function LogInPage() {
  return (
    <div className="logIn">
      <div className="container">
        <LogIn />
        <LogRegDesign/>
      </div>
    </div>
  );
}

export default LogInPage;
