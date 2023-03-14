import React, { useRef, useState } from "react";
import { MdSearch } from "react-icons/md";
import { Link } from "react-router-dom";
import {Tooltip} from 'react-tooltip'
import "../assets/css/Header.css";
import logo from "../assets/images/logo.svg";
function Header() {
  const inputRef = useRef();
  const [userInfo,setUserInfo] = useState(JSON.parse(localStorage.getItem("user")));
  return (
    <nav className="nav">
      <Link to={"/"}>
        <img src={logo} className="logo" alt="logo"/>
      </Link>
      {userInfo && (
        <>
          <Link className={window.location.pathname === '/' ?'icons active':'icons'} to={'/'}>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18 21.25H14.28C13.87 21.25 13.53 20.91 13.53 20.5V16.51C13.53 15.73 12.9 15.1 12.12 15.1H12.02C11.29 15.14 10.71 15.76 10.71 16.51V20.5C10.71 20.91 10.37 21.25 9.96 21.25H6C5.59 21.25 5.25 20.91 5.25 20.5V12.75H2.5C2.19 12.75 1.92 12.56 1.8 12.28C1.69 11.99 1.76 11.67 1.99 11.46L11.6 2.46C11.89 2.19 12.34 2.19 12.63 2.47L22.02 11.47C22.24 11.68 22.31 12.01 22.2 12.29C22.09 12.57 21.81 12.76 21.5 12.76H18.75V20.51C18.75 20.91 18.41 21.25 18 21.25ZM15.03 19.75H17.25V12C17.25 11.59 17.59 11.25 18 11.25H19.63L12.1 4.03L4.4 11.25H6C6.41 11.25 6.75 11.59 6.75 12V19.75H9.2V16.51C9.2 14.97 10.41 13.69 11.95 13.6H12.09C13.72 13.6 15.02 14.91 15.02 16.51V19.75H15.03Z"
                fill="#666666"
                className="icon_svg-fill_as_stroke"
              ></path>
            </svg>
          </Link>
          <Link className={window.location.pathname === '/add-answer' ?'icons active':'icons'} to={`/add-answer`} data-tooltip-id="answer">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20.5 11.75C20.09 11.75 19.75 12.09 19.75 12.5V19.75H12.5C12.09 19.75 11.75 20.09 11.75 20.5C11.75 20.91 12.09 21.25 12.5 21.25H20.5C20.91 21.25 21.25 20.91 21.25 20.5V12.5C21.25 12.09 20.91 11.75 20.5 11.75Z"
                fill="#636466"
                className="icon_svg-fill_as_stroke"
              ></path>
              <path
                d="M4.25 11.5V4.25H11.5C11.91 4.25 12.25 3.91 12.25 3.5C12.25 3.09 11.91 2.75 11.5 2.75H3.5C3.09 2.75 2.75 3.09 2.75 3.5V11.5C2.75 11.91 3.09 12.25 3.5 12.25C3.91 12.25 4.25 11.91 4.25 11.5Z"
                fill="#636466"
                className="icon_svg-fill_as_stroke"
              ></path>
              <path
                d="M4.05 18.11L3.6 19.46C3.51 19.73 3.58 20.03 3.78 20.23C3.92 20.37 4.11 20.45 4.31 20.45C4.39 20.45 4.47 20.44 4.55 20.41L5.9 19.96L4.05 18.11Z"
                fill="#636466"
                className="icon_svg-fill_as_stroke"
              ></path>
              <path
                d="M19.65 4.35001C18.62 3.32001 16.83 3.32001 15.8 4.35001L5.17002 14.98C5.09002 15.06 5.03002 15.16 4.99002 15.27L4.58002 16.51L7.49002 19.42L8.74002 19C8.85002 18.96 8.95002 18.9 9.03002 18.82L19.65 8.21001C20.16 7.70002 20.45 7.01002 20.45 6.28001C20.45 5.55001 20.16 4.87001 19.65 4.35001Z"
                fill="#636466"
                className="icon_svg-fill_as_stroke"
              ></path>
            </svg>
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
          style={userInfo ? { width: "400px" } : {width:'66vw'}}
        />
      </div>
      {userInfo ? (
        <>
          <img
            src={`https://i.pravatar.cc/150?u=${userInfo?.email}`}
            alt="user avatar"
            className="avatar"
          />
          <Link className="btn addQuestion" to={'/add-question'}>Add Questions</Link>
        </>
      ) : (
        <Link className="btn" to={'/login'}>Sign In</Link>
      )}
      <Tooltip id='answer' children={<p>add answers</p>} variant="info"/>
    </nav>
  );
}

export default Header;
