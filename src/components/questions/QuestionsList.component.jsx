import React from "react";
import { Link } from "react-router-dom";

function QuestionsList({ data,style,className=""}) {
  return (
    <div className={"card questions "+className} style={style}>
      <ul style={{ listStyle: "none" }}>
        {data.map((obj) => {
          return (
            <li className="listItem link" key={obj.id} > 
             <Link className="link" to={`/question/${obj.id}`}>{obj.question}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default QuestionsList;
