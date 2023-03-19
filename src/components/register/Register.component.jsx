import React, { useState } from "react";
import { Form, Link, useNavigate } from "react-router-dom";
import {ToastContainer } from "react-toastify";
import LogInInput from "../LogRegInput";
import {
  ToolTipError,
  validateAlreadyRegisteredEmail,
  validateEmail,
  validateName,
  validatePassword,
} from "../../utils/validation";
import { showErrorToast } from "../../utils/toastError";

import logo from "../../assets/images/logo.svg";
import "./Register.style.css";

export default function Register() {
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [valid, setValid] = useState({
    validName: false,
    validEmail: false,
    validPassword: false,
  });

  function signUp(e) {
    e.preventDefault();
    if (validateAlreadyRegisteredEmail(userInfo.email)) {
      showErrorToast("Email address already registered");
    } else {
      localStorage.setItem(
        "users",
        JSON.stringify([...JSON.parse(localStorage.getItem("user")), userInfo])
      );
      navigate("/login");
    }
  }
  return (
    <div className="login">
      <div className="wrapper">
        <img src={logo} alt="logo" className="logo" />
        <ToastContainer />
        <Form action="/" className="login-form" onSubmit={signUp}>
          <label htmlFor="name">Name</label>
          <LogInInput
            id={"name"}
            type="text"
            error={ToolTipError.nameErrorToolTip}
            onChange={(e) => {
              setUserInfo({ ...userInfo, name: e.target.value });
              setValid({ ...valid, validName: validateName(e.target.value) });
            }}
            valid={valid.validName}
          />
          <label htmlFor="email">Email Address</label>
          <LogInInput
            id={"email"}
            type="email"
            error={ToolTipError.emailErrorToolTip}
            onChange={(e) => {
              setUserInfo({ ...userInfo, email: e.target.value });
              setValid({ ...valid, validEmail: validateEmail(e.target.value) });
            }}
            valid={valid.validEmail}
          />
          <label htmlFor="password">Create Password</label>
          <LogInInput
            id={"password"}
            type="password"
            error={ToolTipError.passwordErrorToolTip(userInfo.password)}
            onChange={(e) => {
              setUserInfo({ ...userInfo, password: e.target.value });
              setValid({
                ...valid,
                validPassword: validatePassword(e.target.value),
              });
            }}
            valid={valid.validPassword}
          />
          <button
            className="btn"
            disabled={
              !userInfo.validEmail ||
              !userInfo.validName ||
              !userInfo.validPassword
            }
          >
            Sign Up
          </button>
        </Form>
        <p style={{ marginTop: "60px" }}>
          Already a member?{" "}
          <Link to={"/login"} className="link">
            LogIn
          </Link>
        </p>
      </div>
    </div>
  );
}
