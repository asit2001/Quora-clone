import React from "react";
import { Link } from "react-router-dom";

import "./Card.css";

function Card({ data}) {
  return (
    <div className="card" id={data.id}>
      <img
        src={`https://i.pravatar.cc/150?u=${data.questionedBy}`}
        alt="user logo"
      />
      <h2 className="user-name">{data.questionedBy}</h2>
      <h3 className=".header-3"><Link className="link-text" to={`/question/${data.id}`}>{data.question}</Link></h3>
      <p className="para text-ellipsis">{data.answer}</p>
    </div>
  );
}

export default Card;
