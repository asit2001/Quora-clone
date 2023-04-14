import { createAsyncThunk } from "@reduxjs/toolkit";
import { QUESTION_LIST } from "./actionsType";
import { VoteDb, addAnswerToDb, addQuestionToDb, generateRandomUid, getAllQuestions } from "../firebase/utils";

export const fetchQNAThunk = createAsyncThunk(
    `${QUESTION_LIST}/fetchQNA`,
    () => {
      return getAllQuestions();
    }
  );
  
  export const addQuestionThunk = createAsyncThunk(
    `${QUESTION_LIST}/addQuestion`,
    async (data: {
      question: string;
      questionedBy: string;
      profilePicture: string;
    }) => {
      await addQuestionToDb(
        data.question,
        data.questionedBy,
        data.profilePicture
      );
      return {
        question: data.question,
        questionedBy: data.questionedBy,
        profilePicture: data.profilePicture,
      };
    }
  );
  export const addAnswerThunk = createAsyncThunk(
    `${QUESTION_LIST}/addAnswer`,
    async (data: {
      question: string;
      answer: string;
      answeredBy: string;
      imgUrl: string;
      profilePicture: string;
    }) => {
      const { answer, answeredBy, imgUrl, question, profilePicture } = data;
      const answerKey = generateRandomUid();
      await addAnswerToDb(
        question,
        answer,
        answeredBy,
        imgUrl,
        answerKey,
        profilePicture
      );
      return { answer, answeredBy, imgUrl, question, answerKey, profilePicture };
    }
  );
  export const voteThunk = createAsyncThunk(
    `${QUESTION_LIST}/upVote`,
    async ({ansKey,question,inc,uid,downVoted}: {
      question: string;
      ansKey: string;
      uid: string;
      inc: boolean;
      downVoted:boolean
    }) => {
      await VoteDb(question,ansKey,uid,inc,downVoted);
      return {question,ansKey,inc,uid,downVoted};
    }
  );
  