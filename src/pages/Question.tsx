import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import AnswerCard from "../components/Cards/AnswerCard";
import AnsweredCard from "../components/Cards/AnsweredCard";
import Header from "../components/Header/Header";
import { useAppSelector } from "../redux";

import './styles/Question.css'
function Question() {
  const { id } = useParams();
  const navigate = useNavigate();
  const question = useAppSelector((state) => state.question.value);
  
  useEffect(()=>{
    if (Object.keys(question).length && !Object.hasOwn(question,id!)) {
      navigate("/404")
    }
  },[question])
  
  return (
    <div className="main">
      <Header />
      {
        Object.keys(question).length !==0 && Object.hasOwn(question,id!) &&
         <div className="questions">
         <AnswerCard cardInfo={question[id!]} Url={id!}/>
         {Object.hasOwn(question[id!],"answers") && Object.keys(question[id!].answers).map(key=>{
          return <AnsweredCard question={question[id!].question} ansKey={key} key={key} answer={question[id!].answers[key]}></AnsweredCard>
        })}
      </div>
      }
    </div>
  );
}

export default Question;
