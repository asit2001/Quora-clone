import { Link } from "react-router-dom";
import { Plus } from "../Icons";
import "./Styles/SideBar.css";
function SideBar() {
  return (
    <div className="side-bar">
      <div className="upper-panel">
        <div className="bar">
          <Plus />
          <p>Create a Space</p>
        </div>
        <div className="bar">
          <img
            className="bar-icon"
            src="https://qph.cf2.quoracdn.net/main-thumb-t-951-100-N3P1sk6vsq72as9qqwA30zUMvxgBPWJ1.jpeg"
            alt="Math"
          />
          <p>Mathematics</p>
        </div>
        <div className="bar">
          <img
            className="bar-icon"
            src="https://qph.cf2.quoracdn.net/main-thumb-t-931-100-c8WCPwZ9qPsh5zLGQ5wHh1ddxtc9Cch7.jpeg"
            alt="science"
          />
          <p>Science</p>
        </div>
        <div className="bar">
          <img
            className="bar-icon"
            src="https://qph.cf2.quoracdn.net/main-thumb-t-2177-100-JiR07D1TQSfeQzRvWXomVaY4Poj2f8Yb.jpeg"
            alt="Technology"
          />
          <p>Technology</p>
        </div>
        <div className="bar">
          <img
            className="bar-icon"
            src="https://qph.cf2.quoracdn.net/main-thumb-t-1393081-100-ehjlsiwapdqhrwojxumsowmqctapbgfx.jpeg"
            alt="Historical"
          />
          <p>Historical</p>
        </div>
        <div className="bar">
          <img
            className="bar-icon"
            src="https://qph.cf2.quoracdn.net/main-thumb-t-236216-100-xjbypdjmbdpsbsspidupljqjwarbnswz.jpeg"
            alt="Fetuses"
          />
          <p>Fetuses</p>
        </div>
        <div className="bar">
          <img
            className="bar-icon"
            src="https://qph.cf2.quoracdn.net/main-thumb-t-3711-100-wkcgllpjwevqcbkmvoemfnvnbpkltyzb.jpeg"
            alt="Anime"
          />
          <p>Anime</p>
        </div>
        <div className="bar">
          <img
            className="bar-icon"
            src="https://qph.cf2.quoracdn.net/main-thumb-t-438778-100-zterdpriqklxsvmoclnnjudspgerddek.jpeg"
            alt="Naruto"
          />
          <p>Naruto</p>
        </div>
      </div>
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
          <span>Acceptable Use</span>
        </Link>
        <Link to={""}>
          <span>Businesses</span>
        </Link>
        <Link to={""}>
          <span>Press</span>
        </Link>
        <Link to={""}>
          <span>Your Ad Choices</span>
        </Link>
        <Link to={""}>
          <span>Grievance Officer</span>
        </Link>
      </div>
    </div>
  );
}

export default SideBar;
