import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import LogIn from './components/LogIn/LogIn';
import Home from './pages/Home'
const router = createBrowserRouter([
  {
    path:"/",
    element:<Home/>
  },{
    path:"/login",
    element:<LogIn/>
  }
]);
export default function App() {
  return(
    <RouterProvider router={router}/>
  )
}