import { useState } from "react";
import { addQuestion, setShowQns, useAppDispatch } from "../../redux";
import { user } from "../../utils/utils";
import { CloseIcon } from "../Icons";

import "./styles/QuestionModel.css";
function QuestionModel() {
    const dispatch = useAppDispatch();
    const [text,setText] = useState("");
    const addQuestionToBD = ()=>{
      dispatch(addQuestion({question:text,questionedBy:user.name}));
      dispatch(setShowQns(false));
    }
  return (
    <div className="ansModel">
      <div className="ansModel__container">
        <button className="ansModel__container__btn" onClick={()=>{dispatch(setShowQns(false))}}>
          <CloseIcon />
        </button>
        <div className="Qns">
        <h3 className="Qns__heading">Tips on getting good answers quickly</h3>
        <ul className="Qns__list">
          <li className="Qns__list__item">
            Make sure your question has not been asked already
          </li>
          <li className="Qns__list__item">
            Keep your question short and to the point
          </li>
          <li className="Qns__list__item">Double-check grammar and spelling</li>
        </ul>
        <div className="ansModel__container__profile">
          <img
            className="container__profile__img"
            src={`https://i.pravatar.cc/150?u=${user.name}`}
            alt="User Icon"
          />
        </div>
        <textarea
          className="Qns__input"
          placeholder='Start your question with "What", "How", "Why", etc.'
          onChange={(e)=>{setText(e.target.value)}}
        />
        </div>
        <button className="container__btnGroup__postBtn" onClick={addQuestionToBD}>Add question</button>
      </div>
    </div>
  );
}

export default QuestionModel;
