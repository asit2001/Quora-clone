import React from "react";
import { setShowQns, useAppDispatch } from "../../redux";

const UserProfile: React.FC<{ name: string }> = ({ name }) => {
  const dispatch = useAppDispatch();
  return (
    <>
      <img
        src={`https://i.pravatar.cc/150?u=${name}`}
        alt="user avatar"
        className="avatar"
      />
      <button className="btn addQuestion" onClick={()=>{dispatch(setShowQns(true))}}>
        Add Questions
      </button>
    </>
  );
};

export default UserProfile;
