import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Navbar from "./Navbar";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import App from "./App";
import Detail from "./Pages/Detail/index.jsx";

// pages
import Home from "./Pages/Home";
import Quotes from "./Pages/Quotes";
import QuoteDetail from "./Pages/QuoteDetail";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/char/:id",
        element: <Detail />,
      },
      {
        path: "/quotes",
        element: <Quotes />,
      },
      {
        path: "/quotes/:id",
        element: <QuoteDetail />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
