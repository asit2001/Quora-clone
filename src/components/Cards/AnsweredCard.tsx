import { answerType } from "../../types"
import { DownVote, UpVote,Comment,Share } from "../Icons"
import "./styles/Card.css"
function AnsweredCard({answer}:{answer:answerType}) {
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
        <UpVote />
        <span>Upvote · {answer.vote}</span>
        <DownVote />
        <Comment />
        <span>18</span>
        <Share />
        <span>29</span>
      </div>
    </div>
  )
}

export default AnsweredCard