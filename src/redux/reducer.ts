import { createSlice,PayloadAction } from '@reduxjs/toolkit'
import {QUESTION_ID, QUESTION_LIST,SEARCH, SHOW_QNS_MODEL} from './actionsType'
import QNA, { QNAType } from '../utils/defaultData'
export const questionSlice = createSlice({
  name: QUESTION_LIST,
  initialState: {
    value: QNA,
  },
  reducers: {
    addQuestion: (state,action:PayloadAction<{question:string,questionedBy:string}>) => {
        state.value.push({answers:[],id:state.value.length +1 ,question:action.payload.question,questionedBy:action.payload.questionedBy});
        localStorage.setItem("questionAndAnswers",JSON.stringify([...state.value]));
        
    },
    addAnswer:(state,action:PayloadAction<{id:number,value:QNAType}>)=>{
        state.value[action.payload.id] = action.payload.value;
        localStorage.setItem("questionAndAnswers",JSON.stringify([...state.value]));
    },
    upvote:(state,action:PayloadAction<{qnsId:number,ansId:number}>)=>{
        state.value[action.payload.qnsId].answers[action.payload.ansId].vote++; 
        localStorage.setItem("questionAndAnswers",JSON.stringify([...state.value]));
    },
    downvote:(state,action:PayloadAction<{qnsId:number,ansId:number}>)=>{
        state.value[action.payload.qnsId].answers[action.payload.ansId].vote--; 
        localStorage.setItem("questionAndAnswers",JSON.stringify([...state.value]));
    },
  },
})

const searchSlice = createSlice({
    name: SEARCH,
    initialState:{
        value:"",
    },
    reducers:{
        setSearch:(state,action:PayloadAction<string>)=>{
            state.value = action.payload
        }
    }
})
const questionIdSlice = createSlice({
    name: QUESTION_ID,
    initialState:{
        value:-1,
    },
    reducers:{
        setQuestionId:(state,action:PayloadAction<number>)=>{
            state.value = action.payload
        }
    }
})
const showAddQnsSlice = createSlice({
    name: SHOW_QNS_MODEL,
    initialState:{
        value :false
    },
    reducers:{
        setShowQns:(state,action:PayloadAction<boolean>)=>{
            state.value = action.payload;
        }
    }
})
export const {setSearch} = searchSlice.actions
export const searchReducer = searchSlice.reducer

export const {setQuestionId} = questionIdSlice.actions
export const questionIdReducer = questionIdSlice.reducer

export const {setShowQns} = showAddQnsSlice.actions
export const showAddQnsReducer = showAddQnsSlice.reducer

export const { addQuestion ,addAnswer,downvote,upvote} = questionSlice.actions
export default questionSlice.reducer