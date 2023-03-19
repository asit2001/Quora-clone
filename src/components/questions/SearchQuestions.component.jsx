import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom";

import "./SearchQuestion.style.css";
import QNA from "../../utils/defaultQNA";
function SearchQuestions({ search, setSearch }) {
  const ref = useRef();
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        ref.current &&
        !ref.current.contains(event.target) &&
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
        {QNA.map((obj) => {
          return obj.question.toLowerCase().includes(search) && obj.answers.length &&
            search.length ? (
            <Link className="link-text" to={`/question/${obj.id}`} key={obj.id}>
              <li>{obj.question}</li>
            </Link>
          ) : null;
        })}
      </ul>
    </div>
  );
}

export default SearchQuestions;
