import { voteThunk, useAppDispatch, useAppSelector } from "../../redux";
import { ANSType } from "../../types";
import { removeSpecials } from "../../utils/utils";
import {
  DownVote,
  UpVote,
  Comment,
  Share,
  UpVoteFill,
  DownVoteFill,
} from "../Icons";
import "./styles/Card.css";
function AnsweredCard({
  answer,
  ansKey,
  question,
}: {
  answer: ANSType;
  ansKey: string;
  question: string;
}) {
  const [uid, data] = useAppSelector((state) => [
    state.auth.value?.uid!,
    state.question.value,
  ]);
  const dispatch = useAppDispatch();
  const voter = Object.hasOwn(
    data[removeSpecials(question)].answers[ansKey],
    "voters"
  );
  const isUpVoted =
    voter &&
    Object.hasOwn(data[removeSpecials(question)].answers[ansKey].voters, uid);
  const downVoter = Object.hasOwn(
    data[removeSpecials(question)].answers[ansKey],
    "downVoters"
  );
  const isDownVoted =
    downVoter &&
    Object.hasOwn(
      data[removeSpecials(question)].answers[ansKey].downVoters,
      uid
    );
  return (
    <div className="card">
      <img
        className="img"
        src={
          (Object.hasOwn(answer, "profilePicture") && answer.profilePicture) ||
          `https://i.pravatar.cc/150?u=${answer.answeredBy}`
        }
        alt="user logo"
      />
      <h2 className="user-name">{answer.answeredBy}</h2>
      <p className="para">{answer.answer}</p>
      {answer.imgUrl !== "" && (
        <img src={answer.imgUrl} className="thumbnails" alt="content image" />
      )}
      <div className="voting-icons">
        {isUpVoted ? (
          <span
            onClick={() => {
              dispatch(
                voteThunk({
                  ansKey,
                  inc: false,
                  question,
                  uid,
                  downVoted: false,
                })
              );
            }}
          >
            {" "}
            <UpVoteFill /> Upvote · {voter?Object.keys(answer.voters).length:0}
          </span>
        ) : (
          <span
            onClick={() => {
              dispatch(
                voteThunk({
                  ansKey,
                  inc: true,
                  question,
                  uid,
                  downVoted: false,
                })
              );
            }}
          >
            {" "}
            <UpVote /> Upvote · {voter?Object.keys(answer.voters).length:0}
          </span>
        )}
        {isDownVoted ? (
          <span
            onClick={() => {
              dispatch(
                voteThunk({
                  ansKey,
                  inc: false,
                  question,
                  uid,
                  downVoted: true,
                })
              );
            }}
          >
            <DownVote />
          </span>
        ) : (
          <span
            onClick={() => {
              dispatch(
                voteThunk({
                  ansKey,
                  inc: true,
                  question,
                  uid,
                  downVoted: true,
                })
              );
            }}
          >
            <DownVoteFill />
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

export default AnsweredCard;
