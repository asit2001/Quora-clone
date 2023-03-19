import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "../components/Header/Header.component";
import QNA from "../utils/defaultQNA";

function AddQuestion() {
  const navigate = useNavigate();
  const [user] = useState(JSON.parse(localStorage.getItem("user")));
  const [data, setData] = useState(
    QNA
  );
  const [input, setInput] = useState("");
  function addQuestion() {
    setData([
      ...data,
      {
        id: data.length + 1,
        question: input,
        questionedBy: user.name,
        answers:[]
      },
    ]);
    localStorage.setItem(
      "questionAndAnswers",
      JSON.stringify([
        ...data,
        {
          id: data.length + 1,
          question: input,
          questionedBy: user.name,
          answers:[]
        },
      ])
    );
    setInput("");
  }
  return (
    <div className="main">
      <Header />
      <div className="body">
        <div className="card question" style={{ width: "100%" }}>
          <img
            src={`https://i.pravatar.cc/150?u=${user.email}`}
            alt="user logo"
          />
          <h2 className="asks">{`${user.name} Asks`}</h2>
          <div className="input-box">
            <input
              type="text"
              className="question-input"
              placeholder={`Start your question with "What", "How", "Why", etc.`}
              autoComplete="off"
              value={input}
              onChange={(e) => {
                setInput(e.target.value);
              }}
            />
          </div>
          <ul className="matching-questions">
            {data?.filter(({question})=> input.length &&question.toLowerCase().includes(input.toLowerCase()))
            ?.map(({ id, question }) => {
                return (
                  <li key={id}>
                    <Link to={`/question/${id}`} style={{ textDecoration: "none", color: "black" }}>
                      {question}
                    </Link>
                  </li>
                );
              })
              .slice(0, 5)}
          </ul>
          <div className="btn-group">
            <button
              className="btn"
              onClick={() => {
                navigate("/");
              }}
            >
              Cancel
            </button>
            <button
              className="btn"
              disabled={!input.trim().length}
              onClick={addQuestion}
            >
              Add question
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddQuestion;
