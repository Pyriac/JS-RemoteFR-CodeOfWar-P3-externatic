import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";



import announceEditAction from "./services/announceEditAction";
import { announceLoader, announceIdLoader, companyLoader, announceDetailLoader } from "./services/announceLoader";

import App from "./App";
import Announce from "./pages/Announce"
import EditAnnounce from "./pages/EditAnnounce";
import AddAnnounce from "./pages/AddAnnounce";
import AnnounceDetail from "./pages/AnnounceDetail";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
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
        path: "announce/:id", 
        element: <AnnounceDetail />,
        loader: announceDetailLoader, 
      },

    ],
  },
  {
    path: "/AddAnnounce",
    element: <AddAnnounce />,
     loader: companyLoader,
     action: announceEditAction,

  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
