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

const loader = () => {
  if (!localStorage.getItem("user")) {
    return redirect("/login");
  }
  return null;
};
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
    element: <div>add-answer</div>,
    loader: loader,
  },
  {
    path: "/login",
    element: <div>login</div>,
  },
  {
    path: "/register/",
    element: <div>register</div>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
