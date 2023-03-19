import React, { useEffect, useRef, useState } from "react";
import { MdSearch } from "react-icons/md";
import { Link } from "react-router-dom";
import { Tooltip } from "react-tooltip";

import "./Header.style.css";
import logo from "../../assets/images/logo.svg";
import { PenIcon, HomeIcon } from "../Icon";
import UserProfile from "./UserProfile.component";
import SearchQuestions from "../questions/SearchQuestions.component";


export default function Header() {
  const pathname = window.location.pathname;

  const inputRef = useRef();
  const [userInfo] = useState(JSON.parse(localStorage.getItem("user")));

  const [search, setSearch] = useState("");

  useEffect(()=>{
    setSearch("");
  },[pathname])
  return (
    <header className={search.length ? "header" : ""}>
      <nav className="nav active">
        <Link to={"/"}>
          <img src={logo} className="logo" alt="logo" />
        </Link>
        {userInfo && (
          <>
            <Link
              className={pathname === "/" ? "icons active" : "icons"}
              to={"/"}
            >
              <HomeIcon />
            </Link>
            <Link
              className={pathname === "/add-answer" ? "icons active" : "icons"}
              to={`/add-answer`}
              data-tooltip-id="answer"
            >
              <PenIcon />
            </Link>
          </>
        )}
        <div
          className="input-box"
          onClick={() => {
            inputRef.current.focus();
          }}
        >
          <MdSearch className="icon" />
          <input
            type="text"
            placeholder="Search Quora"
            ref={inputRef}
            value={search}
            style={userInfo ? { width: "400px" } : { width: "66vw" }}
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          />
        </div>
        {userInfo ? (
          <UserProfile name={userInfo.name} />
        ) : (
          <Link className="btn" to={"/login"}>
            Sign In
          </Link>
        )}
        <Tooltip id="answer" children={<p>add answers</p>} variant="info" />
      </nav>
      <SearchQuestions search={search} setSearch={setSearch}/>
    </header>
  );
}
