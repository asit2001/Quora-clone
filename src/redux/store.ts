import { configureStore } from '@reduxjs/toolkit'
import QNAReducer,{questionIdReducer, searchReducer, showAddQnsReducer} from './reducer'
export  const store =  configureStore({
  reducer: {
    question:QNAReducer,
    search: searchReducer,
    questionId:questionIdReducer,
    showQnsModel:showAddQnsReducer
  },
})
export default store;
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch