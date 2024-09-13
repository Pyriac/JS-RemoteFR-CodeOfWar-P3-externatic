import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";


import { getAnnounces, getContracts } from "./services/request";
import announceEditAction from "./services/announceEditAction";
import {  announceIdLoader, companyLoader, announceDetailLoader } from "./services/announceLoader";

import App from "./App";
import Announce from "./pages/Announce";
import EditAnnounce from "./pages/EditAnnounce";
import HomePage from "./pages/HomePage";
import AddAnnounce from "./pages/AddAnnounce";
import AnnounceDetail from "./pages/AnnounceDetail";


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
        loader: async ({ request }) => {
          const url = new URL(request.url);
          const contract = url.searchParams.get("contract");
          const result = {
            contracts: await getContracts(),
            announces: await getAnnounces(contract),
          };
          return result; 
        },
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
