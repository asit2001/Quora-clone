import React from "react";
import Header from "./Header";

function App() {
  return (
    <div id="main">
      <Header loggedIn={true} userName={"ronaldo"}/>
    </div>
  );
}

export default App;
