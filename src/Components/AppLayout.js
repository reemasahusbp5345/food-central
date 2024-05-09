import React, { Suspense, lazy, useState } from "react";
import Cart from "./Cart";
import Error from "./Error";
import Contact from "./Contact";
import RestaurantMenu from "./RestaurantMenu";
import Login from "./Login";
import Shimmer from "./Shimmer";
import Body from "./Body";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";

import Footer from "./Footer";
import Header from "./Header";
 
const AppLayout = () => {
     return(
      <>
      <Header/>
      <Outlet/>
      <Footer/>
      </>
     )
};

export default AppLayout;