import { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import {useAppDispatch,useAppSelector,setSearch} from '../../redux'
import "./styles/searchQuestion.css";

function SearchQuestions() {
  const ref = useRef<HTMLDivElement>(null);
  const search = useAppSelector((state)=>state.search.value);
  const QNA = useAppSelector((state)=>state.question.value);
  const dispatch = useAppDispatch();
  useEffect(() => {
    function handleClickOutside(event:MouseEvent) {
      if (
        ref.current &&
        !ref.current.contains(event.target as Document) &&
        ref.current.innerText !== ""
      ) {
        dispatch(setSearch(""));
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);
  return (
    <div className="search-container" ref={ref}>
      <ul className="list">
        {
          Object.keys(QNA).map(key=>{
            return QNA[key].question.toLowerCase().includes(search.toLowerCase())&& Object.hasOwn(QNA[key],"answers") &&
                search.length ? (
                <Link className="link-text" to={`/question/${key}`} key={key}>
                  <li>{QNA[key].question}</li>
                </Link>
              ) : null;
          })
        }
      </ul>
    </div>
  );
}

export default SearchQuestions;
