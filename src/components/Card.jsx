import React from "react";

import "../assets/css/Card.css";
function Card({data}) {
  return (
    <div className="card" id={data.id}>
      <img src={`https://i.pravatar.cc/150?u=${data.answeredBy}`} alt="user logo" />
      <h2 className="user-name">{data.answeredBy}</h2>
    <h3>{data.question}</h3>
    <p>{data.answer}</p>
    </div>
  );
}

export default Card;
