import React, { useState } from "react";
import Header from "./Header";
import '../assets/css/App.css'
import Card from "./Card";
import QuestionsList from "./QuestionsList";
function App() {
  const [data] = useState(JSON.parse(localStorage.getItem("questionAndAnswers")));
  return (
    <div className="main">
      <Header/>
      <div className="body">
        <div className="qna" style={{width:'75%'}}>
          {
            data?.map(obj=>{
              return obj.answer !== ""? <Card data={obj} key={obj.id}/>: null;
            })
          }
        </div>
        <QuestionsList data={data}/>
      </div>
    </div>
  );
}

export default App;
