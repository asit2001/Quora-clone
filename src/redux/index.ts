import {QUESTION_LIST,AUTH,UPDATE_ANSWER} from './actionsType'
import {useAppDispatch,useAppSelector,} from './hooks'
import {setQuestionId,setShowQns,authReducer,setAuth,setSelected,selectAnswerReducer,questionIdReducer,setQuestionAndAnswerKey} from './reducer'
import {addAnswerThunk,addQuestionThunk,fetchQNAThunk,voteThunk,removeAnsThunk} from './thunks';
export {QUESTION_LIST,useAppDispatch,useAppSelector,setQuestionId,setShowQns,authReducer,AUTH};
export {addAnswerThunk,addQuestionThunk,fetchQNAThunk,voteThunk,setAuth,setSelected,selectAnswerReducer}
export {UPDATE_ANSWER,questionIdReducer,setQuestionAndAnswerKey,removeAnsThunk};