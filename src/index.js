import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';

import App from './components/App';

const router = createBrowserRouter([{
  path:"/",
  element : <App/>
},{
  path:"/add-question/",
  element : <div>add-question</div>
},{
  path:"/add-answer/",
  element : <div>add-answer</div>
},{
  path:"/login",
  element : <div>login</div>
}
,{
  path:"/register/",
  element : <div>register</div>
}
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
