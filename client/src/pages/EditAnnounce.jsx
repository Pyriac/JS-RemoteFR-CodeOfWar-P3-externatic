import { Form, useLoaderData } from "react-router-dom";

export default function EditAnnounce() {
  const loaderData = useLoaderData();

  return (
    <>
      <Form className="EditAnnounce_Form" method="put">
        <label htmlFor="job_title">Titre de l'annonce :</label>
        <input
          id="EditAnnounce_job_title"
          name="job_title"
          type="text"
          defaultValue={loaderData.job_title}
        />
        <label htmlFor="location">Localisation :</label>
        <input
          id="EditAnnounce_location"
          name="location"
          type="text"
          defaultValue={loaderData.location}
        />
        <label htmlFor="description">Description :</label>
        <textarea
          id="EditAnnounce_description"
          name="description"
          defaultValue={loaderData.description}
        />
        <label htmlFor="min_salary">Salaire minimum :</label>
        <input
          id="EditAnnounce_min_salary"
          name="min_salary"
          type="number"
          step="0.01"
          defaultValue={loaderData.min_salary}
        />
        <label htmlFor="max_salary"> Salaire maximum:</label>
        <input
          id="EditAnnounce_max_salary"
          name="max_salary"
          type="number"
          step="0.01"
          defaultValue={loaderData.max_salary}
        />
        <label htmlFor="benefits">Avantages :</label>
        <textarea
          id="EditAnnounce_benefits"
          name="benefits"
          defaultValue={loaderData.benefits}
        />
        <label htmlFor="job_type">Type de contrat :</label>
        <input
          id="EditAnnounce_job_type"
          name="job_type"
          type="text"
          defaultValue={loaderData.job_type}
        />
        <label htmlFor="telework">Télétravail :</label>
        <input
          id="EditAnnounce_telework"
          name="telework"
          type="text"
          defaultValue={loaderData.telework}
        />
        <button type="submit">Mettre à jour</button>
      </Form>
      <Form method="delete">
        <button type="submit"> Supprimer l'annonce</button>
      </Form>
    </>
  );
}
