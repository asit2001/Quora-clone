import { useRef } from "react";
import { MdSearch } from "react-icons/md";
import { Link } from "react-router-dom";
import { setSearch, useAppDispatch, useAppSelector } from "../../redux";
import { Logo } from "../Icons";

function NotLoggedIn() {
  const inputRef = useRef<HTMLInputElement>(null);
  const dispatch = useAppDispatch();
  const search = useAppSelector((state) => state.search.value);
  return (
    <>
      <div className="sm-group">
        <Link to={"/"} className="icons">
          <Logo />
        </Link>
        <Link className="login-btn" to={"/login"}>
          Sign In
        </Link>
      </div>
      <div className="sm-group">
        <div
          className="input-box"
          onClick={() => {
            inputRef.current && inputRef.current.focus();
          }}
        >
          <MdSearch className="icon" />
          <input
            type="text"
            placeholder="Search Quora"
            ref={inputRef}
            value={search}
            style={{ width: "66vw" }}
            onChange={(e) => {
              dispatch(setSearch(e.target.value));
            }}
          />
        </div>
        <Link className="btn" to={"/login"}>
          Sign In
        </Link>
      </div>
    </>
  );
}

export default NotLoggedIn;
