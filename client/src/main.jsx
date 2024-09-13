import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import announceEditAction from "./services/announceEditAction";
import {
  announceLoader,
  announceIdLoader,
  companyLoader,
  announceDetailLoader,
} from "./services/announceLoader";

import App from "./App";
import Announce from "./pages/Announce";
import EditAnnounce from "./pages/EditAnnounce";
import HomePage from "./pages/HomePage";
import AddAnnounce from "./pages/AddAnnounce";
import AnnounceDetail from "./pages/AnnounceDetail";
import Legal from "./pages/Footer/Legal";
import CGU from "./pages/Footer/Cgu";
import Confidential from "./pages/Footer/Confidential";
import Charter from "./pages/Footer/Charter";
import CookiesPolicy from "./pages/Footer/CookiesPolicy";
import RegisterCandidat from "./pages/RegisterCandidat";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />,
        loader: companyLoader,
      },
      {
        path: "announce/:id/edit",
        element: <EditAnnounce />,
        loader: announceIdLoader,
        action: announceEditAction,
      },
      {
        path: "/AddAnnounce",
        element: <AddAnnounce />,
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
      {
        path: "register/candidate",
        element: <RegisterCandidat />,
      },
      {
        path: "pages/legal",
        element: <Legal />,
      },
      {
        path: "pages/CGU",
        element: <CGU />,
      },
      {
        path: "pages/privacy-policy",
        element: <Confidential />,
      },
      {
        path: "pages/charter",
        element: <Charter />,
      },
      {
        path: "pages/cookies-policy",
        element: <CookiesPolicy />,
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
