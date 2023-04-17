import { Link } from "react-router-dom";
import { removeAnsThunk, setQuestionAndAnswerKey, useAppDispatch, useAppSelector } from "../../redux";
import { AiOutlineEdit } from "react-icons/ai";
import { MdDelete } from "react-icons/md";

import "./styles/AnswerCard.css";
function EditCard({ Url, question }: { Url: string; question: string }) {
  const dispatch = useAppDispatch();
  const [cardInfo,uid] = useAppSelector(state=>[state.question.value.ans[Url],state.auth.value!.uid!]);
  
  return (
    <>
      {Object.keys(cardInfo).map((key) => {
        return (
          <div className="ansCard" key={key}>
            <h3>
              <Link to={`/question/${Url}`} className="ansCard__question">
                {question}
              </Link>
            </h3>
            <p className="ansCard__ansCount">{cardInfo[key].answer}</p>
            <div className="ansCard__btnGroup">
              <button
                className="ansCard__btnGroup__btn"
                onClick={() => {
                  dispatch(
                    setQuestionAndAnswerKey({
                      answerKey: key,
                      questionKey: Url,
                    })
                  );
                }}
              >
                <AiOutlineEdit size={24} color="rgb(102, 102, 102)" />{" "}
                <span>Edit Answer</span>
              </button>
              <button
                style={{ float: "right" }}
                className="ansCard__btnGroup__btn"
                onClick={()=>{dispatch(removeAnsThunk({answerKey:key,question,uid}))}}
              >
                <MdDelete size={24} color="var(--red)" />
              </button>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default EditCard;
