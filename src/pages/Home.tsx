import { useState } from "react";
import { Link } from "react-router-dom";
import Card from "../components/Cards/card";
import Header from "../components/Header/Header";
import { AskIcon,Pencil,PenIcon} from "../components/Icons";
import SideBar from "../components/SideBar/SideBar";
import { setShowQns, useAppDispatch, useAppSelector } from "../redux";
import { userType } from "../types";

import './styles/Home.css'
function Home() {
  const data = useAppSelector(state=>state.question.value);
  const [userInfo] = useState<userType>(
    JSON.parse(localStorage.getItem("user")!)
  );
  const dispatch = useAppDispatch();
  return (
    <div className="main">
      <Header/>
      <div className="body">
        <SideBar/>
        <div className="qna">
          {userInfo && <div className="ask-ans-post">
            <img src={`https://i.pravatar.cc/150?u=${userInfo?.name}`} alt="" className="profile-picture"/>
            <Link to={""} className="question">What do you want to ask or share?</Link>
            <div className="btn-group">
              <Link to={""} className="link-btn" onClick={()=>{dispatch(setShowQns(true))}}>
                <AskIcon/> Ask
              </Link>
              <Link to={"/answer"} className="link-btn">
                <PenIcon/> Answer
              </Link>
              <Link to={""} className="link-btn">
                <Pencil/> Post
              </Link>
            </div>
          </div>}
        {
          data.map(({answers,id})=>{
            return answers.length !== 0 ? <Card id={id-1} key={id} /> : null;
          })
        }
        </div>
      </div>
    </div>
  );
}

export default Home;
