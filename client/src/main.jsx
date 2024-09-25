import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AuthCompanyProvider } from "./context/AuthContext";

import { AuthProvider } from "./context/AuthentificationContext";
import announceEditAction from "./services/announceEditAction";
import candidateActions from "./services/candidateAction";
import candidateLoader from "./services/candidateLoader";
import companyLoader from "./services/companyLoader";
import {
  announceIdLoader,
  announceDetailLoader,
  getAnnounces, 
  getContracts,
  getAnnouncesByCompany,
} from "./services/announceLoader";

import companyAction from "./services/companyAction";
import getAutorization from "./services/request";

import App from "./App";
import Announce from "./pages/Announce";
import EditAnnounce from "./pages/EditAnnounce";
import HomePage from "./pages/HomePage";
import AddAnnounce from "./pages/AddAnnounce";
import AnnounceDetail from "./pages/AnnounceDetail";
import RegisterCompany from "./pages/RegisterCompany";
import EditCandidate from "./pages/EditCandidate";
import CompanyAnnounce from "./pages/CompanyAnnounce";
import Legal from "./pages/Footer/Legal";
import CGU from "./pages/Footer/Cgu";
import Confidential from "./pages/Footer/Confidential";
import Charter from "./pages/Footer/Charter";
import CookiesPolicy from "./pages/Footer/CookiesPolicy";
import RegisterCandidat from "./pages/RegisterCandidat";
import LoginCandidate from "./pages/LoginCandidate";
import LoginCompany from "./pages/LoginCompany";

import Forbidden from "./pages/Forbidden";
import EditCompany from "./pages/EditCompany";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />,
        loader: companyLoader.AllCompanyLoader,
      },
      {
        path: "login/company",
        element: <LoginCompany />,
        action: companyAction,
      },
      {
        path: "company/:id/announce",
        element: <CompanyAnnounce />,
        loader: getAnnouncesByCompany,
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
            isConnected: await getAutorization(),
            contracts: await getContracts(),
            announces: await getAnnounces(contract),
          };
          return result;
        },
        errorElement: <Forbidden />,
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
        path: "register/company",
        element: <RegisterCompany />,
        action: companyAction,
      },
      {
        path: "register/candidate",
        element: <RegisterCandidat />,
        action: candidateActions,
      },
      {
        path: "/login/candidate",
        element: <LoginCandidate />,
      },
      {
        path: "edit/candidate/:id",
        element: <EditCandidate />,
        loader: candidateLoader.CandidateDetailLoader,
        action: candidateActions,
      },

      {
        path: "edit/company/:id",
        element: <EditCompany />,
        loader: companyLoader.CompanyDetailLoader,
        action: companyAction,
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
    <AuthProvider>
      <AuthCompanyProvider>
        <RouterProvider router={router} />
      </AuthCompanyProvider>
    </AuthProvider>
  </React.StrictMode>
);
