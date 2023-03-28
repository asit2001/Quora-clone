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
  const question = useAppSelector((state) => state.question.value[Number(id)]);
  useEffect(() => {
    if (!question || !question) {
      navigate("/404");
    }
  }, []);

  return (
    <div className="main">
      <Header />
      <div className="questions">
        <AnswerCard cardInfo={question}/>
        {question?.answers.map((answer) => {
          return <AnsweredCard answer={answer} key={answer.id} />;
        })}
      </div>
    </div>
  );
}

export default Question;
