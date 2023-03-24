import { Link } from "react-router-dom";
import { useAppSelector } from "../../redux";
import { DownVote, UpVote, Comment, Share } from "../Icons";
import "./styles/Card.css";

function Card({ id }: { id: number }) {
  const data = useAppSelector((state) => state.question.value[id]);
  return (
    <div className="card" id={id.toString()}>
      <img
        className="img"
        src={`https://i.pravatar.cc/150?u=${data.questionedBy}`}
        alt="user logo"
      />
      <h2 className="user-name">{data.questionedBy}</h2>
      <h3 className="header-3">
        <Link className="link-text" to={`/question/${id}`}>
          {data.question}
        </Link>
      </h3>
      <p className="para text-ellipsis">{data.answers[0].answer}</p>
      <img
        className="thumbnails"
        src={`https:/picsum.photos/seed/${data.question
          .replace(" ", "")
          .slice(5, 15)}/900/600`}
        alt=""
      />
      <div className="voting-icons">
        <UpVote />
        <span>Upvote · {data.answers[0].vote}</span>
        <DownVote />
        <Comment />
        <span>18</span>
        <Share />
        <span>29</span>
      </div>
    </div>
  );
}

export default Card;
