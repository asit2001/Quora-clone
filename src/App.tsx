import {createBrowserRouter,redirect,RouterProvider} from 'react-router-dom'
import LogIn from './pages/LogIn';
import Home from './pages/Home'
import Answer from './pages/Answer';
import Question from './pages/Question';
import { userData } from './firebase';
import { useAppDispatch, useAppSelector } from './redux';
import { setAuth, fetchQNAThunk } from './redux';
import { useEffect } from 'react';

export default function App() {
  const [USER,data] = useAppSelector(state=>[state.auth.value,state.question.value]);
  const dispatch = useAppDispatch()
  
  useEffect(()=>{
    if (Object.keys(data).length===0) {
      dispatch(fetchQNAThunk());
    }
  },[data,dispatch])
  const NotLoggedInLoader = async()=>{
    const user = await userData(USER);
    dispatch(setAuth(user));
    if (!user) {
      return redirect("/login");
    }
    return null;
  }
  const LoggedInLoader = async()=>{
    const user = await userData(USER);
    dispatch(setAuth(user));
    if (user) {
      return redirect("/");
    }
    return null;
  }

  const router = createBrowserRouter([
    {
      path:"/",
      element:<Home/>,
      loader: NotLoggedInLoader,
      
    },{
      path:"/login",
      element:<LogIn/>,
      loader: LoggedInLoader
    },{
      path:"/answer",
      element:<Answer/>,
      loader: NotLoggedInLoader
    },{
      path:"/question/:id",
      element:<Question/>,
      loader: NotLoggedInLoader
    }
  ]);
  return(
    <RouterProvider router={router}/>
  )
}