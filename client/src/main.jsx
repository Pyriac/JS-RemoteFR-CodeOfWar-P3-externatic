import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  redirect,
  RouterProvider,
} from "react-router-dom";

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
        action: async ({ request, params }) => {
          const formData = await request.formData();
          console.info(formData);
          switch (request.method.toLowerCase()) {
            case "put": {
              await myAxios.put(`/api/announce/${params.id}`, {
                job_title: formData.get("job_title"),
                location: formData.get("location"),
                description: formData.get("description"),
                min_salary: formData.get("min_salary"),
                max_salary: formData.get("max_salary"),
                benefits: formData.get("benefits"),
                job_type: formData.get("form_data"),
                telework: formData.get("telework"),
                id: params.id,
              });
              return redirect(`/`);
            }
            case "delete": {
              await myAxios.delete(`/api/announce/${params.id}`);
              return redirect(`/`);
            }

            default:
              throw new Response("", { status: 405 });
          }
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
