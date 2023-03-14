import React from "react";
import { Link } from "react-router-dom";

function QuestionsList({ data }) {
  return (
    <div className="card questions">
      <ul style={{ listStyle: "none" }}>
        {data.map((obj) => {
          return (
            <li style={{ margin: "10px 0" }} key={obj.id}>
              <Link style={{textDecoration:"none",color:'#0000b5'}}>{obj.question}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default QuestionsList;
