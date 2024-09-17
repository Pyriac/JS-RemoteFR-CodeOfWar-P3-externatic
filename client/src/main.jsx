import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import announceEditAction from "./services/announceEditAction";
import candidateActions from "./services/candidateAction";

import {
  announceIdLoader,
  companyLoader,
  announceDetailLoader,
  getAnnounces,
  getContracts,
} from "./services/announceLoader";

import companyAction from "./services/companyAction";

import App from "./App";
import Announce from "./pages/Announce";
import EditAnnounce from "./pages/EditAnnounce";
import HomePage from "./pages/HomePage";
import AddAnnounce from "./pages/AddAnnounce";
import AnnounceDetail from "./pages/AnnounceDetail";
import RegisterCompany from "./pages/RegisterCompany";
import EditCandidate from "./pages/EditCandidate";
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
        path: "/AddAnnounce",
        element: <AddAnnounce />,
        action: announceEditAction,
      },
      {
        path: "announce/:id",
        element: <AnnounceDetail />,
        loader: announceDetailLoader,
      },
      {
        path: "registerCompany",
        element: <RegisterCompany />,
        action: companyAction,
      },
      {
        path: "register/candidate",
        element: <RegisterCandidat />,
        action: candidateActions,
      },
      {
        path: "edit/candidate",
        element: <EditCandidate />,
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
