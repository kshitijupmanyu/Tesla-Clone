import React from 'react';
import './App.css';
import Navbar from './Navbar';
import db from './firebase';

import Order from './Order';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Landing from './Landing';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
  },
  {
    path: "/order",
    element: <Order />,
  },
]);

function App() {
  return (
    <div className="App">
       <Navbar />
      <RouterProvider router={router}/>
    </div>
  );
}



export default App;
