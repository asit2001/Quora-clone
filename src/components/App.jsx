import React, { useState } from "react";
import Header from "./Header/Header.component";
import Card from "./cards/Card";
import QuestionsList from "./questions/QuestionsList.component";

import "../assets/css/App.css";
import QNA from "../utils/defaultQNA";
function App() {
  const [data] = useState(QNA);

  return (
    <div className="main">
      <Header />
      <div className="body">
        <div className="qna">
          {data?.map(({answers,id,question,questionedBy}) => {
            return answers.length !== 0 ? <Card data={{id,question,questionedBy,answer:answers[0].answer}} key={id} /> : null;
          })}
        </div>
        <QuestionsList link className="qna-qList" data={data} />
      </div>
    </div>
  );
}

export default App;
