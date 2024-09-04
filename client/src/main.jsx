import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import announceLoader from "./services/announceLoader";
import announceIdLoader from "./services/announceIdLoader";
import announceEditAction from "./services/announceEditAction";
import companyLoader from "./services/companyLoader";

import App from "./App";
import Announce from "./pages/Announce";
import EditAnnounce from "./pages/EditAnnounce";
import HomePage from "./pages/HomePage";
import AddAnnounce from "./pages/AddAnnounce";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "announce/:id/edit",
        element: <EditAnnounce />,
        loader: announceIdLoader,
        action: announceEditAction,
      },
      {
        path: "announce",
        element: <Announce />,
        loader: announceLoader,
      },
      {
        path: "/AddAnnounce",
        element: <AddAnnounce />,
        loader: companyLoader,
        action: announceEditAction,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
