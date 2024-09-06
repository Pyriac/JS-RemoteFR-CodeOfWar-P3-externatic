import { Form, useLoaderData } from "react-router-dom";
import FormAnnounce from "../components/FormAnnounce";

export default function EditAnnounce() {
  const loaderData = useLoaderData();

  const handleSubmit = (e) => {
    const jobTitleValue = e.target.job_title.value;
    const locationValue = e.target.location.value;
    const teleworkValue = e.target.telework.value;
    const jobTypeValue = e.target.job_type.value;
    const descValue = e.target.description.value;
    const benefValue = e.target.benefits.value;
    const minSalaryValue = e.target.min_salary.value;
    const maxSalaryValue = e.target.max_salary.value;
    if (
      teleworkValue === "" ||
      locationValue === "" ||
      jobTypeValue === "" ||
      jobTitleValue === "" ||
      descValue === "" ||
      benefValue === "" ||
      minSalaryValue === "" ||
      maxSalaryValue === ""
    ) {
      e.preventDefault();
      alert("Veuillez sélectionner des valeurs valides aux champs indiqués");
    }
  };

  return (
    <main className="EditAnnounce_main">
      <Form className="EditAnnounce_Form" method="put" onSubmit={handleSubmit}>
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
