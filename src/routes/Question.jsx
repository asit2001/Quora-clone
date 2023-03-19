import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import QuestionCard from "../components/cards/QuestionCard";
import Header from "../components/Header/Header.component";
import QNA from "../utils/defaultQNA";

function Question() {
  const { id } = useParams();
  const navigate = useNavigate();
  const question = QNA[id-1]
  useEffect(() => {
    if (!question || question.answers.length === 0) {
      navigate("/404");
    }
  }, []);

  return <div className="main">
    <Header/>
    <div className="body">
        <QuestionCard data={question}/>
    </div>
  </div>;
}

export default Question;
