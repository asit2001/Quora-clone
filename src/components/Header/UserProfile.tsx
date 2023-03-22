import React from "react";
import { Link } from "react-router-dom";
const UserProfile: React.FC<{ name: string }> = ({ name }) => {
  return (
    <>
      <img
        src={`https://i.pravatar.cc/150?u=${name}`}
        alt="user avatar"
        className="avatar"
      />
      <Link className="btn addQuestion" to={"/add-question"}>
        Add Questions
      </Link>
    </>
  );
};

export default UserProfile;
