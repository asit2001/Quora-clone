import {useParams } from "react-router-dom";
import AnswerCard from "../components/Cards/AnswerCard";
import AnsweredCard from "../components/Cards/AnsweredCard";
import Header from "../components/Header/Header";
import { useAppSelector } from "../redux";

import './styles/Question.css'
import Error from "../components/Error";
function Question() {
  const { id } = useParams();
  const question = useAppSelector((state) => state.question.value.qna);
  
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
      { Object.keys(question).length !==0 && !Object.hasOwn(question,id!) &&
        <div className="body" style={{height:"90vh"}}>
          <Error/>
        </div>
      }
    </div>
  );
}

export default Question;
