import { Form, useLoaderData } from "react-router-dom";
import FormAnnounce from "../components/FormAnnounce";

export default function EditAnnounce() {
  const loaderData = useLoaderData();

  return (
    <main className="EditAnnounce_main">
      <Form className="EditAnnounce_Form" method="put">
        <FormAnnounce announce={loaderData} />
        <button type="submit">Mettre à jour l'annonce</button>
      </Form>
      <h3>Vous avez trouvé l'employé idéal ?</h3>
      <Form method="delete">
        <button type="submit" className="EditAnnounce_delete">
          {" "}
          Supprimer l'annonce
        </button>
      </Form>
    </main>
  );
}
