import React from "react";
import { setShowQns, useAppDispatch } from "../../redux";
import { Tooltip } from "react-tooltip";
import { useNavigate } from "react-router-dom";

const UserProfile: React.FC<{ name: string }> = ({ name }) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  function logOut() {
    localStorage.removeItem("user")
    navigate("/login");
  }
  return (
    <>
      <img
        src={`https://i.pravatar.cc/150?u=${name}`}
        alt="user avatar"
        className="avatar"
        data-tooltip-id="logout"
      />
      <Tooltip 
        id="logout"
        openOnClick={true}
        clickable={true}
        className="tooltip__model"
        place="bottom"
      >
        <button onClick={logOut} className="tooltip__btn">Logout</button>
      </Tooltip>
      <button className="btn addQuestion" onClick={()=>{dispatch(setShowQns(true))}}>
        Add Questions
      </button>
    </>
  );
};

export default UserProfile;
