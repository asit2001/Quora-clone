import "./Styles/SideBar.css";
function AnsSideBar() {
  return (
    <div className="side-bar" style={{flex:0.4}}>
      <div className="upper-panel">
        <h3 className="upperPanel__heading">Questions</h3>
        <div className="upperPanel__bar--active">
          <p>Questions for you</p>
        </div>
        <div className="upperPanel__bar">
          <p>Answer requests</p>
        </div>
        <div className="upperPanel__bar">
            <p>Drafts</p>
        </div>
      </div>
    </div>
  );
}

export default AnsSideBar;
