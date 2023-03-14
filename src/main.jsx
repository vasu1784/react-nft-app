import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Signup from "./pages/Signup";
import Layout from "./components/Layout";
import Ranking from "./components/Ranking";
import Login from "./pages/Login";
import { ThemeContextProvider } from "./store/themeContext";
const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <App />,
        },
        {
          path: "/signup",
          element: <Signup />,
        },
        {
            path: "/ranking",
            element : <Ranking/>
        },
        {
          path: "/login",
          element : <Login/>
        }
      ],
    },
  ],
  {
    basename: "/react-nft-app/",
  }
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <ThemeContextProvider>
    <RouterProvider router={router} />
  </ThemeContextProvider>
);
