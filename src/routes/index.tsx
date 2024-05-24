// ----------- import external dependencies -------------
import React from "react";
import { createBrowserRouter } from "react-router-dom";

// ------------ import internal dependencies -------------
import Gallery from "../views/gallery";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Gallery />,
  },
]);
