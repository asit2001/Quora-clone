import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import LogIn from './pages/LogIn';
import Home from './pages/Home'
import Answer from './pages/Answer';
import Question from './pages/Question';
const router = createBrowserRouter([
  {
    path:"/",
    element:<Home/>
  },{
    path:"/login",
    element:<LogIn/>
  },{
    path:"/answer",
    element:<Answer/>
  },{
    path:"/question/:id",
    element:<Question/>
  }
]);
export default function App() {
  return(
    <RouterProvider router={router}/>
  )
}