import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import myAxios from "./services/myAxios";

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
        loader: async ({ params }) => {
          const reponse = await myAxios.get(`/api/announce/${params.id}`);

          return reponse.data;
        },
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
