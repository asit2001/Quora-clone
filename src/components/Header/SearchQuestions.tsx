import { useRef, useEffect, SetStateAction, Dispatch } from "react";
import { Link } from "react-router-dom";
import {useAppSelector} from '../../redux'
import "./styles/searchQuestion.css";

function SearchQuestions({search,setSearch}:{search:string,setSearch:Dispatch<SetStateAction<string>>}) {
  const ref = useRef<HTMLDivElement>(null);
  const QNA = useAppSelector((state)=>state.question.value);
  useEffect(() => {
    function handleClickOutside(event:MouseEvent) {
      if (
        ref.current &&
        !ref.current.contains(event.target as Document) &&
        ref.current.innerText !== ""
      ) {
        setSearch("");
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
