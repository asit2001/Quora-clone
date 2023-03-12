import React from "react";
import { Tooltip } from "react-tooltip";
import { MdCheckCircleOutline } from "react-icons/md";
import { RxCrossCircled } from "react-icons/rx";

function LogRegInput({type,valid,id,error,onChange}) {
  return (
    <div className="input-with-icon">
      <input
        type={type}
        id={id}
        autoComplete="off"
        onChange={(e) => {
          onChange(e);
        }}
      />
      {error?valid? (
        <MdCheckCircleOutline className="icon" />
      ) : (
        <>
          <RxCrossCircled data-tooltip-id={id} className="error-icon" />
          <Tooltip id={id} children={error} variant="error" />
        </>
      ):null}
    </div>
  );
}

export default LogRegInput;
