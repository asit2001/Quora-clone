import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  AUTH,
  QUESTION_ID,
  QUESTION_LIST,
  SEARCH,
  SHOW_QNS_MODEL,
} from "./actionsType";
import { QNAType, User } from "../types";
import { auth } from "../firebase";

import { removeSpecials } from "../utils/utils";
import { addAnswerThunk, addQuestionThunk, fetchQNAThunk, voteThunk } from ".";


export const questionSlice = createSlice({
  name: QUESTION_LIST,
  initialState: {
    value: {} as QNAType,
    error: "",
  },
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchQNAThunk.fulfilled, (state, action) => {
      state.value = action.payload;
    });
    builder.addCase(addQuestionThunk.fulfilled, (state, action) => {
      const { question, questionedBy, profilePicture } = action.payload;
      state.value[removeSpecials(question)] = {
        answers: {},
        question,
        questionedBy,
        profilePicture,
      };
    });
    builder.addCase(addAnswerThunk.fulfilled, (state, action) => {
      const {
        answer,
        answeredBy,
        imgUrl,
        question,
        answerKey,
        profilePicture,
      } = action.payload;
      state.value[removeSpecials(question)].answers[answerKey] = {
        answer,
        answeredBy,
        imgUrl,
        profilePicture,
        voters: {},
        downVoters:{}
      };
    });
    builder.addCase(voteThunk.fulfilled,(state,action)=>{
      const {ansKey,question,inc,uid,downVoted} = action.payload;
      const questionKey = removeSpecials(question);
      if (!Object.hasOwn(state.value[questionKey].answers[ansKey],"voters")) {
        state.value[questionKey].answers[ansKey]["voters"] = {}
      }
      if (!Object.hasOwn(state.value[questionKey].answers[ansKey],"downVoters")) {
        state.value[questionKey].answers[ansKey]["downVoters"] = {}
      }
      if (downVoted) {
        delete state.value[questionKey].answers[ansKey].voters[uid];
        inc?state.value[questionKey].answers[ansKey].downVoters[uid] = uid
        :delete state.value[questionKey].answers[ansKey].downVoters[uid];
      }else{
        delete state.value[questionKey].answers[ansKey].downVoters[uid]
        if (inc) {
          state.value[questionKey].answers[ansKey].voters[uid] = uid
        }else{
          delete state.value[questionKey].answers[ansKey].voters[uid];
        }
      }
    })
  },
});

const searchSlice = createSlice({
  name: SEARCH,
  initialState: {
    value: "",
  },
  reducers: {
    setSearch: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
  },
});
const questionIdSlice = createSlice({
  name: QUESTION_ID,
  initialState: {
    value: "",
  },
  reducers: {
    setQuestionId: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
  },
});
const showAddQnsSlice = createSlice({
  name: SHOW_QNS_MODEL,
  initialState: {
    value: false,
  },
  reducers: {
    setShowQns: (state, action: PayloadAction<boolean>) => {
      state.value = action.payload;
    },
  },
});
const authSlice = createSlice({
  initialState: {
    value: auth.currentUser
      ? {
          displayName: auth.currentUser.displayName,
          photoURL: auth.currentUser.photoURL,
          uid: auth.currentUser.uid || null,
        }
      : null,
  },
  name: AUTH,
  reducers: {
    setAuth: (state, action: PayloadAction<User | null>) => {
      state.value = action.payload;
    },
  },
});
export const { setSearch } = searchSlice.actions;
export const searchReducer = searchSlice.reducer;

export const { setQuestionId } = questionIdSlice.actions;
export const questionIdReducer = questionIdSlice.reducer;

export const { setShowQns } = showAddQnsSlice.actions;
export const showAddQnsReducer = showAddQnsSlice.reducer;

export default questionSlice.reducer;
export const { setAuth } = authSlice.actions;
export const authReducer = authSlice.reducer;
