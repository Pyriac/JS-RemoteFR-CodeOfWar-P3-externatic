import { Form } from "react-router-dom";
import FormAnnounce from "../components/FormAnnounce";

function AddAnnounce() {
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
      <Form className="EditAnnounce_Form" method="post" onSubmit={handleSubmit}>
        <FormAnnounce />
        <button type="submit">Valider</button>
      </Form>
    </main>
  );
}
export default AddAnnounce;
