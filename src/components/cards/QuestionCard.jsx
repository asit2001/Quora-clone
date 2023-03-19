import React from "react";

import "./Card.css";

export default function QuestionCard({ data }) {
  return (
    <div className="card details-card" id={data.id}>
      <img
        src={`https://i.pravatar.cc/150?u=${data.questionedBy}`}
        alt="user logo"
      />
      <h2 className="user-name">{data.questionedBy}</h2>
      <h3 className="header-3">{data.question}</h3>
      {data.answers.map((answer) => {
        return (
          <div key={answer.id}>
            <img
              className="answeredBy"
              src={`https://i.pravatar.cc/150?u=${answer.answeredBy}`}
              alt="user logo"
            />
            <h2 className="ans-user-name">{answer.answeredBy}</h2>
            <p className="ans">{answer.answer}</p>
            {/* <span>{answer.vote}</span> */}
          </div>
        );
      })}
    </div>
  );
}
