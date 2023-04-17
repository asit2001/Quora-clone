import "./Styles/SideBar.css";
import { setSelected, useAppDispatch, useAppSelector } from "../../redux";
function AnsSideBar() {
  const dispatch = useAppDispatch();
  const selected = useAppSelector(state=>state.select.value);
  
  return (
    <div className="side-bar" style={{flex:0.4}}>
      <div className="upper-panel">
        <h3 className="upperPanel__heading">Questions</h3>
        <div className={selected==="all"?"upperPanel__bar--active":"upperPanel__bar"} onClick={()=>{dispatch(setSelected("all"))}}>
          <p>Questions for you</p>
        </div>
        <div className={selected==="answered"?"upperPanel__bar--active":"upperPanel__bar"} onClick={()=>{dispatch(setSelected("answered"))}}>
          <p>Answered question</p>
        </div>
        <div className="upperPanel__bar">
            <p>Drafts</p>
        </div>
      </div>
    </div>
  );
}

export default AnsSideBar;
