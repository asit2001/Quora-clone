import { useEffect, useState } from "react";
import {useLocation} from 'react-router-dom'
import { useAppSelector, useAppDispatch, } from "../../redux";

import SearchQuestions from "./SearchQuestions";
import LoggedIn from "./LoggedIn";
import NotLoggedIn from "./NotLoggedIn";

import "./styles/Header.style.css";
import AnsModel from "../model/AnsModel";
import QuestionModel from "../model/QuestionModel";
import EditAnswerModel from "../model/EditAnswerModel";

const Header = () => {
  const {pathname} = useLocation()
  const user = useAppSelector(state=>state.auth.value);
  const dispatch = useAppDispatch();
  const [questionId,showQnsModel,questionKey] = useAppSelector((state) => [state.questionId.value,state.showQnsModel.value,state.updateAnswer.value.questionKey]);
  const [search,setSearch] = useState("")
  useEffect(() => {
    setSearch("");
  }, [pathname,dispatch]);
  return (
    <header className={search.length ? "header" : ""}>
      {questionId !== "" &&<AnsModel/>}
      {questionKey !== "" &&<EditAnswerModel/>}
      {showQnsModel && <QuestionModel/>}
      <nav className="nav active">
        {user ? <LoggedIn search={search} setSearch={setSearch} /> : <NotLoggedIn search={search} setSearch={setSearch}/>}
      </nav>
      <SearchQuestions search={search} setSearch={setSearch}/>
    </header>
  );
};
export default Header;
