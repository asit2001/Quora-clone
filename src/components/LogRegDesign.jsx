import React from "react";
import pen from '../write-pen.svg'

function LogRegDesign() {
  return (
    <div className="note" style={{width:'40%'}}>
      <p >Got questions?</p>
      <p style={{float:"right"}}>Have Answers?</p>
        <img src={pen} alt="notepad logo"/>
      <p style={{textAlign:"center"}}>Just share!</p>
    </div>
  );
}

export default LogRegDesign;
