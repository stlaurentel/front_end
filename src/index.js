import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Wrapper from './Wrapper';
import Stores from './Stores';
import SingleStore from './SingleStore';
import NewStore from './NewStore';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Wrapper />,
    children: [
      {
        path: "/stores",
        loader: fetchStores,
        element: <Stores />,
      },
      {
        path: "/stores/:store_id",
        loader: getSingleStore,
        element: 
            <SingleStore/>,
        
      },
      {
        path: "/stores/new",
        element: 
            <NewStore />
        ,
      },/*
      {
        path: "/stores/:store_id/items/:item_id",
        loader: getSingleItem,
        element: 
            <SingleItem/>,
        
      },
      {
        path: "/stores/:store_id/items/new",
        element: 
            <NewItem/>,
        
      },*/
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} fallbackElement={<div>Loading...</div>} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
