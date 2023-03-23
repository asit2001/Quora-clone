import { useEffect } from "react";
import {useLocation} from 'react-router-dom'
import { useAppSelector, useAppDispatch, setSearch } from "../../redux";

import { userType } from "../../types";
import SearchQuestions from "./SearchQuestions";
import LoggedIn from "./LoggedIn";
import NotLoggedIn from "./NotLoggedIn";

import "./styles/Header.style.css";

const Header: React.FC<{userInfo:userType}> = ({userInfo}) => {
  const {pathname} = useLocation()
  
  const dispatch = useAppDispatch();
  const search = useAppSelector((state) => state.search.value);

  useEffect(() => {
    dispatch(setSearch(""));
  }, [pathname,dispatch]);
  return (
    <header className={search.length ? "header" : ""}>
      <nav className="nav active">
        {userInfo ? <LoggedIn name={userInfo.name} /> : <NotLoggedIn />}
      </nav>
      <SearchQuestions />
    </header>
  );
};
export default Header;
