import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Layout from "./Layout.jsx";
import Home from "../src/components/Home/Home.jsx";
import About from "../src/components/About/About.jsx";
import Contact from "../src/components/Contact/Contact.jsx";
import User from "../src/components/User/User.jsx";
import Github from "../src/components/Github/Github.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "", element: <Home /> },
      { path: "about", element: <About /> },
      { path: "contactus", element: <Contact /> },
      { path: "user/:userid", element: <User /> },
      { path: "github", element: <Github /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
