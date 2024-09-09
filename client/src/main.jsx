import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AddAnnounce from "./pages/AddAnnounce";
import announceIdLoader from "./services/announceIdLoader";
import announceEditAction from "./services/announceEditAction";
import companyLoader from "./services/companyLoader";
import App from "./App";
import EditAnnounce from "./pages/EditAnnounce";

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
