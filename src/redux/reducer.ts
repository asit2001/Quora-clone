import { createSlice,PayloadAction } from '@reduxjs/toolkit'
import {QUESTION_LIST,SEARCH} from './actionsType'
import QNA from '../utils/defaultData'
export const questionSlice = createSlice({
  name: QUESTION_LIST,
  initialState: {
    value: QNA,
  },
  reducers: {
    addQuestion: (state,action) => {
        state.value.push(action.payload);
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

export const {setSearch} = searchSlice.actions
export const searchReducer = searchSlice.reducer


export const { addQuestion } = questionSlice.actions
export default questionSlice.reducer