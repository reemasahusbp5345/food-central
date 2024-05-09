 
import "./index.css";
import React, { Suspense, lazy, useState } from "react";

import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import Shimmer from "./Components/Shimmer";
import { Provider } from "react-redux";

import AppStore from "./Redux/AppStore";
import AppLayout from "./Components/AppLayout";
import Header from "./Components/Header";
import Body from "./Components/Body";
import Contact from "./Components/Contact";
import RestaurantMenu from "./Components/RestaurantMenu";
import Login from "./Components/Login";
import Cart from "./Components/Cart";
import Error from "./Components/Error";
import Footer from "./Components/Footer";

const About = lazy(() => import("./Components/About"));
const App = () => {
  const appRouter=createBrowserRouter([
    {
      path:"/",
      element:<AppLayout/>,
      children:[
        {
          path:"/",
          element:<Body/>
        },
        {
          path:"/about",
          element:<Suspense fallback={<Shimmer/>}><About/></Suspense> 
        },
        {
          path:"/contact",
          element:<Contact/>
        },
        {
          path:"/restaurant/:id",
          element:<RestaurantMenu/>
        },
        {
          path:"/login",
          element:<Login/>
        } ,
        {
          path:"/cart",
          element:<Cart/>
        }
      ],
      errorElement:<Error/>
    } ,
    {
      path:"/footer",
      element:<Footer/>
    }
  ])
  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default App;
