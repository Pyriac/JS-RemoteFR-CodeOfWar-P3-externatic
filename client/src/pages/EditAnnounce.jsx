import { Form, useLoaderData } from "react-router-dom";

export default function EditAnnounce() {
  const loaderData = useLoaderData();

  return (
    <main className="EditAnnounce_main">
      <Form className="EditAnnounce_Form" method="put">
        <div className="EditAnnounce_div">
          <h2>Informations générales</h2>
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
        </div>
        <div className="EditAnnounce_div">
          <h2>Description</h2>
          <label htmlFor="description" className="EditAnnounce_display_none">
            Description :
          </label>
          <textarea
            id="EditAnnounce_description"
            name="description"
            defaultValue={loaderData.description}
            rows={5}
          />
        </div>
        <div className="EditAnnounce_div">
          <h2>Détail rémunération</h2>
          <label htmlFor="benefits">Avantages :</label>
          <textarea
            id="EditAnnounce_benefits"
            name="benefits"
            defaultValue={loaderData.benefits}
          />
          <p>Salaire :</p>
          <div className="EditAnnounce_fork">
            <div>
              <p className="EditAnnounce_mobile_display">Min:</p>
              <p className="EditAnnounce_desktop_display">Minimum :</p>
              <label htmlFor="min_salary" className="EditAnnounce_display_none">
                Salaire minimum :
              </label>
              <input
                id="EditAnnounce_min_salary"
                name="min_salary"
                type="number"
                step="0.01"
                defaultValue={loaderData.min_salary}
              />
            </div>
            <div>
              <p className="EditAnnounce_mobile_display">Max:</p>
              <p className="EditAnnounce_desktop_display">Maximum</p>
              <label htmlFor="max_salary" className="EditAnnounce_display_none">
                {" "}
                Salaire maximum:
              </label>
              <input
                id="EditAnnounce_max_salary"
                name="max_salary"
                type="number"
                step="0.01"
                defaultValue={loaderData.max_salary}
              />
            </div>
          </div>
        </div>
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
