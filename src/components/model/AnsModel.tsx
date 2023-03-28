import { ChangeEvent, useEffect, useRef, useState } from "react";
import { ToastContainer,toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import {
  addAnswer,
  setQuestionId,
  useAppDispatch,
  useAppSelector,
} from "../../redux";
import { userType } from "../../types";
import { AlphabetIcon, CloseIcon, GalleryIcon } from "../Icons";
import "./styles/AnsModel.css";

function AnsModel() {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const dispatch = useAppDispatch();
  const [text, setText] = useState("");
  const [dataUrl, setDataUrl] = useState("");
  const [userInfo, setUserInfo] = useState<userType>();
  const [fileName,setFileName] = useState("");
  const questionId = useAppSelector((state) => state.questionId.value - 1);
  const questionInfo = useAppSelector((state) => state.question.value);
  function selectImg(e: ChangeEvent<HTMLInputElement>) {
    if (e.target.files !== null) {
      toast.promise(
        new Promise((resolve,reject) => {
          const fileReader = new FileReader();
          fileReader.readAsDataURL(e.target.files![0]);
          fileReader.onload = ()=>{
            setDataUrl(fileReader.result!.toString());
            console.log(fileReader.result);
            resolve("ok");
            setFileName(e.target.files![0].name);
          }
          fileReader.onerror = ()=>{
            reject("error");
          }
          
        }),
          {
            pending: 'uploading image',
            success: 'image uploaded 👌',
            error: 'upload failed 🤯'
          },{
            autoClose:1000,
            pauseOnHover:false
          }
      )
    }
  }
  useEffect(() => {
    setUserInfo(JSON.parse(localStorage.getItem("user")!) as userType);
  }, []);

  function post() {
    const addPost = {
      id: questionId,
      value: {
        ...questionInfo[questionId],
        answers: [
          ...questionInfo[questionId].answers,
          {
            answer: text,
            answeredBy: userInfo?.name || "",
            vote: 0,
            id: questionInfo[questionId].answers.length,
            imgUrl: dataUrl,
          },
        ],
      },
    };
    dispatch(addAnswer(addPost));
    dispatch(setQuestionId(-1));
  }
  return (
    <div className="ansModel">
      <div className="ansModel__container">
        <ToastContainer/>
        <button
          className="ansModel__container__btn"
          onClick={() => {
            dispatch(setQuestionId(-1));
          }}
        >
          <CloseIcon />
        </button>
        <div className="ansModel__container__profile">
          <img
            className="container__profile__img"
            src={`https://i.pravatar.cc/150?u=${userInfo?.name}`}
            alt="User Icon"
          />
          <p className="container__profile__name">{userInfo?.name}</p>
        </div>
        <h3 className="ansModel__container__question">
          {questionInfo[questionId]?.question}
        </h3>
        <textarea
          className="ansModel__container__input"
          placeholder="Write your answer"
          onChange={(e) => {
            setText(e.target.value);
          }}
        >
        </textarea>
        <div className="ansModel__container__btnGroup">
          <input
            ref={fileInputRef}
            onChange={selectImg}
            type="file"
            accept="image/*"
            style={{ display: "none" }}
          />
          <button className="container__btnGroup__btn">
            <AlphabetIcon />
          </button>
          <button
            className="container__btnGroup__btn"
            onClick={() => {
              fileInputRef.current?.click();
            }}
          >
            <GalleryIcon />
          </button>
          <span>{fileName}</span>
          <button
            className="container__btnGroup__postBtn"
            disabled={text.length === 0}
            onClick={post}
          >
            Post
          </button>
        </div>
      </div>
    </div>
  );
}

export default AnsModel;
