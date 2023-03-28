import { Link } from "react-router-dom"
import { useAppDispatch ,setQuestionId} from "../../redux"
import { QNAType } from "../../utils/defaultData"
import { FollowIcon, PassIcon, PenIcon } from "../Icons"

import './styles/AnswerCard.css'
function AnswerCard({cardInfo}:{cardInfo:QNAType}) {
  const dispatch = useAppDispatch();
  return (
    <div className="ansCard">
        <h3><Link to={`/question/${cardInfo.id-1}`} className="ansCard__question">{cardInfo.question}</Link></h3>
        <p className="ansCard__ansCount">{cardInfo.answers.length ===0? "No answer yet ":`${cardInfo.answers.length} answers`}</p>
        <div className="ansCard__btnGroup">
            <button className="ansCard__btnGroup__btn" onClick={()=>{dispatch(setQuestionId(cardInfo.id))}}><PenIcon/> <span>Answer</span></button>
            <button className="ansCard__btnGroup__btn"><FollowIcon/><span>Follow</span></button>
            <button className="ansCard__btnGroup__btn"><PassIcon/> <span>Pass</span></button>
        </div>
    </div>
  )
}

export default AnswerCard