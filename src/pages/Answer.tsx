import AnswerCard from "../components/Cards/AnswerCard";
import Header from "../components/Header/Header"
import { StarIcon } from "../components/Icons";
import AnsSideBar from "../components/SideBar/AnsSideBar";
import { useAppSelector } from "../redux";


import './styles/Answer.css'

function Answer() {
  const data = useAppSelector((state)=>state.question.value);

  return (
    <div className="main">
      <Header />
      <div className="answer">
        <AnsSideBar/>
      <div className="answer__container">
        <div className="answer__container__intro">
          <div className="intro__box">
            <StarIcon/>
          </div>
          <p className="intro__text">Questions for you</p>
        </div>
        {data.map(qna=>{
          return <AnswerCard key={qna.id} cardInfo={qna}></AnswerCard>
        })}      
      </div>
      </div>
    </div>
  )
}

export default Answer