import React, { useState } from "react";
import { Form, Link} from "react-router-dom";
import logo from "../logo.svg";
import "react-tooltip/dist/react-tooltip.css";
import "./Register.css";
import LogInInput from "./LogRegInput";
function LogIn() {
  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    password: "",
    validName: false,
    validEmail: false,
    validPassword: false,
  });
  return (
    <div className="login">
      <div className="wrapper">
        <img src={logo} alt="logo" className="logo" />
        <Form action="/" className="login-form">
          <label htmlFor="name">Name</label>
          <LogInInput
            id={"name"}
            type="text"
            error={<p>Name should contain minimum 3 characters</p>}
            onChange={(e) => {
              setUserInfo({
                ...userInfo,
                name: e.target.value,
                validName: new RegExp(/[a-zA-Z]{3,}/).test(e.target.value),
              });
            }}
            valid={userInfo.validName}
          />
          <label htmlFor="email">Email Address</label>
          <LogInInput
            id={"email"}
            type="email"
            error={<p>Invalid email address</p>}
            onChange={(e) => {
              setUserInfo({
                ...userInfo,
                email: e.target.value,
                validEmail: new RegExp(
                  /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g
                ).test(e.target.value),
              });
            }}
            valid={userInfo.validEmail}
          />
          <label htmlFor="password">Create Password</label>
          <LogInInput
            id={"password"}
            type="password"
            error={
              <ul>
                <li>Minimum length of password is 8</li>
                <li>includes lowerCase latter</li>
                <li>includes upperCase latter</li>
                <li>includes numbers</li>
                <li>includes special charterers"</li>
              </ul>
            }
            onChange={(e) => {
              setUserInfo({
                ...userInfo,
                password: e.target.value,
                validPassword: new RegExp(
                  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm
                ).test(e.target.value),
              });
            }}
            valid={userInfo.validPassword}
          />
          <button>Sign Up</button>
        </Form>
        <p style={{marginTop:"60px"}}>Already a member? <Link to={'/login'} className='link'>LogIn</Link></p>
      </div>
    </div>
  );
}

export default LogIn;
