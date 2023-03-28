import {createBrowserRouter,redirect,RouterProvider} from 'react-router-dom'
import LogIn from './pages/LogIn';
import Home from './pages/Home'
import Answer from './pages/Answer';
import Question from './pages/Question';
const loggedInLoader = ()=>{
  if (localStorage.getItem("user")) {
    return redirect("/");
  }
  return null;
}
const NotLoggedInLoader = ()=>{
  if (!localStorage.getItem("user")) {
    return redirect("/login")
  }
  return null;
}
const router = createBrowserRouter([
  {
    path:"/",
    element:<Home/>,
    loader: NotLoggedInLoader
  },{
    path:"/login",
    element:<LogIn/>,
    loader: loggedInLoader
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
export default function App() {
  return(
    <RouterProvider router={router}/>
  )
}