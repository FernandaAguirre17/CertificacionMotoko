import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App';
import Create from './Create';
import './index.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import List from './List';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  }, 
  {
    path: "/Agregar vape",
    element: <Create />,
  }, 
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);

