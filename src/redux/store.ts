import { configureStore } from '@reduxjs/toolkit'
import QNAReducer,{searchReducer} from './reducer'
export  const store =  configureStore({
  reducer: {
    question:QNAReducer,
    search: searchReducer
  },
})
export default store;
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch