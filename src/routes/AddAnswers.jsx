import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import Header from "../components/Header/Header.component";
import QuestionsList from "../components/questions/QuestionsList.component";
import "../assets/css/AddAnswers.css";
import QNA from "../utils/defaultQNA";
import AnswerQuestionList from "../components/questions/AnswerQuestionList";

function AddAnswers() {
  const navigate = useNavigate();
  const [data, setData] = useState(QNA);
  const [userInfo] = useState(JSON.parse(localStorage.getItem("user")));
  const [input, setInput] = useState("");
  const [selectedQuestion, setSelectedQuestion] = useState(null);
  const addAnswers = () => {
    data[selectedQuestion].answers.push({
      id: data[selectedQuestion].answers.length,
      answer: input,
      answeredBy: userInfo.name,
      vote: 0,
    });
    setData([...data]);
    localStorage.setItem("questionAndAnswers", JSON.stringify(data));
    setInput("");
    setSelectedQuestion(null);
  };
  return (
    <div className="main answer">
      <Header />
      <div className="body" style={{justifyContent:"center"}}>
        {selectedQuestion ==null? (
          <AnswerQuestionList
            data={data.map(({ question }) => question)}
            setState={setSelectedQuestion}
          ></AnswerQuestionList>
        ) : (
          <div className="card ans-input">
            <img
              src={`https://i.pravatar.cc/150?u=${userInfo.name}`}
              alt="user"
            />
            <h2 className="user-name">{userInfo.name}</h2>
            <h3 className="header-3">{data[selectedQuestion]?.question}</h3>
            <textarea
              onChange={(e) => setInput(e.target.value)}
              value={input}
              placeholder="Write your answer"
            ></textarea>
            <div className="btn-group">
              <button
                className="btn"
                onClick={() => {
                  setSelectedQuestion(null);
                }}
              >
                Cancel
              </button>
              <button
                className="btn"
                disabled={!input.trim().length}
                onClick={addAnswers}
              >
                Add answer
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default AddAnswers;
