import React from "react";
import pen from '../write-pen.svg'

const p = {
    fontSize: '1.8rem',
    fontWeight: 800,
    color: 'gray'
}
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
