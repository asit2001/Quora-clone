import { useParams } from "react-router-dom"
import { downvote, upvote, useAppDispatch } from "../../redux";
import { answerType } from "../../types"
import { DownVote, UpVote,Comment,Share } from "../Icons"
import "./styles/Card.css"
function AnsweredCard({answer}:{answer:answerType}) {
  const {id} = useParams();
  const dispatch = useAppDispatch();
  
  return (
    <div className="card">
      <img
        className="img"
        src={`https://i.pravatar.cc/150?u=${answer.answeredBy}`}
        alt="user logo"
      />
      <h2 className="user-name">{answer.answeredBy}</h2>
      <p className="para text-ellipsis">{answer.answer}</p>
      {answer.imgUrl !== "" && 
      <img
        src={answer.imgUrl}
        className="thumbnails"
        alt="content image"
      />}
      <div className="voting-icons">
        <span onClick={()=>{dispatch(upvote({qnsId:Number(id),ansId:answer.id}))}}> <UpVote /> Upvote · {answer.vote}</span>
        <span onClick={()=>{dispatch(downvote({qnsId:Number(id),ansId:answer.id}))}}><DownVote /></span>
        <Comment />
        <span>18</span>
        <Share />
        <span>29</span>
      </div>
    </div>
  )
}

export default AnsweredCard