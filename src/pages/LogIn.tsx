import {Link } from "react-router-dom";
import { Logo } from "../components/Icons";
import MiddleSection from "../components/LogIn/MiddleSection";
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
          <div className="lowerPanel">
            <Link className="lowerPanel__link" to={""}>
              <span>About</span>
            </Link>
            <Link className="lowerPanel__link" to={""}>
              <span>Careers</span>
            </Link>
            <Link className="lowerPanel__link" to={""}>
              <span>Terms</span>
            </Link>
            <Link className="lowerPanel__link" to={""}>
              <span>Privacy</span>
            </Link>
            <Link className="lowerPanel__link" to={""}>
              <span>Contact</span>
            </Link>
            <Link className="lowerPanel__link" to={""}>
              <span>Languages</span>
            </Link>
            <Link className="lowerPanel__link" to={""}>
              <span>Your Ad Choices</span>
            </Link>
            <Link className="lowerPanel__link" to={""}>
              <span>&copy; Quora Clone, Inc. 2023</span>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}

export default LogIn;
