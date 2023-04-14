import { Link } from "react-router-dom";
import { Plus } from "../Icons";
import "./Styles/SideBar.css";
function SideBar() {
  return (
    <div className="side-bar">
      <div className="upperPanel">
        <div className="upperPanel__bar">
          <Plus />
          <p>Create a Space</p>
        </div>
        <Link to={"/question/What-is-the-answer-to-30401234"} className="upperPanel__bar">
          <img
            className="upperPanel__bar__icon"
            src="https://qph.cf2.quoracdn.net/main-thumb-t-951-100-N3P1sk6vsq72as9qqwA30zUMvxgBPWJ1.jpeg"
            alt="Math"
          />
          <p>Mathematics</p>
        </Link>
        <Link to={"/question/How-has-science-proven-gravity"} className="upperPanel__bar">
          <img
            className="upperPanel__bar__icon"
            src="https://qph.cf2.quoracdn.net/main-thumb-t-931-100-c8WCPwZ9qPsh5zLGQ5wHh1ddxtc9Cch7.jpeg"
            alt="science"
          />
          <p>Science</p>
        </Link>
        <Link to={"/question/How-do-inventors-innovate-large-bulky-technology-and-make-it-smaller-and-more-effective"} className="upperPanel__bar">
          <img
            className="upperPanel__bar__icon"
            src="https://qph.cf2.quoracdn.net/main-thumb-t-2177-100-JiR07D1TQSfeQzRvWXomVaY4Poj2f8Yb.jpeg"
            alt="Technology"
          />
          <p>Technology</p>
        </Link>
        <Link to={"/question/What-are-some-interesting-examples-of-photographs-that-show-important-historical-figures-in-unexpected-places-or-companies"} className="upperPanel__bar">
          <img
            className="upperPanel__bar__icon"
            src="https://qph.cf2.quoracdn.net/main-thumb-t-1393081-100-ehjlsiwapdqhrwojxumsowmqctapbgfx.jpeg"
            alt="Historical"
          />
          <p>Historical</p>
        </Link>
        <Link to={"/question/Do-you-think-that-every-aborted-fetus-lives-on-in-the-afterlife-Are-you-worried-about-where-unborn-fetuses-go-after-they-die-Is-this-why-you-oppose-abortion"} className="upperPanel__bar">
          <img
            className="upperPanel__bar__icon"
            src="https://qph.cf2.quoracdn.net/main-thumb-t-236216-100-xjbypdjmbdpsbsspidupljqjwarbnswz.jpeg"
            alt="Fetuses"
          />
          <p>Fetuses</p>
        </Link>
        <Link to={"/question/Who-would-win-in-a-3v1-Luffy-Naruto-and-Ichigo-at-their-strongest-or-Goku-in-the-Saiyan-Saga"} className="upperPanel__bar">
          <img
            className="upperPanel__bar__icon"
            src="https://qph.cf2.quoracdn.net/main-thumb-t-3711-100-wkcgllpjwevqcbkmvoemfnvnbpkltyzb.jpeg"
            alt="Anime"
          />
          <p>Anime</p>
        </Link>
        <Link to={"/question/Did-Hinata-ever-have-a-crush-on-Naruto-when-they-were-young"} className="upperPanel__bar">
          <img
            className="upperPanel__bar__icon"
            src="https://qph.cf2.quoracdn.net/main-thumb-t-438778-100-zterdpriqklxsvmoclnnjudspgerddek.jpeg"
            alt="Naruto"
          />
          <p>Naruto</p>
        </Link>
      </div>
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
          <span>Acceptable Use</span>
        </Link>
        <Link className="lowerPanel__link" to={""}>
          <span>Businesses</span>
        </Link>
        <Link className="lowerPanel__link" to={""}>
          <span>Press</span>
        </Link>
        <Link className="lowerPanel__link" to={""}>
          <span>Your Ad Choices</span>
        </Link>
        <Link className="lowerPanel__link" to={""}>
          <span>Grievance Officer</span>
        </Link>
      </div>
    </div>
  );
}

export default SideBar;
