import React, { useState } from "react";
import { Form, Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-tooltip/dist/react-tooltip.css";
import "react-toastify/dist/ReactToastify.css";
import logo from "../assets/images/logo.svg";
import "../assets/css/Register.css";
import LogInInput from "./LogRegInput";
function LogIn() {
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
  });
  function login(e) {
    e.preventDefault();
    if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(userInfo.email)) {
      toast.error("email required!", {
        position: "bottom-center",
        autoClose: 3000,
        closeOnClick: true,
        theme: "light",
      });
      return;
    } else if (!userInfo.password.length) {
      toast.error("Password required!", {
        position: "bottom-center",
        autoClose: 3000,
        closeOnClick: true,
        theme: "light",
      });
      return;
    }
    const registerUser = JSON.parse(localStorage.getItem("registerUser"));
    if (
      registerUser?.email === userInfo.email &&
      registerUser?.password === userInfo.password
    ) {
      localStorage.setItem("user", JSON.stringify(registerUser));
      navigate("/");
    } else {
      toast.error("Invalid email and password", {
        position: "top-right",
        autoClose: 3000,
        closeOnClick: true,
        theme: "light",
      });
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
          <button className="btn">Log In</button>
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
