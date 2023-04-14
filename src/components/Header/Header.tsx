import { useEffect, useState } from "react";
import {useLocation} from 'react-router-dom'
import { useAppSelector, useAppDispatch, setSearch } from "../../redux";

import { userType } from "../../types";
import SearchQuestions from "./SearchQuestions";
import LoggedIn from "./LoggedIn";
import NotLoggedIn from "./NotLoggedIn";

import "./styles/Header.style.css";
import AnsModel from "../model/AnsModel";
import QuestionModel from "../model/QuestionModel";

const Header = () => {
  const {pathname} = useLocation()
  const user = useAppSelector(state=>state.auth.value);
  const dispatch = useAppDispatch();
  const [search,questionId,showQnsModel] = useAppSelector((state) => [state.search.value,state.questionId.value,state.showQnsModel.value]);
  
  useEffect(() => {
    dispatch(setSearch(""));
  }, [pathname,dispatch]);
  return (
    <header className={search.length ? "header" : ""}>
      {questionId !== "" &&<AnsModel/>}
      {showQnsModel && <QuestionModel/>}
      <nav className="nav active">
        {user ? <LoggedIn name={user.displayName||""} /> : <NotLoggedIn />}
      </nav>
      <SearchQuestions />
    </header>
  );
};
export default Header;
