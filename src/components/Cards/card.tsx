import { Link } from "react-router-dom";
import { voteThunk, useAppDispatch, useAppSelector } from "../../redux";
import { DownVote, UpVote, Comment, Share, UpVoteFill, DownVoteFill } from "../Icons";
import "./styles/Card.css";

function Card({ id }: { id: string }) {
  const [data,uid] = useAppSelector((state) => [state.question.value.qna[id],state.auth.value?.uid!]);
  const dispatch = useAppDispatch();
  const ansKey = Object.keys(data.answers)[0];
  if (!ansKey) {
    return null;
  }
  const answerObj = data.answers[ansKey];
  
  const voter = Object.hasOwn(data.answers[ansKey],"voters");
  const isUpVoted = voter&& Object.hasOwn(data.answers[ansKey].voters,uid);
  
  const downVoter = Object.hasOwn(data.answers[ansKey],"downVoters");
  const isDownVoted =downVoter && Object.hasOwn(data.answers[ansKey].downVoters,uid);
  return (
    answerObj && <div className="card" id={id}>
    <img
      className="img"
      src={(Object.hasOwn(data,"profilePicture") && data.profilePicture) || `https://i.pravatar.cc/150?u=${data.questionedBy}`}
      alt="user logo"
    />
    <h2 className="user-name">{data.questionedBy}</h2>
    <h3 className="header-3">
      <Link className="link-text" to={`/question/${id}`}>
        {data.question}
      </Link>
    </h3>
    <p className="para text-ellipsis">{answerObj.answer}</p>
    {answerObj.imgUrl && <img
      className="thumbnails"
      src={answerObj.imgUrl}
      alt="thumbnails"
    />}
    <div className="voting-icons">
    {isUpVoted?
          <span onClick={()=>{dispatch(voteThunk({ansKey,inc:false,question:data.question,uid,downVoted:false}))}}> <UpVoteFill /> Upvote · {voter?Object.keys(answerObj.voters).length:0}</span>
          :
          <span onClick={()=>{dispatch(voteThunk({ansKey,inc:true,question:data.question,uid,downVoted:false}))}}> <UpVote /> Upvote · {voter?Object.keys(answerObj.voters).length:0}</span>
        }
      {isDownVoted ? (
          <span
            onClick={() => {
              dispatch(
                voteThunk({
                  ansKey,
                  inc: false,
                  question:data.question,
                  uid,
                  downVoted: true,
                })
              );
            }}
          >
            <DownVoteFill />
          </span>
        ) : (
          <span
            onClick={() => {
              dispatch(
                voteThunk({
                  ansKey,
                  inc: true,
                  question:data.question,
                  uid,
                  downVoted: true,
                })
              );
            }}
          >
            <DownVote/>
          </span>
        )}
      <Comment />
      <span>18</span>
      <Share />
      <span>29</span>
    </div>
  </div>
  );
}

export default Card;
