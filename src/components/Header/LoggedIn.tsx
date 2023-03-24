import { useRef } from "react";
import { MdSearch } from "react-icons/md";
import { Link } from "react-router-dom";
import { Tooltip } from "react-tooltip";
import { setSearch, useAppDispatch, useAppSelector } from "../../redux";
import {
  Add,
  BackIcon,
  Following,
  HomeIcon,
  HomeIconFill,
  Logo,
  Notifications,
  PenIcon,
  PenIconFill,
  Search,
  Spaces,
} from "../Icons";
import UserProfile from "./UserProfile";

function LoggedIn({ name }: { name: string }) {
  const pathname = window.location.pathname;
  const inputRef = useRef<HTMLInputElement>(null);
  const inputBoxRef = useRef<HTMLDivElement>(null);
  const dispatch = useAppDispatch();
  const search = useAppSelector((state) => state.search.value);
  return (
    <>
      <div className="sm-group">
        <Link to={""} className="icons sm-d" onClick={(e)=>{ e.preventDefault();inputBoxRef.current?.classList.add("show-search")}}>
          <Search /> Search
        </Link>
        <Link to={"/"} className="icons">
          <Logo />
        </Link>
        <Link to={"/add-question"} className="icons sm-d">
          <Add /> Add
        </Link>
      </div>
      <div className="sm-group">
        <Link className={pathname === "/" ? "icons active" : "icons"} to={"/"}>
          {pathname === "/" ? <HomeIconFill /> : <HomeIcon />}
        </Link>
        <Link className={"icons"} to={""}>
          <Following />
        </Link>
        <Link
          className={pathname === "/add-answer" ? "icons active" : "icons"}
          to={`/add-answer`}
          data-tooltip-id="answer"
        >
          {pathname === "/add-answer" ? <PenIconFill /> : <PenIcon />}
        </Link>
        <Link className={"icons"} to={""}>
          <Spaces />
        </Link>
        <Link className={"icons"} to={""}>
          <Notifications />
        </Link>
        <div
        ref={inputBoxRef}
          className="input-box"
          onClick={() => {
            inputRef.current && inputRef.current.focus();
          }}
        >
          <MdSearch className="icon" />
          <Link to={""} className="backBtn" onClick={()=>{inputBoxRef.current?.classList.remove("show-search")}}>
          <BackIcon/>
          </Link>
          <input
            type="text"
            placeholder="Search Quora"
            ref={inputRef}
            value={search}
            style={{ width: "400px" }}
            onChange={(e) => {
              dispatch(setSearch(e.target.value));
            }}
          />
        </div>
        <UserProfile name={name} />
        <Tooltip
          id="answer"
          children={<p>add answers</p>}
          variant="dark"
          className="tooltip"
        />
      </div>
    </>
  );
}

export default LoggedIn;
