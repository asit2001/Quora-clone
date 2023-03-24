import {Link } from "react-router-dom";
import { Logo } from "../Icons/Icon";
import MiddleSection from "./MiddleSection";
import "./styles/Login.css";
function LogIn() {
  return (
    <div className="login">
      <div className="login-box">
        <section className="upper-section">
          <Logo />
          <h3 className="sub-heading">
            A place to share knowledge and better understand the world
          </h3>
        </section>
        <MiddleSection/>
        <section className="bottom-section">
          <div className="lower-panel">
            <Link to={""}>
              <span>About</span>
            </Link>
            <Link to={""}>
              <span>Careers</span>
            </Link>
            <Link to={""}>
              <span>Terms</span>
            </Link>
            <Link to={""}>
              <span>Privacy</span>
            </Link>
            <Link to={""}>
              <span>Contact</span>
            </Link>
            <Link to={""}>
              <span>Languages</span>
            </Link>
            <Link to={""}>
              <span>Your Ad Choices</span>
            </Link>
            <Link to={""}>
              <span>&copy; Quora Clone, Inc. 2023</span>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}

export default LogIn;
