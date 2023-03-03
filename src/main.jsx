import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Signup from "./pages/Signup";
import Layout from "./components/Layout";
import Ranking from "./components/Ranking";

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
        }
      ],
    },
  ],
  {
    basename: "/react-nft-app/",
  }
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
