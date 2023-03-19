import React from 'react'
import { PenIcon } from '../Icon';

function AnswerQuestionList({ data,setState=()=>{}}) {
  return (
    <div className={"card questions answer-card"}>
      <ul style={{ listStyle: "none" }}>
        {data.map((question,idx) => {
          return (
            <li className="underline-listItem" key={idx}> 
             <p className='para'>{question}</p>
             <button className='answer-btn' onClick={()=>{setState(idx)}}><PenIcon/>Answer</button>
            </li>
          );
        })}
      </ul>
    </div>
  )
}

export default AnswerQuestionList