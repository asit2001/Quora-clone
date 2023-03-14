import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  redirect,
} from "react-router-dom";

import App from "./components/App";
import AddQuestion from "./routes/AddQuestion";
import "./index.css";
import LogInPage from "./routes/LogInPage";
import RegisterPage from "./routes/RegisterPage";
import AddAnswers from "./routes/AddAnswers";

const loader = () => {
  if (!localStorage.getItem("user")) {
    return redirect("/login");
  }
  return null;
};
const logRegLoader = ()=>{
  if (localStorage.getItem("user")) {
    return redirect("/");
  }
  return null;
}
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/add-question/",
    element: <AddQuestion />,
    loader: loader,
  },
  {
    path: "/add-answer/",
    element: <AddAnswers/>,
    loader: loader,
  },
  {
    path: "/login",
    element:<LogInPage/>,
    loader: logRegLoader
  },
  {
    path: "/register/",
    element: <RegisterPage/>,
    loader:logRegLoader
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
