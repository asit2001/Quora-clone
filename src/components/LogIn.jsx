import React, { useState } from "react";
import { Form, Link} from "react-router-dom";
import logo from "../logo.svg";
import "react-tooltip/dist/react-tooltip.css";
import "./Register.css";
import LogInInput from "./LogRegInput";
function LogIn() {
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: ""
  });
  return (
    <div className="login">
      <div className="wrapper">
        <img src={logo} alt="logo" className="logo" />
        <Form action="/" className="login-form">
          <label htmlFor="email">Email Address</label>
          <LogInInput
            id={"email"}
            type="email"
            onChange={(e) => {
              setUserInfo({
                ...userInfo,
                email: e.target.value
              });
            }}
          />
          <label htmlFor="password">Create Password</label>
          <LogInInput
            id={"password"}
            type="password"
            onChange={(e) => {
              setUserInfo({
                ...userInfo,
                password: e.target.value
              });
            }}
          />
          <button>Log In</button>
        </Form>
        <p style={{marginTop:"60px"}}>Don't have an account yet? <Link to={'/register'} className='link'>Sign Up</Link></p>
      </div>
    </div>
  );
}

export default LogIn;
