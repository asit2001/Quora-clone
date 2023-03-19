import React, { useState } from "react";
import { Form, Link, useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import LogInInput from "./LogRegInput";
import { emailErrorToolTip, validateEmail, validUser } from "../utils/validation";
import { showErrorToast } from "../utils/toastError";

import logo from "../assets/images/logo.svg";

function LogIn() {
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState({ email: "", password: "" });

  function login(e) {
    e.preventDefault();
    const user = validUser(userInfo.email, userInfo.password);
    if (user.length) {
      localStorage.setItem("user", JSON.stringify(user[0]));
      navigate("/");
    } else {
      showErrorToast("Invalid email and password");
    }
  }
  return (
    <div className="login">
      <div className="wrapper">
        <img src={logo} alt="logo" className="logo" />
        <ToastContainer />
        <Form
          action="/"
          className="login-form"
          onSubmit={login}
          style={{ height: "90%" }}
        >
          <label htmlFor="email">Email Address</label>
          <LogInInput
            id={"email"}
            type="email"
            error={emailErrorToolTip}
            valid={validateEmail(userInfo.email)}
            onChange={(e) => {
              setUserInfo({
                ...userInfo,
                email: e.target.value,
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
                password: e.target.value,
              });
            }}
          />
          <button
            className="btn"
            disabled={
              !validateEmail(userInfo.email) || !userInfo.password.length
            }
          >
            Log In
          </button>
        </Form>
        <p style={{ marginTop: "10px" }}>
          Don't have an account yet?{" "}
          <Link to={"/register"} className="link">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
}

export default LogIn;
