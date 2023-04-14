import { Await, Navigate, useLoaderData } from "react-router-dom";
import AnswerCard from "../components/Cards/AnswerCard";
import Header from "../components/Header/Header"
import { StarIcon } from "../components/Icons";
import AnsSideBar from "../components/SideBar/AnsSideBar";
import { useAppSelector } from "../redux";


import './styles/Answer.css'
import { userData } from "../firebase";

function Answer() {
  const [data,user] = useAppSelector((state)=>[state.question.value,state.auth.value]);
  
  return (
    <Await resolve={()=>userData(user)}>
      {user?<div className="main">
      <Header />
      <div className="answer">
        <AnsSideBar/>
      <div className="answer__container">
        <div className="answer__container__intro">
          <div className="intro__box">
            <StarIcon/>
          </div>
          <p className="intro__text">Questions for you</p>
        </div>
        {
        Object.keys(data).map(key=>{
          return <AnswerCard key={key} Url={key} cardInfo={data[key]}></AnswerCard>
        })
        }      
      </div>
      </div>
    </div>:<Navigate to={"/login"}/>}
    </Await>
  )
}

export default Answer