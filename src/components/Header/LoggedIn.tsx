import { useRef } from "react";
import { MdSearch } from "react-icons/md";
import { Link } from "react-router-dom";
import { Tooltip } from "react-tooltip";
import { setSearch, setShowQns, useAppDispatch, useAppSelector } from "../../redux";
import {
  Add,
  BackIcon,
  Following,
  HomeIcon,
  HomeIconFill,
  Logo,
  Notifications,
  NotificationsFill,
  PenIcon,
  PenIconFill,
  Search,
  Spaces,
  SpacesFill,
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
        <Link to={""} onClick={()=>{dispatch(setShowQns(true))}} className="icons sm-d">
          <Add /> Add
        </Link>
      </div>
      <div className="sm-group">
        <Link className={pathname === "/" ? "icons active" : "icons"} to={"/"}>
          {pathname === "/" ? <HomeIconFill /> : <HomeIcon />}
        </Link>
        <Link className={pathname === "/following" ? "icons active" : "icons"} to={"/following"} data-tooltip-id="following">
          <Following />
        </Link>
        <Link
          className={pathname === "/answer" ? "icons active" : "icons"}
          to={`/answer`}
          data-tooltip-id="answer"
        >
          {pathname === "/answer" ? <PenIconFill /> : <PenIcon />}
        </Link>
        <Link className={pathname === "/spaces" ? "icons active" : "icons"} to={"/spaces"} data-tooltip-id="spaces">
          {pathname === "/spaces" ?<SpacesFill/> :<Spaces />}
        </Link>
        <Link className={pathname === "/notifications" ? "icons active" : "icons"} to={"/notifications"} data-tooltip-id="notifications" >
        {pathname === "/notifications" ? <NotificationsFill /> : <Notifications />}
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
        <UserProfile/>
        <Tooltip
          id="answer"
          children={<p>add answers</p>}
          variant="dark"
          className="tooltip"
        />
        <Tooltip
          id="following"
          children={<p>following</p>}
          variant="dark"
          className="tooltip"
        />
        <Tooltip
          id="spaces"
          children={<p>spaces</p>}
          variant="dark"
          className="tooltip"
        />
        <Tooltip
          id="notifications"
          children={<p>notifications</p>}
          variant="dark"
          className="tooltip"
        />
      </div>
    </>
  );
}

export default LoggedIn;
